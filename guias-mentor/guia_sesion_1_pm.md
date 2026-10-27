# 🎙️ Sesión 1: Ecosistema IT, DevOps y Dinámicas de Equipos Ágiles

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Construir los cimientos técnicos de ingeniería de software moderna (Frontend, Backend, APIs REST, Git, CI/CD, Cloud/AWS, Metodologías Ágiles Scrum/Kanban, Ambientes y Bases de Datos) con una visión general y versátil del mundo IT, para que Anabela entienda cómo funcionan los equipos y sistemas tecnológicos sin importar qué camino específico decida tomar.
- **Total de Diapositivas:** 19 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 10 min** | De Software Clásico a la Era IA & Cloud | Slides 1 a 4 | Bienvenida, evolución del software (Red Neuronal y el paper 'Attention Is All You Need' de 2017) y el salto de Monolitos a Cloud (AWS) y Microservicios. |
| **10 - 22 min** | Arquitectura Web, APIs & HTTP | Slides 5 a 7 | Cómo hablan los sistemas entre sí: APIs REST, verbos HTTP (GET, POST, PUT, DELETE) con ejemplos reales y códigos de estado (200, 400, 500). |
| **22 - 42 min** | Ciclo DevOps, Roles, Agile (Scrum/Kanban) & Git | Slides 8 a 14 | El viaje de un feature por CI/CD, dinámicas de roles (Startup vs. Corporación), cómo la arquitectura de microservicios habilitó Agile (Scrum, Kanban y Scrumban), puntos de control del PM y ramas de Git. |
| **42 - 50 min** | Infraestructura: Ambientes & Datos | Slides 15 a 16 | Aislamiento de ambientes (Dev, Staging, Prod) y elección estratégica entre SQL, NoSQL y Bases Vectoriales. |
| **50 - 60 min** | Taller CV, Entrevistas & Cierre | Slides 17 a 19 | Cómo traducir experiencia de gestión al léxico IT/Agile, simulacro de 3 preguntas rompe-entrevistas y hoja de ruta. |

---

## Slide 1: Portada: De la Gestión Tradicional a la Era de la IA
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Bienvenida · Panorama General IT · Hoja de Ruta 4 Sesiones

### 🗣️ Guion Literal (Qué decir)
> "Hola Anabela, ¡bienvenida a nuestra primera sesión! La idea de estos cuatro encuentros es darte un mapa mental súper claro, general y práctico de cómo funciona por dentro el mundo de IT hoy: cómo se construye el software, qué hace cada rol técnico en un equipo ágil, qué es la nube (como AWS) y cómo se integran los sistemas de Inteligencia Artificial. Más allá de qué camino específico decidas tomar más adelante o cómo quieras aplicar esto en tu carrera, entender este lenguaje técnico te va a permitir hablar de igual a igual con cualquier equipo de tecnología y entender qué pasa atrás de cualquier plataforma digital."

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la línea de tiempo inferior de las 4 sesiones (1. DevOps & Cloud -> 2. IA & RAG -> 3. Agentes Autónomos -> 4. ROI, Evals & Entrevistas).

### 🔗 Puente de Conexión → Slide 2 (La Ola de la IA Generativa & El Paper Fundacional (2017))
> **"Antes de meternos en qué hace un equipo técnico día a día, miremos la foto grande de cómo evolucionó la tecnología hasta hoy. Pasemos a la Slide 2."**

---

## Slide 2: La Ola de la IA Generativa & El Paper Fundacional (2017)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Software Determinista · Red Neuronal · Attention Is All You Need (2017) · Transformers & LLMs

### 🗣️ Guion Literal (Qué decir)
> "Mirá primero las **tres tarjetas de arriba**, porque resumen cómo evolucionó la tecnología hasta hoy, y fijate que el corazón de esta historia nace justamente en el mundo de la **traducción de idiomas**:

• **1. Software Tradicional (Era Determinista, Pre-2017):** Durante décadas el software funcionó únicamente con reglas rígidas escritas a mano por programadores (`if / else`, es decir: *'si pasa A, ejecutá B'*). Si el usuario hace clic en un botón y tiene saldo, el sistema ejecuta la transferencia. Es exacto y predecible, pero si le das un texto libre o una frase ambigua en lenguaje humano, se rompe o no sabe qué hacer porque no entiende contexto.
• **2. El Paper Base de 2017 y el boom de ChatGPT (2022):** En junio de 2017, ocho investigadores de Google buscaban mejorar la **traducción automática** y publicaron un paper histórico llamado **'Attention Is All You Need'** (*La atención es todo lo que necesitás*). Ahí inventaron una arquitectura nueva de red neuronal llamada **Transformer** —que es literalmente la letra **T** de **GPT** (*Generative Pre-trained Transformer*)—. Ese motor científico fue evolucionando hasta que en **noviembre de 2022** OpenAI lanzó **ChatGPT**, poniéndole una ventana de chat amigable para que cualquier persona del mundo pudiera conversar con ese modelo.
• **3. Era de Sistemas con LLMs (2023 - Actualidad):** Hoy las empresas no tiran a la basura el software tradicional, sino que integran estos modelos de lenguaje (**LLMs**) adentro de sus aplicaciones mediante APIs y bases de datos para que el software pueda leer documentos, comprender intenciones y ejecutar tareas complejas.

