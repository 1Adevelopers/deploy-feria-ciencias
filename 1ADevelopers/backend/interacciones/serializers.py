from rest_framework import serializers
from .models import Contacto

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        # Exponemos los campos necesarios para el formulario
        fields = ['id', 'nombre', 'email', 'mensaje', 'fecha_envio', 'leido']
        # El campo 'leido' y 'fecha_envio' no deberían ser editables por el usuario común
        read_only_fields = ['leido', 'fecha_envio']