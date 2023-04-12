const NightRoutine = () => {
  const {night_routine} = pageTexts

  const dataContent = React.useContext(ContentContext);

  const dayRoutineType = STEPS[dataContent.steps].routine

  return <Wrapper>
    <Flex>
      <TitleNightRoutineText>
        <Text align="center" weight="200" alternateFamily>{night_routine}</Text>
      </TitleNightRoutineText>  
    </Flex>

    <NightRoutineWrapper>
      <AnchorTag>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.limpeza.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.limpeza.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].night.limpeza.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].night.limpeza.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].night.limpeza.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.tonico.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.tonico.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].night.tonico.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].night.tonico.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].night.tonico.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.hidratacao.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.hidratacao.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].night.hidratacao.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].night.hidratacao.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].night.hidratacao.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription>
        <Flex>
          <Text align="center" size="1.8rem" weight="800">{ROUTINES_TITLES.antiidade.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_TITLES.antiidade.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].night.protetor.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].night.protetor.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].night.protetor.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
    </NightRoutineWrapper>
    
    <QRCodeSkinDescription><Text align="center" size="1.4rem" weight="200">SAIBA MAIS SOBRE SUA PELE <br/>EM <span>LOUCAS POR BELEZA</span></Text></QRCodeSkinDescription>
    <QRCodeSkinImage src={ROUTINES_DATA[dayRoutineType].qrCode}/>

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