from django.db import models

class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)
    leido = models.BooleanField(default=False)  # Útil para que el admin marque qué ya respondió
    respondido = models.BooleanField(default=False)

    def __str__(self):
        return f"Consulta de {self.nombre} - {self.email}"