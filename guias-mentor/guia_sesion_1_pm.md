# 🎙️ Sesión 1: Ecosistema IT, DevOps y Dinámicas de Equipos Ágiles

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Construir los cimientos técnicos de ingeniería de software moderna (Frontend, Backend, APIs REST, Git, CI/CD, Cloud/AWS, Ambientes y Bases de Datos) y conectar directamente el rol actual de Anabela como Service Delivery Manager (SDM) con el mundo IT (IT Service Delivery Manager / Technical PM / Agile Delivery), incluyendo qué camino tomar con AWS.
- **Total de Diapositivas:** 18 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 10 min** | De Software Clásico a la Era IA & Cloud (AWS) | Slides 1 a 4 | Bienvenida, conexión Service Delivery -> IT, el paper 'Attention Is All You Need' (2017) y el salto a Cloud (AWS) + consejo sobre qué curso de AWS hacer. |
| **10 - 25 min** | Arquitectura Web, APIs, HTTP & SLAs | Slides 5 a 7 | Cómo hablan los sistemas: APIs REST, verbos HTTP y cómo usar los códigos de estado (200, 400, 500) para Incident Management y SLAs. |
| **25 - 42 min** | Ciclo DevOps, Roles & Git | Slides 8 a 13 | El viaje de un feature por CI/CD, dinámicas de roles (Startup vs. Corporación), puntos de control de Delivery/PM y ramas de Git. |
| **42 - 50 min** | Infraestructura AWS: Ambientes & Datos | Slides 14 a 15 | Aislamiento de ambientes en la nube (Dev, Staging, Prod) y elección estratégica entre SQL, NoSQL y Bases Vectoriales. |
| **50 - 60 min** | Taller CV (SDM -> IT), Entrevistas & Cierre | Slides 16 a 18 | Traducción del perfil de Service Delivery Manager al léxico IT/Cloud/AI, simulacro de 3 preguntas rompe-entrevistas y hoja de ruta. |

---

## Slide 1: Portada: De la Gestión Tradicional a la Era de la IA
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Bienvenida · Service Delivery -> IT · Hoja de Ruta 4 Sesiones

### 🗣️ Guion Literal (Qué decir)
> "Hola Anabela, ¡bienvenida a nuestra primera sesión! Armé este recorrido de cuatro encuentros pensando específicamente en el punto en el que estás hoy: vos ya venís trabajando como **Service Delivery Manager (SDM)** en una industria súper exigente, manejando clientes globales, SLAs, tiempos de entrega, calidad y coordinación de equipos. Y como tu objetivo es meterte de lleno en el **mundo IT** —ya sea como *IT Service Delivery Manager*, *Technical PM* o *Agile Delivery Manager*— y además te habían ofrecido hacer un curso de **AWS**, hoy vamos a conectar todos esos puntos. Te vas a dar cuenta de que el 70% de lo que hace un líder de Delivery en software vos ya lo sabés hacer; lo único que te falta es dominar el vocabulario técnico (APIs, Cloud/AWS, CI/CD, Git, arquitecturas de IA) para hablar de igual a igual con ingenieros y entender qué pasa adentro de los sistemas."

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la línea de tiempo inferior de las 4 sesiones (1. DevOps & Cloud -> 2. IA & RAG -> 3. Agentes Autónomos -> 4. ROI, Evals & Entrevistas).

### 🔗 Puente de Conexión → Slide 2 (La Ola de la IA Generativa & El Paper Fundacional (2017))
> **"Antes de meternos en los servidores de AWS y en cómo trabaja un equipo de desarrollo día a día, miremos la foto grande de por qué hoy todas las empresas de tecnología están reestructurando sus servicios. Pasemos a la Slide 2."**

---

## Slide 2: La Ola de la IA Generativa & El Paper Fundacional (2017)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Software Determinista · Attention Is All You Need (2017) · Transformers & LLMs

