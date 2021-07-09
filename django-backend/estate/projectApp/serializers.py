from rest_framework import serializers
from .models import *

# Rayoni

class RayoniDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rayoni
    fields = '__all__'

class RayoniListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rayoni
    fields = ("id", "name")

# Gorod

class GorodDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Gorod
    fields = '__all__'

class GorodListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Gorod
    fields = ("id", "name")

# Operahii

class OperahiiDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Operahii
    fields = '__all__'

class OperahiiListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Operahii
    fields = ("id", "name")

# Role

class RoleDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Role
    fields = '__all__'

class RoleListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Role
    fields = ("id", "name")

# Polzovateli

class PolzovateliDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Polzovateli
    fields = '__all__'

class PolzovateliListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Polzovateli
    fields = ('id', 'familia', 'name', 'otchestvo', 'passport', 'nomer_telefona', 'login', 'password', 'id_role')

# Predlozheniya

class PredlozheniyaDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Predlozheniya
    fields = '__all__'

class PredlozheniyaListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Predlozheniya
    fields = ('id', 'object_type', 'id_rayona', 'id_goroda', 'adres', 'kolvo_etashei', 'etash', 'kolvo_komnat', 'plozhad', 'xoz_postroyki', 'opisanie', 'stoimost', 'id_prodavca', 'actualnost')

# Tariphy

class TariphyDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tariphy
    fields = '__all__'

class TariphyListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tariphy
    fields = ('id', 'name', 'stavka_polgoda', 'stavka_god', 'stavka_tri')

# Spros

class SprosDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Spros
    fields = '__all__'

class SprosListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Spros
    fields = ('id', 'object_type', 'id_rayona', 'id_goroda', 'kolvo_etashei_ot', 'kolvo_etashei_do', 'etash_ot', 'etash_do', 'kolvo_komnat_ot', 'kolvo_komnat_do', 'ploshad_ot', 'ploshad_do', 'stoimost_ot', 'stoimost_do', 'id_client', 'actualnost')

# Straxovoi

class StraxovoiDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Straxovoi
    fields = '__all__'

class StraxovoiListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Straxovoi
    fields = ('id', 'id_predlozhenia', 'id_rieltora', 'id_tarifa', 'kolvo_let')

# Sdelki

class SdelkiDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Sdelki
    fields = '__all__'

class SdelkiListSerializer(serializers.ModelSerializer):
  class Meta:
    model = Sdelki
    fields = ('id', 'id_kontrakta', 'id_pokypatelia', 'date', 'komissionie_agenty', 'proc_rieltora', 'id_operachii')
