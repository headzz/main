const Test = () => {
  const [data, useData] = React.useState(false)
  console.log('running', String(data))
  return <div onClick={() => {useData(true)}}>{data}</div>
}