const Text = styled('p')`
  fontFamily:  "Jost","Helvetica Neue",Helvetica,Arial,sans-serif,
  fontWeight: ({weight}) => weight ? weight : 400,
  fontSize: ({size}) => size ? size : '1.6rem',
  fontStyle: ({fontStyle}) => fontStyle ? fontStyle : 'normal'
`
