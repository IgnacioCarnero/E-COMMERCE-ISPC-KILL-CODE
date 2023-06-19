from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Empleado, ObraSocial,CustomUser
from databaseManager.serializer import *
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db import IntegrityError
# Create your views here.

class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(request, email=email, password=password)

        # Si es correcto añadimos a la request la informacion de sesion
        if user:
            login(request, user)
            return Response(
                 UserSerializer(user).data, 
                 status=status.HTTP_200_OK)
        
        # Si no es correcto devolvemos un error en la peticion
        return Response(status=status.HTTP_404_NOT_FOUND)
    
class LogoutView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        # Borramos de la rquest la informacion de sesion
        logout(request)
        # Crear una respuesta vacía
        response = JsonResponse({}, status=status.HTTP_200_OK)
        #Devolvemos la respuesta al cliente
        return response
    
class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer



class RegisterUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            confirm_password = serializer.validated_data['confirm_password']

            if password != confirm_password:
                return Response({'error': 'Las contraseñas no coinciden'}, status=status.HTTP_400_BAD_REQUEST)

            try:
                # Crea un nuevo usuario personalizado
                user = CustomUser.objects.create_user(username=email, email=email, password=password)
                return Response({'message': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
            except IntegrityError as e:
                return Response({'error': 'Error al crear el usuario: {}'.format(str(e))}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CrearEmpleadoView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CrearEmpleadoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Empleado creado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ListarEmpleadosView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        empleados = Empleado.objects.all()
        serializer = ListarEmpleadoSerializer(empleados, many=True)
        return Response(serializer.data)
    
class ModificarEmpleadoView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, legajo):
        empleado = Empleado.objects.get(legajo=legajo)
        serializer = ModificarEmpleadoSerializer(empleado, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Empleado modificado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EliminarEmpleadoView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, legajo):
        empleado = Empleado.objects.get(legajo=legajo)
        empleado.delete()
        return Response({"mensaje": "Empleado eliminado exitosamente"})
    
class CrearReciboView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CrearReciboSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Recibo creado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListarReciboView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        recibos = Recibo.objects.all()
        serializer = ListarReciboSerializer(recibos, many=True)
        return Response(serializer.data)
    
class ModificarReciboView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, id_recibo):
        recibo = Recibo.objects.get(id_recibo=id_recibo)
        serializer = ModificarReciboSerializer(recibo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Recibo modificado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EliminarReciboView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id_recibo):
        recibo = Recibo.objects.get(id_recibo=id_recibo)
        serializer = EliminarReciboSerializer(recibo)
        recibo.delete()
        return Response({"mensaje": "Recibo eliminado exitosamente"})

class CrearReclamoView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CrearReclamoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Reclamo creado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ListarReclamoView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        reclamos = Reclamo.objects.all()
        serializer = ListarReclamoSerializer(reclamos, many=True)
        return Response(serializer.data)
    
class ModificarReclamoView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, id_recla):
        reclamo = Reclamo.objects.get(id_recla=id_recla)
        serializer = ModificarReclamoSerializer(reclamo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Reclamo modificado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EliminarReclamoView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, id_recla):
        reclamo = Empleado.objects.get(id_recla=id_recla)
        serializer = EliminarReclamoSerializer(reclamo)
        reclamo.delete()
        return Response({"mensaje": "Reclamo eliminado exitosamente"})
    
class CrearPedidoView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = CrearPedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Pedido creado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class VerPedidoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        pedidos = Pedido.objects.all()
        serializer = ListarPedidoSerializer(pedidos, many=True)
        return Response(serializer.data)