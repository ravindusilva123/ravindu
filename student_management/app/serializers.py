from rest_framework import serializers
from .models import Marks

class MarksSerializer(serializers.ModelSerializer):
    percentage = serializers.ReadOnlyField()

    class Meta:
        model = Marks
        fields = ['id', 'student_id', 'subject', 'marks_obtained', 'total_marks', 'percentage']
