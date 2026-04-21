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
| RF01 | Inicio de sesión para administradores y docentes que gestionan el contenido educativo. |
| RF02 | Fichas ilustradas de árboles y plantas autóctonas con imagen al frente e información educativa al dorso. |
| RF03 | Juego de memoria reutilizando las fichas, con puntaje según aciertos y tiempo de resolución. |
| RF04 | Ingreso de nombre o apodo al finalizar el juego, con almacenamiento del puntaje en tabla pública de clasificación. |
| RF05 | Cuentos interactivos con ilustraciones y texto breve, navegables mediante botones. |

### 🔒 No Funcionales

| ID | Descripción |
|---|---|
| RNF01 | Interfaz simple e intuitiva, orientada a niños. |
| RNF02 | Diseño responsive (adaptable a distintos dispositivos). |
| RNF03 | Tiempo de carga menor a 3 segundos. |
| RNF04 | No se solicitan datos personales de menores. |
| RNF05 | Disponibilidad del sistema 24/7. |

---

## 📅 Información académica

**Evidencia de Apendizaje N.º 1** — jueves, 16 de abril de 2026

Modulo Promador Web - TSDWAD - ISPC
