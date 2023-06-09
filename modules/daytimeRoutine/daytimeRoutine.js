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
      <AnchorTag>
        <Flex>
          <Text align="center" size="1.6rem" weight="800">{ROUTINES_TITLES.limpeza.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_DATA[dayRoutineType].daytime.limpeza.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.limpeza.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].daytime.limpeza.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].daytime.limpeza.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription>
        <Flex>
          <Text align="center" size="1.6rem" weight="800">{ROUTINES_TITLES.tonico.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_DATA[dayRoutineType].daytime.tonico.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.tonico.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].daytime.tonico.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].daytime.tonico.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
      <AnchorTag largeDescription>
        <Flex>
          <Text align="center" size="1.6rem" weight="800">{ROUTINES_TITLES.hidratacao.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_DATA[dayRoutineType].daytime.hidratacao.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.hidratacao.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].daytime.hidratacao.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].daytime.hidratacao.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
      <AnchorTag>
        <Flex>
          <Text align="center" size="1.6rem" weight="800">{ROUTINES_TITLES.protetor.title}</Text>
          <Text align="center" size="1.4rem" weight="200">{ROUTINES_DATA[dayRoutineType].daytime.protetor.description}</Text>
          <ProductImage src={ROUTINES_DATA[dayRoutineType].daytime.protetor.src} />
          <NameDaytimeRoutineText break={ROUTINES_DATA[dayRoutineType].daytime.protetor.breakname}>
            <Text align="center" size="1.4rem" weight="800">{ROUTINES_DATA[dayRoutineType].daytime.protetor.name}</Text>
          </NameDaytimeRoutineText>
        </Flex>
      </AnchorTag>
    </DaytimeRoutineWrapper>
    
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