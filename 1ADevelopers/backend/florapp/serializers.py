from rest_framework import serializers
from .models import Especie, CategoriaEspecie

class CategoriaEspecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaEspecie
        fields = '__all__'

class EspecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especie
        fields = '__all__'
