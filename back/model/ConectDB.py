#Conexion con la base de datos. 
import mysql.connector

class Conectar():

    def __init__(self) -> None:
        self.__conexion = None
    
    def __generarConexion(self):
        try:
            self.__conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = '123456',
                db = 'recibohaberes'
            #Chicos tienen que modificar los valores de arriba acorde a sus PCs... Ojo!
            )
            return self.__conexion
        except mysql.connector.Error as descripcionError:
            print("Error en la conexion: ", descripcionError, sep="")


    def getConet(self):
        return self.__generarConexion()

