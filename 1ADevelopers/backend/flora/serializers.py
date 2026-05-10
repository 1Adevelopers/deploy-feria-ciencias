from rest_framework import serializers
from .models import CategoriaEspecie, Especie, ImagenEspecie

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaEspecie
        fields = ['id', 'categoria', 'descripcion']

class ImagenEspecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenEspecie
        fields = ['id', 'url', 'fecha_subida']

class EspecieSerializer(serializers.ModelSerializer):
    # Traemos la info de la categoría y las imágenes relacionadas
    categoria_detalle = CategoriaSerializer(source='categoria', read_only=True)
    imagenes = ImagenEspecieSerializer(many=True, read_only=True)

    class Meta:
        model = Especie
        fields = [
            'id', 'nombre_comun', 'nombre_cientifico', 
            'descripcion', 'categoria', 'categoria_detalle', 
            'usuario', 'imagenes'
        ]