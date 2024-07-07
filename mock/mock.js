let brands = document.getElementsByClassName('brand');
let titles = document.getElementsByClassName( 'title')
let images = document.getElementsByClassName('myimg');
let ratings = document.getElementsByClassName('rating');
let prices = document.getElementsByClassName('price');

let mysearch = async () => {
    let url = "https://dummyjson.com/products";
    let response = await fetch(url);
    let result = await response.json();
    let products = result.products; 

    for (let i = 0; i < products.length; i++) {
        brands[i].textContent = products[i].brand;
        titles[i].textContent = products[i].title;
        images[i].src = products[i].thumbnail;
        ratings[i].textContent = products[i].rating;
        images[i].style.marginBottom = "40px"

      
        let money=products[i].price;
        let newmoney=money*82.3;
        
        let dis=products[i].discountPercentage
        let disc=(newmoney/100)*dis
        
        newmoney-=disc;
        

        prices[i].textContent = Math.floor(newmoney)+"rs";
    }
}

mysearch();








