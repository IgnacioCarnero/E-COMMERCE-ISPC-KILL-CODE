from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UserSerializer
from .serializer import CrearEmpleadoSerializer, CrearReciboSerializer
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Empleado, ObraSocial

# Create your views here.

class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

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

        #Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)
    
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
    
class CrearReciboView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CrearReciboSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "Recibo creado exitosamente"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


