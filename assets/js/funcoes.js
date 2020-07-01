var menuIconSome =  document.querySelector('.fa-bars');
var menuIconMostra =  document.querySelector('.fa-window-close');
    menuIconMostra.style.display='none';
var menu =  document.querySelector('.box-menu');
var menuEsconde = document.querySelector('.menu-esconde'); 


document.body.onresize = function() {
    if (document.body.clientWidth > 580) {
        var menu =  document.querySelector('.menu-esconde');
        menu.style.backgroundColor='#3D4B95';       
        menu.style.color='#fff';
        menuEsconde.style.display='block';
        //alert('E MAIOR'+document.body.clientWidth)
    }else if(document.body.clientWidth < 580){
        var menuIconMostra =  document.querySelector('.fa-window-close');
        var menu =  document.querySelector('.menu-esconde');
        menu.style.backgroundColor='darkblue';
        menu.style.display='';
        //menuIconMostra.style='none';
        
        
    }
};

menuIconSome.onclick=function(){       
        menuEsconde.style.backgroundColor='darkblue';
        menuEsconde.style.trasition='1s';
        menuEsconde.style.display='block';
        menuIconMostra.style.display='block';
        menuIconSome.style.display='none';
    }

    
menuIconMostra.onclick=function(){    
    menuEsconde.style.display='none';
    menuIconMostra.style.display='none';
    menuIconSome.style.display='block';
    
}   



 

