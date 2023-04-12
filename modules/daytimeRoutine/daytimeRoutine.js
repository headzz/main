const DaytimeRoutine = () => {
  const {daytime_routine} = pageTexts

  const dataContent = React.useContext(ContentContext);

  const dayRoutineType = STEPS[dataContent.steps].routine
  
  return <Wrapper>
    <Flex>
      <TitleDaytimeRoutineText>
        <Text align="center" weight="200" alternateFamily>{daytime_routine}</Text>
      </TitleDaytimeRoutineText>  
    </Flex>

    <DaytimeRoutineWrapper>
      <AnchorTag onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[dayRoutineType].daytime.limpeza.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.limpeza.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.limpeza.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.limpeza.src} />
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[dayRoutineType].daytime.tonico.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.tonico.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.tonico.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.tonico.src} />
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[dayRoutineType].daytime.hidratacao.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.hidratacao.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.hidratacao.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.hidratacao.src} />
        </Flex>
      </AnchorTag>
      <AnchorTag onClick={() => {dataContent.setContent('productDetailPage'); dataContent.setProduct(ROUTINES_DATA[dayRoutineType].daytime.protetor.link)}}>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.protetor.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.protetor.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.protetor.src} />
        </Flex>
      </AnchorTag>
    </DaytimeRoutineWrapper>
    
    <QRCodeSkinDescription><Text align="center" size="1.4rem" weight="200">SAIBA MAIS SOBRE SUA PELE NO <span>LOUCAS POR BELEZA</span></Text></QRCodeSkinDescription>
    <QRCodeSkinImage src={'src/images/loucas-por-beleza/pele-equilibrada.svg'}/>

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