### 🗣️ Guion Literal (Qué decir)
> "Mirá estas tres columnas porque resumen cómo llegamos hasta acá, y la columna del medio tiene una conexión directa con tu profesión de traductora. En la columna uno tenés el Software Tradicional (lo que llamamos 'determinista'): un programador escribe reglas fijas del tipo 'si pasa A, ejecutá B'. Pero en junio de 2017 pasa algo histórico que cambia la computación para siempre: ocho investigadores de Google publican un paper científico llamado **'Attention Is All You Need'** (*La atención es todo lo que necesitás*). ¿Sabés qué problema querían resolver? ¡La traducción automática de idiomas! Hasta ese momento, las máquinas leían palabra por palabra en fila india y, cuando una oración era larga, se olvidaban de cómo había empezado. Ese paper inventó la arquitectura **Transformer** —que es literalmente la letra **T** de **GPT** (*Generative Pre-trained Transformer*)— y el mecanismo de **Self-Attention**, que le permitió a las redes neuronales leer toda la oración en paralelo y entender cómo el contexto cambia el significado de cada palabra. Cinco años después, en noviembre de 2022, OpenAI escala esa misma arquitectura Transformer y lanza ChatGPT, llevándonos a la columna tres: donde hoy integramos estos LLMs adentro del software de las empresas."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá de izquierda a derecha las 3 tarjetas (1. Software Tradicional, 2. El Paper Base 2017 & ChatGPT, 3. Era de Sistemas con LLMs) y destacá el banner inferior sobre cómo todo nació de la Traducción Automática.

### 🔗 Puente de Conexión → Slide 3 (La Regla de Oro: IA + Ingeniería de Software)
> **"Ahora bien, acá aparece una trampa muy común: mucha gente quiere saltar directo a la columna 2 y 3 sin entender la columna 1. Pasemos a la Slide 3 para ver la Regla de Oro de esta mentoría."**

---

## Slide 3: La Regla de Oro: IA + Ingeniería de Software
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Arquitectura · Cimientos Técnicos · Criterio de PM

### 🗣️ Guion Literal (Qué decir)
> "Grabate esta regla de oro: un modelo de Inteligencia Artificial como GPT-4 o Claude no flota en el aire por arte de magia. Para que un usuario real pueda usarlo en una app o en una plataforma corporativa, ese cerebro de IA tiene que vivir envuelto en software tradicional: necesita una pantalla (Frontend), un servidor seguro (Backend), tuberías de comunicación (APIs), bases de datos y controles de seguridad. Por eso hoy, en esta Sesión 1, vamos a dominar los cimientos del software y las prácticas ágiles. Cuando entiendas estas piezas hoy, en las Sesiones 2 y 3 vas a ver que armar un chatbot o un agente de IA es simplemente conectar un bloque nuevo a esta misma estructura."

### ⚡ Dinámica / Interacción en Pantalla
- Destacá la frase central dorada y cómo el modelo de IA vive 'adentro' de una arquitectura de software clásica.

### 🔗 Puente de Conexión → Slide 4 (El Gran Salto Temporal: 2012 vs. 2026 & El Rol de AWS)
> **"Para entender cómo trabajan hoy los developers sobre estos cimientos, veamos cómo cambió la forma de construir software en los últimos diez años. Vamos a la Slide 4."**

---

## Slide 4: El Gran Salto Temporal: 2012 vs. 2026 & El Rol de AWS
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Waterfall vs Agile · Monolito vs Microservicios · AWS Cloud Practitioner · IT Service Delivery

### 🗣️ Guion Literal (Qué decir)
> "Fijate este contraste porque acá empieza tu mundo como **Service Delivery Manager en IT**. Hace diez o doce años dominaba el modelo 'Waterfall' y la arquitectura 'Monolítica': toda la aplicación estaba atada adentro de un único bloque gigante de código corriendo en servidores físicos comprados por la empresa. Si había un pico de clientes o se rompía un disco rígido, el servicio se caía por horas y se incumplía el SLA con el cliente. Hoy en 2026 trabajamos con **Microservicios en la Nube (Cloud)** y metodologías Ágiles: el sistema se divide en piezas independientes y vive en **AWS (Amazon Web Services)**, Azure o Google Cloud.

