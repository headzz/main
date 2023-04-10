const ButtonInvisible = styled('button')({
  border: 0,
  background: 0,
  color: ({color}) => color ? color : '#fff',
  [':hover']: {color: '#e9e800'}
})
