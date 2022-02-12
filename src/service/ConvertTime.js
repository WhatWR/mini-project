const ConvertTime = (sec) => {
  const min = Math.floor(sec /60);
  const newSec = Math.round(sec - min * 60)
  return `${min} min: ${newSec} sec`
}
export default ConvertTime