Ahora mirá el **diagrama de abajo** para entender de forma súper sencilla cómo funciona ese motor del paper de 2017 en **4 pasos**:
• **¿Qué es una Red Neuronal?** En vez de programar reglas `if / else` a mano, una Red Neuronal es una estructura de **capas de nodos matemáticos conectados entre sí** (los círculos del dibujo, inspirados en las neuronas del cerebro) que aprenden patrones analizando millones de ejemplos. Antes de 2017, las redes neuronales leían una oración palabra por palabra en fila y, cuando llegaban al final de una frase larga, ya se habían 'olvidado' de las primeras palabras.
• **Paso 1 (Entrada):** Imaginate que entra la frase en español *'El'*, *'banco'*, *'cerró'*. Si tomás la palabra *'banco'* aislada, es ambigua: en inglés podría ser *'bank'* (entidad financiera) o *'bench'* (banco de plaza).
• **Paso 2 (Auto-Atención / Self-Attention — El gran invento de 2017):** En lugar de leer palabra por palabra a ciegas, el **Transformer** introduce la **Auto-Atención**: hace que todas las palabras de la oración se conecten entre sí al mismo tiempo y calcula cuánta relevancia tiene una sobre la otra. Fijate en las líneas naranjas cómo el modelo detecta que la palabra *'cerró'* está fuertemente vinculada con *'banco'*, dándole instantáneamente el **contexto financiero**.
• **Paso 3 y Paso 4 (Capas de la Red Neuronal y Salida):** Esa información ya enriquecida con su contexto viaja por las **capas de nodos de la Red Neuronal** (los nodos violetas) y en el **Paso 4** genera la traducción correcta: *'The bank closed'* en lugar de *'bench'*.

Con esta idea visual ya tenés claro qué cambió en 2017; en la **Sesión 2** vamos a meternos más en detalle en cómo operan estos modelos por dentro."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá primero de izquierda a derecha las 3 tarjetas superiores (1. Software Tradicional -> 2. El Paper de 2017 y ChatGPT -> 3. Era de Sistemas con LLMs) y luego recorré paso por paso el diagrama inferior (1. Entrada -> 2. Auto-Atención -> 3. Red Neuronal en Capas -> 4. Salida).

### 🔗 Puente de Conexión → Slide 3 (La Regla de Oro: IA + Ingeniería de Software)
> **"Ahora bien, acá aparece una pregunta clave: ¿por qué en esta primera sesión no arrancamos directo con IA y vemos primero software tradicional? Pasemos a la Slide 3 para ver la Regla de Oro."**

---

## Slide 3: La Regla de Oro: IA + Ingeniería de Software
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Arquitectura · Cimientos Técnicos · Criterio de PM

### 🗣️ Guion Literal (Qué decir)
> "Grabate esta regla de oro: un modelo de Inteligencia Artificial como GPT-4 o Claude no flota en el aire por arte de magia. Para que un usuario real pueda usarlo en una app o en una plataforma corporativa, ese cerebro de IA tiene que vivir envuelto en software tradicional: se consume a través de una **API**, guarda su contexto en una **Base de Datos** y se despliega en servidores en la nube con **código y pipelines**. Por eso hoy, en esta Sesión 1, vamos a dominar primero los cimientos del software, la nube y las metodologías ágiles. Cuando entiendas estas piezas hoy, en las Sesiones 2 y 3 vas a ver que armar un producto con IA es simplemente conectar un bloque nuevo sobre esta misma arquitectura."

### ⚡ Dinámica / Interacción en Pantalla
- Destacá las 3 tarjetas ('El LLM es una API', 'El Contexto es una BD', 'La Automatización es Código') y la frase inferior sobre por qué primero dominamos los cimientos del software.

### 🔗 Puente de Conexión → Slide 4 (El Gran Salto Temporal: 2012 vs. 2026)
> **"Para entender cómo trabajan hoy los equipos sobre estos cimientos, veamos cómo cambió la arquitectura del software en los últimos diez años. Vamos a la Slide 4."**

---

## Slide 4: El Gran Salto Temporal: 2012 vs. 2026
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Waterfall vs Agile · Monolito vs Microservicios · AWS, Docker & Kubernetes (K8s)

