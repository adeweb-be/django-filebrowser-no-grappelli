from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class FileBrowserAppConfig(AppConfig):
    name = 'filebrowser'
    verbose_name = _("Files")