from rest_framework import serializers

# Custom
from .models import *

# Searializers here

class ProductPropSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=30)

class ProductSerializer(serializers.ModelSerializer):
    made_in = ProductPropSerializer(read_only=True, many=False)    
    brand = ProductPropSerializer(read_only=True, many=False)
    height = ProductPropSerializer(read_only=True, many=False)
    name = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ['id', 'made_in', 'name', 'thumbnail', 'price', 'brand', 'height']

    def get_name(self, obj):
        return '{} {} {}'.format(obj.brand, obj.name, obj.height) 
