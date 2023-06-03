from django.contrib.auth import authenticate, login, logout
<<<<<<< HEAD
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import UserSerializer
=======
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf

# Create your views here.

class LoginView(APIView):
    def post(self, request):
<<<<<<< HEAD
        # Recuperamos las credenciales y autenticamos al usuario
=======
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

<<<<<<< HEAD
        # Si es correcto añadimos a la request la informacion de sesion
        if user:
            login(request, user)
            return Response(
                 UserSerializer(user).data, 
                 status=status.HTTP_200_OK)
        
        # Si no es correcto devolvemos un error en la peticion
        return Response(status=status.HTTP_404_NOT_FOUND)
    
class LogoutView(APIView):
    def post(self, request):
        # Borramos de la rquest la informacion de sesion
        logout(request)
=======
        if user:
            login(request, user)
            return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf

        #Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer

<<<<<<< HEAD
=======
class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf
