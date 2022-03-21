document.addEventListener("DOMContentLoaded", (e) => {    
    
    function jsonValueKey(json, key) {
        fetch(json)
            .then(response => response.json())
            .then(data => {
                return console.log(data[key])
            });
    }
    
    jsonValueKey("text.json","lastname");
    
})