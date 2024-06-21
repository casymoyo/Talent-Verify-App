import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    dateOfReg:'',
    RegNumber:'',
    contactPerson:'',
    numberOfEmployees:'',
    phoneNumber:'',
    email:'',

    employeeName:'',
    departmentName: '',
    roleName: '',
    roleDateStarted:'',
    roleDateLeft:'',
    duties:''

    // Add more fields as needed for employee details
  });
  const [currentStep, setCurrentStep] = useState(0); // Track step index
  const steps = ['company', 'department', 'role', 'employee']; // Array of steps

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Implement logic to process form data and potentially make API calls here
    // You can potentially reset the form data or navigate to a different page here
  };

  const getStepContent = () => {
    switch (currentStep) {
        case 0: // Company details
            return (
                <div>
                    <h2>Company Details</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">
                        Company Name
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="companyAddress" className="form-label">
                        Company Address
                        </label>
                        <textarea
                        className="form-control"
                        id="companyAddress"
                        rows="3"
                        required
                        value={formData.companyAddress}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfReg" className="form-label">
                        Date of Registration
                        </label>
                        <input
                        type="date"
                        className="form-control"
                        id="dateOfReg"
                        required
                        value={formData.dateOfReg}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="RegNumber" className="form-label">
                        Registration Number
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="RegNumber"
                        required
                        value={formData.RegNumber}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactPerson" className="form-label">
                        Contact Person
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numberOfEmployees" className="form-label">
                        Number of Employees
                        </label>
                        <input
                        type="number"
                        className="form-control"
                        id="numberOfEmployees"
                        min="1" // Set minimum to 1
                        required
                        value={formData.numberOfEmployees}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                        </label>
                        <input
                        type="tel" // Use tel for phone number input
                        className="form-control"
                        id="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                        Email Address
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={formData.emailAddress} // Corrected typo
                        onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleNextStep}>
                        Next
                    </button>
                    </form>
                </div>
            );
        case 1: 
            return (
            <div>
                <h2>Employee Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="employeeName" className="form-label">
                        Employee Name
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="employeeName"
                        required
                        value={formData.employeeName}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="departmentName" className="form-label">
                        Department Name
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="departmentName"
                        required
                        value={formData.departmentName}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roleName" className="form-label">
                        Role Name
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="roleName"
                        required
                        value={formData.roleName}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roleDateStarted" className="form-label">
                        Date Started
                        </label>
                        <input
                        type="date"
                        className="form-control"
                        id="roleDateStarted"
                        required
                        value={formData.roleDateStarted}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roleDateLeft" className="form-label">
                        Date Left (optional)
                        </label>
                        <input
                        type="date"
                        className="form-control"
                        id="roleDateLeft"
                        value={formData.roleDateLeft}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="duties" className="form-label">
                        Duties
                        </label>
                        <textarea
                        className="form-control"
                        id="duties"
                        rows="5"
                        required
                        value={formData.duties}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button type="button" className="btn btn-secondary" onClick={handleBackStep}>
                            Back
                        </button>
                        <button type="submit" className="btn btn-primary" onClick={handleNextStep}>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        );
        default:
            return null;
        }
    };
    
    const progress = Math.round((currentStep + 1) / steps.length * 100);
    
    return(
        <div className="">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Progress</h5>
                <span>{progress}% Complete</span>
            </div>
            {getStepContent()}
        </div>
    )
}

export default EmployeeForm;

  