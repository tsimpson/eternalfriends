const valid = ({fullname, username, email, password, confirm_password}) => {
  const err = {}

  if(!fullname) {
    err.fullname = "Please add your full name."
  } else if(fullname.length > 25) {
    err.fullname = "Name can not be longer than 25 characters."
  }

  if(!username) {
    err.username = "Please add your username."
  } else if(username.replace(/ /g, '').length > 25) {
    err.username = "Username can not be longer than 25 characters."
  }

  if(!email) {
    err.email = "Please add your email."
  } else if(!validateEmail(email)) {
    err.email = "Must be a valid email address."
  }

  if(!password) {
    err.password = "Please add a password."
  } else if(password.length < 6) {
    err.password = "Must be at least 6 characters."
  }

  if(password !== confirm_password) {
    err.confirm_password = "Password must match."
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length
  }
}



function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid