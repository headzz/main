const NormalFirstPage = () => {
  
  const {normal_title, normal_end} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleNormalContentText>
        <Text align="center" weight="200" alternateFamily>{normal_title}</Text>
        <Text align="center" weight="200" size="3.6rem">O seu rosto não apresenta excesso de brilho, poros e perfeito equilíbrio entre água e sebo: 
          nem gordura demais, nem ressecamento de menos.</Text>
        <Text align="center" weight="200" size="3.6rem">{normal_end}</Text>
      </StyleNormalContentText>
    </Flex>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseSkinType'); dataContent.setSteps('')}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('middleContent'); dataContent.setSteps('normal_middle')}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}