// GESTIÓN DE BIBLIOTECA

/* PUNTO 1: Estructura de Datos

a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe
tener las siguientes propiedades:
✔ id (número)
✔ título (string),
✔ autor (string),
✔ año (número),
✔ género (string),
✔ disponible (booleano).
*/

let libros = [
    {id: 1, titulo: "RAYUELA", autor: "JULIO CORTAZAR", anio: 1963, genero: "NOVELA", disponible: false},
    {id: 2, titulo: "CEMENTERIO DE ANIMALES", autor: "STEPHEN KING", anio: 1983, genero: "TERROR", disponible: true},
    {id: 3, titulo: "1984", autor: "GEORGE ORWELL", anio: 1949, genero: "CIENCIA FICCION", disponible: true},
    {id: 4, titulo: "EL NOMBRE DE LA ROSA", autor: "UMBERTO ECO", anio: 1980, genero: "MISTERIO", disponible: true},
    {id: 5, titulo: "FAHRENHEIT 451", autor: "RAY BRADBURY", anio: 1953, genero: "CIENCIA FICCION", disponible: false},
    {id: 6, titulo: "LA CAMPANA DE CRISTAL", autor: "SYLVIA PLATH", anio: 1963, genero: "FICCION AUTOBIOGRAFICA", disponible: true},
    {id: 7, titulo: "EMMA", autor: "JANE AUSTEN", anio: 1815, genero: "NOVELA", disponible: true},
    {id: 8, titulo: "EL PRINCIPITO", autor: "ANTOINE DE SAINT-EXUPERY", anio: 1943, genero: "INFANTIL", disponible: true},
    {id: 9, titulo: "LOS MISERABLES", autor: "VICTOR HUGO", anio: 1862, genero: "NOVELA", disponible: true},
    {id: 10, titulo: "CRONICAS MARCIANAS", autor: "RAY BRADBURY", anio: 1950, genero: "CIENCIA FICCION", disponible: false},
];


/* 
b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
✔ id (número)
✔ nombre (string)
✔ email (string)
✔ librosPrestados (array de ids de libros).
*/

let usuarios = [
    {id: 1, nombre: "MARIA SUVIA", email: "msuvia@gmail.com", librosPrestados: [10]},
    {id: 2, nombre: "MARCOS ARIAS", email: "marcosarias@hotmail.com", librosPrestados: [1]},
    {id: 3, nombre: "CARLA SILVA", email: "carlita67@gmail.com", librosPrestados: []},
    {id: 4, nombre: "VICTOR BAEZ", email: "baezvictor@outlook.com.ar", librosPrestados: [5]},
    {id: 5, nombre: "MARIANELA GALLO", email: "mg2003@gmail.com", librosPrestados: []}
];


/* PUNTO 2: Funciones de Gestión de Libros

a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
*/

function agregarLibro(id, titulo, autor, anio, genero){
    libros.push({
                id: id, 
                titulo: titulo, 
                autor: autor, 
                anio:anio, 
                genero: genero,
                disponible: true
            });
    console.log(libros);
};


/*
b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo 
de búsqueda lineal.
*/

function buscarLibro(criterio, valor){

    // En el array buscados se almacenarán los libros que coincidan con la búsqueda realizada
    let buscados = [];

    // Le doy formato al valor ingresado (elimino espacios al principio y al final. y paso todo a mayúsculas)
    valor = valor.trim().toUpperCase();
    
    // Si el criterio es 'titulo', se recorre el array de libros comparando el título
    if (criterio === 'titulo') {
        for (let i=0; i<libros.length; i++) {
            // Se compara el título del libro con el valor ingresado
            if (libros[i].titulo.toUpperCase() === valor) {
                // Si coinciden, se agrega al array buscados
                buscados.push(libros[i])
            };
        };

        // Imprime los resultados de la búsqueda
        console.log(buscados);
        // Retorna los resultados de la búsqueda
        return (buscados);
    
    // Si el criterio es 'autor', se recorre el array de libros comparando el título
    } else if (criterio === 'autor') {
        for (let i=0; i<libros.length; i++) {
            if (libros[i].autor === valor) {
                buscados.push(libros[i])
            };
        }
        console.log(buscados);
        return(buscados);

    // Si el criterio es 'genero', se recorre el array de libros comparando el título
    } else if (criterio === 'genero') {
        for (let i=0; i<libros.length; i++) {
            if (libros[i].genero === valor) {
                buscados.push(libros[i])
            };
        }
        console.log(buscados);
        return(buscados);

    } else {
        // El criterio que ingresó el usuario no existe
        console.log("El criterio de búsqueda no es válido");
        return;
    };
};


