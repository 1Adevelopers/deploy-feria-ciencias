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
    
    def update(self, instance, validated_data):
        instance.nombre_comun = validated_data.get('nombre_comun', instance.nombre_comun)
        instance.nombre_cientifico = validated_data.get('nombre_cientifico', instance.nombre_cientifico)
        instance.descripcion = validated_data.get('descripcion', instance.descripcion)
        instance.categoria = validated_data.get('categoria', instance.categoria)
        instance.usuario = validated_data.get('usuario', instance.usuario)
        instance.save()

        imagenes_data = validated_data.get('imagenes')
        if imagenes_data is not None:
            instance.imagenes.all().delete()
            for img in imagenes_data:
                ImagenEspecie.objects.create(especie=instance, **img)

        return instance