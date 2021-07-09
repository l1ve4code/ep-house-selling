from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
  path('user/login', signin),
  path('', home),
  path('logic1', logic1),
  path('logic2', logic2),
  # Rayoni
  path('rayoni/create/', RayoniCreateView.as_view()),
  path('rayoni/all/', RayoniListView.as_view()),
  path('rayoni/detail/<int:pk>/', RayoniDetailView.as_view()),

  # Gorod
  path('gorod/create/', GorodCreateView.as_view()),
  path('gorod/all/', GorodListView.as_view()),
  path('gorod/detail/<int:pk>/', GorodDetailView.as_view()),

  # Operahii
  path('operahii/create/', OperahiiCreateView.as_view()),
  path('operahii/all/', OperahiiListView.as_view()),
  path('operahii/detail/<int:pk>/', OperahiiDetailView.as_view()),

  # Role
  path('role/create/', RoleCreateView.as_view()),
  path('role/all/', RoleListView.as_view()),
  path('role/detail/<int:pk>/', RoleDetailView.as_view()),

  # Polzovateli
  path('polzovateli/create/', PolzovateliCreateView.as_view()),
  path('polzovateli/all/', PolzovateliListView.as_view()),
  path('polzovateli/detail/<int:pk>/', PolzovateliDetailView.as_view()),

  # Predlozheniya
  path('predlozheniya/create/', PredlozheniyaCreateView.as_view()),
  path('predlozheniya/all/', PredlozheniyaListView.as_view()),
  path('predlozheniya/detail/<int:pk>/', PredlozheniyaDetailView.as_view()),

  # Tariphy
  path('tariphy/create/', TariphyCreateView.as_view()),
  path('tariphy/all/', TariphyListView.as_view()),
  path('tariphy/detail/<int:pk>/', TariphyDetailView.as_view()),

  # Spros
  path('spros/create/', SprosCreateView.as_view()),
  path('spros/all/', SprosListView.as_view()),
  path('spros/detail/<int:pk>/', SprosDetailView.as_view()),

  # Straxovoi
  path('straxovoi/create/', StraxovoiCreateView.as_view()),
  path('straxovoi/all/', StraxovoiListView.as_view()),
  path('straxovoi/detail/<int:pk>/', StraxovoiDetailView.as_view()),

  # Sdelki
  path('sdelki/create/', SdelkiCreateView.as_view()),
  path('sdelki/all/', SdelkiListView.as_view()),
  path('sdelki/detail/<int:pk>/', SdelkiDetailView.as_view()),

]
