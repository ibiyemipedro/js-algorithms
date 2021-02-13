function SimplePassword(str) {
    const expression = /^(?=.*\d)(?=.*[@$!%*#?,=.&])(?=.*[A-Z]).{7,31}$/;
    if (str === 'password' || !str.match(expression)) {      
        console.log(false)
    } else {
        console.log(true)
    }

}

SimplePassword('turkey90AAA=');