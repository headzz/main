const BeginWrapper = styled.section({
  backgroundImage: "url('src/images/BLZ_QUIZ_IMAGENS_INICIO.png')",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  maxWidth: '1920px'
})

const BeginTextWrapper = styled.div({
  position: 'relative',
  marginTop: '10%',
  width: '55%',
  ['& div']: {marginTop: '48px', width: '100%'},
  ['& > p span::after']: {content: '✨'},
})

const SpanBegin = styled.div({
  bottom: '150px',
    left: '93%',
    position: 'absolute',
    fontSize: '3rem'
})

const EndTextWrapper = styled.div({
  marginTop: '20%',
  width: '80%',
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