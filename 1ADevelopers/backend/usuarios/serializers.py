from rest_framework import serializers
from .models import Rol, Usuario

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = ['id', 'nombre_rol']

class UsuarioSerializer(serializers.ModelSerializer):
    # Esto permite que al ver un usuario, veamos el nombre del rol y no solo el ID
    rol_nombre = serializers.ReadOnlyField(source='rol.nombre_rol')

    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'apellido', 'email', 'rol', 'rol_nombre']
        # Se proteje para que la contraseña no se envíe al frontend
        extra_kwargs = {
            'contrasena': {'write_only': True}
        }