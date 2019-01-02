
var navName = document.getElementById('navigations');

window.onscroll = function(event){
    if(this.scrollY > 310){
        // navName.style.setAttribute('style', 'position:absolute; top:0;');
        navName.style.position = "fixed";
        navName.style.left = "0";
        navName.style.top = "0";
        navName.style.width = "100%";
    }
    else{
        navName.style.position = "";
        navName.style.left = "";
        navName.style.top = "";
        navName.style.width = "100%";
    }
}