Y acá me detengo en algo que me habías comentado sobre la posibilidad de hacer un **curso de AWS**: ¡hacelo sin dudarlo, pero elegí el enfoque correcto para tu rol! En el mundo IT, un Service Delivery Manager o PM **no entra a la consola de AWS a programar redes ni configurar servidores Linux** (eso lo hace el ingeniero DevOps o Cloud Architect). ¿Para qué te sirve AWS a vos como SDM? Para tres cosas clave: 1) **SLAs y Alta Disponibilidad**: entender qué significa que un servicio esté en múltiples zonas para garantizar un 99.9% de Uptime al cliente; 2) **Costos y FinOps**: entender cómo factura AWS por uso (cómputo, almacenamiento, tráfico y llamadas a IA) para cuidar el margen de rentabilidad de tu cuenta; y 3) **Lenguaje común con el equipo técnico**: cuando un ingeniero te diga *'se llenó el bucket de S3'*, *'escalamos las instancias EC2'* o *'desplegamos en AWS Lambda'*, saber exactamente de qué componente te está hablando. Por eso, el curso o certificación ideal para vos es el **AWS Certified Cloud Practitioner (CLF-C02)**: es el curso oficial pensado específicamente para roles de gestión, Service Delivery y negocio en IT."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic sobre el diagrama comparativo a la izquierda para abrirlo en pantalla completa (Lightbox), y luego detenete especialmente en la primera tarjeta inferior ('AWS / Cloud - Clave IT SDM') para responder su duda sobre el curso de AWS.

### 🔗 Puente de Conexión → Slide 5 (APIs: El Pegamento del Software Moderno)
> **"Ahora bien: si en AWS tenemos nuestro sistema dividido en múltiples piezas y servidores independientes, ¿cómo hacen esas piezas para hablar entre sí y pasarse información en milisegundos? Ahí entra el concepto más importante para gestionar integraciones en IT: las APIs. Pasemos a la Slide 5."**

---

## Slide 5: APIs: El Pegamento del Software Moderno
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** API REST · Frontend vs Backend · JSON · Contrato de Datos

### 🗣️ Guion Literal (Qué decir)
> "Si te preguntan qué es una API (Application Programming Interface), olvidate de las definiciones de Wikipedia y pensalo como el mesero de un restaurante. En cualquier aplicación tenés dos mundos: el 'Frontend' (la pantalla del celular o la web que ve el usuario, que sería la mesa del cliente con el menú) y el 'Backend' (los servidores y bases de datos donde ocurre la lógica pesada y segura, que sería la cocina). El cliente en la mesa no puede meterse directo a la cocina a revolver las ollas por seguridad. Necesita un intermediario: el mesero (la API). Cuando vos hacés clic en 'Ver estado de traducción' en una plataforma, el Frontend le entrega un mensajito estructurado en formato JSON al mesero (la API), la API corre al Backend, busca el dato en la base de datos y vuelve a la pantalla con la respuesta lista. Incluso cuando conectemos a ChatGPT en la Sesión 2, lo vamos a hacer llamando a la API de OpenAI."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en el diagrama del Restaurante (Frontend / Mesero API / Cocina Backend) para ampliarlo y recorrer el viaje del pedido.

### 🔗 Puente de Conexión → Slide 6 (Verbos HTTP: El Vocabulario de las APIs)
> **"Ahora, ese mesero (la API) no habla en español coloquial; usa cuatro palabras universales para saber qué acción tiene que ejecutar en la cocina. Pasemos a la Slide 6 para conocer los 4 verbos HTTP."**

---

## Slide 6: Verbos HTTP: El Vocabulario de las APIs
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** GET · POST · PUT / PATCH · DELETE

### 🗣️ Guion Literal (Qué decir)
> "Cada vez que los developers hablan de un 'endpoint de la API', van a mencionar uno de estos cuatro verbos HTTP. Es súper intuitivo: 1) **GET** (Obtener) es solo lectura: 'Mesero, traeme la lista de proyectos activos o el glosario del cliente'. No modifica nada. 2) **POST** (Crear) envía información nueva para guardarla: 'Mesero, creá un nuevo ticket o enviá este texto al LLM para traducir'. 3) **PUT o PATCH** (Actualizar) modifica algo que ya existía: 'Cambiá el estado del proyecto #4 a Entregado'. Y 4) **DELETE** (Borrar) elimina un registro. Como PM, cuando revisás historias de usuario técnicas con tu equipo, escuchar 'tenemos que armar el POST de usuarios y el GET de reportes' te ubica al instante en qué están construyendo."

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 4 tarjetas (GET en azul, POST en verde, PUT/PATCH en naranja, DELETE en rojo) relacionándolas con acciones cotidianas de una plataforma.

