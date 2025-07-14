// main.js
import { auth, db } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// ----------------- SIGN UP -----------------
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuario registrado correctamente');
      window.location.href = 'index.html';
    } catch (error) {
      alert('Error al registrar: ' + error.message);
    }
  });
}

// ----------------- LOGIN -----------------
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio de sesión exitoso');
      window.location.href = 'dashboard.html';
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  });
}

// ----------------- GUARDAR PACIENTE -----------------
const pacienteForm = document.getElementById('paciente-form');
if (pacienteForm) {
  pacienteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const talla = parseFloat(document.getElementById('talla').value);

    // Calcular IMC
    const tallaM = talla / 100;
    const imc = peso / (tallaM * tallaM);
    alert(`IMC calculado: ${imc.toFixed(2)}`);

    try {
      await addDoc(collection(db, "pacientes"), {
        nombre,
        fechaNacimiento,
        edad,
        sexo,
        peso,
        talla,
        imc: imc.toFixed(2)
      });
      alert('Paciente guardado correctamente');
    } catch (error) {
      alert('Error al guardar paciente: ' + error.message);
    }
  });
}

// ----------------- RECORDATORIO 24H -----------------
const recordatorioForm = document.getElementById('recordatorio-form');
if (recordatorioForm) {
  recordatorioForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const desayuno = document.getElementById('desayuno').value;
    const almuerzo = document.getElementById('almuerzo').value;
    const cena = document.getElementById('cena').value;

    // Aquí podrías guardar el recordatorio en Firestore igual que los pacientes
    console.log('Recordatorio:', desayuno, almuerzo, cena);
    alert('Recordatorio guardado (simulado)');
  });
}