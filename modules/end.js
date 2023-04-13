const EndPage = () => {
  const {end_title, end_description} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <EndWrapper>
    <Flex>
      <EndTextWrapper>
        <Text align="center" weight="200">
          {end_description}
        </Text>
      </EndTextWrapper>
    </Flex>
    <BackPagePosition>
      <ButtonInvisible onClick={() => dataContent.setContent(STEPS[dataContent.steps].end)}>
        <Text size="2.8rem" weight="400">{'<'}</Text>
      </ButtonInvisible>
    </BackPagePosition>
    <NextPagePosition>
      <ButtonInvisible onClick={() => {dataContent.setContent('chooseSkinType'); dataContent.setSteps('')}}>
        <Text size="2.8rem" weight="400">{'INÍCIO >'}</Text>
      </ButtonInvisible>
    </NextPagePosition>
  </EndWrapper>
}