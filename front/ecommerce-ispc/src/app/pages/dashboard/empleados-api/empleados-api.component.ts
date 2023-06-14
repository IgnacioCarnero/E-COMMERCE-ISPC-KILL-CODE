import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../../services/empleados.service'
import { Clientes} from '../../../interface'

@Component({
  selector: 'app-empleados-api',
  templateUrl: './empleados-api.component.html',
  styleUrls: ['./empleados-api.component.css']
})
export class EmpleadosApiComponent /*implements OnInit se comenta para que no se ejecute por el momento */ {


  public empleados: any[] = []

  constructor (private empleadosService : EmpleadosService) {  }

  /*ngOnInit(): void {

    this.empleadosService.getClientes()
      .subscribe(clientes => {
        this.empleados = clientes
      })
  } Se comenta para que no se ejecute y de error en consola, momentaneamente*/

  editarCliente(id: any) {
    console.log(id);
  }

  nuevoCliente() {

  }

  // delete(cliente : Clientes) : void {
  //   this.empleados = this.empleados.filter(cli => cli.id !== cliente.id)
  //   this.empleadosService.deleteCliente(cliente).subscribe()
  // }


}
