import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css'
import video from '../LoginPage/videoplayback.mp4'

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='content'>
      <video className = "loginVideo" src= {video} autoPlay loop muted

></video>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
