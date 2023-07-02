<?php

interface Sekil {
    public function alan();
    public function cevre();
}

class Dikdortgen implements Sekil {
    private $uzunluk;
    private $genislik;

    public function __construct($uzunluk, $genislik){
        $this->uzunluk = $uzunluk;
        $this->genislik = $genislik;
    }

    public function alan(){
        return $this->uzunluk * $this->genislik;
    }

    public function cevre(){
        return 2 * ($this->uzunluk + $this->genislik);
    }
}

class Ucgen implements Sekil {
    private $taban;
    private $yukseklik;
    private $a;
    private $b;
    private $c;

    public function __construct($taban, $yukseklik, $a, $b, $c){
        $this->taban = $taban;
        $this->yukseklik = $yukseklik;
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;
    }

    public function alan(){
        return ($this->taban * $this->yukseklik) / 2;
    }

    public function cevre(){
        return $this->a + $this->b + $this->c;
    }
}

class Kare implements Sekil {
    private $kenar;

    public function __construct($kenar){
        $this->kenar = $kenar;
    }

    public function alan(){
        return $this->kenar * $this->kenar;
    }

    public function cevre(){
        return 4 * $this->kenar;
    }
}

$dikdortgen = new Dikdortgen(5, 10);
echo "Dikdörtgenin alanı: " . $dikdortgen->alan() . "<br>";
echo "Dikdörtgenin çevresi: " . $dikdortgen->cevre() . "<br>";

$ucgen = new Ucgen(6, 8, 10, 8, 6);
echo "Üçgenin alanı: " . $ucgen->alan() . "<br>";
echo "Üçgenin çevresi:" . $ucgen->cevre() . "<br>";

$kare = new Kare(7);
echo "Karenin alanı: " . $kare->alan() . "<br>";
echo "Karenin çevresi: " . $kare->cevre() . "<br>";