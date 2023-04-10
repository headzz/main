const Text = styled('p')({
  color: ({color}) => color ? color : '#fff',
  fontFamily:  `"Jost","Helvetica Neue",Helvetica,Arial,sans-serif`,
  fontWeight: ({weight}) => weight ? weight : 400,
  fontSize: ({size}) => size ? size : '1.6rem',
  fontStyle: ({fontStyle}) => fontStyle ? fontStyle : 'normal',
  ['@media (min-width: 600px)']: {color: '#155ca3'}
})
