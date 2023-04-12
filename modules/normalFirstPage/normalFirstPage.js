const NormalFirstPage = () => {
  
  const {normal_title, first_page_description_text} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleNormalContentText>
        <Text align="center" weight="200">{normal_title}</Text>
      </StyleNormalContentText>

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
      <ButtonInvisible onClick={() => {dataContent.setContent('createRoutine'); dataContent.setSteps('normal_create')}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}
