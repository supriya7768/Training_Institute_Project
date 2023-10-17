const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


async function createBatch() {
    const batchName = $('#batchname').val();
    const startDate = $('#sdate').val();
    const endDate = $('#edate').val();
    const trainer1 = $('#t1').val();
    const trainer2 = $('#t2').val();
    const studentCount = $('#scount').val();
    const testing = $('#test').val();
    const fullstack = $('#full').val();
 
        const url = 'http://localhost:8080/create-batch ';
        const result = await fetch(url, {method:'POST', body: JSON.stringify({
            batchName:batchName,
            startDate:startDate,
            endDate:endDate,
            trainer1:trainer1,
            trainer2:trainer2,
            studentCount: studentCount,
            testing:testing,
            fullstack:fullstack
    
        }), headers: {"Content-Type": "application/json" } });
    
        const finalData = await result.json();

       $('#dt').html( "Created " + finalData.batchName  + " batch");
           
       
       document.addEventListener("DOMContentLoaded", function() {
           console.log("JavaScript code is executing.");
        fetch('http://localhost:8080/get-batchname')
            .then(response => response.json())
            .then(data => {
                const batchButtonsDiv = document.getElementById("batchButtons");
                data.forEach(batchName => {
                    const batchButton = document.createElement("button");
                    batchButton.textContent = batchName;
                    batchButton.onclick = function() {
                        // Handle button click (e.g., navigate to a specific batch page)
                    };
                    batchButtonsDiv.appendChild(batchButton);
                });
            });
    });
    
    }


    async function assignMentor() {
        const mentorName = $('#mName').val();
        const email = $('#email').val();
        const mobile = $('#mb').val();
        const startDate = $('#sDate').val();
        const time = $('#time').val();
        const mentorBatch = $('#mbatch').val();
        const student = $('#student').val();
        const batch = $('#sbatch').val();
        const mode = $('#mode').val();
     
            const url = 'http://localhost:8080/assign-mentor ';
            const result = await fetch(url, {method:'POST', body: JSON.stringify({
               mentorName: mentorName,
               email: email,
               mobile: mobile,
               startDate: startDate,
               time: time,
               mentorBatch: mentorBatch,
               student: student,
               batch: batch,
               mode: mode
        
            }), headers: {"Content-Type": "application/json" } });
        
            const finalData = await result.json();
    
           $('#dt').html( finalData.mentorName  + " has been assigned as mentor");
             
          
        }

        // async function createBatch() {
        //     const batchName = $('#batchname').val();
        //     const startDate = $('#sdate').val();
        //     const endDate = $('#edate').val();
        //     const trainer1 = $('#t1').val();
        //     const trainer2 = $('#t2').val();
        //     const studentCount = $('#scount').val();
        //     const testing = $('#test').val();
        //     const fullstack = $('#full').val();
        
        //     const url = 'http://localhost:8080/create-batch';
        //     try {
        //         const result = await fetch(url, {
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 batchName: batchName,
        //                 startDate: startDate,
        //                 endDate: endDate,
        //                 trainer1: trainer1,
        //                 trainer2: trainer2,
        //                 studentCount: studentCount,
        //                 testing: testing,
        //                 fullstack: fullstack
        //             }),
        //             headers: { "Content-Type": "application/json" }
        //         });
        
        //         if (result.ok) {
        //             const finalData = await result.json();
        //             $('#dt').html("Created " + finalData.batchName + " batch");
                    
        //             // Clear input fields
        //             $('#batchname').val('');
        //             $('#sdate').val('');
        //             $('#edate').val('');
        //             $('#t1').val('');
        //             $('#t2').val('');
        //             $('#scount').val('');
        //             $('#test').val('');
        //             $('#full').val('');
                    
        //             // Fetch batch names and create buttons
        //             fetch('http://localhost:8080/get-batchname')
        //             .then(response => response.json())
        //             .then(data => {
        //                 const batchButtonsDiv = $('#batchButtons'); // Use jQuery
        //                 batchButtonsDiv.empty(); // Clear existing buttons
        
        //                 data.forEach(batchName => {
        //                     const batchButton = $('<button>', {
        //                         text: batchName,
        //                         click: function() {
        //                             // Handle button click (e.g., navigate to a specific batch page)
        //                         }
        //                     });
        //                     batchButtonsDiv.append(batchButton);
        //                 });
        //             });
        //         } else {
        //             console.error('Batch creation failed');
        //         }
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // }
        


       