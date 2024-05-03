from django.shortcuts import render
import json
from .models import MyModel
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView


def load_data(filename):
  with open(filename, 'r',  encoding='utf-8') as file:
        data = json.load(file)
        for item in data:
            MyModel.objects.create(
                end_year=item.get('end_year'),
                intensity=item.get('intensity'),
                sector=item.get('sector'),
                topic=item.get('topic'),
                insight=item.get('insight'),
                url=item.get('url'),
                region=item.get('region'),
                start_year=item.get('start_year'),
                impact=item.get('impact'),
                relevance=item.get('relevance'),
                pestle=item.get('pestle'),
                source=item.get('source'),
                title=item.get('title'),
                likelihood=item.get('likelihood')
            )


# Call the function with your JSON file to store data in database
#load_data('data.json')


def visualization(request):
    
    return render(request, 'vis.html')

# API view set for Intensity
class home(APIView):
    def get(self, request, format=None):
        queryset = MyModel.objects.values('intensity','sector','topic')  
        serializer = IntensitySerializer(data=queryset, many=True)
        serializer.is_valid()
        return Response(serializer.data)

# class home_sect(APIView):
#     def get(self, request, format=None):
#         queryset = MyModel.objects.values('sector')  
#         serializer = SectorSerializer(data=queryset, many=True)
#         serializer.is_valid()
#         return Response(serializer.data)
    

def visualization_sector(request):
    
    return render(request, 'sec.html')