from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class IntensitySerializer(serializers.ModelSerializer):
    class Meta:
       model = MyModel
       fields = ['intensity','sector','topic']


     