### 🔗 Puente de Conexión → Slide 7 (Códigos de Estado HTTP: El Semáforo de SLAs e Incidentes)
> **"Cuando el mesero (la API) vuelve de la cocina hacia la pantalla, antes de darte el plato te muestra un número de tres dígitos para avisarte si salió todo bien o si hubo un accidente. Vamos a la Slide 7 para ver el Semáforo de los Códigos de Estado."**

---

## Slide 7: Códigos de Estado HTTP: El Semáforo de SLAs e Incidentes
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** 200 OK · 400 Bad Request · 500 Server Error · Incident Management & SLA

### 🗣️ Guion Literal (Qué decir)
> "Mirá cómo esto conecta directo con tu trabajo de **Service Delivery Manager**. En IT, vos tenés un **SLA (Service Level Agreement)** firmado con el cliente —por ejemplo, que la plataforma esté disponible el 99.9% del mes—. Cuando un cliente te escala un ticket urgente diciendo *'no anda el sistema'*, mirar el código HTTP en el reporte técnico te dice en 5 segundos qué pasó y a quién llamar: Si devuelve **2xx (200 OK)**, el servicio funciona perfecto. Si devuelve **4xx (400 Bad Request, 401 Unauthorized, 404 Not Found)**, ¡nuestro servidor en AWS NO está caído! El problema está del lado del cliente: mandó mal un dato, se le venció la contraseña/token o está entrando a un link viejo; no rompe tu SLA de infraestructura. En cambio, si devuelve **5xx (500 Internal Server Error o 503 Service Unavailable)**, ¡alerta roja de Incident Management!: la cocina (nuestro Backend o base de datos en AWS) se cayó. Ahí sí corre el reloj del SLA, activás al equipo de guardia (On-Call / DevOps) y comunicás estado al cliente."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá los 3 bloques de códigos (2xx Verde, 4xx Naranja, 5xx Rojo) y conectalo directo con cómo una Service Delivery Manager gestiona un incidente o reclamo de un cliente en IT.

### 🔗 Puente de Conexión → Slide 8 (El Viaje de un Feature: Pipeline de CI/CD)
> **"Ya entendemos qué construyen los developers (Frontend, Backend, APIs) y cómo se miden los incidentes. Ahora veamos CÓMO viaja una entrega desde que se pide hasta que llega al cliente en IT. Pasemos a la Slide 8: El Viaje de un Feature."**

---

## Slide 8: El Viaje de un Feature: Pipeline de CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** CI/CD · Automatización · Pull Request · QA Automático

### 🗣️ Guion Literal (Qué decir)
> "Hacé clic conmigo en cada paso de esta línea porque este es el corazón del trabajo diario en IT: el famoso pipeline de **CI/CD** (Integración Continua y Despliegue Continuo). Paso 1 (**Plan**): Vos como PM definís la necesidad en un ticket de Jira con criterios claros. Paso 2 (**Code**): El developer escribe el código en su compu. Paso 3 (**CI - Integración Continua**): Cuando el dev sube su código, un robot automático compila todo y corre cientos de pruebas automáticas para verificar que ese código nuevo no haya roto nada de lo que ya funcionaba. Paso 4 (**Staging / QA**): Si el robot da luz verde, el cambio se instala en un ambiente de prueba idéntico al real para que QA y vos lo validen. Paso 5 (**CD - Despliegue Continuo**): Con tu aprobación, un botón automático lo publica en Producción para los usuarios reales sin cortar el servicio."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic secuencialmente en los 5 nodos interactivos del pipeline (1. Plan -> 2. Code -> 3. Build & CI -> 4. Staging/QA -> 5. Deploy CD) para que la barra de progreso se ilumine y muestre el detalle abajo.

