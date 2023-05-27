from django.contrib import admin
from .models import *

from .models import Empleado, Empresa, Art, ObraSocial, Recibo, Reclamo, Deduccion
from .models import Extra, Contacto, ServiciosKillCode, Factura, Pedido

class EmpleadoAdmin(admin.ModelAdmin):
    list_display = ('legajo', 'nombre', 'apellido', 'calle', 'casa_piso_numero', 'provincia', 'email',
                     'telefono', 'cargo', 'categoria', 'fecha_ingreso', 'fecha_nacimiento', 'ciudad',
                       'cuil_empleado', 'obra_social', 'art')

class EmpresaAdmin(admin.ModelAdmin):
    list_display = ('cuit', 'nombre', 'direccion', 'ciudad', 'provincia', 'art_contratada')

class ArtAdmin(admin.ModelAdmin):
    list_display = ('id_art', 'nombre', 'email', 'telefono')

class ObraSocialAdmin(admin.ModelAdmin):
    list_display = ('id_ObraSocial', 'telefono', 'email', 'nombre')

class DeduccionAdmin(admin.ModelAdmin):
    list_display = ('cod_deduccion', 'porcentaje_deduccion', 'causa_deduccion')

class ExtraAdmin(admin.ModelAdmin):
    list_display = ('cod_extra', 'causa_extra', 'monto_extra')

class ReciboAdmin(admin.ModelAdmin):
    list_display = ('id_recibo', 'montoBruto', 'montoNeto', 'periodo', 'antiguedad', 'concepto', 
                    'asistencia', 'fecha_pago', 'deduccion', 'extra', 'legajo_empleado')

class ReclamoAdmin(admin.ModelAdmin):
    list_display = ('id_recla', 'recibo', 'empleado', 'estado', 'descripcion', 'fecha', 'tipo')

class ServicioKillCodeAdmin(admin.ModelAdmin):
    list_display = ('idServicio', 'valor', 'detalle', 'nombreServicio')

class PedidoAdmin(admin.ModelAdmin):
    list_display = ('idPedido', 'valorTotal', 'detalle', 'cantidad',
                     'Servicio', 'medioDePago', 'Empresa', 'fechaHora')

class FacturaAdmin(admin.ModelAdmin):
    list_display = ('idFactura', 'valorFactura', 'detalleFactura', 'Pedido', 
                    'cuitKillCode', 'tipoFactura', 'IVA', 'fechaHora')
    
class ContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'comentario')

admin.site.register(Empleado, EmpleadoAdmin)
admin.site.register(Empresa, EmpresaAdmin)
admin.site.register(Art, ArtAdmin)
admin.site.register(ObraSocial, ObraSocialAdmin)
admin.site.register(Deduccion, DeduccionAdmin)
admin.site.register(Extra, ExtraAdmin)
admin.site.register(Recibo, ReciboAdmin)
admin.site.register(Reclamo, ReclamoAdmin)
admin.site.register(ServiciosKillCode, ServicioKillCodeAdmin)
admin.site.register(Pedido, PedidoAdmin)
admin.site.register(Factura, FacturaAdmin)
admin.site.register(Contacto, ContactoAdmin)