/*
c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo 
de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
*/

function ordenarLibros(criterio){

    if (criterio === "titulo"){
        for (let i= 0; i<libros.length; i++){
            for (let j=0; j<libros.length-1; j++){
                //Si el elemento actual es mayor que el siguiente, se intercambian
                if (libros[j].titulo > libros[j+1].titulo){
                    let temp = libros[j]; 
                    libros[j] = libros[j+1];
                    libros[j+1] = temp;
                };
            };
        };

    } else if (criterio === "anio"){
        for (let i= 0; i<libros.length; i++){
            for (let j=0; j<libros.length-1; j++){
                //Si el elemento actual es mayor que el siguiente, se intercambian
                if (libros[j].anio > libros[j+1].anio){
                    let temp = libros[j]; 
                    libros[j] = libros[j+1];
                    libros[j+1] = temp;
                };
            };
        };

    } else {
        console.log("El criterio ingresado para ordenar los libros no es válido (título o anio).")
    };

    console.log(libros);
    return libros;
};


// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id){

    // Variable para guardar el libro que se va a borrar 
    let libroEncontrado = null;

    // Verifico si existe algún libro con el id dado en el array libros
    if (libros.some(libro => libro.id === id)){

        // Guardo el índice del libro con ese id
        let indice = libros.findIndex(libro => libro.id === id);

        // Si encontré un índice válido (distinto de -1)
        if (indice !== -1) {
            libroEncontrado = libros[indice];
            // Elimino el libro del array libros usando la finción splice
            libros.splice(indice, 1);
        };

        return libroEncontrado;
       //console.log(libros);

    } else {
        // Si no se encontró el libro con ese id, avisa por pantalla 
        console.log(`El libro con id ${id} no está registrado en el sistema`);
        return;
    }
};


/* PUNTO 3: GESTIÓN DE USUARIOS

a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

*/

function registrarUsuario(nombre, email){
    let nuevoUsuario = {
        id: usuarios.length+1, 
        nombre: nombre,
        email: email, 
        librosPrestados: []
    };
    usuarios.push(nuevoUsuario);
    //console.log(usuarios);
    return nuevoUsuario;
};



// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

function mostrarTodosLosUsuarios(){
    console.log(usuarios);
    return usuarios;
};


//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email){

    // Le doy formato al mail ingresado, eliminando espacios al principio y al final y pasando a letras minúsculas
    email = email.trim().toLowerCase();

    for (let i=0; i<usuarios.length; i++) {
        if (usuarios[i].email === email) {
            console.log(usuarios[i]);
            // Cuando encuentra el mail, retorna el usuario (ya que el mail es único)
            return usuarios[i];
        };
    };

    // Si el usuario no se encuentra registrado con ese mail, avisa por pantalla
    console.log("No se encuentra registrado ningpun usuario con ese mail.");
    return;
};


