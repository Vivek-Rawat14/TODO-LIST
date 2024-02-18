let texts = document.querySelector("#texts");
let to_do = document.querySelector(".down_part");
let btns = document.querySelector("#btn");

btns.addEventListener("click", () => {
  if (texts.value === "") {
    alert("Please Enter ");
  } else {
    const array = JSON.parse(localStorage.getItem('tasks'))  
    array.push(texts.value)
    localStorage.setItem('tasks',JSON.stringify(array));
    createList()
  }
  texts.value = "";
});

texts.addEventListener('keydown',(e)=>{
  
    if(e.keyCode == 13){
        btns.click()
    }
})

// localStorage.setItem('tasks',JSON.stringify([]))

function createList(){
    to_do.innerHTML = ''
    const array = JSON.parse(localStorage.getItem('tasks'))
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let lis = document.createElement("li");
        lis.innerHTML = `<span>${array[i]}</span>`;
        to_do.append(lis);
        
        let btn = document.createElement("button");
        btn.innerHTML = "X";
        lis.appendChild(btn);
        btn.addEventListener('click',()=>{
            array.splice(array.indexOf(array[i]),1)
            localStorage.setItem('tasks',JSON.stringify(array));
            to_do.removeChild(lis)
        })
    }
}

createList()