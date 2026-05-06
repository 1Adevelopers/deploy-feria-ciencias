from django.urls import path
from .views import EspecieListCreateView

urlpatterns = [
    path('especies/', EspecieListCreateView.as_view(), name='especies-lista'),
]
