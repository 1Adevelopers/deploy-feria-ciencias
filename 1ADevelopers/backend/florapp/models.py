from django.db import models

class EspeciePlanta(models.Model):
    nombre_comun = models.CharField(max_length=100)
    nombre_cientifico = models.CharField(max_length=150)
    categoria = models.CharField(
        max_length=50,
        choices=[("árbol", "Árbol"), ("arbusto", "Arbusto"), ("hierba", "Hierba")]
    )
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre_comun
