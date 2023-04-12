const FlexStyleDaytime = styled(Flex)({
    border:'1px solid #fff',
    borderRadius: '32px',
    width: '90%',
    ['& p:nth-child(2)']: {width: '70%', lineHeight: '2rem'}
})

const AnchorTag = styled.a({
  border:'1px solid #fff',
  borderRadius: '32px',
  padding: '4px 4px 80px 4px',
  position: 'relative',
  textDecoration:'none',
  width: '97%',
  ['& p:nth-child(2)']: { lineHeight: '1.6rem',
  marginBottom: '32px',
  width: '98%'}
})

const StyleRoutineText = styled.div({
    marginTop: '55%',
    width: '65%',
})

const ProductImage = styled.img({
  backgroundColor:'#fff',
  borderRadius: '24px',
  height: '400px',
  objectFit: 'cover',
  width: '350px'
})

const TitleDaytimeRoutineText = styled.div({
  marginTop: '12%',
  width: '70%',
})

const NameDaytimeRoutineText = styled.div({
  position: "absolute",
  bottom: (props) => props.break ? "20px" : '24px',
  width: '100%',
  ['& p']: {
    lineHeight: '1.5rem'
  }
})

const DaytimeRoutineWrapper = styled.div({
  padding: '48px',
  display:'grid',
  gridTemplateColumns: '1fr 1fr',
  gridRow: 'auto auto',
  gridColumnGap: '30px',
  gridRowGap: '50px',
  alignItems: 'center',
  justifyItems: 'center'
})

const QRCodeSkinDescription = styled.div({
  bottom:'172px',
  left: 'calc(50% - 160px);',
  position: 'absolute',
  width: '320px',
  ['& p']: {lineHeight: '1.6rem'},
  ['& span']: {fontWeight: '800'}
})

const QRCodeSkinImage = styled.img({
  bottom:'20px',
  height: '140px',
  left: 'calc(50% - 70px);',
  objectFit: 'cover',
  position: 'absolute',
  width: '140px'
})