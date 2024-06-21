import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
      if (validTypes.includes(file.type)) {
        setSelectedFile(file);
        setMessage('File selected successfully');
      } else {
        setSelectedFile(null);
        setMessage('Only Excel (.xlsx) or CSV (.csv) files are supported');
      }
    } else {
      setSelectedFile(null);
      setMessage('');
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);
      setMessage('Uploading...');
      try {
        // Implement logic to upload the file to your server using a library like Axios or Fetch API
        // This is a simulated delay for demonstration purposes
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSelectedFile(null);
        setMessage('Upload successful!');
      } catch (error) {
        console.error('Upload failed:', error);
        setMessage('Upload failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage('Please select a file first');
    }
  };

  return (
    <div className="file-upload-drag-drop">
      <h2><i className="bi bi-cloud-upload"></i> File Upload</h2>
      <div className='mb-2'>
        {isLoading ? (
          <div className="loader">
            <i className="bi bi-hourglass-split"></i>
          </div>
        ) : (
          <>
            <input type="file" id="fileInput" className='form-control' onChange={handleChange} />
          </>
        )}
      </div>
      <button type="button" className="btn btn-primary w-100" onClick={handleUpload} disabled={isLoading}>
        Upload
      </button>
      <div className="mt-3">
        {message && <p className={message.includes('success') ? 'text-success' : 'text-danger'}>{message}</p>}
      </div>
    </div>
  );
}

export default FileUpload;