### 🔗 Puente de Conexión → Slide 9 (Dinámica de Roles: El Ecosistema Startup)
> **"Ahora, ¿quiénes son las personas de carne y hueso que empujan este pipeline todos los días? Depende muchísimo del tamaño de la empresa. Pasemos a la Slide 9 para ver cómo se organiza un equipo en una Startup."**

---

## Slide 9: Dinámica de Roles: El Ecosistema Startup
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Full-Stack · Product Manager · Velocidad vs Estructura · Sprints

### 🗣️ Guion Literal (Qué decir)
> "Cuando trabajás en una startup o en un equipo digital chico (de 5 a 15 personas), la regla es la versatilidad: acá no hay compartimentos rígidos. Fijate en las tarjetas: el **Product Manager** muchas veces cumple también el rol de **Product Owner** y de Scrum Master; los desarrolladores suelen ser **Full-Stack** (tocan tanto la pantalla Frontend como el servidor Backend y hasta configuran la nube); y el diseñador **UX/UI** trabaja codo a codo con vos armando los prototipos en Figma antes de picar código. La ventaja acá es la velocidad pura: hablás directo con el que programa y sacás features a la calle en días."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las tarjetas de roles (PM/PO, Tech Lead, Full-Stack Dev, UX/UI) para mostrar cómo se solapan las responsabilidades en el panel inferior.

### 🔗 Puente de Conexión → Slide 10 (Dinámica de Roles: La Matriz Corporativa)
> **"¿Y qué pasa cuando pasás de una startup ágil a una multinacional de software o a una consultora global con cientos de ingenieros? El mapa cambia por completo. Vamos a la Slide 10 para ver la Matriz Corporativa."**

---

## Slide 10: Dinámica de Roles: La Matriz Corporativa
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Especialización · PO vs PM · QA Automation · DevOps / SRE

### 🗣️ Guion Literal (Qué decir)
> "En una corporación grande, el riesgo de que algo falle en producción cuesta millones, así que la clave es la hiper-especialización. Acá el rol se divide: el **Product Manager** mira la estrategia, el mercado, el ROI y los stakeholders, mientras que el **Product Owner (PO)** está metido en el barro diario del equipo técnico escribiendo historias de usuario y refinando el backlog. Además, los devs se dividen estrictamente en **Frontend** y **Backend**; aparece el rol dedicado de **QA Engineer** (que diseña pruebas manuales y automatizadas para intentar romper el sistema antes de que salga) y el ingeniero **DevOps / Cloud**, que es el dueño de los servidores y de las tuberías automáticas que vimos recién."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las tarjetas de roles corporativos (PM Estratégico, Product Owner, Arquitecto/Tech Lead, QA Engineer, DevOps) para ver el detalle de cada especialista.

### 🔗 Puente de Conexión → Slide 11 (El PM en el Pipeline: Tus 5 Puntos de Intervención)
> **"Conociendo a todos estos jugadores, la pregunta del millón es: si vos como PM no escribís ni una línea de código, ¿dónde intervenís exactamente para tener el control del proyecto? Pasemos a la Slide 11."**

---

## Slide 11: El PM en el Pipeline: Tus 5 Puntos de Intervención
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Definition of Ready · Definition of Done · UAT · Deploy vs Release

### 🗣️ Guion Literal (Qué decir)
> "Esta diapositiva es oro puro para tu día a día y para cualquier entrevista. Vos no programás, pero sos la dueña de las compuertas del pipeline. En la etapa **01 (Backlog)**, vos definís el *qué* y el *porqué*, asegurándote de que el ticket cumpla el *Definition of Ready* antes de entrar al Sprint. En la **02 y 03**, colaborás con el Tech Lead para destrabar dudas funcionales. En la **04 (Staging / UAT)**, hacés la prueba de aceptación de usuario: si no cumple los criterios de aceptación que escribiste, rebotás el ticket antes de que llegue al cliente. Y en la **05 (Producción)** aplicás esta regla clave: **Deploy no es lo mismo que Release**. *Deploy* es un acto técnico (los devs suben el código oculto al servidor); *Release* es una decisión de negocio tuya (prender el interruptor —Feature Flag— para que los usuarios lo vean cuando marketing y soporte estén listos)."

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 5 columnas numeradas (01 Backlog, 02 Desarrollo, 03 Code Review, 04 Staging/UAT, 05 Producción) y remarcá la Regla de Oro inferior: Deploy ≠ Release.