### 🗣️ Guion Literal (Qué decir)
> "Fijate este contraste porque es clave en cualquier charla de IT. Hace diez o doce años dominaba el modelo **'Waterfall' (Cascada)** y la arquitectura **'Monolítica'**: toda la aplicación estaba atada adentro de un único bloque gigante de código en un servidor físico propio de la empresa. Si un programador tocaba una coma en el módulo de reportes y metía un error, se caía toda la plataforma entera. Hoy en 2026 trabajamos con **'Microservicios en la Nube (Cloud)'** y metodologías Ágiles: dividimos el sistema en piezas chiquitas e independientes.

Y mirá las **tres tarjetas de abajo** porque son palabras que vas a escuchar todo el tiempo en reuniones de tecnología:
• **1) AWS / Cloud** (*Amazon Web Services*, *Microsoft Azure* o *Google Cloud*): en vez de comprar servidores físicos carísimos, las empresas alquilan capacidad de cómputo, bases de datos y almacenamiento en la nube pagando solo por lo que usan (si en algún momento hacés ese curso introductorio de AWS que habías visto, como el *Cloud Practitioner*, te da justamente este mapa general de qué piezas existen en la nube y cómo se cobran, sin necesidad de programar).
• **2) Docker (Contenedores):** Antes era un clásico que el programador dijera *'en mi computadora anda'* y cuando subían el código al servidor se rompiera todo porque tenían distintas versiones instaladas. **Docker** resolvió eso inventando los **contenedores** (como los containers metálicos de los barcos): una caja estándar y cerrada donde el programador mete su código junto con todo lo que necesita para correr. Así, esa caja funciona exactamente igual en su notebook que en AWS.
• **3) Kubernetes (también llamado `K8s` — El Orquestador):** Ahora imaginate qué pasa cuando tu aplicación crece y ya no tenés una sola cajita de Docker, sino **cientos de contenedores** corriendo al mismo tiempo (para login, pagos, catálogo, notificaciones). ¿Quién los controla? Ahí entra **Kubernetes**: es el **director de orquesta automático** (o el jefe de puerto que maneja todos los barcos). Hace tres cosas fundamentales solo:
  1. **Escala en picos de tráfico (Auto-scaling):** Si hay un *CyberMonday* y entran 50.000 personas a pagar, Kubernetes multiplica automáticamente las cajitas de Docker del módulo de pagos de 2 a 20 en segundos, y cuando termina el pico las apaga para ahorrar costos en la nube.
  2. **Se repara solo (Self-healing):** Si un contenedor se cuelga a las 3 de la mañana, Kubernetes lo detecta, lo tira a la basura y levanta uno nuevo sano en segundos sin que ningún cliente note la caída.
  3. **Actualiza sin cortar el servicio:** Cuando el equipo sube una versión nueva, va reemplazando las cajas viejas por las nuevas gradualmente sin apagar la plataforma."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic sobre el diagrama comparativo a la izquierda para abrirlo en pantalla completa (Lightbox), y luego recorré las 3 tarjetas inferiores del Glosario de Infraestructura (AWS / Cloud, Docker, Kubernetes).

### 🔗 Puente de Conexión → Slide 5 (APIs: El Pegamento del Software Moderno)
> **"Pero si ahora el sistema está dividido en piezas independientes que viven en distintos contenedores en la nube, ¿cómo hacen esas piezas para hablar entre sí y pasarse información? Ahí entra el concepto más importante de todos: las APIs. Pasemos a la Slide 5."**

---

## Slide 5: APIs: El Pegamento del Software Moderno
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** API REST · Frontend vs Backend · JSON · Contrato de Datos

### 🗣️ Guion Literal (Qué decir)
> "Si te preguntan qué es una API (Application Programming Interface), olvidate de las definiciones de Wikipedia y pensalo como el mesero de un restaurante. En cualquier aplicación tenés dos mundos: el 'Frontend' (la pantalla del celular o la web que ve el usuario, que sería la mesa del cliente con el menú) y el 'Backend' (los servidores y bases de datos donde ocurre la lógica pesada y segura, que sería la cocina). El cliente en la mesa no puede meterse directo a la cocina a revolver las ollas por seguridad. Necesita un intermediario: el mesero (la API). Cuando vos hacés clic en un botón en una plataforma, el Frontend le entrega un mensajito estructurado en formato JSON al mesero (la API), la API corre al Backend, busca el dato en la base de datos y vuelve a la pantalla con la respuesta lista. Incluso cuando conectemos a ChatGPT en la Sesión 2, lo vamos a hacer llamando a la API de OpenAI."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en el diagrama del Restaurante (Frontend / Mesero API / Cocina Backend) para ampliarlo y recorrer el viaje del pedido.

### 🔗 Puente de Conexión → Slide 6 (Verbos HTTP: El Vocabulario de las APIs)
> **"Ahora, ese mesero (la API) no habla en español coloquial; usa cuatro palabras universales para saber qué acción tiene que ejecutar en la cocina. Pasemos a la Slide 6 para conocer los 4 verbos HTTP y sus ejemplos prácticos."**

