

// var myCar2 = {
//     maxSpeed:70,
//     driver : "Net Ninja",
//     drive: function(speed,time){
//         console.log(speed * time);
//     },
//     logDriver: function (){
//         console.log("driver name is " + this.driver);
//     }
  
//   };

/**  A constructive functions starts with a capital letter thats why we have Array and String (first letter of Array and  String as uppercase)**/
    // var myArray = new Array (); 
    // var myString = new String ()


//   var myCar3 = {
//     maxSpeed:70,
//     driver : "Net Ninja",
//     drive: function(speed,time){
//         console.log(speed * time);
//     },
//     logDriver: function (){
//         console.log("driver name is " + this.driver);
//     }
  
//   };

// var myCar = {
//   maxSpeed:70,
//   driver : "Net Ninja",
//   drive: function(speed,time){
//       console.log(speed * time);
//   },
//   logDriver: function (){
//       console.log("driver name is " + this.driver);
//   }

// };


// A constructor is useful when you want to create multiple similar objects with the same properties and methods

var Car = function(maxSpeed,driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed * time);
   }

      this.logDriver = function(){
          console.log("driver name is " + this.logDriver);
      }


}

var myCar = new Car (70, "Ninja Man");
var myCar2 = new Car (40, "Humpty Dumpty");
var myCar3 = new Car (10, "Jonas");
var myCar4= new Car (90, "Noko Nice");

myCar.drive(30,5);
myCar3.logDriver();