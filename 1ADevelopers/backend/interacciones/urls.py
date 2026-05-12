from django.urls import path
from .views import ContactoInteraccionEdit, ContactoInteracciones



urlpatterns = [
    path('',ContactoInteracciones.as_view(), name='contacto-interacciones'),
    path('<int:pk>',ContactoInteraccionEdit.as_view(), name='contacto-interaccion-edit'),
]