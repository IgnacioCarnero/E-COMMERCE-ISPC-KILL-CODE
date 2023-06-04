from django.urls import path, include
from .views import LoginView, LogoutView, SignupView, CrearEmpleadoView, CrearReciboView

urlpatterns = [
    # Auth views
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/signup/', SignupView.as_view(), name='auth_signup'),
    path('crear-empleado/', CrearEmpleadoView.as_view(), name='crear-empleado'),
    path('crear-recibo/', CrearReciboView.as_view(), name='crear-recibo'),
]
