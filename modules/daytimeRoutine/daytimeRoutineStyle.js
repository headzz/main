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

const QRCodeSkinDescription = styled.div({
  bottom:'180px',
  left: 'calc(50% - 160px);',
  position: 'absolute',
  width: '320px',
  ['& p']: {lineHeight: '1.5rem'},
  ['span']: {fontWeigth: '800'}
})

const QRCodeSkinImage = styled.img({
  bottom:'4px',
  height: '180px',
  left: 'calc(50% - 90px);',
  objectFit: 'cover',
  position: 'absolute',
  width: '180px'
})