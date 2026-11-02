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
    subtitle: "Guion completo palabra por palabra, demos interactivas y puentes de conexión entre las 15 diapositivas de la Sesión 2 para Anabela Hotian.",
    accentHex: "#10b981",
    accentRgb: "16, 185, 129",
    goal: "Desmitificar el funcionamiento interno de los Grandes Modelos de Lenguaje (LLMs), aprovechando la afinidad lingüística de Anabela para dominar Tokenización BPE, Ventanas de Contexto, Embeddings Vectoriales, Chunking con Overlap y el diseño end-to-end de un sistema RAG corporativo.",
    agenda: [
        { time: "00 - 15 min", module: "Dentro del Cerebro del LLM", slides: "Slides 1 a 4", focus: "Naturaleza probabilística (Next-Token Prediction), Tokenización BPE en vivo y el sesgo 'Lost in the Middle' en la Ventana de Contexto." },
        { time: "15 - 30 min", module: "Geometría del Lenguaje & Datos", slides: "Slides 5 a 7", focus: "Embeddings (mapas vectoriales 3D), Bases de Datos Vectoriales con Metadata Filtering y fragmentación documental (Chunking + Overlap)." },
        { time: "30 - 45 min", module: "Arquitectura RAG & Taller PRD", slides: "Slides 8 a 10", focus: "Pipeline RAG Fase 1 (Ingestión Offline) y Fase 2 (Consulta Online en vivo), más taller práctico del Mock PRD." },
        { time: "45 - 60 min", module: "Gobernanza, Calidad & Roleplay", slides: "Slides 11 a 15", focus: "Prevención de Data Leakage (Enterprise SLA), umbrales anti-alucinación, Golden Dataset (Evals) y defensa RAG vs. Fine-Tuning." }
    ],
    slides: [
        {
            num: 1,
            id: "slide-1",
            title: "Portada: IA Generativa & Arquitectura RAG",
            duration: "3 Min",
            tags: ["Sesión 2", "LLMs", "Arquitectura RAG", "React Simulators"],
            interaction: "Presentá la portada destacando cómo hoy conectamos los cimientos de software de la Sesión 1 con la Inteligencia Artificial Generativa. Mostrá que las 4 tarjetas Bento son clicables para saltar directo a cada módulo.",
            script: "¡Bienvenida a la Sesión 2, Anabela! En nuestro primer encuentro vimos cómo se construye el software moderno con APIs, servidores, ambientes y bases de datos. Hoy nos vamos a meter en el corazón de la revolución actual: cómo nacieron y cómo funcionan por dentro los Grandes Modelos de Lenguaje (LLMs como GPT-4, Claude o Gemini) y cómo hacen las empresas para conectarlos con sus propios documentos, manuales y glosarios privados sin que el modelo invente respuestas.\n\n* **1. Módulo 1 — Límites Físicos (Slides 2 a 4):** Desmitificamos la 'magia' de la IA probando en vivo predicción de tokens, Temperatura, BPE, Prompt Caching y el sesgo *Lost in the Middle*.\n* **2. Módulo 2 — Bloques de RAG (Slides 5 a 7):** Exploramos cómo tu experiencia en lingüística y traducción se convierte en geometría mediante Embeddings de 1536 dimensiones, Similitud por Coseno, Metadata Filtering y Chunking con Overlap.\n* **3. Módulo 3 — Taller Práctico (Slides 8 a 10):** Recorremos las 2 fases de RAG (Ingestión Batch vs. Consulta en Tiempo Real) y especificamos el Mock PRD de un *Enterprise Knowledge Bot*.\n* **4. Módulo 4 — Gobernanza & QA (Slides 11 a 15):** Blindamos el producto con contratos Enterprise SLA (Zero-Retention), umbrales de confianza en `0.75`, Golden Datasets en CI/CD y roleplay de entrevista ejecutiva.",
            bridge: "Para arrancar bien desde la raíz, veamos cuál fue el paper científico que disparó el advenimiento de todos los LLMs modernos y cómo funciona su motor probabilístico bajo el capó. Pasemos a la Slide 2."
        },
        {
            num: 2,
            id: "slide-2",
            title: "El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)",
            duration: "5 Min",
            tags: ["Attention Is All You Need", "Transformer (GPT)", "Next-Token & Temperatura", "RAG vs Fine-Tuning"],
            interaction: "Contrastá primero las tarjetas superiores (Mito vs. Realidad). Luego interactuá en vivo con el Simulador React de Next-Token alternando entre 'Temp = 0.0 (RAG / Precisión)' y 'Temp = 0.9 (Creativa / Riesgo)' y cerrá con las dos tarjetas fundacionales inferiores.",
            script: "Para entender qué es un LLM de verdad, vayamos al momento exacto en que nació todo este auge: junio de 2017, cuando un equipo de investigadores de Google publica el paper **'Attention Is All You Need'** (Vaswani et al.). Y mirá qué conexión directa con tu carrera: ese paper se escribió para resolver un cuello de botella de la **traducción automática de idiomas**.\n\n* **El Mecanismo de Self-Attention (Auto-Atención):** Antes de 2017, las redes leían palabra por palabra en fila india y al llegar al final de un párrafo largo ya se habían olvidado del principio. La arquitectura **Transformer** (la **'T'** de **GPT**) mira toda la oración en paralelo y calcula matemáticamente cómo cada palabra modifica el sentido de las demás según el contexto.\n* **Simulador en Vivo — Next-Token & Temperatura:** Mirá el simulador React en el centro de la diapositiva. El LLM no 'piensa': calcula probabilidades sobre cuál es el siguiente token. Cuando hacemos clic en **`Temp = 0.0 (RAG / Precisión)`**, el modelo elige siempre el token más probable (`glosario_aprobado` con 88%), ideal para bots corporativos. Pero si subimos a **`Temp = 0.9`**, aplanamos la curva y el modelo puede elegir un término inventado, disparando una **alucinación factual**.\n* **Fine-Tuning (Estilo) vs. RAG (Conocimiento):** Fijate en la tarjeta violeta inferior: el Fine-Tuning solo sirve para enseñar tono o formato (ej. responder en JSON), nunca para cargar datos que cambian cada semana. Para conectar el modelo con tus manuales y glosarios privados sin alucinar, usamos **RAG**.",
            bridge: "Recién vimos en el simulador que el Transformer no predice palabras enteras, sino 'tokens', y que así es como nos facturan las APIs. Pasemos a la Slide 3 para experimentar en vivo con el Tokenizador BPE y la calculadora FinOps."
        },
        {
            num: 3,
            id: "slide-3",
            title: "Tokens: La Economía y Lingüística de la IA",
            duration: "4 Min",
            tags: ["Tokenización BPE", "Asimetría Input/Output", "Prompt Caching (-55%)"],
            interaction: "En la tarjeta izquierda, alterná entre las 3 frases del Tokenizador React ('Frase 1: Localización', 'Frase 2: Regla RAG', 'Frase 3: Output JSON') y el botón 'Ver Texto Crudo / Tokenizar BPE'. En la tarjeta derecha, mové el slider de consultas diarias y activá/desactivá 'Prompt Caching'. Podés ampliar la imagen BPE con un clic.",
            script: "Mirá el simulador izquierdo de **Tokenización BPE (Byte Pair Encoding)**: nuestra frase de 9 palabras (*'La localización automática con IA optimiza glosarios técnicos globales.'*) se divide en **15 tokens de colores** (`La`, ` locali`, `zación`, ` auto`, `mática`...). En vez de memorizar un diccionario infinito, el modelo separa raíces conceptuales (`locali`) de sufijos morfológicos (`zación`).\n\n* **Regla de Conversión y Asimetría de Costos:** En promedio, **1.000 tokens equivalen a ~750 palabras en inglés** (y ~650 en español por tildes y morfología). Además, las APIs cobran de forma asimétrica: generar tokens de salida (**Output**) cuesta de **3x a 5x más caro** que leer tokens de entrada (**Input**).\n* **Calculadora FinOps de Prompt Caching:** Mirá el simulador de la derecha. Si tu chatbot recibe 5.000 consultas por día y en cada una enviás un System Prompt fijo de 1.500 tokens con las reglas de estilo, pagarías $225 USD/mes. Al activar **Prompt Caching**, el proveedor guarda ese prefijo estático en memoria caché, **ahorrando entre un 50% y 75% de la factura** y bajando la latencia al primer token de 1.150 ms a 380 ms.",
            bridge: "Si los tokens son las unidades que entran y salen del modelo, la siguiente pregunta crítica de arquitectura es: ¿cuántos tokens entran en una sola llamada y por qué el modelo pierde atención en el medio? Vamos a la Slide 4."
        },
        {
            num: 4,
            id: "slide-4",
            title: "Ventanas de Contexto & El Sesgo 'Lost in the Middle'",
            duration: "4 Min",
            tags: ["Context Window", "Curva en U", "Lost in the Middle", "Primacy & Recency"],
            interaction: "En el simulador React de la derecha, hacé clic en los 3 botones ('Inicio del Prompt 8%', 'Centro Geométrico 50%', 'Final del Prompt 94%') o arrastrá el slider para ver cómo cae la atención del 99% al 38% en la zona media. Ampliá la imagen de la curva U si querés mostrar el paper de Stanford.",
            script: "La **Ventana de Contexto** es la memoria RAM de corto plazo del modelo en cada llamada a la API. Como hoy existen ventanas de 128k a 1 millón de tokens, un error típico de principiante es decir: *'No hagamos RAG, metamos los 50 manuales enteros adentro del prompt en cada pregunta'*.\n\n* **El Fenómeno 'Lost in the Middle' (Curva en U):** Probemos el simulador de la derecha. Cuando inyectás una regla crítica al **Inicio del Prompt (Posición 8%)** o al **Final (Posición 94%)**, el modelo la recuerda con un **95% a 99% de precisión** (sesgos de *Primacy* y *Recency*). Pero si el dato cae enterrado en el **Centro Geométrico (Posición 50%)** de un prompt masivo, la retención se desploma al **~38%**.\n* **Decisión de Producto:** Como PM, exigís usar RAG para inyectar únicamente los **3 a 5 fragmentos más relevantes** (Top-K) y ordenarlos estratégicamente en los extremos del prompt.",
            bridge: "Ahora bien: para traer solo los 3 fragmentos exactos entre miles de páginas, necesitamos un buscador que entienda el significado conceptual y no solo palabras idénticas. Pasemos a la Slide 5: Embeddings."
        },
        {
            num: 5,
            id: "slide-5",
            title: "Embeddings: Traduciendo Significado a Coordenadas",
            duration: "4 Min",
            tags: ["Embeddings (1536d)", "Espacio Vectorial", "Similitud por Coseno"],
            interaction: "Hacé clic en los distintos nodos de colores del mapa vectorial ('Glosario Técnico', 'Memoria de Traducción', 'Deploy en Cloud', 'Automóvil Deportivo') para que el panel inferior derecho muestre en vivo su vector de 1536 dimensiones y su puntaje de Similitud por Coseno.",
            script: "Un buscador tradicional por palabras clave (`Ctrl + F` o SQL `LIKE`) es ciego al significado: si el usuario busca *'reembolso por contracargo'* y el manual dice *'devolución por disputa de tarjeta'*, da cero resultados. La IA lo resuelve mediante **Embeddings**.\n\n* **Geometría del Lenguaje (1536 Dimensiones):** Un modelo de Embeddings toma cualquier texto y lo traduce en una lista de 1536 coordenadas numéricas que capturan su **intención semántica**.\n* **Similitud por Coseno en Vivo:** Hagamos clic en los puntos del mapa. Mirá cómo *'Glosario Técnico'* (`0.96`), *'Localización Software'* (`0.92`) y *'Memoria de Traducción'* (`0.89`) viven en el mismo vecindario geométrico. En cambio, los nodos verdes de DevOps (*'Pipeline CI/CD'*) quedan a media distancia (`0.48`), y el nodo rojo *'Automóvil Deportivo'* da una similitud de **`0.12`** (totalmente descartado).",
            bridge: "¿Y dónde guardamos millones de estos vectores de 1536 dimensiones para buscarlos en menos de 20 milisegundos sin mezclar documentos viejos con nuevos? Pasemos a la Slide 6."
        },
        {
            num: 6,
            id: "slide-6",
            title: "Bases Vectoriales & Metadata Filtering",
            duration: "4 Min",
            tags: ["Vector DB (Pinecone / pgvector)", "Metadata Pre-Filtering", "Búsqueda Híbrida"],
            interaction: "En el simulador React de la derecha, activá y desactivá los botones 'Idioma: ES-LATAM', 'Año: 2026 (Vigente)' y 'Doc: Guía de Estilo' para mostrar cómo se apagan los vectores obsoletos (como el Manual Legacy 2021 o el documento EN-US) y cómo baja la latencia en milisegundos.",
            script: "Esos vectores se almacenan en una **Base de Datos Vectorial** (como Pinecone, Qdrant o `pgvector`). Pero atención a esta trampa real de producto: si buscás únicamente por similitud vectorial pura, la base puede traerte un fragmento con score altísimo (`0.86`) pero que pertenece a un **Manual Legacy de 2021 que ya está derogado** o a la guía de Estados Unidos.\n\n* **Metadata Pre-Filtering (Filtro Duro + Semántico):** Mirá el simulador de la derecha. Cuando activamos las etiquetas **`Idioma: ES-LATAM`** y **`Año: 2026`**, la base aplica primero un filtro lógico instantáneo que descarta el 67% de ruido documental y calcula la similitud por coseno solo sobre los documentos vigentes.\n* **Rol de la PM:** Definir qué metadatos obligatorios lleva cada documento (`idioma`, `año_vigencia`, `cliente`, `módulo`) es una tarea clave que especificás vos en el PRD.",
            bridge: "Antes de guardar un manual de 200 páginas en esta base vectorial, tenemos que dividirlo en bloques manejables sin romper oraciones ni reglas a la mitad. Vamos a la Slide 7: Chunking y Overlap."
        },
        {
            num: 7,
            id: "slide-7",
            title: "Chunking & Overlap: El Arte de Fragmentar Documentos",
            duration: "4 Min",
            tags: ["Recursive Character Chunking", "Chunk Overlap (15%)", "Puente Semántico"],
            interaction: "En el simulador React de la derecha, llevá el slider de Overlap a '0%' para mostrar la alerta roja de corte abrupto, y luego subilo a '15%' para iluminar en azul el puente semántico compartido entre el Fragmento A y el Fragmento B.",
            script: "No podemos vectorizar un PDF de 300 páginas como un único bloque. El proceso de dividirlo en trozos de ~500 tokens (unos 1.000 caracteres) se llama **Chunking**.\n\n* **Recursive Character Split vs. Corte Ciego:** Nunca cortamos por cantidad fija de caracteres a ciegas; pedimos *Recursive Character Chunking*, que respeta encabezados, párrafos y puntos seguidos.\n* **Simulador de Overlap (Solapamiento):** Mirá qué pasa en el simulador derecho cuando ponemos **`0% Overlap`**: la regla se corta justo al medio y el Fragmento B pierde el sujeto de la oración, haciendo que el LLM alucine. Ahora hagamos clic en **`15% Overlap`**: los últimos 150 caracteres del Fragmento A (*'despliegue de la versión en producción si hay errores P1'*) se repiten al inicio del Fragmento B, creando un **puente semántico** que preserva el contexto completo.",
            bridge: "¡Ya dominás todas las piezas! Ahora unamos todo en la arquitectura completa de RAG en dos etapas. Pasemos a la Slide 8 para ver la Fase 1: Ingestión Batch."
        },
        {
            num: 8,
            id: "slide-8",
            title: "Anatomía de RAG — Fase 1: Ingestión Offline (Batch)",
            duration: "3 Min",
            tags: ["RAG Fase 1", "Pipeline Batch Offline", "Ground Truth"],
            interaction: "Hacé clic en el botón '▶ Simular Pipeline Batch' (o en cada uno de los 4 nodos: 1. Documentos -> 2. Chunking -> 3. Embedding -> 4. Vector DB) para recorrer la explicación técnica e indicadores de cada etapa.",
            script: "**RAG** (*Retrieval-Augmented Generation*) es tomarle examen al LLM a **libro abierto**, y se divide en dos fases independientes. Acá en la Slide 8 vemos la **Fase 1: Ingestión del Dato (Batch Offline)**, que corre en segundo plano cuando cargamos o actualizamos manuales:\n\n* **Paso 1 — Documentos (Ground Truth):** Extraemos y limpiamos los PDFs, Markdowns, wikis de Confluence y memorias de traducción aprobadas.\n* **Paso 2 — Chunking:** Los fragmentamos en bloques de ~1.000 caracteres con **15% de Overlap**.\n* **Paso 3 — Embedding:** Convertimos cada bloque en su vector semántico de **1536 dimensiones**.\n* **Paso 4 — Vector DB:** Guardamos los vectores en Pinecone junto con su esquema JSON de metadatos. Nuestra biblioteca queda indexada.",
            bridge: "Con la base vectorial ya indexada, ¿qué ocurre en los milisegundos posteriores a que un usuario envía una pregunta en el chat? Pasemos a la Slide 9: Fase 2 de RAG en Tiempo Real."
        },
        {
            num: 9,
            id: "slide-9",
            title: "Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live)",
            duration: "4 Min",
            tags: ["RAG Fase 2", "Top-K Retrieval", "Prompt Aumentado", "Cita Verificable"],
            interaction: "Hacé clic en '▶ Simular Consulta Live' para animar los 4 pasos en tiempo real y luego abrí el botón '🔍 Ver Diagrama Completo RAG' para mostrar en pantalla completa cómo se conectan las Fases 1 y 2.",
            script: "Mirá la **Fase 2: Consulta en Tiempo Real (Online)** cuando alguien pregunta: *'¿Qué criterios de estilo y terminología se aplican al módulo de pagos para LATAM?'*:\n\n* **Paso 1 — Vectorización de la Pregunta (~35 ms):** Convertimos la duda del usuario en un vector de 1536 dimensiones con el mismo modelo de Embeddings.\n* **Paso 2 — Recuperación (Metadata Filter + Top-K):** Filtramos por `ES-LATAM` + `2026` y recuperamos los 3 fragmentos con mayor Similitud por Coseno (`Score >= 0.75`).\n* **Paso 3 — Prompt Aumentado (Examen a Libro Abierto):** El backend inserta esos 3 fragmentos oficiales dentro del System Prompt instruyendo al modelo a responder *únicamente* con esa evidencia.\n* **Paso 4 — Generación con Cita (`T = 0.0`):** El LLM redacta la respuesta exacta y adjunta la fuente clicable (ej. *Guía de Estilo Pagos LATAM 2026, pág. 14*).",
            bridge: "¿Cómo volcás toda esta arquitectura en un documento ejecutivo que tu equipo de ingeniería pueda construir y QA pueda auditar? Pasemos a la Slide 10: Taller del Mock PRD."
        },
        {
            num: 10,
            id: "slide-10",
            title: "Taller Práctico: El Mock PRD de tu Chatbot RAG",
            duration: "4 Min",
            tags: ["Mock PRD", "Definition of Done (DoD)", "Criterios de Aceptación IA"],
            interaction: "Repasá las dos tarjetas del PRD (Especificación Funcional vs. Definition of Done de IA) y mostrá los dos botones inferiores para lanzar en vivo la 'App Mock PRD S2' y el 'Simulador Práctico S2'.",
            script: "Como IT Product Manager o Project Manager en IA, tu entregable estrella no es el código: es el **PRD (Product Requirements Document)** y sus criterios de aceptación (**Definition of Done**).\n\n* **Especificación Funcional y Datos:** Definís el problema de negocio, las fuentes oficiales (*Ground Truth*) y las etiquetas de metadatos obligatorias (`idioma`, `año_vigencia`, `módulo`).\n* **Definition of Done (DoD) Técnico de IA:** Establecés métricas innegociables para aprobar el paso a producción: Chunking de `1000 chars / 15% overlap`, Vector DB con `Score >= 0.75`, contrato `Zero-Retention SLA` y evaluación automatizada `>= 90%`.\n* **Herramientas Interactivas:** Desde los botones de abajo podés abrir tanto la **App Interactiva del Mock PRD** (que exporta tu documento en Markdown) como el **Simulador Práctico de 4 Misiones**.",
            bridge: "Veamos ahora en detalle las tres compuertas de Gobernanza y Calidad que pusimos en ese Definition of Done. Empecemos en la Slide 11 por la seguridad corporativa y el riesgo de Data Leakage."
        },
        {
            num: 11,
            id: "slide-11",
            title: "Gobernanza de IA, Privacidad & Prevención de Data Leakage",
            duration: "4 Min",
            tags: ["Data Leakage", "Enterprise SLA", "Zero-Data Retention", "PII Masking"],
            interaction: "Contrastá la tarjeta roja izquierda (Chat Público / Licencias Consumer) con la tarjeta verde derecha (API Corporativa bajo Enterprise SLA). Luego alterná los dos botones del Simulador React inferior ('Enviar por Chat Gratuito' vs. 'Enviar por API Enterprise SLA').",
            script: "El primer freno de cualquier directorio o comité de ciberseguridad ante un proyecto de IA es el **Data Leakage (Fuga de Propiedad Intelectual)**.\n\n* **Tarjeta Roja — Chat Público / Licencias Consumer:** Si un miembro del equipo pega un glosario confidencial o contrato bajo NDA en una cuenta gratuita o pública, el proveedor puede retener esos datos para re-entrenar futuros modelos públicos (RLHF), violando acuerdos de confidencialidad y normativas GDPR / ISO 27001.\n* **Tarjeta Verde — API bajo Enterprise SLA con Zero-Data Retention:** En producción exigimos consumir los modelos vía API corporativa (Azure OpenAI, AWS Bedrock, Anthropic Enterprise) con cláusula contractual de **Retención Cero (Zero-Retention)** y enmascaramiento previo de datos personales (**PII Masking**). Probá el simulador de abajo para ver cómo pasa la auditoría SOC2 / ISO 27001.",
            bridge: "Ya blindamos la privacidad legal. Ahora blindemos la veracidad funcional: ¿cómo obligamos técnicamente al bot a decir 'no sé' cuando le preguntan algo fuera de los manuales? Vamos a la Slide 12."
        },
        {
            num: 12,
            id: "slide-12",
            title: "Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'",
            duration: "4 Min",
            tags: ["Confidence Threshold (0.75)", "Guardrail Determinista", "Fallback No-Answer"],
            interaction: "En el simulador React de la derecha, hacé clic en los 3 casos preconfigurados ('Caso 1: Score 0.91', 'Caso 2: Score 0.78', 'Caso 3: Score 0.34') y deslizá la barra de Score por encima y por debajo de 0.75 para ver cómo se conmuta en vivo entre 'AUTORIZADO' y 'BLOQUEADO'.",
            script: "Un LLM por defecto siempre intenta complacerte, aunque tenga que inventar. Para ponerle un guardrail determinista, usamos el **Confidence Threshold (Umbral de Confianza Semántica)** calibrado en **0.75**.\n\n* **Camino Verde (`Score >= 0.75` — Autorizado):** Hacé clic en el **Caso 1 (`Score 0.91`)**. Como la similitud en la base vectorial supera 0.75, el backend autoriza la llamada al LLM y devuelve la respuesta con su cita oficial.\n* **Camino Rojo (`Score < 0.75` — Cortocircuito y Fallback):** Ahora hacé clic en el **Caso 3 (`Score 0.34`)** o bajá el slider. Cuando alguien pregunta algo que no está en los manuales, el backend **bloquea la llamada al LLM** (ahorrando tokens y evitando alucinaciones) y devuelve una respuesta controlada (**No-Answer Fallback**): *'No dispongo de información oficial verificada sobre ese punto en la base documental'*.",
            bridge: "¿Y cómo verificamos automáticamente que cada cambio que hacen los programadores no rompa esta precisión antes de subirlo a producción? Pasemos a la Slide 13: Golden Dataset y Evals."
        },
        {
            num: 13,
            id: "slide-13",
            title: "Evaluación de Calidad: Golden Dataset & Evals en CI/CD",
            duration: "4 Min",
            tags: ["Golden Dataset", "Evals en CI/CD", "Context Adherence >= 90%", "Langfuse"],
            interaction: "Repasá las 3 tarjetas superiores y luego hacé clic en los dos escenarios del Simulador de Pipeline CI/CD inferior ('PR #42: Chunking 1000ch + 15% Overlap -> DEPLOY APPROVED' vs. 'PR #43: Prompt sin Guardrail -> DEPLOY BLOCKED').",
            script: "En software probabilístico no alcanza con probar tres preguntas a mano antes de lanzar. Implementamos una arquitectura de **Evaluación Continua (Evals)** en tres pilares:\n\n* **1. Golden Dataset (50 a 100 Casos Certificados):** Una base curada por expertos del negocio con preguntas reales, casos borde y sus respuestas ideales validadas (*Ground Truth*).\n* **2. Evals Automatizadas en CI/CD:** Mirá el simulador de abajo. En el **PR #42**, el pipeline corre los 100 casos, mide un **Context Adherence de 96.4%** (`>= 90%`) y aprueba el deploy. En cambio, si un desarrollador sube el **PR #43** rompiendo el prompt y la fidelidad cae a `74.0%`, GitHub Actions **bloquea automáticamente el despliegue**.\n* **3. Observabilidad en Producción (Langfuse / Arize):** Monitoreamos en vivo latencia P95, costo por conversación y deriva semántica.",
            bridge: "Con todo este vocabulario y criterio arquitectónico listo, entrenemos cómo defender estas decisiones frente a un CTO o VP of Product en una entrevista real. Vamos a la Slide 14."
        },
        {
            num: 14,
            id: "slide-14",
            title: "Roleplay: Defensa Técnica en Entrevistas IT",
            duration: "4 Min",
            tags: ["Roleplay Ejecutivo", "RAG vs Fine-Tuning", "FinOps & Escalabilidad"],
            interaction: "Hacé clic en las dos tarjetas interactivas del Roleplay React para mostrar u ocultar los 3 pilares ganadores y el pitch ejecutivo de cada pregunta de entrevista.",
            script: "En una entrevista para IT Product Manager o AI Project Manager te van a hacer estas dos preguntas clásicas para medir tu senioridad técnica:\n\n* **Pregunta 1 (CTO) — ¿Por qué usar RAG y no Fine-Tuning para glosarios semanales?:** Respondés con tres pilares contundentes: 1) El *Fine-Tuning* enseña forma, tono o formato (JSON), pero congela los hechos y sigue alucinando; 2) Re-entrenar cada semana es lento, caro e inauditable; 3) *RAG + Base Vectorial* actualiza el conocimiento en segundos, filtra por metadatos y exige cita documental con umbral `>= 0.75`.\n* **Pregunta 2 (Head of Product) — ¿Cómo evitamos que el costo de API escale linealmente con los usuarios?:** Respondés con tu estrategia FinOps en tres capas: 1) **Prompt Caching** en el System Prompt para ahorrar 50%–75% en tokens de entrada; 2) **Caché Semántica + Cortocircuito (`< 0.75`)** para no invocar al LLM en preguntas repetidas o fuera de dominio; y 3) **Top-3 Chunks pre-filtrados** junto con *Rate Limits* por rol.",
            bridge: "Responder con esa claridad ejecutiva te posiciona inmediatamente por encima del promedio del mercado. Pasemos a la Slide 15 para sintetizar tu valor como PM y conectar con la Sesión 3."
        },
        {
            num: 15,
            id: "slide-15",
            title: "Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager",
            duration: "2 Min",
            tags: ["Súper-Poder PM", "Entregables S2", "Puente a Sesión 3 (Agentes ReAct)"],
            interaction: "Destacá el cuadro comparativo de las Sesiones 2, 3 y 4 y señalá los 3 botones de acceso directo en el banner inferior: Actividad Práctica S2, App Mock PRD y Glosario S2.",
            script: "¡Felicitaciones, Anabela! Mirá el salto gigantesco que diste hoy en la Sesión 2:\n\n* **Dominio Técnico-Comercial:** Ya sabés cómo funciona un Transformer por dentro, cómo calcular presupuestos de Tokens y Prompt Caching, cómo evitar el sesgo *Lost in the Middle*, y cómo diseñar un pipeline RAG completo con Embeddings, Metadata Filtering, Chunking con 15% de Overlap, umbral de 0.75, Enterprise SLA y Golden Datasets en CI/CD.\n* **Práctica Disponible en el Portal:** Tenés listos el **Simulador Práctico S2 (4 Misiones)**, la **App Interactiva del Mock PRD** y el **Glosario Completo S2** con tablas comparativas.",
            bridge: "🔗 Conexión con la Sesión 3: Hoy construimos el 'Cerebro consultivo' (IA Pasiva con RAG: lee manuales y responde con precisión, pero no ejecuta acciones). En la **Sesión 3** le vamos a dar 'Manos y Autonomía': vamos a diseñar **Sistemas Agénticos con arquitectura ReAct (Reason + Act)** que invocan herramientas externas por API (*Tool Calling*), validan estructuras con *Pydantic* y operan con compuertas *Human-in-the-Loop (HITL)*."
        }
    ]
};

module.exports = { SESSION_1_DATA, SESSION_2_DATA };
