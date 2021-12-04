-- run mysql -u root < Schema.sql

DROP DATABASE IF EXISTS productionManager;
CREATE DATABASE productionManager;
USE productionManager;

CREATE TABLE productionRun (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  annualSales INT NOT NULL,
  prodStartDate DATE NOT NULL,
  openBool BOOLEAN NOT NULL,
  etd DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE parts (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  partName VARCHAR(255) NOT NULL,
  etd DATE NOT NULL,
  received BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE parts ADD FOREIGN KEY (product_id) REFERENCES productionRun (id);

-- INSERT INTO productionRun (productName, annualSales, prodStartDate, openBool, etd) VALUES ('iphone 13', 900, '2021-12-03', 1, '2022-01-27');

-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('1','box', '2022-01-08', '0');
-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('1','iphone', '2022-01-20', '0');
-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('1','cable', '2022-01-14', '0');

-- INSERT INTO productionRun (productName, annualSales, prodStartDate, openBool, etd) VALUES ('macbook 13', 2000, '2021-12-04', 1, '2022-01-29');

-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('2','box', '2022-01-15', '0');
-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('2','macbook', '2022-01-22', '0');
-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('2','cable', '2022-01-19', '0');

-- INSERT INTO productionRun (productName, annualSales, prodStartDate, openBool, etd) VALUES ('ipad pro', 500, '2021-12-11', 1, '2022-02-09');

-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('3','box', '2022-01-27', '0');
-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('3','macbook', '2022-02-02', '0');
-- INSERT INTO parts (product_id, partName, etd, received) VALUES ('3','cable', '2022-01-28', '0');