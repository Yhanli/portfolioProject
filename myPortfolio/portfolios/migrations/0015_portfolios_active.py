# Generated by Django 2.2.13 on 2020-10-18 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0014_portfolios_sort_rank'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolios',
            name='active',
            field=models.BooleanField(default=False),
        ),
    ]
