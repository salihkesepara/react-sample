export const Types = {
  SHOW_SNACK_MESSAGE: 'SHOW_SNACK_MESSAGE'
}

export const showSnackMessage = (payload) => ({
  type: Types.SHOW_SNACK_MESSAGE,
  payload
})
