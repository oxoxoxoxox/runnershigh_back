/*!999999\- enable the sandbox mode */
-- MariaDB dump 10.19  Distrib 10.6.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: run
-- ------------------------------------------------------
-- Server version	10.6.18-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board_entity`
--

DROP TABLE IF EXISTS `board_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board_entity` (
                                `id` int(11) NOT NULL AUTO_INCREMENT,
                                `title` varchar(255) NOT NULL,
                                `contents` varchar(255) NOT NULL,
                                `people` int(11) NOT NULL,
                                `data` int(11) NOT NULL,
                                `titleId` int(11) DEFAULT NULL,
                                PRIMARY KEY (`id`),
                                KEY `FK_414a4e40345b49eccf9a8ec3552` (`titleId`),
                                CONSTRAINT `FK_414a4e40345b49eccf9a8ec3552` FOREIGN KEY (`titleId`) REFERENCES `user_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_entity`
--

LOCK TABLES `board_entity` WRITE;
/*!40000 ALTER TABLE `board_entity` DISABLE KEYS */;
INSERT INTO `board_entity` VALUES (5,'광안리','연락해요 우리',1,0,NULL),(6,'광안리','연락해요 우리',1,0,NULL),(7,'광안리','연락해요 우리',1,0,NULL),(8,'광안리','연락해요 우리',1,0,NULL),(9,'광안리','연락해요 우리',1,0,NULL),(10,'광안리','연락해요 우리',1,0,NULL);
/*!40000 ALTER TABLE `board_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mission_entity`
--

DROP TABLE IF EXISTS `mission_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mission_entity` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `mission_ing` tinyint(4) NOT NULL,
                                  `record` int(11) DEFAULT NULL,
                                  `user_id` int(11) DEFAULT NULL,
                                  `mission_list` int(11) DEFAULT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `FK_c4f85ffec2a8734b4af4eac2926` (`user_id`),
                                  KEY `FK_8be92b6b1843cc9c42358b0c66a` (`mission_list`),
                                  CONSTRAINT `FK_8be92b6b1843cc9c42358b0c66a` FOREIGN KEY (`mission_list`) REFERENCES `mission_list` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                  CONSTRAINT `FK_c4f85ffec2a8734b4af4eac2926` FOREIGN KEY (`user_id`) REFERENCES `user_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mission_entity`
--

LOCK TABLES `mission_entity` WRITE;
/*!40000 ALTER TABLE `mission_entity` DISABLE KEYS */;
INSERT INTO `mission_entity` VALUES (1,1,NULL,1,1),(2,1,NULL,1,2),(3,0,NULL,1,3),(4,1,NULL,1,4),(5,0,NULL,1,5),(6,1,NULL,1,6);
/*!40000 ALTER TABLE `mission_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mission_list`
--

DROP TABLE IF EXISTS `mission_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mission_list` (
                                `id` int(11) NOT NULL AUTO_INCREMENT,
                                `mission_description` varchar(255) NOT NULL,
                                PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mission_list`
--

LOCK TABLES `mission_list` WRITE;
/*!40000 ALTER TABLE `mission_list` DISABLE KEYS */;
INSERT INTO `mission_list` VALUES (1,'1KM 달성하기'),(2,'3KM 달성하기'),(3,'5KM 달성하기'),(4,'3일 연속 달리기'),(5,'7일 연속 달리기'),(6,'게시판 글 게시하기');
/*!40000 ALTER TABLE `mission_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rangking_entity`
--

DROP TABLE IF EXISTS `rangking_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rangking_entity` (
                                   `id` int(11) NOT NULL AUTO_INCREMENT,
                                   `userId` int(11) DEFAULT NULL,
                                   `runningId` int(11) DEFAULT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `FK_a3e2bdfb8a75a167e50232462f2` (`userId`),
                                   KEY `FK_138ceac391629934118acda789f` (`runningId`),
                                   CONSTRAINT `FK_138ceac391629934118acda789f` FOREIGN KEY (`runningId`) REFERENCES `running_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                   CONSTRAINT `FK_a3e2bdfb8a75a167e50232462f2` FOREIGN KEY (`userId`) REFERENCES `user_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rangking_entity`
--

LOCK TABLES `rangking_entity` WRITE;
/*!40000 ALTER TABLE `rangking_entity` DISABLE KEYS */;
INSERT INTO `rangking_entity` VALUES (1,1,101),(2,2,102),(3,3,103),(4,4,104),(5,5,105);
/*!40000 ALTER TABLE `rangking_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `running_entity`
--

DROP TABLE IF EXISTS `running_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `running_entity` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `userId` int(11) DEFAULT NULL,
                                  `averageSpeed` float NOT NULL,
                                  `distance` float NOT NULL,
                                  `calories` int(11) NOT NULL,
                                  `startTime` varchar(255) NOT NULL,
                                  `time` int(11) NOT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `FK_f07ef58888086ecd12c48c015b9` (`userId`),
                                  CONSTRAINT `FK_f07ef58888086ecd12c48c015b9` FOREIGN KEY (`userId`) REFERENCES `user_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `running_entity`
--

LOCK TABLES `running_entity` WRITE;
/*!40000 ALTER TABLE `running_entity` DISABLE KEYS */;
INSERT INTO `running_entity` VALUES (101,1,0,3.42,0,'2024.11.05.14.22',0),(102,2,0,7.53,0,'2024.11.16.19.54',0),(103,3,0,6.24,0,'2024.12.03.13.38',0),(104,4,0,4.46,0,'2024.12.04.18.38',0),(105,5,0,5.77,0,'2024.11.26.19.42',0);
/*!40000 ALTER TABLE `running_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_entity`
--

DROP TABLE IF EXISTS `team_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_entity` (
                               `id` int(11) NOT NULL AUTO_INCREMENT,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_entity`
--

LOCK TABLES `team_entity` WRITE;
/*!40000 ALTER TABLE `team_entity` DISABLE KEYS */;
INSERT INTO `team_entity` VALUES (1);
/*!40000 ALTER TABLE `team_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_entity`
--

DROP TABLE IF EXISTS `user_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_entity` (
                               `id` int(11) NOT NULL AUTO_INCREMENT,
                               `userID` varchar(255) NOT NULL,
                               `userPW` varchar(255) NOT NULL,
                               `userName` varchar(255) NOT NULL,
                               `sex` tinyint(4) NOT NULL,
                               `age` int(11) NOT NULL,
                               `level` int(11) DEFAULT NULL,
                               `accept` tinyint(4) NOT NULL,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_entity`
--

LOCK TABLES `user_entity` WRITE;
/*!40000 ALTER TABLE `user_entity` DISABLE KEYS */;
INSERT INTO `user_entity` VALUES (1,'dudwlsaos132@naver.com','1111','정재록',1,13,3,1),(2,'cwjk1008@naver.com','2432','민병주',1,24,7,1),(3,'park13@naver.com','1313','박지민',0,26,6,1),(4,'dong@daum.net','8484','백동찬',1,31,4,1),(5,'minji@gmail.com','5678','김민지',0,24,5,1);
/*!40000 ALTER TABLE `user_entity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

— Dump completed on 2024-11-26  8:21:19
