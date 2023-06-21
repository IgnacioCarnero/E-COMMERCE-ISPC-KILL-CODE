from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Empleado, ObraSocial
from databaseManager.serializer import *
from django.http import JsonResponse
from rest_framework.decorators import api_view
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