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
    email VARCHAR(254) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    rol_id INT NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES rol(id)
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
    email VARCHAR(254) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE,
    respondido BOOLEAN DEFAULT FALSE
);

-- ===================================================
-- DATOS DE DEMOSTRACION
-- ===================================================

-- ROLES

INSERT INTO rol (nombre_rol)
VALUES
('docente'),
('admin');

-- USUARIOS

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

-- CATEGORIAS

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
),
(
    'trepadora',
    'Especies trepadoras'
),
(
    'otro',
    'Otras especies nativas'
);

-- ESPECIES

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
    'Tabebuia impetiginosa',
    'Arbol nativo reconocido por sus flores rosadas.',
    1,
    1
),
(
    'Jarilla',
    'Larrea divaricata',
    'Arbusto caracteristico de zonas aridas.',
    2,
    1
),
(
    'Espinillo',
    'Vachellia caven',
    'Arbol espinoso de flores amarillas aromaticas.',
    1,
    1
),
(
    'Peperina',
    'Minthostachys verticillata',
    'Hierba aromatica tradicional de las sierras de Cordoba.',
    3,
    1
);

-- MENSAJES DE CONTACTO

INSERT INTO contacto (
    nombre,
    email,
    mensaje,
    leido,
    respondido
)
VALUES
(
    'Carlos Ruiz',
    'carlos@gmail.com',
    'Excelente informacion sobre las especies nativas.',
    FALSE,
    FALSE
),
(
    'Ana Lopez',
    'ana@gmail.com',
    'Me gustaria conocer mas sobre las plantas de Cordoba.',
    FALSE,
    FALSE
),
(
    'Pedro Martinez',
    'pedro@gmail.com',
    'La aplicacion resulta muy util para estudiantes.',
    TRUE,
    FALSE
);