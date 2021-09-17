CREATE DATABASE proyectoProg2;
USE proyectoProg2;
CREATE TABLE usuarios(
id INT PRIMARY KEY auto_increment,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(200) NOT NULL,
dni INT UNSIGNED,
image VARCHAR(200) NOT NULL,
fecha DATETIME
);
CREATE TABLE posteos(
id INT PRIMARY KEY auto_increment,
image VARCHAR(200) NOT NULL,
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
ALTER TABLE usuarios MODIFY image VARCHAR(200) NOT NULL;
ALTER TABLE posteos MODIFY image VARCHAR(200) NOT NULL;
/* USUARIOS */

INSERT INTO usuarios VALUES(default, "moxfulder@yahoo.com", "moxfulder", 73148074, "user/img/imagen1.png", "2014-01-02 11:11:11");
INSERT INTO usuarios VALUES(default, "dcoppit@live.com", "dcoppitr", 82210447, "user/img/imagen2.png", "2013-04-05 14:14:41");
INSERT INTO usuarios VALUES(default, "gonzalesmaria@yahoo.com.ar", "gonzalesmaria1", 44993031, "user/img/imagen3.png", "2012-02-03 17:27:41");
INSERT INTO usuarios VALUES(default, "marianorodr@hotmail.com", "mariano1234", 16745667, "user/img/imagen4.png", "2016-10-03 15:27:41");
INSERT INTO usuarios VALUES(default, "camilasenna@hotmail.com", "camilasen12", 42993039, "user/img/imagen5.png", "2018-08-06 19:28:51");

/* USUARIO 1 */

INSERT INTO comentarios VALUES(default, "Que lindo!!!", "2021-01-02 10:11:14", "1", "1");
INSERT INTO comentarios VALUES(default, "Awww que tiernos", "2021-01-02 10:27:35", "1", "1");
INSERT INTO comentarios VALUES(default, "Cuanto cuesta?", "2021-01-02 10:31:45", "1", "2");
INSERT INTO comentarios VALUES(default, "Ya lo compre! y estoy haciendo la lasagna, despues cuento como salio", "2021-01-02 10:33:12", "1", "2");

/* USUARIO 2 */

INSERT INTO comentarios VALUES(default, "Hermosa vista", "2021-02-03 15:24:41", "2", "3");
INSERT INTO comentarios VALUES(default, "ojala estar ahi!", "2021-02-03 15:24:55", "2", "3");
INSERT INTO comentarios VALUES(default, "se ven riquisimas!", "2021-02-03 16:00:48", "2", "4");
INSERT INTO comentarios VALUES(default, "Estan buenisimas! yo las probe ayer y les encantaron a toda la familia", "2021-02-03 16:13:40", "2", "4");

/* USUARIO 3 */

INSERT INTO comentarios VALUES(default, "sumenme!", "2021-03-04 07:34:02", "3", "5");
INSERT INTO comentarios VALUES(default, "que andan cocinando?", "2021-03-04 07:35:02", "3", "5");
INSERT INTO comentarios VALUES(default, "bellos!", "2021-03-04 07:36:02", "3", "6");
INSERT INTO comentarios VALUES(default, "cuando llevan las viandas?", "2021-03-04 07:38:22", "3", "6");

/* USUARIO 4 */

INSERT INTO comentarios VALUES(default, "a ejercitar y comer sano!", "2020-12-8 22:13:56", "4", "7");
INSERT INTO comentarios VALUES(default, "Estan buenisimas las recetas! yo las probe ayer y les encantaron a toda la familia", "2020-12-8 22:14:56", "4", "7");
INSERT INTO comentarios VALUES(default, "estoy igual", "2020-12-8 22:30:54", "4", "8");
INSERT INTO comentarios VALUES(default, "cuando rendis?", "2020-12-8 22:33:13", "4", "8");

/* USUARIO 5 */

INSERT INTO comentarios VALUES(default, "feliz cumple!!", "2021-03-04 07:34:02", "5", "9");
INSERT INTO comentarios VALUES(default, "felicidades!", "2021-03-04 07:38:13", "5", "9");
INSERT INTO comentarios VALUES(default, "que horarios esta abierto?", "2021-03-04 07:39:43", "5", "10");
INSERT INTO comentarios VALUES(default, "lindos colores!", "2021-03-04 07:39:59", "5", "10");

/* USUARIO 1 */

INSERT INTO posteos VALUES(default, "post/img/imagen1.png", "Desayunando con mi primito", "2021-01-02 09:11:15", 1);
INSERT INTO posteos VALUES(default,"post/img/imagen2.png", "Vayan ya a comprar mi nuevo libro que tanto tiempo dedique", "2021-02-03 15:24:40",1);

/* USUARIO 2 */

INSERT INTO posteos VALUES(default, "post/img/imagen3.png", "Amaneceres en Bariloche!. Hace mucho tiempo queria conocer esta maravilla de lugar y conocer sus platos tipicos", "2021-03-04 07:34:02",2);
INSERT INTO posteos VALUES(default, "post/img/imagen4.png", "y vos que esperas?, ya pediste nuestras nuevas hamburguesas?", "2020-12-8 22:13:56",2);

/* USUARIO 3 */

INSERT INTO posteos VALUES(default, "post/img/imagen5.png", "preparando la comida junto a mi familia", "2021-03-04 07:34:02",3);
INSERT INTO posteos VALUES(default, "post/img/imagen6.png", "cocinando para toda la comunidad", "2021-10-9 12:34:34",3);

/* USUARIO 4 */

INSERT INTO posteos VALUES(default, "post/img/imagen7.png", "plan fit para el verano, rutinas incluidas y muchas mas recetas", "2020-06-12 16:00:45",4);
INSERT INTO posteos VALUES(default, "post/img/imagen8.png", "estudiando y siempre con ganas de algo dulce!", "2020-09-11 10:55:23",4);

/* USUARIO 5 */

INSERT INTO posteos VALUES(default, "post/img/imagen9.png", "miren las galletitas que me regalaron para mi cumpleanos", "2019-06-12 15:02:24",5);
INSERT INTO posteos VALUES(default, "post/img/imagen10.png", "Abrimos nuevo local en San Fernando!! quien viene?", "2021-13-05 18:00:59",5);
