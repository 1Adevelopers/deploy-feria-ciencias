from django.db import models
from django.core.validators import RegexValidator


class CategoriaEspecie(models.Model):
    CATEGORIAS = [
        ("arbol", "Árbol"),
        ("arbusto", "Arbusto"),
        ("hierba", "Hierba"),
        ("trepadora", "Trepadora"),
        ("otro", "Otro"),
    ]

    categoria = models.CharField(max_length=50, choices=CATEGORIAS, unique=True)
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return f"{self.categoria}"
   
class Especie(models.Model):
    nombre_comun = models.CharField(max_length=100, unique=True)
    nombre_cientifico = models.CharField(max_length=150, unique=True)    
    descripcion = models.TextField()
    categoria = models.ForeignKey(
        CategoriaEspecie,
        on_delete=models.CASCADE,
        related_name="especies"
    )

    def __str__(self):
        return f"{self.nombre_comun} ({self.nombre_cientifico})"