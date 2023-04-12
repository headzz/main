const transformString = (textValue) => {
    if(textValue.includes('<br/>')){
        const stringDecomposed = textValue.split('<br/>')
        
        const dataNeeded = stringDecomposed.map((item, index) => {
            if(index === stringDecomposed.length -1){
                return <>{item}<br/></>
            }

            return <>{item}</>
        })
        return dataNeeded
    }

    return textValue
} 