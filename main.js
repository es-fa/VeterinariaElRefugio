window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel_lista'),
    {
        slidesToShow: 1,
        slidesToScroll: 8,
        draggable: true,
        dots: '.carrusel-indicadores',
        arrows: {
            prev: '.carrusel_anterior',
            next: '.carrusel_siguiente'
        }
    });
});
/*PAGINA DE REGISTROS*/
var intentos=0;
function compararPassword(){
    let valor1=document.getElementById("usuario").value;
    let valor2=document.getElementById("contraseña1").value;
    let valor3=document.getElementById("contraseña2").value;

    let text = document.getElementById("textpantalla");
    if (valor2==valor3)
    {
        text.innerHTML=("Bienvenido " +  valor1);
        text.style.color="white";
    }
    else if(intentos<3)
    {
        intentos++;
        text.innerHTML=("Las contraseñas no coinciden");
        text.style.color="red";
        /*if (intentos==3)
        {
        text.innerHTML=("Ha exedido el numero de intentos");
        text.style.color="red";
        }*/
    }
    return false;
}
/*PAGINA INICIO DE SESION*/
/*var intentos=0;
function compararUsuario(){
    let valor1=document.getElementById("usuario").value;
    let valor2=document.getElementById("correo").value;
    let valor3=document.getElementById("contraseña").value;

    let text = document.getElementById("textpantalla");
    if (valor1==valor2)
    {
        text.innerHTML=("Bienvenido " +  valor1);
        text.style.color="green";
    }
    else if(valor1==valor3)
    {
        text.innerHTML=("Bienvenido " +  valor1);
        text.style.color="green";
        if (valor2==valor3)
        {
            text.innerHTML=("Bienvenido " +  valor1);
            text.style.color="green";
        }
        else if(intentos<3)
        {
            intentos++;
            text.innerHTML=("Las contraseñas no coinciden");
            text.style.color="red";
            if (intentos==3)
            {
            text.innerHTML=("Ha exedido el numero de intentos");
            text.style.color="red";
            }
        }
    }
    return false;
}*/