import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Zoko</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum cumque minus quo ipsum facilis, et labore praesentium optio iure aliquid veniam temporibus, rerum accusantium excepturi cupiditate eveniet possimus quos?</p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username'  />
                    <input type="password" placeholder='Password'  />
                    <button>Login</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login