from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .models import CustomUser
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate, login, get_user_model


class SignupView(APIView):
    def post(self, request):
        User = get_user_model()
        # Obtén el nombre de usuario del formulario
        username = request.data.get('Empresa')
        # Obtén el correo electrónico del formulario
        email = request.data.get('E-mail')
        # Obtén la contraseña del formulario
        password = request.data.get('Pass')
        # Obtén la confirmación de contraseña del formulario
        confirm_password = request.data.get('RePass')

        if password != confirm_password:
            return Response({'message': 'Las contraseñas no coinciden'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            User.objects.get(username=username)
            return Response({'message': 'El nombre de usuario ya está en uso'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            pass

        try:
            User.objects.get(email=email)
            return Response({'message': 'El correo electrónico ya está registrado'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            pass

        new_user = User(username=username, email=email)
        new_user.set_password(password)
        new_user.save()

        return Response({'message': 'Usuario registrado con éxito'}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self, request):
        # Obtén el nombre de usuario del formulario
        username = request.data.get('floatingInput')
        # Obtén la contraseña del formulario
        password = request.data.get('floatingPassword')

        user = authenticate(request, username=username,
                            password=password)  # Autenticar al usuario

        if user is not None:
            login(request, user)  # Iniciar sesión
            return Response({'message': 'Inicio de sesión exitoso'})
        else:
            return Response({'message': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
