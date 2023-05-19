import { Clientes } from "./clientes";

export interface ClientesResponse {
  data:        Clientes[];
}

 interface ReqCliente {
  id:         number;
  email:      string;
  nombre:     string;
  apellido:   string;
  avatar:     string;
}

