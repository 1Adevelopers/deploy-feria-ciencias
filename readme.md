# 🌱 FLORAPP
### Concientización sobre Biodiversidad y Deforestación
Aplicación web educativa orientada a niños y jóvenes de la provincia de Córdoba.

---

## 📖 Descripción

FLORAPP busca fomentar la concientización ambiental a través del aprendizaje lúdico. La educación ambiental tradicional muchas veces no logra captar la atención de los más jóvenes por presentarse de forma poco interactiva. FLORAPP resuelve esto ofreciendo una experiencia basada en juegos, fichas visuales y cuentos interactivos sobre flora autóctona.

---

## 👥 Integrantes

| Apellido | Nombre | Rol |
|---|---|---|
| Balbastro | Carlos Eduardo | Team Dev |
| Bentivoglio | Ignacio Martín | Team Dev |
| Bosque | Ruben Darío | Team Dev |
| Fernández | Kiara | Scrum Master |
| Heredia | Eric Víctor Hugo | Team Dev |
| Lorenzati | María Florencia | Team Dev |

---

## ⚙️ Tecnologías utilizadas

| Capa | Tecnología |
|---|---|
| Frontend | Angular |
| Backend | Django REST Framework |
| Base de datos | MySQL |

---

## 🚀 Instalación y configuración

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
cd Fronted

# Instalar dependencias
npm install

# Ejecutar la aplicación
ng serve
```

🌐 Acceder en: [http://localhost:4200](http://localhost:4200)

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

🌐 Acceder en: [http://127.0.0.1:8000](http://127.0.0.1:8000)

#### Cargar datos de prueba (opcional)

```bash
python manage.py loaddata florapp/fixtures/especies.json
```

📦 Endpoint disponible: [http://127.0.0.1:8000/api/especies/](http://127.0.0.1:8000/api/especies/)

---

## 🧪 Uso básico

- Acceder a la plataforma desde cualquier navegador.
- Explorar **fichas educativas** de flora autóctona.
- Jugar al **juego de memoria** y obtener puntaje.
- Ingresar un apodo para aparecer en la **tabla de clasificación**.
- Leer **cuentos interactivos** educativos.

> Los **administradores y docentes** pueden gestionar el contenido del sistema mediante inicio de sesión.

---

## 📋 Requerimientos

### ✅ Funcionales

| ID | Descripción |
|---|---|
| RF01 | El sistema debe mostrar una página de home con mensaje de bienvenida que invita al usuario a explorar la página y acceso a las secciones principales. |
| RF02 | El sistema debe mostrar una sección “Quiénes Somos” con información sobre la misión del proyecto. |
| RF03 | El sistema debe permitir al administrador o docente iniciar sesión utilizando una dirección de correo electrónico válida y una contraseña de mínimo 6 caracteres. |
| RF04 | El sistema debe mostrar una galería de fichas con fotos de especies en formato tarjeta. |
| RF05 | El sistema debe permitir al administrador o docente gestionar el contenido (especies, imágenes, usuarios, etc) de acuerdo a los permisos de cada tipo de usuario. |
| RF06 | El sistema debe permitir al usuario visitante enviar consultas generales mediante un formulario de contacto. |

### 🔒 No Funcionales

| ID | Descripción |
|---|---|
| RNF01 | El sistema debe adaptarse, respondiendo dependiendo del tamaño de pantalla, del cual el usuario visita la página. |
| RNF02 | El sistema debe cargar las secciones principales sin exceder los 3 segundos. |
| RNF03 | El sistema no debe solicitar ni almacenar datos personales de los usuarios visitantes fuera del formulario de contacto. |
| RNF04 | La interfaz deberá ser simple, intuitiva, utilizando botones grandes, colores amigables y navegación sencilla. |

---

## 📅 Información académica

**Evidencia de Apendizaje N.º 1** — jueves, 16 de abril de 2026

Modulo Promador Web - TSDWAD - ISPC

**Evidencia de Apendizaje N.º 2** — martes, 12 de mayo de 2026

Modulo Promador Web - TSDWAD - ISPC