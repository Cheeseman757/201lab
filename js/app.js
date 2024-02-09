'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {
  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'));
    } else {
      this.allProducts.push(new Product(productNames[i]));
    }
  }
};

AppState.prototype.saveToLocalStorage = function () {
  const dataString = JSON.stringify(this.allProducts);
  localStorage.setItem('voteData', dataString);
};

AppState.prototype.loadItems = function () {
  const savedData = localStorage.getItem('voteData'); // Assuming 'voteData' is the key for your saved data
  if (savedData) {
    // Parse the saved data and then for each product object, recreate the Product instances
    const parsedData = JSON.parse(savedData);
    this.allProducts = parsedData.map(product => new Product(product.name, product.source.split('.').pop()));
  } else {
    // If there is no saved data, instantiate new products
    this.instantiateProducts();
  }
};

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
