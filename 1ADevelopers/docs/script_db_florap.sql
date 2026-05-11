CREATE DATABASE florap;
USE florap;

-- =========================
-- TABLA ROL
-- =========================

CREATE TABLE rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL UNIQUE
);

-- =========================
-- TABLA USUARIO
-- =========================

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    apellido VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL UNIQUE,

    contrasena VARCHAR(255) NOT NULL,

    rol_id INT NOT NULL,

    FOREIGN KEY (rol_id)
    REFERENCES rol(id)
);

-- =========================
-- TABLA CATEGORIA ESPECIE
-- =========================

CREATE TABLE categoria_especie (
    id INT AUTO_INCREMENT PRIMARY KEY,

    categoria VARCHAR(50) NOT NULL UNIQUE,

    descripcion TEXT
);

-- =========================
-- TABLA ESPECIE
-- =========================

CREATE TABLE especie (
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre_comun VARCHAR(100) NOT NULL UNIQUE,

    nombre_cientifico VARCHAR(150) NOT NULL UNIQUE,

    descripcion TEXT NOT NULL,

    categoria_id INT NOT NULL,

    usuario_id INT NOT NULL,

    FOREIGN KEY (categoria_id)
    REFERENCES categoria_especie(id),

    FOREIGN KEY (usuario_id)
    REFERENCES usuario(id)
);

-- =========================
-- TABLA IMAGEN ESPECIE
-- =========================

CREATE TABLE imagen_especie (
    id INT AUTO_INCREMENT PRIMARY KEY,

    especie_id INT NOT NULL,

    url VARCHAR(500) NOT NULL,

    fecha_subida DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (especie_id)
    REFERENCES especie(id)
);

-- =========================
-- TABLA CONTACTO
-- =========================

CREATE TABLE contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL,

    mensaje TEXT NOT NULL,

    fecha_envio DATETIME DEFAULT CURRENT_TIMESTAMP,

    leido BOOLEAN DEFAULT FALSE
);

-- =========================
-- INSERT ROLES
-- =========================

INSERT INTO rol (nombre_rol)
VALUES
('docente'),
('admin');

-- =========================
-- INSERT USUARIOS
-- =========================

INSERT INTO usuario (
    nombre,
    apellido,
    email,
    contrasena,
    rol_id
)
VALUES
(
    'Juan',
    'Perez',
    'docente@florap.com',
    '123456',
    1
),
(
    'Maria',
    'Gomez',
    'admin@florap.com',
    '123456',
    2
);

-- =========================
-- INSERT CATEGORIAS
-- =========================

INSERT INTO categoria_especie (
    categoria,
    descripcion
)
VALUES
(
    'arbol',
    'Especies arboreas'
),
(
    'arbusto',
    'Especies arbustivas'
),
(
    'hierba',
    'Especies herbaceas'
);

-- =========================
-- INSERT ESPECIES
-- =========================

INSERT INTO especie (
    nombre_comun,
    nombre_cientifico,
    descripcion,
    categoria_id,
    usuario_id
)
VALUES
(
    'Lapacho',
    'Tabebuia',
    'Arbol nativo de flores rosadas',
    1,
    1
),
(
    'Jarilla',
    'Larrea divaricata',
    'Arbusto de zonas aridas',
    2,
    1
);

-- =========================
-- INSERT IMAGENES
-- =========================

INSERT INTO imagen_especie (
    especie_id,
    url
)
VALUES
(
    1,
    'https://ejemplo.com/lapacho.jpg'
),
(
    2,
    'https://ejemplo.com/jarilla.jpg'
);

