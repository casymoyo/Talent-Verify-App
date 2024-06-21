import { React, useState, useContext } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import UserContext from '../contexts/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, isLoading, error } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center h-100 mt-5">
      <MDBRow>
        <MDBCol md="" class='w-100'>
          <h3 className="text-center mb-4">Talent Verify</h3>

          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <MDBBtn className="mb-4 w-100" onClick={() => handleLogin(username, password)}>
            Login
          </MDBBtn>

          {isLoading && <p>Logging in...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
