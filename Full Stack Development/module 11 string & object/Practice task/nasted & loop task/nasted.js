let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
console.log(user.address.city);
user.address.country='bangladesh'
console.log(user);

delete user.address.zip
console.log(user);