import React from 'react';
import { BsGoogle } from 'react-icons/bs';
// import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className='my-4'>Please Sign In</h2>
            <button onClick={signInUsingGoogle} className="btn btn-info text-light mt-4"><BsGoogle /> Sign In with google</button>
        </div>
    );
};

export default Login;