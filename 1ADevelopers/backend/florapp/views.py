from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import EspeciePlanta
from .serializers import EspeciePlantaSerializer

@api_view(['GET'])
def especies_list(request):
    especies = EspeciePlanta.objects.all()
    serializer = EspeciePlantaSerializer(especies, many=True)
    return Response(serializer.data)
