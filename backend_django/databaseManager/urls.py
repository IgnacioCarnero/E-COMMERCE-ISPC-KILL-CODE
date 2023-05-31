from django.urls import path
from databaseManager import views

urlpatterns = [
    # Other URL patterns
    path('registro/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
]
