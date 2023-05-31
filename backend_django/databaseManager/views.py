from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login

<<<<<<< HEAD
# Create your views here.
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class LoginView(APIView):
    def post (self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        if (user):
            login(request, user)
            return Response(
                status=status.HTTP_200_OK
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND
        )
    
class LogoutView(APIView):
    def post (self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
=======

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('databaseManager:inicio')
    else:
        form = UserCreationForm()
    return render(request, 'registro.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('databaseManager:inicio')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})
>>>>>>> 5bfee0f06930a529ceddd3a79904e131ec24f651
