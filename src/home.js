const container = document.createElement('div');
const topHalf = document.createElement('div');
const topText = document.createElement('h1');
topHalf.id = "homeTopHalf";
topText.textContent = "Frying Pan \r\n Southern Style Seafood";
topHalf.appendChild(topText);
const botHalf = document.createElement('div');
const botImg = document.createElement('img');
const botText = document.createElement('p');
botText.textContent = "Serving the best Southern Style Seafood to grace Southport ever since 1987. A local favorite sure to impress and delight. This is more text to make it look somewhat better.";
botImg.id = "homeBotImg";

botHalf.appendChild(botImg);
botHalf.appendChild(botText);
botHalf.id = "homeBotHalf";
container.appendChild(topHalf);
container.appendChild(botHalf);

function applyContent(target) {
    target.appendChild(container);
}

export {applyContent};