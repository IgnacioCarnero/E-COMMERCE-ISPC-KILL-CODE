import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneradorReciboDeSueldoService } from 'src/app/services/generador-recibo-sueldo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generador-recibo-de-sueldo',
  templateUrl: './generador-recibo-de-sueldo.component.html',
  styleUrls: ['./generador-recibo-de-sueldo.component.css']
})
export class GeneradorReciboDeSueldoComponent {
  rsForm: FormGroup;
  formularioEnviado: boolean = false;

  constructor(
    private reciboService: GeneradorReciboDeSueldoService,
    private http: HttpClient
  ) {
    this.rsForm = new FormGroup({
      idRecibo: new FormControl('', Validators.required),
      montoBruto: new FormControl('', Validators.required),
      montoNeto: new FormControl('', Validators.required),
      periodo: new FormControl('', Validators.required),
      antiguedad: new FormControl('', Validators.required),
      concepto: new FormControl('', Validators.required),
      asistencia: new FormControl('', Validators.required),
      fechaDePago: new FormControl('', Validators.required),
      deduccion: new FormControl('', Validators.pattern('[0-9]+(\\.[0-9]+)?')),
      extra: new FormControl('', Validators.pattern('[0-9]+(\\.[0-9]+)?')),
      legajoDelEmpleado: new FormControl('', Validators.required)
    });
  }

  submitData() {
    if (this.rsForm.valid) {
      const formData = this.rsForm.value;

      this.http.post('http://localhost:8000/api/crear-recibo/', formData).subscribe({
        next: (response: any) => {
          console.log('Datos enviados exitosamente a Django:', response);
          this.formularioEnviado = true;
        },
        error: (error: any) => {
          console.error('Error al enviar los datos a Django:', error);
          // Maneja el error según tus necesidades, como mostrar un mensaje de error al usuario.
        }
      });
    }
  }

  updateData() {
    if (this.rsForm.valid) {
      const formData = this.rsForm.value;
      const idRecibo: string | undefined = formData.idRecibo!;
      if (idRecibo) {
        this.reciboService.modificarDatosEnDjango(idRecibo, formData).subscribe({
          next: response => {
            console.log('Datos modificados exitosamente:', response);
            // Realiza acciones adicionales después de modificar los datos, como mostrar un mensaje de éxito, redireccionar a otra página, etc.
          },
          error: error => {
            console.error('Error al modificar los datos:', error);
            // Maneja el error según tus necesidades, como mostrar un mensaje de error al usuario.
          }
        });
      }
    }
  }

  deleteData() {
    const idRecibo: string | undefined = this.rsForm.value.idRecibo!;
    if (idRecibo) {
      this.reciboService.eliminarDatosEnDjango(idRecibo).subscribe({
        next: response => {
          console.log('Datos eliminados exitosamente:', response);
          // Realiza acciones adicionales después de eliminar los datos, como mostrar un mensaje de éxito, redireccionar a otra página, etc.
        },
        error: error => {
          console.error('Error al eliminar los datos:', error);
          // Maneja el error según tus necesidades, como mostrar un mensaje de error al usuario.
        }
      });
    }
  }
}
