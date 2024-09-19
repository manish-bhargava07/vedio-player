const handleSpeed=document.querySelector(".handleSpeed");
const input=document.querySelector("#input");
const open=document.querySelector("#open");
const main=document.querySelector("main");
const play=document.querySelector("#playy");
const pause=document.querySelector("#pause");
const toast=document.querySelector(".toast-header");
const toastCenter=document.querySelector(".toast-center");



function showToast(message){
console.log("messsage is :" ,message);
    toast.textContent=message;
    toast.style.display="flex";

    setTimeout(()=>{
     toast.style.display="none";
    },1000)
}

const inputHandler=function (){
    input.click();

}
const handleVideo=function(obj){
    if(main.children.length>0){
        console.log(main.children.length);
        main.removeChild(main.children[0]);

console.log(main.children[0]);   }
const object=obj.target.files[0];
const link=URL.createObjectURL(object);

const video=document.createElement("video");
video.setAttribute("class","video");
main.appendChild(video);
video.src=link;

video.style.justifyContent="center";
video.style.alignItems="center";
video.pause();

}

open.addEventListener("click",inputHandler);


input.addEventListener("change",handleVideo);
play.addEventListener("click",()=>{
    const video=document.querySelector(".video");
    if(video==null){
        return
    }
    play.style.display="none";
pause.style.display="block";
showToast("video-played");
video.play();
})
pause.addEventListener("click",()=>{
pause.style.display="none";
play.style.display="block";
const video=document.querySelector(".video");
showToast("video-paused")
video.pause();

})
const volumeHandler=document.querySelector("#myNumber");
volumeHandler.addEventListener("input",(e)=>{
    const video=document.querySelector(".video");

    if(video==null){
        return
    }
    video.volume=e.target.value;

})
const speed=document.querySelectorAll(".one");
speed.forEach((e)=>{
    e.addEventListener("click",()=>{
    console.log(e);
    
    const video=document.querySelector(".video");
    if(video==null){
        return;
    }
    console.log(e.innerText);
    showToast("Speed"+" "+e.innerText);
    
    video.playbackRate=e.innerText;
    })
})
const rotateLeft=document.querySelector(".rotate-left");
const rotateRight=document.querySelector(".rotate-right");
rotateLeft.addEventListener("click",()=>{
    const video=document.querySelector(".video");
    if(video==null){
        return
    }
    rotateLeft.style.transform = 'rotate(-45deg)'; // Rotate slightly

    setTimeout(() => {
        rotateLeft.style.transform = 'rotate(0deg)'; // Return to original position
    }, 300);
    rotateLeft.style.transition = 'transform 0.5s';
    showToast("10 sec backward")

})
rotateRight.addEventListener("click",()=>{
    const video=document.querySelector(".video");
    if(video==null){
        return
    }
    rotateRight.style.transform = 'rotate(45deg)'; // Rotate slightly

    setTimeout(() => {
        rotateRight.style.transform = 'rotate(0deg)'; // Return to original position
    }, 300);
    rotateRight.style.transition = 'transform 0.5s';
    showToast("10 sec forward");
});
const ss=document.querySelector(".camera");
ss.addEventListener("click",()=>{
    const canvas=document.createElement("canvas");
    canvas.width = main.videoWidth;
    canvas.height = main.videoHeight;
    let tool = canvas.getContext("2d");
let link = canvas.toDataURL();

})
function addMediaToDB(data, table) {
    if (db) {
        // you need to get transaction
        let tx = db.transaction(table, "readwrite");
        // get table refer
        let store = tx.objectStore(table);
        // add
        store.add({ mid: Date.now(), media: data });

    } else {
        alert("db is loading")
    }
}
let request = indexedDB.open("camera", 1);
let db;
request.onsuccess = function (e) {
    //  if exist then will get db from here 
    db = request.result;
}
request.onerror = function (err) {
    console.log(err)
}
request.onupgradeneeded = function () {
    // 1st  create 
    db = request.result;
    db.createObjectStore("img", { keyPath: "mid" });
    db.createObjectStore("video", { keyPath: "mid" });
}
function addMediaToDB(data, table) {
    if (db) {
        // you need to get transaction
        let tx = db.transaction(table, "readwrite");
        // get table refer
        let store = tx.objectStore(table);
        // add
        store.add({ mid: Date.now(), media: data });

    } else {
        alert("db is loading")
    }
}



