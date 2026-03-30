//Variant 1
let a = document.getElementById("add");
let b = document.getElementById("list");
let c = document.getElementById("input");
let sortBtn = document.getElementById("sort");

a.addEventListener("click", function() {
    let text = c.value;
    if (text) {
        let li = document.createElement("li");
        li.textContent = text;
        b.appendChild(li);
        c.value = "";
        li.addEventListener("click", function() {
        li.remove();
        });
    }
});

sortBtn.addEventListener("click", () => {
    b.innerHTML = Array.from(b.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).map(li => li.outerHTML).join("");
});
