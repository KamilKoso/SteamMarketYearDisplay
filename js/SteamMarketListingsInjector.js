function injectScript(src) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(src);
    (document.head||document.documentElement).prepend(script);
}

setTimeout(() => {injectScript('js/OverwrittenFunction.js')}, 0);


// Currentyly this doesen't work because the script is being injected too late, TODO: Try methods listed below
// https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-using-a-content-script/9517879#9517879