//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email){
    
    //Le doy formato a los datos ingresados
    let nombreFormato = nombre.trim().toUpperCase();
    let emailFormato = email.trim().toLowerCase();
    let usuarioBorrado = null;

    for (let i=0; i<usuarios.length; i++) {
        //busca al usuario por email
        if (usuarios[i].email === emailFormato) {
            //chequeo que el nombre del usuario ingresado coincida con el correspondiente en el array
            if (usuarios[i].nombre === nombreFormato){
                //Para eliminarlo:
                let indice = usuarios.findIndex(usuario => usuario.email === emailFormato);
                //console.log(indice);
                if (indice !== -1) {
                    usuarioBorrado = usuarios[indice];
                    usuarios.splice(indice, 1);
                    //encontro el usuario y lo eliminó; salgo de la funcion
                    return usuarioBorrado;
                };
            } else {
                // Si el nombre de usuario ingresado no coincide con el nombre del usuario registrado con ese email, avisa por pantalla
                console.log("El nombre del usuario correspondiente al mail "+ emailFormato + " no coincide con el ingresado");
                //salgo de la funcion, ya que el mail es personal
                return;
            };
        };
    };

    // Si no encontró el mail en el array, avisa por pantalla
    console.log("El usuario ingresado no se encuentra registrado en el sistema.");
    return;
};


/* PUNTO 4: SISTEMA DE PRÉSTAMOS

a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue 
a la lista de libros prestados del usuario.

*/

function prestarLibro(idLibro, idUsuario){
    //primero me aseguro de que el libro con id ingresado y el usuario con el id ingresado existan
    if ((libros.some(libro => libro.id === idLibro) && (usuarios.some(usuario => usuario.id === idUsuario)))){
        //libro
        for (let i=0 ; i<libros.length; i++){
            if (libros[i].id === idLibro){
                //chequeo que el libro esté disponible para préstamo; si lo está le cambio la disponibilidad
                if (libros[i].disponible) {
                    libros[i].disponible = false
                } else {
                    //el libro no está disponible para préstamo
                    console.log("El libro solicitado no se encuentra disponible actualmente.");
                    return
                }
            };
        };
        //usuario
        for (let i=0 ; i<usuarios.length; i++){
            if (usuarios[i].id === idUsuario){
                usuarios[i].librosPrestados.push(idLibro);
            };
        }
    } else {
        console.log("Alguno de los valores ingresados es incorrecto.");
        return;
    };
};

/*
b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine 
de la lista de libros
prestados del usuario
*/

function devolverLibro(idLibro, idUsuario){
    //primero me aseguro de que el libro con id ingresado y el usuario con el id ingresado existan
    if ((libros.some(libro => libro.id === idLibro) && (usuarios.some(usuario => usuario.id === idUsuario)))){
        //libro
        for (let i=0; i<libros.length; i++){
            if (libros[i].id === idLibro){
                libros[i].disponible = true;
                //console.log(libros[i]);
            };
        };
        //usuario
        for (let i=0; i<usuarios.length; i++){
            if (usuarios[i].id === idUsuario){
                //busco el indice correpondiente al libro en el array del usuario
                let indice = usuarios[i].librosPrestados.indexOf(idLibro);
                //lo elimino
                usuarios[i].librosPrestados.splice(indice, 1);
                //console.log(usuarios[i].librosPrestados);
            };
        };
    } else {
        console.log("Alguno de los valores ingresados es incorrecto. El usuario con dicho id no tiene ese libro.");
        return;
    };
};


/* PUNTO 5: SISTEMA DE PRÉSTAMOS

a) Crear una función generarReporteLibros() que utilice métodos avanzados
de arrays (.map(), .filter(), .reduce()) para generar un reporte con la
siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo
*/

