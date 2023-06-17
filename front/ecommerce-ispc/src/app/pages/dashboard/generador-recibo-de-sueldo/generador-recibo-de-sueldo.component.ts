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
    this.formService.submitForm(this.formData)
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
    const idRecibo = this.formData.id_recibo;

    this.formService.modifyForm(idRecibo, this.formData)
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
    const idRecibo = this.formData.id_recibo;

    this.formService.deleteForm(idRecibo)
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
