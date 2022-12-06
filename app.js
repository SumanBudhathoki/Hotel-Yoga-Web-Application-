var bookBtn = document.querySelector('.open');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.close');

bookBtn.addEventListener('click',function(){
    modalBg.classList.add('activate');
})
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('activate');
})

var a;
function show_hide(){
    if (a==1)
    {
        document.getElementById("service1-img").style.display="block";
        document.getElementById("service2-img").style.display="block";
        document.getElementById("service3-img").style.display="block";
        document.getElementById("room1").style.display="block";
        document.getElementById("room2").style.display="block";
        document.getElementById("logo").style.display="block";
        document.getElementById("bg").style.display="block";
        
        

        return a=0;
    }
    else{
        document.getElementById("service1-img").style.display="none";
        document.getElementById("service2-img").style.display="none";
        document.getElementById("service3-img").style.display="none";
        document.getElementById("room1").style.display="none";
        document.getElementById("room2").style.display="none";
        document.getElementById("logo").style.display="none";
        document.getElementById("bg").style.display="none";
       
        return a= 1;
    }
}