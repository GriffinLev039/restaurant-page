const itemObj = { title: "", price: "00.00", desc: "", };
class menuItem {
    constructor(title, price, desc) {
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
    toObject() {
        const itemContainer = document.createElement('div');
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = this.title;
        const itemPrice = document.createElement('p');
        itemPrice.textContent = this.price;
        const itemDesc = document.createElement('p');
        itemDesc.textContent = this.desc;
        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemDesc);
        return itemContainer;
    }
}
const itemList = [new menuItem("Crab Cakes", "23.00", "Overpriced and overrated, sure to make you feel slight regret."), new menuItem("Popcorn Shrimp", "Price", "Desc"), new menuItem("Beer-Battered Fish", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc"), new menuItem("Some other item", "Price", "Desc")];
function getItems() {
    const container = document.createElement('div');
    for (const item of itemList) {
        const target = item.toObject();
        target.classList.add("menuItem");
        container.appendChild(target);
        container.classList.add("menuContainer");
    }
    return container;
}
function createPage() {
    const pageBody = document.createElement("div");
    const topContainer = document.createElement('div');
    const header = document.createElement("h1");
    header.textContent = "Our Menu";
    topContainer.appendChild(header);
    topContainer.id = "menuTop";
    pageBody.appendChild(topContainer);
    pageBody.appendChild(getItems());
    return pageBody;
}

export { createPage };
