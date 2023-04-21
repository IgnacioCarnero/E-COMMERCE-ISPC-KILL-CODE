import json

class Reclamo:

    def __init__(self, id, date, description, status):
        self.id = id
        self.date = date
        self.description = description
        self.status = status

    def __str__(self):
        return f"Reclamo: {self.id} | {self.date}.\nDescripcion: {self.description}\Estado: {self.status}."

    # Getters

    def get_id(self):
        return self.id

    def get_date(self):
        return self.date
    
    def get_description(self):
        return self.description
    
    def get_status(self):
        return self.status

    @classmethod
    # Método por el cual se guarda el POST / respuesta del front cuando finaliza la creación del reclamo para luego enviárselo a la BBDD.
    def crearReclamo(self):
        # Trae del FRONTEND el reclamo creado por el usuario.
        print("Crear reclamo")
    
    @classmethod
    # Método por el cual se responde al GET / de la API para que el front pueda mostrar los reclamos.
    def mostrarReclamos(self):
        # Manda al FRONTEND los reclamos del usuario.

        #Acá recibiríamos los reclamos de la BBDD.
        reclamo = json.dumps({"name": "John", "date": ""}, indent=2)
        reclamos = [

        ]

        
    
# reclamo = Reclamo(1, "2021-05-01", "El servicio no llegó a tiempo.", "Pendiente")
# reclamo.crearReclamo()

reclamos = [
    Reclamo(1, "2021-05-01", "El servicio no llegó a tiempo.", "Pendiente"),
    Reclamo(2, "2021-05-02", "El servicio no llegó a tiempo.", "Pendiente"),
    Reclamo(3, "2021-05-03", "El servicio no llegó a tiempo.", "Pendiente")
]


import json

class Reclamo:

    def __init__(self, id, date, description, status):
        self.id = id
        self.date = date
        self.description = description
        self.status = status

    def __str__(self):
        return f"Reclamo: {self.id} | {self.date}.\nDescripcion: {self.description}\Estado: {self.status}."

    # Getters

    def get_id(self):
        return self.id

    def get_date(self):
        return self.date
    
    def get_description(self):
        return self.description
    
    def get_status(self):
        return self.status

    @classmethod
    # Método por el cual se guarda el POST / respuesta del front cuando finaliza la creación del reclamo para luego enviárselo a la BBDD.
    def crearReclamo(self):
        # Trae del FRONTEND el reclamo creado por el usuario.
        print("Crear reclamo")
    
    @classmethod
    # Método por el cual se responde al GET / de la API para que el front pueda mostrar los reclamos.
    def mostrarReclamos(self):
        # Manda al FRONTEND los reclamos del usuario.

        #Acá recibiríamos los reclamos de la BBDD.
        reclamo = json.dumps({"name": "John", "date": ""}, indent=2)
        reclamos = [

        ]

        
    
# reclamo = Reclamo(1, "2021-05-01", "El servicio no llegó a tiempo.", "Pendiente")
# reclamo.crearReclamo()

reclamos = [
    Reclamo(1, "2021-05-01", "El servicio no llegó a tiempo.", "Pendiente"),
    Reclamo(2, "2021-05-02", "El servicio no llegó a tiempo.", "Pendiente"),
    Reclamo(3, "2021-05-03", "El servicio no llegó a tiempo.", "Pendiente")
]
print(reclamos[2])