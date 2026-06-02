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
<<<<<<< Updated upstream
        fields = ['id', 'nombre', 'apellido', 'email', 'rol', 'rol_nombre', 'contrasena']
<<<<<<< HEAD
        # Comento esto temporalemnte y agrege contrasena en fields| Se proteje para que la contraseña no se envíe al frontend
=======
        fields = [
            'id',
            'nombre',
            'apellido',
            'email',
            'rol',
            'rol_nombre',
            'contrasena'
        ]

>>>>>>> Stashed changes
=======
        # agregue contrasena en fields | Se proteje para que la contraseña no se envíe al frontend
>>>>>>> 16c2e1294996b8be6a00d5bff39a5e24a067b404
        extra_kwargs = {
            # 'contrasena': {'write_only': True},
            'rol': {'required': False}
        }
<<<<<<< HEAD
<<<<<<< Updated upstream
        def create(self, validated_data):
=======
=======
        
        
    def create(self, validated_data):
>>>>>>> 16c2e1294996b8be6a00d5bff39a5e24a067b404

    def create(self, validated_data):
>>>>>>> Stashed changes

        validated_data['rol_id'] = 2

        return Usuario.objects.create(**validated_data)