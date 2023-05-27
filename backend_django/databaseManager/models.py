from django.db.models import Sum
from django.db import models

# Create your models here.

class Empleado(models.Model):
    legajo = models.IntegerField(primary_key=True)
    nombre = models.CharField('nombre del empleado', max_length=200)
    apellido = models.CharField('apellido del empleado', max_length=200)
    calle = models.CharField('calle donde vive el empleado',max_length=200)
    casa_piso_numero = models.IntegerField()
    provincia = models.CharField('provincia del empleado', max_length=200)
    email = models.CharField('email personal del empleado',max_length=200)
    telefono = models.BigIntegerField()
    cargo = models.CharField('cargo del empleado', max_length=200)
    categoria = models.CharField('categoria del empleado',max_length=200)
    fecha_ingreso = models.DateField()
    fecha_nacimiento= models.DateField('fecha de nacimiento')
    ciudad = models.CharField('ciudad del empleado',max_length=200)
    cuil_empleado = models.BigIntegerField('cuil del empleado')
    obra_social = models.OneToOneField('ObraSocial', on_delete=models.CASCADE, related_name='empleados')
    art = models.OneToOneField('Art', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.legajo} - {self.apellido}"

class Empresa(models.Model):
    cuit = models.BigIntegerField(primary_key=True)
    nombre = models.CharField('nombre de la empresa',max_length=200)
    direccion = models.CharField('direccion de la empresa',max_length=200)
    ciudad = models.CharField('direccion de la empresa',max_length=200)
    provincia = models.CharField('direccion de la empresa',max_length=200)
    art_contratada = models.OneToOneField('Art', on_delete=models.CASCADE, related_name='aseguradora')

    def __str__(self):
        return f"{self.nombre} - {self.cuit}"

    
class Art(models.Model):
    id_art = models.IntegerField(primary_key=True)
    nombre = models.CharField('nombre de arts', max_length=200)
    email = models.CharField('email de arts',max_length=200)
    telefono = models.BigIntegerField()

    def __str__(self):
        return f"{self.nombre}"
    
class ObraSocial(models.Model):
    id_ObraSocial = models.IntegerField(primary_key=True)
    telefono = models.BigIntegerField()
    email = models.CharField('email de la obrasocial',max_length=200)
    nombre = models.CharField('nombre de la obrasocial',max_length=200)

    def __str__(self):
        return f"{self.nombre}"
    

class Deduccion(models.Model):
    cod_deduccion = models.IntegerField(primary_key=True)
    porcentaje_deduccion = models.DecimalField(max_digits=8, decimal_places=2)
    causa_deduccion = models.CharField('causa de deducción',max_length=200)

    def __str__(self):
        return f"{self.porcentaje_deduccion} - {self.causa_deduccion}"


class Extra(models.Model):
    cod_extra = models.IntegerField(primary_key=True)
    causa_extra = models.CharField('tipo de extra',max_length=200)
    monto_extra = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"{self.monto_extra} - {self.causa_extra}"

class Recibo(models.Model):
    id_recibo = models.IntegerField(primary_key=True)
    montoBruto = models.DecimalField(max_digits=8, decimal_places=2)
    montoNeto = models.DecimalField(max_digits=8, decimal_places=2)
    periodo = models.DateField('periodo')
    antiguedad = models.IntegerField()
    concepto = models.CharField('descripción de reciboh',max_length=200)
    asistencia = models.DecimalField(max_digits=8, decimal_places=2)
    fecha_pago = models.DateField('fecha del pago')
    deduccion = models.ForeignKey(Deduccion, on_delete=models.CASCADE)
    extra = models.ForeignKey(Extra, blank=True, null=True, on_delete=models.CASCADE, default=0)
    legajo_empleado = models.OneToOneField(Empleado, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
            monto_deduccion = self.montoBruto * (self.deduccion.porcentaje_deduccion / 100)
            if self.extra is None:
                self.montoNeto = self.montoBruto + self.asistencia - monto_deduccion
            else:
                self.montoNeto = self.montoBruto + self.extra.monto_extra + self.asistencia - monto_deduccion
            super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.periodo}"
        
class Reclamo(models.Model):
    id_recla = models.IntegerField(primary_key=True)
    recibo = models.OneToOneField(Recibo, blank=True, null=True, on_delete=models.CASCADE)
    empleado = models.OneToOneField(Empleado, blank=True, null=True, on_delete=models.CASCADE)
    estado = models.CharField('estado de reclamo',max_length=200)
    descripcion = models.CharField('descripción de reclamo',max_length=200)
    fecha = models.DateField('fecha')
    tipo = models.CharField('tipo de reclamo',max_length=200)

    def __str__(self):
        return f"{self.id_recla}"
     
    
class ServiciosKillCode(models.Model):
    idServicio = models.IntegerField(primary_key=True)
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    detalle = models.CharField('detalle de servicio de kill code', max_length=200)
    nombreServicio = models.CharField('nombre de servicio de kill code', max_length=200)

    def __str__(self):
        return f"{self.nombreServicio}"

class Pedido(models.Model):
    idPedido = models.IntegerField(primary_key=True)
    valorTotal = models.DecimalField(max_digits=8, decimal_places=2)
    detalle = models.CharField('detalle de pedidos',max_length=200)
    cantidad = models.IntegerField()
    Servicio = models.ForeignKey(ServiciosKillCode, blank=True, null=True, on_delete=models.CASCADE)
    medioDePago = models.CharField('medio de pago para pedidos', max_length=200)
    Empresa = models.OneToOneField(Empresa, blank=True, null=True, on_delete=models.CASCADE)
    fechaHora = models.DateTimeField()

    def __str__(self):
        return f"{self.idPedido}"


class Factura(models.Model):
    idFactura = models.IntegerField(primary_key=True)
    valorFactura = models.DecimalField(max_digits=8, decimal_places=2)
    detalleFactura = models.CharField('detalle de la factura', max_length=200)
    Pedido = models.OneToOneField(Pedido, blank=True, null=True, on_delete=models.CASCADE)
    cuitKillCode = models.IntegerField()
    tipoFactura = models.CharField('tipo de factura', max_length=200)
    IVA = models.DecimalField(max_digits=8, decimal_places=2)
    fechaHora = models.DateTimeField()

    def __str__(self):
        return f"{self.idFactura}"

    def save(self, *args, **kwargs):
            self.IVA = (self.IVA / 100)
            if self.Pedido:
                self.valorFactura = (self.Pedido.valorTotal * self.IVA) + self.Pedido.valorTotal
            super().save(*args, **kwargs)

class Contacto(models.Model):
    nombre = models.CharField('nombre de quien contacta', max_length=200)
    email = models.EmailField()
    comentario = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.email}"
 
    
    
    