import { spawn } from 'child_process';

console.log('🚀 Starting full stack development environment...');

const backend = spawn('npm', ['run', 'dev:backend'], { stdio: 'inherit', shell: true });
const frontend = spawn('npm', ['run', 'dev:frontend'], { stdio: 'inherit', shell: true });

backend.on('close', (code) => {
  console.log(`Backend process exited with code ${code}`);
});

frontend.on('close', (code) => {
  console.log(`Frontend process exited with code ${code}`);
});

process.on('SIGINT', () => {
    backend.kill();
    frontend.kill();
    process.exit();
});
