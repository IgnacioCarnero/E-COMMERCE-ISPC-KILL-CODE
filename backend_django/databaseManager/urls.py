from django.urls import path
from .views import SignupView, LoginView

urlpatterns = [
    # Auth views
    # path('auth/login/', LoginView.as_view(), name='auth_login'),
    # path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('signup/', SignupView.as_view(), name='signup'),
    path('signup/<int:id>/', SignupView.as_view(), name='update-delete-user'),
    path('login/', LoginView.as_view(), name='login')
]
