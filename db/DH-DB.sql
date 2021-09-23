-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dh_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id_UNIQUE` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1628605739292 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1627222918042,'Playera para hombre con estampado',750,'Playera azul para hombre con estampado.','male',NULL),(1627222976898,'Playera para hombre sin estampado',750,'Playera amarilla, sin estampado.','male',NULL),(1627223017473,'Playera para hombre con estampado ',800,'Playera negra, con estampado al frente.','male',NULL),(1627223103124,'Playera para mujer con estampado de oso',650,'Playera blanca para mujer con estampado de oso.','female',NULL),(1627223149206,'Playera para mujer con estampado',800,'Playera para mujer con estampado.','female',NULL),(1627223185815,'Playera para mujer con estampado',1010,'Playera verde para mujer con estampado.','female',NULL),(1627223227927,'Playera para niño con estampado de oso',450,'Playera para niño con estampado rosa','kid',NULL),(1627223262060,'Playera para niño de color naranja',500,'Playera para niño con estampado naranja.','kid',NULL),(1627223309617,'Playera para niño con estampado',550,'Playera para niño con estampado, pez espada.','kid',NULL),(1627233814884,'Playera de hombre color verde',800,'Playera de hombre color verde con estampado.','male',NULL),(1627233889901,'Playera de hombre color verde',900,'Playera de hombre sin estampado, color verde.','male',NULL),(1627233974312,'Playeras de hombre color blanco',1500,'Pack de 3 playeras para hombre sin estampado, de color blanco.','male',NULL),(1627234039827,'Playera con estampado de pez',510,'Playera color azul, con estampado de pez.','kid',NULL),(1627234098935,'Playera con estampado',495,'Playera de color verde, con estampado.','kid',NULL),(1628185126464,'Playera para mujer de color rojo',975,'Playera con franjas rojas para mujer.','female',NULL),(1628185186759,'Playera para mujer',785,'Playera con estampado circular de color negro','female',NULL),(1628267815902,'Playera con estampado',860,'Playera go out side para niño con estampado de color.','kid',NULL),(1628605551171,'Sudadera para niño',1350,'Sudadera multicolor para niño.','kid',NULL),(1628605603078,'Playera blanca para mujer',600,'Playera con estampado para mujer.','female',NULL),(1628605641202,'Playera azul para hombre',600,'Playera con estampado para hombre, de color azul.','male',NULL),(1628605663216,'Playera azul para hombre con estampado',610,'Playera con estampado para hombre, de color azul.','male',NULL),(1628605739289,'Playera azul para hombre con estampado de color',600,'Playera con estampado para hombre, de color azul.','male',NULL),(1628605739290,'Playera prueba create',5000,'Playera prueba CRUD','male','img-product-1632379524194.jfif'),(1628605739291,'Playera prueba create 2',1200,'Segunda prueba CRUD','female','img-product-1632380164425.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `purchase_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `total` int NOT NULL,
  `product` varchar(1000) NOT NULL,
  `product_id_FK` bigint unsigned NOT NULL,
  `user_id_FK` bigint unsigned NOT NULL,
  PRIMARY KEY (`purchase_id`),
  UNIQUE KEY `purchase_id_UNIQUE` (`purchase_id`),
  KEY `product_id_FK_idx` (`product_id_FK`),
  KEY `user_id_FK_idx` (`user_id_FK`),
  CONSTRAINT `product_id_FK` FOREIGN KEY (`product_id_FK`) REFERENCES `products` (`product_id`),
  CONSTRAINT `user_id_FK` FOREIGN KEY (`user_id_FK`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint unsigned NOT NULL,
  `emailUser` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `passwordUser` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `nameUser` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `lastNameUser` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `gender` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `notifications` int NOT NULL,
  `profilePic` mediumblob,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1628605603218,'root@gmail.com','$2a$10$mZrKJhPo5k7GYRfcBUt3..N/2u4K50bIcwZhicg/CEvuPGBaKEGb6','Root','---','2000-01-01','male',1,NULL),(1628632503078,'A01746139@itesm.mx','$2a$10$HEVbznrZf0F4KBJL/WFi/.jbwVmrOZxw1MN.QILeT2jDK0HQ/tEDi','Luis','Figueroa','1999-04-14','male',1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-23  1:57:35
