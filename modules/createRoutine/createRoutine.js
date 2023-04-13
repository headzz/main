const CreateRoutine = () => {
  const {create_routine} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleCreateRoutineText>
        <Text align="center" weight="200">VAMOS CRIAR O SEU RITUAL DE <StyleRoutineSpanChangeFont>SKINCARE DIÁRIO?</StyleRoutineSpanChangeFont></Text>
        <Text align="center" weight="200">{create_routine}</Text>
      </StyleCreateRoutineText>  
    </Flex>
    <FlexStyleRoutine>
        <PrimaryButton padding="32px" onClick={()=>{dataContent.setContent("chooseRoutine"); dataContent.setSteps(STEPS[dataContent.steps].next)}}>
          <Text size="3rem" fontStyle="italic">VEM VER! 👀</Text>
        </PrimaryButton>
    </FlexStyleRoutine>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent(STEPS[dataContent.steps].middleBack); dataContent.setSteps(STEPS[dataContent.steps].previous)}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
  </Wrapper>
}