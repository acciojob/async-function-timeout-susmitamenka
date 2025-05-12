//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById('btn').addEventListener('click', async () => {
  const message = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);

  if (message && !isNaN(delayTime)) {
    await delay(delayTime);
    document.getElementById('output').innerText = message;
  } else {
    alert('Please provide both a message and a valid delay time.');
  }
});


