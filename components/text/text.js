const Text = styled('p')({
  color: ({color}) => color ? color : '#fff',
  fontFamily:  ({alternateFamily}) => alternateFamily ? `"Bely-Display",Helvetica,serif` : `"Jost","Helvetica Neue",Helvetica,Arial,sans-serif`,
  fontWeight: ({weight}) => weight ? weight : 400,
  fontSize: ({size}) => size ? size : '4rem',
  fontStyle: ({fontStyle}) => fontStyle ? fontStyle : 'normal',
  lineHeight: '72px',
  textAlign: ({align}) => align ? align : 'inherit'
})
