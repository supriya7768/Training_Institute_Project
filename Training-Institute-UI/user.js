         //========registration.html==========

async function register() {
    const name = $('#fn').val();
    const dob = $('#dob').val();
    const email = $('#em').val();
    const mobile = $('#mb').val();
    const gender = $('#gen').val();
    const address = $('#add').val();
    const education = $('#edu').val();
    const yearOfPassing = $('#yp').val();
    const experience = $('#ep').val();
    const course = $('#cr').val();
    const fees = $('#fee').val();
    const demo = $('#demo').val();

        const url = 'http://localhost:8080/save';
        const result = await fetch(url, {method:'POST', body: JSON.stringify({
            name: name,
            dob: dob,
            email: email,
            mobile: mobile,
            gender: gender,
            address: address,
            education: education,
            yearOfPassing: yearOfPassing,
            experience: experience,
            course: course,
            fees: fees,
            demo: demo
    
        }), headers: {"Content-Type": "application/json" } });
    
        const finalData = await result.json();

         if (finalData.email != null || finalData.mobile != null) {
            $('#dt').html(finalData.name  + " is registered");        
         } else {
             $('#dt').html("Error:- Your email is already in use. Please use new email"); 
         }
    } 

//============================================================================================
                                //======index.html========

async function demo() {
    const name = $('#name').val();
    const email = $('#email').val();
    const mobile = $('#mob').val();
    const course = $('#cname').val();
    const comment = $('#message').val();
 
        const url = 'http://localhost:8080/save-demo';
        const result = await fetch(url, {method:'POST', body: JSON.stringify({
            name: name,
            email: email,
            mobile: mobile,
            course: course,
            comment: comment
    
        }), headers: {"Content-Type": "application/json" } });
    
        const finalData = await result.json();

        if (finalData.email != null || finalData.mobile != null) {
       $('#dt').html(finalData.name  + " your demo session is book");
    } else {
             $('#dt').html("You demo session is already book"); 
         }      
    }

//======================================================================================
                            //=======index.html========

function signup() {
    const email = document.getElementById('em').value;

    fetch('http://localhost:8080/checkRegistration?email=' + email)
    .then(response => {
        if (response.ok) {
            // window.location.href = 'signin.html'; 
            window.open('./signin.html', '_blank');
        } else {
            alert('You are not registered.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//=========================================================================================== 
                    //======signin.html=======

    document.addEventListener('DOMContentLoaded', () => {
        const signupForm = document.getElementById('signup-form');
        const messageElement = document.getElementById('message');
    
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
    
            if (password !== confirmPassword) {
                messageElement.textContent = 'Passwords do not match.';
                return;
            }
    
            const url = 'http://localhost:8080/save-sign';
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        confirmPassword
                    })
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    messageElement.textContent = `Hello ${data.name}, your account is created`;
                } else {
                    messageElement.textContent = `Error: ${data.message}`;
                }
            } catch (error) {
                console.error(error);
                messageElement.textContent = 'An error occurred while processing your request.';
            }
        });
    });
    


//========================================================================================
                            //======login.html=======

async function loginAdmin() {
    const email = $("#inp-email").val();
    const password = $("#inp-password").val();
  
    // Validate the input (you can add more validation as needed)
    if (!email || !password) {
      $("#reg-response").text("Email and password are required.");
      return;
    }
  
    // Replace this URL with the actual URL of your new page
    // const redirectUrl = "profile.html";
  
    try {
      const response = await fetch("http://localhost:8080/login?email="+ email + "&password="+ password, {
        method: "POST", // Assuming you want to use POST for authentication
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        // Authentication successful, redirect to the new page
        // window.location.href = redirectUrl;
        window.open('./admin-login/createBatch.html', '_blank');
      } else if (response.status === 401) {
        // Authentication failed, display an error message
        $("#reg-response").text("Incorrect email or password.");
      } else {
        $("#reg-response").text("An error occurred while checking the email.");
      }
    } catch (error) {
      $("#reg-response").text("An error occurred:", error);
    }
  }


  async function loginStudent() {
    const email = $("#inp-email").val();
    const password = $("#inp-password").val();
  
    // Validate the input (you can add more validation as needed)
    if (!email || !password) {
      $("#reg-response").text("Email and password are required.");
      return;
    }
  
    // Replace this URL with the actual URL of your new page
    // const redirectUrl = "profile.html";
  
    try {
      const response = await fetch("http://localhost:8080/login?email="+ email + "&password="+ password, {
        method: "POST", // Assuming you want to use POST for authentication
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        // Authentication successful, redirect to the new page
        // window.location.href = redirectUrl;
        window.open('./admin-login/createBatch.html', '_blank');
      } else if (response.status === 401) {
        // Authentication failed, display an error message
        $("#reg-response").text("Incorrect email or password.");
      } else {
        $("#reg-response").text("An error occurred while checking the email.");
      }
    } catch (error) {
      $("#reg-response").text("An error occurred:", error);
    }
  }


  async function loginMentor() {
    const email = $("#inp-email").val();
    const password = $("#inp-password").val();
  
    // Validate the input (you can add more validation as needed)
    if (!email || !password) {
      $("#reg-response").text("Email and password are required.");
      return;
    }
  
    // Replace this URL with the actual URL of your new page
    // const redirectUrl = "profile.html";
  
    try {
      const response = await fetch("http://localhost:8080/login?email="+ email + "&password="+ password, {
        method: "POST", // Assuming you want to use POST for authentication
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        // Authentication successful, redirect to the new page
        // window.location.href = redirectUrl;
        window.open('./mentor-login/attendence.html', '_blank');
      } else if (response.status === 401) {
        // Authentication failed, display an error message
        $("#reg-response").text("Incorrect email or password.");
      } else {
        $("#reg-response").text("An error occurred while checking the email.");
      }
    } catch (error) {
      $("#reg-response").text("An error occurred:", error);
    }
  }

  //===================================================================================
 



  async function login() {
    const email = $("#inp-email").val();
    const password = $("#inp-password").val();
  
    // Validate the input (you can add more validation as needed)
    if (!email || !password) {
      $("#reg-response").text("Email and password are required.");
      return;
    }
  
    // Replace this URL with the actual URL of your new page
    // const redirectUrl = "profile.html";
  
    try {
      const response = await fetch("http://localhost:8080/login?email="+ email + "&password="+ password, {
        method: "POST", // Assuming you want to use POST for authentication
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        // Authentication successful, redirect to the new page
        // window.location.href = redirectUrl;
        const data  = await respose.jso();
        if (data.role === 'studet') {
          window.open('./studet-login/attendence.html', '_blank');
        } else if (data.role === 'metor') {
          window.open('./mentor-login/attendence.html', '_blank');
        } else if (data === 'admin'){
          window.open('./admin-login/attendence.html', '_blank');
        }
      } else if (response.status === 401) {
        // Authentication failed, display an error message
        $("#reg-response").text("Incorrect email or password.");
      } else {
        $("#reg-response").text("An error occurred while checking the email.");
      }
    } catch (error) {
      $("#reg-response").text("An error occurred:", error);
    }
  }