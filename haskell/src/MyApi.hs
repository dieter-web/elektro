{-# LANGUAGE ForeignFunctionInterface #-}

module MyApi where

import Foreign.C.Types

hs_add :: CInt -> CInt -> CInt
hs_add x y = x + y
