export const validateEmail = (mail) => {
    console.log(mail);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}
/* validate a password that includes 
 between 8 and 15 characters, 
 at least one uppercase letter, 
 one lowercase letter, one number, 
 and one special character */
export const validatePassword = (password) => {
    // console.log(password);
    if (/[a-z]/.test(password)) {
        console.log('lowercase');

    }
    if (/[A-Z]/.test(password)) {
        console.log('uppercase');
    }
    if (/[0-9]/.test(password)) {
        console.log('number');
    }
    // if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
    if (/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) {
        console.log('special');
    }
    if (/[a-z]/.test(password)
        && /[A-Z]/.test(password) && /[0-9]/.test(password)
        && /(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)
    ) {
        console.log('password is valid');

        return true
    }
    console.log('password is invalid');
    return false
}

