import { useState } from 'react';
import styles from './Form.module.css'
import { FaEnvelope, FaUser,  FaLock } from "react-icons/fa6";

const Signin_up_form = () => {

  const [is_Signing_in, setIs_Signing_in] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData( prev => ({
      ...prev,
      [name]: type == 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {

  };

  const toggleForm = () => {
    setIs_Signing_in(!is_Signing_in);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      rememberMe: false
    });
  };



  return (
    <div className={styles['form-container']}>

      <h2>{ is_Signing_in ? 'Sign in' : 'Sign up'}</h2>
      <p>{ is_Signing_in ? 'Open your account to continue.' : 'Create an account to get started.'}</p>

      <form className={styles['form-body']} onSubmit={handleSubmit}>
        {
          !is_Signing_in && (
            <>
              <div className={styles['name-section']}>
                <div>
                  <label htmlFor="">First Name</label>
                  <div><input type="text" name='firstName' placeholder='Enter your First name' value={formData.firstName} onChange={handleInputChange} required/></div>
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <div><input type="text" name='lastName' placeholder='Enter your Last name' value={formData.lastName} onChange={handleInputChange} required/></div>
                </div>
              </div>
            </>
          )
        }
        <label htmlFor="">Email</label>
        <div><FaEnvelope /><input type="email" name="email" placeholder='Enter your email address'/></div>
        {
          !is_Signing_in && (
            <>
              <label htmlFor="">Username</label>
              <div><FaUser /><input type="text" name='username' placeholder='Create a Username' value={formData.username} onChange={handleInputChange} required /></div>
            </>
          )
        }
        <label htmlFor="">Password</label>
        <div><FaLock /><input type="password" name="password" placeholder='Enter your password'/></div>
        {
          !is_Signing_in && (
            <>
              <label htmlFor="">Confirm Password</label>
              <div><FaLock /><input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleInputChange} required /></div>
            </>
          )
        }
        {is_Signing_in && <div className={styles['checkbox-input']}><input type="checkbox"  name="rememberMe" checked={formData.rememberMe}  onChange={handleInputChange}/><small>Remember me?</small></div>}
        <button type="submit">{ is_Signing_in ? 'Sign in' : 'Sign up'}</button>
      </form>

      {is_Signing_in && <span>Forgot Password?</span>}

      <div className={styles['form-bar']} style={{ margin: is_Signing_in ? '2rem 0 1rem' : '0.1rem 0 1rem' }}></div>

      <div className={styles['form-footer']}>
        <p>Don't Have an Account yet?</p>
        <p onClick={toggleForm}>Click Here to { is_Signing_in ? 'Register' : 'Log in'}</p>
      </div>

    </div>
  )
}

export default Signin_up_form