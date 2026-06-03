from django.urls import path
from .views import ContactoDetalle, ContactoListarCrear, ContactoMarcarLeido, ContactoMarcarRespondido

urlpatterns = [
    path('', ContactoListarCrear.as_view(), name='contacto-interacciones'),
    path('<int:pk>/', ContactoDetalle.as_view(), name='contacto-interaccion-edit'),
    path('<int:pk>/marcar-leido/', ContactoMarcarLeido.as_view(), name='contacto-marcar-leido'),
    path('<int:pk>/marcar-respondido/', ContactoMarcarRespondido.as_view(), name='contacto-marcar-respondido'),
]