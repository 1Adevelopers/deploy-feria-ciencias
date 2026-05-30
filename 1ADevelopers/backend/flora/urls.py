from django.urls import path
from .views import Categorias, EspecieListarCrear, EspecieDetalle, ImagenEspecie

urlpatterns = [
    path('especies/',EspecieListarCrear.as_view(), name='especie-listar-crear'),
    path('especies/<int:pk>/',EspecieDetalle.as_view(), name='especie-detalle'),
    path('categorias/', Categorias.as_view(), name='categorias-lista'),
    path('categorias/<int:pk>/',Categorias.as_view(), name='categorias'),
    path('imagenes/<int:pk>/',ImagenEspecie.as_view(), name='imagen-especie'),
    
]