

// DATA INICIAL
var d1 = moment('21/11/2021', 'DD/MM/YYYY');

var data = new Date();

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

// GET DATA ATUAL
var d2 = dia + '/' + (mes+1) + '/' + ano;

var diff = moment(d2, 'DD/MM/YYYY').diff(moment(d1, 'DD/MM/YYYY'));

var amostre = moment.duration(diff).asDays().toFixed(0);

console.log(amostre);



// MONTH AMOSTRE
var calcMonth = amostre/"31";

var monthAmostre = calcMonth.toFixed(0);

console.log(parseFloat(monthAmostre));



// FUNCTION DE AMOSTRAGEM DA VARIAVEL
function myFunction(){

    setTimeout(function(){
        var msg = document.createElement("P");
        msg.innerHTML = amostre + " Dias!";
        document.body.appendChild(msg).setAttribute("id", "textPar");

        var month = document.createElement("P");
        month.innerHTML = monthAmostre + " Meses!";
        document.body.appendChild(month).setAttribute("id", "textChange");
        document.getElementById("textChange").style.visibility = "hidden";
    }, 5000);
}

// FUNCTION CHANGE DIA/MÊS
function changeValue(){
    document.getElementById("textPar").style.visibility = "hidden";
    document.getElementById("textChange").style.visibility = "visible";

    document.getElementById("calendar").setAttribute("onclick", "changeFunction()");
    console.log("Mostrando: Mês");
}

function changeFunction(){
    document.getElementById("textChange").style.visibility = "hidden";
    document.getElementById("textPar").style.visibility = "visible";

    document.getElementById("calendar").setAttribute("onclick", "changeValue()"); 
    console.log("Mostrando: Dias");
}