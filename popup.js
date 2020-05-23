document.querySelector("#switcher-search").addEventListener(
    "keyup",
    function(event){
        let enter = 13;
        if (event.keyCode == enter){
            event.preventDefault();
            
            console.log("SWITCHER: ", event);
            let text = event.target.value;
            make_switch(text);
        }
    }
)