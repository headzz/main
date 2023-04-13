const useChangeContent = () => {
  const [content, setContent] = React.useState('chooseSkinType')
  const [steps, setSteps] = React.useState('')
  const [product, setProduct] = React.useState('')
  return {content, setContent, steps, setSteps, product, setProduct}
}