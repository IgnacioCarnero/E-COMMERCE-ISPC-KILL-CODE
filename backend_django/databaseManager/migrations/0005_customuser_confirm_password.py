# Generated by Django 4.2.2 on 2023-06-18 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databaseManager', '0004_alter_empleado_art_alter_empleado_obra_social'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='confirm_password',
            field=models.CharField(default='', max_length=128),
        ),
    ]
