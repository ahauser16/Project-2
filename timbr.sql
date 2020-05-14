DROP DATABASE IF EXISTS timbr_db;
CREATE DATABASE timbr_db;
USE timbr_db;

CREATE TABLE timbr_user (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id), 
f_name VARCHAR(30) NOT NULL, 
l_name VARCHAR(30) NOT NULL, 
email VARCHAR(50) NOT NULL,
birthday VARCHAR(30) NOT NULL,
gender_identity VARCHAR(30),
gender_of_partner VARCHAR(30)
);

CREATE TABLE genre_preferences (
user_id INT UNSIGNED NOT NULL,
INDEX user_ind (user_id),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES timbr_user (id) ON DELETE SET NULL,
hip_hop BOOLEAN DEFAULT false,
pop BOOLEAN DEFAULT false,
country BOOLEAN DEFAULT false,
r_b BOOLEAN DEFAULT false,
latin BOOLEAN DEFAULT false,
rock BOOLEAN DEFAULT false,
dance_electronic BOOLEAN DEFAULT false,
indie BOOLEAN DEFAULT false,
folk_acoustic BOOLEAN DEFAULT false,
classical BOOLEAN DEFAULT false,
jazz BOOLEAN DEFAULT false,
soul BOOLEAN DEFAULT false,
christian BOOLEAN DEFAULT false,
k_pop BOOLEAN DEFAULT false,
arab BOOLEAN DEFAULT false,
desi BOOLEAN DEFAULT false,
afro BOOLEAN DEFAULT false,
metal BOOLEAN DEFAULT false,
regional_mexican BOOLEAN DEFAULT false,
reggae BOOLEAN DEFAULT false,
blues BOOLEAN DEFAULT false,
punk BOOLEAN DEFAULT false,
funk BOOLEAN DEFAULT false
);

