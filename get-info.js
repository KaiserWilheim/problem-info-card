var elem = document.getElementById("problem-card-vis");
var tar = document.getElementById("problem-card-inner");
var txt = elem.innerHTML;
if(txt === "false"){
    elem.innerHTML = "";
    throw new Error("Problem card is hidden");
}
tar.style.visibility = "visible";
elem.innerHTML = "";

elem = document.getElementById("problem-info-name");
tar = document.getElementById("problem-name");
txt = elem.innerHTML;
tar.innerHTML = txt;
elem.innerHTML = "";

elem = document.getElementById("problem-info-from");
tar = document.getElementById("problem-from");
txt = elem.innerHTML;
if(txt === "none"){
    var fa = tar.parentNode;
    var gfa = fa.parentNode;
    gfa.removeChild(fa);
    elem.innerHTML = "";
}else{
    tar.innerHTML = txt;
    elem.innerHTML = "";
}

elem = document.getElementById("problem-info-submit");
tar = document.getElementById("problem-submit");
txt = elem.innerHTML;
tar.innerHTML = txt;
elem.innerHTML = "";

elem = document.getElementById("problem-info-difficulty");
tar = document.getElementById("problem-difficulty");
txt = elem.innerHTML;
if(txt === "none"){
    var fa = tar.parentNode;
    fa = fa.parentNode;
    var gfa = fa.parentNode;
    gfa.removeChild(fa);
    var color = document.getElementById("problem-info-color");
    color.innerHTML = "";
    elem.innerHTML = "";
    throw new Error("Problem difficulty cannot find");
}else{
    tar.innerHTML = txt;
    elem.innerHTML = "";
}

elem = document.getElementById("problem-info-color");
txt = elem.innerHTML;
var std = /#[0-9a-fA-F]{6}/;
if(!std.test(txt)){
    txt = "#000000";
}
tar.style.color = txt;
elem.innerHTML = "";