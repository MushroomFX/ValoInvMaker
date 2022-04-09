var x = document.getElementsByClassName('weapon')
for (i=0;i<x.length;i++) {
    var color = x.length *i 
    x[i].style.backgroundColor = `hsl(${color}deg,100%,50%)`
}