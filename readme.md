# FLORAPP
### Concientización sobre Biodiversidad y Deforestación
Aplicación web educativa orientada a niños y jóvenes de la provincia de Córdoba.

---

## Descripción

FLORAPP busca fomentar la concientización ambiental a través del aprendizaje lúdico. La educación ambiental tradicional muchas veces no logra captar la atención de los más jóvenes por presentarse de forma poco interactiva. FLORAPP resuelve esto ofreciendo una experiencia basada en juegos, fichas visuales y cuentos interactivos sobre flora autóctona.

---

## Integrantes

| Apellido | Nombre | Rol |
|---|---|---|
| Balbastro | Carlos Eduardo | Team Dev |
| Bentivoglio | Ignacio Martín | Team Dev |
| Bosque | Ruben Darío | Team Dev |
| Fernández | Kiara | Scrum Master |
| Heredia | Eric Víctor Hugo | Team Dev |
| Lorenzati | María Florencia | Team Dev |

---

## Tecnologías utilizadas

| Capa | Tecnología |
|---|---|
| Frontend | Angular |
| Backend | Django REST Framework |
| Base de datos | MySQL |

---

## Instalación y configuración

### 1. Clonar el repositorio

```bash

git clone https://github.com/1Adevelopers/moduloweb.git

cd moduloweb

```

---

### 2. Frontend (Angular)

```bash

# Instalar Angular CLI globalmente (solo la primera vez)
npm install -g @angular/cli

# Verificar instalación
ng version

# Acceder al directorio del frontend
cd Frontend

# Instalar dependencias
npm install

# Ejecutar la aplicación
ng serve

```

