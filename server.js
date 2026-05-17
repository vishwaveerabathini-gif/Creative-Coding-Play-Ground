const Chat = require("./models/Chat");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/HomePage.html");
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(session({
    secret: "creativecodingsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

function isLoggedIn(req, res, next) {

    if (req.session.user) {
        next();
    } else {
        res.status(401).json({
            msg: "Login required"
        });
    }
}

const User = require("./models/User");
const questions = require("./questions");

/* ================= SIGNUP ================= */

app.post("/signup", async (req, res) => {

    try {

        const { username, password } = req.body;

        let user = await User.findOne({ username });

        if (user) {
            return res.json({ msg: "User already exists" });
        }

        await User.create({
            username,
            password
        });

        res.json({ msg: "Signup successful" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* ================= LOGIN ================= */

app.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;

        let user = await User.findOne({ username });

        if (!user) {
            return res.json({ msg: "User not found" });
        }

        if (user.password === password) {
            req.session.user = user.username;
            res.json({ msg: "Login success" });

        } else {
            res.json({ msg: "Wrong password" });
        }

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* ================= PROFILE ================= */

app.get("/profile/:username", isLoggedIn, async (req, res) => {

    try {

        let user = await User.findOne(
            { username: req.params.username },
            { password: 0, _id: 0 }
        );

        res.json(user || {});

    } catch (err) {
        res.json({});
    }

});

app.post("/updateProfile", isLoggedIn, async (req, res) => {

    try {

        const {
            username,
            email,
            address,
            profilePhoto,
            bio
        } = req.body;

        await User.updateOne(
            { username },
            {
                email,
                address,
                profilePhoto,
                bio
            }
        );

        res.json({ msg: "Profile updated" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* ================= USERS ================= */

app.get("/allUsers", isLoggedIn, async (req, res) => {

    try {

        let users = await User.find(
            {},
            { username: 1, _id: 0 }
        );

        res.json(users);

    } catch (err) {
        res.json([]);
    }

});

/* ================= FOLLOW SYSTEM ================= */

app.post("/followUser", isLoggedIn, async (req, res) => {

    try {

        const { username, targetUser } = req.body;

        if (username === targetUser) {
            return res.json({ msg: "Cannot follow yourself" });
        }

        /* add following */
        await User.updateOne(
            { username },
            { $addToSet: { following: targetUser } }
        );

        /* add follower */
        await User.updateOne(
            { username: targetUser },
            {
                $addToSet: { followers: username },
                $push: {
                    notifications:
                        username + " started following you"
                }
            }
        );

        /* mutual follow = friends */
        let target = await User.findOne({
            username: targetUser
        });

        if (target.following.includes(username)) {

            await User.updateOne(
                { username },
                { $addToSet: { friends: targetUser } }
            );

            await User.updateOne(
                { username: targetUser },
                { $addToSet: { friends: username } }
            );

            await User.updateOne(
                { username },
                {
                    $push: {
                        notifications:
                            "You and " + targetUser + " are now friends"
                    }
                }
            );

            await User.updateOne(
                { username: targetUser },
                {
                    $push: {
                        notifications:
                            "You and " + username + " are now friends"
                    }
                }
            );

        }

        res.json({ msg: "Followed" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

app.post("/unfollowUser", isLoggedIn, async (req, res) => {

    try {

        const { username, targetUser } = req.body;

        /* remove follow */
        await User.updateOne(
            { username },
            { $pull: { following: targetUser } }
        );

        await User.updateOne(
            { username: targetUser },
            { $pull: { followers: username } }
        );

        /* remove friend if existed */
        await User.updateOne(
            { username },
            { $pull: { friends: targetUser } }
        );

        await User.updateOne(
            { username: targetUser },
            { $pull: { friends: username } }
        );

        res.json({ msg: "Unfollowed" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

app.get("/followers/:username", isLoggedIn, async (req, res) => {

    try {

        let user = await User.findOne({
            username: req.params.username
        });

        res.json(user?.followers || []);

    } catch (err) {
        res.json([]);
    }

});

app.get("/following/:username", isLoggedIn, async (req, res) => {

    try {

        let user = await User.findOne({
            username: req.params.username
        });

        res.json(user?.following || []);

    } catch (err) {
        res.json([]);
    }

});

/* ================= FRIENDS ================= */

app.post("/addFriend", isLoggedIn, async (req, res) => {

    try {

        const { username, friendName } = req.body;

        if (username === friendName) {
            return res.json({ msg: "Cannot add yourself" });
        }

        await User.updateOne(
            { username },
            { $addToSet: { friends: friendName } }
        );

        await User.updateOne(
            { username: friendName },
            { $addToSet: { friends: username } }
        );

        res.json({ msg: "Friend added" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

app.post("/removeFriend", isLoggedIn, async (req, res) => {

    try {

        const { username, friendName } = req.body;

        await User.updateOne(
            { username },
            { $pull: { friends: friendName } }
        );

        await User.updateOne(
            { username: friendName },
            { $pull: { friends: username } }
        );

        res.json({ msg: "Friend removed" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

app.get("/friends/:username", isLoggedIn, async (req, res) => {

    try {

        let user = await User.findOne({
            username: req.params.username
        });

        res.json(user?.friends || []);

    } catch (err) {
        res.json([]);
    }

});

/* ================= NOTIFICATIONS ================= */

app.get("/notifications/:username", isLoggedIn, async (req, res) => {

    try {

        let user = await User.findOne({
            username: req.params.username
        });

        res.json(user?.notifications || []);

    } catch (err) {
        res.json([]);
    }

});

app.post("/clearNotifications", isLoggedIn, async (req, res) => {

    try {

        const { username } = req.body;

        await User.updateOne(
            { username },
            { $set: { notifications: [] } }
        );

        res.json({ msg: "Cleared" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* ================= HELP REQUEST ================= */

app.post("/sendHelp", isLoggedIn, async (req, res) => {

    try {

        const {
            from, to, question, desc, example
        } = req.body;

        await User.updateOne(
            { username: to },
            {
                $push: {
                    helpRequests: {
                        from,
                        question,
                        desc,
                        example,
                        time: Date.now(),
                        status: "pending"
                    },
                    notifications:
                        from + " needs help in " + question
                }
            }
        );

        res.json({ msg: "Help request sent" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

app.get("/helpRequests/:username", isLoggedIn, async (req, res) => {

    try {

        let user = await User.findOne({
            username: req.params.username
        });

        res.json(user?.helpRequests || []);

    } catch (err) {
        res.json([]);
    }

});

app.post("/clearOneHelpRequest", isLoggedIn, async (req, res) => {

    try {

        const { username, time } = req.body;

        await User.updateOne(
            { username },
            {
                $pull: {
                    helpRequests: { time: time }
                }
            }
        );

        res.json({ msg: "Request cleared" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* clear after solve */
app.post("/clearSolvedHelpRequest", isLoggedIn, async (req, res) => {

    try {

        const { username, question } = req.body;

        await User.updateOne(
            { username },
            {
                $pull: {
                    helpRequests: { question: question }
                }
            }
        );

        res.json({ msg: "Solved request cleared" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* ================= SOLVE ================= */

app.post("/solveQuestion", isLoggedIn, async (req, res) => {

    try {

        const {
            username,
            questionId,
            points
        } = req.body;

        let user = await User.findOne({
            username
        });

        if (!user) {
            return res.json({
                msg: "User not found"
            });
        }

        if (user.solvedQuestions.includes(questionId)) {
            return res.json({
                msg: "Already solved",
                already: true,
                total: user.points
            });
        }

        await User.updateOne(
            { username },
            {
                $addToSet: {
                    solvedQuestions: questionId
                },
                $inc: {
                    points: points
                },
                $pull: {
                    helpRequests: { question: questionId }
                }
            }
        );

        let updated = await User.findOne({
            username
        });

        res.json({
            msg: "Points added",
            already: false,
            total: updated.points
        });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});

/* ================= RANKINGS ================= */

app.get("/rankings", isLoggedIn, async (req, res) => {

    try {

        let users = await User.find(
            {},
            { password: 0 }
        ).sort({ points: -1 });

        res.json(users);

    } catch (err) {
        res.json([]);
    }

});

/* ================= LANGUAGES ================= */

app.get("/languages", (req, res) => {

    res.json([
        "Java",
        "Python",
        "Cpp",
        "Web"
    ]);

});

/* ================= TOPICS ================= */

app.get("/topics/:lang", (req, res) => {

    const topics = {

        Java: [
            "OOP", "Arrays", "Strings",
            "Linked List", "Stack",
            "Queue", "Trees", "Graphs",
            "Recursion", "Dynamic Programming"
        ],

        Python: [
            "Basics", "Python_Loops",
            "Python_Functions",
            "Python_Lists",
            "Python_Strings",
            "Python_Dictionary",
            "Python_Linked List",
            "Python_Trees",
            "Python_Graphs",
            "Python_Recursion"
        ],

        Cpp: [
            "Cpp_Pointers", "Cpp_STL",
            "Cpp_Arrays", "Cpp_Strings",
            "Cpp_Linked List",
            "Cpp_Stack", "Cpp_Queue",
            "Cpp_Trees", "Cpp_Graphs",
            "Cpp_DP"
        ],

        Web: [
            "HTML", "CSS", "JavaScript",
            "React", "Node.js",
            "Express.js", "MongoDB",
            "SQL", "API",
            "Responsive Design"
        ]

    };

    res.json(topics[req.params.lang] || []);

});

/* ================= QUESTIONS ================= */

app.get("/questions/:topic", (req, res) => {
    res.json(
        questions[req.params.topic] || []
    );
});

/* ================= DELETE ================= */

app.get("/deleteAllUsers", async (req, res) => {
    await User.deleteMany({});
    res.send("All users deleted");
});
/* ================= ACCEPT HELP ================= */

app.post("/acceptHelp", isLoggedIn, async (req, res) => {

    try {

        const { username, time } = req.body;

        let user = await User.findOne({
            username: username
        });

        let roomId = "";
        let senderName = "";

        user.helpRequests.forEach(item => {

            if (item.time == time) {

                item.status = "accepted";

                senderName = item.from;

                roomId =
                    item.question + "_" +
                    [item.from, username]
                        .sort()
                        .join("_");
            }

        });

        if (roomId) {

            if (!user.activeChats.includes(roomId)) {
                user.activeChats.push(roomId);
            }

            let sender = await User.findOne({
                username: senderName
            });

            if (sender) {

                if (!sender.activeChats.includes(roomId)) {
                    sender.activeChats.push(roomId);
                }

                await sender.save();
            }
        }

        await user.save();

        res.json({ msg: "Accepted" });

    } catch (err) {

        res.json({ msg: "Error" });
    }

});


/* ================= REJECT HELP ================= */

app.post("/rejectHelp", isLoggedIn, async (req, res) => {

    try {

        const { username, time } = req.body;

        await User.updateOne(
            { username },
            {
                $pull: {
                    helpRequests: { time: time }
                }
            }
        );

        res.json({ msg: "Rejected" });

    } catch (err) {
        res.json({ msg: "Error" });
    }

});
/* ================= SERVER ================= */
/* ================= SEND MESSAGE ================= */

app.post("/sendMessage", isLoggedIn, async (req, res) => {

    try {

        const { roomId, sender, message } = req.body;

        await Chat.create({
            roomId: roomId,
            sender: sender,
            message: message,
            time: Date.now()
        });

        res.json({ msg: "Sent" });

    } catch (err) {

        res.json({ msg: "Error" });

    }

});
/* ================= LOAD MESSAGES ================= */

app.get("/messages/:roomId", isLoggedIn, async (req, res) => {

    try {

        let msgs = await Chat.find({
            roomId: req.params.roomId
        }).sort({ time: 1 });

        res.json(msgs);

    } catch (err) {

        res.json([]);

    }

});
app.post("/eligibleHelpers", isLoggedIn, async (req, res) => {

    try {

        const { username, question } = req.body;

        let user = await User.findOne({ username });

        let friends = user.friends || [];
        let eligible = [];

        for (let f of friends) {

            let roomId =
                question + "_" +
                [username, f].sort().join("_");

            let hasRoom =
                user.activeChats.includes(roomId);

            if (!hasRoom) {
                eligible.push(f);
            }

        }

        res.json(eligible);

    } catch (err) {
        res.json([]);
    }

});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});

