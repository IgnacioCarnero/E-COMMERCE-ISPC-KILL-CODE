(function() {
        var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

        var validarValoresDelFormulario = function(e) {
            if (formulario.nombreDeEmpresa.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.dirección.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.cuidad.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.códigoPostal.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.provincia.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.primerNombre.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.apellido.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.email.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.cuilDelEmpleado.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.dirección_two.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.cuidad_two.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.códigoPostal_two.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.provincia_two.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.dni.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.díaDelPago.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.finDelPago.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.ingresoAnual.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.causaPorLaRetención.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else if (formulario.cantidadDeRetenciones.value == 0) {
                alert('Porfavor ingrese todos los valores en el formulario');
                e.preventDefault();
            }
            else {
                alert('Felicitaciones, los valores del formulario se han enviado con éxito!!')
            }
        };
        


        var validar = function(e) {
            validarValoresDelFormulario(e);
        };

        formulario.addEventListener("submit", validar);
    }())