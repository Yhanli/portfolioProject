# Generated by Django 2.2.13 on 2020-10-28 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webPages', '0007_portfolio_my_resume'),
    ]

    operations = [
        migrations.AddField(
            model_name='webpages',
            name='front_image',
            field=models.FileField(blank=True, upload_to='webpages/main'),
        ),
    ]