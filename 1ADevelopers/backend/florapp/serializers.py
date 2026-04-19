from rest_framework import serializers
from .models import EspeciePlanta

class EspeciePlantaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EspeciePlanta
        fields = '__all__'
