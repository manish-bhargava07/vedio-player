document.addEventListener("DOMContentLoaded", function() {
    const handleSpeed = document.querySelector(".handleSpeed");
    const input = document.querySelector("#input");
    const open = document.querySelector('#open');
    const main = document.querySelector("main");
    const playButton = document.querySelector("#playy");
    const pauseButton = document.querySelector("#pause");
    let video;

    const speedOptions = {
        one: 2,
        two: 1.75,
        three: 1.5,
        four: 1.25,
        five: 1,
        six: 0.75,
        seven: 0.5
    };

    const inputHandler = function() {
        input.click();
    };

    const handleVideo = function(obj) {
        const object = obj.target.files[0];
        const link = URL.createObjectURL(object);

        if (video) {
            main.removeChild(video);
        }

        video = document.createElement("video");
        video.setAttribute("class", "video");
        video.setAttribute("controls", "controls"); // Add controls
        main.appendChild(video);
        video.src = link;

        video.style.justifyContent = "center";
        video.style.alignItems = "center";
        video.pause();
    };

    open.addEventListener("click", inputHandler);
    input.addEventListener("change", handleVideo);

    playButton.addEventListener("click", () => {
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        if (video) {
            video.play();
        }
    });

    pauseButton.addEventListener("click", () => {
        pauseButton.style.display = "none";
        playButton.style.display = "block";
        if (video) {
            video.pause();
        }
    });

    Object.keys(speedOptions).forEach(key => {
        const speedButton = document.querySelector(`#${key}`);
        speedButton.addEventListener("click", () => {
            if (video) {
                video.playbackRate = speedOptions[key];
            }
        });
    });

    const volumeHandler = document.querySelector("#myNumber");
    volumeHandler.addEventListener("input", (e) => {
        if (video) {
            video.volume = e.target.value;
        }
    });
});