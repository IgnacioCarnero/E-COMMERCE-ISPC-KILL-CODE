# Generated by Django 4.2.1 on 2023-06-20 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databaseManager', '0006_merge_20230619_2123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedido',
            name='idPedido',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
        ),
    ]
