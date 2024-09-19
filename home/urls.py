from django.urls import path
from django.contrib.sitemaps.views import sitemap
from .views import PaginaInicial, DetalheArtigoView
from .sitemaps import ArtigoSitemap

sitemaps = {
    'artigos': ArtigoSitemap,
}

urlpatterns = [
    path('', PaginaInicial.as_view(), name='inicio'),
    path('artigo/<slug:slug>/', DetalheArtigoView.as_view(), name='detalhe_artigo'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
]
