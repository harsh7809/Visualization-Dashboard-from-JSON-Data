# Generated by Django 4.2.5 on 2024-04-13 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualapp', '0003_mymodel_added_mymodel_country_mymodel_published_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mymodel',
            name='intensity',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='likelihood',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='relevance',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
    ]