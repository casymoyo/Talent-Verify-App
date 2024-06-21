from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    date_of_reg = models.DateField()
    reg_number = models.CharField(max_length=255)
    contact_person = models.CharField(max_length=255)
    number_of_employees = models.IntegerField()
    phonenumber = models.CharField(max_length=20)
    email = models.EmailField()
    department = models.ManyToManyField(Department, related_name='departments')

    def __str__(self):
        return self.name

class Role(models.Model):
    name = models.CharField(max_length=255)
    date_started = models.DateField(blank=True, null=True)
    date_left = models.DateField(blank=True, null=True)
    duties = models.TextField()

    def __str__(self):
        return self.name

class Employee(models.Model):
    employee_id = models.CharField(max_length=255, primary_key=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)  
    name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, blank=True, null=True)  
    role = models.ForeignKey(Role, on_delete=models.CASCADE)  

    def __str__(self):
        return self.name

class EmployeeHistory(models.Model):
    id = models.AutoField(primary_key=True)
    changes_date = models.DateField()
    change_type = models.CharField(max_length=255)
    old_data_value = models.CharField(max_length=255)
    new_data_value = models.CharField(max_length=255)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE) 

    def __str__(self):
        return f"Change for employee {self.employee.name} on {self.changes_date}"


