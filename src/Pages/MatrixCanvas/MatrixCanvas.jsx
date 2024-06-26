// src/MatrixCanvas.jsx
import { onCleanup, onMount } from 'solid-js';

const MatrixCanvas = () => {
  let canvas;
  let ctx;
  let animationFrameId;
  const columns = [];
  const fontSize = 16;
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  const chars = '01';

  const initColumns = () => {
    for (let i = 0; i < canvasWidth / fontSize; i++) {
      columns[i] = 0;
    }
  };

  const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    columns.forEach((y, index) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = index * fontSize;
      ctx.fillText(text, x, y * fontSize);

      if (y * fontSize > canvasHeight && Math.random() > 0.975) {
        columns[index] = 0;
      } else {
        columns[index]++;
      }
    });
  };

  const update = () => {
    draw();
    animationFrameId = requestAnimationFrame(update);
  };

  const resizeCanvas = () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  onMount(() => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext('2d');

    initColumns();
    update();

    window.addEventListener('resize', resizeCanvas);
  });

  onCleanup(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeCanvas);
  });

  return (
    <canvas ref={canvas}></canvas>
  );
};

export default MatrixCanvas;
