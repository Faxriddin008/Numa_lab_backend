from django.contrib import admin
from django.db import models
from django.forms import Textarea
from django.utils.html import format_html

from .models import (
    Slider,
    About,
    Checkup,
    CheckupTest,
    CheckupBenefit,
    Doctor,
    Contact,
    ContentBlock,
    SiteSettings,
    SeoMeta,
    BitrixLog,
)


@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    list_display = ("id", "title_uz", "is_active", "order", "created_at")
    list_filter = ("is_active",)
    search_fields = ("title_uz", "title_ru", "text_uz", "text_ru")
    ordering = ("order", "-created_at")
    list_editable = ("is_active", "order")


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ("id", "title_uz", "updated_at")
    search_fields = ("title_uz", "title_ru", "text_uz", "text_ru")
    ordering = ("-updated_at",)


class CheckupTestInline(admin.TabularInline):
    model = CheckupTest
    extra = 1


class CheckupBenefitInline(admin.TabularInline):
    model = CheckupBenefit
    extra = 1


@admin.register(Checkup)
class CheckupAdmin(admin.ModelAdmin):
    # ✅ listda narxni chiroyli (nuqtali) ko'rsatish uchun price_pretty qo'shdim
    list_display = ("id", "name_uz", "price_pretty", "is_active", "order", "created_at")
    list_filter = ("is_active",)
    search_fields = ("name_uz", "name_ru", "description_uz", "description_ru")
    ordering = ("order", "-created_at")
    list_editable = ("is_active", "order")

    # ✅ Included Tests / Benefits admin ichida qo‘shiladi
    inlines = [CheckupTestInline, CheckupBenefitInline]

    def price_pretty(self, obj):
        # 1290000 => 1.290.000 so'm
        s = f"{obj.price:,}".replace(",", ".")
        return format_html("{} so'm", s)
    price_pretty.short_description = "Narx"


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "is_active", "order", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("full_name", "specialty_uz", "specialty_ru", "bio_uz", "bio_ru")
    ordering = ("order", "-updated_at")
    list_editable = ("is_active", "order")

    formfield_overrides = {
        models.TextField: {"widget": Textarea(attrs={"rows": 6, "style": "width: 100%;"})},
        models.JSONField: {"widget": Textarea(attrs={"rows": 4, "style": "width: 100%; font-family: monospace;"})},
    }

    fieldsets = (
        (
            "Basic",
            {
                "fields": (
                    "full_name",
                    ("specialty_uz", "specialty_ru"),
                    ("bio_uz", "bio_ru"),
                    "image",
                )
            },
        ),
        (
            "Details",
            {
                "fields": (
                    ("education_uz", "education_ru"),
                    ("experience_years", "publications"),
                )
            },
        ),
        (
            "Lists (JSON)",
            {
                "description": "Bu maydonlarga JSON array kiriting. Masalan: [\"ISO 9001\", \"CAP\"]",
                "fields": ("certifications", "expertise", "awards", "languages"),
            },
        ),
        ("Status", {"fields": (("is_active", "order"),)}),
    )


@admin.register(ContentBlock)
class ContentBlockAdmin(admin.ModelAdmin):
    list_display = ("id", "page_key", "key", "title_uz", "is_active", "order", "updated_at")
    list_filter = ("page_key", "is_active")
    search_fields = ("page_key", "key", "title_uz", "title_ru", "text_uz", "text_ru")
    ordering = ("page_key", "order", "-updated_at")
    list_editable = ("is_active", "order")
    list_per_page = 50


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ("id", "site_name", "phone", "updated_at")
    search_fields = ("site_name", "phone", "phone2", "address_uz", "address_ru")
    ordering = ("-updated_at",)


@admin.register(SeoMeta)
class SeoMetaAdmin(admin.ModelAdmin):
    list_display = ("id", "page_key", "title_uz", "updated_at")
    search_fields = ("page_key", "title_uz", "title_ru", "description_uz", "description_ru")
    ordering = ("page_key",)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "phone", "created_at")
    search_fields = ("name", "phone", "message")
    ordering = ("-created_at",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(BitrixLog)
class BitrixLogAdmin(admin.ModelAdmin):
    list_display = ("id", "ok", "endpoint", "created_at")
    list_filter = ("ok",)
    search_fields = ("endpoint", "error")
    ordering = ("-created_at",)
    readonly_fields = ("created_at", "updated_at")
