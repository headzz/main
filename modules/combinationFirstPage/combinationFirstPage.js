const CombinationFirstPage = () => {
  const {combination_first_page_jost_text, first_page_description_text} = pageTexts

  const dataContent = React.useContext(ContentContext);

  const transformString = (textValue) => {
    if(textValue.includes('<br/>')){
        const stringDecomposed = textValue.split('<br/>')
        
        const dataNeeded = stringDecomposed.map((item, index) => {
            if(index === stringDecomposed.length -1){
                return <>{item}<br/></>
            }

            return <>{item}</>
        })
        return dataNeeded
    }

    return textValue
} 

  const combinationTitleTextPage = transformString(combination_first_page_jost_text);
  const firstPageDescriptionGlobal = transformString(first_page_description_text)
  return <Wrapper>
    <Flex>
      <StyleCombinationFirstPageText>
        <Text align="center" weight="200">{combinationTitleTextPage}</Text>
      </StyleCombinationFirstPageText>
      <StyleCombinationFirstPageDescription>
        <Text align="center" size="3.6rem" weight="200">{firstPageDescriptionGlobal}</Text>
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