import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneradorReciboDeSueldoService } from 'src/app/services/generador-recibo-sueldo.service';

@Component({
  selector: 'app-generador-recibo-de-sueldo',
  templateUrl: './generador-recibo-de-sueldo.component.html',
  styleUrls: ['./generador-recibo-de-sueldo.component.css']
})
export class GeneradorReciboDeSueldoComponent {
  rsForm: FormGroup;
  formularioEnviado = false;

  constructor(
    private fb: FormBuilder,
    private reciboService: GeneradorReciboDeSueldoService
  ) {
    this.rsForm = this.fb.group({
      idRecibo: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      montoBruto: ['', [Validators.required, Validators.pattern('[0-9]+(\\.[0-9]+)?')]],
      montoNeto: ['', [Validators.required, Validators.pattern('[0-9]+(\\.[0-9]+)?')]],
      periodo: ['', Validators.required],
      antiguedad: ['', Validators.required],
      concepto: ['', Validators.required],
      asistencia: ['', Validators.required],
      fechaDePago: ['', Validators.required],
      deduccion: ['', Validators.pattern('[0-9]+(\\.[0-9]+)?')],
      extra: ['', Validators.required],
      legajoDelEmpleado: ['', Validators.required]
    });
  }

  enviarDatos() {
    if (this.rsForm.valid) {
      const formData = this.rsForm.value;
      formData.periodo = this.formatFecha(formData.periodo);
      formData.fechaDePago = this.formatFecha(formData.fechaDePago);

      this.reciboService.enviarDatosADjango(formData).subscribe({
        next: (response: any) => {
          console.log('Datos enviados exitosamente a Django:', response);
          this.formularioEnviado = true;
        },
        error: (error: any) => {
          console.error('Error al enviar los datos a Django:', error);
          // Manejar el error según tus necesidades, como mostrar un mensaje de error al usuario.
        }
      });
    }
  }

  actualizarDatos() {
    if (this.rsForm.valid) {
      const formData = this.rsForm.value;
      formData.periodo = this.formatFecha(formData.periodo);
      formData.fechaDePago = this.formatFecha(formData.fechaDePago);
      const idRecibo: string = formData.idRecibo;
      if (idRecibo) {
        this.reciboService.modificarDatosEnDjango(idRecibo, formData).subscribe({
          next: (response: any) => {
            console.log('Datos modificados exitosamente:', response);
            // Realizar acciones adicionales después de modificar los datos, como mostrar un mensaje de éxito, redireccionar a otra página, etc.
          },
          error: (error: any) => {
            console.error('Error al modificar los datos:', error);
            // Manejar el error según tus necesidades, como mostrar un mensaje de error al usuario.
          }
        });
      }
    }
  }

  eliminarDatos() {
    const idRecibo: string = this.rsForm.value.idRecibo;
    if (idRecibo) {
      this.reciboService.eliminarDatosEnDjango(idRecibo).subscribe({
        next: (response: any) => {
          console.log('Datos eliminados exitosamente:', response);
          // Realizar acciones adicionales después de eliminar los datos, como mostrar un mensaje de éxito, redireccionar a otra página, etc.
        },
        error: (error: any) => {
          console.error('Error al eliminar los datos:', error);
          // Manejar el error según tus necesidades, como mostrar un mensaje de error al usuario.
        }
      });
    }
  }

  listarDatos() {
    this.reciboService.listarDatosEnDjango().subscribe({
      next: (response: any) => {
        console.log('Recibos obtenidos exitosamente:', response);
        // Realizar acciones adicionales después de obtener los recibos, como mostrarlos en una lista, etc.
      },
      error: (error: any) => {
        console.error('Error al obtener los recibos:', error);
        // Manejar el error según tus necesidades, como mostrar un mensaje de error al usuario.
      }
    });
  }

  private formatFecha(fecha: any): string {
  // Implement your own date formatting logic here
  // Example: return format(fecha, 'yyyy-MM-dd');

  // Here's an example of converting a date to the desired format:
  const date = new Date(fecha);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  // Format the date as yyyy-MM-dd
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

}
