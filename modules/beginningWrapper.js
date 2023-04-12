const BeginWrapper = styled.section({
  backgroundImage: "url('./images/BLZ_QUIZ_IMAGENS_INICIO.png')",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  maxWidth: '1920px'
})

const BeginTextWrapper = styled.div({
  position: 'relative',
  marginTop: '6%',
  width: '55%',
  ['& div']: {marginTop: '36px', width: '100%'},})

const EndTextWrapper = styled.div({
  marginTop: '20%',
  width: '80%',
  ['& p:nth-child(2)']: {marginTop: '48px', width: '100%'},
})

const EndWrapper = styled.section({
  backgroundImage: "url('./images/BLZ_QUIZ_IMAGENS_FIM.png')",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  maxWidth: '1920px'
})