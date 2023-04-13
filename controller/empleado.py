class Empleado:

    def __init__(self, id_emp, id_empre, id_os, id_art, dni, cuil, nombre, apellido, d_nombre, d_numero, depo_provic, email_per, email_wk, tel_per, tel_wk, categoria, fecha_ing, fecha_nac, pais, provincia, ciudad):
        self.id_emp = id_emp
        self.id_empre = id_empre
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        self.fecha_nac = fecha_nac
        self.email_per = email_per
        self.email_wk = email_wk
        self.id_os = id_os
        self.id_art = id_art
        self.d_nombre = d_nombre
        self.d_numero = d_numero
        self.depo_provic = depo_provic
        self.categoria = categoria
        self.provincia = provincia
        self.fecha_ing = fecha_ing
        self.ciudad = ciudad
        self.cuil = cuil
        self.pais = pais
        self.tel_per = tel_per
        self.tel_wk = tel_wk

    def __str__(self):
        return f"Empleado: {self.nombre + self.apellido}.\nLegajo: {self.id_emp}"

    # Getters

    def get_id_emp(self):
        return self.id_emp
    
    def get_id_empre(self):
        return self.id_empre
    
    def get_id_os(self):
        return self.id_os

    def get_categoria(self):
        return self.categoria
    
    def get_dni(self):
        return self.dni
    
    def get_nombre(self):
        return self.nombre
    
    def get_apellido(self):
        return self.apellido
    
    def get_fecha_nac(self):
        return self.fecha_nac
    
    def get_email_per(self):
        return self.email_per
    
    def get_email_wk(self):
        return self.email_wk
    
    def get_tel_per(self):
        return self.tel_per
    
    def get_tel_wk(self):
        return self.tel_wk
    
    def get_d_nombre(self):
        return self.d_nombre
    
    def get_d_numero(self):
        return self.d_numero
    
    def get_depo_provic(self):
        return self.depo_provic
    
    def get_ciudad(self):
        return self.ciudad
    
    def get_provincia(self):
        return self.provincia
    
    def get_pais(self):
        return self.pais
    
    def get_cuil(self):
        return self.cuil

    def get_art(self):
        return self.id_art
    
    def get_fecha_ing(self):
        return self.fecha_ing

    @classmethod
    # Método por el cual se maneja el login de los empleados.
    def login(self):
        print("Login")
    
    @classmethod
    # Método por el cual se maneja el registro de los empleados.
    def registro(self):
        print("Registro")
    
    @classmethod
    # Método por el cual se guarda el POST / respuesta del front cuando presiona el botón de "Firmar" en el recibo para luego enviárselo a la BBDD.
    def firmarRecibo(self):
        print("Firmar recibo")
    
    @classmethod
    # Método por el cual se devuelve al front el GET / respuesta de la BBDD con los datos NO sensibles del empleado para su uso.
    def brindarDatosPersonales(self):
        # Acá se transformaría en un objeto lo recibido por la BBDD. Solamente los datos que necesitemos. Por ahora hardcodeamos.
        datos_personales = {
            "name": "Juan",
            "surname": "Perez",
            "age": 30,
            "sex": "Masculino",
            "personal_email": "fulano@gmail.com",
            "work_email": "fulano@google.com",
            "personal_phone": "123456789",
            "work_phone": "987654321",
            "home_address": "Calle Falsa 123",
            "work_address": "Otra Calle Falsa 123",
            "postal_code": "1234",
            "city": "CABA",
            "province": "CABA",
            "country": "Argentina",
        }
        #datos_personales_json = json.dumps(datos_personales, indent=2)
        #return datos_personales_json
    
    @classmethod
    def elegirObraSocial(self):
        print("Se eligio obra social")
