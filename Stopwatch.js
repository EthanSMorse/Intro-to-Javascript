let minutes = 00

let seconds = 00

let milliseconds = 0

let digits = document.getElementById('digits')

let startButton = document.getElementById('start_button')

let interval;

let lapButton = document.getElementById('lap_button')

lapButton.disabled = true

function start () {
    interval = setInterval (
        function () {

            startButton.disabled = true

            lapButton.disabled = false

            milliseconds = milliseconds + 10
            console.log (milliseconds)
            if (milliseconds == 1000) {
                seconds = seconds + 1
                milliseconds = 0
            }
            console.log (seconds)
            if (seconds ==  60) {
                minutes = minutes + 1
                seconds = 00
            }
            console.log (minutes)
            digits.innerHTML = String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ':' + String(milliseconds / 10).padStart(2,'0')
        } ,10
    )
}
function stop () {

    startButton.disabled = false

    lapButton.disabled = true

    clearInterval (
        interval
    )
}
function reset () {

    startButton.disabled = false

    lapButton.disabled = true

    stop ()
    minutes = 00
    seconds = 00
    milliseconds = 0
    digits.innerHTML = '00:00:00'
    myList.innerHTML = ' '
}

function lap() {
    const node = document.createElement("li");
    const textnode = document.createTextNode(String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ':' + String(milliseconds / 10).padStart(2,'0'));
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

