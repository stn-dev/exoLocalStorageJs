import { welcome } from './acceuil.js';
import { creatDiv, creatInput, creatLabel, creatBtn } from './form/form.js';
import { creatTitle } from './form/text.js';
import { arrName, arrPass } from "./sing up.js";

export const login = creatDiv("login");

const title = creatTitle("login");
login.appendChild(title);

// firstname section

const firstnameLogin = creatDiv("firstname");
login.appendChild(firstnameLogin);

const firstnameLoginIptLabel = creatLabel("firstnameLog", "firstname");
firstnameLogin.appendChild(firstnameLoginIptLabel);

const firstnameLoginIpt = creatInput("enter your fistname", "text", "firstnameLog");
firstnameLogin.appendChild(firstnameLoginIpt);

// password section

const passwordLogin = creatDiv("password-log");
login.appendChild(passwordLogin);

const passwordLoginIptLabel = creatLabel("passwordLog", "password");
passwordLogin.appendChild(passwordLoginIptLabel);

const passwordLoginIpt = creatInput("enter your password", "text", "passwordLog");
passwordLogin.appendChild(passwordLoginIpt);

// btn section

const btnDivLogin = creatDiv("btn-log");
login.appendChild(btnDivLogin);

// saveBtn

const saveBtnLogin = creatBtn("save-log", "save")
btnDivLogin.appendChild(saveBtnLogin);

// cancelBtn

const cancelBtnLogin = creatBtn("cancel-log", "cancel")
btnDivLogin.appendChild(cancelBtnLogin);

// event listner


cancelBtnLogin.addEventListener("click", function () {
    app.removeChild(login);
    app.appendChild(welcome);
})

saveBtnLogin.addEventListener("click", function () {
    if (firstnameLoginIpt.value === "" || passwordLoginIpt.value === "") {
        alert("complete the full infos")
    }
    else {
        if (localStorage.getItem(firstnameLoginIpt.value)) {
            if (localStorage.getItem(firstnameLoginIpt.value) == passwordLoginIpt.value) {
                alert("you are connected")
            }

            firstnameLoginIpt.value = ""
            passwordLoginIpt.value = ""
        }
        else {
            alert("user doesn't exist")

            firstnameLoginIpt.value = ""
            passwordLoginIpt.value = ""
        }
    }



    // if (true) {
    //     for (let i = 0; i < arrName.length; i++) {
    //         if (arrName[i] !== firstnameLoginIpt.value) {
    //             continue
    //         } else {
    //             alert("you are")

    //         }
    //     }
    //     for (let u = 0; u < arrPass.length; u++) {
    //         if (arrPass[u] !== passwordLoginIpt.value) {
    //             continue
    //         } else {
    //             alert(" connected")
    //         }
    //     }

    // }

}
)






