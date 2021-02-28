from django.db import models
from django.utils import timezone
from django.utils.text import slugify

from ckeditor.fields import RichTextField
# Create your models here.

class ProductCountry(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = "product countries"

class ProductBrand(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class ProductHeight(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Product(models.Model):
    sold = models.BooleanField(default=False)
    thumbnail = models.FileField(upload_to='products', max_length=100, null=True, blank=True)
    name = models.CharField(max_length=80)
    slug_name = models.SlugField(max_length=80, null=True, default='name-slugified')
    price = models.FloatField()
    desc = RichTextField(blank=True, null=True)

    height = models.ForeignKey(ProductHeight, on_delete=models.SET_NULL, null=True)
    made_in = models.ForeignKey(ProductCountry, on_delete=models.SET_NULL, null=True)
    brand = models.ForeignKey(ProductBrand, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.brand.name +" "+ self.name +" "+ self.height.name

    
    def save(self, *args, **kwargs):
        value = self.brand.name +" "+ self.name +" "+ self.height.name
        self.slug_name = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)
