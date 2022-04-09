var x = document.getElementsByClassName('weapon')
for (i=0;i<x.length;i++) {
    x[i].innerHTML = `
    <div class="weapon slot_wrapper">
        <div class="weapon slot_image"></div>
        <div class="weapon slot_name"></div>
    </div>
    `
}