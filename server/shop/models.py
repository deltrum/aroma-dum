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

class ProductColor(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class ProductMaterial(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class ProductHeight(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class ProductBundle(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=80)
    slug_name = models.SlugField(max_length=80, null=True, default='name-slugified')
    price = models.FloatField()
    sold = models.BooleanField(default=False)
    desc = RichTextField(blank=True, null=True)

    color = models.ForeignKey(ProductColor, on_delete=models.SET_NULL, null=True)
    material = models.ManyToManyField(ProductMaterial, blank=True)
    bundle = models.ManyToManyField(ProductBundle, blank=True)
    height = models.ForeignKey(ProductHeight, on_delete=models.SET_NULL, null=True)
    made_in = models.ForeignKey(ProductCountry, on_delete=models.SET_NULL, null=True)
    brand = models.ForeignKey(ProductBrand, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.brand.name +" "+ self.name +" "+ self.color.name +" "+ self.height.name

    
    def save(self, *args, **kwargs):
        value = self.brand.name +" "+ self.name +" "+ self.color.name +" "+ self.height.name
        self.slug_name = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)



class ProductImage(models.Model):
    product = models.ForeignKey(Product, default=None, on_delete=models.CASCADE)
    images = models.FileField(upload_to = 'product/')
 
    def __str__(self):
        return self.product.name