---

## Slide 6: Verbos HTTP: El Vocabulario de las APIs
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** GET · POST · PUT / PATCH · DELETE · Ejemplos en la Práctica

### 🗣️ Guion Literal (Qué decir)
> "Cada vez que los developers hablan de un 'endpoint de la API', van a mencionar uno de estos cuatro verbos HTTP. Mirá tanto las tarjetas de arriba como los ejemplos reales de abajo:
1) **GET** (Consultar): es solo lectura, no modifica nada. Ejemplo práctico abajo: abrís tu perfil o el panel de un proyecto y la app dispara `GET /proyectos/42` para traerte los datos en pantalla.
2) **POST** (Crear): envía datos nuevos al servidor para crear un registro o disparar un proceso. Ejemplo abajo: completás un formulario de 'Nueva tarea' o enviás un mensaje al chatbot (`POST /tickets`).
3) **PUT o PATCH** (Actualizar): modifica un registro que ya existía. Ejemplo abajo: cambiás el estado de un entregable a 'Aprobado' o editás su fecha límite (`PUT /proyectos/42`).
4) **DELETE** (Eliminar): borra un recurso de la base de datos (`DELETE /usuarios/19`). Cuando en una reunión escuchás 'ya está listo el GET pero falta el POST', entendés en un segundo que ya se puede ver la pantalla pero todavía falta guardar datos nuevos."

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 4 tarjetas superiores (GET, POST, PUT, DELETE) y luego señalá los 4 ejemplos prácticos inferiores ('¿Qué viaja por la API cuando el usuario usa una App?').

### 🔗 Puente de Conexión → Slide 7 (Códigos de Estado HTTP: El Semáforo de la Web)
> **"Cuando el mesero (la API) vuelve de la cocina hacia la pantalla, antes de darte el plato te muestra un número de tres dígitos para avisarte si salió todo bien o si hubo un accidente. Vamos a la Slide 7 para ver el Semáforo de los Códigos de Estado."**

---

## Slide 7: Códigos de Estado HTTP: El Semáforo de la Web
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** 200 OK · 400 Bad Request · 401/403 Auth · 500 Server Error

### 🗣️ Guion Literal (Qué decir)
> "Esto te da un superpoder enorme para diagnosticar problemas en IT sin saber programar. Cuando algo falla en una plataforma, el código numérico te dice inmediatamente de quién es la culpa: Si empieza con **2 (200 OK)**, luz verde: todo funcionó perfecto. Si empieza con **4 (errores 4xx)**, nuestros servidores están sanos; el error vino del lado del usuario o del pedido: por ejemplo, **400 Bad Request** es que se envió un formulario con datos inválidos; **401 o 403** es falta de permisos; y el famoso **404 Not Found** es que pidió una página o recurso que no existe. En cambio, si empieza con **5 (500 Internal Server Error o 503)**, ¡alerta roja!: la cocina se prendió fuego. El pedido estaba bien hecho, pero nuestro servidor Backend o la base de datos en la nube se cayó, afectando la disponibilidad (SLA) del servicio."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá los 3 bloques de códigos (2xx Verde, 4xx Naranja, 5xx Rojo) y explicá cómo cualquier rol de gestión en IT diagnostica un incidente con esto.

### 🔗 Puente de Conexión → Slide 8 (El Viaje de un Feature: Pipeline de CI/CD)
> **"Ya entendemos qué construyen los developers (Frontend, Backend, APIs). Ahora veamos CÓMO viaja ese código desde la computadora del programador hasta el usuario final sin romper nada. Pasemos a la Slide 8: El Viaje de un Feature."**

---

## Slide 8: El Viaje de un Feature: Pipeline de CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** CI/CD · Automatización · Pull Request · QA Automático

### 🗣️ Guion Literal (Qué decir)
> "Hacé clic conmigo en cada paso de esta línea porque este es el corazón del trabajo diario en IT: el famoso pipeline de **CI/CD** (Integración Continua y Entrega/Despliegue Continuo). Paso 1 (**Jira Ticket**): se define la necesidad en una Historia de Usuario con criterios de aceptación claros. Paso 2 (**Codificación**): el developer escribe la solución en su computadora local. Paso 3 (**CI - Integración Continua**): cuando el dev sube su código, un robot automático en la nube compila todo y corre pruebas automáticas para verificar que ese cambio no haya roto nada de lo que ya funcionaba. Paso 4 (**CD - Entrega Continua**): si el robot da luz verde, el código pasa por un ambiente de prueba (Staging) y, tras la aprobación, se despliega a Producción sin cortar el servicio."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic secuencialmente en los 4 nodos interactivos del pipeline (1. Jira Ticket -> 2. Codificación -> 3. CI Pruebas -> 4. CD Deploy) para que la barra de progreso se ilumine y muestre el detalle abajo.

