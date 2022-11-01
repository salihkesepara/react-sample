import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'src/store/actions/userActions'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

const Login = ({ userActions }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSuccessLogin = () => {
    userActions.getUserInfoRequest(() => navigate(from, { replace: true }))
  }

  return (
    <Container>
      <button onClick={handleSuccessLogin}>Login</button>
    </Container>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    userInfo: user.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
