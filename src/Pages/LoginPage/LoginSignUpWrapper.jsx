import { Outlet } from 'react-router-dom';
import './login-signup-wrapper.css'

function LoginSignUpWrapper() {
    return (
        <div className='loginSignUpWrapperWrapper'>
           <Outlet />
        </div>
    );
}

export default LoginSignUpWrapper;