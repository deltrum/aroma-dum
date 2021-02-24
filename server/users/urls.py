from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('users/', views.Users),  
    path('login/', obtain_auth_token),
    path('register/', views.Register),
]