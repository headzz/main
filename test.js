const Test = () => {
  const [data, useData] = React.useState(false)
  console.log('running')
  return <div onClick={() => {useData(true)}}>{data}</div>
}