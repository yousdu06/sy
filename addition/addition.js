
var tab = [];

for (var i = 1; i <= 20; i = i + 1) {
    var x = document.getElementById(i);

    var m = Math.round(Math.random() * Math.floor(1000));
    tab.push(m);
    x.innerHTML = m;


}   

function verification() {
    var res = 0;
    for (var i = 0; i <= 18 ; i = i + 2) {

        var r = document.getElementById(21 + (i / 2)) ;

        if (tab[i] + tab[i + 1] == r.value ) {
                 res = res + 1;
            r.style.backgroundColor = "green";
        }
        else { r.style.backgroundColor = "red" }

    }

    
    if (res == 10) {
        alert("Bravo tu as eu tout juste ")
    }
    else {
        alert("dommage tu as fait " + (10 - res) + "erreurs , corrige toi")
    }
}