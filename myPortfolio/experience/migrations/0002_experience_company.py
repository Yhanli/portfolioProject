# Generated by Django 2.2.13 on 2020-10-20 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('experience', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='company',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]
