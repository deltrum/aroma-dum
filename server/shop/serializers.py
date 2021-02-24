from rest_framework import serializers

# Custom
from .models import *

# Searializers here

class ProductPropSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=30)

class ProductSerializer(serializers.ModelSerializer):
    brand = ProductPropSerializer(read_only=True, many=False)
    color = ProductPropSerializer(read_only=True, many=False)
    height = ProductPropSerializer(read_only=True, many=False)
    made_in = ProductPropSerializer(read_only=True, many=False)    
    bundle = ProductPropSerializer(read_only=True, many=True)
    material = ProductPropSerializer(read_only=True, many=True)
    class Meta:
        model = Product
        fields = '__all__'
