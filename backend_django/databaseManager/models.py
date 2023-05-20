from django.db import models

# Create your models here.

class Datos_Empleados(models.Model):
    dni = models.IntegerField(primary_key=True)
    nombre = models.CharField('nombre del empleado', max_length=200)
    apellido = models.CharField('apellido del empleado', max_length=200)
    d_calle = models.CharField('calle donde vive el empleado',max_length=200)
    d_numero = models.IntegerField()
    depa_provic = models.CharField('depa_provic del empleado', max_length=200)
    email_per = models.CharField('email personal del empleado',max_length=200)
    email_wk = models.CharField('email de trabajo del empleado',max_length=200)
    tel_per = models.IntegerField()
    tel_wk = models.IntegerField()
    categoria = models.CharField('categoria del empleado',max_length=200)
    fecha_ing = models.DateField()
    fecha_na= models.DateField('fecha de nacimiento')
    pais = models.CharField('pais del empleado',max_length=300)
    provincia = models.CharField('provincia del empleado',max_length=200)
    cuidad = models.CharField('ciudad del empleado',max_length=200)
    código_postal = models.IntegerField()
    
class Servicios(models.Model):
    id_servicios = models.IntegerField(primary_key=True)
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    nombre = models.CharField('nombre del servicio',max_length=200)

class Geo_Empresas(models.Model):
    cp = models.IntegerField(primary_key=True)
    provincia = models.CharField('provincia de la empresa', max_length=200)
    cuidad = models.CharField('ciudad de la empresa',max_length=200)
    pais = models.CharField('pais de la empresa',max_length=200)

class Datos_Empresas(models.Model):
    cuil = models.IntegerField(primary_key=True)
    cp_geo_empresa = models.ForeignKey(Geo_Empresas, blank=True, null=True, on_delete=models.CASCADE)
    nombre = models.CharField('nombre de la empresa',max_length=200)
    d_calle = models.CharField('calle de la empresa',max_length=200)
    d_numero = models.IntegerField()

class Empresas(models.Model):
    id_impre = models.IntegerField(primary_key=True)
    id_serv = models.ForeignKey(Servicios, blank=True, null=True, on_delete=models.CASCADE)
    cuil_datos_empre = models.ForeignKey(Datos_Empresas, blank=True, null=True, on_delete=models.CASCADE)
    
class Arts(models.Model):
    id_art = models.IntegerField(primary_key=True)
    nombre = models.CharField('nombre de arts', max_length=200)
    email = models.CharField('email de arts',max_length=200)
    tel = models.IntegerField()
    
class Obrassociales(models.Model):
    id_os = models.IntegerField(primary_key=True)
    tel = models.IntegerField()
    email = models.CharField('email de la obrasocial',max_length=200)
    nombre = models.CharField('nombre de la obrasocial',max_length=200)
    
class Empleados(models.Model):
    id_emp = models.IntegerField(primary_key=True)
    id_empre_empre = models.ForeignKey(Empresas, blank=True, null=True, on_delete=models.CASCADE)
    id_os_os = models.ForeignKey(Obrassociales, blank=True, null=True, on_delete=models.CASCADE)
    id_art_art = models.ForeignKey(Arts, blank=True, null=True, on_delete=models.CASCADE)
    dni_emp = models.ForeignKey(Datos_Empleados, blank=True, null=True, on_delete=models.CASCADE)
    cuil = models.IntegerField()
    
class Login(models.Model):
    user = models.CharField('ingresa usuario',max_length=200, primary_key=True)
    id_emp_emp = models.ForeignKey(Empleados, blank=True, null=True, on_delete=models.CASCADE)
    psw = models.CharField('contraseña usuario', max_length=200)
    last_log = models.DateField('últimamente ingresado')
    
class RecibosH(models.Model):
    id_deduc = models.IntegerField(primary_key=True)
    id_ing = models.ForeignKey(Empleados, blank=True, null=True, on_delete=models.CASCADE)
    montoB = models.DecimalField(max_digits=8, decimal_places=2)
    periodo = models.DateField('periodo')
    antiguedad = models.IntegerField()
    descrip = models.CharField('descripción de reciboh',max_length=200)
    asisypun = models.IntegerField()
    numero = models.IntegerField()
    f_pago = models.DateField('fecha del pago')
    
