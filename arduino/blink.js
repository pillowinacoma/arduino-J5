const five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
  var temperature = new five.Thermometer({
    pin: "A0",
  });

  temperature.on("data", function () {
    console.log("celsius: %d", this.C);
    // console.log("fahrenheit: %d", this.F);
    // console.log("kelvin: %d", this.K);
  });
});
