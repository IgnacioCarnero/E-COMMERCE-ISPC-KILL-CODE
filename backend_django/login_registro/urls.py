from django.urls import path
from . import views

app_name = 'login_registro'

urlpatterns = [
    path('registro/', views.signup, name='registro'),
    path('login/', views.login_view, name='login'),
]
