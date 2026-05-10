from django.contrib import admin
from .models import Rol, Usuario

@admin.register(Rol)
class RolAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_rol')

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'apellido', 'email', 'rol')
    search_fields = ('nombre', 'apellido', 'email')