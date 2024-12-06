const color1=document.getElementById('color1');
const color2=document.getElementById('color2');
const color3=document.getElementById('color3');
const color4=document.getElementById('color4');
const color5=document.getElementById('color5');
const color6=document.getElementById('color6');
const color7=document.getElementById('color7');         
const color8=document.getElementById('color8');

color1.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    console.log(clss2);
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#79bedb';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#79bedb"; 
        clss2[i].style.borderColor='#79bedb'; 
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov1");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th1");
    }
});
color2.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");

    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ff9900';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ff9900";
        clss2[i].style.borderColor='#ff9900';    
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov2");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th2");
    }
});
color3.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#8cc739';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#8cc739";
        clss2[i].style.borderColor='#8cc739';    
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov3");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th3");
    }
});
color4.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ba6222';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ba6222";
        clss2[i].style.borderColor='#ba6222';    
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov4");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th4");
    }
});
color5.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#cc0000';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#cc0000";  
        clss2[i].style.borderColor='#cc0000';  
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov5");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th5");
    }
});
color6.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#84596b';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#84596b"; 
        clss2[i].style.borderColor='#84596b';   
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov6");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th6");
    }
});
color7.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ff717e';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ff717e";
        clss2[i].style.borderColor='#ff717e';    
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov7");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th7");
    }
});
color8.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const hov=document.getElementsByClassName("hov");
    const th=document.getElementsByClassName("th");
    
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ffcd00';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ffcd00"; 
        clss2[i].style.borderColor='#ffcd00';   
    }
    for(let i=0;i<hov.length;i++){
        hov[i].setAttribute("id","hov8");
    }
    for(let i=0;i<th.length;i++){
        th[i].setAttribute("class","test-mmr th th8");
    }
});
AOS.init();


const hideloader=()=>{
    const wrapper=document.querySelector(".wrapper");
    const loader=document.querySelector(".loader");
    setTimeout(()=>{
        wrapper.style.display="block";
        loader.style.display="none";

    },3000)
}
