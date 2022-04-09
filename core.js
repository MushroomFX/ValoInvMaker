var x = document.getElementsByClassName('weapon')
for (i=0;i<x.length;i++) {
    var name = x[i].getAttribute('id')
    x[i].innerHTML = `
    <div class="slot_wrapper">
        <div class="slot_image"></div>
        <div class="slot_name">${name}</div>
    </div>
    `
}