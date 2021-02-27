from django.shortcuts import render

# RestFramewok
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Custom
from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET'])
def Products(request):
    try:
        products = Product.objects.all()
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializers = ProductSerializer(products, many=True, context={"request": request})
        return Response(serializers.data)

@api_view(['GET'])
def ProductView(request, pk):
    try:
        product = Product.objects.get(id = pk)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializers = ProductViewSerializer(product, many=False, context={"request": request})
        return Response(serializers.data)