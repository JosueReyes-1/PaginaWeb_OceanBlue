/*funcion de contador*/
repetir=0;
window.addEventListener('scroll',function(){
    let animation=this.document.getElementById('contador');
    let positionobjet1=animation.getBoundingClientRect().top;
    console.log(positionobjet1);
    let tamañodepantalla=this.window.innerHeight/2+100;
    let cont1=document.getElementById('cont1'),
    cont2=document.getElementById('cont2'),
    cont3=document.getElementById('cont3'),
    cont4=document.getElementById('cont4')
    let c1=0,c2=0,c3=0,c4=0,
    tiem=5
        

    if(positionobjet1<tamañodepantalla && repetir===0){
        repetir+=1;
        let tiempo1=setInterval(()=>{
            cont1.textContent=c1+=1;
            if(c1===170){
                clearInterval(tiempo1)
            }
        },`${tiem}`);
        let tiempo2=setInterval(()=>{
            cont2.textContent=c2+=1;
            if(c2===230){
                clearInterval(tiempo2)
            }
        },`${tiem}`);
        let tiempo3=setInterval(()=>{
            cont3.textContent=c3+=1;
            if(c3===60){
                clearInterval(tiempo3)
            }
        },`${tiem}`);
        let tiempo4=setInterval(()=>{
            cont4.textContent=c4+=1;
            if(c4===250){
                clearInterval(tiempo4)
            }
        },`${tiem}`);
    }
    
});




