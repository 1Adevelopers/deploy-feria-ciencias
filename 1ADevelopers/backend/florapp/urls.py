from django.urls import path
from . import views

urlpatterns = [
    path('api/especies/', views.especies_list, name='especies-list'),
]
