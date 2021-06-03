import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch } from "react-redux"
import { loggin } from "../store/actions/userActions"
import { useHistory } from 'react-router';
import GoogleLogin from 'react-google-login';




export function Login(props) {

  const dispatch = useDispatch()
  const history = useHistory()

  const [user, setUser] = useState({
    username: '',
    password: '',
    isStayLogged: false
  })

  const [msg, setMsg] = useState('')

  const onGoogleRes = (res) => {
    const data = res.profileObj
    data ? doLoggin(null, {...data, _id: data.googleId}) : setMsg('Could not login', res.error)
  }
  const handleChange = (ev) => {
    const { name, value, type, checked } = ev.target
    const val = (type === 'checkbox') ? checked : value
    setUser({ ...user, [name]: val })
  }

  const doLoggin = async (ev, userToLog = null) => {
    ev?.preventDefault()
    setMsg('')
    const loggedUser = await dispatch(loggin(userToLog || user))
    if (loggedUser) history.push('/card')
    else setMsg('Wrong username or password!')
  }
  
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div style={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar style={{
          margin: '10px',
          backgroundColor: 'blue',
        }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={doLoggin}
          style={{
            width: '100%',
            marginTop: '5px'
          }} noValidate>
          <TextField
            onChange={handleChange}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoFocus

          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox
              name="isStayLogged"
              onChange={handleChange}
              color="primary" />}
            label="Remember me"
          />
          <p style={{ color: 'red' }}>{msg}</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              <br />
              <br />
              <h4>
                Dont want to sign Up? Try with Google:
              </h4>
            </Grid>
          </Grid>
        </form>
      </div>
      <br />
      <GoogleLogin
        clientId="117899711408-bve78v8sl6hni1o7aiu7lcbvbvoodt1a.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onGoogleRes}
        onFailure={onGoogleRes}
        cookiePolicy={'single_host_origin'}
      />
      <br />
      <br />
      <Box mt={8}>
      </Box>
    </Container >
  );
}

