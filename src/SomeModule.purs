module SomeModule where

import Prelude

import Control.Monad.Eff.Console (log)
import Control.Monad.Eff.Unsafe (unsafePerformEff)

myFunction :: forall e. String -> Unit
myFunction x = unsafePerformEff do
  log $ "i got: " <> x
