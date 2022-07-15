//ABRIR E FECHAR A NAVBAR MOBILE
var btnmenu = document.getElementById('btnmenu');
var menubar = document.getElementById('menubar');
var menuclose = document.getElementById('menuclose');

btnmenu.addEventListener('click',function(){
   if(menubar.classList.contains('close')){ 
    menubar.classList.remove('close');

}
    else{
        menubar.classList.add('close');
    }
})






//MUDAR DE COR QUANDO ROLAR



//DESKTOP
/* $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').css("background-color", "rgb(12, 11, 11)")
    } else {
        $('.navbar').css("background-color", "rgba(255, 72, 26, 0.178)")
    }
})

*/

