const BeginPage = () => {
  const {beginTextJost, beginText, beginButton} = pageTexts

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

  const beginTextPage = transformString(beginTextJost);
  const beginDescriptionTextPage = transformString(beginText);
  
  return <BeginWrapper onClick={() => dataContent.setContent('chooseSkinType')}>
    <Flex>
      <BeginTextWrapper>
        <Text align="center" weight="200">
          {beginTextPage}
        </Text>
        <Text align="center" weight="200" alternateFamily>
            {beginDescriptionTextPage}
          <SpanBegin>
            ✨
          </SpanBegin>
        </Text>
        <Flex>
          <ButtonInvisible onClick={() => dataContent.setContent('chooseSkinType')}>
            <Text align="center" size="3rem" weight="200" fontStyle="italic">{beginButton}</Text>
          </ButtonInvisible>
        </Flex>
      </BeginTextWrapper>
    </Flex>
  </BeginWrapper>
}