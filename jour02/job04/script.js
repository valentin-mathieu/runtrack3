document.addEventListener("DOMContentLoaded", (e) => {
    
    let textarea = document.getElementById('keylogger');

    document.addEventListener("keypress", function(event){
        
        let key = event.key;

        textarea.value += key;
        
    })
})


