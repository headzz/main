const NightRoutine = () => {
  const {night_routine} = pageTexts

  const dataContent = React.useContext(ContentContext);

  const nightRoutineType = STEPS[dataContent.steps].routine

  return <Wrapper>
    <Flex>
      <TitleNightRoutineText>
        <Text align="center" weight="200" alternateFamily>{night_routine}</Text>
      </TitleNightRoutineText>  
    </Flex>

    <NightRoutineWrapper>
      <AnchorTag onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[nightRoutineType].night.limpeza.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.limpeza.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.limpeza.description}</Text>
          <ProductImage src={ROUTINES_DATA[nightRoutineType].night.limpeza.src} />
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[nightRoutineType].night.tonico.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.tonico.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.tonico.description}</Text>
          <ProductImage src={ROUTINES_DATA[nightRoutineType].night.tonico.src} />
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[nightRoutineType].night.hidratacao.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.hidratacao.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.hidratacao.description}</Text>
          <ProductImage src={ROUTINES_DATA[nightRoutineType].night.hidratacao.src} />
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[nightRoutineType].night.protetor.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.antiidade.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.antiidade.description}</Text>
          <ProductImage src={ROUTINES_DATA[nightRoutineType].night.protetor.src} />
        </Flex>
      </AnchorTag>
    </NightRoutineWrapper>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseRoutine'); dataContent.setSteps(STEPS[dataContent.steps].previous)}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>

    <NextPagePosition>
      <ButtonInvisible onClick={() => dataContent.setContent('endFlow')}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}