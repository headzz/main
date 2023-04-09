const Test = () => {
  const [data, useData] = React.useState(false)
  console.log('running 2', String(data), data.toString())
  return <div onClick={() => {useData(true)}}>{`${data}`}</div>
}