### 🔗 Puente de Conexión → Slide 12 (Cada User Story de Jira = Una Rama de Git)
> **"Recién mencionamos que cada tarea que vos priorizás en Jira pasa a manos de un developer. ¿Cómo se conecta exactamente tu tablero de Jira con el código que escriben ellos? Vamos a la Slide 12."**

---

## Slide 12: Cada User Story de Jira = Una Rama de Git
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Trazabilidad · Jira a Git · Feature Branch · Pull Request

### 🗣️ Guion Literal (Qué decir)
> "Mirá qué limpia es esta simetría: a la izquierda tenés tu mundo (el tablero de Jira o Trello con tus User Stories: `PROJ-101`, `PROJ-102`, `PROJ-103`). A la derecha tenés el mundo de los desarrolladores (el repositorio de código en GitHub o GitLab). Por cada historia de usuario que vos pasás a 'In Progress', el desarrollador crea una copia aislada del código con ese mismo nombre, llamada **rama o branch** (por ejemplo, `feature/PROJ-102-exportar-csv`). Así, si en la Daily Standup un dev te dice 'ya abrí la Pull Request de la rama 102, falta que el Tech Lead le haga Code Review y la mergeamos', vos sabés instantáneamente que el código ya está terminado y esperando revisión para pasar a prueba."

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la conexión directa con flechas animadas entre la columna izquierda (Tu Backlog en Jira: PROJ-101, 102, 103) y la columna derecha (Repositorio Git: feature/login-sso, etc.).

### 🔗 Puente de Conexión → Slide 13 (Git: Control de Versiones Moderno en Vivo)
> **"Para que nunca te mareen cuando hablen de ramas, commits, merges o hotfixes, veamos visualmente cómo funciona esa máquina del tiempo llamada Git. Pasemos a la Slide 13."**

---

## Slide 13: Git: Control de Versiones Moderno en Vivo
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Git · Main / Develop · Feature Branch · Hotfix · Rollback

### 🗣️ Guion Literal (Qué decir)
> "Pensá en **Git** como el historial de versiones de un Google Doc pero con esteroides para equipos de ingeniería. Hacé clic conmigo en los nodos del gráfico: la línea verde de arriba es **Main (Producción)**: es sagrada, ahí solo vive el código perfecto que están usando los clientes hoy. Cuando empieza el sprint, los devs sacan ramas violetas (**Feature Branches**) desde la línea azul de desarrollo para trabajar sin pisarse entre sí. Cada puntito es un **Commit** (un punto de guardado). Cuando terminan, abren un **Pull Request (PR)** para fusionar (**Merge**) su trabajo de vuelta. ¿Y qué pasa si un viernes a la tarde descubrís un bug urgente en Producción? Sale esa rama roja de emergencia llamada **Hotfix**, corrige el error directo arriba o hacemos un **Rollback** (volver en un clic a la foto del código de ayer que funcionaba bien)."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los puntos luminosos (nodos) de las tres líneas de colores (Main en verde, Develop en azul, Feature en violeta y Hotfix en rojo) para ver cómo cambia la explicación en el panel inferior.

### 🔗 Puente de Conexión → Slide 14 (Dónde Vive el Software: Los 3 Ambientes)
> **"Vimos que el código se mueve por ramas desde el desarrollo hasta producción. Eso nos lleva a una distinción fundamental: ¿en qué servidores vive ese código en cada etapa? Vamos a la Slide 14."**

---

## Slide 14: Dónde Vive el Software: Los 3 Ambientes
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Development · Staging / QA · Production · Aislamiento

