// src/MatrixCanvas.jsx
import { onCleanup, onMount, createSignal } from 'solid-js';
import { textToType } from '../../vars/misc';
const fontSize = 16;
const fontSizeTyped = 31

const MatrixCanvas = () => {
  let canvas;
  let ctx;
  let animationFrameId;
  const columns = [];
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  const chars = '01';
  const [typedText, setTypedText] = createSignal('');

  const initColumns = () => {
    for (let i = 0; i < canvasWidth / fontSize; i++) {
      columns[i] = 0;
    }
  };

  const drawMatrix = () => {
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

  const drawTextOverlay = () => {
    ctx.fillStyle = '#FFF'; // Set text color to white
    ctx.font = `${fontSizeTyped}px monospace`;
    const text = typedText();
    let y = 50;
    let x = 10;
    const maxWidth = canvasWidth - 20; // Allow some padding
    const lineHeight = fontSize * 1.5; // Increased line height

    // Split text into lines that fit within canvas width
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight; // Increase y position for the next line
      } else {
        line = testLine;
      }
    }

    ctx.fillText(line, x, y); // Draw remaining text
  };

  const update = () => {
    drawMatrix();
    drawTextOverlay();
    animationFrameId = requestAnimationFrame(update);
  };

  const typeText = () => {
    const fullText = textToType;
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  };

  const resizeCanvas = () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  };

  onMount(() => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext('2d');

    initColumns();
    update();

    typeText();

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