function generarReporteLibros(){

    //✓ Cantidad total de libros.
    console.log("Cantidad total de libros: " + libros.length);

    //✓ Cantidad de libros prestados.
    //let array.reduce(callback(acumulador, valorActual), valorInicial)
    let librosPrestados = libros.reduce((suma, libro) => (!libro.disponible) ? (suma +1) : suma , 0);
    console.log("Cantidad de libros prestados: "  + librosPrestados);


    //✓ Cantidad de libros por género.
    let cantidadLibrosPorGenero = {};

    for (let i=0; i<libros.length; i++){
        //guardo el género en una variable
        let generoLibro = libros[i].genero;
        //veo si el género ya está en el objeto cantidadLibrosPorGenero
        if (cantidadLibrosPorGenero[generoLibro]) {
            //si está, le sumo 1 libro más
            cantidadLibrosPorGenero[generoLibro]++;
        } else {
            //si no está, lo agrego con el valor 1
            cantidadLibrosPorGenero[generoLibro] = 1;
        };
    };

    //convierto las llaves y los valores del objeto en 2 arrays
    let generos = Object.keys(cantidadLibrosPorGenero);
    let cantidades = Object.values(cantidadLibrosPorGenero);
    console.log("Cantidad de libros por género: ");

    //para el limite del for puedo usar la longitud de cualquiera de los dos arrays, ya que tienen la 
    //misma cantidad de elemebntos
    for (let i=0; i<generos.length; i++){
        console.log(generos[i] + ": " + cantidades[i]);
    };
    


    //✓ Libro más antiguo y más nuevo

    let libroMasAntiguo;
    //guardo un valor muy grande 
    let anioMasAntiguo = 3000;

    let libroMasNuevo;
    //guardo un valor muy chico
    let anioMasNuevo = -1000;

    for (let i=0; i<libros.length; i++){

        if (libros[i].anio < anioMasAntiguo){
            //si cumple con la condición, actualiza los valores
            libroMasAntiguo = libros[i];
            anioMasAntiguo = libros[i].anio;

        } else if (libros[i].anio > anioMasNuevo){
            //si cumple con la condición, actualiza los valores
            libroMasNuevo = libros[i];
            anioMasNuevo = libros[i].anio;
        };
    };

    console.log("Libro más antiguo: " + libroMasAntiguo.titulo + " (" + libroMasAntiguo.anio + ")");
    console.log("Libro más nuevo: " + libroMasNuevo.titulo + " (" + libroMasNuevo.anio + ")");

};

/* PUNTO 6: IDENTIFICACIÓN AVANZADA DE LIBROS

a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título 
contiene más de una palabra (no títulos que contengan números ni otros caracteres). La función debe devolver un
array con los títulos de esos libros y mostrarlo en la consola
*/

function librosConPalabrasEnTitulo(){
    //creo el array que voy a devolver al final, donde se guardan los títulos de los libros con más de una palabra
    let librosConMasDeUnaPalabra = [];
    //recorro el array de libros para ir chequeando uno por uno
    for (let i=0; i<libros.length; i++){
        //convierto el título del libro en un array de las palabras que forman el título usando .split()
        let palabras = libros[i].titulo.split(" ");
        //En un array guardo las palabras del título que no sean un número
        //para ello, trato de convertir el string en un float usando parseFloat. Si es una palabra, esto dara NaN
        //con la funcion .isNan me quedo con los strings que no son números
        let palabrasNoNumeros = palabras.filter(palabra => isNaN(parseFloat(palabra)));
        //Si hay más de una palabra en el array, guardo el título del libro en el array que voy a devolver
        if (palabrasNoNumeros.length > 1) {
            librosConMasDeUnaPalabra.push(libros[i].titulo);
        }
    };
    //imprimo
    console.log("Los libros con más de una palabra son: ");
    librosConMasDeUnaPalabra.map(libro => console.log(libro));
    //devuelvo el array
    return librosConMasDeUnaPalabra;
};

/* PUNTO 7: CÁLCULOS ESTADÍSTICOS

a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
✔ Promedio de años de publicación de los libros.
✔ Año de publicación más frecuente.
✔ Diferencia en años entre el libro más antiguo y el más nuevo.
*/

