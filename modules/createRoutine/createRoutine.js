const CreateRoutine = () => {
  const {create_routine_jost} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleRoutineText>
        <Text align="center" weight="200">{create_routine_jost}</Text>
        <Text align="center" weight="200">VAMOS CRIAR O SEU RITUAL DE <StyleRoutineSpanChangeFont>SKINCARE DIÁRIO?</StyleRoutineSpanChangeFont></Text>
      </StyleRoutineText>  
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