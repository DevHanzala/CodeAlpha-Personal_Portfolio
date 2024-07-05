
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

document.querySelector('.logo').addEventListener('mouseover',function(){
    this.classList.add('animate__flash')
})
document.querySelector('.edit').addEventListener('mouseover',function(){
    this.classList.add('animate__flipOutX')
})
document.querySelector('.para1').addEventListener('mouseover',function(){
    this.classList.add('animate__slideOutUp')
})




