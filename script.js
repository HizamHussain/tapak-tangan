import {
  HandLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/vision_bundle.mjs";

const video = document.getElementById("webcam");
const pointer = document.getElementById("pointer");
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const hitSound = document.getElementById("hit-sound");

let score = 0;
let timeLeft = 30;
let highScore = localStorage.getItem("highScore") || 0;
let targetX = 100, targetY = 100;

function randomPosition() {
  targetX = Math.random() * (window.innerWidth - 50);
  targetY = Math.random() * (window.innerHeight - 50);
  target.style.left = `${targetX}px`;
  target.style.top = `${targetY}px`;
}

function moveTargetSlightly() {
  targetX += (Math.random() - 0.5) * 10;
  targetY += (Math.random() - 0.5) * 10;
  targetX = Math.max(0, Math.min(window.innerWidth - 50, targetX));
  targetY = Math.max(0, Math.min(window.innerHeight - 50, targetY));
  target.style.left = `${targetX}px
