const ProductDetailFlex = styled(Flex)({
  paddingTop: '10%',
  ['& p:nth-child(1)']: {marginBottom: '48px'},
  ['& p:not(:first-child)']: {lineHeight: '3rem', width: '70%'},
  ['& p:last-child']: {marginTop: '48px'},
})

const ProductDetailImage = styled.img({
  backgroundColor:'#fff',
  borderRadius: '24px',
  height: '600px',
  marginBottom: '64px',
  objectFit: 'cover',
  width: '450px'
})

const QRCodeImage = styled.img({
  bottom:'64px',
  height: '300px',
  left: 'calc(50% - 150px);',
  objectFit: 'cover',
  position: 'absolute',
  width: '300px'
})

const QRCodeDescription = styled.div({
  bottom:'348px',
  left: 'calc(50% - 140px);',
  position: 'absolute',
  width: '280px',
  ['& p']: {lineHeight: '36px'}
})