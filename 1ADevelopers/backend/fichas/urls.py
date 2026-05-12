from django.urls import path
from .views import FichaListarCrear, FichaDetalle

urlpatterns = [
    path('',FichaListarCrear.as_view(), name='ficha-listar-crear'),
    path('<int:pk>',FichaDetalle.as_view(), name='ficha-detalle'),
]