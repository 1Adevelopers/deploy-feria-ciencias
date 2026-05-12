from django.urls import path
from .views import Categorias, EspecieListarCrear, EspecieDetalle, ImagenEspecieViewSet

urlpatterns = [
    path('',EspecieListarCrear.as_view(), name='especie-listar-crear'),
    path('<int:pk>',EspecieDetalle.as_view(), name='especie-detalle'),
    path('<int:pk>',Categorias.as_view(), name='categorias'),
]