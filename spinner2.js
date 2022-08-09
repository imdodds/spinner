const spinner = [
  '\r|    ',
  '\r/    ',
  '\r-    ',
  '\r\\    ',
  '\r|    ',
  '\r/    ',
  '\r-    ',
  '\r\\    ',
  '\r|    ',
];

let delay = 0;

for (const item of spinner) {
  setTimeout(() => {
    process.stdout.write(item);
  }, delay);
  delay += 200;
};