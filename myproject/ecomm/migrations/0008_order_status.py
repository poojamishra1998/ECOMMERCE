# Generated by Django 4.0 on 2022-02-17 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomm', '0007_order_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
