function alertHim() {
    alert("hello there");
}

var car = ["Rangerover", "Benz", "McLaren", "Lamborghini", "Ferrari", "Porsche", "Bentley"];
window.onload = function() {
    what();

    function what() {
        document.getElementById("sorta").innerHTML = car;
        document.getElementById("numsort").innerHTML = num;
    };
}


function sortThis() {
    for (var j = 0; j < car.length - 1; j++) {
        for (var i = 0, temp; i < car.length - 1; i++) {
            if (car[i] > car[i + 1]) {
                temp = car[i + 1];
                car[i + 1] = car[i];
                car[i] = temp;
                document.getElementById("sortaa").innerHTML = car;
            };
        };
    };

}

num = [46, 70, 29, 39, 68, 53, 93, 15];

function numOperations() {
    var count = num.length - 1,
        temp, j, i;
    for (j = 0; j < count; j++) {

        for (i = 0; i < count; i++) {

            if (num[i] > num[i + 1]) {
                temp = num[i + 1];
                num[i + 1] = num[i];
                num[i] = temp;
            }

        }
    }
    for (k = 0; k <= num.length - 1; k++) {
        document.getElementById("numsorted1").innerHTML = num;
    }
    for (k = num.length - 1; k >= 0; k--) {

        document.getElementById("numsorted2").innerHTML = num;
    }
    for (k = num.length - 1; k >= 0; k--) {

        if ((num[k]) > num[k - 1]) {
            document.getElementById("numsorted3").innerHTML = num[k];
            break;
        }
    }
    for (k = 0; k <= num.length; k++) {

        if ((num[k]) < num[k + 1]) {
            document.getElementById("numsorted4").innerHTML = num[k];
            break;
        }
    }
}