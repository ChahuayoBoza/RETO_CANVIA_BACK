-- CREAR UNA BASE DE DATOS END POSTGRESQL (OJO: VERIFICAR LA CADENA DE CONEXION EN EL ARCHIVO .ENV)
CREATE DATABASE auna;

-- SELECCIONAR BASE DE DATOS Y CREAR LA TABLA

CREATE TABLE especialidad (
  id SERIAL,
  nombre VARCHAR(200),
  descripcion VARCHAR(500),
  estado BOOLEAN DEFAULT TRUE
);

-- INSERTAR REGISTROS DE PRUEBA
INSERT INTO especialidad(nombre, descripcion)
VALUES
  ('OFTALMOLOGÍA', 'especialidad médica dentro de la medicina que estudia y trata las enfermedades del ojo humano y sus anexos. Teniendo como misión el diagnóstico de las enfermedades oculares, trastornos y dolencias del ojo.'),
  ('CIRUGÍA PEDIÁTRICA', 'Atiende el manejo del dolor tanto agudo como crónico en los niños.  Esta especialidad médica trata toda patología quirúrgica congénita, y aquellas que se presentan durante el desarrollo de la vida humana desde el nacimiento hasta los 15 años. '),
  ('CARDIOLÓGIA', 'Rama de la medicina que se encarga del  estudio, diagnóstico, tratamiento y prevención de  las enfermedades del corazón y los vasos sanguíneos, es decir, del aparato cardiovascular. Los médicos cardiólogos son los especialistas en cardiología.'),
  ('CARDIOLÓGIA', 'Rama de la medicina que se encarga del  estudio, diagnóstico, tratamiento y prevención de  las enfermedades del corazón y los vasos sanguíneos, es decir, del aparato cardiovascular. Los médicos cardiólogos son los especialistas en cardiología.'),
  ('NEUROCIRUGÍA', 'Especialidad médica que se encarga de tratar quirúrgicamente enfermedades del sistema nervioso y de la columna vertebral. Es decir, enfermedades del cerebro, cerebelo, tronco encefálico, médula espinal, nervios (craneales o periféricos) y lesiones en la columna vertebral. '),
  ('DERMATOLOGÍA', 'Especialidad médica encargada de estudiar la estructura y funciones de la piel, así como los problemas y enfermedades que la afectan. ');

-- VERIFICAR REGISTROS CREADOS
SELECT *
    FROM especialidad;
