DROP DATABASE IF EXISTS dh_clothes;
CREATE DATABASE dh_clothes;
USE dh_clothes;

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
  `product_id` bigint unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` varchar(45) NOT NULL,
  `img` mediumblob,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;

INSERT INTO `products` VALUES
  (1627223103124,'Playera para mujer con estampado de oso',650,'Playera blanca para mujer con estampado de oso.','female',NULL),
  (1627222918042,'Playera para hombre con estampado',750,'Playera azul para hombre con estampado.','male',NULL),
  (1627222976898,'Playera para hombre sin estampado',750,'Playera amarilla, sin estampado.','male',NULL),
  (1627223017473,'Playera para hombre con estampado ',800,'Playera negra, con estampado al frente.','male',NULL),
  (1627223149206,'Playera para mujer con estampado',800,'Playera para mujer con estampado.','female',NULL),
  (1627223185815,'Playera para mujer con estampado',1010,'Playera verde para mujer con estampado.','female',NULL),
  (1627223227927,'Playera para niño con estampado de oso',450,'Playera para niño con estampado rosa','kid',NULL),
  (1627223262060,'Playera para niño de color naranja',500,'Playera para niño con estampado naranja.','kid',NULL),
  (1627223309617,'Playera para niño con estampado',550,'Playera para niño con estampado, pez espada.','kid',NULL),
  (1627233814884,'Playera de hombre color verde',800,'Playera de hombre color verde con estampado.','male',NULL),
  (1627233889901,'Playera de hombre color verde',900,'Playera de hombre sin estampado, color verde.','male',NULL),
  (1627233974312,'Playeras de hombre color blanco',1500,'Pack de 3 playeras para hombre sin estampado, de color blanco.','male',NULL),
  (1627234039827,'Playera con estampado de pez',510,'Playera color azul, con estampado de pez.','kid',NULL),
  (1627234098935,'Playera con estampado',495,'Playera de color verde, con estampado.','kid',NULL),
  (1628185126464,'Playera para mujer de color rojo',975,'Playera con franjas rojas para mujer.','female',NULL),
  (1628185186759,'Playera para mujer',785,'Playera con estampado circular de color negro','female',NULL),
  (1628267815902,'Playera con estampado',860,'Playera go out side para niño con estampado de color.','kid',NULL),
  (1628605551171,'Sudadera para niño',1350,'Sudadera multicolor para niño.','kid',NULL),
  (1628605603078,'Playera blanca para mujer',600,'Playera con estampado para mujer.','female',NULL),
  (1628605641202,'Playera azul para hombre',600,'Playera con estampado para hombre, de color azul.','male',NULL),
  (1628605663216,'Playera azul para hombre con estampado',610,'Playera con estampado para hombre, de color azul.','male',NULL),
  (1628605739289,'Playera azul para hombre con estampado de color',600,'Playera con estampado para hombre, de color azul.','male',NULL);

UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` bigint unsigned NOT NULL,
  `emailUser` varchar(45) NOT NULL,
  `passwordUser` varchar(70) NOT NULL,
  `nameUser` varchar(45) NOT NULL,
  `lastNameUser` varchar(45) NOT NULL,
  `birth-date` date NOT NULL,
  `gender` varchar(45) NOT NULL,
  `notifications` int NOT NULL,
  `profilePic` mediumblob,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES
  (1628632503078, 'A01746139@itesm.mx', '$2a$10$HEVbznrZf0F4KBJL/WFi/.jbwVmrOZxw1MN.QILeT2jDK0HQ/tEDi', 'Luis', 'Figueroa', '1999-04-14', 'male', 1, null),
  (1628605603218, 'root@gmail.com', '$2a$10$mZrKJhPo5k7GYRfcBUt3..N/2u4K50bIcwZhicg/CEvuPGBaKEGb6', 'Root', '---', '2000-01-01', 'male', 1, null);

UNLOCK TABLES;

DROP TABLE IF EXISTS `purchase`;

CREATE TABLE `purchase` (
  `purchase_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `total` int(10) NOT NULL,
  `product` varchar(1000) NOT NULL,
  `id_user` bigint unsigned NOT NULL,
  `id_product` bigint unsigned NOT NULL,
  PRIMARY KEY (`purchase_id`),
  KEY `purchase_user_id_foreign` (`id_user`),
  KEY `purchase_product_id_foreign` (`id_product`),
  CONSTRAINT `purchase_user_id_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`user_id`),
  CONSTRAINT `purchase_product_id_foreign` FOREIGN KEY (`id_product`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=229 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;