function calcularEstadisticas(){

    //✓Promedio de años de publicación de los libros.
    let promedio = Math.round(libros.reduce((acum, libro) => acum + libro.anio, 0) / libros.length);
    console.log("El promedio de los años de publicación de los libros es: " + promedio);


    //✓Año de publicación más frecuente.

    let anios = libros.map(libro => libro.anio);
    //console.log(anios);

    //los ordeno de menor a mayor
    anios.sort();
    //console.log(anios);

    //para los valores que se están contando
    let contador = 0;
    let anioActual = anios[0];
    //para el máximo
    let maximoAnio = anioActual;
    let contadorMax = 0;

    for (let i=0; i<anios.length; i++){
        if (anios[i] === anioActual){
            contador = contador + 1;
        } else {
            if (contador > contadorMax){
                contadorMax = contador;
                maximoAnio = anioActual;
            };
            contador = 1;
            anioActual = anios[i];
        };
    };

    console.log("El año de publicación más frecuente es: " + maximoAnio + " con " + contadorMax + " apariciones.");

    //✓Diferencia en años entre el libro más antiguo y el más nuevo.
    let aniosLibros = [];
    //guardo los años de los libros en un array
    libros.map(libro => aniosLibros.push(libro.anio));
    //console.log(aniosLibros);
 
    // Busco el año del libro más nuevo (anioMax) y el año del libro más antiguo (anioMin).Uso Math.max y Math.min
    let anioMax = Math.max.apply(null, aniosLibros);
    let anioMin = Math.min.apply(null, aniosLibros);
    
    console.log("La diferencia en años entre el libro más antiguo y el más nuevo es de " + (anioMax-anioMin));

};

/* PUNTO 8: MANEJO DE CADENAS

a) Crear una función normalizarDatos() que utilice métodos de strings para:
✔ Convertir todos los títulos a mayúsculas.
✔ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✔ Formatear los emails de los usuarios a minúsculas
*/

function normalizarDatos(){

    // Libros
    libros = libros.map(libro => {
        return {
            id: libro.id,
            titulo: libro.titulo.toUpperCase(),
            autor: libro.autor.trim().toLowerCase(),
            anio: libro.anio,
            genero: libro.genero,
            disponible: libro.disponible
        };
    });

    // Usuarios
    usuarios = usuarios.map(usuario => {
        return {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email.toLowerCase(),
            librosPrestados: usuario.librosPrestados 
        };
    });

};

/* PUNTO 9: INTERFAZ DE USUARIO POR CONSOLA

a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando prompt().
El menú debe incluir opciones para todas las funcionalidades anteriores y
utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
*/

let sigue = true; 

const prompt = require("prompt-sync")({ sigint: true });

function seguirPrograma(){
    console.log("Para salir del programa, presione 1. Para volver al menu principal, presione cualquier otra tecla.");
    let opc = parseInt(prompt());
    if (opc === 1){
        sigue = false;
    };
};

