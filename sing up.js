import { welcome } from './acceuil.js'
import { login } from './login.js';
import { creatDiv, creatInput, creatLabel, creatBtn } from './form/form.js';
import { creatTitle } from './form/text.js';

export const singUp = creatDiv("sing-Up");

const title = creatTitle("sing up")
singUp.appendChild(title);

// firstname section

const firstname = creatDiv("firstname-sing")
singUp.appendChild(firstname);

const firstnameIptLabel = creatLabel("nameIpt", "firstname")
firstname.appendChild(firstnameIptLabel);

const firstnameIpt = creatInput("enter your fistname", "text", "nameIpt")
firstname.appendChild(firstnameIpt);

// email section

const mail = creatDiv("mail")
singUp.appendChild(mail);

const mailIptLabel = creatLabel("mailIpt", "email")
mail.appendChild(mailIptLabel);

const mailIpt = creatInput("enter your email", "text", "mailIpt")
mail.appendChild(mailIpt);

// password section

const password = creatDiv("password");
singUp.appendChild(password);

const passwordIptLabel = creatLabel("passwordIpt", "password")
password.appendChild(passwordIptLabel);

const passwordIpt = creatInput("enter your password", "text", "passwordIpt")
password.appendChild(passwordIpt);

// confirm password section 

const confirmPassword = creatDiv("confirmPassword");
singUp.appendChild(confirmPassword);

const confirmPasswordIptLabel = creatLabel("confirmPasswordIpt", "password")
confirmPassword.appendChild(confirmPasswordIptLabel);

const confirmPasswordIpt = creatInput("confirm your password", "text", "confirmPasswordIpt")
confirmPassword.appendChild(confirmPasswordIpt);

// button section

const btnDivSing = creatDiv("btn-sing");
singUp.appendChild(btnDivSing);

// saveBtn

const saveBtnSing = creatBtn("save-sing", "save");
btnDivSing.appendChild(saveBtnSing);

// cancelBtn

const cancelBtnSing = creatBtn("cancel-sing", "cancel");
btnDivSing.appendChild(cancelBtnSing);

cancelBtnSing.addEventListener("click", function () {
    app.removeChild(singUp);
    app.appendChild(welcome);
})

export let arrName = [];
export let arrPass = [];

saveBtnSing.addEventListener("click", function () {
    if (mailIpt.value === "" || firstnameIpt.value === "" ||
        passwordIpt.value === "" || confirmPasswordIpt.value === "") {
        alert("enter the full infos");
        // app.appendChild(singUp); 
        return null
    }
    if (passwordIpt.value !== confirmPasswordIpt.value) {
        alert("verify your password");
        // app.appendChild(singUp)
        return null
    }
    else {
        app.removeChild(singUp);
        app.appendChild(login);
        arr();
    }


})

function arr() {
    let user = {}
    // <    arrName.push(firstnameIpt.value);
    //     arrPass.push(passwordIpt.value);>

    user.username = firstnameIpt.value
    user.password = passwordIpt.value

    console.log(user)

    arrName.push(user)

    console.log(arrName);
    // console.log(arrPass);

    mailIpt.value = "";
    firstnameIpt.value = "";
    passwordIpt.value = "";
    confirmPasswordIpt.value = "";

    localStorage.setItem(user.username, user.password);
    // localStorage.setItem("password", arrPass);
}


































