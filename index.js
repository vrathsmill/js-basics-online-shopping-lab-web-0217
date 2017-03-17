var cart = [];


function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random(0, 100) * 100));
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
  }
  console.log("That item is not in your cart.")
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function placeOrder(cardNumber){
  if (!cardNumber) {
    console.log("We don\'t have a credit card on file for you to place your order.")
}
  else
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
}


function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  var result = []

  for (var i = 0; i < cart.length; i++) {
    var things = cart[i];
    var item = Object.keys(things)[0];
    var price = things[item];
    console.log(item)
    console.log(price)
    result.push(`${item} at \$${price}`);

    }
    console.log(`In your cart, you have ${result.join(", ")}.`)
  }
