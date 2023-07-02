<?php
$planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "", "", NULL];

function generateRandom($arr, $num)
{
    $filteredArr = array_filter($arr, function ($value) {
        return $value !== NULL && $value !== "" && $value !== FALSE;
    });
    $randomizedKeys = array_rand($filteredArr, $num);
    $randomizedValues = array_map(function ($key) use ($filteredArr) {
        return $filteredArr[$key];
    }, $randomizedKeys);
    return $randomizedValues;
}

print_r(generateRandom($planets, 3));
