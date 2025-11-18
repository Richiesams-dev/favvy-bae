const mainContainer = document.getElementById("main-container");

function renderItems() {
    const container = document.createElement("div");
    container.className = "item-container";
    container.innerHTML = `
        <div class="item">
            <h2>Item Title</h2>
            <p>This is a description of the item.</p>
        </div>
    `;
    mainContainer.appendChild(container);
}

renderItems();


console.log("Hello, World!")