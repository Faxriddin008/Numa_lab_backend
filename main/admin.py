from django.contrib import admin
from .models import (
    Slider, About, Checkup, Doctor, Contact, ContentBlock, SiteSettings, SeoMeta, BitrixLog
)


@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    list_display = ('id', 'title_uz', 'is_active', 'order', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title_uz', 'title_ru')
    ordering = ('order', '-id')


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('id', 'title_uz', 'created_at')
    search_fields = ('title_uz', 'title_ru')


@admin.register(Checkup)
class CheckupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_uz', 'price', 'is_active', 'order')
    list_filter = ('is_active',)
    search_fields = ('name_uz', 'name_ru')
    ordering = ('order', '-id')


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'specialty_uz', 'is_active', 'order')
    list_filter = ('is_active',)
    search_fields = ('full_name', 'specialty_uz', 'specialty_ru')
    ordering = ('order', '-id')


@admin.register(ContentBlock)
class ContentBlockAdmin(admin.ModelAdmin):
    list_display = ('id', 'page_key', 'key', 'title_uz', 'is_active', 'order')
    list_filter = ('page_key', 'is_active')
    search_fields = ('page_key', 'key', 'title_uz', 'title_ru')
    ordering = ('page_key', 'order', 'key')


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    # NOTE: keep list_display in sync with actual model fields
    list_display = ('id', 'site_name', 'phone', 'updated_at')


@admin.register(SeoMeta)
class SeoMetaAdmin(admin.ModelAdmin):
    list_display = ('id', 'page_key', 'title_uz', 'updated_at')
    search_fields = ('page_key', 'title_uz', 'title_ru')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'created_at')
    search_fields = ('name', 'phone', 'message')
    ordering = ('-created_at',)


@admin.register(BitrixLog)
class BitrixLogAdmin(admin.ModelAdmin):
    list_display = ('id', 'ok', 'created_at', 'endpoint')
    list_filter = ('ok',)
    ordering = ('-created_at',)
