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
    imagenes = ImagenEspecieSerializer(many=True, read_only=False)

    class Meta:
        model = Especie
        fields = [
            'id', 'nombre_comun', 'nombre_cientifico', 
            'descripcion', 'categoria', 'categoria_detalle', 
            'usuario', 'imagenes'
        ]

    def create(self, validated_data):
        imagenes_data = validated_data.pop('imagenes', [])
        especie = Especie.objects.create(**validated_data)
        for img in imagenes_data:
            ImagenEspecie.objects.create(especie=especie, **img)
        return especie