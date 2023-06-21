from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import *


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password', 'id')


    def validate_password(self, value):
        return make_password(value)


class CrearEmpleadoSerializer(serializers.ModelSerializer):
    legajo = serializers.IntegerField()
    nombre = serializers.CharField(max_length=200)
    apellido = serializers.CharField(max_length=200)
    calle = serializers.CharField(max_length=200)
    casa_piso_numero = serializers.IntegerField()
    provincia = serializers.CharField(max_length=200)
    email = serializers.CharField(max_length=200)
    telefono = serializers.IntegerField()
    cargo = serializers.CharField(max_length=200)
    categoria = serializers.CharField(max_length=200)
    fecha_ingreso = serializers.DateField()
    fecha_nacimiento = serializers.DateField()
    ciudad = serializers.CharField(max_length=200)
    cuil_empleado = serializers.IntegerField()
    obra_social = serializers.SlugRelatedField(slug_field='id_ObraSocial', queryset=ObraSocial.objects.all())
    art = serializers.SlugRelatedField(slug_field='id_art', queryset=Art.objects.all())

    class Meta:
        model = Empleado
        fields = '__all__'

class ListarEmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['legajo', 'apellido', 'nombre', 'cargo', 'categoria','obra_social','art', 'telefono',
                  'cuil_empleado','provincia', 'ciudad', 'calle', 'casa_piso_numero', 'email',
                  'fecha_ingreso', 'fecha_nacimiento']
        
class ModificarEmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['legajo', 'apellido', 'nombre', 'cargo', 'categoria','obra_social','art', 'telefono',
                  'cuil_empleado','provincia', 'ciudad', 'calle', 'casa_piso_numero', 'email',
                  'fecha_ingreso', 'fecha_nacimiento']

class EliminarEmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = []

class CrearReciboSerializer(serializers.ModelSerializer):
    id_recibo = serializers.IntegerField()
    montoBruto = serializers.DecimalField(max_digits=8, decimal_places=2)
    montoNeto = serializers.DecimalField(max_digits=8, decimal_places=2)
    periodo = serializers.DateField()
    antiguedad = serializers.IntegerField()
    concepto = serializers.CharField(max_length=200)
    asistencia = serializers.DecimalField(max_digits=8, decimal_places=2)
    fecha_pago = serializers.DateField()
    deduccion = serializers.SlugRelatedField(
        slug_field='cod_deduccion', queryset=Deduccion.objects.all())
    extra = serializers.SlugRelatedField(
        slug_field='cod_extra', queryset=Extra.objects.all())
    legajo_empleado = serializers.SlugRelatedField(
        slug_field='legajo', queryset=Empleado.objects.all())
    
    class Meta:
        model = Recibo
        fields = '__all__'

class ListarReciboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recibo
        fields = ['id_recibo', 'montoBruto', 'montoNeto', 'periodo', 'antiguedad', 'concepto',
                  'asistencia', 'fecha_pago', 'deduccion', 'extra', 'legajo_empleado']
        
class ModificarReciboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recibo
        fields = ['id_recibo', 'montoBruto', 'montoNeto', 'periodo', 'antiguedad', 'concepto',
                  'asistencia', 'fecha_pago', 'deduccion', 'extra', 'legajo_empleado']

class EliminarReciboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recibo
        fields = []

class CrearReclamoSerializer(serializers.ModelSerializer):
    id_recla = serializers.IntegerField()
    recibo = serializers.SlugRelatedField(
        slug_field='id_recibo', queryset=Recibo.objects.all())
    empleado = serializers.SlugRelatedField(
        slug_field='legajo', queryset=Empleado.objects.all())
    estado = serializers.CharField(max_length=200)
    descripcion = serializers.CharField(max_length=200)
    fecha = serializers.DateField()
    tipo = serializers.CharField(max_length=200)
    
    class Meta:
        model = Reclamo
        fields = '__all__'

class ListarReclamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamo
        fields = ['id_recla', 'recibo', 'empleado', 'estado', 'descripcion', 'fecha',
                  'tipo']
        
class ModificarReclamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamo
        fields = ['id_recla', 'recibo', 'empleado', 'estado', 'descripcion', 'fecha',
                  'tipo']

class EliminarReclamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamo
        fields = []

class CrearPedidoSerializer(serializers.ModelSerializer):
    valorTotal = serializers.DecimalField(max_digits=8, decimal_places=2)
    detalle = serializers.CharField(max_length=200)
    Servicio = serializers.PrimaryKeyRelatedField(queryset=ServiciosKillCode.objects.all())
    nombre_tarjeta = serializers.CharField(max_length=200)
    numero_tarjeta = serializers.CharField(max_length=200)
    vencimiento = serializers.DateField()
    Cvv = serializers.IntegerField()
    CustomUser = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())
    fechaHora = serializers.DateTimeField()

    class Meta:
        model = Pedido
        fields = '__all__'

class ListarPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = ['idPedido', 'valorTotal', 'detalle', 'Servicio', 'nombre_tarjeta', 'numero_tarjeta',
                   'vencimiento', 'Cvv', 'CustomUser', 'fechaHora']

class CustomUserSerializer(serializers.ModelSerializer):
    companynameregister = serializers.CharField(source='company_name')
    emailregister = serializers.EmailField(source='email')
    userpasswordregister = serializers.CharField(source='password')
    confirmpasswordregister = serializers.CharField(source='confirm_password')

    class Meta:
        model = CustomUser
        fields = ['id','companynameregister', 'emailregister', 'userpasswordregister', 'confirmpasswordregister']
