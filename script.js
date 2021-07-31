// Grabbing the DOM
const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select a media screen and pass that to video element

async function selectMediaStream () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    console.log(err)
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset the button
  button.disabled = false;
});

// on load
selectMediaStream();