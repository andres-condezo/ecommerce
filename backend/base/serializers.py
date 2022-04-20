from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    '''ProductSerializer model'''
    class Meta:
        model = Product
        fields = '__all__'
