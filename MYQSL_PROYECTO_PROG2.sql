CREATE DATABASE proyectoProg2;
USE proyectoProg2;
CREATE TABLE usuarios(
id INT PRIMARY KEY auto_increment,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(200) NOT NULL,
dni INT UNSIGNED,
image BLOB NOT NULL,
fecha DATETIME
);
CREATE TABLE posteos(
id INT PRIMARY KEY auto_increment,
image BLOB NOT NULL,
descrip VARCHAR(200),
fecha_creacion DATETIME,
usuario_id INT NOT NULL,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
CREATE TABLE comentarios(
id INT PRIMARY KEY auto_increment,
comentario VARCHAR(500) NOT NULL,
fecha_creacion DATETIME,
usuario_id INT NOT NULL,
post_id INT NOT NULL,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (post_id) REFERENCES posteos(id)
);
INSERT INTO usuarios VALUES(default, "moxfulder@yahoo.com", "moxfulder", 73148074, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "dcoppit@live.com", "dcoppitr", 82210447, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "gonzalesmaria@yahoo.com.ar", "gonzalesmaria1", 44993031, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "marianorodr@hotmail.com", "mariano1234", 16745667, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "camilasenna@hotmail.com", "camilasen12", 42993039, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "jhondisa@yahoo.com", "jhonnetflix", 76544433, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "hakim@att.net", "hakiminorder", 01020566, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "ehood@yahoo.com.ar", "dearhood", 59360457, "FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "jacintaflores@hotmail.com", "jacinta61", 15678443,"FOTO", "FECHA");
INSERT INTO usuarios VALUES(default, "candelareyes@hotmail.com", "reyesprimero", 16745663, "FOTO", "FECHA");

INSERT INTO comentarios VALUES()




