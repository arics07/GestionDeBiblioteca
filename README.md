# 📚 Sistema de Gestión de Biblioteca

Este proyecto es un sistema interactivo de gestión de libros y usuarios desarrollado en **JavaScript** que funciona desde la consola, simulando una biblioteca donde se pueden registrar usuarios, agregar libros, gestionar préstamos, y realizar estadísticas sobre los datos.

---

## 📌 Contenido

- [Características principales](#características-principales)
- [Requisitos](#requisitos)
- [Instrucciones de uso](#instrucciones-de-uso)
- [Estructura de datos](#estructura-de-datos)
- [Funcionalidades](#funcionalidades)
- [Extras implementados](#extras-implementados)

---

## 🛠️ Características principales

- Alta, baja y modificación de libros.
- Registro y eliminación de usuarios.
- Búsquedas por título, autor o género.
- Préstamos y devoluciones de libros.
- Generación de reportes y estadísticas.
- Normalización de datos.
- Interfaz por consola amigable.

---

## 💻 Requisitos

- Node.js instalado.
- Editor de texto o entorno de desarrollo (como VS Code).
- Módulo `prompt-sync` para capturar input desde consola.

Instalación del módulo:

```bash
npm install prompt-sync
```

---

## ▶️ Instrucciones de uso

1. Clonar el repositorio o copiar los archivos.
2. Instalar `prompt-sync` si aún no está instalado.
3. Ejecutar el programa:

```bash
node nombreDelArchivo.js
```

4. Seguir las instrucciones del **menú interactivo** para navegar por las distintas funcionalidades.

---

## 📁 Estructura de datos

### Libros

Cada libro es un objeto con:

- `id`: número identificador.
- `titulo`: string.
- `autor`: string.
- `anio`: año de publicación.
- `genero`: género literario.
- `disponible`: booleano (si está disponible para préstamo).

### Usuarios

Cada usuario contiene:

- `id`: número identificador.
- `nombre`: string.
- `email`: string.
- `librosPrestados`: array con los IDs de los libros prestados.

---

## ⚙️ Funcionalidades principales

### 1. Gestión de Libros

- `agregarLibro()`
- `buscarLibro()`
- `ordenarLibros()`
- `borrarLibro()`

### 2. Gestión de Usuarios

- `registrarUsuario()`
- `mostrarTodosLosUsuarios()`
- `buscarUsuario()`
- `borrarUsuario()`

### 3. Préstamos

- `prestarLibro()`
- `devolverLibro()`

### 4. Reportes

- `generarReporteLibros()`: total, prestados, por género, más antiguo/nuevo.
- `librosConPalabrasEnTitulo()`: libros con títulos de más de una palabra.
- `calcularEstadisticas()`: promedio de años, año más frecuente, diferencia máxima.

---

## ✨ Extras implementados

- Validación de entradas en funciones como búsqueda y préstamo.
- Uso de métodos avanzados como `.map()`, `.filter()`, `.reduce()`.
- Normalización de datos (`normalizarDatos()`).
- Interfaz por consola completa y dinámica (`menuPrincipal()`).
- Comentarios detallados en el código para mayor claridad.

---

## 🙋‍♀️ Autora

**Ariadna Salomone**  
