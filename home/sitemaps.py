from django.contrib.sitemaps import Sitemap
from .models import Artigo

class ArtigoSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.9

    def items(self):
        return Artigo.objects.all()

    def lastmod(self, obj):
        return obj.data_publicacao
