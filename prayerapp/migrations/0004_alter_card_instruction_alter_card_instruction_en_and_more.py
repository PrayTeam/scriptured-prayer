# Generated by Django 5.0.1 on 2024-03-03 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prayerapp', '0003_card_instruction_en_card_instruction_es_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='instruction',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='instruction_en',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='instruction_es',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='scripture',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='card',
            name='scripture_en',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='scripture_es',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='title',
            field=models.CharField(max_length=1024),
        ),
        migrations.AlterField(
            model_name='card',
            name='title_en',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='title_es',
            field=models.CharField(max_length=1024, null=True),
        ),
    ]
