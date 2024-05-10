import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyADERqTjdlTEBWR36RibZRvHAkG5tjLtzo",
    authDomain: "an-ecommerce-restaurant.firebaseapp.com",
    databaseURL: "https://an-ecommerce-restaurant-default-rtdb.firebaseio.com",
    projectId: "an-ecommerce-restaurant",
    storageBucket: "an-ecommerce-restaurant.appspot.com",
    messagingSenderId: "885036947740",
    appId: "1:885036947740:web:0d8ff9c4d36ee3b38742d9"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}