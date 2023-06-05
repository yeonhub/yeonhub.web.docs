import { obj, ran } from "./module/data.js";
import showList from "./module/showObj.js"

const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click', e => {
    showList();
})