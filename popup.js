let button = document.querySelector('#button');

button.onclick = function () {
    var newURL = ["http://www.youtube.com/watch?v=oHg5SJYRHA0",
        "https://mail.google.com/mail/u/1/#inbox", "https://nmhschool.okta.com/app/UserHome", "https://nmhschool.instructure.com/?login_success=1", "https://docs.google.com/spreadsheets/d/19tFRp6nWM7SQnnxH67TOVRnb1NT45WlroTSeNfWClEo/edit?ts=5e7b938c#gid=0"];

    for (let i = 0; i < newURL.length; i++) {
        chrome.tabs.create({ url: newURL[i] });
    }
};
