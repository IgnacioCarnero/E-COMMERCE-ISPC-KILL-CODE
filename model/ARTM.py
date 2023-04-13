import ConectDB
class ARTM:
    def __init__(self) -> None:
        self.__conet= ConectDB.Conectar().getConet()

    def registrarART(self, obj):
        #recibe el objeto del tipo ART a registrar en la base
        cur = self.__conet.cursor()
        cur.execute("INSERT INTO art VALUES ('')")
    def eliminarART(self, id):
        #recibe el id del ART a eliminar
        cur = self.__conet.cursor()
        cur.execute("DELETE FROM art WHERE")
    def modificarART(self, id):
        #recibe el id ART para buscar y retornar los datos
        cur = self.__conet.cursor()
        cur.execute("SELECT * FROM art JOIN")
    def actualizarART(self, obj):
        #recibe el objeto ART a actualizar
        cur = self.__conet.cursor()

