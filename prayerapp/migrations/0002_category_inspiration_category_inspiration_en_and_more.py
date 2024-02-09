# Generated by Django 5.0.1 on 2024-02-09 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prayerapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='inspiration',
            field=models.CharField(default='default', max_length=600),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='category',
            name='inspiration_en',
            field=models.CharField(max_length=600, null=True),
        ),
        migrations.AddField(
            model_name='category',
            name='inspiration_es',
            field=models.CharField(max_length=600, null=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='genre',
            field=models.CharField(choices=[('PR', 'Praise'), ('RQ', 'Request'), ('CF', 'Confession'), ('TG', 'Thanksgiving')], max_length=2),
        ),
    ]
