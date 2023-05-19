import { Clientes } from "./clientes";

export interface ClientesResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Clientes[];
  support:     Support;
}

 interface ReqUser {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

 interface Support {
  url:  string;
  text: string;
}
