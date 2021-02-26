var link = ""


function open_instagram() {
    document.getElementById('webapp-container').innerHTML = '                <webview id="webapp" \n' +
        '                         src="error/unavailable.html" userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36" id="webapp"' +
        '                         style="/* border-style: none; */\n' +
        '                                margin-top: -25px;\n' +
        '                                width: 1500px;\n' +
        '                                height: 681px;\n' +
        '                                /* border: none; \n' +
        '                                *//* margin: 0; */\n' +
        '                                /* padding: 0; */\n' +
        '                                margin-left: -24px;' +
        '">\n' +
        '                </webview>';
}

function open_twitter() {
    document.getElementById('webapp-container').innerHTML = '                <webview id="webapp" \n' +
        '                         src="error/unavailable.html" userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36" id="webapp"' +
        '                         style="/* border-style: none; */\n' +
        '                                margin-top: -25px;\n' +
        '                                width: 1500px;\n' +
        '                                height: 681px;\n' +
        '                                /* border: none; \n' +
        '                                *//* margin: 0; */\n' +
        '                                /* padding: 0; */\n' +
        '                                margin-left: -24px;' +
        '">\n' +
        '                </webview>'
}

function open_link(link) {
    document.getElementById('webapp-container').innerHTML = '                <webview id="webapp" \n' +
        '                         src=' + link +
        '                         style="/* border-style: none; */\n' +
        '                                margin-top: -25px;\n' +
        '                                width: 1500px;\n' +
        '                                height: 681px;\n' +
        '                                /* border: none; \n' +
        '                                *//* margin: 0; */\n' +
        '                                /* padding: 0; */\n' +
        '                                margin-left: -24px;' +
        '">\n' +
        '                </webview>';
}

function open_whatsapp(link) {

    document.getElementById('webapp-container').innerHTML = '                <webview ' +
        'userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36" id="webapp" \n' +
        '                         src="https://web.whatsapp.com"' +
        '                         style="/* border-style: none; */\n' +
        '                                margin-top: -25px;\n' +
        '                                width: 1500px;\n' +
        '                                height: 681px;\n' +
        '                                /* border: none; \n' +
        '                                *//* margin: 0; */\n' +
        '                                /* padding: 0; */\n' +
        '                                margin-left: -24px;">\n' +
        '                </webview>';
}
