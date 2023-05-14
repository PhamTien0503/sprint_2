use sprint2;
INSERT INTO `sprint2`.`app_user` (`id`, `address`, `date_of_birth`, `email`, `flag_delete`, `gender`, `id_card`, `img`, `name`, `password`, `phone_number`) VALUES ('1', 'Tam Đại, Phú Ninh, QUuangr Nam', '1994-05-03', 'tien@gmail.com', 0, 0, '205865607', '0', 'Phạm Tiến', '$2a$12$zDrdAj94xyQmvOna6vSEH.O/TnZM7T8lD9Z1rgAzyg0FBP.ylJOLy', '0383562570');
INSERT INTO `sprint2`.`app_user` (`id`, `address`, `date_of_birth`, `email`, `flag_delete`, `gender`, `id_card`, `img`, `name`, `password`, `phone_number`) VALUES ('2', 'Tam Đại, Phú Ninh, Quảng Nam', '1994-05-03', 'nhan@gmail.com', 0, 0, '205865608', '0', 'Thành Nhân', '$2a$12$zDrdAj94xyQmvOna6vSEH.O/TnZM7T8lD9Z1rgAzyg0FBP.ylJOLy', '0383562571');
INSERT INTO `sprint2`.`app_user` (`id`, `address`, `date_of_birth`, `email`, `flag_delete`, `gender`, `id_card`, `img`, `name`, `password`, `phone_number`) VALUES ('3', 'Tam Đại, Phú Ninh, Quảng Nam1', '1994-05-03', 'cong@gmail.com', 0, 0, '205865609', '0', 'Văn Công', '$2a$12$zDrdAj94xyQmvOna6vSEH.O/TnZM7T8lD9Z1rgAzyg0FBP.ylJOLy', '0383562572');

INSERT INTO `sprint2`.`app_role` (`id`, `name`) VALUES ('1', 'ROLE_ADMIN');
INSERT INTO `sprint2`.`app_role` (`id`, `name`) VALUES ('2', 'ROLE_USER');

INSERT INTO `sprint2`.`product_type` (`id`, `name`) VALUES ('1', 'Gạch ốp tường');
INSERT INTO `sprint2`.`product_type` (`id`, `name`) VALUES ('2', 'Gạch lát nền');

INSERT INTO `sprint2`.`brand` ( `name`) VALUES ( 'Prime');
INSERT INTO `sprint2`.`brand` (`name`) VALUES ('Mikado');


INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902231222_85211eba80a70b89704aa48e07e4ad9d.jpg', 'Gạch lát nền Mikado-MGB4006', '25000', '23', '2021-02-02', '2', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902231222_85211eba80a70b89704aa48e07e4ad9d.jpg', 'Gạch ốp tường Mikado-MGB4006', '25000', '23', '2021-02-02', '2', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902256873_128029828179a0ffd4b8c5b47945552c.jpg', 'Gạch lát nền Mikado-MGB4004', '25000', '23', '2021-02-02', '2', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902256873_128029828179a0ffd4b8c5b47945552c.jpg', 'Gạch ốp tường Mikado-MGB4004', '25000', '23', '2021-02-02', '2', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902159272_98d81a73a2669f6b3b54449212ff800e.jpg', 'Gạch lát nền Mikado-MGB4005', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902159272_98d81a73a2669f6b3b54449212ff800e.jpg', 'Gạch ốp tường Mikado-MGB4005', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902274365_cf8556a1f6cde591ceb09770115fe64e.jpg', 'Gạch lát nền Mikado-MGB4007', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/z2417902274365_cf8556a1f6cde591ceb09770115fe64e.jpg', 'Gạch ốp tường Mikado-MGB4007', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-men-m%E1%BB%9D-9682.jpg', 'GẠCH LÁT NỀN VÂN GỖ PRIME-9686', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-men-m%E1%BB%9D-9682.jpg', 'GẠCH ỐP TƯỜNG VÂN GỖ PRIME-9686', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-b%C3%B3ng-17013.jpg', 'GẠCH LÁT NỀN VÂN GỖ PRIME-17013', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-b%C3%B3ng-17013.jpg', 'GẠCH ỐP TƯỜNG VÂN GỖ PRIME-17013', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-b%C3%B3ng-17031.jpg', 'GẠCH LÁT NỀN VÂN GỖ PRIME-17031', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-b%C3%B3ng-17031.jpg', 'GẠCH ỐP TƯỜNG VÂN GỖ PRIME-17031', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-%C4%91%C3%A1-b%C3%B3ng-17001.jpg', 'GẠCH LÁT NỀN VÂN GỖ PRIME-17001', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://gachonline.vn/images/san-pham/product/prime-%C4%91%C3%A1-b%C3%B3ng-17001.jpg', 'GẠCH ỐP TƯỜNG VÂN GỖ PRIME-17001', '25000', '23', '2021-02-02', '1', '1');

INSERT INTO `sprint2`.`orders` (`id`, `date_purchase`, `is_paid`, `app_user_id`) VALUES ('1', '2023-01-01', 1, '1');
INSERT INTO `sprint2`.`orders` ( `date_purchase`, `is_paid`, `app_user_id`) VALUES ( '2023-01-02', 0, '1');

INSERT INTO `sprint2`.`order_detail` (`id`, `order_quantity`, `order_id`, `product_id`,choose) VALUES ('1', '23', '1', '1',0);
INSERT INTO `sprint2`.`order_detail` ( `order_quantity`, `order_id`, `product_id`,choose) VALUES ( '23', '2', '1',0);
INSERT INTO `sprint2`.`order_detail` (`order_quantity`, `order_id`, `product_id`,choose) VALUES ( '1', '2', '3',0);
INSERT INTO `sprint2`.`order_detail` ( `order_quantity`, `order_id`, `product_id`,choose) VALUES ( '12', '2' ,'2',0);

INSERT INTO `sprint2`.`user_role` (`user_role_id`, `role_id`, `user_id`) VALUES ('1', '2', '1');
INSERT INTO `sprint2`.`user_role` (`user_role_id`, `role_id`, `user_id`) VALUES ('2', '2', '2');
INSERT INTO `sprint2`.`user_role` (`user_role_id`, `role_id`, `user_id`) VALUES ('3', '1', '3');