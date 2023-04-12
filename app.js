function App() {
  const dataContent = React.useContext(ContentContext);

  const pages = {
    begin: <BeginPage />,
    chooseSkinType: <ChooseSkinType />,
    // createRoutine: <CreateRoutine />,
    // chooseRoutine: <ChooseRoutine />,
    // combinationFirstPage: <CombinationFirstPage />,
    // daytimeRoutine: <DaytimeRoutine />,
    // nightRoutine: <NightRoutine />,
    // endFlow: <EndPage />,
    // middleContent: <MiddleContent />,
    // dryFirstPage: <DryFirstPage />,
    // normalFirstPage: <NormalFirstPage />,
    // productDetailPage: <ProductDetailPage />
  }

  return (
    <>{pages[dataContent.content]}</>
  )
}

export default App
