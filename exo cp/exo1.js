var tab = [];
for (var i = 0; i <= 10; i++) {
    tab.push(i);
}


var sol = Math.round(Math.random() * Math.floor(10));

delete tab[sol];

for (var i in tab) {
    var x = document.getElementById(i);
    x.innerHTML = i;
}


var inco = document.getElementById(sol);
inco.innerHTML = '<input type="number" id="res">';

function verification() {

    var q = document.getElementById("res");

    if (sol == q.value) {
        alert("BRAVO");
    }

    else (
        alert("mauvaise reponse")
    )

}