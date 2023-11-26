import React, {useState,useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [pwd,setPwd] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('')
        setPwd('')
        setSuccess(true);
    }
    

  return (
    <>
    {success ? (
        <section>
            <h1>Success</h1>
            <p>
            <Link to='/'>Go back to Home</Link>
            </p>
        </section>
    ) : (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
        aria-live='assertive'>{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id='username'
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            required
            value={user} />

            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id='password'
            onChange={(e) => setPwd(e.target.value)}
            required
            value={pwd}/>
            <button>Sign in</button>
        </form>
        <p>
            Need an Account? <br />
            <span className='line'>
            <Link to='/register'>Sign Up</Link>
            </span>
        </p>
    </section>
    )}
    </>
  )
}
