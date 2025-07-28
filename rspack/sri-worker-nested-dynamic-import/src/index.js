document.getElementById('script-loaded').innerHTML = 'main.js.br loaded';

const worker = new Worker(new URL('./my-worker.worker.js', import.meta.url));

worker.onmessage = (e) => {
  console.log('Worker: Message received from worker', e.data);
}

worker.postMessage([1, 2]);