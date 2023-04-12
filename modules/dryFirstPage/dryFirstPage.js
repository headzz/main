const DryFirstPage = () => {
  
  const { dry_skin_jost, first_page_description_text } = pageTexts

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

  const drySkinTitlePAge = transformString(dry_skin_jost);

  return <Wrapper>
    <Flex>
      <StyleDryContentText>
        <Text align="center" weight="200">{drySkinTitlePAge}</Text>
      </StyleDryContentText>
      <StyleDryContentDescription>
        <Text align="center" size="3.6rem" weight="200">{firstPageDescriptionGlobal}</Text>
      </StyleDryContentDescription>
    </Flex>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseSkinType'); dataContent.setSteps('')}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('createRoutine'); dataContent.setSteps('dry_create')}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}