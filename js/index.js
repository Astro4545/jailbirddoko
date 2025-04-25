{function startCounting() {
    let randomSeconds = Math.floor(Math.random() * (60 - 10 + 1)) + 10; // Random number between 10 and 60
    let counter = 0;

    console.log(`Counting up to ${randomSeconds} seconds...`);

    let interval = setInterval(() => {
        counter++;
        console.log(counter);

        if (counter >= randomSeconds) {
            clearInterval(interval);
            console.log("Restarting...");
            startCounting(); // Restart the cycle
        }
    }, 1000); // Count every second
}

startCounting();
  
  return `${daysPart} days, ${hoursPart} hours, ${minutesPart} minutes, and ${secondsPart} seconds without the Jailbirds`;
}

function updateTimeSinceNerissaElement() 
{
  document.getElementById("how-long-since-stream").textContent = formatElapsedTime();
}

updateTimeSinceNerissaElement();
setInterval(updateTimeSinceNerissaElement, 1000);
//--------------------------------------------------------------------
/*const nerissaStreams = ["2QPj2hPm8vM", "aO9Te463qBQ", "sjjPriB-0xw", "PJSd7DYlGNo", "SOLsTnPzmAE", "1Fi1_gTTqwU",
                        "gtAt6xfeuFo", "qGEyKRT9Oj0", "hOX5wf06LN4", "JcdYQ3ApqWg", "pGQBbTk164s", "5s-O3oluZJM",
                        "8wpwqJ0_BGA", "gg3SrFzHn9M", "2Nob6f5dy7c", "vyvA71ABpRo", "T6qmfEr8ypo", "uq7T_akcUg0"];

function buildRandomNerissaStreamLink() 
{

  const randomIndex = Math.floor(Math.random() * nerissaStreams.length);
  const streamContainer = document.getElementById("randomStream");

  const existingLink = streamContainer.querySelector("a");
  if (existingLink)
    streamContainer.removeChild(existingLink);

  const streamLink = document.createElement("a");

  streamLink.addEventListener("click", function(event)
  {
    buildRandomNerissaStreamLink();
  });

  streamLink.href = `https://youtube.com/watch?v=${nerissaStreams[randomIndex]}`;
  streamLink.textContent = "random Nerissa stream vod";
  streamLink.target = "_blank";
  streamContainer.appendChild(streamLink);
}

//builds the first link upon page load
buildRandomNerissaStreamLink();*/
