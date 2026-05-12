from rest_framework import viewsets
from .models import CategoriaEspecie, Especie, ImagenEspecie
from .serializers import CategoriaSerializer, EspecieSerializer, ImagenEspecieSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = CategoriaEspecie.objects.all()
    serializer_class = CategoriaSerializer

class EspecieViewSet(viewsets.ModelViewSet):
    queryset = Especie.objects.all()
    serializer_class = EspecieSerializer

class ImagenEspecieViewSet(viewsets.ModelViewSet):
    queryset = ImagenEspecie.objects.all()
    serializer_class = ImagenEspecieSerializer