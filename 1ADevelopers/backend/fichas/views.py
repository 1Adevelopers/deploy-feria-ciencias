from rest_framework import viewsets
from .models import Ficha
from .serializers import FichaSerializer

class FichaViewSet(viewsets.ModelViewSet):
    queryset = Ficha.objects.all()
    serializer_class = FichaSerializer