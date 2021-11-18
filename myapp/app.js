var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/posts');
var resultadoBusquedaRouter = require('./routes/resultadoBusqueda');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( { secret: "Nuestro mensaje secreto", resave: false, saveUninitialized: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);

//para que guarde el usuario en la sesion
app.use(function(req, res, next){
  if(req.session.usuario != undefined){
    res.locals.usuario = req.session.usuario;
    return next();
  } 
  return next(); //Clave para que el proceso siga adelante.  
})

//Gestionar la cookie.
app.use(function(req, res, next){
  //Solo quiero hacerlo si tengo una cookie
  if(req.cookies.usuarioId != undefined && req.session.usuario == undefined){
    let idDeLaCookie = req.cookies.usuarioId;
    db.User.findByPk(idDeLaCookie)
    .then( usuario => {
      req.session.usuario = usuario;
      res.locals.usuario = usuario; 
      req.session.usuario.email = res.locals.email;
      req.session.usuario.imagen=res.locals.imagen;
      req.session.usuario.apellido=res.locals.apellido;
      req.session.usuario.nombre= res.locals.nombre;
      req.session.usuario.id=res.locals.id
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    //Si no tengo cookie quiero que el programa continue
    return next();
  }

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
