# Generated by Django 2.2.13 on 2020-10-11 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webPages', '0004_auto_20201011_0353'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='back_image',
            field=models.FileField(blank=True, upload_to='webpages/portfolio'),
        ),
    ]