### 🔗 Puente de Conexión → Slide 9 (Dinámica de Roles: El Ecosistema Startup)
> **"Ahora, ¿quiénes son las personas de carne y hueso que empujan este pipeline todos los días y cómo se organizan? Depende mucho del tamaño de la empresa. Pasemos a la Slide 9 para ver el Ecosistema Startup."**

---

## Slide 9: Dinámica de Roles: El Ecosistema Startup
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Full-Stack · Product Manager · Velocidad vs Estructura · Kanban & Sprints Cortos

### 🗣️ Guion Literal (Qué decir)
> "Cuando trabajás en una startup o en un equipo digital chico (de 5 a 15 personas), la regla es la versatilidad: acá no hay compartimentos rígidos. Fijate en las tarjetas: el **Project Manager / PO** concentra la estrategia, el backlog y las demos; los desarrolladores suelen ser **Full-Stack** (tocan tanto la pantalla Frontend como el servidor Backend y hasta configuran la nube); y el QA es liviano y rápido. Y mirá la barra verde de abajo: por esa misma velocidad, las startups suelen organizarse en **Kanban** (flujo continuo) o **Sprints cortos de 1 semana** con muy pocas reuniones, aprovechando que su arquitectura modular en la nube les permite subir mejoras todos los días."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las 4 tarjetas de roles (Full-Stack Developer, Project Manager / PO, QA / Tester Liviano, Analista de Datos) y señalá el recuadro verde inferior sobre la dinámica Agile en Startups.

### 🔗 Puente de Conexión → Slide 10 (Dinámica de Roles: La Matriz Corporativa)
> **"¿Y qué pasa cuando pasás de una startup chica a una gran corporación tecnológica o un banco digital con cientos de ingenieros? El mapa cambia por completo. Vamos a la Slide 10 para ver la Matriz Corporativa."**

---

## Slide 10: Dinámica de Roles: La Matriz Corporativa
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Especialización · PO vs PM · QA Automation · DevOps & SecOps · Squads Ágiles

### 🗣️ Guion Literal (Qué decir)
> "En una corporación grande, un error en producción cuesta millones, así que la clave es la especialización extrema. Acá el rol se divide: el **Project / Product Manager (PM)** mira el roadmap a largo plazo, el presupuesto y los directores, mientras que el **Product Owner (PO)** vive adentro del equipo técnico escribiendo historias de usuario y liderando el día a día. Los devs se dividen en **Frontend**, **Backend**, **Mobile** y **Tech Leads**; aparece **QA Automation** (que programa robots de prueba en el pipeline), el equipo de **Data** y **DevOps & SecOps**. Y fijate en el recuadro azul de abajo: como el sistema ya no es un Monolito sino **Microservicios**, la empresa divide a toda esta gente en **Squads Ágiles autónomos**, donde cada Squad es dueño de una parte del producto."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las 5 tarjetas de roles corporativos (PM vs. PO, Especialistas Devs, QA Automation, Data Stack Team, DevOps & SecOps) y destacá la barra azul inferior sobre Squads Ágiles.

### 🔗 Puente de Conexión → Slide 11 (Agile en IT: De la Nueva Arquitectura a Scrum y Kanban)
> **"Recién nombramos Squads Ágiles, Scrum y Kanban. Veamos en una sola pantalla cómo se conectan estos conceptos de Agile con la nueva arquitectura que dejó atrás al Monolito. Pasemos a la Slide 11."**

---

## Slide 11: Agile en IT: De la Nueva Arquitectura a Scrum y Kanban
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Monolito/Waterfall vs Microservicios/Agile · Scrum (Sprints) · Kanban (Flujo Continuo) · Híbridos (Scrumban)

### 🗣️ Guion Literal (Qué decir)
> "Mirá esta diapositiva porque une todo lo que venimos hablando: **por qué existe Agile en IT y cómo se relaciona directo con la arquitectura técnica**. Fijate en el bloque de arriba: cuando el software era un **Monolito** (un único bloque gigante acoplado), cambiar cualquier cosa afectaba a todo el sistema; por eso las empresas estaban obligadas a trabajar en **Waterfall (Cascada)**: meses diseñando, meses programando, meses probando y una sola entrega gigante cada 6 meses. Cuando la arquitectura evolucionó a **Microservicios, APIs independientes y CI/CD**, cada equipo chico (*Squad*) pudo empezar a construir y subir cambios de su propio módulo todas las semanas sin frenar a los demás. Eso hizo posible trabajar con **Metodologías Ágiles**.

