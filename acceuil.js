import {singUp} from './sing up.js';
import { login } from './login.js';
import {creatBtn} from './form/form.js';


const body = document.querySelector("body");
export const app = document.getElementById("app");
body.appendChild(app);

export const welcome = document.createElement("div");
welcome.classList.add("welcome");
app.appendChild(welcome);

const title = document.createElement("h1");
welcome.appendChild(title);
title.textContent = "welcome";

const para = document.createElement("p");
para.textContent = "join us for a easier life";
welcome.appendChild(para);

const divBtn = document.createElement("div");
divBtn.classList.add("btn");
welcome.appendChild(divBtn);

const singUpBtn = creatBtn("sing-up" , "sing up")
divBtn.appendChild(singUpBtn);

const loginBtn = creatBtn("Login" , "login")
divBtn.appendChild(loginBtn);

// event listner

singUpBtn.addEventListener("click" , function () {
    app.removeChild(welcome);
    app.appendChild(singUp);
})

loginBtn.addEventListener("click" , function () {
    app.removeChild(welcome);
    app.appendChild(login); 
})


