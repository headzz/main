const BeginPage = () => {
  const {beginTextJost, beginText, beginButton} = pageTexts

  const dataContent = React.useContext(ContentContext);

  return <BeginWrapper>
    <Flex>
      <BeginTextWrapper>
        <Text align="center" weight="200">
          {beginTextJost}
        </Text>
        <Text align="center" weight="200" alternateFamily>
          {beginText}
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