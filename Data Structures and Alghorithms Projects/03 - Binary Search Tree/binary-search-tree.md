# Binary Search Tree Proje

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.
Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

## Çözüm
- 6'yı aradığımızı ve 7'yi kök olarak seçtiğimizi varsayalım.
- 6, 7'den küçük olduğu için ve kökten küçükler sola, büyükler sağa yazıldığı için sola gidiyoruz.
- Sola gittiğimizde 5'e geldik. 6, 5'ten büyüktü. Büyük olanlar sağa yazıldığı için 5'in altından sağa gideriz.
- 6'ya iki aşamada ulaşmış oluruz.

```
        7
       / \
      5   8
     / \   \
    1   6   9
   / \   
  0   3 
     / \
    2   4
```