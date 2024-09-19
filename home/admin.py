from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Artigo, Comentario

admin.site.register(Artigo)
admin.site.register(Comentario)
