from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoriaViewSet, EspecieViewSet, ImagenEspecieViewSet

router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet)
router.register(r'especies', EspecieViewSet)
router.register(r'imagenes', ImagenEspecieViewSet)

urlpatterns = [
    path('', include(router.urls)),
]