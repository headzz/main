const OilyFirstPage = () => {
  
  const {oily_title, first_page_description_text} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleOilyContentText>
        <Text align="center" weight="200">{oily_title}</Text>
      </StyleOilyContentText>

      <StyleDryContentDescription>
        <Text align="center" weight="200" size="3.6rem">{first_page_description_text}</Text>
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
