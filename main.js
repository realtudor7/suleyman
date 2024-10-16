function suleman() {
    var audio = new Audio('suleman.mp3');
    audio.play();
}

function mama() {
    let answer = document.getElementById("q").value;

    if(answer.toLowerCase() == "sultana mama") {
        document.getElementById("qw").innerHTML = "RASPUNS CORRECT";
    }
    else {
        document.getElementById("qw").innerHTML = "RAPSUNS GRESIT";
    }
}

function suleyman() {
    let answer = document.getElementById("w").value;

    if(answer.toLowerCase() == "suleyman") {
        document.getElementById("er").innerHTML = "RASPUNS CORRECT";
    }
    else {
        document.getElementById("er").innerHTML = "RAPSUNS GRESIT";
    }
}
function hurrem() {
    let answer = document.getElementById("e").value;

    if(answer.toLowerCase() == "hurrem") {
        document.getElementById("rt").innerHTML = "RASPUNS CORRECT";
    }
    else {
        document.getElementById("rt").innerHTML = "RAPSUNS GRESIT";
    }
}