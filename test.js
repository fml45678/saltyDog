// webMidi time
const { WebMidi } = require("webmidi");
WebMidi.enable()
  .then(() => console.log("WebMidi enabled!"))
  .catch((err) => alert(err));

const a = () => {
  const myOutput = WebMidi.getOutputByName("IAC Driver Bus 2");
  myOutput.playNote(60, { attack: 0.2 });
};
const b = () => {
  WebMidi.getOutputByName("IAC Driver Bus 2").sendNoteOff(60);
};

var five = require("johnny-five"),
  board,
  button;

board = new five.Board();

board.on("ready", function () {
  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button,
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function () {
    console.log("down");
    a();
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function () {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function () {
    console.log("up");
    b();
  });
});
