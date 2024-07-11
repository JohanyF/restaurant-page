import pozoleImg from './img/pozole.jpg';
import tacosImg from './img/tacos.jpg';
import tamalesImg from './img/tamales.jpg';
import tostadasImg from './img/tostadas.jpg';

let foods = [
    {
        name: 'Pozole',
        price: '$12.99',
        calories: '1300',
        img: pozoleImg
    },
    {
        name: 'Tacos',
        price: '$2.99',
        calories: '500',
        img: tacosImg
    },
    {
        name: 'Tamales',
        price: '$13.99',
        calories: '1200',
        img: tamalesImg
    },
    {
        name: 'Tostadas',
        price: '$3.99',
        calories: '550',
        img: tostadasImg
    },
];

export default function setUpMenuPage() {
    const main = document.querySelector('.main');

    const test_container = document.createElement('div');
    test_container.classList.add('test-container');

    const h1 = document.createElement('h1');
    // Add a class to this element once you add create the CSS class for the Menu h1
    h1.textContent = 'Menu';

    const cards_container = document.createElement('div');
    cards_container.classList.add('cards-container');

    main.appendChild(test_container);

    test_container.appendChild(h1);
    test_container.appendChild(cards_container);

    // Creating a menu card for each object in the array
    foods.forEach((food) => {
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu-card');
    
        const food_img = new Image();
        food_img.src = food.img;
    
        const information = document.createElement('div');
        information.classList.add('information');
    
        const food_info = document.createElement('div');
        food_info.classList.add('food-info');
    
        const h2 = document.createElement('h2');
        h2.text = food.name;
    
        const info = document.createElement('div');
        info.classList.add('info');
    
        const food_price = document.createElement('p');
        food_price.classList.add('food-price');
        food_price.textContent = food.price;
    
        const food_cal = document.createElement('p');
        food_cal.classList.add('food-calories');
        food_cal.textContent = `${food.calories} Cal.`;
    
    
        const order_btn = document.createElement('button');
        order_btn.classList.add('order-btn');
        order_btn.setAttribute('type', 'button');
        order_btn.textContent = 'Order Now';

        cards_container.appendChild(menu_card);

        menu_card.appendChild(food_img);
        menu_card.appendChild(information);

        information.appendChild(food_info);
        food_info.appendChild(h2);
        food_info.appendChild(info);

        info.appendChild(food_price);
        info.appendChild(food_cal);
        
        information.appendChild(order_btn);

    })
}