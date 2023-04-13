
import ConectDB
class EmpresaM:
    def __init__(self) -> None:
        self.__conet= ConectDB.Conectar().getConet()

    def registrarEmpresa(self, obj):
        #recibe el objeto del tipo empresa a registrar en la base
        cur = self.__conet.cursor()
        cur.execute("INSERT INTO empresa VALUES ('')")
    def eliminarEmpresa(self, id):
        #recibe el id de la empresa a eliminar
        cur = self.__conet.cursor()
        cur.execute("DELETE FROM empresa WHERE")
    def mostrarEmpresa(self, id):
        #recibe el id de la empresa para buscar y retornar los datos
        cur = self.__conet.cursor()
        cur.execute("SELECT * FROM empresa JOIN")
    def actualizarEmpresa(self, obj):
        #recibe el objeto empleado a actualizar
        cur = self.__conet.cursor()