¿Y qué se usa principalmente hoy en el mercado? Mirá las 3 tarjetas de abajo:
1) **Scrum (Ciclos Fijos / Sprints):** trabajás en iteraciones cerradas de 1 a 2 semanas llamadas *Sprints*, con cuatro ceremonias clave: *Planning* (qué entra al Sprint), *Daily* (15 minutos diarios para ver avances y bloqueos), *Review/Demo* (mostrar el software funcionando) y *Retrospectiva* (qué mejorar). Es el estándar para crear producto nuevo.
2) **Kanban (Flujo Continuo):** no hay sprints cerrados; es un tablero continuo (`To Do -> In Progress -> QA -> Done`) donde se limita cuántas tareas se hacen a la vez (*WIP Limit*) y se mide cuánto tarda un ticket de punta a punta (*Cycle Time*). Muy usado en operaciones, soporte o entregas continuas.
3) **La realidad en las empresas ('Scrumban' o versiones adaptadas):** casi ninguna empresa usa Scrum o Kanban 'de libro' al 100%. La mayoría usa una **versión adaptada**: toman las ceremonias y Sprints de Scrum para ordenarse, pero mueven los tickets en un tablero Kanban en Jira desplegando a medida que están listos."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá primero el bloque superior violeta ('Monolito / Waterfall 6 meses -> Microservicios + APIs / Squads Ágiles') y luego compará las 3 columnas inferiores: 1. Scrum, 2. Kanban y 3. Híbridos ('Scrumban').

### 🔗 Puente de Conexión → Slide 12 (El PM en el Pipeline: Puntos de Intervención)
> **"Entendiendo cómo trabajan los Squads con Scrum y Kanban, la pregunta clave es: ¿en qué momentos exactos del pipeline interviene un PM o líder de proyecto? Pasemos a la Slide 12."**

---

## Slide 12: El PM en el Pipeline: Puntos de Intervención
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** User Stories · Cobertura de Tests · Staging / UAT · Deploy vs Release · Feature Flags

### 🗣️ Guion Literal (Qué decir)
> "Esta diapositiva es oro puro para el día a día y para cualquier entrevista. Un PM o líder de entrega no escribe código, pero controla las compuertas del pipeline. En la etapa **01 (Jira Ticket)**, definís las User Stories con criterios de aceptación claros. En la **02 (Desarrollo)**, acompañás al Tech Lead para despejar dudas de negocio sin hacer micromanagement. En la **03 (CI / Tests)**, si las pruebas automáticas dan rojo, no se negocia la calidad. En la **04 (Staging / UAT)**, hacés la validación funcional antes de dar el *Sign-Off*. Y en la **05 (Producción)** aplicás las dos cajas de abajo: **Deploy no es lo mismo que Release**. *Deploy* es técnico (subir el código al servidor); *Release* es de negocio (habilitarlo a los usuarios usando un **Feature Flag**, que funciona como un interruptor para prender o apagar la función cuando quieras)."

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 5 columnas numeradas (01 Jira Ticket, 02 Desarrollo, 03 CI / Tests, 04 Staging / UAT, 05 Producción) y remarcá las 2 tarjetas inferiores: Regla de Oro (Deploy ≠ Release) y ¿Qué es un Feature Flag?.

### 🔗 Puente de Conexión → Slide 13 (Cada User Story de Jira = Una Rama de Git)
> **"Recién mencionamos que cada tarea que se prioriza en el backlog de Jira pasa a manos de un developer. ¿Cómo se conecta exactamente ese ticket de Jira con el código que escriben ellos? Vamos a la Slide 13."**

---

## Slide 13: Cada User Story de Jira = Una Rama de Git
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Trazabilidad · Jira a Git · Feature Branch · Pull Request

### 🗣️ Guion Literal (Qué decir)
> "Mirá qué limpia es esta simetría: a la izquierda tenés el tablero de Jira con las User Stories del Sprint (`US-41`, `US-42`, `US-43`). A la derecha tenés el repositorio de código en Git. Por cada historia de usuario que pasa a 'En Desarrollo', el programador crea una copia aislada del código con ese mismo código, llamada **rama o branch** (por ejemplo, `feature/US-42-dashboard`). Así, si en la Daily un dev comenta 'la rama de la US-42 ya está en Code Review', sabés al instante qué funcionalidad está terminada y esperando revisión antes de pasar a QA."

### ⚡ Dinámica / Interacción en Pantalla
- Pasá el mouse por los tickets de la izquierda (US-41, US-42, US-43, US-44) para ver cómo se iluminan en pareja con su flecha y su rama correspondiente en Git a la derecha.

### 🔗 Puente de Conexión → Slide 14 (Git: Control de Versiones Moderno)
> **"Para que nunca te mareen cuando hablen de ramas, sub-ramas, merges o ambientes en Git, veamos visualmente cómo viaja esa rama hasta Producción. Pasemos a la Slide 14."**

---

