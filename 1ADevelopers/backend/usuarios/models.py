from django.db import models

class Rol(models.Model):
    # id_rol se crea automáticamente como un campo autoincremental
    nombre_rol = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre_rol

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    # Usamos CharField para la contraseña por ahora, 
    # en el futuro usaremos el sistema de hash de Django
    contrasena = models.CharField(max_length=255)
    
    # Relación: Un Rol puede tener muchos Usuarios (1:N)
    rol = models.ForeignKey(Rol, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.nombre} {self.apellido} ({self.email})"