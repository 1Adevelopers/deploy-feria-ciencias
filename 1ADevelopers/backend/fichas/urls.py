from django.urls import path
from .views import FichaListarCrear, FichaDetalle

urlpatterns = [
    path('fichas/',FichaListarCrear.as_view(), name='ficha-listar-crear'),
    path('fichas/<int:pk>/',FichaDetalle.as_view(), name='ficha-detalle'),
]