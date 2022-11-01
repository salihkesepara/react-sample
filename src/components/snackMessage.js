import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack'
import _ from 'lodash'

const SnackMessage = ({ snackMessage }) => {
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (!_.isEmpty(snackMessage)) {
      enqueueSnackbar(snackMessage?.message, { variant: snackMessage?.variant })
    }
  }, [snackMessage])

  return null
}

const mapStateToProps = ({ layout }) => {
  return {
    snackMessage: layout.snackMessage
  }
}

export default connect(mapStateToProps)(SnackMessage)
