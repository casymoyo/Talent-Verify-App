import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import EmployeeForm from './Employees/EmployeeForm'; // Assuming EmployeeForm component exists
import FileUpload from './Employees/FileUpload';
import EmployeeCard from './Employees/EmployeeCard';

function Dashboard() {
    const EmployeeData = [
    {
      name: 'John Doe',
      company: 'Acme Inc.',
      role: 'Software Engineer',
      department: 'Engineering',
      iconUrl: 'https://example.com/employee-icon-1.jpg', // Replace with actual URL (optional)
    },
    {
      name: 'Jane Smith',
      company: 'Brilliant Labs',
      role: 'Marketing Manager',
      department: 'Marketing',
    },
    {
      name: 'Alice Johnson',
      company: 'Green Tech Solutions',
      role: 'Data Scientist',
      department: 'Research & Development',
      iconUrl: 'https://example.com/employee-icon-2.jpg', // Replace with actual URL (optional)
    },
    {
      name: 'Michael Brown',
      company: 'FinTech Inc.',
      role: 'Financial Analyst',
      department: 'Finance',
    },
    {
      name: 'Sarah Lee',
      company: 'Health & Wellness Co.',
      role: 'Registered Nurse',
      department: 'Healthcare',
    },
    {
      name: 'David Williams',
      company: 'Global Consulting',
      role: 'Management Consultant',
      department: 'Business Development',
      iconUrl: 'https://example.com/employee-icon-3.jpg', // Replace with actual URL (optional)
    },
    {
      name: 'Emily Jones',
      company: 'Creative Agency',
      role: 'Graphic Designer',
      department: 'Marketing',
    },
    {
      name: 'Robert Garcia',
      company: 'Tech Startup',
      role: 'Software Developer',
      department: 'Engineering',
    },
    {
      name: 'Amanda Miller',
      company: 'Law Firm',
      role: 'Associate Lawyer',
      department: 'Legal',
    },
    {
      name: 'Christopher Davis',
      company: 'Retail Chain',
      role: 'Sales Manager',
      department: 'Sales',
    },
  ];
  const [employees, setEmployees] = useState(EmployeeData)
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleCloseEmployeeForm = () => setShowEmployeeForm(false);
  const handleOpenEmployeeForm = () => setShowEmployeeForm(true);

  const handleOpenFileUpload = () => setShowFileUpload(true);
  const handleCloseFileUpload = () => setShowFileUpload(false);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchValue(searchTerm);

    const filteredData = employees.filter((employee) => {
      const lowerName = employee.name.toLowerCase();
      const lowerCompany = employee.company.toLowerCase();
      const lowerRole = employee.role.toLowerCase();
      const lowerDepartment = employee.department.toLowerCase();

      // Filter based on all four fields (name, company, role, department)
      return (
        lowerName.includes(searchTerm) ||
        lowerCompany.includes(searchTerm) ||
        lowerRole.includes(searchTerm) ||
        lowerDepartment.includes(searchTerm)
      );
    });

    setFilteredEmployees(filteredData);
  };

  
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="row justify-content-between align-items-center w-100">
          <div>
            <Link className="navbar-brand" href="#">Talent Verify</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row mx-2">
        <div class='d-flex justify-content-between'>
          <div class='mt-2'>
          <span>
              <Button variant="secondary" className="me-3" onClick={handleOpenEmployeeForm}>
                <i className="bi bi-person-plus-fill text-warning"></i> Add Employee
              </Button>
            </span>
            <span>
              <Button variant="secondary" onClick={handleOpenFileUpload}>
                <i className="bi bi-file-earmark-excel-fill"></i> Add Employee
              </Button>
            </span>
          </div>
          <div class='mt-2'>
            <input
              type='search'
              className='form-control'
              value={ searchValue }
              onChange={handleSearchChange}
              placeholder='search'
            />
          </div>
        </div>
        <div className="row">
          <h5 class='py-2'>Employee List</h5>
          {filteredEmployees.map((employee) => (
            <div className="container"> 
              <div className="row justify-content-center"> 
                <EmployeeCard  key={employee.name} employee={employee} />
              </div>
            </div>
          ))}

          <Modal show={showEmployeeForm} onHide={handleCloseEmployeeForm}>
            <Modal.Header closeButton>
              <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EmployeeForm /> {/* Render the EmployeeForm component here */}
            </Modal.Body>
          </Modal>

          <Modal show={showFileUpload} onHide={handleCloseFileUpload}>
            <Modal.Body>
              <FileUpload/> 
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
