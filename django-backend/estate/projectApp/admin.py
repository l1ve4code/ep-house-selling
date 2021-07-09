from django.contrib import admin
from .models import *

from import_export import resources
from import_export.admin import ImportExportModelAdmin
# Register your models here.

def make_active(modeladmin, request, queryset):
    queryset.update(actualnost='True')
    make_active.short_description = "Сделать актуальным"

def make_nonactive(modeladmin, request, queryset):
    queryset.update(actualnost='False')
    make_nonactive.short_description = "Сделать не актуальным"

class RayoniResource(resources.ModelResource):
  class Meta:
    model = Rayoni
    skip_unchanged = True
    report_skipped = False

@admin.register(Rayoni)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('id', 'name')
  list_filter = ('id', 'name')
  search_fields = ["id__startswith", "name__startswith"]
  resource_class = RayoniResource

class GorodResource(resources.ModelResource):
  class Meta:
    model = Gorod
    skip_unchanged = True
    report_skipped = False

@admin.register(Gorod)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('id', 'name')
  list_filter = ('id', 'name')
  search_fields = ["id__startswith", "name__startswith"]
  resource_class = GorodResource

class OperahiiResource(resources.ModelResource):
  class Meta:
    model = Operahii
    skip_unchanged = True
    report_skipped = False

@admin.register(Operahii)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('id', 'name')
  list_filter = ('id', 'name')
  search_fields = ["id__startswith", "name__startswith"]
  resource_class = OperahiiResource

class RoleResource(resources.ModelResource):
  class Meta:
    model = Role
    skip_unchanged = True
    report_skipped = False

@admin.register(Role)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('id', 'name')
  list_filter = ('id', 'name')
  search_fields = ["id__startswith", "name__startswith"]
  resource_class = RoleResource

class PolzovateliResource(resources.ModelResource):
  class Meta:
    model = Polzovateli
    skip_unchanged = True
    report_skipped = False

@admin.register(Polzovateli)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('familia', 'name', 'otchestvo', 'passport', 'nomer_telefona', 'login', 'password', 'id_role')
  list_filter = ('familia', 'name', 'otchestvo', 'passport', 'nomer_telefona', 'login', 'password', 'id_role')
  search_fields = ['familia__startswith', 'name__startswith', 'otchestvo__startswith', 'passport__startswith', 'nomer_telefona__startswith', 'login__startswith', 'password__startswith', 'id_role__name']
  resource_class = PolzovateliResource

class PredlozheniyaResource(resources.ModelResource):
  class Meta:
    model = Predlozheniya
    skip_unchanged = True
    report_skipped = False

@admin.register(Predlozheniya)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('object_type', 'id_rayona', 'id_goroda', 'adres', 'kolvo_etashei', 'etash', 'kolvo_komnat', 'plozhad', 'xoz_postroyki', 'opisanie', 'stoimost', 'id_prodavca', 'actualnost')
  list_filter = ('object_type', 'id_rayona', 'id_goroda', 'adres', 'kolvo_etashei', 'etash', 'kolvo_komnat', 'plozhad', 'xoz_postroyki', 'opisanie', 'stoimost', 'id_prodavca', 'actualnost')
  search_fields = ['object_type__startswith', 'id_rayona__name', 'id_goroda__name', 'adres__startswith', 'kolvo_etashei__startswith', 'etash__startswith', 'kolvo_komnat__startswith', 'plozhad__startswith', 'xoz_postroyki__startswith', 'opisanie__startswith', 'stoimost__startswith', 'id_prodavca__name', 'actualnost__startswith']
  resource_class = PredlozheniyaResource
  actions = [make_active, make_nonactive]

class TariphyResource(resources.ModelResource):
  class Meta:
    model = Tariphy
    skip_unchanged = True
    report_skipped = False

@admin.register(Tariphy)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('name', 'stavka_polgoda', 'stavka_god', 'stavka_tri')
  list_filter = ('name', 'stavka_polgoda', 'stavka_god', 'stavka_tri')
  search_fields = ['name__startswith', 'stavka_polgoda__startswith', 'stavka_god__startswith', 'stavka_tri__startswith']
  resource_class = TariphyResource

class SprosResource(resources.ModelResource):
  class Meta:
    model = Spros
    skip_unchanged = True
    report_skipped = False

@admin.register(Spros)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('object_type', 'id_rayona', 'id_goroda', 'kolvo_etashei_ot', 'kolvo_etashei_do', 'etash_ot', 'etash_do', 'kolvo_komnat_ot', 'kolvo_komnat_do', 'ploshad_ot', 'ploshad_do', 'stoimost_ot', 'stoimost_do', 'id_client', 'actualnost')
  list_filter = ('object_type', 'id_rayona', 'id_goroda', 'kolvo_etashei_ot', 'kolvo_etashei_do', 'etash_ot', 'etash_do', 'kolvo_komnat_ot', 'kolvo_komnat_do', 'ploshad_ot', 'ploshad_do', 'stoimost_ot', 'stoimost_do', 'id_client', 'actualnost')
  search_fields = ['object_type__startswith', 'id_rayona__name', 'id_goroda__name', 'kolvo_etashei_ot__startswith', 'kolvo_etashei_do__startswith', 'etash_ot__startswith', 'etash_do__startswith', 'kolvo_komnat_ot__startswith', 'kolvo_komnat_do__startswith', 'ploshad_ot__startswith', 'ploshad_do__startswith', 'stoimost_ot__startswith', 'stoimost_do__startswith', 'id_client__name', 'actualnost__startswith']
  resource_class = SprosResource
  actions = [make_active, make_nonactive]

class StraxovoiResource(resources.ModelResource):
  class Meta:
    model = Straxovoi
    skip_unchanged = True
    report_skipped = False

@admin.register(Straxovoi)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('id_predlozhenia', 'id_rieltora', 'id_tarifa', 'kolvo_let')
  list_filter = ('id_predlozhenia', 'id_rieltora', 'id_tarifa', 'kolvo_let')
  search_fields = ['id_predlozhenia__startswith'] # FIX
  resource_class = StraxovoiResource

class SdelkiResource(resources.ModelResource):
  class Meta:
    model = Sdelki
    skip_unchanged = True
    report_skipped = False

@admin.register(Sdelki)
class PersonAdmin(ImportExportModelAdmin):
  list_display = ('id_kontrakta', 'id_pokypatelia', 'date', 'komissionie_agenty', 'proc_rieltora', 'id_operachii')
  list_filter = ('id_kontrakta', 'id_pokypatelia', 'date', 'komissionie_agenty', 'proc_rieltora', 'id_operachii')
  search_fields = ['id_kontrakta']  # FIX
  resource_class = SdelkiResource