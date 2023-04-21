/* function descripcionDeEmpresa(){
    const descripcion=getElementById("descrip");
    descrip.innerHTML="Datos del empleado"
} */

//validacion de formulario

(function() {
    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarValoresDelFormulario = function(e) {
        if (formulario.nombre.value == 0) {
            alert('Ingrese el nombre del empleado');
            e.preventDefault();
        }
        else if (formulario.apellido.value == 0) {
            alert('Ingrese el apellido');
            e.preventDefault();
        }
        else if (formulario.dateone.value == 0) {
            alert('Ingrese fecha de ingreso');
            e.preventDefault();
        }
        else if (formulario.legajo.value == 0) {
            alert('Ingrese el numero de legajo');
            e.preventDefault();
        }
        else if (formulario.date.value == 0) {
            alert('Ingrese fecha de nacimiento');
            e.preventDefault();
        }
        else if (formulario.email.value == 0) {
            alert('Ingrese email');
            e.preventDefault();
        }
        else if (formulario.direccion.value == 0) {
            alert('Ingrese la direccion');
            e.preventDefault();
        }
        else if (formulario.numero.value == 0) {
            alert('Ingrese el numero de casa depto y piso');
            e.preventDefault();
        }
        else if (formulario.provincia.value == 0) {
            alert('Ingrese los datos requeridos');
            e.preventDefault();
        }
        else if (formulario.cargo.value == 0) {
            alert('Ingrese los datos requeridos');
            e.preventDefault();
        }
        else if (formulario.categoria.value == 0) {
            alert('Ingrese los datos requeridos');
            e.preventDefault();
        }
        else if (formulario.obra.value == 0) {
            alert('Ingrese los datos requeridos');
            e.preventDefault();
        }
        else if (formulario.art.value == 0) {
            alert('Ingrese los datos requeridos');
            e.preventDefault();
        }
    
        else {
            alert("Datos enviados correctamente")
        }
    };
    


    var validar = function(e) {
        validarValoresDelFormulario(e);
    };

    formulario.addEventListener("submit", validar);
}())

