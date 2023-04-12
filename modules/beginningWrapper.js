const BeginWrapper = styled.section({
  backgroundImage: "url('src/images/BLZ_QUIZ_IMAGENS_INICIO.png')",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  maxWidth: '1920px'
})

const BeginTextWrapper = styled.div({
  marginTop: '10%',
  width: '52%',
  ['& div']: {marginTop: '64px', width: '100%'},
})

const EndTextWrapper = styled.div({
  marginTop: '20%',
  width: '70%',
  ['& p:nth-child(2)']: {marginTop: '48px', width: '100%'},
})

const EndWrapper = styled.section({
  backgroundImage: "url('src/images/BLZ_QUIZ_IMAGENS_FIM.png')",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  maxWidth: '1920px'
})