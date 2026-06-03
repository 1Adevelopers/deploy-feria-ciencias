from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Ficha
from .serializers import FichaSerializer

class FichaListarCrear(APIView):
    def get(self, request):
        fichas = Ficha.objects.all()
        serializer = FichaSerializer(fichas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = FichaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FichaDetalle(APIView):
    def get(self, request, pk):
        ficha = get_object_or_404(Ficha, pk=pk)
        serializer = FichaSerializer(ficha)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        ficha = get_object_or_404(Ficha, pk=pk)
        serializer = FichaSerializer(ficha, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        ficha = get_object_or_404(Ficha, pk=pk)
        ficha.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    