## Slide 14: Git: Control de Versiones Moderno
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Git · Main / Develop · Sub-ramas (Feature, Testing, Pre-Prod) · Pull Request & Merge

### 🗣️ Guion Literal (Qué decir)
> "Pensá en **Git** como una máquina del tiempo que guarda cada cambio del código para que nadie pise el trabajo de otro. Hacé clic conmigo en los 6 pasos del gráfico: abajo tenés la línea azul continua de **develop** y arriba de todo la línea verde continua de **main (Producción)**, donde vive el sistema real. Fijate cómo en el paso **1 y 2** el programador saca una sub-rama violeta (`feature/US-42`) desde `develop`, programa ahí aislado y abre un **Code Review (Pull Request)**. En el paso **3**, su código se integra (`Merge`) a `develop`. De ahí, en el paso **4**, sale una sub-rama amarilla hacia **testing** para las pruebas de QA; cuando aprueba, en el paso **5** pasa a la sub-rama naranja de **pre-prod (Staging)** para el control final de seguridad y UAT; y recién en el paso **6** se fusiona a **main (Producción)**."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los 6 nodos numerados del diagrama (1. Nueva Rama -> 2. Code Review -> 3. Merge a develop -> 4. QA Testing -> 5. Security Gate en pre-prod -> 6. Release Final en main) para ver cómo cambia la explicación abajo.

### 🔗 Puente de Conexión → Slide 15 (Dónde Vive el Software: Los 3 Ambientes)
> **"Vimos que en Git el código va pasando por testing, pre-prod y main. Eso nos lleva directo a los 3 ambientes de infraestructura donde corre ese software. Vamos a la Slide 15."**

---

## Slide 15: Dónde Vive el Software: Los 3 Ambientes
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Development · Staging / Pre-Prod · Production · Aislamiento

### 🗣️ Guion Literal (Qué decir)
> "En software profesional jamás se prueba un cambio directamente frente a los clientes. Por eso la infraestructura en la nube se divide en tres 'escenarios' o ambientes aislados: 1) **Dev Environment (El Laboratorio)**: donde los programadores prueban y rompen cosas todos los días con datos ficticios. 2) **Staging / Pre-Prod (El Simulador de Vuelo)**: es una réplica exacta de producción pero cerrada al público; acá es donde se hacen las pruebas de aceptación (UAT) y se da el *Sign-Off*. 3) **Prod Environment (El Estadio Lleno)**: acá viven los usuarios reales y todo cambio entra validado y controlado con Feature Flags."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 3 tarjetas de ambientes (1. Dev Environment, 2. Staging Environment, 3. Prod Environment) destacando el rol en cada uno.

### 🔗 Puente de Conexión → Slide 16 (Bases de Datos: SQL vs. NoSQL vs. Vectorial (IA))
> **"Adentro de esos ambientes, el software necesita guardar toda la información del negocio. Y hoy, con la llegada de la IA, convivimos con tres tipos de bases de datos. Pasemos a la Slide 16."**

---

## Slide 16: Bases de Datos: SQL vs. NoSQL vs. Vectorial (IA)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** SQL Relacional · NoSQL Documental · Vector DB (IA) · Criterio de Negocio

### 🗣️ Guion Literal (Qué decir)
> "Mirá estas tres tarjetas porque conectan directo con lo que vamos a ver la clase que viene de Inteligencia Artificial. Según qué dato quieras guardar, los ingenieros eligen entre tres motores: 1) **Base Relacional (SQL)**, como PostgreSQL: pensala como un Excel ultra estricto de filas y columnas. Es obligatoria para pagos, facturación o contabilidad donde no puede faltar ni un centavo. 2) **Base No-Relacional (NoSQL)**, como MongoDB: pensala como una carpeta de hojas sueltas en formato JSON donde cada documento puede tener campos distintos; ideal para catálogos dinámicos o lanzar productos rápido. Y 3) **Base de Datos Vectorial (Vector DB)**, como Pinecone: la estrella de la IA. Guarda representaciones matemáticas del *significado* de los textos (Embeddings) para buscar por concepto y alimentar modelos de IA con datos privados (RAG)."

### ⚡ Dinámica / Interacción en Pantalla
- Compará las 3 tarjetas: Relacional SQL (Azul), No-Relacional NoSQL (Naranja) y Base Vectorial de IA (Violeta).

### 🔗 Puente de Conexión → Slide 17 (Taller Práctico: Tu Perfil en Clave IT & AI)
> **"¡Impresionante todo el recorrido técnico que hicimos! Ahora bajemos todo este vocabulario a tierra firme: ¿cómo se traduce la experiencia de gestión tradicional al idioma que usan las empresas de IT? Vamos a la Slide 17."**

---

## Slide 17: Taller Práctico: Tu Perfil en Clave IT & AI
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Posicionamiento CV · Gestión & Agile · Sistemas & Cloud · IA & Calidad

