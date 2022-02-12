const ConvertTimeDate = (temp) => {
    const date = new Date(temp)
    const hours = date.getHours() +7
    const min = date.getMinutes()
    
    return `${hours}:${min}`

}
export default ConvertTimeDate