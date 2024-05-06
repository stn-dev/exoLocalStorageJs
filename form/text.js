export const creatTitle = (content) => {
    const title = document.createElement("h2");
    title.textContent = content;
    return title
}

export const creatPara = (content) => {
    const para = document.createElement("p");
    para.textContent = content;
    return para;
}