class Reclamos(models.Model):
    id_recla = models.IntegerField(primary_key=True)
    id_rec = models.ForeignKey(RecibosH, blank=True, null=True, on_delete=models.CASCADE)
    id_emp_emp = models.ForeignKey(Empleados, blank=True, null=True, on_delete=models.CASCADE)
    estado = models.CharField('estado de reclamo',max_length=200)
    descrip = models.CharField('descripción de reclamo',max_length=200)
    fecha = models.DateField('fecha')
    tipo = models.CharField('tip de reclamo',max_length=200)
    
class Supervisas(models.Model):
    id_emp_sa = models.ManyToManyField(Empleados, blank=True, related_name='id_emp_sa')
    id_emp_so = models.ManyToManyField(Empleados, blank=True, related_name='id_emp_so')
    
class Deducciones(models.Model):
    cod_deduc = models.IntegerField(primary_key=True)
    id_deduc_deduc = models.ForeignKey(RecibosH, blank=True, null=True, on_delete=models.CASCADE)
    monto_deduc = models.IntegerField()
    causa_deduc = models.CharField('causa de deducción',max_length=200)
    
class Extras(models.Model):
    tipo = models.CharField('tipo de extra',max_length=200, primary_key=True)
    id_rec = models.OneToOneField(RecibosH, on_delete=models.CASCADE)
    cantidad_emp = models.ForeignKey(Empleados, blank=True, null=True, on_delete=models.CASCADE)
    
class ContrataOs(models.Model):
    id_empre_empre = models.ManyToManyField(Empresas, blank=True)
    id_os_os = models.ManyToManyField(Obrassociales, blank=True)
    
class Permisos(models.Model):
    id_per = models.IntegerField(primary_key=True)
    id_ser = models.OneToOneField(Servicios, on_delete=models.CASCADE)
    per_bool = models.IntegerField()
    
class ContrataAs(models.Model):
    id_empre_empre = models.ManyToManyField(Empresas, blank=True)
    id_art_art = models.ManyToManyField(Arts, blank=True)
    
class Ingresos(models.Model):
    id_ingreso = models.IntegerField(primary_key=True)
    id_ing = models.DateField('id_ing')
    ingresoAnual = models.IntegerField()
    diaDePago = models.DateField('dia de pago')
    diaFinDePago = models.DateField('dia de fin de pago')
    periodoDePago = models.CharField('periodo de ingresos',max_length=200)
    
class ServiciosKillCode(models.Model):
    idServicio = models.IntegerField(primary_key=True)
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    detalle = models.CharField('detalle de servicio de kill code', max_length=200)
    nombreServicio = models.CharField('nombre de servicio de kill code', max_length=200)

class Pedidos(models.Model):
    idPedido = models.IntegerField(primary_key=True)
    valorTotal = models.DecimalField(max_digits=8, decimal_places=2)
    detalle = models.CharField('detalle de pedidos',max_length=200)
    cantidad = models.IntegerField()
    idServicio_killCode = models.ForeignKey(ServiciosKillCode, blank=True, null=True, on_delete=models.CASCADE)
    medioDePedido = models.CharField('medio de pago para pedidos', max_length=200)
    idEmpresa = models.ForeignKey(Empresas, blank=True, null=True, on_delete=models.CASCADE)
    fechaHora = models.DateTimeField()


class Facturas(models.Model):
    idFactura = models.IntegerField(primary_key=True)
    valorFactura = models.DecimalField(max_digits=8, decimal_places=2)
    detalleFactura = models.CharField('detalle de la factura', max_length=200)
    idPedido_ped = models.ForeignKey(Pedidos, blank=True, null=True, on_delete=models.CASCADE)
    cuitKillCode = models.IntegerField()
    tipoFactura = models.CharField('tipo de factura', max_length=200)
    IVA = models.DecimalField(max_digits=8, decimal_places=2)
    fechaHora = models.DateTimeField()
    




 
    
    
    