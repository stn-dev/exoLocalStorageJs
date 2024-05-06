export const creatBtn =(className , content) => {
    const btn = document.createElement("button");
    btn.classList.add(className);
    btn.textContent = content;
    return btn;
} 

export const creatInput = ( placehold, type , id) => {
    const ipt = document.createElement("input");
    ipt.setAttribute = ("type", type )
    ipt.placeholder = placehold;
    ipt.id =  id;
    return ipt;   
}

export const creatLabel = (iptId , content) => {
    const label = document.createElement("label");
    label.htmlFor =  iptId;
    label.textContent = content;
    return label;
}

export const creatDiv = (className) => {
    const div = document.createElement("div")
    div.classList.add(className);
    return div;
}