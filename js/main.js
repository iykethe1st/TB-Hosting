// const collapse = document.querySelectorAll('.collapsible');

// function collapseItem (){
//     this.classList.toggle('collapsible--expanded')
// }

const collapseItem = (e) =>{
    e.currentTarget.classList.toggle('collapsible--expanded'); 
}

// collapse.forEach((item)=>{
//     item.addEventListener('click', collapseItem)
// })


const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click",  collapseItem)
);