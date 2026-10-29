function showTafel() {
    let tafel = document.getElementById("tafelInput").value;

    //let teller = 1;
    let output = "";
    let uitkomst = 0;

    for (let teller = 1; teller < 20; teller++){
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    document.getElementById("tafeloutput").innerHTML = output;
}