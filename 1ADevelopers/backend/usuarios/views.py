from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from .models import Rol, Usuario
from .serializers import RolSerializer, UsuarioSerializer

class RolListarCrear(APIView):
    def get(self, request):
        roles = Rol.objects.all()
        serializer = RolSerializer(roles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = RolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RolDetalle(APIView):
    def get(self, request, pk):
        roles = get_object_or_404(Rol, pk=pk)
        serializer = RolSerializer(roles)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        roles = get_object_or_404(Rol, pk=pk)
        serializer = RolSerializer(roles, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        roles = get_object_or_404(Rol, pk=pk)
        roles.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer