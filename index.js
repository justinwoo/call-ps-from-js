// SomeModule:
// module SomeModule where

// import Prelude

// import Control.Monad.Eff (Eff)
// import Control.Monad.Eff.Console (CONSOLE, log)

// myFunction :: forall e. String -> Eff (console :: CONSOLE | e) Unit
// myFunction x = do
//   log $ "i got: " <> x

//   SomeModule output:
// "use strict";
// var Control_Monad_Eff = require("../Control.Monad.Eff");
// var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
// var Data_Function = require("../Data.Function");
// var Data_Semigroup = require("../Data.Semigroup");
// var Prelude = require("../Prelude");
// var myFunction = function (x) {
//     return Control_Monad_Eff_Console.log("i got: " + x);
// };
// module.exports = {
//     myFunction: myFunction
// };

var SomeModule = require('./output/SomeModule');

// second function call to run the eff thunk
SomeModule.myFunction('adsfsdfasdf')()

// > node .
// i got: adsfsdfasdf
