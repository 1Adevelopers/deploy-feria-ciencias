from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Especie
from .serializers import EspecieSerializer

class EspecieListCreateView(APIView):
    def get(self, request):
        especies = Especie.objects.all()
        serializer = EspecieSerializer(especies, many=True)
        return Response(serializer.data)
    

    def post(self, request):
        serializer = EspecieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)