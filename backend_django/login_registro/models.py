from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    # Agrega campos personalizados si los necesitas
    pass

    class Meta:
        swappable = 'AUTH_USER_MODEL'


CustomUser._meta.get_field('groups').related_name = 'custom_user_set'
CustomUser._meta.get_field('user_permissions').related_name = 'custom_user_set'
