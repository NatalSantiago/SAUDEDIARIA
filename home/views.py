from django.views.generic import TemplateView, DetailView
from django.shortcuts import get_object_or_404
from .models import Artigo

class PaginaInicial(TemplateView):
    template_name = 'home/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['artigos'] = Artigo.objects.all().order_by('-data_publicacao')[:5]
        return context

class DetalheArtigoView(DetailView):
    model = Artigo
    template_name = 'home/detalhe_artigo.html'
    context_object_name = 'artigo'
