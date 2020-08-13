function bienvenida(){
	alert("Bienvenido a mi sitio web");
}
function procesar(event){
    event.preventDefault();
    var resultado = document.getElementById("resultado");
    
    console.log(resultado);
    var salario = document.getElementById("salarioPorDia").value;
    var horas = document.getElementById("horasTrabajadas").value;

    let salarioPorHora = salario / 8;
    let salarioNeto = salarioPorHora * horas;
   
    resultado.innerHTML = "Lo que ganas por horas(si trabajas 8 horas al dia) es : " + salarioPorHora + ' y tu Salario Neto es de: ' + salarioNeto;
    culminacion() 
}

function culminacion() {
    alert('Has terminado, vuelve pronto!');
}
