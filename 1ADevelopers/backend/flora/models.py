from django.db import models
from usuarios.models import Usuario

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
        return self.get_categoria_display()

class Especie(models.Model):
    nombre_comun = models.CharField(max_length=100, unique=True)
    nombre_cientifico = models.CharField(max_length=150, unique=True)    
    descripcion = models.TextField()
    
    # Relaciones corregidas
    categoria = models.ForeignKey(
        CategoriaEspecie,
        on_delete=models.PROTECT, # Protegemos para no borrar categorías con plantas
        related_name="especies"
    )
    # RF: Saber qué usuario cargó la especie
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre_comun} ({self.nombre_cientifico})"

class ImagenEspecie(models.Model):
    especie = models.ForeignKey(Especie, related_name='imagenes', on_delete=models.CASCADE)
    url = models.URLField(max_length=500)
    fecha_subida = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Imagen de {self.especie.nombre_comun}"