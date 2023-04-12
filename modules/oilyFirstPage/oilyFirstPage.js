const OilyFirstPage = () => {
  
  const {oily_title, first_page_description_text} = pageTexts

  const dataContent = React.useContext(ContentContext);

  const transformString = (textValue) => {
    if(textValue.includes('<br/>')){
        const stringDecomposed = textValue.split('<br/>')
        
        const dataNeeded = stringDecomposed.map((item, index) => {
            if(index === stringDecomposed.length -1){
                return <span key={`${item}-${index}`}>{item}<br/></span>
            }

            return <span key={`${item}-${index}`}>{item}</span>
        })
        return dataNeeded
    }

    return textValue
  }

  const oilyTitleTextPage = transformString(oily_title);
  const firstPageDescriptionGlobal = transformString(first_page_description_text)

  return <Wrapper>
    <Flex>
      <StyleOilyContentText>
        <Text align="center" weight="200">{oilyTitleTextPage}</Text>
      </StyleOilyContentText>

      <StyleDryContentDescription>
        <Text align="center" weight="200" size="3.6rem">{firstPageDescriptionGlobal}</Text>
      </StyleDryContentDescription>
    </Flex>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseSkinType'); dataContent.setSteps('')}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('createRoutine'); dataContent.setSteps('oily_create')}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}
