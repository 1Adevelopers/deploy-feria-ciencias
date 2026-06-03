from rest_framework import serializers
from .models import Contacto

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        # Exponemos los campos necesarios para el formulario
        fields = ['id', 'nombre', 'email', 'mensaje', 'fecha_envio', 'leido', 'respondido']
        read_only_fields = ['fecha_envio']