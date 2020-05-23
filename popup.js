document.querySelector("#switcher-search").addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            event.preventDefault();

            let text = event.target.value;
            make_switch(text);
        }
    }
)