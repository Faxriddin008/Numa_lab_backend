from django.db import models


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Slider(TimeStampedModel):
    title_uz = models.CharField(max_length=255)
    title_ru = models.CharField(max_length=255)
    text_uz = models.TextField(blank=True)
    text_ru = models.TextField(blank=True)
    image = models.ImageField(upload_to='slider/')
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self) -> str:
        return self.title_uz


class About(TimeStampedModel):
    title_uz = models.CharField(max_length=255)
    title_ru = models.CharField(max_length=255)
    text_uz = models.TextField()
    text_ru = models.TextField()
    image = models.ImageField(upload_to='about/', blank=True, null=True)

    def __str__(self) -> str:
        return self.title_uz


class Checkup(TimeStampedModel):
    name_uz = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    description_uz = models.TextField(blank=True)
    description_ru = models.TextField(blank=True)
    price = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self) -> str:
        return self.name_uz


class Doctor(TimeStampedModel):
    full_name = models.CharField(max_length=255)
    specialty_uz = models.CharField(max_length=255)
    specialty_ru = models.CharField(max_length=255)
    bio_uz = models.TextField(blank=True)
    bio_ru = models.TextField(blank=True)
    image = models.ImageField(upload_to='doctors/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self) -> str:
        return self.full_name


class ContentBlock(TimeStampedModel):
    page_key = models.CharField(max_length=60, db_index=True)  # e.g. home, about, services
    key = models.CharField(max_length=60, db_index=True)       # e.g. hero, faq, promo

    title_uz = models.CharField(max_length=255, blank=True)
    title_ru = models.CharField(max_length=255, blank=True)
    text_uz = models.TextField(blank=True)
    text_ru = models.TextField(blank=True)
    image = models.ImageField(upload_to='blocks/', blank=True, null=True)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['page_key', 'order', '-created_at']
        unique_together = [('page_key', 'key', 'order')]

    def __str__(self) -> str:
        return f"{self.page_key}:{self.key}#{self.order}"


class SiteSettings(TimeStampedModel):
    # store as single row; API returns first
    site_name = models.CharField(max_length=120, default='NUMA Diagnostics')
    phone = models.CharField(max_length=50, blank=True)
    phone2 = models.CharField(max_length=50, blank=True)
    address_uz = models.CharField(max_length=255, blank=True)
    address_ru = models.CharField(max_length=255, blank=True)
    worktime_uz = models.CharField(max_length=255, blank=True)
    worktime_ru = models.CharField(max_length=255, blank=True)
    telegram = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    map_url = models.URLField(blank=True)
    logo = models.ImageField(upload_to='settings/', blank=True, null=True)

    def __str__(self) -> str:
        return self.site_name


class SeoMeta(TimeStampedModel):
    page_key = models.CharField(max_length=60, unique=True)  # home, about, services, ...
    title_uz = models.CharField(max_length=255, blank=True)
    title_ru = models.CharField(max_length=255, blank=True)
    description_uz = models.TextField(blank=True)
    description_ru = models.TextField(blank=True)
    image = models.ImageField(upload_to='seo/', blank=True, null=True)

    def __str__(self) -> str:
        return self.page_key


class Contact(TimeStampedModel):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=30)
    message = models.TextField(blank=True)

    def __str__(self) -> str:
        return f"{self.name} ({self.phone})"


class BitrixLog(TimeStampedModel):
    ok = models.BooleanField(default=False)
    endpoint = models.CharField(max_length=255, blank=True)
    payload = models.JSONField(default=dict, blank=True)
    response = models.JSONField(default=dict, blank=True)
    error = models.TextField(blank=True)

    def __str__(self) -> str:
        return f"BitrixLog #{self.id} - {'OK' if self.ok else 'ERROR'}"
