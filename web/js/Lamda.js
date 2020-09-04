"use stirct";

let text;
let submitButton = document.getElementById('SendLamdaButton');
let submitText = document.getElementById('SendLamdaText');

submitButton.addEventListener("submit", getHelloText());

function getHelloText() {
    let parameter = submitText.value;
    let url = "https://dp0zte1g64.execute-api.ap-northeast-1.amazonaws.com/default/MyNodeLamda"+"?"+"text="+parameter;
    fetch(url,{
        method: 'GET',
        mode: 'no-cors'
    })
    .then(response => {
        if(response.ok){
            return response.text;
        }else{
            return Promise.reject(new Error('エラーです！'));
        }
    })
    .then(text => {
        submitText.textContent = text;
    });
}