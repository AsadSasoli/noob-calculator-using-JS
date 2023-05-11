function seven() {
    document.getElementById('display').value+=7
}
function eight() {
    document.getElementById('display').value+=8
}
function nine() {
    document.getElementById('display').value+=9
}
function forr() {
    document.getElementById('display').value+=4
}
function five() {
    document.getElementById('display').value+=5
}
function six() {
    document.getElementById('display').value+=6
}
function one() {
    document.getElementById('display').value+=1
}
function tow() {
    document.getElementById('display').value+=2
}
function three() {
    document.getElementById('display').value+=3
}
function khali() {
    document.getElementById('display').value=""
}
function zero() {
    document.getElementById('display').value+=0
}
function dot() {
    document.getElementById('display').value+="."
}
function dev() {
    document.getElementById('display').value+="/"
}
function mul() {
    document.getElementById('display').value+="*"
}
function sub() {
    document.getElementById('display').value+="-"
}
function add() {
    document.getElementById('display').value+="+"
}
function ans() {
    var ans = document.getElementById('display').value
    document.getElementById('display').value=eval(ans)
}