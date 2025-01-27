import styles from './Form.module.css'
import { FaEnvelope, FaLock } from "react-icons/fa6";

const Signin_up_form = () => {
  return (
    <div className={styles['form-container']}>
      <h2>Sign in</h2>
      <p>Open your account to continue.</p>
      <form className={styles['form-body']}>
        <label htmlFor="">Email</label>
        <div><FaEnvelope /><input type="email" placeholder='Enter your email address'/></div>
        <label htmlFor="">Password</label>
        <div><FaLock /><input type="password" placeholder='Enter your password'/></div>
        <div className={styles['checkbox-input']}><input type="checkbox" /><small>Remember me?</small></div>
        <button type="submit">Sign in</button>
      </form>
      <span>Forgot Password?</span>
      <div className={styles['form-bar']}></div>
      <div className={styles['form-footer']}>
        <p>Don't Have an Account yet?</p>
        <p>Click Here to Sign up</p>
      </div>
    </div>
  )
}

export default Signin_up_form