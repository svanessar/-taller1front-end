// JAVASCRIPT PALABRA
        
            function longitud(){
                const longitud =parseInt (document.getElementById('palabra').value.length);
                swal('Longitud','La Longitud de su palabra es: ' +longitud, 'success');
                }
                function minuscula(){
                    let minuscula=document.getElementById('palabra').value;
                    swal('Minuscula','' +minuscula.toLowerCase(), 'success');
                    }
                    function mayuscula(){
                        let mayuscula=document.getElementById('palabra').value;
                        swal('Mayuscula','' +mayuscula.toUpperCase(), 'success');
                        }
                        function primer(){
                            let primer =document.getElementById('palabra').value[0];
                            swal('Primer caracter','' +primer.toUpperCase(), 'success');
                        }
//JAVASCRIPT COVERTIDOR-->
                            
       
                                function faretgeigh(){
                                    const temperatura=parseInt (document.getElementById('temperatura').value);
                                var tipo = document.getElementById('tipo').value;
                                    if(tipo=='faretgeigh'){
                                        swal('Conversion',`${temperatura} fahreanheit es: ${temperatura} fahreanheit `, 'success');
                                      
                                     }
                                     else if(tipo=='celsius'){
                                        conversion=((temperatura*9)/5)+32
                                        swal('Conversion',`${temperatura} celsius es ${conversion} fahreanheit`, 'success');
                                        
                                     }
                                     else if(tipo=='kelvin'){
                                        conversion=(((temperatura-273)*9)/5)+32
                                        swal('Conversion',`${temperatura} kelvin es ${conversion} fahreanheit`, 'success');
                                        
                                     }
                                }
                                function kelvin(){
                                    const temperatura=parseInt (document.getElementById('temperatura').value);
                                var tipo = document.getElementById('tipo').value;
                                    if(tipo=='faretgeigh'){
                                        conversion=(temperatura-32)*5/9+273
                                        swal('Conversion',`${temperatura} fahreanheit es: ${conversion} kelvin`, 'success');
                                       
                                     }
                                     else if(tipo=='celsius'){
                                        conversion=(temperatura+273)
                                        swal('Conversion',`${temperatura} celsius es ${conversion} kelvin`, 'success');
                                        
                                     }
                                     else if(tipo=='kelvin'){
                                        swal('Conversion',`${temperatura} kelvin es ${temperatura} kelvin`, 'success');
                                      
                                     }
                                }
                    
                                function celsius(){
                                    const temperatura=parseInt (document.getElementById('temperatura').value);
                                var tipo = document.getElementById('tipo').value;
                                    if(tipo=='faretgeigh'){
                                        conversion=(temperatura-32)*5/9
                                        swal('Conversion',`${temperatura} fahreanheit es: ${conversion} celsius`, 'success');
                                       
                                     }
                                     else if(tipo=='celsius'){
                                        alert(`${temperatura} celsius es ${temperatura} celsius`)
                                     }
                                     else if(tipo=='kelvin'){
                                        conversion=(temperatura-273)
                                        alert(`${temperatura} kelvin es ${temperatura} celsius`)
                                     }
                                }

//JAVASCRIPT TRIANGULO-->
   
        
            function consulta(){
            let a,b,c,equilatero=0,isosceles=0,escaleno=0,minimo,txtMin,maximo,txtMax;
       a =parseInt (document.getElementById('lado1').value);
       b =parseInt (document.getElementById('lado2').value);
       c =parseInt (document.getElementById('lado3').value);
            
            alert('Triangulo : '+a+' , '+b+' , '+c);
        if(a==b && b==c) {
           alert(' El triangulo es equilatero ');
            
        } else if(a==b || b==c || a==c) {
            alert(' El triangulo es isosceles ');
           
        } else { //(a!=b && b!=c)
            alert(' El triangulo es escaleno ');
            
        }
  }
  //MOSTRAR MODAL PALABRA-->

    const openModal = document.querySelector('.hola');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
//MOSTRAR MODAL CONVERTIDOR-->

    const abrirModal = document.querySelector('.convertidor');
const modals = document.querySelector('.modals');
const cerrarModal = document.querySelector('.cerrar');

abrirModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modals.classList.add('modal--show');
});

cerrarModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modals.classList.remove('modal--show');
});
//MOSTRAR triangulo -->

    const modaltriangulo = document.querySelector('.triangulo');
const modalt = document.querySelector('.modalt');
const cerrarmodalt = document.querySelector('.cerrart');

modaltriangulo.addEventListener('click', (e)=>{
    e.preventDefault();
    modalt.classList.add('modal--show');
});

cerrarmodalt.addEventListener('click', (e)=>{
    e.preventDefault();
    modalt.classList.remove('modal--show');
});
//MOSTRAR MODAL instructores-->

    const abriri = document.querySelector('.instructores');
const modali = document.querySelector('.modali');
const cerrari = document.querySelector('.cerrari');

abriri.addEventListener('click', (e)=>{
    e.preventDefault();
    modali.classList.add('modal--show');
});

cerrari.addEventListener('click', (e)=>{
    e.preventDefault();
    modali.classList.remove('modal--show');
});


//MOSTRAR JAVASCRIPT
var probar = document.getElementById('probar');

probar.onclick = function (e){
    comprobar();
}
function comprobar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var area = document.getElementById('area').value;
    console.log(nombre);
    console.log(apellido);
    console.log(area);
    if (nombre=='tatiana' && apellido=='cabrera' && area =='calidad'||nombre=='tatiana' && apellido=='cabrera' && area =='frontend'){
        alert('correcto');
    }
    else if (nombre=='adriana' && apellido=='duarte' && area =='diseño'){
        alert('correcto'); 
    }
    else if (nombre=='carolina' && apellido=='forero' && area =='proyecto'){
        alert('correcto'); 
    }
    else if (nombre=='yaneth' && apellido=='castillo' && area =='gestion'){
        alert('correcto'); 
    }
    else if (nombre=='luis' && apellido=='baquero' && area =='cultura'){
        alert('correcto'); 
    }
    else if (nombre=='fernando' && apellido=='galindo' && area =='base datos'){
        alert('correcto'); 
    }
    else if (nombre=='jonathan' && apellido=='espitia' && area =='php'){
        alert('correcto'); 
    }
    
        else {
            alert('incorrecto')
        }
    }
   
 

                        