function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === ""){
        error.email = "Name should not be emply"
    }else if(!email_pattern.test(values.email)){
        error.email = "Email doesn't match"
    }else{
        error.email = ""
    }
    

    if (values.Password === ""){
        error.Password = "Password should not be emply"
    }else if(!password_pattern.test(values.email)){
        error.password = "Password doesn't match"
    }else{
        error.password = ""
    }
    return error;
}