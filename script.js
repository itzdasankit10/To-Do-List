
document.querySelector("#lux").addEventListener("click",()=>{
    let text = document.querySelector("#lext").value;
    if (text===``) {
        alert("Please enter something");
    }
    else{
        let upper = document.createElement("div");
        upper.className="UP"
        let cross = document.createElement("span");
        let imgs = document.createElement("img");
        imgs.src=`cross.svg`;
        cross.appendChild(imgs);
        let li = document.createElement("li");
        li.innerHTML = text;
        savedata();
        upper.appendChild(li);
        upper.appendChild(cross);
        document.querySelector("ul").appendChild(upper);
        document.querySelector("#lext").value="";
        upper.addEventListener("click", ()=>{
            if (upper.style.textDecoration=="line-through") {
                upper.style.textDecoration="none";
                li.style.listStyleImage="url(circle.svg)"
                savedata();
            }
            else{
                upper.style.textDecoration="line-through";
                li.style.listStyleImage="url(circles.svg)";
                savedata();
            }
        })
        document.querySelectorAll("span").forEach(e=>{
            e.addEventListener("click", ()=>{
                console.log("CLIKCED");
                upper.removeChild(e);
                upper.removeChild(li);
                savedata();
            })
            
        })
    }
})
let ull = document.querySelector("ul")
function savedata() {
    localStorage.setItem=("data", ull.innerHTML)
}
function show() {
    ull.innerHTML=localStorage.getItem("data");
}
show();