### 🗣️ Guion Literal (Qué decir)
> "En software profesional jamás se prueba un cambio directamente frente a los clientes. Por eso la infraestructura se divide en tres 'escenarios' o ambientes aislados: 1) **Development (Dev)**: es el laboratorio de ensayo donde los programadores prueban, rompen y construyen cosas nuevas con datos ficticios. 2) **Staging (o QA / Pre-Producción)**: es el ensayo general con vestuario. Es un clon exacto del sistema real, pero cerrado al público. Acá entrás vos como PM y entra QA a probar las funcionalidades antes del lanzamiento. 3) **Production (Prod)**: es el escenario en vivo con público real pagando y operando. Todo cambio tiene que graduarse primero en Dev, aprobar en Staging y recién ahí pisar Producción."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 3 tarjetas de ambientes (1. Dev / Local, 2. Staging / Pre-Prod, 3. Production) destacando por qué jamás se prueba directo en Producción.

### 🔗 Puente de Conexión → Slide 15 (Bases de Datos: SQL vs. NoSQL vs. Vectorial (IA))
> **"Adentro de esos ambientes, el software necesita guardar toda la información del negocio. Y hoy, con la llegada de la IA, ya no existe un solo tipo de base de datos, sino tres. Pasemos a la Slide 15."**

---

## Slide 15: Bases de Datos: SQL vs. NoSQL vs. Vectorial (IA)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** SQL Relacional · NoSQL Documental · Vector DB (IA) · Decisión de PM

### 🗣️ Guion Literal (Qué decir)
> "Mirá estas tres tarjetas porque conectan directo con lo que vamos a ver la clase que viene de Inteligencia Artificial. Según qué dato quieras guardar, los ingenieros eligen entre tres motores: 1) **Base Relacional (SQL)**, como PostgreSQL: pensala como un Excel ultra estricto de filas y columnas. Es ideal para facturación, usuarios o inventarios donde no puede faltar ni un centavo. 2) **Base No-Relacional (NoSQL)**, como MongoDB: pensala como una carpeta de hojas sueltas en formato JSON donde cada documento puede tener una estructura distinta; ideal para catálogos flexibles o chats. Y 3) **Base de Datos Vectorial (Vector DB)**, como Pinecone: la estrella de la IA. No guarda palabras ni tablas rígidas, sino coordenadas matemáticas del *significado* de los textos (Embeddings). Es la memoria de largo plazo que nos va a permitir conectar un chatbot con los manuales y glosarios privados de una empresa."

### ⚡ Dinámica / Interacción en Pantalla
- Compará las 3 tarjetas: Relacional SQL (Azul), No-Relacional NoSQL (Naranja) y Base Vectorial de IA (Violeta).

### 🔗 Puente de Conexión → Slide 16 (Taller Práctico: De SDM Tradicional a IT & AI Leader)
> **"¡Impresionante todo el recorrido técnico que hicimos! Ahora bajemos todo este vocabulario a tierra firme para vos: ¿cómo traducimos tu experiencia real al idioma que buscan las empresas de IT? Vamos a la Slide 16."**

---

## Slide 16: Taller Práctico: De SDM Tradicional a IT & AI Leader
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Posicionamiento CV · IT Service Delivery · Cloud (AWS) & APIs · IA, FinOps & SLAs

### 🗣️ Guion Literal (Qué decir)
> "Mirá esta tabla porque la armé pensando exactamente en tu rol de **Service Delivery Manager** para cuando armes tu CV o tengas entrevistas en empresas de software. Muchas veces uno hace gestión de altísimo nivel pero la cuenta con palabras de operaciones tradicionales. Fijate en la fila 1 (**Service Delivery & Agile**): en vez de decir *'coordiné entregas, fechas (SLAs) y trato con clientes'*, en clave IT decís: **'Lideré el IT Service Delivery & ejecución end-to-end bajo marcos Agile (Scrum/Kanban), gestionando SLAs críticos, mitigación de riesgos, priorización de backlog en Jira y coordinación de squads multifuncionales'**. Mirá la fila 2 (**Cloud AWS, APIs & Releases**): en vez de *'seguimiento en plataformas y reclamos'*, es **'Gestioné flujos de entrega continua integrados vía APIs REST, pipelines CI/CD e infraestructura Cloud (AWS), liderando Incident Management, validación UAT en Staging y Release Management'**. Y en la fila 3 (**IA, FinOps & Calidad**): transformar el control de calidad y costos en **'Diseño de flujos de automatización con LLMs y arquitecturas RAG, optimizando márgenes operativos (FinOps) con 99.9% de cumplimiento de SLA'**. Si a esto le sumás el curso de *AWS Cloud Practitioner*, tu perfil queda blindado para entrar a cualquier tecnológica."

