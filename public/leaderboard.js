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

loadLeaderboard();