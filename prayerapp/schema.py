"""drf-spectacular extensions for prayerapp"""

from drf_spectacular.extensions import OpenApiViewExtension
from drf_spectacular.utils import extend_schema

class FixDfRestAuth(OpenApiViewExtension):
    target_class = "dj_rest_auth.views.LoginView"

    def view_replacement(self):
        from dj_rest_auth.views import LoginView
        return extend_schema()(LoginView)