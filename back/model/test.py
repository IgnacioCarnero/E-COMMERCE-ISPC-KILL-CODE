#import EmpleadoM
from sys import path
path.append('..//controller')
from controller.empleado import Empleado
emp = Empleado(654321, 1, 1, 1, 7777777, 2077777775, "prueba", "grande", "fernet", 4321, "BANCO CREDICOP 128u0941u38418234", "alta@prueba.com", "laprueba@trabajo.com.ar", 45674567, 48769876, "SAR01", "2022-01-01", "1991-04-23", "Argentina", "Cordoba", "unaciudad")
emp.__str__()
#empt = EmpleadoM.EmpleadoM()
#empt.eliminarEmpleado(22222222)
