from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Contacto
from .serializers import ContactoSerializer

class ContactoInteracciones(APIView):
    def get(self, request):
        contactoInteraccion = contactoInteraccion.objects.all()
        serializer = ContactoSerializer(contactoInteraccion, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ContactoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
       
    def put(self, request, pk):
        contactoInteraccion = get_object_or_404(Contacto, pk=pk)
        serializer = ContactoSerializer(contactoInteraccion, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        contactoInteraccion = get_object_or_404(Contacto, pk=pk)
        contactoInteraccion.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)