const menu = [
    {
        id: 1,
        title: "Feijoada",
        category: "Almoço",
        price: 35.00,
        img: "https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg",
        desc: `Tradicional prato brasileiro feito com feijão preto, carnes variadas e acompanhamentos como arroz, couve e laranja.`,
    },
    {
        id: 2,
        title: "Moqueca de Peixe",
        category: "Jantar",
        price: 40.00,
        img: "https://static.itdg.com.br/images/640-440/1ae0fdb277d066045833d9f418dc236c/94841-original.jpg",
        desc: `Moqueca preparada com peixe fresco, leite de coco, azeite de dendê e uma mistura de temperos aromáticos.`,
    },
    {
        id: 3,
        title: "Açaí na Tigela",
        category: "Sobremesa",
        price: 15.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2osbDF5MFqmEUUTtzfxpUTtnMYMbvHni1w&s",
        desc: `Refrescante tigela de açaí acompanhada de frutas frescas, granola e mel.`,
    },
    {
        id: 4,
        title: "Pão de Queijo",
        category: "Lanches",
        price: 8.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnnB2_GZ3YodcIKmeFft5Jh7RIXUY4RyDdg&s",
        desc: `Clássico pão de queijo mineiro, perfeito para um café da manhã ou lanche.`,
    },
    {
        id: 5,
        title: "Picanha na Chapa",
        category: "Almoço",
        price: 50.00,
        img: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/picanha-aa0c51c6-640w.jpg",
        desc: `Suculenta picanha grelhada servida com arroz, batata frita e vinagrete.`,
    },
    {
        id: 6,
        title: "Brigadeiro Milkshake",
        category: "shakes",
        price: 18.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIonKojTl135ckIEvXV-K0UDqggz7EcqOTA&s",
        desc: `Delicioso milkshake de brigadeiro, feito com chocolate cremoso e finalizado com granulado.`,
    },
    {
        id: 7,
        title: "Coxinha de Frango",
        category: "Lanches",
        price: 5.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLigfyds3_5OSm0C4_VTYXDa5g6e32kV9h7g&s",
        desc: `Crocante coxinha de frango com recheio cremoso, ideal para um lanche rápido.`,
    },
    {
        id: 8,
        title: "Pastel de Feira",
        category: "Lanches",
        price: 6.00,
        img: "https://static.itdg.com.br/images/360-240/5c58ac17e2cfe147a170a01e7d758c78/251463-shutterstock-2279329481-2-.jpg.jpg",
        desc: `Pastel frito recheado com opções como carne, queijo ou palmito, tradicional em feiras brasileiras.`,
    },
    {
        id: 9,
        title: "Cocada Cremosa",
        category: "Sobremesa",
        price: 12.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9K7NpVBbIOR_gvUTrGmdRZhRQQUfeWnZww&s",
        desc: `Sobremesa clássica feita com coco fresco e leite condensado.`,
    },
    {
        id: 10,
        title: "Bolo de Cenoura com Cobertura de Chocolate",
        category: "Sobremesa",
        price: 15.00,
        img: "https://static.itdg.com.br/images/1200-630/f2a06c2a3f1f470b00387776c30addb5/bolo-de-cenoura-com-cobertura-de-chocolate.jpg",
        desc: `Fofíssimo bolo de cenoura com cobertura de chocolate, perfeito para adoçar o dia.`,
    },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["Todos"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "Todos") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}
