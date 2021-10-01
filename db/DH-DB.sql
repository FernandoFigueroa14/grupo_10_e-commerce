DROP DATABASE IF EXISTS dh_db;
 CREATE DATABASE dh_db;
 USE dh_db;

 -- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
 --
 -- Host: 127.0.0.1    Database: dh-db
 -- ------------------------------------------------------
 -- Server version	8.0.26

 --
 -- Table structure for table `products`
 --

 DROP TABLE IF EXISTS `products`;

 CREATE TABLE `products` (
   `product_id` bigint unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(100) NOT NULL,
   `price` decimal(10,0) NOT NULL,
   `description` varchar(1000) NOT NULL,
   `category` varchar(45) NOT NULL,
   `img` varchar(100),
   `size` varchar(10),
   PRIMARY KEY (`product_id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

 --
 -- Dumping data for table `products`
 --

 LOCK TABLES `products` WRITE;

 INSERT INTO `products` VALUES 
  (1627222918042,'Playera para hombre con estampado',750,'Playera azul para hombre con estampado.','male','img-product-1627222918038.jpeg', 'M'),
  (1627222976898,'Playera para hombre sin estampado',750,'Playera amarilla, sin estampado.','male','img-product-1627222976895.jpeg', 'CH'),
  (1627223017473,'Playera para hombre con estampado ',800,'Playera negra, con estampado al frente.','male','img-product-1627223017469.jpeg', 'XL'),
  (1627223103124,'Playera para mujer con estampado de oso',650,'Playera blanca para mujer con estampado de oso.','female','img-product-1627223103120.jpeg', 'M'),
  (1627223149206,'Playera para mujer con estampado',800,'Playera para mujer con estampado.','female','img-product-1627223149202.jpeg', 'M'),
  (1627223185815,'Playera para mujer con estampado',1010,'Playera verde para mujer con estampado.','female','img-product-1627223185811.jpeg', 'XL'),
  (1627223227927,'Playera para niño con estampado de oso',450,'Playera para niño con estampado rosa','kid','img-product-1627223227923.jpeg', 'G'),
  (1627223262060,'Playera para niño de color naranja',500,'Playera para niño con estampado naranja.','kid','img-product-1627223262057.jpeg', 'G'),
  (1627223309617,'Playera para niño con estampado',550,'Playera para niño con estampado, pez espada.','kid','img-product-1627223341881.jpeg', 'M'),
  (1627233814884,'Playera de hombre color verde',800,'Playera de hombre color verde con estampado.','male','img-product-1627233814880.jpeg', 'G'),
  (1627233889901,'Playera de hombre color verde',900,'Playera de hombre sin estampado, color verde.','male','img-product-1627233889898.jpeg', 'M'),
  (1627233974312,'Playeras de hombre color blanco',1500,'Pack de 3 playeras para hombre sin estampado, de color blanco.','male','img-product-1627233974308.jpeg', 'XL'),
  (1627234039827,'Playera con estampado de pez',510,'Playera color azul, con estampado de pez.','kid','img-product-1627234039822.jpeg', 'M'),
  (1627234098935,'Playera con estampado',495,'Playera de color verde, con estampado.','kid','img-product-1627234098931.jpeg', 'G'),
  (1628185126464,'Playera para mujer de color rojo',975,'Playera con franjas rojas para mujer.','female','img-product-1628185126444.jpeg', 'M'),
  (1628185186759,'Playera para mujer',785,'Playera con estampado circular de color negro','female','img-product-1628185186755.jpeg', 'G'),
  (1628267815902,'Playera con estampado',860,'Playera go out side para niño con estampado de color.','kid','img-product-1628267815894.jpeg', 'M'),
  (1628605551171,'Sudadera para niño',1350,'Sudadera multicolor para niño.','kid','img-product-1628605551159.jpeg', 'XL'),
  (1628605603078,'Playera blanca para mujer',600,'Playera con estampado para mujer.','female','img-product-1628605603070.jpeg', 'M'),
  (1628605641202,'Playera azul para hombre',600,'Playera con estampado para hombre, de color azul.','male','img-product-1628605641194.jpeg', 'G'),
  (1628605663216,'Playera azul para hombre con estampado',610,'Playera con estampado para hombre, de color azul.','male','img-product-1628605663209.jpeg', 'CH'),
  (1628605739289,'Playera azul para hombre con estampado de color',600,'Playera con estampado para hombre, de color azul.','male','img-product-1628605739280.jpeg', 'G'),
  (1628605739290,'Playera prueba create',5000,'Playera prueba CRUD','male','img-product-1632379524194.jfif', 'M'),
  (1628605739291,'Playera prueba create 2',1200,'Segunda prueba CRUD','female','img-product-1632380164425.jpg', 'G');

 UNLOCK TABLES;

 --
 -- Table structure for table `user`
 --

 DROP TABLE IF EXISTS `users`;

 CREATE TABLE `users` (
   `user_id` bigint unsigned NOT NULL AUTO_INCREMENT,
   `emailUser` varchar(45) NOT NULL,
   `passwordUser` varchar(70) NOT NULL,
   `nameUser` varchar(45) NOT NULL,
   `lastNameUser` varchar(45) NOT NULL,
   `birth_date` date NOT NULL,
   `gender` varchar(45) NOT NULL,
   `notifications` int DEFAULT 0,
   `profilePic` varchar(100),
   PRIMARY KEY (`user_id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

 --
 -- Dumping data for table `user`
 --

 LOCK TABLES `users` WRITE;

 INSERT INTO `users` VALUES
   (1628632503078, 'A01746139@itesm.mx', '$2a$10$HEVbznrZf0F4KBJL/WFi/.jbwVmrOZxw1MN.QILeT2jDK0HQ/tEDi', 'Luis', 'Figueroa', '1999-04-14', 'male', 1, 'img-profile-1629685539274.jpg'),
   (1628605603218, 'root@gmail.com', '$2a$10$mZrKJhPo5k7GYRfcBUt3..N/2u4K50bIcwZhicg/CEvuPGBaKEGb6', 'Root', 'Admin', '2000-01-01', 'male', 1, 'img-profile-1629685539274.jpg'),
   (1628632503079, 'federico@hotmail.com', '$2a$10$cZWKrQ6x/xENog5ty.JOJO5.74BdTqlOJYZ9OVuTWLQXTHM2rI5e2', 'Federico', 'Villegas', '1997-10-10', 'male', 1, 'img-profile-1632497131570.jpeg');


 UNLOCK TABLES;

 DROP TABLE IF EXISTS `purchase`;

 CREATE TABLE `purchase` (
   `purchase_id` bigint unsigned NOT NULL AUTO_INCREMENT,
   `total` int(10) NOT NULL,
   `product` varchar(1000) NOT NULL,
   `user_id` bigint unsigned NOT NULL,
   `product_id` bigint unsigned NOT NULL,
   PRIMARY KEY (`purchase_id`),
   KEY `purchase_user_id_foreign` (`user_id`),
   KEY `purchase_product_id_foreign` (`product_id`),
   CONSTRAINT `purchase_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
   CONSTRAINT `purchase_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE
 ) ENGINE=InnoDB AUTO_INCREMENT=229 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;