from django.db import models
from flora.models import Especie

class Ficha(models.Model):
    especie = models.OneToOneField(Especie, on_delete=models.CASCADE, related_name='ficha')
    informacion_tecnica = models.TextField(help_text="Datos adicionales que aparecen al girar la tarjeta")
    estado_publicacion = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Ficha de {self.especie.nombre_comun}"