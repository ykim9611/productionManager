-- run mysql -u root < Schema.sql

DROP DATABASE IF EXISTS productionManager;
CREATE DATABASE productionManager;
USE productionManager;

CREATE TABLE productionRun (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  annualSales INT NOT NULL,
  prodStartDate DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE parts (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  partName VARCHAR(255) NOT NULL,
  eta DATE NOT NULL,
  received BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE parts ADD FOREIGN KEY (product_id) REFERENCES productionRun (id);
