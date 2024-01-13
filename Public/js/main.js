
var run1 = 0
var run2 = 0
var move = document.getElementById('car1')
function moveFirstCar() {
    run1 += 5
    console.log('move first car')
    var move = document.getElementById('car1')
    move.style.marginLeft = run1 + 'px'
    var fuel1 = document.getElementById('fuel1')
    fuel1.style.width = run1 * (200 / 1030) + 'px'
}
function moveSecondCar() {
    run2 += 5
    console.log('move second car')
    var move = document.getElementById('car2')
    move.style.marginLeft = run2 + 'px'
    var fuel2 = document.getElementById('fuel2')
    fuel2.style.width = run2 * (200 / 1030) + 'px'
}
const myTimeout = setTimeout(start, 30000)
function start() {
    var car1 = document.getElementById("car1")
    var car2 = document.getElementById("car2")
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");
    var go = document.getElementById('go');
    car1.classList.add('car_runing')
    car2.classList.add('car_runing')
    setTimeout(function () {
        red.style.backgroundColor = 'red';
    }, 1000)
    setTimeout(function () {
        yellow.style.backgroundColor = 'yellow';
    }, 2000)
    setTimeout(function () {
        green.style.backgroundColor = 'green';
        go.innerHTML = 'GO!!!';
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    moveFirstCar()
                    break;
                case 'd':
                    moveSecondCar()
                    break;
            }
        });
        checkwinner()
    }, 3000)
    function checkwinner() {
        var check = setInterval(function () {
            if (parseInt(car1.style.marginLeft) >= 1030) {
                alert("Yellow car wins!");
                clearInterval(check);
            }
            if (parseInt(car2.style.marginLeft) >= 1030) {
                alert("Red car wins!");
                clearInterval(check);
            }
        }, 100);
    }
}
function again() {
    location.reload()
}