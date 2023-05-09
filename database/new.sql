use sprint2;
INSERT INTO `sprint2`.`app_user` (`id`, `address`, `date_of_birth`, `email`, `flag_delete`, `gender`, `id_card`, `img`, `name`, `password`, `phone_number`) VALUES ('1', 'Tam Đại, Phú Ninh, QUuangr Nam', '1994-05-03', 'tien@gmail.com', 0, 0, '205865607', '0', 'Tien', '$2a$12$zDrdAj94xyQmvOna6vSEH.O/TnZM7T8lD9Z1rgAzyg0FBP.ylJOLy', '0383562570');
INSERT INTO `sprint2`.`app_user` (`id`, `address`, `date_of_birth`, `email`, `flag_delete`, `gender`, `id_card`, `img`, `name`, `password`, `phone_number`) VALUES ('2', 'Tam Đại, Phú Ninh, Quảng Nam', '1994-05-03', 'nhan@gmail.com', 0, 0, '205865608', '0', 'Tien', '$2a$12$zDrdAj94xyQmvOna6vSEH.O/TnZM7T8lD9Z1rgAzyg0FBP.ylJOLy', '0383562571');

INSERT INTO `sprint2`.`app_role` (`id`, `name`) VALUES ('1', 'ROLE_ADMIN');
INSERT INTO `sprint2`.`app_role` (`id`, `name`) VALUES ('2', 'ROLE_USER');

INSERT INTO `sprint2`.`product_type` (`id`, `name`) VALUES ('1', 'Gạch ốp tường');
INSERT INTO `sprint2`.`product_type` (`id`, `name`) VALUES ('2', 'Gạch lát nền');

INSERT INTO `sprint2`.`brand` ( `name`) VALUES ( 'Tokyo');
INSERT INTO `sprint2`.`brand` (`name`) VALUES ('Long Son');


INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch bình thường', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch xấu', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch tuyệt vời', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch xấu', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch tuyệt vời', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch xấu', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch tuyệt vời', '25000', '23', '2021-02-02', '1', '2');

INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch bình thường', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch xấu', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch tuyệt vời', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch xấu', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch tuyệt vời', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch xấu', '25000', '23', '2021-02-02', '1', '2');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch đẹp', '25000', '23', '2021-02-02', '1', '1');
INSERT INTO `sprint2`.`product` (`description`, `flag_delete`, `img`, `name`, `price`, `product_quantity`, `release_date`, `brands_id`, `product_type_id`) VALUES ('hihi', 0, 'https://cuongquoc.com.vn/media/news/0604_gach-lat-nen-dep-2019-hanh-lang-2.png', 'Gạch tuyệt vời', '25000', '23', '2021-02-02', '1', '2');

INSERT INTO `sprint2`.`orders` (`id`, `date_purchase`, `id_paid`, `app_user_id`) VALUES ('1', '2023-01-01', 1, '1');

INSERT INTO `sprint2`.`order_detail` (`id`, `order_quantity`, `order_id`, `product_id`) VALUES ('1', '23', '1', '1');

INSERT INTO `sprint2`.`user_role` (`user_role_id`, `role_id`, `user_id`) VALUES ('1', '1', '1');