const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/

document.getElementById('register').addEventListener ('click', function (event) {
    event.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email-add').value
    const password = document.getElementById('password').value // 1-8
    const confirm = document.getElementById('confirm').value


    if (password.length >= 6 && password.length <= 15) {
        document.getElementById('usernameError').innerHTML = 'Password is not valid'
        console.log(password.length)
        console.log('You have successfully registered')
    } else {
        console.log('Password must be contain at least 6 digits')
    }
    if (email.match(mailformat)) {
       console.log ('Email adress is valid')

   }else  {
      console.log(' email address is not valid')
   }
  
}
)


