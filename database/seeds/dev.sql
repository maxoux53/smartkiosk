BEGIN TRANSACTION;
  INSERT INTO vat ("type", rate) VALUES
  ('A', 21),
  ('B', 12),
  ('C', 6);

  INSERT INTO category (label, vat_type, picture) VALUES
  ('Nourriture', 'A', 'https://www.morelandobgyn.com/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg'),
  ('Boissons', 'B', 'https://www.shutterstock.com/image-photo/summer-red-alcoholic-cocktail-drink-600nw-2496149251.jpg'),
  ('Marchandises', 'C', 'https://store.wikimedia.org/cdn/shop/files/Untitled_Artwork_281_16.jpg');

  INSERT INTO "user" (first_name, last_name, email, password, is_admin, avatar) VALUES
  ('Jean', 'Dupont', 'jean.dupont@example.com', '\\x1234567890abcdef', TRUE, 'https://avatar.iran.liara.run/public/34.jpeg'),
  ('Marie', 'Martin', 'marie.martin@example.com', '\\xabcdef1234567890', FALSE, 'https://avatar.iran.liara.run/public/65.jpeg'),
  ('Pierre', 'Dubois', 'pierre.dubois@example.com', '\\x9876543210fedcba', FALSE, 'https://avatar.iran.liara.run/public/44.jpeg');

  INSERT INTO event (name, location, image, iban) VALUES
  ('Festival d''Été', 'Parc Central', 'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i82f8384a1348ab84/version/1554202007/tomorrowland-best-summer-music-festivals-europe.jpg', 'GB29 NWBK 6016 1331 9268 19'),
  ('Conférence Tech', 'Centre des Congrès', 'https://quixy.com/wp-content/uploads/2021/04/IDC-Directions.jpg', 'DE89 3704 0044 0532 0130 00');

  INSERT INTO membership (user_id, event_id, role) VALUES
  (1, 1, 'host'),
  (2, 1, 'cashier'),
  (3, 2, 'guest');

  INSERT INTO product (label, is_available, excl_vat_price, picture, category_id, event_id) VALUES
  ('Burger', TRUE, 5.00, 'https://assets.orderbilly.com/products/502936_o.jpg', 1, 1),
  ('Soda', TRUE, 2.50, 'https://euc1.posios.com/posimages/pos20@innovativefoodconcept.com_75458/images/products/08162984d3464070bbd1bef589fac0b6.png', 2, 1),
  ('T-Shirt', TRUE, 15.00, 'https://euc1.posios.com/posimages/pos20@innovativefoodconcept.com_75458/images/products/d25fed6ef8da46d7810aa14a5803774d.png', 3, 2);

  INSERT INTO purchase ("date", user_id) VALUES
  ('2023-10-01 10:00:00', 2),
  ('2023-10-02 14:30:00', 3);

  INSERT INTO order_line (product_id, purchase_id, quantity, price) VALUES
  (1, 1, 2, 10.00),
  (2, 1, 1, 2.50),
  (3, 2, 1, 15.00);
COMMIT;