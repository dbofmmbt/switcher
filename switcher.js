function make_switch(text){
    chrome.tabs.query(
        {},
        function(tabs){
            let matched_tab = find_match(tabs, text);
            if (matched_tab != null){
                chrome.tabs.update(matched_tab.id, { active: true })
            }
        }
    );
}

/*
Given an array of Tab and a String, returns the first matching tab
or returns null, if no tab matches the string.
*/
function find_match(tabs, text){
    for (var i = 0; i < tabs.length; i++){
        let tab = tabs[i];
        if (check_match(tab, text)){
            return tab;
        }
    }
    return null;
}

function check_match(tab, text){
    text = text.toLowerCase();
    let url = tab.url.toLowerCase();
    let title = tab.title.toLowerCase();   
    return url.includes(text) || title.includes(text);
}