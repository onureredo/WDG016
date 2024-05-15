import os from 'os';

console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');
console.log('Used Memory:', os.totalmem() - os.freemem(), 'bytes');

const uptime = os.uptime();
console.log(
  'System Uptime:',
  `${Math.floor(uptime / 3600)} hours, ${(uptime % 3600) / 60} minutes`
);

const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index}:`);
  console.log(`Model: ${cpu.model}`);
  console.log(`Speed: ${cpu.speed} MHz`);
});
