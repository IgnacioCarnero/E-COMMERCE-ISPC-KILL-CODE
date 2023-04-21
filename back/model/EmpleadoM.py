import ConectDB
class EmpleadoM:
    def __init__(self) -> None:
        self.__conet= ConectDB.Conectar().getConet()

    def registrarEmpleado(self, obj):
        #recibe el objeto del tipo empleado empleado a registrar en la base
        cur = self.__conet.cursor()
        text = str(obj.get_dni()) + "," + str(obj.get_nombre()) + "," + str(obj.get_apellido()) + "," + str(obj.get_d_calle()) + "," + str(obj.get_d_numero()) + "," + str(obj.get_depo_provic()) + "," + str(obj.get_email_per()) + "," + str(obj.get_email_wk()) + "," + str(obj.get_tel_per()) + "," + str(obj.get_tel_wk()) + "," + str(obj.get_categoria()) + "," + str(obj.get_fecha_ing()) + "," + str(obj.get_fecha_nac()) + "," + str(obj.get_pais()) + "," + str(obj.get_provincia()) + "," + str(obj.get_ciudad())
        query = "INSERT INTO datos_empleado VALUES (" + text + ")"
        query2 = "INSERT INTO empleado VALUES (" +  str(obj.get_id_emp()) + str(obj.get_id_empre()) + str(obj.get_id_os()) + str(obj.get_id_art()) + str(obj.get_dni()) + str(obj.get_cuil()) + ")"
        if cur.execute(query):
            if cur.execute(query2):
                print("Se dio de alta el empleado")
            else:
                print("Se pudo agregar los datos personales pero no el alta ")
        else:
            print("No se puedo agregar los datos personales del empleado")

            
    #-------------------------------------------------------------------------------
    def eliminarEmpleado(self, obj):
        #recibe el id del empleado a eliminar
        cur = self.__conet.cursor()
        query = "DELETE datos_empleado, empleado FROM datos_empleado JOIN empleado WHERE empleado.dni = " + str(obj.get_dni()) + ""
        if cur.execute(query):
            print("Se elimino correctamente")
        else:
            print("No se pudo eliminar")
    #-------------------------------------------------------------------------------
    def mostrarEmpleado(self, id):
        #recibe el id empleado para buscar y retornar los datos
        cur = self.__conet.cursor()
        query = "SELECT * FROM empleado INNER JOIN datos_empleado WHERE empleado.id_emp = " + str(id) +""
        cur.execute(query)
        for x in cur:
            print(x, end="\n")
    #--------------------------------------------------------------------------------   
    def actualizarEmpleado(self, obj):
        #recibe el objeto empleado a actualizar, se elimina y se agrega nuevamente con los datos actualizado.
        try:
            self.eliminarEmpleado(obj)
            self.registrarEmpleado(obj)
        except:
            print("No se pudo actualizar el empleado")
        
