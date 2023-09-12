async function register() {
    const fullName = $('#fn').val();
    const email = $('#em').val();
    const mobile = $('#mb').val();
    const password = $('#pwd').val();
    const repassword = $('#rpwd').val();
    
    if (password === repassword) {
        const url = 'http://localhost:8080/save';
        const result = await fetch(url, {method:'POST', body: JSON.stringify({
            name: fullName,
            email: email,
            mobile: mobile,
            password: password
    
        }), headers: {"Content-Type": "application/json" } });
    
        const finalData = await result.json();

        if (finalData.name != null) {
            $('#dt').html("Hello "  + finalData.name  + " REGISTERED.....");        
        } else {
            
            $('#dt').html("Error:- Your email is already in use. Please use new email"); 
        }
    } else {
        $('#dt').html("Error:- Please cofirm your password");
    }


}
