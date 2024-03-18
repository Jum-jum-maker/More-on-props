
const Textvalidation = (props)=>{
    let textmessage = ""
    if( props.inputLength<=5){
        textmessage = `Text too short`
    }else if(props.inputLength >5){
        textmessage= `Text too long`   
    }

    return(
        <>
        <h1>Hello user,{textmessage} </h1>
        </>
    )
}

export default Textvalidation;