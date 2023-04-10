const Text = styled('p')`
  font-family:  "Jost","Helvetica Neue",Helvetica,Arial,sans-serif,
  font-weight: ({weight}) => weight ? weight : 400,
  font-size: ({size}) => size ? size : '1.6rem',
  font-style: ({fontStyle}) => fontStyle ? fontStyle : 'normal'
`;


