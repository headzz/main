const DryFirstPage = () => {
  
  const {dry_skin_jost, dry_skin_alternate, dry_skin_end} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <Wrapper>
    <Flex>
      <StyleDryContentText>
        <Text align="center" weight="200">{dry_skin_jost}</Text>
        <Text align="center" weight="200" alternateFamily>{dry_skin_alternate}</Text>
        <Text align="center" weight="200">{dry_skin_end}</Text>
      </StyleDryContentText>
    </Flex>
    
    <BackPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseSkinType'); dataContent.setSteps('')}}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('middleContent'); dataContent.setSteps('dry_middle')}}>
        <Text size="2.8rem" weight="400">{'>'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </Wrapper>
}