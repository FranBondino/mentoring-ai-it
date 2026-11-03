// Speaker Scripts & Slide Connections Data — Sessions 1 & 2 (Anabela Hotian)

const SESSION_1_DATA = {
    sessionNum: 1,
    title: "Ecosistema IT, DevOps y Dinámicas de Equipos Ágiles",
    subtitle: "Guion completo palabra por palabra, dinámicas interactivas y puentes de conexión entre las 19 diapositivas de la Sesión 1 para Anabela Hotian.",
    accentHex: "#3b82f6",
    accentRgb: "59, 130, 246",
    goal: "Construir los cimientos técnicos de ingeniería de software moderna (Frontend, Backend, APIs REST, Git, CI/CD, Cloud/AWS, Metodologías Ágiles Scrum/Kanban, Ambientes y Bases de Datos) con una visión general y versátil del mundo IT, para que Anabela entienda cómo funcionan los equipos y sistemas tecnológicos sin importar qué camino específico decida tomar.",
    agenda: [
        { time: "00 - 10 min", module: "De Software Clásico a la Era IA & Cloud", slides: "Slides 1 a 4", focus: "Bienvenida, evolución del software (Red Neuronal y el paper 'Attention Is All You Need' de 2017) y el salto de Monolitos a Cloud (AWS) y Microservicios." },
        { time: "10 - 22 min", module: "Arquitectura Web, APIs & HTTP", slides: "Slides 5 a 7", focus: "Cómo hablan los sistemas entre sí: APIs REST, verbos HTTP (GET, POST, PUT, DELETE) con ejemplos reales y códigos de estado (200, 400, 500)." },
        { time: "22 - 42 min", module: "Ciclo DevOps, Roles, Agile (Scrum/Kanban) & Git", slides: "Slides 8 a 14", focus: "El viaje de un feature por CI/CD, dinámicas de roles (Startup vs. Corporación), cómo la arquitectura de microservicios habilitó Agile (Scrum, Kanban y Scrumban), puntos de control del PM y ramas de Git." },
        { time: "42 - 50 min", module: "Infraestructura: Ambientes & Datos", slides: "Slides 15 a 16", focus: "Aislamiento de ambientes (Dev, Staging, Prod) y elección estratégica entre SQL, NoSQL y Bases Vectoriales." },
        { time: "50 - 60 min", module: "Taller CV, Entrevistas & Cierre", slides: "Slides 17 a 19", focus: "Cómo traducir experiencia de gestión al léxico IT/Agile, simulacro de 3 preguntas rompe-entrevistas y hoja de ruta." }
    ],
    slides: [
        {
            num: 1,
            id: "slide1",
            title: "Portada: De la Gestión Tradicional a la Era de la IA",
            duration: "3 Min",
            tags: ["Bienvenida", "Panorama General IT", "Hoja de Ruta 4 Sesiones"],
            interaction: "Mostrá la línea de tiempo inferior de las 4 sesiones (1. DevOps & Cloud -> 2. IA & RAG -> 3. Agentes Autónomos -> 4. ROI, Evals & Entrevistas).",
            script: "Hola Anabela, ¡bienvenida a nuestra primera sesión! La idea de estos cuatro encuentros es darte un mapa mental súper claro, general y práctico de cómo funciona por dentro el mundo de IT hoy: cómo se construye el software, qué hace cada rol técnico en un equipo ágil, qué es la nube (como AWS) y cómo se integran los sistemas de Inteligencia Artificial. Más allá de qué camino específico decidas tomar más adelante o cómo quieras aplicar esto en tu carrera, entender este lenguaje técnico te va a permitir hablar de igual a igual con cualquier equipo de tecnología y entender qué pasa atrás de cualquier plataforma digital.",
            bridge: "Antes de meternos en qué hace un equipo técnico día a día, miremos la foto grande de cómo evolucionó la tecnología hasta hoy. Pasemos a la Slide 2."
        },
        {
            num: 2,
            id: "slide1b",
            title: "La Ola de la IA Generativa & El Paper Fundacional (2017)",
            duration: "5 Min",
            tags: ["Software Determinista", "Red Neuronal", "Attention Is All You Need (2017)", "Transformers & LLMs"],
            interaction: "Señalá primero de izquierda a derecha las 3 tarjetas superiores (1. Software Tradicional -> 2. El Paper de 2017 y ChatGPT -> 3. Era de Sistemas con LLMs) y luego recorré paso por paso el diagrama inferior (1. Entrada -> 2. Auto-Atención -> 3. Red Neuronal en Capas -> 4. Salida).",
            script: "Mirá primero las **tres tarjetas de arriba**, porque resumen cómo evolucionó la tecnología hasta hoy, y fijate que el corazón de esta historia nace justamente en el mundo de la **traducción de idiomas**:\n\n• **1. Software Tradicional (Era Determinista, Pre-2017):** Durante décadas el software funcionó únicamente con reglas rígidas escritas a mano por programadores (`if / else`, es decir: *'si pasa A, ejecutá B'*). Si el usuario hace clic en un botón y tiene saldo, el sistema ejecuta la transferencia. Es exacto y predecible, pero si le das un texto libre o una frase ambigua en lenguaje humano, se rompe o no sabe qué hacer porque no entiende contexto.\n• **2. El Paper Base de 2017 y el boom de ChatGPT (2022):** En junio de 2017, ocho investigadores de Google buscaban mejorar la **traducción automática** y publicaron un paper histórico llamado **'Attention Is All You Need'** (*La atención es todo lo que necesitás*). Ahí inventaron una arquitectura nueva de red neuronal llamada **Transformer** —que es literalmente la letra **T** de **GPT** (*Generative Pre-trained Transformer*)—. Ese motor científico fue evolucionando hasta que en **noviembre de 2022** OpenAI lanzó **ChatGPT**, poniéndole una ventana de chat amigable para que cualquier persona del mundo pudiera conversar con ese modelo.\n• **3. Era de Sistemas con LLMs (2023 - Actualidad):** Hoy las empresas no tiran a la basura el software tradicional, sino que integran estos modelos de lenguaje (**LLMs**) adentro de sus aplicaciones mediante APIs y bases de datos para que el software pueda leer documentos, comprender intenciones y ejecutar tareas complejas.\n\nAhora mirá el **diagrama de abajo** para entender de forma súper sencilla cómo funciona ese motor del paper de 2017 en **4 pasos**:\n• **¿Qué es una Red Neuronal?** En vez de programar reglas `if / else` a mano, una Red Neuronal es una estructura de **capas de nodos matemáticos conectados entre sí** (los círculos del dibujo, inspirados en las neuronas del cerebro) que aprenden patrones analizando millones de ejemplos. Antes de 2017, las redes neuronales leían una oración palabra por palabra en fila y, cuando llegaban al final de una frase larga, ya se habían 'olvidado' de las primeras palabras.\n• **Paso 1 (Entrada):** Imaginate que entra la frase en español *'El'*, *'banco'*, *'cerró'*. Si tomás la palabra *'banco'* aislada, es ambigua: en inglés podría ser *'bank'* (entidad financiera) o *'bench'* (banco de plaza).\n• **Paso 2 (Auto-Atención / Self-Attention — El gran invento de 2017):** En lugar de leer palabra por palabra a ciegas, el **Transformer** introduce la **Auto-Atención**: hace que todas las palabras de la oración se conecten entre sí al mismo tiempo y calcula cuánta relevancia tiene una sobre la otra. Fijate en las líneas naranjas cómo el modelo detecta que la palabra *'cerró'* está fuertemente vinculada con *'banco'*, dándole instantáneamente el **contexto financiero**.\n• **Paso 3 y Paso 4 (Capas de la Red Neuronal y Salida):** Esa información ya enriquecida con su contexto viaja por las **capas de nodos de la Red Neuronal** (los nodos violetas) y en el **Paso 4** genera la traducción correcta: *'The bank closed'* en lugar de *'bench'*.\n\nCon esta idea visual ya tenés claro qué cambió en 2017; en la **Sesión 2** vamos a meternos más en detalle en cómo operan estos modelos por dentro.",
            bridge: "Ahora bien, acá aparece una pregunta clave: ¿por qué en esta primera sesión no arrancamos directo con IA y vemos primero software tradicional? Pasemos a la Slide 3 para ver la Regla de Oro."
        },
        {
            num: 3,
            id: "slide2",
            title: "La Regla de Oro: IA + Ingeniería de Software",
            duration: "3 Min",
            tags: ["Arquitectura", "Cimientos Técnicos", "Criterio de PM"],
            interaction: "Destacá las 3 tarjetas ('El LLM es una API', 'El Contexto es una BD', 'La Automatización es Código') y la frase inferior sobre por qué primero dominamos los cimientos del software.",
            script: "Grabate esta regla de oro: un modelo de Inteligencia Artificial como GPT-4 o Claude no flota en el aire por arte de magia. Para que un usuario real pueda usarlo en una app o en una plataforma corporativa, ese cerebro de IA tiene que vivir envuelto en software tradicional: se consume a través de una **API**, guarda su contexto en una **Base de Datos** y se despliega en servidores en la nube con **código y pipelines**. Por eso hoy, en esta Sesión 1, vamos a dominar primero los cimientos del software, la nube y las metodologías ágiles. Cuando entiendas estas piezas hoy, en las Sesiones 2 y 3 vas a ver que armar un producto con IA es simplemente conectar un bloque nuevo sobre esta misma arquitectura.",
            bridge: "Para entender cómo trabajan hoy los equipos sobre estos cimientos, veamos cómo cambió la arquitectura del software en los últimos diez años. Vamos a la Slide 4."
        },
        {
            num: 4,
            id: "slide3",
            title: "El Gran Salto Temporal: 2012 vs. 2026",
            duration: "5 Min",
            tags: ["Waterfall vs Agile", "Monolito vs Microservicios", "AWS, Docker & Kubernetes (K8s)"],
            interaction: "Hacé clic sobre el diagrama comparativo a la izquierda para abrirlo en pantalla completa (Lightbox), y luego recorré las 3 tarjetas inferiores del Glosario de Infraestructura (AWS / Cloud, Docker, Kubernetes).",
            script: "Fijate este contraste porque es clave en cualquier charla de IT. Hace diez o doce años dominaba el modelo **'Waterfall' (Cascada)** y la arquitectura **'Monolítica'**: toda la aplicación estaba atada adentro de un único bloque gigante de código en un servidor físico propio de la empresa. Si un programador tocaba una coma en el módulo de reportes y metía un error, se caía toda la plataforma entera. Hoy en 2026 trabajamos con **'Microservicios en la Nube (Cloud)'** y metodologías Ágiles: dividimos el sistema en piezas chiquitas e independientes.\n\nY mirá las **tres tarjetas de abajo** porque son palabras que vas a escuchar todo el tiempo en reuniones de tecnología:\n• **1) AWS / Cloud** (*Amazon Web Services*, *Microsoft Azure* o *Google Cloud*): en vez de comprar servidores físicos carísimos, las empresas alquilan capacidad de cómputo, bases de datos y almacenamiento en la nube pagando solo por lo que usan (si en algún momento hacés ese curso introductorio de AWS que habías visto, como el *Cloud Practitioner*, te da justamente este mapa general de qué piezas existen en la nube y cómo se cobran, sin necesidad de programar).\n• **2) Docker (Contenedores):** Antes era un clásico que el programador dijera *'en mi computadora anda'* y cuando subían el código al servidor se rompiera todo porque tenían distintas versiones instaladas. **Docker** resolvió eso inventando los **contenedores** (como los containers metálicos de los barcos): una caja estándar y cerrada donde el programador mete su código junto con todo lo que necesita para correr. Así, esa caja funciona exactamente igual en su notebook que en AWS.\n• **3) Kubernetes (también llamado `K8s` — El Orquestador):** Ahora imaginate qué pasa cuando tu aplicación crece y ya no tenés una sola cajita de Docker, sino **cientos de contenedores** corriendo al mismo tiempo (para login, pagos, catálogo, notificaciones). ¿Quién los controla? Ahí entra **Kubernetes**: es el **director de orquesta automático** (o el jefe de puerto que maneja todos los barcos). Hace tres cosas fundamentales solo:\n  1. **Escala en picos de tráfico (Auto-scaling):** Si hay un *CyberMonday* y entran 50.000 personas a pagar, Kubernetes multiplica automáticamente las cajitas de Docker del módulo de pagos de 2 a 20 en segundos, y cuando termina el pico las apaga para ahorrar costos en la nube.\n  2. **Se repara solo (Self-healing):** Si un contenedor se cuelga a las 3 de la mañana, Kubernetes lo detecta, lo tira a la basura y levanta uno nuevo sano en segundos sin que ningún cliente note la caída.\n  3. **Actualiza sin cortar el servicio:** Cuando el equipo sube una versión nueva, va reemplazando las cajas viejas por las nuevas gradualmente sin apagar la plataforma.",
            bridge: "Pero si ahora el sistema está dividido en piezas independientes que viven en distintos contenedores en la nube, ¿cómo hacen esas piezas para hablar entre sí y pasarse información? Ahí entra el concepto más importante de todos: las APIs. Pasemos a la Slide 5."
        },
        {
            num: 5,
            id: "slide4",
            title: "APIs: El Pegamento del Software Moderno",
            duration: "4 Min",
            tags: ["API REST", "Frontend vs Backend", "JSON", "Contrato de Datos"],
            interaction: "Hacé clic en el diagrama del Restaurante (Frontend / Mesero API / Cocina Backend) para ampliarlo y recorrer el viaje del pedido.",
            script: "Si te preguntan qué es una API (Application Programming Interface), olvidate de las definiciones de Wikipedia y pensalo como el mesero de un restaurante. En cualquier aplicación tenés dos mundos: el 'Frontend' (la pantalla del celular o la web que ve el usuario, que sería la mesa del cliente con el menú) y el 'Backend' (los servidores y bases de datos donde ocurre la lógica pesada y segura, que sería la cocina). El cliente en la mesa no puede meterse directo a la cocina a revolver las ollas por seguridad. Necesita un intermediario: el mesero (la API). Cuando vos hacés clic en un botón en una plataforma, el Frontend le entrega un mensajito estructurado en formato JSON al mesero (la API), la API corre al Backend, busca el dato en la base de datos y vuelve a la pantalla con la respuesta lista. Incluso cuando conectemos a ChatGPT en la Sesión 2, lo vamos a hacer llamando a la API de OpenAI.",
            bridge: "Ahora, ese mesero (la API) no habla en español coloquial; usa cuatro palabras universales para saber qué acción tiene que ejecutar en la cocina. Pasemos a la Slide 6 para conocer los 4 verbos HTTP y sus ejemplos prácticos."
        },
        {
            num: 6,
            id: "slide4b",
            title: "Verbos HTTP: El Vocabulario de las APIs",
            duration: "3 Min",
            tags: ["GET", "POST", "PUT / PATCH", "DELETE", "Ejemplos en la Práctica"],
            interaction: "Recorré las 4 tarjetas superiores (GET, POST, PUT, DELETE) y luego señalá los 4 ejemplos prácticos inferiores ('¿Qué viaja por la API cuando el usuario usa una App?').",
            script: "Cada vez que los developers hablan de un 'endpoint de la API', van a mencionar uno de estos cuatro verbos HTTP. Mirá tanto las tarjetas de arriba como los ejemplos reales de abajo:\n1) **GET** (Consultar): es solo lectura, no modifica nada. Ejemplo práctico abajo: abrís tu perfil o el panel de un proyecto y la app dispara `GET /proyectos/42` para traerte los datos en pantalla.\n2) **POST** (Crear): envía datos nuevos al servidor para crear un registro o disparar un proceso. Ejemplo abajo: completás un formulario de 'Nueva tarea' o enviás un mensaje al chatbot (`POST /tickets`).\n3) **PUT o PATCH** (Actualizar): modifica un registro que ya existía. Ejemplo abajo: cambiás el estado de un entregable a 'Aprobado' o editás su fecha límite (`PUT /proyectos/42`).\n4) **DELETE** (Eliminar): borra un recurso de la base de datos (`DELETE /usuarios/19`). Cuando en una reunión escuchás 'ya está listo el GET pero falta el POST', entendés en un segundo que ya se puede ver la pantalla pero todavía falta guardar datos nuevos.",
            bridge: "Cuando el mesero (la API) vuelve de la cocina hacia la pantalla, antes de darte el plato te muestra un número de tres dígitos para avisarte si salió todo bien o si hubo un accidente. Vamos a la Slide 7 para ver el Semáforo de los Códigos de Estado."
        },
        {
            num: 7,
            id: "slide4c",
            title: "Códigos de Estado HTTP: El Semáforo de la Web",
            duration: "3 Min",
            tags: ["200 OK", "400 Bad Request", "401/403 Auth", "500 Server Error"],
            interaction: "Señalá los 3 bloques de códigos (2xx Verde, 4xx Naranja, 5xx Rojo) y explicá cómo cualquier rol de gestión en IT diagnostica un incidente con esto.",
            script: "Esto te da un superpoder enorme para diagnosticar problemas en IT sin saber programar. Cuando algo falla en una plataforma, el código numérico te dice inmediatamente de quién es la culpa: Si empieza con **2 (200 OK)**, luz verde: todo funcionó perfecto. Si empieza con **4 (errores 4xx)**, nuestros servidores están sanos; el error vino del lado del usuario o del pedido: por ejemplo, **400 Bad Request** es que se envió un formulario con datos inválidos; **401 o 403** es falta de permisos; y el famoso **404 Not Found** es que pidió una página o recurso que no existe. En cambio, si empieza con **5 (500 Internal Server Error o 503)**, ¡alerta roja!: la cocina se prendió fuego. El pedido estaba bien hecho, pero nuestro servidor Backend o la base de datos en la nube se cayó, afectando la disponibilidad (SLA) del servicio.",
            bridge: "Ya entendemos qué construyen los developers (Frontend, Backend, APIs). Ahora veamos CÓMO viaja ese código desde la computadora del programador hasta el usuario final sin romper nada. Pasemos a la Slide 8: El Viaje de un Feature."
        },
        {
            num: 8,
            id: "slide5",
            title: "El Viaje de un Feature: Pipeline de CI/CD",
            duration: "4 Min",
            tags: ["CI/CD", "Automatización", "Pull Request", "QA Automático"],
            interaction: "Hacé clic secuencialmente en los 4 nodos interactivos del pipeline (1. Jira Ticket -> 2. Codificación -> 3. CI Pruebas -> 4. CD Deploy) para que la barra de progreso se ilumine y muestre el detalle abajo.",
            script: "Hacé clic conmigo en cada paso de esta línea porque este es el corazón del trabajo diario en IT: el famoso pipeline de **CI/CD** (Integración Continua y Entrega/Despliegue Continuo). Paso 1 (**Jira Ticket**): se define la necesidad en una Historia de Usuario con criterios de aceptación claros. Paso 2 (**Codificación**): el developer escribe la solución en su computadora local. Paso 3 (**CI - Integración Continua**): cuando el dev sube su código, un robot automático en la nube compila todo y corre pruebas automáticas para verificar que ese cambio no haya roto nada de lo que ya funcionaba. Paso 4 (**CD - Entrega Continua**): si el robot da luz verde, el código pasa por un ambiente de prueba (Staging) y, tras la aprobación, se despliega a Producción sin cortar el servicio.",
            bridge: "Ahora, ¿quiénes son las personas de carne y hueso que empujan este pipeline todos los días y cómo se organizan? Depende mucho del tamaño de la empresa. Pasemos a la Slide 9 para ver el Ecosistema Startup."
        },
        {
            num: 9,
            id: "slide5b",
            title: "Dinámica de Roles: El Ecosistema Startup",
            duration: "3 Min",
            tags: ["Full-Stack", "Product Manager", "Velocidad vs Estructura", "Kanban & Sprints Cortos"],
            interaction: "Hacé clic en las 4 tarjetas de roles (Full-Stack Developer, Project Manager / PO, QA / Tester Liviano, Analista de Datos) y señalá el recuadro verde inferior sobre la dinámica Agile en Startups.",
            script: "Cuando trabajás en una startup o en un equipo digital chico (de 5 a 15 personas), la regla es la versatilidad: acá no hay compartimentos rígidos. Fijate en las tarjetas: el **Project Manager / PO** concentra la estrategia, el backlog y las demos; los desarrolladores suelen ser **Full-Stack** (tocan tanto la pantalla Frontend como el servidor Backend y hasta configuran la nube); y el QA es liviano y rápido. Y mirá la barra verde de abajo: por esa misma velocidad, las startups suelen organizarse en **Kanban** (flujo continuo) o **Sprints cortos de 1 semana** con muy pocas reuniones, aprovechando que su arquitectura modular en la nube les permite subir mejoras todos los días.",
            bridge: "¿Y qué pasa cuando pasás de una startup chica a una gran corporación tecnológica o un banco digital con cientos de ingenieros? El mapa cambia por completo. Vamos a la Slide 10 para ver la Matriz Corporativa."
        },
        {
            num: 10,
            id: "slide5c",
            title: "Dinámica de Roles: La Matriz Corporativa",
            duration: "3 Min",
            tags: ["Especialización", "PO vs PM", "QA Automation", "DevOps & SecOps", "Squads Ágiles"],
            interaction: "Hacé clic en las 5 tarjetas de roles corporativos (PM vs. PO, Especialistas Devs, QA Automation, Data Stack Team, DevOps & SecOps) y destacá la barra azul inferior sobre Squads Ágiles.",
            script: "En una corporación grande, un error en producción cuesta millones, así que la clave es la especialización extrema. Acá el rol se divide: el **Project / Product Manager (PM)** mira el roadmap a largo plazo, el presupuesto y los directores, mientras que el **Product Owner (PO)** vive adentro del equipo técnico escribiendo historias de usuario y liderando el día a día. Los devs se dividen en **Frontend**, **Backend**, **Mobile** y **Tech Leads**; aparece **QA Automation** (que programa robots de prueba en el pipeline), el equipo de **Data** y **DevOps & SecOps**. Y fijate en el recuadro azul de abajo: como el sistema ya no es un Monolito sino **Microservicios**, la empresa divide a toda esta gente en **Squads Ágiles autónomos**, donde cada Squad es dueño de una parte del producto.",
            bridge: "Recién nombramos Squads Ágiles, Scrum y Kanban. Veamos en una sola pantalla cómo se conectan estos conceptos de Agile con la nueva arquitectura que dejó atrás al Monolito. Pasemos a la Slide 11."
        },
        {
            num: 11,
            id: "slide5c_agile",
            title: "Agile en IT: De la Nueva Arquitectura a Scrum y Kanban",
            duration: "4 Min",
            tags: ["Monolito/Waterfall vs Microservicios/Agile", "Scrum (Sprints)", "Kanban (Flujo Continuo)", "Híbridos (Scrumban)"],
            interaction: "Señalá primero el bloque superior violeta ('Monolito / Waterfall 6 meses -> Microservicios + APIs / Squads Ágiles') y luego compará las 3 columnas inferiores: 1. Scrum, 2. Kanban y 3. Híbridos ('Scrumban').",
            script: "Mirá esta diapositiva porque une todo lo que venimos hablando: **por qué existe Agile en IT y cómo se relaciona directo con la arquitectura técnica**. Fijate en el bloque de arriba: cuando el software era un **Monolito** (un único bloque gigante acoplado), cambiar cualquier cosa afectaba a todo el sistema; por eso las empresas estaban obligadas a trabajar en **Waterfall (Cascada)**: meses diseñando, meses programando, meses probando y una sola entrega gigante cada 6 meses. Cuando la arquitectura evolucionó a **Microservicios, APIs independientes y CI/CD**, cada equipo chico (*Squad*) pudo empezar a construir y subir cambios de su propio módulo todas las semanas sin frenar a los demás. Eso hizo posible trabajar con **Metodologías Ágiles**.\n\n¿Y qué se usa principalmente hoy en el mercado? Mirá las 3 tarjetas de abajo:\n1) **Scrum (Ciclos Fijos / Sprints):** trabajás en iteraciones cerradas de 1 a 2 semanas llamadas *Sprints*, con cuatro ceremonias clave: *Planning* (qué entra al Sprint), *Daily* (15 minutos diarios para ver avances y bloqueos), *Review/Demo* (mostrar el software funcionando) y *Retrospectiva* (qué mejorar). Es el estándar para crear producto nuevo.\n2) **Kanban (Flujo Continuo):** no hay sprints cerrados; es un tablero continuo (`To Do -> In Progress -> QA -> Done`) donde se limita cuántas tareas se hacen a la vez (*WIP Limit*) y se mide cuánto tarda un ticket de punta a punta (*Cycle Time*). Muy usado en operaciones, soporte o entregas continuas.\n3) **La realidad en las empresas ('Scrumban' o versiones adaptadas):** casi ninguna empresa usa Scrum o Kanban 'de libro' al 100%. La mayoría usa una **versión adaptada**: toman las ceremonias y Sprints de Scrum para ordenarse, pero mueven los tickets en un tablero Kanban en Jira desplegando a medida que están listos.",
            bridge: "Entendiendo cómo trabajan los Squads con Scrum y Kanban, la pregunta clave es: ¿en qué momentos exactos del pipeline interviene un PM o líder de proyecto? Pasemos a la Slide 12."
        },
        {
            num: 12,
            id: "slide5d",
            title: "El PM en el Pipeline: Puntos de Intervención",
            duration: "4 Min",
            tags: ["User Stories", "Cobertura de Tests", "Staging / UAT", "Deploy vs Release", "Feature Flags"],
            interaction: "Recorré las 5 columnas numeradas (01 Jira Ticket, 02 Desarrollo, 03 CI / Tests, 04 Staging / UAT, 05 Producción) y remarcá las 2 tarjetas inferiores: Regla de Oro (Deploy ≠ Release) y ¿Qué es un Feature Flag?.",
            script: "Esta diapositiva es oro puro para el día a día y para cualquier entrevista. Un PM o líder de entrega no escribe código, pero controla las compuertas del pipeline. En la etapa **01 (Jira Ticket)**, definís las User Stories con criterios de aceptación claros. En la **02 (Desarrollo)**, acompañás al Tech Lead para despejar dudas de negocio sin hacer micromanagement. En la **03 (CI / Tests)**, si las pruebas automáticas dan rojo, no se negocia la calidad. En la **04 (Staging / UAT)**, hacés la validación funcional antes de dar el *Sign-Off*. Y en la **05 (Producción)** aplicás las dos cajas de abajo: **Deploy no es lo mismo que Release**. *Deploy* es técnico (subir el código al servidor); *Release* es de negocio (habilitarlo a los usuarios usando un **Feature Flag**, que funciona como un interruptor para prender o apagar la función cuando quieras).",
            bridge: "Recién mencionamos que cada tarea que se prioriza en el backlog de Jira pasa a manos de un developer. ¿Cómo se conecta exactamente ese ticket de Jira con el código que escriben ellos? Vamos a la Slide 13."
        },
        {
            num: 13,
            id: "slide5e",
            title: "Cada User Story de Jira = Una Rama de Git",
            duration: "3 Min",
            tags: ["Trazabilidad", "Jira a Git", "Feature Branch", "Pull Request"],
            interaction: "Pasá el mouse por los tickets de la izquierda (US-41, US-42, US-43, US-44) para ver cómo se iluminan en pareja con su flecha y su rama correspondiente en Git a la derecha.",
            script: "Mirá qué limpia es esta simetría: a la izquierda tenés el tablero de Jira con las User Stories del Sprint (`US-41`, `US-42`, `US-43`). A la derecha tenés el repositorio de código en Git. Por cada historia de usuario que pasa a 'En Desarrollo', el programador crea una copia aislada del código con ese mismo código, llamada **rama o branch** (por ejemplo, `feature/US-42-dashboard`). Así, si en la Daily un dev comenta 'la rama de la US-42 ya está en Code Review', sabés al instante qué funcionalidad está terminada y esperando revisión antes de pasar a QA.",
            bridge: "Para que nunca te mareen cuando hablen de ramas, sub-ramas, merges o ambientes en Git, veamos visualmente cómo viaja esa rama hasta Producción. Pasemos a la Slide 14."
        },
        {
            num: 14,
            id: "slide6",
            title: "Git: Control de Versiones Moderno",
            duration: "4 Min",
            tags: ["Git", "Main / Develop", "Sub-ramas (Feature, Testing, Pre-Prod)", "Pull Request & Merge"],
            interaction: "Hacé clic en los 6 nodos numerados del diagrama (1. Nueva Rama -> 2. Code Review -> 3. Merge a develop -> 4. QA Testing -> 5. Security Gate en pre-prod -> 6. Release Final en main) para ver cómo cambia la explicación abajo.",
            script: "Pensá en **Git** como una máquina del tiempo que guarda cada cambio del código para que nadie pise el trabajo de otro. Hacé clic conmigo en los 6 pasos del gráfico: abajo tenés la línea azul continua de **develop** y arriba de todo la línea verde continua de **main (Producción)**, donde vive el sistema real. Fijate cómo en el paso **1 y 2** el programador saca una sub-rama violeta (`feature/US-42`) desde `develop`, programa ahí aislado y abre un **Code Review (Pull Request)**. En el paso **3**, su código se integra (`Merge`) a `develop`. De ahí, en el paso **4**, sale una sub-rama amarilla hacia **testing** para las pruebas de QA; cuando aprueba, en el paso **5** pasa a la sub-rama naranja de **pre-prod (Staging)** para el control final de seguridad y UAT; y recién en el paso **6** se fusiona a **main (Producción)**.",
            bridge: "Vimos que en Git el código va pasando por testing, pre-prod y main. Eso nos lleva directo a los 3 ambientes de infraestructura donde corre ese software. Vamos a la Slide 15."
        },
        {
            num: 15,
            id: "slide7",
            title: "Dónde Vive el Software: Los 3 Ambientes",
            duration: "3 Min",
            tags: ["Development", "Staging / Pre-Prod", "Production", "Aislamiento"],
            interaction: "Señalá las 3 tarjetas de ambientes (1. Dev Environment, 2. Staging Environment, 3. Prod Environment) destacando el rol en cada uno.",
            script: "En software profesional jamás se prueba un cambio directamente frente a los clientes. Por eso la infraestructura en la nube se divide en tres 'escenarios' o ambientes aislados: 1) **Dev Environment (El Laboratorio)**: donde los programadores prueban y rompen cosas todos los días con datos ficticios. 2) **Staging / Pre-Prod (El Simulador de Vuelo)**: es una réplica exacta de producción pero cerrada al público; acá es donde se hacen las pruebas de aceptación (UAT) y se da el *Sign-Off*. 3) **Prod Environment (El Estadio Lleno)**: acá viven los usuarios reales y todo cambio entra validado y controlado con Feature Flags.",
            bridge: "Adentro de esos ambientes, el software necesita guardar toda la información del negocio. Y hoy, con la llegada de la IA, convivimos con tres tipos de bases de datos. Pasemos a la Slide 16."
        },
        {
            num: 16,
            id: "slide7b",
            title: "Bases de Datos: SQL vs. NoSQL vs. Vectorial (IA)",
            duration: "4 Min",
            tags: ["SQL Relacional", "NoSQL Documental", "Vector DB (IA)", "Criterio de Negocio"],
            interaction: "Compará las 3 tarjetas: Relacional SQL (Azul), No-Relacional NoSQL (Naranja) y Base Vectorial de IA (Violeta).",
            script: "Mirá estas tres tarjetas porque conectan directo con lo que vamos a ver la clase que viene de Inteligencia Artificial. Según qué dato quieras guardar, los ingenieros eligen entre tres motores: 1) **Base Relacional (SQL)**, como PostgreSQL: pensala como un Excel ultra estricto de filas y columnas. Es obligatoria para pagos, facturación o contabilidad donde no puede faltar ni un centavo. 2) **Base No-Relacional (NoSQL)**, como MongoDB: pensala como una carpeta de hojas sueltas en formato JSON donde cada documento puede tener campos distintos; ideal para catálogos dinámicos o lanzar productos rápido. Y 3) **Base de Datos Vectorial (Vector DB)**, como Pinecone: la estrella de la IA. Guarda representaciones matemáticas del *significado* de los textos (Embeddings) para buscar por concepto y alimentar modelos de IA con datos privados (RAG).",
            bridge: "¡Impresionante todo el recorrido técnico que hicimos! Ahora bajemos todo este vocabulario a tierra firme: ¿cómo se traduce la experiencia de gestión tradicional al idioma que usan las empresas de IT? Vamos a la Slide 17."
        },
        {
            num: 17,
            id: "slide8",
            title: "Taller Práctico: Tu Perfil en Clave IT & AI",
            duration: "4 Min",
            tags: ["Posicionamiento CV", "Gestión & Agile", "Sistemas & Cloud", "IA & Calidad"],
            interaction: "Leé en conjunto las 3 filas comparativas ('Antes: Enfoque Operativo / Tradicional' vs. 'Después: Enfoque IT, Agile & AI') como ejercicio general de traducción de perfil.",
            script: "Mirá esta tabla porque acá se ve cómo todo el vocabulario técnico que vimos hoy sirve para traducir experiencia de gestión tradicional al idioma que usan las empresas de tecnología, sea para el rol que elijas explorar. Fijate en la fila 1 (**Gestión & Agile**): cómo el coordinar equipos, entregas y clientes se traduce en clave tecnológica a liderar el delivery bajo marcos Agile (Scrum/Kanban), gestionando SLAs y priorizando un backlog en Jira. Mirá la fila 2 (**Sistemas & Cloud**): cómo el seguimiento en plataformas y resolución de reclamos se conecta con flujos integrados vía APIs REST, pipelines de CI/CD, validación en Staging (UAT) e infraestructura Cloud (AWS). Y en la fila 3 (**IA & Calidad**): cómo llevar el control de calidad tradicional hacia flujos de automatización asistida por LLMs y arquitecturas RAG.",
            bridge: "Y si en algún momento tenés una charla o entrevista en el mundo IT y quieren ver si entendés cómo funciona la dinámica de un equipo de software en la práctica, suelen hacer alguna de estas tres preguntas clásicas. Pasemos a la Slide 18 para verlas."
        },
        {
            num: 18,
            id: "slide9",
            title: "Preguntas 'Rompe-Entrevistas' (Simulador Flip-Cards)",
            duration: "4 Min",
            tags: ["Feature Flags", "Git & Pull Requests", "Rollback & Incidentes"],
            interaction: "Pedile a Anabela que elija una tarjeta, leé la pregunta del frente y hacé clic sobre la tarjeta para girarla en 3D y revelar la 'Respuesta Estrella'. Repetí con las 3 tarjetas.",
            script: "Hagamos un juego rápido con estas tres tarjetas interactivas. Mirá la primera: *'¿Cómo se controla el momento en que una funcionalidad llega al usuario si el código ya está en producción?'*. Hacemos clic para girarla: tu respuesta ganadora es hablar de **Feature Flags** (interruptores que separan el Deploy técnico del Release comercial). Mirá la segunda: *'¿Cómo evitás que varios desarrolladores trabajando en paralelo se pisen el código?'*. La giramos: hablás de **ramas aisladas (Feature Branches) y Pull Requests** con revisión de pares antes de fusionar a la rama principal. Y la tercera: *'¿Qué hacés si se sube algo a producción y falla?'*. La giramos: primero restaurar el servicio coordinando un **Rollback** a la versión estable anterior, y después hacer una reunión de análisis (Post-Mortem) sin buscar culpables para mejorar los filtros en QA/Staging.",
            bridge: "Con estas tres respuestas ya hablás el mismo idioma que cualquier equipo de ingeniería de software. Pasemos a la última diapositiva, la Slide 19, para cerrar esta primera sesión y ver qué nos espera en la próxima."
        },
        {
            num: 19,
            id: "slide10",
            title: "Cierre Sesión 1: Ruta hacia el Liderazgo en IA",
            duration: "2 Min",
            tags: ["Cierre S1", "Glosario S1", "Puente a Sesión 2 (LLMs & RAG)"],
            interaction: "Señalá el paso 1 completado en el roadmap y mostrá en la barra superior el botón '📖 Glosario S1' para que repase los términos durante la semana.",
            script: "¡Felicitaciones Anabela, completamos la Sesión 1! Hoy armaste toda la estructura mental de cómo trabaja un equipo de desarrollo moderno: el salto del Monolito a Microservicios y Cloud (AWS), Frontend, Backend, APIs, verbos y códigos HTTP, el pipeline de CI/CD, los roles en Startups y Corporaciones, Agile (Scrum, Kanban y Scrumban), Git, los ambientes y las bases de datos. En el portal tenés el Glosario Completo de la Sesión 1 y una actividad práctica cortita de 10 minutos para bajar todo esto a aplicaciones cotidianas.",
            bridge: "🔗 Conexión con la Sesión 2: Ahora que ya sabés qué es una Red Neuronal en pocas palabras, cómo funcionan las APIs y qué es una Base de Datos Vectorial, en nuestra próxima sesión vamos a abrir en detalle ese paper de 2017 y el cerebro de los LLMs: Tokens, Ventanas de Contexto, Embeddings y cómo diseñar una arquitectura RAG."
        }
    ]
};