function menuPrincipal(){
    console.log("-----------------------------------------------");
    console.log("1. AGREGAR UN LIBRO");
    console.log("2. BUSCAR UN LIBRO");
    console.log("3. ORDENAR LIBROS");
    console.log("4. BORRAR UN LIBRO");
    console.log("5. REGISTRAR UN NUEVO USUARIO");
    console.log("6. VER TODOS LOS USUARIOS");
    console.log("7. BUSCAR UN USUARIO");
    console.log("8. BORRAR UN USUARIO");
    console.log("9. PRESTAR UN LIBRO");
    console.log("10. DEVOLVER UN LIBRO");
    console.log("11. GENERAR REPORTE DE LIBROS");
    console.log("12. LIBROS CON MÁS DE UNA PALABRA EN EL TÍTULO");
    console.log("13. ESTADÍSTICAS");
    console.log("14. NORMALIZAR DATOS");
    console.log("15. SALIR");
    console.log("-----------------------------------------------");

    //El usuario ingresa la opción
    let opcionSeleccionada = parseInt(prompt("Ingrese el número de la opción que desea ejecutar: "));

    switch(opcionSeleccionada){
        case 1:
            //Agregar Libro
            let id = parseInt(prompt("Ingrese el id del libro: "));
            let titulo = prompt("Ingrese el título del libro: ");
            let autor = prompt("Ingrese el autor: ");
            let anio= parseInt(prompt("Ingrese el año de publicación: "));
            let genero = prompt("Ingrese el genero del libro: ");
            agregarLibro(id, titulo, autor, anio, genero);
            seguirPrograma();
            break;
        case 2:
            //Buscar un Libro
            console.log("1. Buscar libro por su título: ");
            console.log("2. Buscar libros por autor: ");
            console.log("3. Buscar libros por género: ");
            let opc = parseInt(prompt("Ingrese la opción del criterio para buscar el libro: "));
            if (opc === 1) {
                let tituloBuscado = prompt("Ingrese el título del libro: ");
                buscarLibro("titulo", tituloBuscado);
            } else if (opc ===2) {
                let autorBuscado = prompt("Ingrese el autor: ");
                buscarLibro("autor", autorBuscado);
            } else if (opc === 3){
                let generoBuscado = prompt("Ingrese el género: ");
                buscarLibro("genero", generoBuscado);
            } else {
                console.log("La opción no es correcta");
            };
            seguirPrograma();
            break;
        case 3:
            //Ordenar Libros
            console.log("1. Ordenar libros por su título: ");
            console.log("2. Ordenar libros por año de publicación: ");
            let criterioDeOrden = parseInt(prompt("Ingrese la opción del criterio para buscar el libro: "));
            if (criterioDeOrden === 1) {
                ordenarLibros("titulo");
            } else if (criterioDeOrden ===2) {
                ordenarLibros("anio");
            } else {
                console.log("La opción no es correcta");
            };
            seguirPrograma();
            break;          
        case 4:
            //Borrar in Libro
            let idLibroABorrar = parseInt(prompt("Ingrese el id del libro que desea elimminar: "));
            borrarLibro(idLibroABorrar);
            seguirPrograma();
            break;
        case 5:
            //Registrar un nuevo usuario
            let nombreUsuario = prompt("Ingrese el nombre del usuario: ");
            let mailUsuario = prompt("Ingrese el mail del usuario: ");
            registrarUsuario(nombreUsuario, mailUsuario);
            seguirPrograma();
            break;
        case 6:
            //Mostrar todos los usuarios
            mostrarTodosLosUsuarios();
            seguirPrograma();
            break;
        case 7:
            //Buscar un usuario
            let mailUsuarioBuscado = prompt("Ingrese el mail del usuario: ");
            buscarUsuario(mailUsuarioBuscado);
            seguirPrograma();
            break;
        case 8:
            //Borrar un usuario
            let nombreEliminado = prompt("Ingrese el nombre del usuario: ");
            let mailEliminado = prompt("Ingrese el mail del usuario: ");
            borrarUsuario(nombreEliminado, mailEliminado);
            seguirPrograma();
            break;
        case 9:
            //Prestar un Libro
            let idLibroPrestamo = parseInt(prompt("Ingrese el id del libro: "));
            let idUsuarioPrestamo = parseInt(prompt("Ingrese el id del usuario: "));
            prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
            //console.log(libros);
            seguirPrograma();
            break;
        case 10:
            //Devolver un Libro
            let idLibroDevolucion = parseInt(prompt("Ingrese el id del libro: "));
            let idUsuarioDevolucion = parseInt(prompt("Ingrese el id del usuario: "));
            devolverLibro(idLibroDevolucion, idUsuarioDevolucion);
            //console.log(libros);
            seguirPrograma();
            break;
        case 11:
            //Generar reporte de Libros
            generarReporteLibros();
            seguirPrograma();
            break;
        case 12:
            //Libros con más de una palabra en el título
            librosConPalabrasEnTitulo();
            seguirPrograma();
            break;
        case 13:
            //Estadísticas
            calcularEstadisticas();
            seguirPrograma();
            break;
        case 14:
            //Normalizar Datos
            normalizarDatos();
            console.log("Los datos fueron normalizados");
            seguirPrograma();
            break;
        case 15:
            sigue = false;
            console.log("-----------------Saliendo del programa-----------------")
            break;
        default:
            console.log("La opción ingresada no es correcta.");
            seguirPrograma();
            break;
    };
};

while (sigue){ 
    menuPrincipal();
};
