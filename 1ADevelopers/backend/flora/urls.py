from django.urls import path
from .views import CategoriaViewSet, EspecieListarCrear, EspecieDetalle, ImagenEspecieViewSet

urlpatterns = [
    path('',EspecieListarCrear.as_view(), name='especie-listar-crear'),
    path('<int:pk>',EspecieDetalle.as_view(), name='especie-detalle'),
]