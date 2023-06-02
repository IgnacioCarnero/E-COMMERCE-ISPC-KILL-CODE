from rest_framework import serializer
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password


class UserSerializer(serializer.ModelSerializer):
    email = serializer.EmailField(required=True)
    username = serializer.CharField(required=True)
    password = serializer.CharField(min_length=8)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password')


def validate_password(self, value):
    return make_password(value)
