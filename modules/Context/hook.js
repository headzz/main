const useChangeContent = () => {
  const [content, setContent] = React.useState('begin')
  const [steps, setSteps] = React.useState('')
  const [product, setProduct] = React.useState('')
  return {content, setContent, steps, setSteps, product, setProduct}
}