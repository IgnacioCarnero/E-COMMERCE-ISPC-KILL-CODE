export class Clientes {


  constructor (
    public id:          number,
    public email:       string,
    public nombre:      string,
    public apellido:    string,
    public avatar:      string,
  ) {}

  get fullName() {
    return `${this.nombre} + ${this.apellido}`;
  }
}
