import styles from './PagesStyle.module.css'
import Signin_up_form from '../components/Signin_up_form'

const LandingPage = () => {
  return (
    <div className={styles['landing-page-container']}>
      <div className={styles['header-container']}>
        <div>
          <img src="/pictures/Logo.png" alt="Logo" />
          <span>Bill Splitter</span>
        </div>
        <div>
          <a href="#explore">Explore</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className={styles['hero-container']}>
        <div className={styles['context-side']}>
          <div className={styles['animated-icons']}>
            <img src='\pictures\coins-currency-svgrepo-com.svg' alt="coins-animated-icon" />
            <img src='\pictures\bills-and-coins-svgrepo-com.svg' alt="bills-animated-icon" />
          </div>
          <img src='\pictures\Collab-pana.svg' alt="group-svg" className={styles['group-svg']}/>
          <span>WELCOME TO</span>
          <h1 className={styles['website-name']}>Bill Splitter</h1>
          <p className={styles['website-tagline']}>Your website for <span>Fair Sharing</span> Thru <span>Effortless Splitting</span></p>
        </div>
        <div className={styles['form-side']}>
          <Signin_up_form />
        </div>
      </div>
      <div className={styles['footer-main-container']}>
        <div className={styles['']}></div>
        <div className={styles['']}></div>
      </div>
    </div> 
  )
}

export default LandingPage