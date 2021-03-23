import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'

const Register = () => {
  const { auth, alert } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()

  const initialState = { 
    fullname: '',
    username: '',
    email: '', 
    password: '',
    confirm_password: '',
    gender: ''
  }
  const [userData, setUserData] = useState(initialState)
  const { fullname, username, email, password, confirm_password } = userData

  const [typePass, setTypePass] = useState(false)
  const [typeConfirmPass, setTypeConfirmPass] = useState(false)

  useEffect(() => {
    if(auth.token) history.push("/")
  }, [auth.token, history])


  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(register(userData))
  }

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Eternal Friends</h3>

        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" className="form-control" id="fullname" name="fullname"
           onChange={handleChangeInput} value={fullname}  
           style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
          <small className="form-text text-danger">
            {alert.fullname ? alert.fullname : ''}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" className="form-control" id="username"
           onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')} name="username" 
           style={{background: `${alert.username ? '#fd2d6a14' : ''}`}}/>
          <small className="form-text text-danger">
            {alert.username ? alert.username : ''}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" 
          onChange={handleChangeInput} value={email} name="email"
          style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}/>
          <small className="form-text text-danger">
            {alert.email ? alert.email : ''}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <div className="pass">
            <input type={ typePass? "text" : "password" } className="form-control" id="exampleInputPassword1"
            onChange={handleChangeInput} value={password} name="password"
            style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}/>
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>

          </div>
          <small className="form-text text-danger">
            {alert.password ? alert.password : ''}
          </small>
          
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <div className="pass">
            <input type={ typeConfirmPass? "text" : "password" } className="form-control" id="confirm_password"
            onChange={handleChangeInput} value={confirm_password} name="confirm_password"
            style={{background: `${alert.confirm_password ? '#fd2d6a14' : ''}`}}/>
            <small onClick={() => setTypeConfirmPass(!typeConfirmPass)}>
              {typeConfirmPass ? 'Hide' : 'Show'}
            </small>
          </div>
          <small className="form-text text-danger">
            {alert.confirm_password ? alert.confirm_password : ''}
          </small>

        </div>

        <div className="row justify-content-between mx-0 mb-1">
        
        <label htmlFor="male">
        Male: <input type="radio" id="male" name="gender"
        value="male" onChange={handleChangeInput} />
        </label>

        <label htmlFor="female">
          Female: <input type="radio" id="female" name="gender"
          value="female" onChange={handleChangeInput} />
        </label>
        
        <label htmlFor="other">
          Other: <input type="radio" id="other" name="gender"
          value="other" onChange={handleChangeInput} />
        </label>

        </div>
        
        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>

        <p className="my-2">
          Already a member? <Link to="/" style={{color: "crimson"}}>Login</Link>
        </p>

      </form>
    </div>
  )
}

export default Register
