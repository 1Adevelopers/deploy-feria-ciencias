from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RolListarCrear, RolDetalle, UsuarioViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('',RolListarCrear.as_view(), name='rol-listar-crear'),
    path('<int:pk>',RolDetalle.as_view(), name='rol-detalle'),
]