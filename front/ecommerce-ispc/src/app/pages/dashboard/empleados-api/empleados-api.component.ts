import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../../services/empleados.service'

@Component({
  selector: 'app-empleados-api',
  templateUrl: './empleados-api.component.html',
  styleUrls: ['./empleados-api.component.css']
})
export class EmpleadosApiComponent implements OnInit {


  public clientes: any = []

  constructor (private empleadosService : EmpleadosService) {  }

  ngOnInit(): void {

    this.empleadosService.cargarClientes()
      .subscribe(resp => {
        console.log(resp);

        this.clientes = resp.data
      })
  }
}
