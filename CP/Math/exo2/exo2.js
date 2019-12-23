var tab = [];


for (var i = 1; i <= 3; i++) {

    var m = document.getElementById(i);
    var n = Math.floor(Math.random() * 10);
    
    m.src = "./im/image" + n + ".png";
    tab.push(n + 1);
   
}


function verification() {


    var res = 0;
    for (var i = 1; i <= 3; i = i + 1) {

        var r = document.getElementById(3+i);

        if (tab[i-1] == r.value) {
            res = res + 1;
            r.style.backgroundColor = "green";
        }
        else { r.style.backgroundColor = "red" }

    }


    if (res == 3) {
        alert("Bravo tu as eu tout juste ")
    }
    else {
        alert("dommage tu as fait " + (3 - res) + "erreurs , corrige toi")
    }
}



