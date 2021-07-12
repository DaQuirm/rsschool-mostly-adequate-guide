module Ch01 where

add :: Integer -> Integer -> Integer
add = (+)

multiply :: Integer -> Integer -> Integer
multiply = (*)

flockA :: Integer
flockA = 4

flockB :: Integer
flockB = 2

flockC :: Integer
flockC = 0

result :: Integer
result = multiply flockA (add flockB flockB)

-- >>> result
-- 16

-- >>> add 3 4
-- 7

-- >>> 3 `add` 4
-- 7

-- ⨁	⨂

(⨁) :: Integer -> Integer -> Integer
x ⨁ y = add x y

(⨂) :: Integer -> Integer -> Integer
(⨂) = multiply

-- >>> 3 ⨂ 4
-- 12

(!) :: Bool -> Bool
(!) = not
