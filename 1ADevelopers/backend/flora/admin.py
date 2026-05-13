from django.contrib import admin
from .models import CategoriaEspecie, Especie, ImagenEspecie

@admin.register(CategoriaEspecie)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'categoria')

@admin.register(Especie)
class EspecieAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_comun', 'nombre_cientifico', 'categoria', 'usuario')
    list_filter = ('categoria',)
    search_fields = ('nombre_comun', 'nombre_cientifico')

@admin.register(ImagenEspecie)
class ImagenAdmin(admin.ModelAdmin):
    list_display = ('id', 'especie', 'url', 'fecha_subida')