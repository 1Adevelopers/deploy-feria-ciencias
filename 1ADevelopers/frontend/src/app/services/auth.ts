from rest_framework import serializers
from .models import Rol, Usuario


class UsuarioSerializer(serializers.ModelSerializer):

    rol_nombre = serializers.ReadOnlyField(source='rol.nombre_rol')

    class Meta:
        model = Usuario
        fields = [
            'id',
            'nombre',
            'apellido',
            'email',
            'rol',
            'rol_nombre',
            'contrasena'
        ]

        extra_kwargs = {
            'contrasena': {'write_only': True},
            'rol': {'required': False}
        }

    def create(self, validated_data):
        validated_data['rol_id'] = 2
        return Usuario.objects.create(**validated_data)
