from django.db import models
from django.utils import timezone

class Artigo(models.Model):
    titulo = models.CharField(max_length=200, verbose_name="Título do Artigo")
    slug = models.SlugField(max_length=200, unique=True, verbose_name="Slug", default='default-slug')
    descricao_artigo = models.TextField(verbose_name="Descrição do Artigo")
    data_publicacao = models.DateTimeField(default=timezone.now, verbose_name="Data de Publicação")
    resumo_artigo = models.CharField(max_length=500, verbose_name="Resumo do Artigo")
    meta_keywords = models.CharField(max_length=255, verbose_name="Palavras-chave (SEO)")
    meta_description = models.CharField(max_length=255, verbose_name="Descrição Meta (SEO)")
    canonical_url = models.URLField(max_length=500, verbose_name="URL Canônica", blank=True, null=True)
    imagem_capa = models.ImageField(upload_to='imagens/', verbose_name="Imagem de Capa", blank=True, null=True)
    
    class Meta:
        verbose_name = "Artigo"
        verbose_name_plural = "Artigos"
        ordering = ['-data_publicacao']

    def __str__(self):
        return self.titulo

class Comentario(models.Model):
    artigo = models.ForeignKey(Artigo, related_name='comentarios', on_delete=models.CASCADE, verbose_name="Artigo")
    comentario = models.TextField(verbose_name="Comentário")
    data = models.DateTimeField(default=timezone.now, verbose_name="Data")
    email = models.EmailField(verbose_name="Email")

    class Meta:
        verbose_name = "Comentário"
        verbose_name_plural = "Comentários"
        ordering = ['-data']

    def __str__(self):
        return f"Comentário de {self.email} em {self.artigo.titulo}"
