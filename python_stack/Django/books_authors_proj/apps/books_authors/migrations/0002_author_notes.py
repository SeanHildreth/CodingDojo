# Generated by Django 2.1.2 on 2018-10-15 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default='No Notes', max_length=1000),
        ),
    ]
