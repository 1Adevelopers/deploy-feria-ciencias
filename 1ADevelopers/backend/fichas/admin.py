from django.contrib import admin
from .models import Ficha

@admin.register(Ficha)
class FichaAdmin(admin.ModelAdmin):
    list_display = ('id', 'especie', 'estado_publicacion', 'fecha_creacion')