DROP DATABASE IF exists proyectoprog2;
CREATE DATABASE proyectoProg2;
USE proyectoProg2;

/* CREAR TABLA USUARIOS */
CREATE TABLE usuarios(
id INT PRIMARY KEY auto_increment,
nombre VARCHAR(100),
apellido VARCHAR(100),
nombreDeUsuario VARCHAR(100),
edad INT UNSIGNED,
email VARCHAR(100) UNIQUE NOT NULL,
document INT UNSIGNED,
password VARCHAR(200) NOT NULL,
fechaDeNacimiento DATE,
fotoDePerfil VARCHAR(200) NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/* CREAR TABLA POSTEOS */
CREATE TABLE posteos(
id INT PRIMARY KEY auto_increment,
image VARCHAR(200) NOT NULL,
caption VARCHAR(200),
usuario_id INT NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

/* CREAR TABLA COMENTARIOS */
CREATE TABLE comentarios(
id INT PRIMARY KEY auto_increment,
comentario VARCHAR(500) NOT NULL,
usuario_id INT NOT NULL,
idPost INT NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (idPost) REFERENCES posteos(id)
);

/* USUARIOS */
INSERT INTO usuarios VALUES(default, "Moxy", "Fulder","mfulder",15,"moxfulder@yahoo.com",  73148074, "moxfulder","2018-08-06 19:28:51", "/imgenesUsuarios/foto1.jpg",default,default);
INSERT INTO usuarios VALUES(default,  "Damina", "Coppit","dcoppit",18,"dcoppit@live.com",  82210447,"dcoppitr","2018-08-06 19:28:51", "/imgenesUsuarios/foto2.jpg",default,default);
INSERT INTO usuarios VALUES(default, "Maria", "Gonzales","mgonzales",20,"gonzalesmaria@yahoo.com.ar", 44993031, "gonzalesmaria1","2018-08-06 19:28:51", "/imgenesUsuarios/foto3.jpg",default,default);
INSERT INTO usuarios VALUES(default, "Mariano", "Rodriguez","mrodriguez",23,"marianorodr@hotmail.com",16745667, "mariano1234", "2018-08-06 19:28:51", "/imgenesUsuarios/foto4.jpg",default,default);
INSERT INTO usuarios VALUES(default, "Camila", "Senna", "csenna",25,"camilasenna@hotmail.com",42993039, "camilasen12","2018-08-06 19:28:51", "/imgenesUsuarios/foto5.jpg",default,default);

/* POSTEO USUARIO 1 */
INSERT INTO posteos VALUES(default, "post/img/imagen1.png", "Desayunando con mi primito",1,default,default);
INSERT INTO posteos VALUES(default,"post/img/imagen2.png", "Vayan ya a comprar mi nuevo libro que tanto tiempo dedique",1,default,default);

/* POSTEO USUARIO 2 */
INSERT INTO posteos VALUES(default, "post/img/imagen3.png", "Amaneceres en Bariloche!. Hace mucho tiempo queria conocer esta maravilla de lugar y conocer sus platos tipicos",2,default,default);
INSERT INTO posteos VALUES(default, "post/img/imagen4.png", "y vos que esperas?, ya pediste nuestras nuevas hamburguesas?",2,default,default);

/* POSTEO USUARIO 3 */
INSERT INTO posteos VALUES(default, "post/img/imagen5.png", "preparando la comida junto a mi familia",3,default,default);
INSERT INTO posteos VALUES(default, "post/img/imagen6.png", "cocinando para toda la comunidad",3,default,default);

/* POSTEO USUARIO 4 */
INSERT INTO posteos VALUES(default, "post/img/imagen7.png", "plan fit para el verano, rutinas incluidas y muchas mas recetas",4,default,default);
INSERT INTO posteos VALUES(default, "post/img/imagen8.png", "estudiando y siempre con ganas de algo dulce!",4,default,default);

/* POSTEO USUARIO 5 */
INSERT INTO posteos VALUES(default, "post/img/imagen9.png", "miren las galletitas que me regalaron para mi cumpleanos",5,default,default);
INSERT INTO posteos VALUES(default, "post/img/imagen10.png", "Abrimos nuevo local en San Fernando!! quien viene?",5,default,default);



/* COMENTARIOS DEL USUARIO 1 */
INSERT INTO comentarios VALUES(default, "Que lindo!!!", 1, 1,default,default);
INSERT INTO comentarios VALUES(default, "Awww que tiernos", 1, 1,default,default);
INSERT INTO comentarios VALUES(default, "Cuanto cuesta?", 1, 2,default,default);
INSERT INTO comentarios VALUES(default, "Ya lo compre! y estoy haciendo la lasagna, despues cuento como salio", 1, 2,default,default);

/*  COMENTARIOS DEL USUARIO 2 */
INSERT INTO comentarios VALUES(default, "Hermosa vista", 2, 3,default,default);
INSERT INTO comentarios VALUES(default, "ojala estar ahi!", 2, 3,default,default);
INSERT INTO comentarios VALUES(default, "se ven riquisimas!", 2, 4,default,default);
INSERT INTO comentarios VALUES(default, "Estan buenisimas! yo las probe ayer y les encantaron a toda la familia", 2, 4,default,default);

/*  COMENTARIOS DEL USUARIO 3 */
INSERT INTO comentarios VALUES(default, "sumenme!", 3, 5,default,default);
INSERT INTO comentarios VALUES(default, "que andan cocinando?", 3, 5,default,default);
INSERT INTO comentarios VALUES(default, "bellos!",  3, 6,default,default);
INSERT INTO comentarios VALUES(default, "cuando llevan las viandas?", 3, 6,default,default);

/*  COMENTARIOS DEL USUARIO 4 */
INSERT INTO comentarios VALUES(default, "a ejercitar y comer sano!", 4, 7,default,default);
INSERT INTO comentarios VALUES(default, "Estan buenisimas las recetas! yo las probe ayer y les encantaron a toda la familia", 4, 7,default,default);
INSERT INTO comentarios VALUES(default, "estoy igual", 4, 8,default,default);
INSERT INTO comentarios VALUES(default, "cuando rendis?",  4, 8,default,default);

/*  COMENTARIOS DEL USUARIO 5 */
INSERT INTO comentarios VALUES(default, "feliz cumple!!", 5, 9,default,default);
INSERT INTO comentarios VALUES(default, "felicidades!",5, 9,default,default);
INSERT INTO comentarios VALUES(default, "que horarios esta abierto?",5, 10,default,default);
INSERT INTO comentarios VALUES(default, "lindos colores!", 5, 10,default,default);
