const errorMsg = (msg,status)=>{
    const err = new Error()
    err.message = msg
    const status = status
    // return {err.message, status}
}