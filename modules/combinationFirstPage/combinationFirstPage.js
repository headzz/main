const CombinationFirstPage = () => {
  const {combination_first_page_jost_text, first_page_description_text} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleCombinationFirstPageText>
        <Text align="center" weight="200">{combination_first_page_jost_text}</Text>
      </StyleCombinationFirstPageText>
      <StyleCombinationFirstPageDescription>
        <Text align="center" size="3.6rem" weight="200">{first_page_description_text}</Text>
      </StyleCombinationFirstPageDescription>
    </Flex>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseSkinType'); dataContent.setSteps('')}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('createRoutine'); dataContent.setSteps('combination_create')}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}