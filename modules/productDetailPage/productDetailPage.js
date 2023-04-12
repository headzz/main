const ProductDetailPage = () => {
  const dataContent = React.useContext(ContentContext);

  const subdescription = PRODUCT_DATA[dataContent.product].subdescription

  PRODUCT_DATA
  return <Wrapper>
    <ProductDetailFlex>
      <Text align="center">{PRODUCT_DATA[dataContent.product].title}</Text>
      <ProductDetailImage src={PRODUCT_DATA[dataContent.product].image} />
      <Text align="center" size="2.4rem" weight="200">{PRODUCT_DATA[dataContent.product].description}</Text>
      {subdescription && <Text align="center" size="2.4rem" weight="200">{subdescription}</Text>}
    </ProductDetailFlex>
    <QRCodeDescription><Text align="center" size="2rem" weight="200">SAIBA MAIS SOBRE O PRODUTO</Text></QRCodeDescription>
    <QRCodeImage src={PRODUCT_DATA[dataContent.product].qrcode}/>
    <BackPagePosition>
      <ButtonInvisible onClick={() => dataContent.setContent(STEPS[dataContent.steps].end)}>
        <Text size="2.8rem" weight="400">{'< VOLTAR '}</Text>
      </ButtonInvisible>
    </BackPagePosition>
  </Wrapper>
}