Acceder en: [http://localhost:4200](http://localhost:4200)

---

### 3. Backend (Django)

```bash

# Acceder al directorio del backend
cd backend

# Crear entorno virtual
python -m venv env

# Activar entorno virtual
# En Windows:
env\Scripts\activate
# En Linux/macOS:
source env/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Aplicar migraciones
python manage.py migrate

# Ejecutar el servidor
python manage.py runserver

```

Acceder en: [http://127.0.0.1:8000](http://127.0.0.1:8000)

```bash

> **Importante:**  Antes de correr FlorApp, es necesario cargar estos fixtures:

    cd 1ADevelopers/backend

    - En la consola escribir:
        python manage.py loaddata categorias.json
        python manage.py loaddata usuarios.json 

---

## Carga de imágenes de especies


Para probar la carga de imágenes, pueden utilizar los siguientes enlaces directos:

- Pasionaria Azul: https://i.ibb.co/FLmR4LmT/Pasionaria-Azul3.webp  
- Peperina: https://i.ibb.co/HLS3SczY/Peperina.webp  
- Sauce Criollo: https://i.ibb.co/RmmntfN/saucecriollo-02.webp  
- Chañar: https://i.ibb.co/BKY1b1q4/cha-ar-10.webp  -   https://i.ibb.co/qYC6nMYV/cha-ar-09.webp  
- Quebracho Blanco: https://i.ibb.co/NgkL9GBY/quebrachoblanco-07.webp 

Pueden encontrar más imágenes en nuestro álbum público: [Álbum FlorApp](https://ibb.co/album/4sv2BV)

> **Nota importante:**

Para la carga, asegúrense siempre de seleccionar la opción **"Enlaces directos"**.  
Hemos consolidado estos recursos en un álbum propio para tener control sobre las rutas y evitar depender de fuentes externas, cumpliendo con las licencias de **Dominio Público** y **Creative Commons** de uso libre.  
Por el momento el sistema está configurado de esta manera, pero en próximos sprints revisaremos esta configuración.


```
# Endpoints Disponibles
 -Módulo Usuarios (api/usuarios/)
   - [http://127.0.0.1:8000/api/usuarios/usuarios/](http://127.0.0.1:8000/api/usuarios/usuarios/) - `Registro y listado general de usuarios.`
   - [http://127.0.0.1:8000/api/usuarios/usuarios/<int:pk>/](http://127.0.0.1:8000/api/usuarios/usuarios/<int:pk>) - `Detalle y ABM de un usuario específico`
   - [http://127.0.0.1:8000/api/usuarios/roles/](http://127.0.0.1:8000/api/usuarios/roles/) - `Listar roles del sistema.`
   - [http://127.0.0.1:8000/api/usuarios/login/](http://127.0.0.1:8000/api/usuarios/login/) - `Endpoint seguro de autenticación por método POST.`

 -Módulo Flora (api/flora/)
   - [http://127.0.0.1:8000/api/flora/especies/](http://127.0.0.1:8000/api/flora/especies/) - `Catálogo público de especies cargadas en el sistema`
   - [http://127.0.0.1:8000/api/flora/especies/<int:pk>/](http://127.0.0.1:8000/api/flora/especies/<int:pk>) - `Gestión y detalle de una especie por ID.`
   - [http://127.0.0.1:8000/api/flora/especies/mis-especies/](http://127.0.0.1:8000/api/especies/mis-especies/) - `Listado de plantas cargadas por el docente autenticado.`
   - [http://127.0.0.1:8000/api/flora/categorias/](http://127.0.0.1:8000/api/flora/categorias/) - `Listado de las categorías de las plantas`
   - [http://127.0.0.1:8000/api/flora/categorias/<int:pk>/](http://127.0.0.1:8000/api/flora/categorias/<int:pk>/) - `Detalle de categoria específica`

 -Módulo Interacciones (/api/interacciones/)
   - [http://127.0.0.1:8000/api/interacciones/](http://127.0.0.1:8000/api/interacciones/) - `Recepción de formulario de consulta pública del Home.`
 
 -Módulo Fichas (api/flora/)
   - [http://127.0.0.1:8000/api/flora/fichas/fichas/](http://127.0.0.1:8000/api/flora/fichas/fichas/) - `Catálogo de fichas`
   - [http://127.0.0.1:8000/api/flora/fichas/fichas/<int:pk>/](http://127.0.0.1:8000/api/flora/fichas/fichas/<int:pk>/) - `ABM para ficha detalle por ID`

---

## Uso básico

- Acceder a la plataforma desde cualquier navegador.
- El usuario **visitante**, puede enviar sus consultas desde el formulario directamente en home, sin necesidad de iniciar sesión.
- Explorar **fichas educativas** de flora autóctona, desde la galería, con filtros por categoría.
- **Iniciar sesión**, si ya tienes una cuenta.
- **Registrarse**, si aún no tienes cuenta.
- El usuario **docente**, puede añadir y visualizar sus propias plantas, modificarlas y eliminarlas.
- El usuario **administrador**, puede acceder a un panel de ABM para fichas y usuarios, a parte de recibir consultas del form de contacto.

> Los **administradores y docentes** pueden gestionar el contenido del sistema mediante inicio de sesión.

---

## Requerimientos

### Funcionales

| ID | Descripción |
|---|---|
| RF01 | El sistema debe mostrar una página de home con mensaje de bienvenida que invita al usuario a explorar la página y acceso a las secciones principales. |
| RF02 | El sistema debe mostrar una sección “Quiénes Somos” con información sobre la misión del proyecto. |
| RF03 | El sistema debe permitir al administrador o docente iniciar sesión utilizando una dirección de correo electrónico válida y una contraseña de mínimo 6 caracteres. |
| RF04 | El sistema debe mostrar una galería de fichas con fotos de especies en formato tarjeta. |
| RF05 | El sistema debe permitir al administrador o docente gestionar el contenido (especies, imágenes, usuarios, etc) de acuerdo a los permisos de cada tipo de usuario. |
| RF06 | El sistema debe permitir al usuario visitante enviar consultas generales mediante un formulario de contacto. |

### No Funcionales

| ID | Descripción |
|---|---|
| RNF01 | El sistema debe adaptarse, respondiendo dependiendo del tamaño de pantalla, del cual el usuario visita la página. |
| RNF02 | El sistema debe cargar las secciones principales sin exceder los 3 segundos. |
| RNF03 | El sistema no debe solicitar ni almacenar datos personales de los usuarios visitantes fuera del formulario de contacto. |
| RNF04 | La interfaz deberá ser simple, intuitiva, utilizando botones grandes, colores amigables y navegación sencilla. |

---

> Proyecto académico — Instituto Superior Politécnico Córdoba (ISPC) — Cohorte 2026