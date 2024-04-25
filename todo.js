let heading = document.querySelector("h1")
let inp = document.querySelector("input")
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let item = document.createElement("li");
let count = 0;

btn.addEventListener("click", function () {
    //   let  lists =console.log(inp.value);
    //   list.innerText=lists;
    if (count < 5) {
count++;
        let item = document.createElement("li");
        item.innerText = inp.value;
        item.style.fontSize = "1.5rem"
        item.style.textTransform = "capitalize"
        item.style.color = "white"
        ul.appendChild(item);
        let del = document.createElement("button");
        del.innerText = "Delete";
        item.append(del);
        del.classList.add("deletebutton");
        inp.value = "";
    }
    else{
        alert("Maximum tasks  reached")
    }

})
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        // console.log("button clicked");
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();

    }
})
// let del = document.querySelectorAll(".deletebutton");
// for (delbtn of del) {
//     delbtn.addEventListener("click", function () {
//         // console.log("delete");
//         let parent = this.parentElement
//         console.log(parent);
//         parent.remove();
//     })
// }