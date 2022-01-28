use inmob;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  `apellido` varchar(128) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `state` tinyint DEFAULT NULL,
  `createdAt` timestamp DEFAULT NULL,
  `updatedAt` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `inmob`.`users` 
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;

