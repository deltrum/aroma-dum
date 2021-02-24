from django.shortcuts import render

# RestFramewok
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from django.contrib.auth.models import User

# Custom
from .serializers import *
from .models import Profile

@api_view(['GET'])
def Users(request):
    try:
        users = User.objects.all()
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializers = UserSerializer(users, many=True)
        return Response(serializers.data)


@api_view(['POST'])
def Register(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        phone_number = data=request.data['phone_number']
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            
            profile = Profile(phone_number=phone_number,user=user)
            profile.save()

        else:
            data = serializer.errors
        return Response(data)