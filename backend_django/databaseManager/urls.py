<<<<<<< HEAD
from django.urls import path, include
from .views import LoginView, LogoutView, SignupView

urlpatterns = [
    # Auth views
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/signup/', SignupView.as_view(), name='auth_signup'),
=======
from django.urls import path
from .views import LoginView, LogoutView

urlpatterns = [
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),
    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf
]
