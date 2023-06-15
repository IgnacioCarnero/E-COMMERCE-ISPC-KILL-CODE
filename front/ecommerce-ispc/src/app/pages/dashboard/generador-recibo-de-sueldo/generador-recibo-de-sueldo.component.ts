import { Component } from '@angular/core';
import { GeneradorReciboSueldoService } from 'src/app/services/generador-recibo-sueldo.service';

@Component({
  selector: 'app-generador-recibo-de-sueldo',
  templateUrl: './generador-recibo-de-sueldo.component.html',
  styleUrls: ['./generador-recibo-de-sueldo.component.css']
})
export class GeneradorReciboDeSueldoComponent {
  formData: any = {};

  constructor(private formService: GeneradorReciboSueldoService) {}

  submitForm() {
    const formData = {
      id_recibo: (document.getElementById('id_recibo') as HTMLInputElement).value,
      montoBruto: (document.getElementById('montoBruto') as HTMLInputElement).value,
      montoNeto: (document.getElementById('montoNeto') as HTMLInputElement).value,
      periodo: (document.getElementById('periodo') as HTMLInputElement).value,
      antiguedad: (document.getElementById('antiguedad') as HTMLInputElement).value,
      concepto: (document.getElementById('concepto') as HTMLInputElement).value,
      asistencia: (document.getElementById('asistencia') as HTMLInputElement).value,
      fecha_pago: (document.getElementById('fecha_pago') as HTMLInputElement).value,
      deduccion: (document.getElementById('deduccion') as HTMLInputElement).value,
      extra: (document.getElementById('extra') as HTMLInputElement).value,
      legajo_empleado: (document.getElementById('legajo_empleado') as HTMLInputElement).value
    };

    this.formService.submitForm(formData)
      .subscribe(
        response => {
          // Handle success response from the server
          console.log(response);
          alert('Enviaste tus datos con éxito');
        },
        error => {
          // Handle error response from the server
          console.error(error);
          alert('Lamentablemente ocurrió un error');
        }
      );
  }

  modifyForm() {
    const idRecibo = (document.getElementById('id_recibo') as HTMLInputElement).value;

    this.formService.modifyForm(parseInt(idRecibo), this.formData)
      .subscribe(
        response => {
          // Handle success response from the server
          console.log(response);
          alert('Datos modificados con éxito');
        },
        error => {
          // Handle error response from the server
          console.error(error);
          alert('Lamentablemente ocurrió un error');
        }
      );
  }

  deleteForm() {
    const idRecibo = (document.getElementById('id_recibo') as HTMLInputElement).value;

    this.formService.deleteForm(parseInt(idRecibo))
      .subscribe(
        response => {
          // Handle success response from the server
          console.log(response);
          alert('Datos eliminados con éxito');
        },
        error => {
          // Handle error response from the server
          console.error(error);
          alert('Lamentablemente ocurrió un error');
        }
      );
  }
}
