/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       required:
 *         - refugee_id
 *         - name
 *         - age
 *         - species
 *         - health_status
 *         - description
 *         - adoption_status
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único del animal
 *           example: "673cdedbe27d2bc143950052"
 *         refugee_id:
 *           type: string
 *           description: El ID del refugio al que pertenece el animal
 *           example: "64d0f4c2b45302e4a7d3bc35"
 *         name:
 *           type: string
 *           description: El nombre del animal
 *           example: "Luna"
 *         age:
 *           type: integer
 *           description: La edad del animal en años
 *           example: 3
 *         species:
 *           type: string
 *           description: La especie del animal (e.g., Perro, Gato, Conejo)
 *           example: "Gato"
 *         breed:
 *           type: string
 *           description: La raza del animal
 *           example: "Siamés"
 *         health_status:
 *           type: string
 *           description: El estado de salud del animal
 *           example: "Esterilizado, sin enfermedades conocidas"
 *         description:
 *           type: string
 *           description: Descripción breve sobre el animal
 *           example: "Gata tranquila y cariñosa que disfruta de los rayos del sol."
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de URLs de fotos del animal
 *           example: ["https://example.com/images/luna1.jpg", "https://example.com/images/luna2.jpg"]
 *         adoption_status:
 *           type: string
 *           description: El estado de adopción del animal
 *           enum:
 *             - disponible
 *             - en proceso
 *             - adoptado
 *           example: "en proceso"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro del animal
 *           example: "17/11/2024 05:05"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Última fecha de actualización del registro del animal
 *           example: "17/11/2024 05:05"
 *       description: Informacion sobre la entidad Animal.
 * 
 *     AnimalDto:
 *       type: object
 *       required:
 *         - refugee_id
 *         - name
 *         - age
 *         - species
 *         - health_status
 *         - description
 *         - adoption_status
 *       properties:
 *         refugee_id:
 *           type: string
 *           description: |
 *             El ID del refugio al que pertenece el animal.
 *             - Debe ser un ID único válido (e.g., MongoDB ObjectId).
 *             - Longitud exacta: 24 caracteres hexadecimales.
 *           example: "64d0f4c2b45302e4a7d3bc35"
 *         name:
 *           type: string
 *           description: |
 *             El nombre del animal.
 *             - Longitud mínima: 2 caracteres.
 *             - Longitud máxima: 30 caracteres.
 *           minLength: 2
 *           maxLength: 30
 *           example: "Luna"
 *         age:
 *           type: integer
 *           description: |
 *             La edad del animal en años.
 *             - Debe ser un número entero mayor o igual a 0.
 *             - Edad máxima permitida: 30 años.
 *           minimum: 0
 *           maximum: 30
 *           example: 3
 *         species:
 *           type: string
 *           description: |
 *             La especie del animal (e.g., Perro, Gato, Conejo).
 *             - Longitud mínima: 3 caracteres.
 *             - Longitud máxima: 20 caracteres.
 *           minLength: 3
 *           maxLength: 20
 *           example: "Gato"
 *         breed:
 *           type: string
 *           description: La raza del animal (opcional)
 *           example: "Siamés"
 *         health_status:
 *           type: string
 *           description: |
 *             El estado de salud del animal.
 *             - Longitud mínima: 10 caracteres.
 *             - Longitud máxima: 100 caracteres.
 *           minLength: 10
 *           maxLength: 100
 *           example: "Esterilizado, sin enfermedades conocidas"
 *         description:
 *           type: string
 *           description: |
 *             Descripción breve sobre el animal.
 *             - Longitud mínima: 10 caracteres.
 *             - Longitud máxima: 200 caracteres.
 *           minLength: 10
 *           maxLength: 200
 *           example: "Gata tranquila y cariñosa que disfruta de los rayos del sol."
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *             description: URL de una foto del animal.
 *             format: uri
 *             example: "https://example.com/images/luna1.jpg"
 *           description: |
 *             Lista de URLs de fotos del animal.
 *             - Cada URL debe ser válida y accesible.
 *           maxItems: 5
 *           example: ["https://example.com/images/luna1.jpg", "https://example.com/images/luna2.jpg"]
 *         adoption_status:
 *           type: string
 *           description: |
 *             El estado de adopción del animal.
 *             - Valores permitidos:
 *               - disponible: El animal está listo para ser adoptado.
 *               - en proceso: El proceso de adopción está en curso.
 *               - adoptado: El animal ya ha sido adoptado.
 *           enum:
 *             - disponible
 *             - en proceso
 *             - adoptado
 *           example: "en proceso"
 *       description: Información sobre campos para registrar un Animal.
 */
