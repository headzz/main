const ChooseRoutine = () => {
  const {routine_description} = pageTexts

  const dataContent = React.useContext(ContentContext);

  console.log(STEPS[dataContent.steps])
  return <Wrapper>
    <Flex>
      <StyleChooseRoutineText>
        <Text align="center" weight="200">{routine_description}</Text>
      </StyleChooseRoutineText>  
    </Flex>
    <ChooseRoutineButtons>
        <SecondaryButton padding="32px" onClick={()=>{dataContent.setContent("daytimeRoutine"); dataContent.setSteps(STEPS[dataContent.steps].daytime)}}>
          <Text size="3rem" fontStyle="italic">ROTINA DIURNA 🌞</Text>
        </SecondaryButton>

        <SecondaryButton padding="32px" onClick={()=>{dataContent.setContent("nightRoutine"); dataContent.setSteps(STEPS[dataContent.steps].night)}}>
          <Text size="3rem" fontStyle="italic">ROTINA NOTURNA 🌙</Text>
        </SecondaryButton>
    </ChooseRoutineButtons>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('createRoutine'); dataContent.setSteps(STEPS[dataContent.steps].previous)}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
  </Wrapper>
}