// webMidi time
const { WebMidi } = require("webmidi");
WebMidi.enable()
  .then(() => console.log("WebMidi enabled!"))
  .catch((err) => alert(err));

const a = (note) => {
  const myOutput = WebMidi.getOutputByName("IAC Driver Bus 2");
  myOutput.sendNoteOn(note);
};
const b = (note) => {
  WebMidi.getOutputByName("IAC Driver Bus 2").sendNoteOff(note);
};

var five = require("johnny-five"),
  board,
  button,
  led;

board = new five.Board();

board.on("ready", function () {
  var button = new five.Buttons([2, 3, 4]);
  var led = new five.Leds([13, 12, 11]);

  board.repl.inject({
    button: button,
  });

  button[0].on("down", function () {
    // console.log("down");
    a(60);
    led[0].on();
  });
  button[0].on("hold", function () {
    // console.log("hold");
  });
  button[0].on("up", function () {
    // console.log("up");
    b(60);
    led[0].off();
  });

  button[1].on("down", function () {
    // console.log("down");
    a(64);
    led[1].on();
  });
  button[1].on("hold", function () {
    // console.log("hold");
  });
  button[1].on("up", function () {
    // console.log("up");
    b(64);
    led[1].off();
  });

  button[2].on("down", function () {
    // console.log("down");
    a(59);
    led[2].on();
  });
  button[2].on("hold", function () {
    // console.log("hold");
  });
  button[2].on("up", function () {
    // console.log("up");
    b(59);
    led[2].off();
  });

  // const setUpButtons = (butt, light) => {
  //   button[butt].on("down", function () {
  //     console.log("down");
  //     a(66);
  //     led[light].on();
  //   });

  //   button[butt].on("hold", function () {
  //     console.log("hold");
  //   });

  //   button[butt].on("up", function () {
  //     console.log("up");
  //     b(66);
  //     led[light].off();
  //   });

  //   setUpButtons(0, 0);
  //   setUpButtons(1, 1);
  //   setUpButtons(2, 2);

  // };
});
