const AnchorTag = styled.a({
  border:'1px solid #fff',
  borderRadius: '32px',
  paddingBottom: '64px',
  textDecoration:'none',
  width: '95%',
  ['& p:nth-child(2)']: {width: ({largeDescription}) => largeDescription ? '90%' : '60%',
   lineHeight: '2rem',
  marginBottom: '32px'}
})

const ProductImage = styled.img({
  backgroundColor:'#fff',
  borderRadius: '24px',
  height: '400px',
  objectFit: 'cover',
  width: '300px'
})

const TitleDaytimeRoutineText = styled.div({
  marginTop: '12%',
  width: '70%',
})

const DaytimeRoutineWrapper = styled.div({
  padding: '48px',
  display:'grid',
  gridTemplateColumns: '1fr 1fr',
  gridRow: 'auto auto',
  gridColumnGap: '20px',
  gridRowGap: '100px',
  alignItems: 'center',
  justifyItems: 'center'
})

