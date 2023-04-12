const ContentContext = React.createContext();

const ContentContextProvider = ({children}) => {
  const contentHook = useChangeContent()

  const contentValue = React.useMemo(
    () => ( {content: contentHook.content, setContent: contentHook.setContent, 
      steps: contentHook.steps, setSteps: contentHook.setSteps,
      product: contentHook.product, setProduct: contentHook.setProduct } ),
    [contentHook.content, contentHook.setContent, contentHook.steps, contentHook.setSteps, contentHook.product,contentHook.setProduct]
  );

  return <ContentContext.Provider value={contentValue}>{children}</ContentContext.Provider>;
}