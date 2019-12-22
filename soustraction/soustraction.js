
var tab = [];

for (var i = 1; i <= 20; i = i + 2) {
    var x = document.getElementById(i);
    var y = document.getElementById(i+1);


    var m = Math.round(Math.random() * Math.floor(1000));
    var n = Math.round(Math.random() * Math.floor(1000));

    if (m > n) {
        tab.push(m, n);
        x.innerHTML = m;
        y.innerHTML = n;
    }
    else {

        tab.push(n, m);
        x.innerHTML = n;
        y.innerHTML = m;

    }
}

function verification() {
    var res = 0;
    for (var i = 0; i <= 18; i = i + 2) {

        var r = document.getElementById(21 + (i / 2));

        if (tab[i] - tab[i + 1] == r.value) {
            res = res + 1;
            r.style.backgroundColor = "green";
        }
        else { r.style.backgroundColor = "#AE1019"}

    }

    if (res == 10) {
        alert("Bravo tu as eu tout juste ")
    }
    else {
        alert("dommage tu as fait " + (10 - res) + "erreurs , corrige toi")
    }
}