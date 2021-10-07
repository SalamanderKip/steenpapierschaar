import "./index.scss";

class game {
    constructor() {

        let elmentTimer = document.getElementById("timer")
        let elementPlayer1 = document.getElementById("player1")
        let elementPlayer2 = document.getElementById("player2")
        let elementWinner = document.getElementById("winner")

        elmentTimer.innerHTML = 0
        elementPlayer1.innerHTML = "-"
        elementPlayer2.innerHTML = "-"
        elementWinner.innerHTML = "Get ready to start"

        let player1 = ""
        let player2 = ""
        let timer = 5
        let readyToChoose = false;

        function winner() {
            // 1/8 steen 2/9 papier 3/0 schaar
            if ((player1 == "") && (player2 == "")) {
                return "tie"
            }
            if (player1 == "") {
                return "player2 won"
            }
            if (player2 == "") {
                return "player 1 won"
            }
            if ((player1 == "1") && (player2 == "8")) {
                return "tie"
            }
            if ((player1 == "2") && (player2 == "9")) {
                return "player2 won"
            }
            if ((player1 == "2") && (player2 == "0")) {
                return "player1 won"
            }
            if ((player1 == "3") && (player2 == "8")) {
                return "player1 won"
            }
            if ((player1 == "3") && (player2 == "9")) {
                return "tie"
            }
            if ((player1 == "3") && (player2 == "0")) {
                return "player2 won"
            }
            if ((player1 == "3") && (player2 == "8")) {
                return "player2 won"
            }
            if ((player1 == "3") && (player2 == "9")) {
                return "player1 won"
            }
            if ((player1 == "3") && (player2 == "0")) {
                return "tie"
            }
        }

        function countDown() {
            readyToChoose = false
            if (timer == 0) {
                gameStart()
            }
            else {
                timer = timer - 1;
                elementTimer.innerHTML = timer
                setTimeout(countDown, 500)
            }
        }

        function gameStart() {
            readyToChoose = true
            timer = 3
            elementWinner.innerHTML = "Game started"
            gameCountDown()
        }

        function gameCountDown() {
            if (timer == 0) {
                readyToChoose = false
                elementWinner.innerHTML = winner()
                elementPlayer1.innerHTML = player1
                elementPlayer2.innerHTML = player2
            } else {
                timer = timer - 1
                elementTimer.innerHTML = timer
                setTimeout(gameCountDown, 500)

            }
        }
        console.log("test");
        document.addEventListener('keydown', (event) => {
            console.log(event.key);
            switch (event.key) {
                case ' ':
                    countDown()
                    break;
                case '1':
                    player1 = "1"
                    break;
                case '2':
                    player1 = "2"
                    break;
                case '3':
                    player1 = "3"
                    break;
                case '8':
                    player2 = "8"
                    break;
                case '9':
                    player2 = "9"
                    break;
                case '0':
                    player2 = "0"
                    break;
                default:
                    console.log(`key: ${event.key} was not found`)
                    break;
            }
        })

        this.listnersadd()
    }
    listnersadd() {
        
    }


}


const a = new game()