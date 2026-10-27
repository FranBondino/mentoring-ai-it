# Contenido Completo de Diapositivas — Sesión 1: Ecosistema IT, DevOps y Dinámicas de Equipos Ágiles

## Diapositiva 1 (slide1)

Mentoría Estratégica

De la Gestión Tradicional

a la Era de la IA

Cómo liderar, estructurar y desplegar productos de software en el nuevo ecosistema ágil y de Inteligencia Artificial. Tu hoja de ruta.

Sesión 1: Ecosistema IT, DevOps y Dinámicas de Equipos

1. DevOps & Cloud

2. IA & RAG

3. Agentes Autónomos

4. ROI, Evals & Entrevistas

---

## Diapositiva 2 (slide1b)

La Ola de la IA Generativa

Del software clásico al paper fundacional de 2017 que revolucionó la traducción y dio origen a todos los LLMs actuales:

1. Software Tradicional

Era Determinista (Pre-2017): Los programadores escriben reglas rígidas a mano (if / else). El sistema hace exactamente lo codificado: "si pasa A, ejecutá B". Control total, pero incapaz de comprender lenguaje humano o contexto ambiguo.

2. El Paper Base (2017) & ChatGPT

"Attention Is All You Need" (Google, 2017): El paper científico que nació para mejorar la traducción automática creando la arquitectura Transformer (la "T" de GPT). En Nov 2022, ChatGPT lleva ese motor al mundo entero.

3. Era de Sistemas con LLMs

2023 - Actualidad: Las empresas ya no construyen software clásico aislado. Integran LLMs vía API sobre bases de datos privadas (RAG) y agentes autónomos que comprenden contexto y ejecutan flujos de negocio.

El Hito Fundacional (2017) conectado con tu mundo: Todo el auge actual de la IA nació de un problema de traducción. En el paper "Attention Is All You Need" (Vaswani et al., 2017), ocho investigadores de Google inventaron el mecanismo de Self-Attention (Auto-Atención) para que una red neuronal pudiera leer una oración entera en simultáneo y entender cómo el contexto cambia el sentido de cada palabra.

---

## Diapositiva 3 (slide2)

La Regla de Oro

Para entender la Inteligencia Artificial, primero tenés que entender los cimientos del software tradicional.

El LLM es una API

No es magia libre flotando en la nube. Un modelo de lenguaje moderno se integra a las aplicaciones empresariales consumiéndose como un servicio web externo estructurado. Pensalo así.

El Contexto es una BD

La memoria de trabajo del modelo para los datos privados de la empresa se almacena e indexa mediante búsquedas semánticas en bases de datos vectoriales.

La Automatización es Código

Los flujos inteligentes y las decisiones autónomas que toma un agente de IA corren en un servidor tradicional, orquestados mediante código.

Filosofía del Programa: "No podés liderar ni gestionar proyectos de Inteligencia Artificial exitosos si primero no dominás cómo se construye, expone, versiona, despliega y monitorea el software moderno."

---

## Diapositiva 4 (slide3)

El Gran Salto Temporal

Para sonar actualizado en las entrevistas de IT, es clave que entiendas la profunda evolución del desarrollo de software de los últimos 10 años.

2012: Waterfall & Monolitos

Obsoleto

• Arquitectura: Un único bloque gigante acoplado.

• Servidores: Físicos y locales (On-Premise) en la empresa.

• Despliegues: Manuales y caóticos cada 3 meses.

• Cultura: Silos rígidos y aislados entre equipos.

2026: Cloud Native & Agile

Estándar Actual

• Arquitectura: Microservicios modulares comunicados por APIs.

• Servidores: Elásticos en la nube (AWS o Azure).

• Despliegues: Automatizados y continuos (múltiples al día).

• Cultura: DevOps de responsabilidad e integración total.

Glosario de Infraestructura (¿Qué significan en la práctica? Miralos acá:)

AWS / Cloud

Alquilás servidores de forma elástica en la nube de Amazon por segundo, evitando compras de hardware costoso.

Docker

Caja de embalaje cerrada para el software. Te garantiza que funcione igual en tu computadora o en cualquier servidor.

Kubernetes

Orquestador que coordina miles de contenedores: los reinicia si fallan y escala el tráfico automáticamente.

---

## Diapositiva 5 (slide4)

APIs: El Pegamento del Software

Una API permite que sistemas diferentes se conecten entre sí. Mirá esta analogía clásica para entenderlo rápido.

El Cliente

Frontend / App

El usuario interactúa con la interfaz gráfica. Abrís el menú digital en tu mesa y seleccionás el plato que querés ordenar.

El Mozo (La API)

REST API / JSON

Toma la orden estructurada del cliente, la traslada de forma segura a la cocina y regresa con el plato. Es el canal de comunicación.

La Cocina

Backend / Servidor / BD

Procesa la orden, tiene acceso directo a la despensa (Base de Datos) y tiene la lógica compleja para preparar lo que pediste.

---

## Diapositiva 6 (slide4b)

Verbos HTTP: El Vocabulario de las APIs

Las aplicaciones se comunican indicando acciones claras sobre los datos. Como Project Manager, tenés que entender qué hace cada una en la práctica.

GET

Consultar

Acción: Lee datos sin modificarlos.

Ejemplo: Cargar catálogo de productos.

Seguridad: Nunca uses GET para enviar contraseñas o datos sensibles.

POST

Crear

Acción: Guarda datos nuevos en la base de datos.

Ejemplo: Registrar usuario o procesar un pago.

Privacidad: Tus datos viajan ocultos y protegidos en el cuerpo del mensaje.

PUT

Actualizar

Acción: Editás un registro existente por completo.

Ejemplo: Modificar cantidades en el carrito.

Control: Modifica la información existente de forma limpia y directa.

DELETE

Eliminar

Acción: Borra datos de forma permanente.

Ejemplo: Dar de baja una suscripción.

Riesgo: Acción irreversible. Asegurate de que siempre requiera confirmación en la UI.

