function User(firstName, lastName, age, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

// ====================================================
// Example implementation
var user1 = new User('Chris', 'Example', 42, 'male');
var user2 = new User('Jill', 'Smith', 23, 'female');

// this is called the 'dunder' prototype
User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function () {
  return this.firstName + this.lastName + this.emailDomain;
};

console.log(user1.getEmailAddress()); // returns ChrisExample@facebook.com
console.log(user2.getEmailAddress()); // returns JillSmith@facebook.com
