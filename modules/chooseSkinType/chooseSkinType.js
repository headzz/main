const ChooseSkinType = () => {
  const { chooseSkinTypeText, chooseSkinTypeTextJost } = pageTexts

  const dataContent = React.useContext(ContentContext);
  return <Wrapper>
        <Flex>
          <ChooseSkinTypeTextWrapper>
              <Text align="center" weight="200">
                {chooseSkinTypeTextJost}
              </Text>
              <Text align="center" weight="200" alternateFamily>
                {chooseSkinTypeText}
              </Text>
          </ChooseSkinTypeTextWrapper>
        </Flex>

        <Flex>
          <ChooseSkinTypeButtonWrapper>
            <SecondaryButton padding="24px" onClick={() => {
              dataContent.setContent('normalFirstPage'); 
              dataContent.setSteps('normal_first_page')}} 
            width="100%">
              <Text fontStyle="italic" size="2.6rem" weight="400">
                EQUILIBRADA
              </Text>
            </SecondaryButton>
            
            <SecondaryButton padding="24px" onClick={() => {
              dataContent.setContent('dryFirstPage'); 
              dataContent.setSteps('dry_first_page')}} 
            width="100%">
              <Text fontStyle="italic" size="2.6rem" weight="400">SECA</Text>
            </SecondaryButton>
            
            <SecondaryButton padding="24px" onClick={() => {
              dataContent.setContent('combinationFirstPage'); 
              dataContent.setSteps('combination_choose_routine')}} 
            width="100%">
              <Text fontStyle="italic" size="2.6rem" weight="400">MISTA</Text>
            </SecondaryButton>

            <SecondaryButton padding="24px" onClick={() => {
              dataContent.setContent('middleContent'); 
              dataContent.setSteps('oily_middle')}} 
            width="100%">
              <Text fontStyle="italic" size="2.6rem" weight="400">OLEOSA</Text>
            </SecondaryButton>
          </ChooseSkinTypeButtonWrapper>
        </Flex>

        <ChooseSkinTypeGoBack>
          <ButtonInvisible onClick={() => {dataContent.setContent('begin'); dataContent.setSteps('')}}>
            <Text size="2.8rem" weight="400">{'<'}</Text>
          </ButtonInvisible>
        </ChooseSkinTypeGoBack>
  </Wrapper>
}