const SESSION_2_DATA = {
    sessionNum: 2,
    title: "Overview de LLMs, Embeddings y Arquitectura RAG",
    subtitle: "Modo Teleprompter / Machete Rápido en Vivo: lectura de 5 segundos por slide + guion dividido en 3 pasos cortos + diccionario 'en criollo' para dictar la clase sin necesidad de repasar antes.",
    accentHex: "#10b981",
    accentRgb: "16, 185, 129",
    goal: "Construir paso a paso un caso real coherente ('Enterprise Knowledge & Localization Bot') manteniendo toda la terminología técnica real de la industria, explicada con analogías cotidianas y del mundo de la traducción/gestión.",
    mentalMap60s: [
        { step: "1. El Problema (Slides 2 a 4)", text: "Queremos armar un Bot que responda dudas de manuales de traducción. El LLM solo predice palabras y miente si no sabe (Slide 2), cobra por sílabas llamadas Tokens (Slide 3) y si le pegamos 50 manuales juntos se olvida de lo del medio (Slide 4)." },
        { step: "2. El Buscador Inteligente (Slides 5 a 7)", text: "Como no podemos pegarle los 50 manuales, armamos un buscador que convierte frases en coordenadas de GPS (Embeddings, Slide 5), filtra por año 2026 e idioma (Metadata, Slide 6) y corta los PDFs en fichas con un 15% repetido para no cortar reglas al medio (Chunking, Slide 7)." },
        { step: "3. Armado del Bot RAG y PRD (Slides 8 a 10)", text: "Unimos todo en 2 fases: Fase 1 carga el PDF de Pagos LATAM en segundo plano (Slide 8) y Fase 2 responde en 2 segundos '¿Cómo se traduce Chargeback? → Contracargo pág. 8' (Slide 9). Volcamos esas reglas en el documento PRD (Slide 10)." },
        { step: "4. Blindaje y Entrevista (Slides 11 a 15)", text: "Antes de lanzar, protegemos datos privados con contrato Enterprise SLA (Slide 11), le ponemos nota mínima de 0.75 para que sepa decir 'no sé' (Slide 12), lo probamos con 100 preguntas automáticas (Golden Dataset, Slide 13) y practicamos preguntas de entrevista (Slide 14)." }
    ],
    agenda: [
        { time: "00 - 15 min", module: "01. El Motor y sus Límites", slides: "Slides 1 a 4", focus: "Presentación del Caso Real ('Enterprise Knowledge & Localization Bot'), cómo funciona un LLM (autocompletado probabilístico), Temperatura, Tokenización BPE, Prompt Caching y por qué no podemos pegar 50 manuales en el prompt ('Lost in the Middle')." },
        { time: "15 - 30 min", module: "02. El Buscador por Significado", slides: "Slides 5 a 7", focus: "Cómo hacer que el bot encuentre los 3 párrafos exactos sin leer todo el manual: coordenadas de significado (Embeddings 1536d), Similitud por Coseno, Bases Vectoriales con filtros de vigencia/idioma (Metadata Filtering) y corte inteligente (Chunking + Overlap)." },
        { time: "30 - 45 min", module: "03. Arquitectura & Especificación", slides: "Slides 8 a 10", focus: "Ensamblamos el 'Enterprise Knowledge Bot' en 2 etapas con ejemplos reales de datos: Fase 1 (cargar la Guía Pagos LATAM 2026 en segundo plano) y Fase 2 (responder en vivo '¿Cómo se traduce Chargeback?' con citas), y lo bajamos al Mock PRD." },
        { time: "45 - 60 min", module: "04. Blindaje Corporativo & Cierre", slides: "Slides 11 a 15", focus: "Protección legal de prompts bajo NDA (Enterprise SLA & PII Masking), la barrera del 0.75 para que el bot sepa decir 'no sé', el examen automático de 100 preguntas (Golden Dataset) y defensa en entrevistas." }
    ],
    slides: [
        {
            num: 1,
            id: "slide-1",
            title: "Portada: IA Generativa & Arquitectura RAG (Nuestro Hilo Conductor)",
            duration: "3 Min",
            tags: ["Caso Real: Localization Bot", "LLMs", "Arquitectura RAG", "React Simulators"],
            cheatSheet: {
                idea: "Hoy no vamos a ver teoría suelta: vamos a diseñar paso a paso un Bot real para consultar manuales y glosarios de traducción sin que invente nada.",
                clicks: "1° Señalá el banner azul del medio ('Hilo Conductor') → 2° Mostrá las 4 tarjetas de abajo (01 a 04) como los 4 capítulos de hoy.",
                analogy: "Un LLM común responde de memoria como en un examen oral y puede chamuyar; con RAG le damos el manual abierto en la página exacta."
            },
            plainTerms: [
                { term: "Hilo Conductor (Enterprise Knowledge & Localization Bot)", simple: "En lugar de ver conceptos sueltos, durante las 15 diapositivas vamos a diseñar paso a paso un producto real: un asistente corporativo que responde consultas sobre manuales y glosarios de localización sin inventar respuestas ni filtrar secretos." },
                { term: "LLM (Large Language Model / Gran Modelo de Lenguaje)", simple: "Es el 'motor cerebral' detrás de ChatGPT, Claude o Gemini. Se llama 'Grande' porque fue entrenado leyendo casi todo internet para aprender cómo se conectan las palabras." },
                { term: "RAG (Retrieval-Augmented Generation)", simple: "En criollo: 'tomarle examen a la IA a libro abierto'. En vez de dejar que responda de memoria (donde puede inventar), primero buscamos el párrafo exacto en los manuales privados de nuestra empresa y se lo damos para que responda solo con esa evidencia." }
            ],
            interaction: "Señalá primero el banner azul del medio ('🧭 Hilo Conductor de la Clase: Enterprise Knowledge & Localization Bot') y luego mostrá las 4 tarjetas numeradas (01 a 04).",
            script: "**1️⃣ BIENVENIDA Y EL PROYECTO DE HOY (Señalá el banner azul del centro):**\n¡Bienvenida a la Sesión 2, Anabela! En la Sesión 1 vimos cómo se construye el software (Frontend, Backend, APIs y bases de datos). Hoy nos metemos en tu terreno natural —el lenguaje—, pero desde la Inteligencia Artificial. Para que ningún concepto quede suelto, hoy vamos a construir juntos de principio a fin un producto real: un **'Enterprise Knowledge & Localization Bot'** (un asistente interno para consultar manuales y glosarios de traducción con citas reales y cero inventos).\n\n**2️⃣ NUESTRO OBJETIVO CON EL VOCABULARIO:**\nHoy vas a ver los nombres técnicos en inglés que piden las empresas (**Tokens BPE, Prompt Caching, Embeddings, Similitud por Coseno, Chunking, RAG, Golden Dataset**), pero bajados a tierra con ejemplos súper cotidianos.\n\n**3️⃣ LOS 4 CAPÍTULOS DE LA CLASE (Señalá las 4 tarjetas de abajo):**\n* **01. El Motor y sus Límites (Slides 2–4):** Cómo piensa el LLM, por qué miente, cómo cobra por sílabas y por qué no podemos pegarle 50 manuales juntos.\n* **02. El Buscador por Significado (Slides 5–7):** Cómo encontramos los 3 párrafos exactos usando un 'GPS de ideas' (Embeddings) y filtros.\n* **03. Arquitectura RAG y PRD (Slides 8–10):** Enchufamos todo con un ejemplo real de Pagos LATAM y escribimos el documento de requisitos (PRD).\n* **04. Blindaje Corporativo (Slides 11–15):** Privacidad legal, cómo hacer que el Bot sepa decir *'no sé'* y cómo defenderlo en entrevistas.",
            bridge: "Arranquemos por el Paso 1 de nuestra misión: abrir el motor del LLM para entender por qué miente cuando no sabe algo y cómo lo domamos con la Temperatura. Pasemos a la Slide 2."
        },
        {
            num: 2,
            id: "slide-2",
            title: "El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)",
            duration: "5 Min",
            tags: ["Paso 1 de 14", "Attention Is All You Need", "Next-Token & Temperatura", "RAG vs Fine-Tuning"],
            cheatSheet: {
                idea: "El LLM no 'sabe' ni razona: es como el autocompletado del celular. Si no sabe algo privado, inventa (alucina). Para nuestro Bot usamos Temperatura 0.0 y RAG.",
                clicks: "1° Compará caja Roja (Mito) vs Verde (Realidad) → 2° En el simulador del medio alterná entre 'Temp = 0.0' y 'Temp = 0.9' → 3° Señalá las 2 tarjetas de abajo.",
                analogy: "Alucinación = el alumno que no estudió pero tiene labia y te chamuya seguro. Temperatura 0.0 = obligarlo a elegir siempre la palabra #1 más segura."
            },
            plainTerms: [
                { term: "Next-Token Prediction (Predicción del Siguiente Token)", simple: "Es el autocompletado predictivo del teclado de tu celular pero hiper-vitaminado. El modelo no 'sabe' ni 'razona': solo calcula matemáticamente qué palabra o sílaba tiene más probabilidad de seguir a la anterior." },
                { term: "Alucinación Factual (Hallucination)", simple: "Cuando la IA no tiene un dato privado de nuestra empresa pero, con tal de completar la oración de forma elocuente y sonar segura, inventa un dato falso muy bien redactado." },
                { term: "Temperatura (0.0 vs 0.9)", simple: "Es la 'perilla de creatividad vs. rigor'. En 0.0 la IA elige siempre la palabra #1 más segura (cero inventos, ideal para nuestro Bot). En 0.9 la dejamos arriesgar con palabras menos probables (sirve para lluvia de ideas, pero alucina en datos técnicos)." },
                { term: "Transformer & Self-Attention (Auto-Atención)", simple: "Nacieron en Google en 2017 para traducir idiomas. En vez de leer palabra por palabra olvidándose del principio, saca una 'foto panorámica' de toda la oración y entiende que la palabra 'banco' cambia de significado si al lado dice 'plaza' o 'hipoteca'." },
                { term: "Fine-Tuning vs. RAG", simple: "Fine-Tuning es mandarlo a un 'curso de modales y estilo' (aprende a hablar formal o en código JSON, pero no sirve para glosarios que cambian cada semana). RAG es darle acceso en vivo a los manuales actualizados de la empresa." }
            ],
            interaction: "Compará las cajas superiores (Mito vs Realidad), hacé clic en 'Temp = 0.0' y 'Temp = 0.9' en el simulador central, y repasá las dos tarjetas inferiores.",
            script: "**1️⃣ EL MITO VS. LA REALIDAD (Señalá las dos tarjetas de arriba):**\nCuando hablás con ChatGPT parece un humano que razona, pero es una ilusión. Un **LLM** es una calculadora de probabilidades que hace una sola cosa: **Next-Token Prediction (predecir la siguiente palabra)**, igual que el teclado predictivo de WhatsApp cuando escribís *'Buen'* y te sugiere *'día'* (80%). ¿Y por qué **alucina**? Porque si le preguntás una regla privada de tu empresa que nunca leyó, su instinto es seguir completando palabras que suenen lindas, como un alumno que no estudió pero te chamuya con total seguridad.\n\n**2️⃣ DEMO EN VIVO: QUÉ ES LA TEMPERATURA (Tocá los botones Temp 0.0 y Temp 0.9 en el medio):**\nMirá la frase de nuestro Bot: *'Para traducir Checkout en LATAM debemos consultar el...'*. Si ponemos **`Temperatura = 0.0`** (botón verde), apagamos la creatividad y obligamos al modelo a elegir siempre la palabra #1 más segura (`glosario_aprobado` 88%). Si subimos a **`Temperatura = 0.9`**, lo dejamos tirar los dados y puede elegir `invento_alucinado`. **Regla #1 para nuestro Bot:** siempre **Temperatura 0.0**.\n\n**3️⃣ EL ORIGEN EN TRADUCCIÓN Y RAG VS. FINE-TUNING (Señalá las dos tarjetas de abajo):**\n* **Izquierda (Paper de 2017):** Qué lindo dato para vos como traductora: toda esta revolución nació en 2017 porque Google quería mejorar la **traducción automática**. Inventaron el **Transformer** (la 'T' de GPT) y la **Auto-Atención (Self-Attention)**, que mira toda la oración a la vez para entender el contexto.\n* **Derecha (Fine-Tuning vs RAG):** Si alguien te dice *'re-entrenemos el modelo (Fine-Tuning) con nuestros glosarios cada semana'*, le decís que no: **Fine-Tuning** sirve para enseñar *tono o estilo*, pero es carísimo y congela los datos. Para manuales que cambian cada semana usamos **RAG** (conectarlo a una biblioteca viva).",
            bridge: "Recién viste que el simulador decía 'Siguiente Token' en vez de 'Siguiente Palabra'. ¿Por qué la IA parte las palabras en pedacitos y cómo afecta eso al presupuesto mensual de nuestro Bot? Pasemos al Paso 2 en la Slide 3."
        },
        {
            num: 3,
            id: "slide-3",
            title: "Tokens: La Economía y Lingüística de la IA",
            duration: "4 Min",
            tags: ["Paso 2 de 14", "Tokenización BPE", "Asimetría Input/Output", "Prompt Caching (-55%)"],
            cheatSheet: {
                idea: "Las empresas de IA no cobran por palabra sino por 'Tokens' (sílabas/raíces). Y con 'Prompt Caching' ahorramos más del 50% de la factura mensual.",
                clicks: "1° Izquierda: clic en Frase 1/2/3 y 'Tokenizar BPE' → 2° Derecha: prendé y apagá el botón 'Prompt Caching ACTIVO' para ver cómo baja de $225 a $101.",
                analogy: "Tokenizar es separar raíz ('locali-') y sufijo ('-zación'). Y Prompt Caching es dejar las instrucciones fijas en memoria rápida para no pagarlas de nuevo en cada pregunta."
            },
            plainTerms: [
                { term: "Token", simple: "Es la unidad mínima que lee y cobra la IA. No es ni una letra ni una palabra entera: es un 'ladrillito o sílaba' de unas 3 o 4 letras. Regla práctica: 1.000 tokens son unas 750 palabras en inglés (o ~650 en español)." },
                { term: "BPE (Byte Pair Encoding)", simple: "Es el método que usa la IA para partir palabras en tokens: separa raíces comunes ('locali-') de sufijos ('-zación'). Así con solo ~100.000 ladrillitos puede armar cualquier palabra de cualquier idioma." },
                { term: "Asimetría Input vs. Output", simple: "Leer lo que vos le mandás (Input) es barato; pero generar la respuesta palabra por palabra (Output) le exige mucho más cálculo al servidor y cuesta entre 3 y 5 veces más caro." },
                { term: "Prompt Caching & TTFT (Time To First Token)", simple: "Prompt Caching es guardar en la 'memoria rápida' del servidor las instrucciones fijas de nuestro Bot para que te cobren entre 50% y 75% menos. TTFT es cuántos milisegundos tarda en aparecer la primera palabra de la respuesta en pantalla." }
            ],
            interaction: "En la izquierda probá las 3 frases con el tokenizador BPE. En la derecha prendé y apagá 'Prompt Caching' y mové el slider de consultas diarias.",
            script: "**1️⃣ QUÉ ES UN TOKEN Y EL SIMULADOR BPE (Tocá las frases en la tarjeta izquierda):**\nAsí como la luz se cobra por Kilowatt, las APIs de IA cobran por millón de **Tokens**. Mirá la frase 1 en el simulador: son **9 palabras**, pero el tokenizador **BPE** la parte en **15 bloquecitos de colores** (`La`, ` locali`, `zación`...). Como traductora te va a sonar re familiar: separa **raíces de sufijos**. Dos reglas económicas clave para vos como PM: primero, **el español gasta ~15% más de tokens que el inglés** (1.000 tokens = 750 palabras en inglés o 650 en español); segundo, **lo que el Bot escribe (Output) cuesta de 3 a 5 veces más caro que lo que lee (Input)**.\n\n**2️⃣ DEMO DE AHORRO: PROMPT CACHING (Prendé y apagá el botón en la tarjeta derecha):**\nImaginate que nuestro Bot recibe 5.000 consultas por día, y en cada consulta le mandamos arriba las reglas fijas del sistema (1.500 tokens). Si apagás **Prompt Caching**, pagás esas reglas 5.000 veces por día (**$225 USD/mes**) y tarda **1.150 ms** en arrancar a responder (**TTFT**).\n\n**3️⃣ REGLA DE ORO FINOPS PARA EL PRD:**\nCuando activás **Prompt Caching** (poniendo todo el texto fijo bien arriba del prompt), el servidor lo guarda en memoria rápida: **la factura cae a la mitad ($101 USD/mes)** y la respuesta arranca en apenas **380 ms**.",
            bridge: "Ahora bien: si hoy existen modelos con ventanas de contexto enormes donde entran 50 manuales enteros, ¿por qué no le pegamos todos los manuales de la empresa en el prompt y nos ahorramos de construir un buscador? Pasemos al Paso 3 en la Slide 4."
        },
        {
            num: 4,
            id: "slide-4",
            title: "Ventanas de Contexto & El Sesgo 'Lost in the Middle'",
            duration: "4 Min",
            tags: ["Paso 3 de 14", "Context Window", "Lost in the Middle", "Por qué necesitamos RAG"],
            cheatSheet: {
                idea: "Aunque hoy caben 50 libros en la memoria del LLM (Ventana de Contexto), si le mandás todo junto se olvida de lo que está en la mitad ('Lost in the Middle'). Por eso necesitamos RAG.",
                clicks: "1° Señalá la analogía del escritorio (izquierda) → 2° En el simulador derecho tocá el botón rojo 'Centro Geométrico (50%)' para mostrar cómo la atención cae a 38%.",
                analogy: "Es como dictarle a alguien 40 cosas del supermercado sin papel: se acuerda las primeras 3 y las últimas 3, pero se olvida todas las del medio."
            },
            plainTerms: [
                { term: "Ventana de Contexto (Context Window)", simple: "Es el tamaño del 'escritorio o memoria de corto plazo' que tiene el modelo en una consulta. Todo lo que le mandás más lo que te responde tiene que caber adentro de esa ventana." },
                { term: "Lost in the Middle (Perdido en el Medio)", simple: "Estudio de Stanford que demostró que cuando le metés muchísimo texto de golpe a un LLM (ej. 50 páginas), presta mucha atención al principio y al final, pero se olvida o ignora hasta el 60% de los datos que quedaron en la mitad." },
                { term: "Primacy Bias & Recency Bias", simple: "Son los nombres de ese efecto: Primacy Bias es recordar perfecto lo primero que leíste (~99%), y Recency Bias es recordar perfecto lo último que leíste (~96%)." }
            ],
            interaction: "En el simulador derecho hacé clic en 'Inicio del Prompt (8%)', luego en 'Centro Geométrico (50%)' y luego en 'Final del Prompt (94%)'.",
            script: "**1️⃣ LA DUDA TRAMPA EN LOS EQUIPOS (Señalá la tarjeta izquierda):**\nLa **Ventana de Contexto** es el escritorio o memoria de corto plazo del modelo. Hoy hay modelos donde entran 1 millón de tokens (¡50 manuales enteros!). Entonces alguien te puede preguntar: *'Che, ¿por qué no pegamos los 20 manuales de la empresa enteros en cada pregunta y listo?'*.\n\n**2️⃣ DEMO EN VIVO: EL FENÓMENO 'LOST IN THE MIDDLE' (Tocá el botón rojo del 50% a la derecha):**\nMirá lo que descubrió la Universidad de Stanford: a la IA le pasa igual que a un humano cuando le dictás 40 productos del supermercado sin anotar. Se acuerda perfecto los primeros (**Primacy Bias**, 99%) y los últimos (**Recency Bias**, 96%), pero **se olvida de todo lo que quedó en el medio**. Fijate en el simulador: si la regla de cómo traducir *'Chargeback'* cayó en la página 25 de 50 (posición 50%), la atención cae al **38%** y el Bot la ignora.\n\n**3️⃣ CONCLUSIÓN QUE ABRE EL MÓDULO 2:**\nPor eso **no pegamos manuales enteros**. Necesitamos construir un **buscador inteligente** que rescate solo los **3 párrafos exactos** y los ponga en los extremos del prompt, donde la atención supera el 95%.",
            bridge: "Así entramos al Módulo 2 de nuestro proyecto: ¿cómo construimos ese buscador inteligente que encuentra los 3 párrafos exactos aunque el usuario escriba con sinónimos? Pasemos al Paso 4 en la Slide 5: Embeddings."
        },
        {
            num: 5,
            id: "slide-5",
            title: "Embeddings: Traduciendo Significado a Coordenadas",
            duration: "4 Min",
            tags: ["Paso 4 de 14", "Embeddings (1536d)", "Espacio Vectorial", "Similitud por Coseno"],
            cheatSheet: {
                idea: "Para buscar por 'significado' y no por letras exactas (Ctrl+F), convertimos cada frase en coordenadas de un mapa tipo GPS (Embeddings) y medimos la distancia entre ellas (Similitud por Coseno).",
                clicks: "1° Señalá los pasos 01-02-03 arriba → 2° En el mapa de abajo hacé clic en los puntos azules (0.96), verdes (0.54) y el rojo 'Automóvil Deportivo' (0.12).",
                analogy: "Un Embedding es darle una dirección de GPS a cada idea. Dos frases que significan lo mismo viven en la misma cuadra aunque usen palabras distintas."
            },
            plainTerms: [
                { term: "Embedding (Vector Semántico)", simple: "Es traducir el 'significado' de una frase a una lista de números (como las coordenadas de latitud y longitud de un GPS). Así la computadora puede medir matemáticamente si dos textos hablan de lo mismo aunque no usen ninguna palabra igual." },
                { term: "Espacio Vectorial (1536 Dimensiones)", simple: "En un mapa común tenés 2 dimensiones (Norte-Sur y Este-Oeste). La IA usa un mapa de 1536 dimensiones donde cada número mide un matiz distinto del concepto (si es técnico, si habla de pagos, si es de traducción, etc.)." },
                { term: "Similitud por Coseno (Cosine Similarity)", simple: "Es la 'regla' que mide qué tan cerca quedaron dos frases en ese mapa, dando un puntaje entre 0.00 (nada que ver) y 1.00 (significado idéntico)." }
            ],
            interaction: "Hacé clic en los puntos del mapa ('Glosario Técnico', 'Memoria de Traducción', 'Deploy en Cloud', 'Automóvil Deportivo') y mostrá el puntaje en la esquina inferior derecha.",
            script: "**1️⃣ EL PROBLEMA DEL BUSCADOR CLÁSICO (Señalá las 3 tarjetas de arriba):**\nEl buscador viejo (`Ctrl + F`) solo busca letras idénticas: si un usuario pregunta *'¿Cómo valido términos para otros países?'* y el manual dice *'Protocolo de glosarios para localización global'*, no coinciden en ninguna palabra y da cero resultados. ¿Cómo entiende nuestro Bot que hablan de lo mismo? Con **Embeddings**: convierte el significado de cada frase en una coordenada matemática de **1536 números**, como la latitud y longitud de un GPS.\n\n**2️⃣ DEMO EN EL MAPA: SIMILITUD POR COSENO (Hacé clic en los puntos de colores del mapa):**\nUna vez que cada frase tiene su coordenada en el mapa, medimos qué tan cerca quedaron con una cuenta llamada **Similitud por Coseno** (que da una nota de `0.00` a `1.00`):\n* Tocá los **puntos azules** (*Glosario Técnico `0.96`*, *Memoria de Traducción `0.89`*): como hablan de lo mismo, viven en el mismo barrio.\n* Tocá el **punto rojo** (*Automóvil Deportivo*): da **`0.12`**, vive en la otra punta del mapa y el buscador lo descarta.\n\n**3️⃣ QUÉ SE LLEVA ANABELA:**\nGracias a los Embeddings y la Similitud por Coseno, nuestro Bot encuentra la respuesta aunque el usuario use sinónimos o palabras completamente distintas al manual.",
            bridge: "Ahora bien: si guardamos en este mapa todos los manuales de la empresa desde el año 2020 y de todos los países, ¿qué pasa si un manual viejo de 2021 habla del mismo tema que el manual nuevo de 2026? ¡Quedan pegaditos en el mapa! Veamos en el Paso 5 (Slide 6) cómo evitamos esa trampa."
        },
        {
            num: 6,
            id: "slide-6",
            title: "Bases Vectoriales & Metadata Filtering",
            duration: "4 Min",
            tags: ["Paso 5 de 14", "Vector DB (Pinecone)", "Metadata Pre-Filtering", "Búsqueda Híbrida"],
            cheatSheet: {
                idea: "Guardamos los vectores en una Base Vectorial (Pinecone), pero ANTES de buscar por significado filtramos por etiquetas duras (Año = 2026, Idioma = ES-LATAM) para que no se cuele un manual vencido.",
                clicks: "1° En el simulador derecho destildá 'Año: 2026' e 'Idioma: ES-LATAM' para mostrar cómo se cuela el Manual 2021 Obsoleto (0.86) → 2° Volvelos a tildar.",
                analogy: "Igual que en MercadoLibre: antes de mirar zapatillas parecidas, filtrás por tu talle (Metadatos) para no enamorarte de un par que no te entra."
            },
            plainTerms: [
                { term: "Base de Datos Vectorial (Vector DB: Pinecone, Qdrant, pgvector)", simple: "Es la 'biblioteca especializada' donde se guardan los Embeddings (las coordenadas numéricas de los textos) para poder buscar por cercanía de significado en milisegundos." },
                { term: "Metadatos (Metadata Schema)", simple: "Son las 'etiquetas de clasificación' explícitas que le pegamos a cada documento al guardarlo: Idioma = ES-LATAM, Año = 2026, Tipo = Guía de Estilo, Sector = Pagos." },
                { term: "Metadata Pre-Filtering (Pre-filtrado por Metadatos)", simple: "Es aplicar primero un filtro duro por etiquetas (ej. 'quedate solo con manuales en Español del año 2026') ANTES de buscar por significado, para no recuperar documentos vencidos o de otro país." }
            ],
            interaction: "En el simulador derecho apagá las píldoras 'Idioma: ES-LATAM' y 'Año: 2026' para ver el peligro y volvelas a prender.",
            script: "**1️⃣ EL PELIGRO DE BUSCAR SOLO POR SIGNIFICADO (Señalá la caja roja izquierda):**\nTodos esos vectores los guardamos en una **Base de Datos Vectorial** (como **Pinecone**). Pero ojo: si alguien pregunta *'¿Cómo se traduce Checkout y Chargeback?'* y buscamos **solo por parecido de significado**, el manual viejo de 2021 habla exactamente de eso y tiene un puntaje altísimo (`0.86`), ¡así que el Bot respondería con una regla derogada hace 5 años!\n\n**2️⃣ DEMO EN VIVO: METADATA PRE-FILTERING (Apagá y prendé los botones del simulador derecho):**\nMirá el simulador: si apagamos los filtros, se cuelan el **Manual Legacy 2021 (`0.86`)** y la guía de EE. UU. en inglés (**`0.84`**). Cuando activamos las etiquetas (**Metadatos**) **`Idioma: ES-LATAM`** y **`Año: 2026 (Vigente)`**, la base primero tacha toda la basura vieja o de otro idioma y busca similitud solo en los documentos vigentes.\n\n**3️⃣ POR QUÉ ESTO ES TRABAJO DE LA PM:**\nLos programadores no saben cómo se clasifican los documentos del negocio; **sos vos como PM quien define en el PRD qué etiquetas (metadatos) obligatorias lleva cada archivo**.",
            bridge: "Ya tenemos la Base Vectorial y las etiquetas de filtrado. Nos falta resolver un último detalle antes de cargar los archivos: un manual PDF tiene 200 páginas, ¿cómo lo cortamos en pedacitos sin partir una regla por la mitad? Pasemos al Paso 6 en la Slide 7."
        },
        {
            num: 7,
            id: "slide-7",
            title: "Chunking & Overlap: El Arte de Fragmentar Documentos",
            duration: "4 Min",
            tags: ["Paso 6 de 14", "Recursive Character Chunking", "Chunk Overlap (15%)", "Puente Semántico"],
            cheatSheet: {
                idea: "Cortamos los PDFs largos en fichas chicas de ~1.000 letras (Chunks), pero repetimos un 15% del texto entre ficha y ficha (Overlap) para que ninguna regla quede cortada por la mitad.",
                clicks: "1° En el simulador derecho tocá '0%' (mostrá el cartel rojo de corte abrupto) → 2° Tocá '15%' para mostrar el puente amarillo compartido entre el Fragmento A y B.",
                analogy: "Cuando sacás una foto panorámica o fotocopiás un plano grande en dos hojas A4, dejás un bordecito repetido en las dos hojas para que no se pierda nada en la unión."
            },
            plainTerms: [
                { term: "Chunking (Fragmentación Documental)", simple: "Es cortar un documento largo (ej. un PDF de 200 páginas) en 'fichas' o bloques pequeños de texto (llamados Chunks, de unas 200 palabras o 1.000 caracteres) antes de convertirlos en vectores." },
                { term: "Recursive Character Chunking", simple: "En vez de cortar cada 1.000 letras a ciegas partiendo oraciones por la mitad, corta de forma inteligente respetando primero títulos, luego párrafos y luego puntos seguidos." },
                { term: "Chunk Overlap (Solapamiento del 10% al 20%)", simple: "Es repetir el final del Fragmento A al comienzo del Fragmento B (como cuando sacás una foto panorámica solapando un borde con el otro) para que ninguna condición o regla quede huérfana." }
            ],
            interaction: "En el simulador derecho alterná entre '0%' (corte roto) y '15%' (puente amarillo).",
            script: "**1️⃣ QUÉ ES CHUNKING (Señalá las dos tarjetas de la izquierda):**\nNo podemos convertir un PDF de 200 páginas en un solo vector porque mezclaría mil temas. Por eso lo cortamos en fichas chicas de unas 200 palabras (~1.000 caracteres) llamadas **Chunks**. Y para no cortar palabras al medio usamos **Recursive Character Chunking**, que corta respetando títulos, párrafos y puntos.\n\n**2️⃣ DEMO EN VIVO: POR QUÉ NECESITAMOS 'OVERLAP' (Tocá 0% y luego 15% en el simulador derecho):**\nMirá qué pasa en el simulador cuando ponemos **`0% Overlap`**: la regla se corta justo al medio y el **Fragmento B** dice *'...bloqueando el lanzamiento global'*, ¡pero **perdió la primera parte que decía que eso pasa solo si hay errores P1**! Si ahora tocás **`15%`**, el sistema repite el último 15% del Fragmento A al principio del Fragmento B (el texto resaltado). Así ambos fragmentos conservan el sujeto y la condición completa.\n\n**3️⃣ REGLA DE ORO PARA TU PRD:**\nEl estándar de oro que siempre pedís en tus proyectos es **Chunks de ~1.000 caracteres con 10% a 15% de Overlap**.",
            bridge: "¡Listo! Ya dominás todas las piezas sueltas. Ahora entramos al Módulo 3: vamos a enchufar todas estas piezas juntas para ver funcionar nuestro 'Enterprise Knowledge Bot' con un documento real. Pasemos al Paso 7 en la Slide 8."
        },
        {
            num: 8,
            id: "slide-8",
            title: "Anatomía de RAG — Fase 1: Ingestión Offline (Batch)",
            duration: "3 Min",
            tags: ["Paso 7 de 14", "RAG Fase 1", "Pipeline Batch Offline", "Ejemplo Real Pagos LATAM"],
            cheatSheet: {
                idea: "RAG tiene 2 momentos. Esta Fase 1 es 'preparar la biblioteca antes de abrir': subimos el PDF de Pagos LATAM, lo cortamos en Chunks, calculamos sus Embeddings y lo guardamos en Pinecone.",
                clicks: "1° Tocá el botón verde '▶ Simular Pipeline Batch' arriba a la derecha → 2° Señalá cómo cambia el ejemplo real abajo en verde (de PDF a Ficha #14 a Vector a Pinecone).",
                analogy: "Fase 1 es ordenar y etiquetar la despensa del restaurante a la mañana antes de que entren los clientes."
            },
            plainTerms: [
                { term: "Fase 1: Ingestión Offline (Batch Pipeline)", simple: "Es 'preparar la biblioteca antes de que entren los lectores'. Corre en segundo plano cada vez que subimos o actualizamos manuales, sin ningún usuario esperando en el chat." },
                { term: "Ground Truth (Fuente Única de Verdad)", simple: "Son los documentos oficiales validados por humanos (en nuestro ejemplo: 'Guia_Estilo_Pagos_LATAM_2026.pdf') que tomamos como verdad absoluta para alimentar al bot." },
                { term: "Upsert en Vector DB", simple: "Término que combina 'Update' (actualizar) + 'Insert' (insertar): guarda los vectores nuevos en Pinecone y pisa los viejos para que la biblioteca esté siempre al día." }
            ],
            interaction: "Hacé clic en '▶ Simular Pipeline Batch' y leé con ella el recuadro inferior verde que muestra cómo se transforma el PDF en cada uno de los 4 pasos.",
            script: "**1️⃣ LA DIVIDIMOS EN 2 FASES (Concepto general):**\nAcá armamos la máquina completa de **RAG**, que siempre se divide en dos momentos: **Fase 1 (esta Slide 8)** es preparar y ordenar la biblioteca en segundo plano antes de abrir, y **Fase 2 (la Slide 9)** es responderle al usuario en vivo.\n\n**2️⃣ DEMO PASO A PASO CON NUESTRO ARCHIVO REAL (Tocá '▶ Simular Pipeline Batch' y mirá la línea verde de abajo):**\n* **Paso 1 (Documentos / Ground Truth):** Subimos el manual oficial `Guia_Estilo_Pagos_LATAM_2026.pdf` (42 páginas) y limpiamos encabezados.\n* **Paso 2 (Chunking):** Lo cortamos en fichas de 1.000 caracteres con 15% de overlap. Mirá abajo la **Ficha #14**: *'Chargeback se traduce oficialmente como Contracargo'*.\n* **Paso 3 (Embedding):** Convertimos esa Ficha #14 en su coordenada matemática de 1536 números.\n* **Paso 4 (Vector DB):** La guardamos en **Pinecone** con sus etiquetas (`lang: ES-LATAM`, `year: 2026`, `page: 8`). ¡Nuestra biblioteca ya está lista!",
            bridge: "Ahora que la Ficha #14 ya está guardada con sus coordenadas y etiquetas en Pinecone, abrimos el chat a los empleados: un traductor entra y pregunta '¿Cómo se traduce Chargeback?'. Pasemos al Paso 8 en la Slide 9 para ver qué ocurre en menos de 2 segundos."
        },
        {
            num: 9,
            id: "slide-9",
            title: "Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live)",
            duration: "4 Min",
            tags: ["Paso 8 de 14", "RAG Fase 2", "Top-K Retrieval", "Prompt Aumentado + Cita"],
            cheatSheet: {
                idea: "Fase 2 es en vivo (< 2 seg): entra la pregunta por 'Chargeback', buscamos los 3 mejores párrafos en Pinecone, se los pegamos en secreto al LLM (Prompt Aumentado) y responde 'Contracargo (pág. 8)'.",
                clicks: "1° Tocá '▶ Simular Consulta Live' → 2° Señalá la línea azul inferior con el ejemplo de 'Chargeback' → 3° Tocá '🔍 Ver Diagrama Completo RAG' para mostrar el mapa entero.",
                analogy: "El usuario cree que habló directo con el LLM, pero nuestro servidor le abrió el libro en la página 8 antes de que responda."
            },
            plainTerms: [
                { term: "Fase 2: Consulta en Tiempo Real (Online Inference)", simple: "Es lo que ocurre en menos de 2 segundos desde que el usuario aprieta 'Enviar' en el chat hasta que recibe la respuesta con la página exacta del manual." },
                { term: "Top-K Retrieval (ej. Top-K = 3)", simple: "Es pedirle a la base vectorial que nos devuelva únicamente los 'K' fragmentos más parecidos a la pregunta (en nuestro Bot, los 3 mejores párrafos)." },
                { term: "Prompt Aumentado (Context Injection)", simple: "Es el corazón de RAG: antes de mandarle la pregunta del usuario al LLM, el servidor le 'inyecta' en secreto los 3 párrafos oficiales encontrados en Pinecone y le ordena responder solo con esa evidencia." }
            ],
            interaction: "Tocá '▶ Simular Consulta Live' siguiendo el ejemplo azul de abajo y luego abrí '🔍 Ver Diagrama Completo RAG'.",
            script: "**1️⃣ ENTRÓ UNA PREGUNTA EN VIVO (Tocá '▶ Simular Consulta Live' y mirá la línea azul abajo):**\nUn traductor abre nuestro Bot y pregunta: *'¿Cómo se traduce Chargeback en la app?'*. Mirá lo que pasa en menos de 2 segundos:\n* **Paso 1 (Pregunta a Vector):** Convertimos su pregunta en coordenadas de GPS (1536 números).\n* **Paso 2 (Recuperación Top-K = 3):** Vamos a Pinecone, filtramos por `ES-LATAM` y `2026`, y traemos los 3 fragmentos más cercanos. ¡Aparece nuestra **Ficha #14 (pág. 8)** con un puntaje altísimo de **`0.91`**!\n\n**2️⃣ LA MAGIA: EL PROMPT AUMENTADO (Paso 3):**\nEl usuario no lo ve, pero nuestro servidor arma en secreto un **Prompt Aumentado**: arriba pone la regla (*'Respondé SOLO con estos fragmentos'*), en el medio pega la Ficha #14 de la página 8, y abajo pone la pregunta.\n\n**3️⃣ RESPUESTA SIN ALUCINAR (Paso 4):**\nEl LLM lee esa ficha con **Temperatura 0.0** y responde: *'Se traduce oficialmente como **Contracargo** [Fuente: Guía Pagos LATAM 2026, pág. 8]'*.",
            bridge: "¡Acabás de ver el ciclo completo! Ahora, como Product Manager de este proyecto, ¿cómo volcás todas las decisiones que tomamos entre la Slide 2 y la Slide 9 en un documento formal para tu equipo de ingeniería? Pasemos al Paso 9 en la Slide 10: el Mock PRD."
        },
        {
            num: 10,
            id: "slide-10",
            title: "Taller Práctico: El Mock PRD de tu Chatbot RAG",
            duration: "4 Min",
            tags: ["Paso 9 de 14", "Mock PRD", "Definition of Done (DoD)", "Trazabilidad Técnica"],
            cheatSheet: {
                idea: "Acá juntamos todo lo que vimos en las slides anteriores adentro del entregable real de una PM: el PRD y la lista de criterios de aprobación (Definition of Done).",
                clicks: "1° Señalá en la tarjeta izquierda las fuentes y metadatos (cita entre paréntesis la Slide donde se vio) → 2° Señalá la tarjeta derecha (DoD) → 3° Mostrá el botón 'Abrir App Mock PRD'.",
                analogy: "Un PM sin base técnica escribe 'hacer un chatbot que ande bien'; vos escribís el plano exacto con Chunking 1000/15%, Top-3, Temp 0.0 y Score >= 0.75."
            },
            plainTerms: [
                { term: "PRD (Product Requirements Document)", simple: "Es el documento madre que escribe el Product Manager para definir qué producto se va a construir, con qué fuentes de datos, qué filtros y bajo qué reglas de calidad." },
                { term: "Definition of Done (DoD / Definición de Terminado)", simple: "Es el contrato de calidad con los programadores y QA: la lista de parámetros exactos (Chunking, Overlap, Score >= 0.75, SLA, Evals >= 90%) que deben cumplirse para aprobar el lanzamiento." }
            ],
            interaction: "Recorré las dos tarjetas mostrando que cada ítem indica entre paréntesis en qué Slide se aprendió, y señalá los botones de abajo.",
            script: "**1️⃣ DE LA TEORÍA A TU ENTREGABLE COMO PM:**\nCuando liderás un proyecto de IA no programás el código, pero escribís el documento más importante del equipo: el **PRD (Documento de Requisitos de Producto)** y su **Definition of Done (DoD)**. Fijate cómo cada renglón de esta slide resume lo que acabamos de aprender.\n\n**2️⃣ TARJETA IZQUIERDA (Alcance y Datos):**\n* **Ground Truth:** Manuales y glosarios oficiales (visto en Slide 8).\n* **Regla de Respuesta:** Temperatura `0.0` (Slide 2) y cita obligatoria a la página (Slide 9).\n* **Metadatos:** `idioma`, `año_vigencia`, `modulo` (Slide 6).\n\n**3️⃣ TARJETA DERECHA (Tu Contrato de Calidad / DoD):**\n* **Chunking:** `1.000 caracteres` con `15% de Overlap` (Slide 7) y `Prompt Caching` (Slide 3).\n* **Los 3 Blindajes que veremos ahora en el Módulo 4:** Contrato privado **Zero-Retention SLA** (Slide 11), freno anti-inventos en **Score >= 0.75** (Slide 12) y aprobar el examen del **Golden Dataset con >= 90%** (Slide 13).",
            bridge: "Entremos entonces al Módulo 4 (Blindaje Corporativo) para completar esos 3 requisitos finales de nuestro PRD: empezamos en el Paso 10 (Slide 11) con Privacidad y Gobernanza Legal."
        },
        {
            num: 11,
            id: "slide-11",
            title: "Gobernanza de IA, Privacidad & Prevención de Data Leakage",
            duration: "4 Min",
            tags: ["Paso 10 de 14", "Data Leakage", "Enterprise SLA", "Zero-Data Retention", "PII Masking"],
            cheatSheet: {
                idea: "Nunca usamos chats gratuitos porque guardan tus datos para entrenar modelos públicos (Data Leakage). Usamos API Corporativa con Retención Cero (Zero-Data Retention) y enmascarado de datos personales (PII Masking).",
                clicks: "1° Compará caja Roja vs Verde → 2° En el simulador de abajo alterná entre '🚨 Chat Gratuito' (expone Pfizer y el email) y '🛡️ API Enterprise SLA' (oculta [CLIENT_ORG] y [EMAIL_REDACTED]).",
                analogy: "PII Masking es pasarle corrector líquido a los nombres reales y mails antes de mandar la hoja a la API."
            },
            plainTerms: [
                { term: "Data Leakage (Fuga de Datos / Propiedad Intelectual)", simple: "Es el riesgo de que información confidencial de la empresa o de un cliente bajo NDA termine filtrada afuera por enviarla a cuentas gratuitas o públicas de IA." },
                { term: "Enterprise SLA & Zero-Data Retention (Retención Cero)", simple: "Es el contrato corporativo con OpenAI, Anthropic, Microsoft o AWS donde se comprometen legal y técnicamente a procesar tus textos en memoria temporal y borrarlos en el acto, sin usarlos jamás para entrenar sus modelos públicos." },
                { term: "PII Masking (Enmascaramiento de Datos Personales)", simple: "PII significa 'Información Personal Identificable' (nombres, DNI, emails). El Masking es un filtro automático que reemplaza esos datos por etiquetas ('[EMAIL_REDACTED]') antes de que salgan hacia la API." }
            ],
            interaction: "En el simulador inferior alterná entre '🚨 Enviar por Chat Gratuito' y '🛡️ Enviar por API Enterprise SLA (Zero-Retention)'.",
            script: "**1️⃣ EL RIESGO LEGAL: DATA LEAKAGE (Señalá la tarjeta roja):**\nSi un empleado pega un glosario confidencial de un cliente en el ChatGPT gratuito o común, esos textos quedan guardados y se usan para entrenar futuros modelos públicos. Eso se llama **Data Leakage (Fuga de Datos)** y viola contratos de confidencialidad (**NDA**) y normas **ISO 27001 / GDPR**.\n\n**2️⃣ LA SOLUCIÓN CORPORATIVA (Señalá la tarjeta verde):**\nEn empresas nos conectamos por **API Corporativa** bajo un contrato llamado **Enterprise SLA con Zero-Data Retention (Retención Cero)**: el proveedor procesa la consulta en memoria temporal, responde y la borra en el acto, con **0% de entrenamiento sobre tus datos**.\n\n**3️⃣ DEMO EN VIVO: PII MASKING (Tocá los dos botones del simulador de abajo):**\nMirá la consulta confidencial: *'Lanzamiento Pfizer Q4 — contacto: ana.perez@pfizer.com'*. En el botón rojo viaja desnuda. En el botón verde (**Enterprise SLA**), antes de salir pasa por **PII Masking**, que tapa el cliente y el mail (`[CLIENT_ORG]` y `[EMAIL_REDACTED]`). Doble blindaje legal.",
            bridge: "Ya blindamos legalmente los datos que entran. Ahora vamos al Paso 11 (Slide 12): ¿qué pasa si un empleado le hace al Bot una pregunta que NO está en ningún manual? ¿Cómo logramos que el Bot se calle en vez de inventar?"
        },
        {
            num: 12,
            id: "slide-12",
            title: "Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'",
            duration: "4 Min",
            tags: ["Paso 11 de 14", "Confidence Threshold (0.75)", "Guardrail Determinista", "Fallback Seguro"],
            cheatSheet: {
                idea: "Le ponemos una nota mínima de similitud (0.75) a Pinecone. Si lo que encontró tiene menos de 0.75, el servidor bloquea la llamada al LLM (gasta $0) y devuelve una respuesta fija diciendo 'No tengo información verificada'.",
                clicks: "1° En el simulador derecho tocá 'Caso 1 (Score 0.91)' → 2° Tocá 'Caso 3 (Score 0.34: salario del Director)' y mostrá cómo se prende la caja roja BLOQUEADO con el Fallback Seguro.",
                analogy: "Es un patovica en la puerta del LLM: si el párrafo del manual no tiene al menos 7,50 puntos de parecido con la pregunta, ni siquiera te deja pasar a hablar con el LLM."
            },
            plainTerms: [
                { term: "Confidence Threshold (Umbral de Confianza Semántica, ej. 0.75)", simple: "Es la 'nota mínima de aprobación' que le exigimos al buscador vectorial (Pinecone). Si el párrafo más parecido del manual tiene una nota menor a 0.75, asumimos que el manual no habla de ese tema." },
                { term: "Cortocircuito en Backend (Deterministic Guardrail)", simple: "Si la nota no llega a 0.75, nuestro servidor frena ahí mismo y ni siquiera llama al LLM. Así es 100% imposible que alucine y además ahorramos el 100% de los tokens de generación." },
                { term: "No-Answer Fallback (Respuesta de Abstención Segura)", simple: "Es el mensaje educado y fijo que devuelve el sistema cuando se activa el freno ('No dispongo de información oficial verificada sobre esa consulta en los manuales vigentes')." }
            ],
            interaction: "En el simulador derecho hacé clic en el Caso 1 (0.91), Caso 2 (0.78) y Caso 3 (0.34), y mové la barra deslizante alrededor de 0.75.",
            script: "**1️⃣ CÓMO ENSEÑARLE AL BOT A DECIR 'NO SÉ':**\n¿Qué pasa si alguien le pregunta a nuestro Bot de traducción: *'¿Cuál es el salario del Director de Finanzas?'*? Si dejáramos pasar esa pregunta al LLM, intentaría inventar algo. Por eso ponemos en el servidor una barrera matemática llamada **Confidence Threshold (Umbral de Confianza)** en **`0.75`**.\n\n**2️⃣ DEMO EN VIVO EN EL SIMULADOR (Tocá Caso 1 y luego Caso 3 a la derecha):**\n* **Caso 1 (`Score 0.91` — Chargeback):** Como `0.91` supera el umbral de `0.75`, se prende la caja verde (**AUTORIZADO**), llama al LLM y responde *'Contracargo (pág. 8)'*.\n* **Caso 3 (`Score 0.34` — Salario del Director):** Como en los manuales de traducción no hay nada parecido, el puntaje da `0.34` (menor a `0.75`). Se prende la caja roja (**BLOQUEADO**).\n\n**3️⃣ EL CORTOCIRCUITO Y AHORRO:**\nCuando bloquea, **ni siquiera despierta al LLM (ahorra 100% de tokens)** y responde con el **Fallback Seguro**: *'No dispongo de información oficial verificada sobre esa consulta en los manuales vigentes'*.",
            bridge: "Ya tenemos el Bot armado, blindado legalmente y con su freno anti-alucinaciones en 0.75. Nos queda el último requisito del PRD antes de salir a producción: ¿cómo probamos automáticamente que el Bot responde bien 100 preguntas reales? Vamos al Paso 12 en la Slide 13."
        },
        {
            num: 13,
            id: "slide-13",
            title: "Evaluación de Calidad: Golden Dataset & Evals en CI/CD",
            duration: "4 Min",
            tags: ["Paso 12 de 14", "Golden Dataset", "Evals en CI/CD", "Context Adherence >= 90%"],
            cheatSheet: {
                idea: "Antes de subir cualquier cambio a producción, un robot le toma un examen automático de 100 preguntas reales (Golden Dataset). Si saca menos de 90% de fidelidad, bloquea la subida (CI/CD Gate).",
                clicks: "1° Señalá las 3 tarjetas de arriba → 2° En el simulador de abajo mirá la 'Muestra Caso #14 (Chargeback)' y alterná entre '✅ PR #42' (PASS) y '❌ PR #43' (FAIL: Alucinación → DEPLOY BLOCKED).",
                analogy: "El Golden Dataset es la plantilla de respuestas correctas del examen; el pipeline CI/CD es el profesor automático que corrige las 100 preguntas en 2 minutos antes de dejar salir al Bot."
            },
            plainTerms: [
                { term: "Golden Dataset (Conjunto de Datos de Oro)", simple: "Es una planilla con 50 a 100 preguntas reales (incluyendo el Caso #14 de 'Chargeback' y preguntas trampa) con sus 'respuestas ideales certificadas' por los expertos humanos del negocio." },
                { term: "Evals en CI/CD (Evaluación Continua Automatizada)", simple: "Cada vez que un programador quiere subir un cambio al código (un Pull Request), el pipeline le toma automáticamente las 100 preguntas del Golden Dataset al Bot. Si saca menos de 90%, bloquea el despliegue." },
                { term: "Context Adherence / Faithfulness (Fidelidad al Contexto)", simple: "Métrica que mide qué porcentaje de las respuestas del Bot salieron fielmente de los manuales oficiales sin inventar nada." },
                { term: "Observabilidad LLMOps (Langfuse / Arize)", simple: "Es el tablero de control en vivo que monitorea en producción cuánto tarda cada respuesta, cuántos dólares consume por día y si algún usuario votó con pulgar abajo (👎)." }
            ],
            interaction: "En el simulador inferior alterná entre '✅ PR #42' y '❌ PR #43' señalando cómo cambia el Caso #14 y el cartel final (DEPLOY APPROVED vs DEPLOY BLOCKED).",
            script: "**1️⃣ EL PROBLEMA DE TOCAR EL PROMPT:**\nEn IA pasa algo loco: un programador toca un renglón para que el Bot sea más simpático, ¡y sin darse cuenta arruina cómo respondía las reglas técnicas! Como nadie puede probar 100 preguntas a mano todos los días, vos como PM armás con las expertas una planilla de **100 preguntas reales con su respuesta ideal certificada**: el **Golden Dataset (Dataset de Oro)**.\n\n**2️⃣ DEMO EN VIVO: EVALS EN CI/CD (Tocá PR #42 y PR #43 abajo):**\nCada vez que alguien quiere subir un cambio, el sistema le toma las 100 preguntas automáticamente (mirá la **Muestra Caso #14: '¿Traducción de Chargeback?'**):\n* **En PR #42 (verde):** El Bot responde *'Contracargo (pág. 8) [PASS]'*, saca **96.4%** de fidelidad (**Context Adherence**) y sale **`DEPLOY APPROVED ✅`**.\n* **En PR #43 (rojo):** Alguien rompió el guardrail, el Bot alucina *'Reverso bancario (sin cita)'*, la nota cae a **74%** y salta **`DEPLOY BLOCKED 🛑`**.\n\n**3️⃣ MONITOREO EN VIVO (Tarjeta 3):**\nY una vez en la calle, miramos en **Langfuse** cuánto tarda, cuánto gasta y los votos de los usuarios.",
            bridge: "¡Con esto completamos de punta a punta el diseño y blindaje de nuestro Bot! Ahora pasemos al Paso 13 (Slide 14): ¿cómo defendés estas decisiones técnicas cuando te las preguntan en una entrevista laboral?"
        },
        {
            num: 14,
            id: "slide-14",
            title: "Roleplay: Defensa Técnica en Entrevistas IT",
            duration: "4 Min",
            tags: ["Paso 13 de 14", "Roleplay Ejecutivo", "RAG vs Fine-Tuning", "FinOps & Escalabilidad"],
            cheatSheet: {
                idea: "Practicamos las 2 preguntas clásicas de entrevista usando exactamente nuestro Bot: 1) ¿Por qué RAG y no Fine-Tuning? 2) ¿Cómo cuidás la factura de tokens si escala a 50.000 usuarios?",
                clicks: "1° Leé la Pregunta 1 y tocá '👁️ Ocultar / ✨ Revelar' para ver los 3 pilares → 2° Hacé lo mismo con la Pregunta 2.",
                analogy: "Pregunta 1: Fine-Tuning enseña modales (forma), RAG consulta el libro actualizado (hechos). Pregunta 2: Ahorramos con Prompt Caching, Umbral 0.75 y Top-3 Chunks."
            },
            plainTerms: [
                { term: "Qué evalúan en la Pregunta 1 (RAG vs. Fine-Tuning)", simple: "Quieren ver si caés en la trampa de principiante de pedir 're-entrenar el modelo' cada semana (carísimo y propenso a alucinar) o si sabés defender la arquitectura RAG con Base Vectorial que construimos hoy." },
                { term: "Qué evalúan en la Pregunta 2 (Escalabilidad FinOps)", simple: "Quieren ver si cuidás el margen económico del producto combinando los 3 ahorros que implementamos en el Bot: Prompt Caching (Slide 3), Metadata Pre-Filtering + Top-3 (Slides 6 y 9) y Cortocircuito en < 0.75 (Slide 12)." }
            ],
            interaction: "Usá el botón '👁️ Ocultar / ✨ Revelar' en ambas preguntas para que Anabela intente responder primero con sus palabras y luego vea la respuesta modelo.",
            script: "**1️⃣ ESCENARIO 1: LA TRAMPA DEL FINE-TUNING (Tarjeta superior):**\n* **Te preguntan:** *'¿Por qué no hacemos Fine-Tuning del modelo cada semana para cargarle los glosarios nuevos?'*\n* **Tus 3 puntos ganadores:**\n  1. **Forma vs. Hechos:** El Fine-Tuning sirve para enseñar tono o formato JSON, pero congela los conocimientos y sigue alucinando.\n  2. **Costo inviable:** Re-entrenar cada semana es lento, carísimo y no permite citar la página.\n  3. **Solución RAG:** Con **RAG + Pinecone** actualizamos fichas en segundos, filtramos por metadatos de 2026 y citamos la fuente.\n\n**2️⃣ ESCENARIO 2: ESCALABILIDAD Y COSTOS FINOPS (Tarjeta inferior):**\n* **Te preguntan:** *'Si pasamos de 100 a 50.000 usuarios, ¿cómo evitás que la factura de tokens nos funda?'*\n* **Tus 3 capas de ahorro (todo lo que vimos hoy):**\n  1. **Prompt Caching (Slide 3):** Ahorra +50% en las instrucciones fijas del sistema.\n  2. **Cortocircuito en < 0.75 y Caché Semántica (Slide 12):** No llamamos ni pagamos al LLM en preguntas repetidas o fuera de tema.\n  3. **Top-3 Chunks con Metadata Pre-Filtering (Slides 6 y 9):** Inyectamos solo 3 fichas de 1.000 letras en vez de manuales enteros.",
            bridge: "Pasemos a nuestra última diapositiva, el Paso 14 en la Slide 15, para repasar el mapa completo de lo que construiste hoy y cómo se conecta con los Agentes Autónomos de la Sesión 3."
        },
        {
            num: 15,
            id: "slide-15",
            title: "Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager",
            duration: "2 Min",
            tags: ["Paso 14 de 14", "Recorrido Completo del Bot", "Entregables S2", "Puente a Sesión 3 (Agentes ReAct)"],
            cheatSheet: {
                idea: "Cerramos repasando los 4 módulos del Bot que diseñamos hoy (tarjeta izquierda), las 3 apps prácticas para usar en la semana (abajo) y el salto de la Sesión 3: pasar de un Bot que solo lee (RAG) a un Agente que ejecuta acciones (ReAct).",
                clicks: "1° Señalá el resumen de los 4 módulos (izquierda) → 2° Señalá la evolución hacia Sesión 3 (derecha) → 3° Mostrá los 3 botones de abajo (Actividad Práctica, App Mock PRD y Glosario).",
                analogy: "Hoy construimos el 'Cerebro que lee y responde' (RAG); en la Sesión 3 le vamos a dar 'Manos para actuar en otros sistemas' (Agentes con Tool Calling)."
            },
            plainTerms: [
                { term: "IA Consultiva (RAG Pasivo — Lo que construimos en la Sesión 2)", simple: "Es el 'Cerebro que lee': nuestro Bot busca en los manuales privados de Pinecone y responde dudas con total precisión y cita verificable, pero no ejecuta acciones por su cuenta en otros sistemas." },
                { term: "IA Agéntica (Agentes con ReAct y Tool Calling — Lo que veremos en la Sesión 3)", simple: "Son las 'Manos que actúan': además de leer el manual, el agente puede tomar decisiones paso a paso y conectarse por API a otros programas (ej. actualizar el glosario en el sistema, crear un ticket en Jira o enviar un mail con permiso humano)." }
            ],
            interaction: "Repasá las dos tarjetas de síntesis y mostrale los 3 botones inferiores para practicar durante la semana.",
            script: "**1️⃣ RESUMEN DE TU LOGRO DE HOY (Tarjeta izquierda):**\n¡Felicitaciones, Anabela! Empezamos con una hoja en blanco y diseñaste completo nuestro **Enterprise Knowledge & Localization Bot**:\n* **Módulo 1:** Domaste el motor con **Temperatura 0.0**, **Tokens BPE**, **Prompt Caching** y evitaste el **Lost in the Middle**.\n* **Módulo 2:** Armaste el buscador con **Embeddings (1536d)**, **Pinecone + Metadata Filtering** y **Chunking con 15% Overlap**.\n* **Módulo 3:** Conectaste la **Fase 1 y Fase 2 de RAG** y escribiste el **PRD con Definition of Done**.\n* **Módulo 4:** Lo blindaste con **Enterprise SLA**, **Umbral 0.75** y **Golden Dataset en CI/CD**.\n\n**2️⃣ TUS 3 HERRAMIENTAS PARA LA SEMANA (Botones de abajo):**\nTenés la **Actividad Práctica S2** (4 misiones interactivas), la **App Generadora de Mock PRD** y el **Glosario Completo S2**.",
            bridge: "🔗 Conexión con la Sesión 3: Hoy construimos el **'Cerebro consultivo'** de la IA (nuestro Bot lee manuales privados y responde sin alucinar, pero todavía tiene 'las manos atadas': no puede tocar botones ni ejecutar tareas en otros programas). En la **Sesión 3** le vamos a dar **'Manos y Autonomía'**: vamos a ver cómo funcionan los **Agentes de IA (arquitectura ReAct)** que razonan paso a paso, usan herramientas externas por API (**Tool Calling**) y piden autorización humana antes de ejecutar una acción crítica (**Human-in-the-Loop**)."
        }
    ]
};

module.exports = { SESSION_1_DATA, SESSION_2_DATA };
