# Generated by Django 2.2.13 on 2020-09-13 08:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolios',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=1000)),
                ('description', models.TextField(blank=True)),
                ('project_startdate', models.DateTimeField(blank=True)),
                ('project_enddate', models.DateTimeField(blank=True)),
                ('direct_url', models.URLField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProjectPictures',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, upload_to='portfolio_content/')),
                ('portfolioId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_images', to='portfolios.Portfolios')),
            ],
        ),
    ]
