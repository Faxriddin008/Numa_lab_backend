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
    image = models.ImageField(upload_to="slider/")
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.title_uz or f"Slider #{self.id}"


class About(TimeStampedModel):
    title_uz = models.CharField(max_length=255)
    title_ru = models.CharField(max_length=255)
    text_uz = models.TextField()
    text_ru = models.TextField()
    image = models.ImageField(upload_to="about/", blank=True, null=True)

    def __str__(self) -> str:
        return self.title_uz or f"About #{self.id}"


class Checkup(TimeStampedModel):
    name_uz = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)

    # 1-rasmdagi subtitle/description
    description_uz = models.TextField(blank=True)
    description_ru = models.TextField(blank=True)

    # Narx so'mda: 1290000 (UZS)
    price = models.PositiveBigIntegerField(default=0)

    # 1-rasm uchun qo'shimcha fieldlar
    currency = models.CharField(max_length=10, default="UZS")  # doim UZS bo'lsin
    price_unit_uz = models.CharField(max_length=50, default="paket")
    price_unit_ru = models.CharField(max_length=50, default="пакет")

    duration_uz = models.CharField(max_length=50, blank=True, default="")  # "2-3 soat"
    duration_ru = models.CharField(max_length=50, blank=True, default="")  # "2-3 часа"

    target_uz = models.CharField(max_length=100, blank=True, default="")  # "Yoshlar (18-35)"
    target_ru = models.CharField(max_length=100, blank=True, default="")

    icon = models.ImageField(upload_to="checkups/icons/", blank=True, null=True)

    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.name_uz or f"Checkup #{self.id}"


class CheckupTest(TimeStampedModel):
    checkup = models.ForeignKey(Checkup, related_name="tests", on_delete=models.CASCADE)
    title_uz = models.CharField(max_length=255)
    title_ru = models.CharField(max_length=255, blank=True, default="")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.title_uz or f"Test #{self.id}"


class CheckupBenefit(TimeStampedModel):
    checkup = models.ForeignKey(Checkup, related_name="benefits", on_delete=models.CASCADE)
    title_uz = models.CharField(max_length=255)
    title_ru = models.CharField(max_length=255, blank=True, default="")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.title_uz or f"Benefit #{self.id}"


class Doctor(TimeStampedModel):
    full_name = models.CharField(max_length=255)
    specialty_uz = models.CharField(max_length=255, blank=True, default="")
    specialty_ru = models.CharField(max_length=255, blank=True, default="")
    bio_uz = models.TextField(blank=True, default="")
    bio_ru = models.TextField(blank=True, default="")
    image = models.ImageField(upload_to="doctors/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    education_uz = models.TextField(blank=True, default="")
    education_ru = models.TextField(blank=True, default="")

    experience_years = models.PositiveIntegerField(blank=True, null=True)
    publications = models.PositiveIntegerField(blank=True, null=True)

    certifications = models.JSONField(default=list, blank=True)
    expertise = models.JSONField(default=list, blank=True)
    awards = models.JSONField(default=list, blank=True)
    languages = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.full_name or f"Doctor #{self.id}"


class ContentBlock(TimeStampedModel):
    page_key = models.CharField(max_length=60, db_index=True)
    key = models.CharField(max_length=60, db_index=True)

    title_uz = models.CharField(max_length=255, blank=True)
    title_ru = models.CharField(max_length=255, blank=True)
    text_uz = models.TextField(blank=True)
    text_ru = models.TextField(blank=True)
    image = models.ImageField(upload_to="blocks/", blank=True, null=True)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["page_key", "order", "-created_at"]
        unique_together = [("page_key", "key", "order")]

    def __str__(self) -> str:
        return f"{self.page_key}:{self.key}#{self.order}"


class SiteSettings(TimeStampedModel):
    site_name = models.CharField(max_length=120, default="NUMA Diagnostics")
    phone = models.CharField(max_length=50, blank=True)
    phone2 = models.CharField(max_length=50, blank=True)
    address_uz = models.CharField(max_length=255, blank=True)
    address_ru = models.CharField(max_length=255, blank=True)
    worktime_uz = models.CharField(max_length=255, blank=True)
    worktime_ru = models.CharField(max_length=255, blank=True)
    telegram = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    map_url = models.URLField(blank=True)
    logo = models.ImageField(upload_to="settings/", blank=True, null=True)

    def __str__(self) -> str:
        return self.site_name or f"Settings #{self.id}"


class SeoMeta(TimeStampedModel):
    page_key = models.CharField(max_length=60, unique=True)
    title_uz = models.CharField(max_length=255, blank=True)
    title_ru = models.CharField(max_length=255, blank=True)
    description_uz = models.TextField(blank=True)
    description_ru = models.TextField(blank=True)
    image = models.ImageField(upload_to="seo/", blank=True, null=True)

    def __str__(self) -> str:
        return self.page_key or f"SeoMeta #{self.id}"


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
