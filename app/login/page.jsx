// import LoginForm from '@/app/ui/login/loginForm/loginForm'
import styles from '@/app/ui/login/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      {/* <LoginForm /> */}
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
