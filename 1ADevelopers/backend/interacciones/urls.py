from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactoViewSet

router = DefaultRouter()
router.register(r'contacto', ContactoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]