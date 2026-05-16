<<<<<<< HEAD
async function loadLeaderboard() {

    try {

        fetch("https://creative-coding-play-ground.onrender.com/rankings")

        let users = await res.json();

        let output = "";

        users.forEach((user, index) => {

            output += `
            <div class="row">

                <div>
                    #${index + 1}
                </div>

                <div>
                    ${user.username}
                </div>

                <div>
                    ${user.points} pts
                </div>

            </div>
            `;
        });

        document.getElementById("leaderboard").innerHTML = output;

    } catch (err) {

        console.log("Leaderboard error");

    }

}

=======
async function loadLeaderboard() {

    try {

        let res = await fetch("/rankings");

        let users = await res.json();

        let output = "";

        users.forEach((user, index) => {

            output += `
            <div class="row">

                <div>
                    #${index + 1}
                </div>

                <div>
                    ${user.username}
                </div>

                <div>
                    ${user.points} pts
                </div>

            </div>
            `;
        });

        document.getElementById("leaderboard").innerHTML = output;

    } catch (err) {

        console.log("Leaderboard error");

    }

}

>>>>>>> a414f257ee4008c4bf969ab87ceea62acde97535
loadLeaderboard();