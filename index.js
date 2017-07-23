// SomeModule:
// module SomeModule where

// import Prelude

// import Control.Monad.Eff.Console (log)
// import Control.Monad.Eff.Unsafe (unsafePerformEff)

// myFunction :: forall e. String -> Unit
// myFunction x = unsafePerformEff do
//   log $ "i got: " <> x

//   SomeModule output:
// "use strict";
// var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
// var Control_Monad_Eff_Unsafe = require("../Control.Monad.Eff.Unsafe");
// var Data_Function = require("../Data.Function");
// var Data_Semigroup = require("../Data.Semigroup");
// var Prelude = require("../Prelude");
// var myFunction = function (x) {
//     return Control_Monad_Eff_Unsafe.unsafePerformEff(Control_Monad_Eff_Console.log("i got: " + x));
// };
// module.exports = {
//     myFunction: myFunction
// };

var SomeModule = require('./output/SomeModule');

// no thunk call needed because we made this shittier
SomeModule.myFunction('adsfsdfasdf')

// > node .
// i got: adsfsdfasdf