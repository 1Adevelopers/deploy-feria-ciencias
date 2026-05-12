from django.urls import path
from .views import ContactoDetalle, ContactoListarCrear


urlpatterns = [
   path('',ContactoListarCrear.as_view(), name='contacto-interacciones'),
   path('<int:pk>/',ContactoDetalle.as_view(), name='contacto-interaccion-edit'),
]