### 🗣️ Guion Literal (Qué decir)
> "Mirá esta tabla porque acá se ve cómo todo el vocabulario técnico que vimos hoy sirve para traducir experiencia de gestión tradicional al idioma que usan las empresas de tecnología, sea para el rol que elijas explorar. Fijate en la fila 1 (**Gestión & Agile**): cómo el coordinar equipos, entregas y clientes se traduce en clave tecnológica a liderar el delivery bajo marcos Agile (Scrum/Kanban), gestionando SLAs y priorizando un backlog en Jira. Mirá la fila 2 (**Sistemas & Cloud**): cómo el seguimiento en plataformas y resolución de reclamos se conecta con flujos integrados vía APIs REST, pipelines de CI/CD, validación en Staging (UAT) e infraestructura Cloud (AWS). Y en la fila 3 (**IA & Calidad**): cómo llevar el control de calidad tradicional hacia flujos de automatización asistida por LLMs y arquitecturas RAG."

### ⚡ Dinámica / Interacción en Pantalla
- Leé en conjunto las 3 filas comparativas ('Antes: Enfoque Operativo / Tradicional' vs. 'Después: Enfoque IT, Agile & AI') como ejercicio general de traducción de perfil.

### 🔗 Puente de Conexión → Slide 18 (Preguntas 'Rompe-Entrevistas' (Simulador Flip-Cards))
> **"Y si en algún momento tenés una charla o entrevista en el mundo IT y quieren ver si entendés cómo funciona la dinámica de un equipo de software en la práctica, suelen hacer alguna de estas tres preguntas clásicas. Pasemos a la Slide 18 para verlas."**

---

## Slide 18: Preguntas 'Rompe-Entrevistas' (Simulador Flip-Cards)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Feature Flags · Git & Pull Requests · Rollback & Incidentes

### 🗣️ Guion Literal (Qué decir)
> "Hagamos un juego rápido con estas tres tarjetas interactivas. Mirá la primera: *'¿Cómo se controla el momento en que una funcionalidad llega al usuario si el código ya está en producción?'*. Hacemos clic para girarla: tu respuesta ganadora es hablar de **Feature Flags** (interruptores que separan el Deploy técnico del Release comercial). Mirá la segunda: *'¿Cómo evitás que varios desarrolladores trabajando en paralelo se pisen el código?'*. La giramos: hablás de **ramas aisladas (Feature Branches) y Pull Requests** con revisión de pares antes de fusionar a la rama principal. Y la tercera: *'¿Qué hacés si se sube algo a producción y falla?'*. La giramos: primero restaurar el servicio coordinando un **Rollback** a la versión estable anterior, y después hacer una reunión de análisis (Post-Mortem) sin buscar culpables para mejorar los filtros en QA/Staging."

### ⚡ Dinámica / Interacción en Pantalla
- Pedile a Anabela que elija una tarjeta, leé la pregunta del frente y hacé clic sobre la tarjeta para girarla en 3D y revelar la 'Respuesta Estrella'. Repetí con las 3 tarjetas.

### 🔗 Puente de Conexión → Slide 19 (Cierre Sesión 1: Ruta hacia el Liderazgo en IA)
> **"Con estas tres respuestas ya hablás el mismo idioma que cualquier equipo de ingeniería de software. Pasemos a la última diapositiva, la Slide 19, para cerrar esta primera sesión y ver qué nos espera en la próxima."**

---

## Slide 19: Cierre Sesión 1: Ruta hacia el Liderazgo en IA
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Cierre S1 · Glosario S1 · Puente a Sesión 2 (LLMs & RAG)

### 🗣️ Guion Literal (Qué decir)
> "¡Felicitaciones Anabela, completamos la Sesión 1! Hoy armaste toda la estructura mental de cómo trabaja un equipo de desarrollo moderno: el salto del Monolito a Microservicios y Cloud (AWS), Frontend, Backend, APIs, verbos y códigos HTTP, el pipeline de CI/CD, los roles en Startups y Corporaciones, Agile (Scrum, Kanban y Scrumban), Git, los ambientes y las bases de datos. En el portal tenés el Glosario Completo de la Sesión 1 y una actividad práctica cortita de 10 minutos para bajar todo esto a aplicaciones cotidianas."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá el paso 1 completado en el roadmap y mostrá en la barra superior el botón '📖 Glosario S1' para que repase los términos durante la semana.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 2: Ahora que ya sabés qué es una Red Neuronal en pocas palabras, cómo funcionan las APIs y qué es una Base de Datos Vectorial, en nuestra próxima sesión vamos a abrir en detalle ese paper de 2017 y el cerebro de los LLMs: Tokens, Ventanas de Contexto, Embeddings y cómo diseñar una arquitectura RAG."**

---

