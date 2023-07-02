## 1.

```
SELECT * FROM film WHERE length > (
	SELECT AVG(length) from film
);
```

## 2.

```
SELECT COUNT(*) FROM film WHERE rental_rate = (
	SELECT MAX(rental_rate) from film
);
```

## 3.

```
SELECT * FROM film WHERE film_id = ANY (
	SELECT film_id FROM film 
	WHERE 
	rental_rate = (SELECT MIN(rental_rate) FROM film) 
	AND 
	replacement_cost = (SELECT MIN(replacement_cost) FROM film)
);
```

## 4.

```
SELECT * FROM customer 
INNER JOIN (SELECT COUNT(*) A, customer_id FROM payment
		   GROUP BY customer_id)
		   count_purchases
		   ON customer.customer_id = count_purchases.customer_id
		   ORDER BY A
		   LIMIT 3;
```