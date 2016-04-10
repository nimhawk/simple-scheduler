import {intervalToMs} from 'util';

export default function(job) {
  let timer;

  function cancel() {
    clearTimeout(timer);
    clearInterval(timer);

    timer = undefined;
  }

  function every(interval, primeAction) {
    const ms = intervalToMs(interval);

    if (primeAction) {
      job();
    }

    if (timer) {
      stop();
    }

    timer = setInterval(() => {
      job();
    }, ms);
  }

  function after(interval) {
    const ms = intervalToMs(interval);

    if (timer) {
      cancel();
    }

    timer = setTimeout(() => {
      job();
    }, ms);
  }

  function at(timestamp) {
    const now = new Date();

    const diff = now - timestamp;

    if (diff < 0) {
      job();
    } else {
      after(diff);
    }

  }

  return {
    after,
    at,
    cancel,
    every
  };
}
