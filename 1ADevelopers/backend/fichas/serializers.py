from rest_framework import serializers
from .models import Ficha
from flora.serializers import EspecieSerializer

class FichaSerializer(serializers.ModelSerializer):
    # Esto trae toda la info de la planta dentro de la ficha
    especie_detalle = EspecieSerializer(source='especie', read_only=True)

    class Meta:
        model = Ficha
        fields = [
            'id', 'especie', 'especie_detalle', 
            'informacion_tecnica', 'estado_publicacion', 'fecha_creacion'
        ]