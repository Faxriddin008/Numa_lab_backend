from rest_framework import serializers
from .models import (
    Slider, About, Checkup, Doctor, Contact, ContentBlock, SiteSettings, SeoMeta
)


class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'


class CheckupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkup
        fields = '__all__'


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
