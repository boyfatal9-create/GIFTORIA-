function order(product) {
  let phone = "91XXXXXXXXXX"; // replace
  let msg = "Hi Giftora! I want to order: " + product;
  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
}
