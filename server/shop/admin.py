from django.contrib import admin

# Custom
from .models import *


# Register your models here.

admin.site.register(ProductColor)
admin.site.register(ProductMaterial)
admin.site.register(ProductHeight)
admin.site.register(ProductBundle)
admin.site.register(ProductCountry)
admin.site.register(ProductBrand)

class ProductImageAdmin(admin.StackedInline):
    model = ProductImage
 
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin]
 
    class Meta:
       model = Product
 
@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    pass