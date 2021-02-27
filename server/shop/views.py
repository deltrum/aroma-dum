from django.shortcuts import render

# RestFramewok
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
# Custom
from .models import *
from .serializers import *

# Create your views here.


class ProductListView(ListAPIView):
    queryset = Product.objects.get_queryset().order_by('id').filter(sold = False)
    serializer_class = ProductSerializer
    pagination_class = PageNumberPagination