

for (let i = 1; i < 20; i++) {
setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  i * 500,
);
  // Block Node Synchronously
}
