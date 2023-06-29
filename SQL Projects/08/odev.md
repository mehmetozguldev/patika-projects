## 1.

test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

```
CREATE TABLE IF NOT EXISTS employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```

## 2.

Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

```
insert into employee (id, name, birthday, email) values (1, 'Em MacCaghan', null, 'emaccaghan0@i2i.jp');
insert into employee (id, name, birthday, email) values (2, 'Emmalyn Tingey', '1972-03-29', 'etingey1@washington.edu');
insert into employee (id, name, birthday, email) values (3, 'Rickie Dryden', '1984-12-14', 'rdryden2@google.nl');
insert into employee (id, name, birthday, email) values (4, 'Valenka Slatten', '1988-08-16', 'vslatten3@cyberchimps.com');
insert into employee (id, name, birthday, email) values (5, 'Xymenes Eisold', '1991-11-23', 'xeisold4@altervista.org');
insert into employee (id, name, birthday, email) values (6, 'Felipe Swadling', '1981-01-23', 'fswadling5@vk.com');
insert into employee (id, name, birthday, email) values (7, 'Angie Everex', '1992-09-06', 'aeverex6@huffingtonpost.com');
insert into employee (id, name, birthday, email) values (8, 'Thomas Ubsdell', '1994-11-25', 'tubsdell7@nbcnews.com');
insert into employee (id, name, birthday, email) values (9, 'Vance Sikorski', null, 'vsikorski8@newsvine.com');
insert into employee (id, name, birthday, email) values (10, 'Mitchel Kersting', '1992-08-15', 'mkersting9@cbc.ca');
insert into employee (id, name, birthday, email) values (11, 'Alyce Merrell', '1991-06-15', 'amerrella@biglobe.ne.jp');
insert into employee (id, name, birthday, email) values (12, 'Emory Maudling', '2000-02-17', 'emaudlingb@icq.com');
insert into employee (id, name, birthday, email) values (13, 'Jud Tremellan', '1973-03-30', 'jtremellanc@reddit.com');
insert into employee (id, name, birthday, email) values (14, 'Brande Fielder', '1999-07-24', 'bfielderd@utexas.edu');
insert into employee (id, name, birthday, email) values (15, 'Lilias Bonwick', '1998-07-05', 'lbonwicke@nba.com');
insert into employee (id, name, birthday, email) values (16, 'Jessie Silbert', null, 'jsilbertf@google.it');
insert into employee (id, name, birthday, email) values (17, 'Flori McCritichie', '1986-11-19', 'fmccritichieg@patch.com');
insert into employee (id, name, birthday, email) values (18, 'Roosevelt Sheran', '1978-06-30', 'rsheranh@typepad.com');
insert into employee (id, name, birthday, email) values (19, 'Denyse Perch', '1975-02-01', 'dperchi@shareasale.com');
insert into employee (id, name, birthday, email) values (20, 'Joete Jobes', '1995-07-21', 'jjobesj@apple.com');
insert into employee (id, name, birthday, email) values (21, 'Guinna Slyde', '1982-03-19', 'gslydek@prnewswire.com');
insert into employee (id, name, birthday, email) values (22, 'Jasun Sawl', '1982-07-24', 'jsawll@usa.gov');
insert into employee (id, name, birthday, email) values (23, 'Clayborn Goede', null, 'cgoedem@woothemes.com');
insert into employee (id, name, birthday, email) values (24, 'Anderson Janway', '1986-06-01', 'ajanwayn@mozilla.com');
insert into employee (id, name, birthday, email) values (25, 'Rodi Bogaert', '1992-10-05', 'rbogaerto@ycombinator.com');
insert into employee (id, name, birthday, email) values (26, 'Molly Agneau', '1986-06-29', 'magneaup@cnet.com');
insert into employee (id, name, birthday, email) values (27, 'Reynolds Milbank', '1980-04-14', 'rmilbankq@elegantthemes.com');
insert into employee (id, name, birthday, email) values (28, 'Rois Rorke', '1978-07-25', 'rrorker@webs.com');
insert into employee (id, name, birthday, email) values (29, 'Jory Gibling', '1994-08-02', 'jgiblings@nifty.com');
insert into employee (id, name, birthday, email) values (30, 'Genia Dootson', '1991-03-07', 'gdootsont@globo.com');
insert into employee (id, name, birthday, email) values (31, 'Mersey Lineen', null, 'mlineenu@bizjournals.com');
insert into employee (id, name, birthday, email) values (32, 'Randa Dalby', '1986-03-03', 'rdalbyv@gnu.org');
insert into employee (id, name, birthday, email) values (33, 'Letizia Mc Coughan', '2000-03-05', 'lmcw@com.com');
insert into employee (id, name, birthday, email) values (34, 'Thatcher Cranke', '1971-11-29', 'tcrankex@mtv.com');
insert into employee (id, name, birthday, email) values (35, 'Sena Heinke', '1999-08-23', 'sheinkey@google.es');
insert into employee (id, name, birthday, email) values (36, 'Gloria MacCauley', '1995-07-20', 'gmaccauleyz@soundcloud.com');
insert into employee (id, name, birthday, email) values (37, 'Othella Kowalik', '1975-03-30', 'okowalik10@feedburner.com');
insert into employee (id, name, birthday, email) values (38, 'Devy Giraldon', '1992-02-13', 'dgiraldon11@yellowpages.com');
insert into employee (id, name, birthday, email) values (39, 'Valentine Biggin', '1995-03-02', 'vbiggin12@rediff.com');
insert into employee (id, name, birthday, email) values (40, 'Krista Jorcke', '1979-10-18', 'kjorcke13@digg.com');
insert into employee (id, name, birthday, email) values (41, 'Rees Daouse', '1982-07-10', 'rdaouse14@addthis.com');
insert into employee (id, name, birthday, email) values (42, 'Jillana Ainsby', '1982-04-15', 'jainsby15@cnn.com');
insert into employee (id, name, birthday, email) values (43, 'Andeee Pitherick', '1983-11-08', 'apitherick16@angelfire.com');
insert into employee (id, name, birthday, email) values (44, 'Dallas Thackeray', '1985-09-24', 'dthackeray17@skyrock.com');
insert into employee (id, name, birthday, email) values (45, 'Ingunna Cusiter', null, 'icusiter18@mit.edu');
insert into employee (id, name, birthday, email) values (46, 'Daniela Jeanesson', '1972-09-24', 'djeanesson19@sitemeter.com');
insert into employee (id, name, birthday, email) values (47, 'Lois Dregan', '1972-06-12', 'ldregan1a@github.com');
insert into employee (id, name, birthday, email) values (48, 'Sena Dach', '1972-11-17', 'sdach1b@smugmug.com');
insert into employee (id, name, birthday, email) values (49, 'Fredi Bearman', '1978-04-28', 'fbearman1c@noaa.gov');
insert into employee (id, name, birthday, email) values (50, 'Cynthea Worvell', '1989-01-31', 'cworvell1d@mtv.com');
```

## 3.

Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

```
UPDATE employee
SET name = 'Talbert Sywell',
	birthday = '1981-06-17',
	email = 'tsywell0@artisteer.com'
WHERE id < 6
RETURNING *;
```

## 4.

Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

```
DELETE FROM employee
WHERE id < 6
RETURNING *;
```
