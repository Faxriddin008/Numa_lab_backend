from rest_framework import serializers
from .models import (
    Slider, About, Checkup, CheckupTest, CheckupBenefit,
    Doctor, Contact, ContentBlock, SiteSettings, SeoMeta
)


class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'


# ✅ NEW: Included Tests serializer
class CheckupTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckupTest
        fields = ("id", "title_uz", "title_ru", "order")


# ✅ NEW: Key Benefits serializer
class CheckupBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckupBenefit
        fields = ("id", "title_uz", "title_ru", "order")


class CheckupSerializer(serializers.ModelSerializer):
    # ✅ NEW: nested lists
    tests = CheckupTestSerializer(many=True, read_only=True)
    benefits = CheckupBenefitSerializer(many=True, read_only=True)

    class Meta:
        model = Checkup
        fields = (
            "id",
            "created_at", "updated_at",
            "name_uz", "name_ru",
            "description_uz", "description_ru",
            "price", "currency",
            "price_unit_uz", "price_unit_ru",
            "duration_uz", "duration_ru",
            "target_uz", "target_ru",
            "icon",
            "is_active", "order",
            "tests", "benefits",
        )


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


class ContentBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentBlock
        fields = '__all__'


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = '__all__'


class SeoMetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeoMeta
        fields = '__all__'


class ContactCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'phone', 'message', 'created_at')
