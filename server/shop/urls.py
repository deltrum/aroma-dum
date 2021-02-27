from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.Products),
    path('product/<int:pk>/', views.ProductView),
]

