from django.urls import path
from .views import EspecieDetailView, EspecieListCreateView

urlpatterns = [
    path('especies/', EspecieListCreateView.as_view(), name='especies-lista'),
]