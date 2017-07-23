module SomeModule where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

myFunction :: forall e. String -> Eff (console :: CONSOLE | e) Unit
myFunction x = do
  log $ "i got: " <> x
