// JAVASCRIPT PALABRA
        
            function longitud(){
                const longitud =parseInt (document.getElementById('palabra').value.length);
                swal('Longitud','La Longitud de su palabra es: ' + palabra, 'success');
                }
                function minuscula(){
                    let minuscula=document.getElementById('palabra').value;
                    alert (minuscula.toLowerCase());
                    }
                    function mayuscula(){
                        let mayuscula=document.getElementById('palabra').value;
                        alert(mayuscula.toUpperCase());
                        }
                        function primer(){
                            let primer =document.getElementById('palabra').value[0];
                            alert(primer.toUpperCase());

//JAVASCRIPT COVERTIDOR-->
                            
       
                                function faretgeigh(){
                                    const temperatura=parseInt (document.getElementById('temperatura').value);
                                var tipo = document.getElementById('tipo').value;
                                    if(tipo=='faretgeigh'){
                                       alert(`${temperatura} fahreanheit es: ${temperatura} fahreanheit`)
                                     }
                                     else if(tipo=='celsius'){
                                        conversion=((temperatura*9)/5)+32
                                        alert(`${temperatura} celsius es ${conversion} fahreanheit`)
                                     }
                                     else if(tipo=='kelvin'){
                                        conversion=(((temperatura-273)*9)/5)+32
                                        alert(`${temperatura} kelvin es ${conversion} fahreanheit`)
                                     }
                                }
                                function kelvin(){
                                    const temperatura=parseInt (document.getElementById('temperatura').value);
                                var tipo = document.getElementById('tipo').value;
                                    if(tipo=='faretgeigh'){
                                        conversion=(temperatura-32)*5/9+273
                                       alert(`${temperatura} fahreanheit es: ${conversion} kelvin`)
                                     }
                                     else if(tipo=='celsius'){
                                        conversion=(temperatura+273)
                                        alert(`${temperatura} celsius es ${conversion} kelvin`)
                                     }
                                     else if(tipo=='kelvin'){
                                        
                                        alert(`${temperatura} kelvin es ${temperatura} kelvin`)
                                     }
                                }
                    
                                function celsius(){
                                    const temperatura=parseInt (document.getElementById('temperatura').value);
                                var tipo = document.getElementById('tipo').value;
                                    if(tipo=='faretgeigh'){
                                        conversion=(temperatura-32)*5/9
                                       alert(`${temperatura} fahreanheit es: ${conversion} celsius`)
                                     }
                                     else if(tipo=='celsius'){
                                        alert(`${temperatura} celsius es ${temperatura} celsius`)
                                     }
                                     else if(tipo=='kelvin'){
                                        conversion=(temperatura-273)
                                        alert(`${temperatura} kelvin es ${temperatura} celsius`)
                                     }
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

   
 

                        