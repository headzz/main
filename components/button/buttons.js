const ButtonInvisible = styled.button({
  border: 0,
  background: 0,
  borderRadius: '16px',
  padding: ({padding}) => padding ? padding : '16px',
  ["&:hover > p"]: {color: '#e9e800'},
  ["&:focus > p"]: { color: '#e9e800', borderBottom: "2px solid #e9e800" },
})

const PrimaryButton = styled.button({
  border: '1px solid #fff',
  backgroundColor: '#e9e800',
  borderRadius: '16px',
  padding: ({padding}) => padding ? padding : '16px',
  ["& > p"]: { color: '#3a0065'},
  ["&:hover > p"]: {backgroundColor: '#3a0065', color: '#fff', border: 0},
  ["&:focus > p"]: { backgroundColor: '#fff', color: '#3a0065', border: '2px solid #883ec3' },
})

const SecondaryButton = styled.button({
  backgroundColor: '#8737c7',
  border: '1px solid #fff',
  borderRadius: '16px',
  padding: ({padding}) => padding ? padding : '16px',
  ["&:hover > p"]: {backgroundColor: '#e9e800', color: '#3a0065', border: 0},
  ["&:focus > p"]: { backgroundColor: '#fff', color: '#3a0065', border: '2px solid #883ec3' },
})