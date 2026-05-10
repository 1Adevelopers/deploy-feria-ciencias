from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FichaViewSet

router = DefaultRouter()
router.register(r'fichas', FichaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]