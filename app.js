const data = document.querySelector('input[type="date"]');

function howOld() {
    let dataNasc = data.value;
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1;
    let [anoNasc, mesNasc, diaNasc] = dataNasc.split('-');

    let age = anoAtual - anoNasc;
    //check month and day
    if (mesAtual < mesNasc) {
        age--;
    }
    if (mesAtual == mesNasc && new Date().getDate() < diaNasc) {
        age--;
    }

    // check negative ages
    if (age <= 0 || age === anoAtual) {
        alert("Invalid Age!")

    } else {
        let res = document.querySelector('#res');
        res.innerHTML = `So you are ${age} years old!!!!!!!! ` + "\n";
        res.classList.add("box");
        printImage(age);
    }
}

function printImage(age) {

    console.log(age);
    let image = "";

    if (age <= 5) {
        image = "<img src='images/baby-image.png' class='image'>";
    }
    else if (age <= 17) {
        image = "<img src='images/kid-image.png' class='image'>";
    }
    else if (age <= 30) {
        image = "<img src='images/adult-image.png' class='image'>";
    }
    else if (age > 30) {
        image = "<img src='images/old-image.png' class='image'>";
    } else {
        image = "Sorry we fail"
    }

    document.getElementById("res").innerHTML += "\n" + image;
}