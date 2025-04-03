// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set, child} from "firebase/app";
import {firebase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9FDJpryOpBwWGXHk1lGFlG8fGzEZiJ9s",
  authDomain: "agendamento-veicular.firebaseapp.com",
  projectId: "agendamento-veicular",
  storageBucket: "agendamento-veicular.appspot.com",
  messagingSenderId: "69442856791",
  appId: "1:69442856791:web:8380aff4a2efd68ff88012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Module.exports = {
  app,
  firebase,
  getDatabase,
  ref, 
  get, 
  set, 
  child
}