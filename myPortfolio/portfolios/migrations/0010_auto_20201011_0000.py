# Generated by Django 2.2.13 on 2020-10-11 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0009_auto_20201010_2221'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolios',
            name='source_code_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='portfolios',
            name='direct_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]