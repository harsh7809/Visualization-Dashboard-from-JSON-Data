# Generated by Django 4.2.5 on 2024-04-13 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mymodel',
            name='intensity',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='likelihood',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='relevance',
            field=models.IntegerField(null=True),
        ),
    ]
