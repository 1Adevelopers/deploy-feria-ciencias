from django.urls import path
from .views import ContactoInteracciones



urlpatterns = [
    path('<int:pk>',ContactoInteracciones.as_view(), name='contacto-interaccion'),
]