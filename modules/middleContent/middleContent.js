const MiddleContent = () => {
  

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleMiddleContentText>
        <Text align="center" weight="200">AINDA BEM QUE <br/>A {' '}
        <ChangeTextFontFamily>BLZ</ChangeTextFontFamily> TEM AS MELHORES MARCAS 
        PARA COMBINAR E <ChangeTextFontFamily>CRIAR A ROTINA 
          PERFEITA PARA VOCÊ</ChangeTextFontFamily> TER 
          UMA PELE CADA VEZ MELHOR. </Text>
      </StyleMiddleContentText>
    </Flex>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent(STEPS[dataContent.steps].previous)}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('createRoutine'); dataContent.setSteps(STEPS[dataContent.steps].next)}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}