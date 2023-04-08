export const Test = () => {
  const [data, useData] = React.useState(false)
  return <div onClick={() => {useData(true)}}>{data}</div>
}