from django.db import models

class Marks(models.Model):
    student_id = models.IntegerField()
    subject = models.CharField(max_length=100)
    marks_obtained = models.FloatField()
    total_marks = models.FloatField()

    @property
    def percentage(self):
        return (self.marks_obtained / self.total_marks) * 100 if self.total_marks else 0

    def __str__(self):
        return f"{self.subject} - {self.marks_obtained}/{self.total_marks}"

