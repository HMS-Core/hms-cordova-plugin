function sendBarrierInfoToRemoteServer(barrierInfo){
    const url = "https://endpoint.endpoint";
    const options = {
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        body: barrierInfo,
        method: "POST"
    };
    fetch(url, options).then(data => {return data.json()}).then(res => console.log(res)).catch(error => console.log(error));
}

addBarrierListener('ScreenBarrierKeeping', (barrierInfo) => {
    console.log(JSON.stringify(barrierInfo));
    sendBarrierInfoToRemoteServer(barrierInfo);
});

addBarrierListener('headsetBarrierKeeping', (barrierInfo) => {
    console.log(JSON.stringify(barrierInfo));
});

