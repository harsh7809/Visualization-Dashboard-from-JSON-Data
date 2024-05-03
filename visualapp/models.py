from django.db import models
from django.utils import timezone

class MyModel(models.Model):
    end_year = models.CharField(max_length=100, null=True, blank=True, default='')
    intensity = models.CharField(max_length=100, null=True, blank=True, default='')
    sector = models.CharField(max_length=100, null=True, blank=True, default='')
    topic = models.CharField(max_length=100, null=True, blank=True, default='')
    insight = models.TextField(default='')
    url = models.URLField(default='')
    region = models.CharField(max_length=100, null=True, blank=True, default='')
    start_year = models.CharField(max_length=100, null=True, blank=True, default='')
    impact = models.CharField(max_length=100, null=True, blank=True, default='')
    added = models.DateTimeField(default=timezone.now)
    published = models.DateTimeField(default=timezone.now)
    country = models.CharField(max_length=100, null=True, blank=True, default='')
    relevance = models.CharField(max_length=100, null=True, blank=True, default='')
    pestle = models.CharField(max_length=100, null=True, blank=True, default='')
    source = models.CharField(max_length=100, null=True, blank=True, default='')
    title = models.CharField(max_length=100, null=True, blank=True, default='')
    likelihood = models.CharField(max_length=100, null=True, blank=True, default='')
