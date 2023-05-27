
import ConectDB
class OSM:
    def __init__(self) -> None:
        self.__conet= ConectDB.Conectar().getConet()

    def registrarObraSocial(self, obj):
        #recibe el objeto del tipo ObraSocial a registrar en la base
        cur = self.__conet.cursor()
        cur.execute("INSERT INTO obrasocial VALUES ('')")
    def eliminarObraSocial(self, id):
        #recibe el id del ObraSocial a eliminar
        cur = self.__conet.cursor()
        cur.execute("DELETE FROM obrasocial WHERE")
    def modificarObraSocial(self, id):
        #recibe el id ObraSocial para buscar y retornar los datos
        cur = self.__conet.cursor()
        cur.execute("SELECT * FROM obrasocial JOIN")
    def actualizarObraSocial(self, obj):
        #recibe el objeto ObraSocial a actualizar
        cur = self.__conet.cursor()
