# Backend - Encuestas

Este proyecto es el backend de la aplicación de encuestas, desarrollado con Node.js, Express y MongoDB, usando TypeScript.
Se conecta con el frontend:
https://github.com/Andrezgrondona/surveys-frontend



# Tecnologías

Node.js

Express

TypeScript

MongoDB 

CORS

# Endpoints principales


GET /api/surveys - Obtener todas las encuestas

POST /api/surveys - Crear una encuesta

PUT /api/surveys/:id - Actualizar una encuesta

DELETE /api/surveys/:id - Eliminar una encuesta

Preguntas

GET /api/questions/:surveyId - Obtener preguntas de una encuesta

POST /api/questions - Crear pregunta

PUT /api/questions/:id - Actualizar pregunta

DELETE /api/questions/:id - Eliminar pregunta

Respuestas

POST /api/answers - Enviar respuestas de un usuario

GET /api/results/:surveyId - Obtener resultados agregados de una encuesta

# Configuración del .env
-Para esta prueba técnica, el archivo .env quedó configurado de la siguiente manera:

-MONGO_URI=mongodb+srv://Agrondona:SOgi4u8X2mKJJR2J@cluster0.a4ovnle.mongodb.net/?appName=Cluster0



-⚠️ Nota: Esta URI de MongoDB está configurada para fines de prueba técnica. En un entorno real, se debe reemplazar por credenciales privadas y seguras.

# Pruebas en POSTMAN
-Abre Postman y crea una nueva colección o request.

Ejemplo de uso:

Obtener todas las encuestas

GET http://localhost:4000/api/surveys


Crear una encuesta

POST http://localhost:4000/api/surveys
Body (JSON):
{
  "title": "Mi nueva encuesta",
  "description": "Descripción de la encuesta",
  "color": "blue"
}

# Instalación

```bash
-Clona el repositorio


- Instala las dependencias
npm install

- Corre la aplicación 
npm start



