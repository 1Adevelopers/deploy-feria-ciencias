## Evidencia Valorativa Nro 1
# jueves, 16 abril 2026

# 🌱 FLORAPP - Concientización sobre Biodiversidad y Deforestación

##  Descripción del Proyecto

FLORAPP es una aplicación web educativa orientada a niños y jóvenes, cuyo objetivo es fomentar la concientización sobre la biodiversidad y la deforestación en la provincia de Córdoba.

El proyecto surge a partir de la problemática de que la educación ambiental muchas veces no logra captar la atención de los niños, debido a que se presenta de forma poco interactiva o difícil de comprender.

Para resolver esto, FLORAPP propone una experiencia basada en el aprendizaje lúdico, donde los usuarios pueden aprender sobre flora autóctona mediante juegos, fichas visuales y cuentos interactivos.

---

## ⚙️ Tecnologías utilizadas

* Frontend: Angular
* Backend: Django Rest Framework
* Base de datos: MySQL

---

## 🚀 Instrucciones de instalación

### 🔹 Clonar repositorio

git clone https://github.com/1Adevelopers/moduloweb.git
cd moduloweb

---

### 🔹 Frontend (Angular)

Abrir la terminal y ejecutar:

npm install -g @angular/cli

Verificar instalación:

ng version
---

### 🔹 Acceder al proyecto frontend
cd Fronted
---

### 🔹 Instalar Dependencias
npm install
---

### 🔹Ejecutar la aplicación
ng serve
Abrir el navegador: http://localhost:4200
---

### 🔹 Backend (Django)

cd backend

Crear entorno virtual:
python -m venv env

Activar entorno:
env\Scripts\activate

Instalar dependencias:
pip install -r requirements.txt

Migraciones:
python manage.py migrate

Ejecutar servidor:
python manage.py runserver

Acceder en: http://127.0.0.1:8000

---

## 🧪 Uso básico

* El usuario accede a la plataforma desde el navegador
* Puede visualizar fichas educativas de flora autóctona
* Puede jugar al juego de memoria y obtener puntaje
* Puede ingresar un nombre temporal para aparecer en la tabla de clasificación
* Puede explorar cuentos interactivos educativos

Los administradores y docentes pueden gestionar el contenido del sistema mediante inicio de sesión.

---

## 📋 Lista de Requerimientos

### ✅ Requerimientos Funcionales (RF)

* **RF01:** El sistema deberá permitir el inicio de sesión de usuarios administradores y docentes, quienes podrán gestionar el contenido educativo del sitio.
Esto evita cuentas de niños (y cubre legalmente).
* **RF02:** El sistema deberá mostrar fichas ilustradas de árboles y plantas autóctonas, donde el frente muestre la imagen y el reverso contenga información educativa.
* **RF03:** El sistema deberá ofrecer un juego de memoria reutilizando las fichas educativas, asignando puntaje al usuario según aciertos y tiempo de resolución.
* **RF04:** El sistema deberá permitir que el usuario ingrese un nombre temporal o apodo al finalizar el juego y almacenar su puntaje en una tabla pública de clasificación visible para todos.
* **RF05:** El sistema deberá presentar cuentos interactivos con ilustraciones y texto breve, permitiendo avanzar mediante clics en botones como “Siguiente” hasta completar la historia.

---

### 🔒 Requerimientos No Funcionales (RNF)

* **RNF01:** La interfaz deberá ser simple, intuitiva y orientada a niños.
* **RNF02:** El sistema deberá ser responsive (adaptable a distintos dispositivos).
* **RNF03:** El tiempo de carga deberá ser menor a 3 segundos.
* **RNF04:** No se solicitarán datos personales de menores.
* **RNF05:** El sistema deberá estar disponible 24/7.

---
