from rest_framework import serializers
from .models import Rol, Usuario


class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = ['id', 'nombre_rol']


class UsuarioSerializer(serializers.ModelSerializer):

    rol_nombre = serializers.ReadOnlyField(source='rol.nombre_rol')

    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'apellido', 'email', 'rol', 'rol_nombre', 'contrasena']
        # agrege contrasena en fields| Se proteje para que la contraseña no se envíe al frontend
        extra_kwargs = {
            'contrasena': {'write_only': True},
            'rol': {'required': False}
        }
    
    def create(self, validated_data):
        validated_data['rol_id'] = 2
        return Usuario.objects.create(**validated_data)