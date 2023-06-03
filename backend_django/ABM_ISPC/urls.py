"""
URL configuration for home project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
<<<<<<< HEAD

# Api router
router = routers.DefaultRouter()
=======
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    # Api routes
    path('api/', include('databaseManager.urls')),
=======
    path('api/', include(authenificate.urls)),
>>>>>>> eb9488bd34b50d60d9bb7d0f1c9a1f9e058bc0cf
    path('api/', include(router.urls)),
]
