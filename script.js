
let file = "https://github.com/pruebakeyla/albums/albums.xml"

var xhttp, xmlDoc, txt, x, i;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        xmlDoc = this.responseXML;
        txt = "";
        x = xmlDoc.getElementsByTagName("title");
        for (i = 0; i < x.length; i++) {
            txt = txt + x[i].childNodes[0].nodeValue + "<br>";
        }
        document.getElementById("demo").innerHTML = txt;
    }
};
xhttp.open("GET", file, true);
xhttp.send();