### ⚡ Dinámica / Interacción en Pantalla
- Leé en conjunto las 3 filas comparativas ('Antes: Service Delivery Tradicional' en rojo vs. 'Después: IT Service Delivery, Agile & AI' en verde) diseñadas específicamente para el perfil de Service Delivery Manager de Anabela.

### 🔗 Puente de Conexión → Slide 17 (Preguntas 'Rompe-Entrevistas' (Simulador Flip-Cards))
> **"Y cuando ese hiring manager de IT vea este perfil y te invite a una entrevista para probar cómo reaccionás en un equipo de software real, te va a hacer alguna de estas tres preguntas clásicas. Pasemos a la Slide 17 para practicarlas."**

---

## Slide 17: Preguntas 'Rompe-Entrevistas' (Simulador Flip-Cards)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Feature Flags · Git & Pull Requests · Rollback & Incidentes

### 🗣️ Guion Literal (Qué decir)
> "Hagamos un juego rápido con estas tres tarjetas interactivas. Mirá la primera: *'¿Cómo se controla el momento en que una funcionalidad llega al usuario si el código ya está en producción?'*. Hacemos clic para girarla: tu respuesta ganadora es hablar de **Feature Flags** (interruptores que separan el Deploy técnico del Release comercial). Mirá la segunda: *'¿Cómo evitás que varios desarrolladores trabajando en paralelo se pisen el código?'*. La giramos: hablás de **ramas aisladas (Feature Branches) y Pull Requests** con revisión de pares antes de fusionar a la rama principal. Y la tercera: *'¿Qué hacés como PM si se sube algo a producción y falla?'*. La giramos: primero estabilizar el servicio coordinando un **Rollback** a la versión estable anterior, y después hacer una retrospectiva (Post-Mortem) sin buscar culpables para mejorar los tests en Staging."

### ⚡ Dinámica / Interacción en Pantalla
- Pedile a Anabela que elija una tarjeta, leé la pregunta del frente y hacé clic sobre la tarjeta para girarla en 3D y revelar la 'Respuesta Estrella'. Repetí con las 3 tarjetas.

### 🔗 Puente de Conexión → Slide 18 (Cierre Sesión 1: Ruta hacia el Liderazgo en IA)
> **"Con estas tres respuestas ya sonás como alguien que lleva años respirando cultura de ingeniería de software. Pasemos a la última diapositiva, la Slide 18, para cerrar esta primera sesión y ver qué nos espera en la próxima."**

---

## Slide 18: Cierre Sesión 1: Ruta hacia el Liderazgo en IA
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Cierre S1 · Glosario S1 · Puente a Sesión 2 (LLMs & RAG)

### 🗣️ Guion Literal (Qué decir)
> "¡Felicitaciones Anabela, completamos la Sesión 1! Hoy armaste toda la estructura mental de cómo trabaja un equipo de desarrollo moderno: Frontend, Backend, APIs, verbos HTTP, códigos de estado, el pipeline de CI/CD, Git, los ambientes y las bases de datos. En el portal te queda habilitado el Glosario Completo de la Sesión 1 con todas las definiciones y metáforas para repasar cuando quieras."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá el paso 1 completado en el roadmap y mostrá en la barra superior el botón '📖 Glosario S1' para que repase los términos durante la semana.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 2: Ahora que ya sabés cómo funcionan las APIs y qué es una Base de Datos Vectorial, en nuestra próxima sesión nos vamos a meter de lleno adentro del cerebro de los LLMs (ChatGPT, Claude): cómo dividen el lenguaje en Tokens, cómo buscan por significado con Embeddings y cómo se diseña paso a paso una arquitectura RAG para darle memoria privada a una IA."**

---

