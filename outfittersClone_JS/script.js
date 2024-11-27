var rand = Math.floor(Math.random() * 50)
if (rand === 0) {
    rand++
}
function createHoodieCard(image, percentOff, title, price) {

    var fishedHtml_1 =
        `<div class="card">
                <div class="img-sec">
                    <img src="${image}" alt="Product">
                    <div class="capsule">-${percentOff}%</div>
                </div>
                <div class="title">${title}</div>
                <div class="colors-available">2 colors | regular fit</div>
                <div class="price">PKR ${price}</div>
            </div>`

    document.querySelector("#hoodie-cont").innerHTML = document.querySelector(".card-cont").innerHTML + fishedHtml_1
}


createHoodieCard("img/hoodie1.png", rand, "FULL ZIPPER HOODIE", "4,000");
createHoodieCard("img/hoodie2.png", rand, "PULLOVER HOODIE", "3,800");
createHoodieCard("img/hoodie3.png", rand, "LIGHTWEIGHT HOODIE", "3,200");
createHoodieCard("img/hoodie4.png", rand, "GRAPHIC PRINT HOODIE", "42,500");
createHoodieCard("img/hoodie5.png", rand, "SPORTS HOODIE", "3,900");
createHoodieCard("img/hoodie6.png", rand, "OVERSIZED HOODIE", "4,400");
createHoodieCard("img/hoodie7.png", rand, "CROPPED HOODIE", "3,700");
createHoodieCard("img/hoodie8.png", rand, "PLAIN COLOR HOODIE", "3,500");



function createTShirtCard(image, percentOff, title, price) {

    var fishedHtml_2 =
        `<div class="card">
                <div class="img-sec">
                    <img src="${image}" alt="Product">
                    <div class="capsule">-${percentOff}%</div>
                </div>
                <div class="title">${title}</div>
                <div class="colors-available">2 colors | regular fit</div>
                <div class="price">PKR ${price}</div>
            </div>`

    document.querySelector("#tShirt-cont").innerHTML = document.querySelector("#tShirt-cont").innerHTML + fishedHtml_2

}

createTShirtCard("img/tshirt1.png", rand, "ROUND NECK T-SHIRT", "1,500");
createTShirtCard("img/tshirt2.png", rand, "V-NECK T-SHIRT", "1,800");
createTShirtCard("img/tshirt3.png", rand, "GRAPHIC PRINT T-SHIRT", "2,000");
createTShirtCard("img/tshirt4.png", rand, "BASIC T-SHIRT", "1,200");
createTShirtCard("img/tshirt5.png", rand, "OVERSIZED T-SHIRT", "22,500");
createTShirtCard("img/tshirt6.png", rand, "STRIPED T-SHIRT", "1,900");
createTShirtCard("img/tshirt7.png", rand, "SPORTS T-SHIRT", "2,100");
createTShirtCard("img/tshirt8.png", rand, "SHORT SLEEVE T-SHIRT", "2,500");


function createTrouserCard(image, percentOff, title, price) {

    var fishedHtml_3 =
        `<div class="card">
                <div class="img-sec">
                    <img src="${image}" alt="Product">
                    <div class="capsule">-${percentOff}%</div>
                </div>
                <div class="title">${title}</div>
                <div class="colors-available">2 colors | regular fit</div>
                <div class="price">PKR ${price}</div>
            </div>`

    document.querySelector("#trouser-cont").innerHTML = document.querySelector("#trouser-cont").innerHTML + fishedHtml_3
}

createTrouserCard("img/trouser1.png", rand, "SLIM-FIT TROUSERS", "3,500");
createTrouserCard("img/trouser2.png", rand, "STRAIGHT-FIT TROUSERS", "4,000");
createTrouserCard("img/trouser3.png", rand, "CARGO TROUSERS", "2,800");
createTrouserCard("img/trouser4.png", rand, "CHINO TROUSERS", "3,200");



function createShoeCard(image, percentOff, title, price) {

    var fishedHtml_4 =
        `<div class="card">
                <div class="img-sec">
                    <img src="${image}" alt="Product">
                    <div class="capsule">-${percentOff}%</div>
                </div>
                <div class="title">${title}</div>
                <div class="colors-available">2 colors | regular fit</div>
                <div class="price">PKR ${price}</div>
            </div>`

    document.querySelector("#shoe-cont").innerHTML = document.querySelector("#shoe-cont").innerHTML + fishedHtml_4
}

createShoeCard("img/shoe1.png", rand, "RUNNING SHOES", "5,000");
createShoeCard("img/shoe2.png", rand, "CASUAL SNEAKERS", "3,800");
createShoeCard("img/shoe3.png", rand, "LEATHER FORMAL SHOES", "7,200");
createShoeCard("img/shoe4.png", rand, "CANVAS SHOES", "2,500");
createShoeCard("img/shoe5.png", rand, "HIGH-TOP BOOTS", "10,500");
createShoeCard("img/shoe6.png", rand, "TURTLE-NECK SHOES", "4,900");
createShoeCard("img/shoe7.png", rand, "SLIP-ON SHOES", "3,100");
createShoeCard("img/shoe8.png", rand, "TRAINING SHOES", "6,200");


var select = document.querySelector("#select");

var categories = {
    hoodies: {
        container: document.querySelector("#hoodie-cont"),
        heading: document.querySelector("#hoodie-heading"),
    },
    tshirts: {
        container: document.querySelector("#tShirt-cont"),
        heading: document.querySelector("#tShirt-heading"),
    },
    trousers: {
        container: document.querySelector("#trouser-cont"),
        heading: document.querySelector("#trouser-heading"),
    },
    shoes: {
        container: document.querySelector("#shoe-cont"),
        heading: document.querySelector("#shoe-heading"),
    },
};

Object.values(categories).forEach(({ container, heading }) => {
    container.classList.remove("hidden");
    heading.classList.remove("hidden");
});

select.addEventListener("change", function () {
    var selectedValue = select.value;

    Object.entries(categories).forEach(([key, { container, heading }]) => {
        if (selectedValue === "all" || selectedValue === key) {
            container.classList.remove("hidden");
            heading.classList.remove("hidden");
        } else {
            container.classList.add("hidden");
            heading.classList.add("hidden");
        }
    });
});