Ejemplos en la Práctica: ¿Qué viaja por la API cuando el usuario usa una App?

📱 1. Abrir perfil o historial

GET /api/proyectos?estado=activo

Trae la lista de proyectos en pantalla. Si refrescás 10 veces, no duplica ni cambia nada.

🛒 2. Crear ticket o enviar prompt

POST /api/tickets { "titulo": "Bug" }

Envía un JSON en el cuerpo y crea un registro nuevo en la BD (o envía un prompt a ChatGPT).

✏️ 3. Cambiar estado o dirección

PUT /api/tickets/42 { "estado": "Done" }

Busca el ticket #42 que ya existía en la base de datos y actualiza su estado a finalizado.

🗑️ 4. Quitar ítem o cancelar cuenta

DELETE /api/carrito/item/99

Apunta al ID específico (#99) y lo remueve de la base de datos tras confirmar en la pantalla.

---

## Diapositiva 7 (slide4c)

Códigos de Estado: El Semáforo de la Web

El servidor te responde con un código numérico estándar que te dice la salud del sistema y el impacto en tu negocio.

2xx

Success (Éxito de Negocio)

El servidor procesó la petición con éxito. La conversión es alta, la velocidad es óptima y tu cliente navega feliz y sin fricciones.

Operación Saludable

4xx

Client Error (Fricción en UX)

El cliente cometió un error o pidió algo inválido (ej. 404 Not Found). Si este número sube, tu interfaz es confusa; fijate cómo mejorarla.

Optimizar Usabilidad

5xx

Server Error (Pérdida Crítica)

El servidor falló de forma catastrófica (ej. 500 Server Error). El sistema está caído: perdés ventas y usuarios en tiempo real.

Alerta Roja / Caído

---

## Diapositiva 8 (slide5)

El Viaje de un Feature (CI/CD)

La automatización de despliegues es el corazón de DevOps. Mirá los pasos exactos que sigue una historia de usuario desde que la planeás hasta que llega a producción.

1. Jira Ticket

El PM define y refina Historias de Usuario.

2. Codificación

El desarrollador escribe la solución localmente.

3. CI (Pruebas)

Integración Continua: testeo automático en la nube.

4. CD (Deploy)

Entrega Continua: subida a Staging y Producción.

Hacé clic en cada paso del pipeline para ver la explicación detallada y tu rol como PM.

---

## Diapositiva 9 (slide5b)

Dinámica de Roles: El Ecosistema Startup

En empresas chicas y startups que crecen rápido, la regla de oro es: "todos hacen de todo". Olvidate de los silos: acá la velocidad manda sobre el proceso.

Full-Stack Developer

Frontend + Backend + Cloud

Project Manager / PO

Estrategia + Backlog + QA + Demo

QA / Tester Liviano

Validación manual rápida

Analista de Datos Gral.

BBDD + Métricas de Negocio

Full-Stack Developer: Un programador generalista que domina todo el stack tecnológico. Diseña la interfaz gráfica del usuario (Frontend) y escribe la lógica del servidor y APIs (Backend). Incluso suele configurar servidores básicos en AWS o Vercel (DevOps).

Canal del PM: Comunicación informal y directa (Slack sin intermediarios o charlas rápidas de pasillo). Las alineaciones son inmediatas y sin burocracia técnica.

---

## Diapositiva 10 (slide5c)

Dinámica de Roles: La Matriz Corporativa

En grandes corporaciones, la clave es la "especialización extrema". Olvidate de hacer de todo: cada miembro tiene una responsabilidad súper delimitada.

PM vs. PO

Estrategia vs. Sprints Jira

Especialistas Devs

FE, BE, Mobile + Tech Leads

QA Automation

Pruebas en Pipeline CI/CD

Data Stack Team

Data Engineers + Scientists

DevOps & SecOps

Nube dedicada + Ciberseguridad

PM vs. PO (Responsabilidades Separadas): El Project Manager (PM) lidera el roadmap a largo plazo, el ROI del producto y las alineaciones con directores corporativos. El Product Owner (PO) vive dentro del squad Scrum, escribe épicas e Historias de Usuario granulares y lidera las ceremonias diarias (Dailies, Refinement, Planning).

Canal del PM: El PM colabora de cerca con el PO para traducir la estrategia de negocio en trabajo ejecutable, sin entrometerse en el micromanagement diario del sprint.

---

## Diapositiva 11 (slide5d)

El PM en el Pipeline: Puntos de Intervención

No se escribe código — pero se bloquea o libera el pipeline en los momentos clave de decisión.

01

Jira Ticket

Acción del PM

Escribís las User Stories con criterios de aceptación nítidos. Si definís mal la base, todo lo que haga el equipo después va a fallar.

PM -   PO

02

Desarrollo

Acción del PM

Tenés que estar disponible para despejar dudas de negocio sin hacer micromanagement. El dev trabaja tranquilo en su rama aislada.

PM -   Tech Lead

03

CI / Tests

Acción del PM

Revisás con el QA Lead la cobertura de tests. Si el pipeline da rojo, la subida queda bloqueada: no se negocia la calidad.

PM -   QA Lead

04

Staging / UAT

⭐ Momento Clave

Validás el feature contra tus criterios de aceptación en un entorno seguro. Emitís el Sign-Off o reportás errores.

PM da Sign-Off

05

Producción

Acción del PM

Autorizás el Release (decidís cuándo lo ve el cliente). El DevOps gestiona el Deploy. Controlás el timing con un Feature Flag.

PM -   DevOps

Regla de Oro: Deploy ≠ Release. Los devs deciden cómo y dónde suben el código. Vos decidís cuándo se lo habilitás a tus usuarios.

¿Qué es un Feature Flag? Es un interruptor en el código. El equipo técnico puede subir una funcionalidad al servidor de producción con ese interruptor en «apagado». El PM decide exactamente cuándo «encenderlo» para los usuarios -  puede ser para todos a la vez, solo para un grupo piloto, o coordinado con el equipo comercial. Así el trabajo técnico nunca bloquea al negocio, ni viceversa.

---

## Diapositiva 12 (slide5e)

Cada User Story = Una Rama de Git

Tu backlog priorizado en Jira se traduce directo en la estrategia de branching. Así conectás tu planificación con el desarrollo real.

El Backlog (Jira)

US-41

Login con Google OAuth

US-42

Dashboard de métricas

US-43

Exportar reportes CSV

US-44

Notificaciones push

→

→

→

→

Ramas de Git (Repositorio)

feature/US-41-login-google

🚀 Mergeada

feature/US-42-dashboard

⏳ En Code Review

feature/US-43-export-csv

💻 En Desarrollo

Sin rama -  no comenzó

📋 Backlog

1 · PM Redacta

Definís Criterios de Aceptación claros que le sirven al desarrollador para saber cuándo terminar la rama y abrir su Pull Request.

2 · Validación de PM (UAT)

Validás la función en Staging (UAT). Con tu visto bueno, la rama de feature se integra de forma segura a la rama principal (main).

3 · Liberación (Release)

Decidís el momento de encender la función. El Release es tu responsabilidad exclusiva; el Deploy técnico es de DevOps.

---

## Diapositiva 13 (slide6)

Git: Control de Versiones Moderno

En corporaciones, el software pasa por ambientes y controles estrictos para no romper nada. Hacé clic en los nodos para ver el flujo.

¿Por qué un Project Manager debe entender Git?

Entender Git te permite hablar el mismo idioma que los desarrolladores, hacer un seguimiento real en Jira (detectando cuellos de botella en Code Review o QA) y anticipar riesgos cuando gestionás varias funciones a la vez.

main (Prod)

6. Release Final

pre-prod

5. Security Gate

testing

4. QA Testing

develop

3. Merge a develop

feature/US-42

1. Nueva Rama

2. Code Review

Hacer clic en los nodos numerados para explorar cómo se construye, revisa, prueba y despliega el código de forma segura y profesional en la industria de IT.

---

## Diapositiva 14 (slide7)

Dónde Vive el Software

Un error típico es confundir dónde se están probando los cambios. Anotate estos 3 ambientes indispensables del software moderno.

Desarrollo

Dev Environment

El Laboratorio

- Espacio inestable donde los devs integran sus ramas diariamente.

- Ideal para pruebas unitarias rápidas.

- Tu rol: Ninguno directo. Dejá que el equipo técnico experimente e itere libremente acá.

Staging / Pre-Prod

Staging Environment

El Simulador de Vuelo

- Réplica idéntica de las bases de datos y servidores de producción.

- Acá hacés tus pruebas funcionales de aceptación (UAT).

- Tu rol: Máxima autoridad. Liderás el Sign-Off final para autorizar la subida a producción.

Producción

Prod Environment

El Estadio Lleno

- Acá viven tus usuarios y clientes reales. Todo debe ser impecable, seguro y rápido.

- Lanzás de forma gradual con Feature Flags para mitigar riesgos.

- Tu rol: Coordinar el lanzamiento de negocio y medir el impacto real con métricas.

---

## Diapositiva 15 (slide7b)

Bases de Datos: Dónde y Cómo se Guarda la Info

Como líder de producto, tenés que entender cómo se guardan y buscan los datos según el problema de negocio que quieras resolver.

Relacional (SQL)

SQL (Tablas Rígidas)

El Archivero Perfecto

- Concepto: Datos estructurados en tablas estrictas de filas y columnas (ej. PostgreSQL, MySQL). Cero margen de error.

- Analogía: Una hoja de Excel gigante donde cada celda debe respetar su tipo de columna obligatoriamente.

-  La Decisión del PM: Obligatorio para pasarelas de pago, registros contables, facturación o cualquier sistema crítico donde la precisión absoluta y la consistencia de datos sean de vida o muerte.

No-Relacional (NoSQL)

NoSQL (Documentos Libres)

La Caja de Carpetas Libres

- Concepto: Formatos flexibles (JSON) donde cada documento puede tener campos diferentes según haga falta (ej. MongoDB).

- Analogía: Una carpeta donde archivas hojas sueltas. Cada hoja puede tener diferentes campos sin un esquema fijo.

-  La Decisión del PM: Excelente para catálogos dinámicos que cambian constantemente, perfiles de redes sociales, blogs o para lanzar MVPs súper rápido al mercado sin frenar el desarrollo por la estructura del modelo.

Base Vectorial (IA)

Vector DB (Significado)

La Biblioteca Mágica en 3D

- Concepto: Guarda representaciones matemáticas del significado del texto o imágenes (Embeddings). Busca similitud semántica.

- Analogía: Conceptos similares flotan físicamente cerca en un espacio 3D. "Cachorro" y "Perro" flotan al lado de "Mascota" (no por ortografía, sino por concepto).

-  La Decisión del PM: Indispensable para crear motores de recomendación inteligentes, buscadores avanzados de productos o alimentar al modelo de Inteligencia Artificial con datos privados de la empresa (RAG).

---

## Diapositiva 16 (slide8)

Taller Práctico: Tu Perfil en Clave IT & AI

Cómo traducir experiencia de gestión, coordinación de equipos y entrega de servicios al léxico ágil y tecnológico que usan las empresas de IT.

Eje

Antes (Enfoque Operativo / Tradicional)

Después (Enfoque IT, Agile & AI)

Gestión & Agile

"Coordiné equipos de trabajo, seguimiento de entregas y trato con clientes internacionales cumpliendo las fechas pactadas."

"Lideré el delivery end-to-end de proyectos digitales y servicios globales bajo marcos Agile (Scrum/Kanban), coordinando equipos multifuncionales, gestionando SLAs, priorizando el backlog en Jira y mejorando el On-Time Delivery en un 28%."

Sistemas & Cloud

"Uso de plataformas de gestión, seguimiento de tareas en planillas, reportes de estado y resolución de reclamos operativos."

"Gestioné flujos operativos integrados vía APIs REST, pipelines de CI/CD e infraestructura Cloud (AWS), articulando validación en ambientes de Staging (UAT), gestión de incidentes y lanzamientos en +15 mercados."

IA & Calidad

"Control de calidad manual de entregables, revisión de procesos y optimización de tiempos y costos del equipo."

"Diseñé flujos de automatización asistida por LLMs y arquitecturas RAG sobre bases de conocimiento, reduciendo tiempos operativos de QA y entrega en un 35% manteniendo un 99% de calidad y cumplimiento."

---

## Diapositiva 17 (slide9)

Preguntas "Rompe-Entrevistas"

Hacé clic en cada tarjeta para simular una pregunta de entrevista y ver cómo responderla con autoridad.

Deploy vs. Release

"¿Cómo se controla el momento en que una funcionalidad llega al usuario final, si el código ya está en producción?"

Hacé clic para girar

Respuesta Estrella

"En nuestros equipos usamos lo que se llama un Feature Flag: básicamente un interruptor. El código de la nueva funcionalidad ya está subido al servidor, pero está 'apagado'. Esto nos permite como Product Manager decidir exactamente cuándo 'encenderlo' para los usuarios — puede ser de a poco, solo para un grupo, o coordinado con el lanzamiento comercial. Así el equipo técnico trabaja sin bloqueos y nosotros mantenemos el control del timing del negocio."

Git & Colaboración

"¿Cómo se asegura que varios desarrolladores trabajando en paralelo no se 'pisen' el trabajo entre sí?"

Hacé clic para girar

Respuesta Estrella

"Cada desarrollador trabaja en su propia copia aislada del código, llamada rama o branch. Es como trabajar en una carpeta separada: lo que uno hace no afecta al resto. Cuando termina su parte, abre una Pull Request — que es básicamente una solicitud de revisión — y un compañero lo revisa antes de integrarlo al código principal. Mientras más seguido se integra, menos problemas de conflictos hay al final del Sprint."

Gestión de Incidentes

"Si se sube algo a producción y el sistema falla, ¿cuál es el protocolo como Product Manager?"

Hacé clic para girar

Respuesta Estrella

"Lo primero es restaurar el servicio lo antes posible. Coordino con el equipo técnico para volver a la versión anterior que funcionaba bien — eso se llama rollback — o para aplicar una corrección de emergencia rápida. Una vez que el sistema está estable, hacemos una reunión de análisis: ¿qué falló? ¿qué control de calidad no lo detectó? El objetivo no es buscar culpables sino aprender para que no vuelva a pasar."

---


# Glosario Completo de la Sesión 1 (21 Conceptos Clave IT & DevOps)

Mentoría Estratégica

Sesión 1

Glosario Técnico y DevOps Moderno

De la gestión tradicional de TI (Waterfall, Monolitos) a la entrega ágil elástica y flujos de Inteligencia Artificial.

Preparado para

Anabela Hotian

Programa

PM Re-Entry & AI Product Manager

Índice del Glosario Estructura de Estudio

Este documento está estructurado lógicamente para cerrar la brecha conceptual de forma progresiva. Fijate en cualquier sección para comenzar tu repaso estratégico.

01

El Cambio de Paradigma e IA Generativa

02

Arquitectura e Infraestructura en la Nube

03

APIs, Integración y Estructuras de Datos

04

DevOps, CI/CD y Gestión de Ambientes

05

Testing, Aseguramiento de Calidad y Postman

06

Control de Versiones y Branching con Git

07

Bases de Datos (Tabular SQL vs. NoSQL)

08

Metodologías Ágiles y Scrum

09

Roles en Equipos de Software

🎯 OBJETIVO DE ESTE DOCUMENTO

El dominio de este vocabulario no busca transformarte en programador, sino darte el criterio de negocio necesario para negociar estimaciones técnicas, anticipar riesgos de delivery ágil y liderar la integración de soluciones modernas de software e IA.

01. Cambio de Paradigma e IA IA & Tradicional

La transición desde la programación determinista basada en reglas explícitas hacia flujos probabilísticos asistidos por modelos masivos de lenguaje natural.

01 Software Determinista (Tradicional)

IA vs. Tradicional

Definición: Sistemas de software tradicionales donde cada paso, respuesta y ramificación de código está explícitamente programada por humanos mediante reglas rígidas.

💡

Metáfora: Una calculadora estándar. No importa cuántas veces hagas `2 + 2`, siempre va a dar `4` de forma exacta porque sigue una regla cableada. No aprende, solo procesa según la fórmula fija.

Enfoque PM (Estrategia)

Ideal para procesos de negocio rígidos (ej. facturación). En tu backlog, estos requerimientos se validan de forma binaria ("funciona" o "no funciona"). No toleran variaciones en los inputs.

02 Software Probabilístico (IA)

IA vs. Tradicional

Definición: Sistemas modernos que utilizan modelos estadísticos y de lenguaje para predecir cuál es la respuesta o acción más probable ante un conjunto de datos o instrucciones en lenguaje natural.

💡

Metáfora: Un asesor experto. Si le hacés la misma pregunta tres veces, te va a responder de formas ligeramente diferentes pero con el mismo sentido, basándose en su experiencia previa.

Enfoque PM (Estrategia)

Como PM, acá tu rol cambia: en lugar de esperar que el sistema ande siempre igual (sí/no), tenés que gestionar márgenes de error aceptables, medir la precisión del modelo y controlar que la IA no invente datos (alucinaciones).

03 LLM como Servicio (APIs)

IA vs. Tradicional

Definición: El consumo de un modelo de lenguaje maduro y gigante (como GPT-4, Claude o Gemini) de forma externa, pagando por su uso a través de APIs de red en lugar de entrenarlo localmente.

💡

Metáfora: Contratar un servicio de traducción externo por llamada telefónica en lugar de contratar traductores fijos en la oficina. Pagás por cada palabra traducida.

Enfoque PM (Estrategia)

Acelera el "Time-to-Market" a días. Tu foco como PM debe estar en el control de costos (gestión de tokens) y el monitoreo de la latencia (tiempo que tarda la API del tercero en responder).

04 Base de Datos Vectorial

IA vs. Tradicional

Definición: Motores de bases de datos especializados en almacenar información convertida en coordenadas matemáticas (vectores). Permiten búsquedas por "similitud de significado" (semántica) en lugar de palabras clave exactas.

💡

Metáfora: Una biblioteca temática. Si buscás "perros", te va a traer libros sobre "mascotas leales" aunque no mencionen la palabra exacta en el título.

Enfoque PM (Estrategia)

Es la base para implementar **RAG** (Retrieval-Augmented Generation). Permite conectar los modelos de IA generales con los documentos confidenciales e históricos de tu corporación sin exponer datos de forma pública.

04b Flujos Agénticos (AI Agents)

IA vs. Tradicional

Definición: Sistemas donde la IA no solo responde preguntas, sino que tiene autonomía para planificar pasos, usar herramientas externas (como consultar bases de datos) y validar sus propios resultados para cumplir objetivos complejos.

💡

Metáfora: Un asistente personal al que le decís *"Reserva un pasaje para mi próximo viaje"*. El asistente busca opciones, compara precios, toma decisiones, compra el pasaje y te envía la confirmación.

Enfoque PM (Estrategia)

Es lo último que se está usando hoy. Tu rol cambia de diseñar pantallas rígidas paso a paso (interfaces clásicas) a diseñar los límites operacionales, permisos y criterios de éxito de estos agentes autónomos.

02. Arquitectura e Infraestructura Nube & Cómputo

La evolución de los fierros locales a la flexibilidad de la nube y la modularización en microservicios independientes.

Waterfall & Monolitos (2012)

Cloud-Native & Microservicios (2026)

🔴 Monolito Rígido

Todo el código está en un solo bloque. Si falla el módulo de facturación, todo el sistema de logística y ventas se cae.

🟢 Microservicios Modulares

Servicios aislados e independientes. Si el servicio de notificaciones falla, la app principal sigue procesando compras.

🔴 Despliegue Manual

Actualizaciones trimestrales complejas los fines de semana en la madrugada, con alto riesgo de caída del sistema.

🟢 Despliegue CI/CD Continuo

Automatizado, invisible e incremental. Múltiples cambios y despliegues por día sin interrumpir al usuario.

05 Docker (Contenedores)

Infraestructura

Definición: Tecnología que empaqueta una aplicación y todo lo que necesita para correr (código, dependencias y configuraciones) en una "caja virtual" estandarizada llamada contenedor.

💡

Metáfora: El contenedor marítimo de transporte internacional. El puerto no necesita saber qué hay dentro; tiene el tamaño estándar para encajar en cualquier grúa o camión del mundo.

Enfoque PM (Estrategia)

Elimina el clásico problema de los desarrolladores: *"En mi computadora andaba bien, no sé por qué falla en el servidor"*. Garantiza que el sistema corra exactamente igual en la laptop del programador, en el servidor de pruebas y en producción.

06 Serverless (Sin Servidores)

Infraestructura

Definición: Modelo en la nube donde el programador no configura ni administra servidores virtuales. Solo sube trozos de código y el proveedor de nube los ejecuta y cobra exclusivamente por los milisegundos de uso.

💡

Metáfora: Viajar en taxi o Uber. No comprás el auto, no pagás el seguro ni te preocupás por el estacionamiento; solo pagás por la distancia recorrida.

Enfoque PM (Estrategia)

Ahorro de costos real y directo. Si una funcionalidad o proceso pesado solo corre una vez al día (o de noche cuando no hay tráfico), el costo de infraestructura será literalmente cero mientras esté inactivo.

📋 Criterio de Decisión (Serverless)

🟢 Cuándo Conviene:

- Tráfico esporádico o variable: Tareas que corren de vez en cuando (ej. generar reportes nocturnos, procesar imágenes que suben los usuarios, enviar correos programados). El costo baja a $0 en inactividad.

- Prototipos rápidos y MVPs: Permite programar rápido y validar el producto sin perder tiempo configurando servidores ni pagando costos fijos iniciales.

- Picos de carga inesperados: La nube escala de forma automática a miles de peticiones simultáneas en segundos sin intervención de operaciones.

🔴 Cuándo NO Conviene:

- Procesamientos largos o pesados: Tareas que tardan más de 15 minutos continuos (ej. entrenar modelos de IA o procesar video pesado). Los proveedores imponen límites de tiempo estrictos y apagan la ejecución.

- Tráfico constante e ininterrumpido: Si tu app tiene visitas continuas las 24 horas, pagar por cada milisegundo de ejecución sale muchísimo más costoso que alquilar un servidor tradicional dedicado encendido permanentemente.

- Arranque en frío (Cold Start): Si la función lleva inactiva un tiempo, la primera llamada tardará unos segundos extras en "despertar" el contenedor virtual. No apto para latencias ultra-críticas inmediatas.

07 AWS, Nginx y Ubuntu

Infraestructura

Conceptos Integrados:

- AWS (Amazon Web Services): La mayor plataforma de nube a nivel mundial que provee servidores virtuales, bases de datos e infraestructura elástica bajo demanda. Alquilás los espacios según lo necesitás.

- Nginx: Servidor web de alto rendimiento que hace de "puerta de entrada" (recepcionista) para organizar y dirigir el tráfico de internet hacia los servidores de backend correctos.

- Ubuntu: Distribución estable del sistema operativo Linux, la más utilizada del mundo para alojar servidores web en la nube y correr contenedores Docker de forma segura.

Enfoque PM (Estrategia)

Es el stack de base más común. Cuando tu equipo hable de *"escalar las instancias de AWS"* o *"configurar Nginx para balancear tráfico"*, están armando los cimientos para que tu producto sea rápido, seguro y no se caiga cuando reciba muchas visitas.

07b Cron Jobs (Tareas Programadas)

Infraestructura

Definición: Tareas automáticas en segundo plano que el sistema ejecuta a intervalos de tiempo o fechas específicas preconfiguradas (ej. cada hora, todos los días a las 2 AM, o el primer día de cada mes).

💡

Metáfora: La alarma despertadora de tu celular. La programás una sola vez para que suene de lunes a viernes a las 7:00 AM, y el dispositivo se encarga de ejecutar esa acción recurrentemente sin intervención humana.

Enfoque PM (Estrategia)

El motor invisible del negocio: Son fundamentales para automatizar operaciones (ej. cobrar suscripciones mensuales con Stripe, enviar recordatorios de carritos abandonados, limpiar la base de datos de registros temporales). Como PM, debés asegurarte de que el equipo configure alertas para saber de inmediato si un cron job crítico falla (por ejemplo, si no se procesa la facturación nocturna).

📋 Criterio de Decisión (Cron Jobs)

🟢 Cuándo Conviene:

- Procesamiento pesado fuera de hora pico: Ideal para mover tareas intensivas (ej. generación de reportes masivos de ventas, sincronización de stock de ERP) a horarios nocturnos (ej. 3 AM) cuando no hay tráfico de usuarios activos.

- Acciones periódicas obligatorias: Tareas recurrentes fijas que deben ocurrir sí o sí (ej. renovar facturas cada día 1 de mes, generar backups diarios de la base de datos).

🔴 Cuándo NO Conviene:

- Acciones basadas en eventos en tiempo real: Si necesitás que algo suceda inmediatamente cuando un usuario hace una acción (ej. enviar el recibo de compra al instante), no uses un cron job que corra cada hora; usá una arquitectura basada en eventos (*Webhooks* o colas de mensajería).

- Sistemas sin monitoreo de fallas: Si ponés procesos críticos en cron jobs pero no configurás logs y alertas de error (ej. Slack o correo si falla), el cron job puede romperse y pasarás semanas sin facturar a tus clientes sin enterarte.

03. APIs, Integración y Datos El Pegamento Digital

Cómo se comunican las interfaces de cara al usuario con los datos y servidores mediante protocolos estandarizados.

08 API (Application Programming Interface)

Integraciones

Definición: Interfaz lógica que permite que dos sistemas o aplicaciones independientes intercambien datos y servicios de forma segura y automatizada sobre la red.

💡

Metáfora: El mozo de un restaurante. Vos (Cliente/Frontend) mirás la carta y le pedís un plato. El mozo lleva tu orden a la cocina (Backend/Servidor) y regresa con el plato preparado para vos. Vos nunca entraste a la cocina.

Enfoque PM (Estrategia)

Es la pieza clave de los sistemas modernos. Como PM, las APIs son tus mayores aliadas para integrar tu app a pasarelas de pago (ej. Stripe), sistemas de envío (ej. DHL) o modelos de IA (ej. OpenAI) de forma súper veloz sin programar todo desde cero.

09 JSON vs. XML

Formatos de Datos

Definición: Los dos formatos basados en texto plano más comunes para estructurar y transferir datos entre APIs y bases de datos.

- JSON: Ligero, legible e ideal para desarrollos modernos. Ej: {"usuario": "Anabela", "rol": "PM"}.

- XML: Estructura basada en etiquetas similar a HTML. Más pesado y formal, común en sistemas corporativos clásicos o bancarios.

Enfoque PM (Estrategia)

JSON domina la industria actual. Sin embargo, si te toque integrar sistemas core, plataformas de localización (TMS), CRMs o ERPs heredados (Legacy/SAP), la terminología y las estructuras XML formarán parte obligatoria del backlog de integración.

10 Modelo-Vista-Controlador (MVC)

Patrón de Diseño

Definición: Patrón de arquitectura que divide una aplicación en tres partes: el Modelo (los datos puros y reglas de negocio), la Vista (las pantallas visuales que ve el usuario) y el Controlador (el cerebro lógico que conecta ambos).

💡

Metáfora: Un restaurante tradicional. La despensa con los insumos y recetas es el Modelo; la mesa servida con la carta es la Vista; y el mozo que organiza y coordina el flujo es el Controlador.

Enfoque PM (Estrategia)

Te ayuda a entender la distribución de tareas técnicas. Un cambio visual sólo afectará a la Vista (desarrollo rápido), mientras que cambiar una regla de cálculo de impuestos afectará al Modelo, requiriendo testing riguroso de backend.

04. DevOps, CI/CD y Ambientes El Ciclo de Despliegue

El flujo automatizado por el cual el código escrito en las laptops de los ingenieros llega de forma segura a los usuarios reales.

1

Jira Ticket

PM especifica historias

2

Git Branch

Código aislado local

3

CI (Tests)

Pruebas automáticas

4

Staging

UAT y Sign-off PM

5

CD (Prod)

Deploy real

11 Pipelines de CI/CD

DevOps

Definición:

CI (Integración Continua): Proceso automático que compila el código y corre todas las pruebas cada vez que un dev sube un cambio para validar que nada se rompa.

CD (Despliegue Continuo): Automatización que toma el código aprobado y lo sube directamente a los servidores de producción de forma segura y veloz sin pasos manuales.

Enfoque PM (Estrategia)

Reduce drásticamente el "Lead Time" (el tiempo desde que el desarrollador escribe el código hasta que está en producción). Te da agilidad extrema y disminuye el riesgo de fallos humanos en los lanzamientos.

12 Deploy vs. Release (Feature Flags)

DevOps

Definición:

*   Deploy (Despliegue): Acto puramente técnico de subir el nuevo código a los servidores de producción (puede permanecer inactivo y oculto).

*   Release (Lanzamiento): Acto de negocio por el cual los usuarios reales comienzan a ver e interactuar formalmente con la nueva funcionalidad.

💡

Metáfora: El cableado eléctrico (Deploy) ya está instalado y energizado en la habitación, pero el cuarto permanece oscuro hasta que vos presionás el interruptor de pared (Release).

Enfoque PM (Estrategia)

La separación se logra mediante **Feature Flags** (variables de configuración). Te dan el poder como PM de decidir exactamente cuándo lanzar una función comercialmente sin presionar técnicamente a ingeniería el día de la fecha de entrega.

13 Rollback, Hotfix y Post-Mortem

DevOps

Protocolo de incidentes modernos:

- Rollback: Volver el sistema de producción al estado exacto de la versión anterior estable de forma inmediata (`Ctrl+Z` de servidores).

- Hotfix: Código de emergencia de máxima prioridad desarrollado para solucionar un error crítico directamente en producción.

- Post-Mortem: Reunión de análisis no punitivo posterior al incidente para identificar la causa raíz y prevenir futuros incidentes.

Enfoque PM (Estrategia)

Ante crisis en producción, tu primera directiva como PM en proyectos de tecnología es coordinar con ingeniería para aplicar un Rollback rápido (priorizando la operación comercial del cliente) en lugar de insistir en parches apresurados y riesgosos.

05. Testing y Calidad de Software Aseguramiento de Valor

La estrategia e instrumental utilizado por ingeniería y producto para certificar que el software funciona como se espera y no pierde performance.

14 Pirámide de Testing

Calidad

Niveles de Validación:

- Unit Testing (Pruebas Unitarias): Comprueban funciones lógicas aisladas del código. Son ultrarápidas y baratas de ejecutar de forma automática.

- Integration Testing (Pruebas de Integración): Aseguran que los módulos hablen correctamente entre sí (ej. el módulo de compra con el de pasarela de pago).

- End-to-End Testing (E2E): Simulan la experiencia completa del usuario en pantallas virtuales haciendo clics reales desde el inicio hasta el fin.

Enfoque PM (Estrategia)

Te sirve para preguntar qué porcentaje de cobertura de pruebas automáticas (Test Coverage) tiene el código. Si no se automatizan las pruebas, cada nuevo cambio tiene un alto riesgo de romper cosas que ya andaban (regresiones).

Ejemplo Propuesta Arquitectura Newcells

15 Postman y Pruebas de API

Herramientas

Definición: Herramienta visual de desarrollo que permite realizar consultas HTTP (GET, POST, PUT, DELETE) directas a los endpoints de una API para validar las respuestas lógicas de backend.

Guía de Uso Rápido para PMs:

- Abrís Postman y creás una nueva solicitud.

- Seleccionás el método HTTP (ej. GET).

- Pegás la dirección del endpoint (ej. https://api.tuempresa.com/v1/productos).

- Presionás "Send".

- Revisás que el código de estado sea 200 OK y que el JSON resultante muestre los datos correctos.

💡

Metáfora: Llamar directo al número telefónico de la cocina para ver si tienen un plato listo, en lugar de sentarte a esperar a que el mozo te traiga el menú a la mesa.

Enfoque PM (Estrategia)

Permite a los PMs o al equipo de QA probar que la lógica del backend funciona de forma robusta e integrada semanas antes de que el equipo de interfaces visuales (Frontend) termine las pantallas reales de la aplicación.

Suite de Calidad: Herramientas del Mercado

Herramienta

Función y Uso de Calidad

Playwright / Selenium

Automatización de flujos visuales (E2E). Abren navegadores invisibles y simulan compras completas de forma periódica en el pipeline.

JMeter / k6

Pruebas de Carga y Stress. Simulan miles de usuarios concurrentes para asegurar que la app no colapse en eventos comerciales de alto tráfico.

SonarQube

Análisis Estático de Código. Revisa de forma automática que no haya brechas de seguridad ni malas prácticas de programación en las modificaciones de los devs.

06. Control de Versiones y Git Código y Colaboración

Las reglas y metodologías técnicas para sincronizar el trabajo diario de decenas de ingenieros en un repositorio central estable.

16 Git vs. GitHub (Diferencia Crítica)

Git

*   Git: Es el software local instalable que lleva el historial de cambios, reversiones y versiones de los archivos en la computadora del programador.

*   GitHub: Plataforma en la nube que aloja los repositorios Git facilitando la gobernanza, revisiones cruzadas, foros y flujos automáticos de CI/CD.

💡

Metáfora: Git es la cámara fotográfica con la que capturas la realidad localmente; GitHub es Instagram, la red social en la nube donde organizas, compartes e interactúas sobre esas fotos.

17 Branching y Git Workflow

Git

Conceptos clave del flujo diario de código:

- Repository (Repo): El espacio en la nube donde vive todo el historial de código del producto.

- Branch (Rama): Línea de trabajo paralela y aislada donde un dev programa un feature sin tocar el código estable. Te vas a topar con ramas por funcionalidad.

- Pull Request (PR): Solicitud de un programador para integrar sus cambios a la rama principal, invitando a auditoría técnica.

- Code Review: Auditoría cruzada obligatoria donde un ingeniero revisa el código de otro antes de autorizar el Merge (fusión).

- Git Clone / Push / Pull: Acciones de descargar el repo localmente (Clone), subir cambios propios a la nube (Push) y traer cambios ajenos (Pull).

Enfoque PM (Estrategia)

La velocidad de tu roadmap se ve impactada por esto. Si tu equipo tiene cuellos de botella en los *Code Reviews* (PRs estancadas por días), tu velocidad de delivery caerá drásticamente. Fomenta revisiones ágiles y diarias.

07. Bases de Datos: SQL vs. NoSQL Estructuración de Datos

La selección del tipo de persistencia define el rendimiento, escalabilidad y la forma en que estructuramos el modelo relacional de nuestro negocio.

Característica

SQL (Relacional)

NoSQL (No Relacional)

Estructura

Tabular rígida (filas y columnas organizadas como plantillas de Excel cruzadas). Tenés que saber el esquema de antemano.

Flexible y dinámica (documentos JSON, grafos o clave-valor). Podés guardar datos diferentes sin avisar.

Relaciones

Perfectas para transacciones cruzadas complejas (ej. relacionar Cliente, Facturas y Descuentos).

Pobre. Se prefiere duplicar datos de forma inteligente para optimizar lecturas directas.

Escalabilidad

Vertical (requiere comprar servidores con más procesador y RAM).

Horizontal (se escala agregando múltiples computadoras estándar al clúster).

Ejemplos

PostgreSQL, MySQL, SQL Server, Oracle.

MongoDB, DynamoDB, Redis, Cassandra.

¿Cuándo usar?

Sistemas financieros, Core ERPs, pasarelas de pago. La integridad de datos es sagrada.

Feeds de redes sociales, catálogos rápidos de e-commerce o analíticas masivas de clicks en vivo.

08. Metodologías Ágiles y Scrum Gestión y Delivery

El marco metodológico estándar de la industria del software para planificar y entregar valor de forma iterativa y continua.

18 Epics & User Stories

Ágil

*   User Story: Unidad de requerimiento simplificada redactada desde la perspectiva del valor para el usuario final.

"Como [rol de usuario], quiero [acción] para poder [beneficio de negocio]."

*   Epic (Épica): Contenedor estratégico de gran escala que agrupa múltiples Historias de Usuario individuales y que no se puede terminar en un solo sprint.

Enfoque PM (Estrategia)

Es tu instrumento de negociación. Al redactar criterios de aceptación (Acceptance Criteria) detallados dentro de tus historias en Jira, asegurás que los ingenieros comprendan las compuertas lógicas de negocio, evitando desvíos en el alcance.

19 Ritmo Scrum (Ceremonias)

Scrum

El latido de entrega constante del squad:

- Sprint: Bloque de tiempo de 2 semanas donde el equipo se enfoca en entregar un incremento funcional terminado.

- Sprint Planning: Planificación inicial donde el PO prioriza el Sprint Backlog basándose en la **Velocity** (velocidad de entrega histórica del equipo).

- Daily Scrum: Sincronización diaria de 15 minutos para alinear avances y destrabar bloqueantes técnicos.

- Sprint Review: Demo en vivo del software funcional presentado a los stakeholders al cierre del sprint.

- Retrospective: Sesión de autoevaluación interna para optimizar procesos en el siguiente ciclo.

Enfoque PM (Estrategia)

El backlog de producto es de tu exclusiva propiedad y responsabilidad. Tu rol no consiste en supervisar el código de tus ingenieros, sino en nutrir, refinar y priorizar constantemente la lista de tareas para maximizar el valor comercial entregado en cada sprint.

09. Roles en Equipos de Software Estructuras de Trabajo

La especialización de perfiles en el desarrollo ágil de software contemporáneo.

20 Full-Stack Developer

Roles

Definición: Programador generalista con habilidades para desarrollar tanto la interfaz visual del cliente (Frontend) como la lógica interna del servidor y la base de datos (Backend).

Enfoque PM (Estrategia)

Es el rol multitask clásico. Te da gran velocidad para iterar prototipos, pero para sistemas corporativos altamente escalables vas a necesitar desarrolladores especializados de Frontend y Backend.

21 PM vs. PO (Product Manager vs. Product Owner)

Roles

Definición:

*   Product Manager (PM): Rol orientado al negocio, la visión estratégica de mercado, la viabilidad financiera (ROI) y el descubrimiento de producto (Product Discovery).

*   Product Owner (PO): Rol táctico en el squad, encargado de refinar historias de usuario, priorizar el backlog diario y responder dudas técnicas inmediatas de los ingenieros.

💡

Metáfora: El PM es el arquitecto que diseña el concepto general y analiza el mercado; el PO es el capataz de la obra que está diariamente con los obreros asegurándose de que los ladrillos se coloquen bien y a tiempo.

Enfoque PM (Estrategia)

En organizaciones maduras, estos roles se desdoblan para evitar que el PM colapse por el micro-management de la diaria técnica.

22 Tech Lead (Líder Técnico)

Roles

Definición: El desarrollador más experimentado del equipo que toma las decisiones de arquitectura de software, define estándares de código y actúa como el puente de comunicación técnica principal con el PO y PM.

Enfoque PM (Estrategia)

Tu socio estratégico principal. No te comprometas con fechas de entrega ni diseñes soluciones técnicas sin antes validarlas y co-diseñarlas con tu Tech Lead.

23 DevOps Engineer

Roles

Definición: Especialista dedicado exclusivamente a automatizar y mantener la infraestructura en la nube, los servidores, los pipelines de CI/CD y asegurar la estabilidad de los despliegues.

Enfoque PM (Estrategia)

Si los desarrolladores hacen "las luces y los muebles" de la casa, el DevOps hace "las tuberías y el cableado eléctrico". Son vitales para mantener el sistema online 24/7.

💡 Preguntas de Control Clave Para Reuniones Técnicas

Como PM en proceso de reingreso al mercado IT moderno, grabate estas tres preguntas. Si las formulás en tus comités de diseño o durante una entrevista, te vas a posicionar de inmediato como un líder con excelente criterio técnico:

1. SOBRE BRANCHING Y DESPLIEGUES

"¿Cómo es el Git workflow del equipo? ¿Se trabaja con GitFlow tradicional o estamos implementando una estrategia de Trunk-Based Development para reducir la latencia de las Pull Requests?"

2. SOBRE CALIDAD Y AUTOMATIZACIÓN

"¿Qué nivel de cobertura de pruebas automatizadas tenemos en el pipeline de CI antes de autorizar el merge a Staging para evitar regresiones?"

3. SOBRE MICROSERVICIOS Y API GOVERNANCE

"Dado que nuestra arquitectura modular de microservicios está creciendo, ¿cómo estamos gestionando la documentación (ej. Swagger/OpenAPI) y el versionado de nuestras APIs internas para evitar romper dependencias?"
