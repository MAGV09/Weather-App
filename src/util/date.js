const date = new Date();
const day = date.toLocaleDateString('en-US', { weekday: 'long' });
const time = date.toLocaleTimeString('en-US', {
  hour: 'numeric',
  hour12: true,
});

export { day, time };
