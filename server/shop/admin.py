from django.contrib import admin

# Custom
from .models import *


# Register your models here.

admin.site.register(ProductHeight)
admin.site.register(ProductCountry)
admin.site.register(ProductBrand)
admin.site.register(Product)
