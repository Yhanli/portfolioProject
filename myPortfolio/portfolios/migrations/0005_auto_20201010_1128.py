# Generated by Django 2.2.13 on 2020-10-10 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0004_merge_20200918_0449'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectpictures',
            name='picture_alt',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='projectpictures',
            name='picture_direct',
            field=models.URLField(blank=True, null=True),
        ),
    ]