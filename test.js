const Test = () => {
  const [data, useData] = React.useState(false)
  console.log('running 2', String(data))
  return <div onClick={() => {useData(true)}}>{data}</div>
}