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
            tags: ["Sesión 2", "LLMs", "Arquitectura RAG"],
            interaction: "Presentá la portada destacando cómo hoy conectamos los cimientos de software de la Sesión 1 con la Inteligencia Artificial Generativa.",
            script: "¡Bienvenida a la Sesión 2, Anabela! En nuestro primer encuentro vimos cómo se construye el software moderno con APIs, servidores y bases de datos. Hoy nos vamos a meter en el corazón de la revolución actual: cómo nacieron y cómo funcionan por dentro los Grandes Modelos de Lenguaje (LLMs como GPT-4, Claude o Gemini) y cómo hacen las empresas para conectarlos con sus propios documentos, manuales y glosarios privados sin que el modelo invente respuestas. Además, como vos venís del mundo del lenguaje y la traducción, te va a encantar ver cómo la ingeniería transformó la lingüística en matemática.",
            bridge: "Para arrancar bien desde la raíz, veamos cuál fue el paper científico que disparó el advenimiento de todos los LLMs modernos y cómo funciona su motor probabilístico bajo el capó. Pasemos a la Slide 2."
        },
        {
            num: 2,
            id: "slide-2",
            title: "El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)",
            duration: "5 Min",
            tags: ["Attention Is All You Need", "Transformer (GPT)", "Next-Token Prediction", "RAG vs Fine-Tuning"],
            interaction: "Señalá primero el contraste superior (Mito vs. Realidad), luego hacé foco en la tarjeta naranja inferior del Paper 'Attention Is All You Need' (Google, 2017) y cerrá con la tarjeta violeta de Fine-Tuning vs. RAG.",
            script: "Para entender qué es un LLM de verdad, tenemos que ir al momento exacto en que nació todo este auge: junio de 2017. Un equipo de investigadores de Google publica el paper más famoso de la historia moderna de la IA: **'Attention Is All You Need'** (Vaswani et al.). Y mirá qué increíble: ese paper se escribió para resolver un problema de **traducción de idiomas**. Antes de 2017, los modelos traducían leyendo palabra por palabra de izquierda a derecha, y cuando llegaban al final de un párrafo largo ya se habían olvidado del principio. Este paper inventó la arquitectura **Transformer** (de ahí viene la sigla **GPT**: *Generative Pre-trained Transformer*) y su corazón: el mecanismo de **Self-Attention (Auto-Atención)**. ¿Qué hace el Self-Attention? En vez de leer en fila india, el modelo mira toda la página al mismo tiempo y calcula matemáticamente qué palabras están conectadas con cuáles (por ejemplo, si lee la palabra *'bank'*, presta atención al resto de la oración para saber si habla de un banco financiero o de la orilla de un río). Con ese motor Transformer, lo que hace el LLM es **Next-Token Prediction**: calcular estadísticamente cuál es la siguiente palabra o sílaba más probable. Por eso, cuando no tiene un dato privado de tu empresa, 'alucina' e inventa una respuesta que suena linda para completar el patrón. Y fijate en la tarjeta violeta de abajo a la derecha: para que no alucine con datos de tu empresa, no usamos **Fine-Tuning** (que solo sirve para enseñarle estilo o tono), sino que usamos **RAG**, conectándolo en vivo a tus documentos.",
            bridge: "Recién te dije que el Transformer no predice palabras enteras, sino 'pedacitos de palabras' y que así es como nos cobran las APIs. Pasemos a la Slide 3 para probar en vivo cómo lee y factura un LLM mediante los Tokens."
        },
        {
            num: 3,
            id: "slide-3",
            title: "Tokens: La Economía y Lingüística de la IA",
            duration: "4 Min",
            tags: ["Tokenización BPE", "Raíz Semántica", "Input vs Output Cost"],
            interaction: "Hacé clic en el botón interactivo 'Tokenizar Texto (BPE)' para que la frase 'La localización automática con IA optimiza glosarios técnicos globales.' se divida en 15 bloques de colores en vivo. También podés hacer clic en la imagen BPE inferior para ampliarla.",
            script: "Mirá el simulador a la derecha y hagamos clic en **'Tokenizar Texto (BPE)'**. ¿Ves cómo la frase de 9 palabras se acaba de partir en 15 bloquecitos de colores (`La`, ` locali`, `zación`, ` auto`, `mática`...)? Esos bloques son los **Tokens**. Los modelos usan un algoritmo llamado *Byte Pair Encoding (BPE)* que, en lugar de memorizar millones de palabras conjugadas por separado, separa la raíz conceptual (por ejemplo, `'localiz'`) de los sufijos gramaticales (`'-ación'`, `'-ador'`). Como regla rápida de PM: **1.000 tokens equivalen a unas 750 palabras en inglés** (y en español consumimos un 20% más de tokens por nuestras conjugaciones y tildes). ¿Por qué te importa esto como líder de proyecto? Porque las APIs de IA no cobran por mes: cobran por cada millón de tokens de entrada (**Input**) y de salida (**Output**), y generar tokens de salida cuesta de 3 a 4 veces más caro que leer tokens de entrada.",
            bridge: "Si los tokens son los ladrillitos que entran y salen del modelo, la siguiente pregunta lógica es: ¿cuántos tokens entran como máximo en una sola consulta antes de que el modelo se quede sin memoria? Vamos a la Slide 4."
        },
        {
            num: 4,
            id: "slide-4",
            title: "Ventanas de Contexto & El Sesgo 'Lost in the Middle'",
            duration: "4 Min",
            tags: ["Context Window", "Memoria de Corto Plazo", "Lost in the Middle"],
            interaction: "Hacé clic sobre el gráfico del mapa de calor (Heatmap en curva U) para mostrar cómo la atención del modelo es del 95%+ al inicio y al final, pero cae al ~40% en el medio.",
            script: "La **Ventana de Contexto** es la memoria RAM de corto plazo del modelo: es el tamaño físico del escritorio donde le apoyás tus instrucciones y documentos en cada llamada a la API. Hoy hay modelos donde entran 128.000 o hasta 1 millón de tokens (libros enteros). Entonces alguien en tu equipo te podría decir: *'¡Genial Anabela! Metamos los 50 manuales de producto y todas las memorias de traducción juntas adentro del prompt en cada pregunta'*. Mirá el gráfico de la derecha para ver por qué eso es una pésima idea. Los investigadores de Stanford descubrieron el fenómeno **'Lost in the Middle'** (Perdido en el Medio): igual que un humano leyendo un contrato a las 3 de la mañana, el LLM presta muchísima atención al primer párrafo del prompt y al último párrafo (zonas verdes), pero su retención se desploma en la mitad del documento (zona roja), además de que te saldría carísimo pagar todos esos tokens en cada pregunta.",
            bridge: "Entonces, si no podemos tirarle manuales enteros por la cabeza al modelo en cada pregunta, necesitamos un buscador inteligente que encuentre solo los 3 párrafos exactos que responden a la duda del usuario. ¿Cómo busca una IA por significado y no por palabra exacta? Pasemos a la Slide 5: Embeddings."
        },
        {
            num: 5,
            id: "slide-5",
            title: "Embeddings: Traduciendo Significado a Coordenadas",
            duration: "4 Min",
            tags: ["Embeddings", "Espacio Vectorial", "Similitud de Coseno"],
            interaction: "Pasá el mouse por los puntos del mapa vectorial interactivo ('Memoria de Traducción', 'Microservicios API') y hacé clic en el radar 3D para ampliarlo.",
            script: "Acá ocurre la verdadera magia matemática. Un buscador viejo (como apretar Ctrl+F en Word) busca letras exactas: si buscás *'glosario bilingüe'* y el manual dice *'terminología aprobada'*, el Ctrl+F te da cero resultados. ¿Cómo lo resuelve la IA? Con un modelo de **Embeddings**. Un Embedding toma cualquier frase o párrafo y lo convierte en una lista larga de números (un vector de 1536 coordenadas) que representa su **significado conceptual**. Mirá el mapa de la diapositiva: en ese espacio geométrico, todos los conceptos lingüísticos y de localización quedan guardados físicamente juntitos en el mismo barrio porque significan cosas parecidas, mientras que los conceptos de infraestructura cloud quedan agrupados en otro rincón, y una receta de cocina queda en otra galaxia. Midiendo el ángulo entre dos puntos (**Similitud de Coseno**), la computadora entiende sinónimos, contexto e intención aunque no compartan ni una sola palabra.",
            bridge: "Una vez que convertimos nuestros manuales y glosarios en estas coordenadas matemáticas llamadas Embeddings, ¿dónde los guardamos para poder consultarlos en milisegundos? Pasemos a la Slide 6."
        },
        {
            num: 6,
            id: "slide-6",
            title: "Bases Vectoriales & Metadata Filtering",
            duration: "4 Min",
            tags: ["Vector DB (Pinecone)", "Metadata Filtering", "Precisión de Búsqueda"],
            interaction: "Hacé clic en los botones de filtro interactivos ('Idioma: ES-LATAM', 'Año: 2026', 'Doc: Guía de Estilo') para ver cómo se apagan los puntos irrelevantes en el mapa vectorial.",
            script: "Esas coordenadas se guardan en la tercera base de datos que nombramos en la Sesión 1: la **Base de Datos Vectorial** (como Pinecone, Qdrant o Chroma). Ahora bien, imaginate que en tu empresa tenés cargadas las guías de estilo y manuales de 20 clientes distintos y de los últimos 5 años. Si hacés una búsqueda semántica pura, por ahí el buscador te trae un párrafo semánticamente idéntico a lo que preguntaste, ¡pero de un manual vencido de 2021 o de otro cliente! Hacé clic conmigo en los botones de abajo de la slide para ver cómo se soluciona: aplicamos **Metadata Filtering** (Filtrado por Metadatos). Antes de buscar por significado, le ponemos un filtro duro de etiquetas —como `Idioma = ES-LATAM`, `Año = 2026`, `Tipo = Guía de Estilo`—. Eso apaga instantáneamente el 90% de los documentos que no corresponden y busca similitud semántica únicamente adentro de los documentos vigentes.",
            bridge: "Pero antes de poder guardar un manual de 200 páginas adentro de esta base vectorial, tenemos un desafío práctico: no podemos convertir un libro entero en un solo punto del mapa. Tenemos que cortarlo en pedacitos. Vamos a la Slide 7 para ver cómo se hace eso con Chunking y Overlap."
        },
        {
            num: 7,
            id: "slide-7",
            title: "Chunking & Overlap: El Arte de Fragmentar Documentos",
            duration: "4 Min",
            tags: ["Chunking", "Recursive Split", "Overlap (10-20%)"],
            interaction: "Mové el slider interactivo de 'Overlap (%)' en la diapositiva para mostrar visualmente cómo los fragmentos contiguos comparten una franja de texto para no cortar ideas a la mitad.",
            script: "Cortar un documento largo en fragmentos más chicos (por ejemplo, de 400 o 500 tokens cada uno) se llama **Chunking**. El problema es que si cortás el texto a machetazos fijos cada 500 tokens, podés cortar una regla terminológica o una condición de negocio justo por la mitad: en el Fragmento 1 queda el título de la regla y en el Fragmento 2 queda la excepción, perdiendo todo el sentido. Por eso como PM siempre pedís dos cosas en tu especificación: primero, usar **Recursive Character Chunking** (que respeta párrafos y puntos seguidos antes de cortar); y segundo —mirá lo que pasa cuando movés el slider de la derecha—, configurar un **Overlap (Solapamiento) del 10% al 15%**. Igual que cuando ponés tejas en un techo superponiendo el borde de una con la siguiente para que no se filtre el agua, el Overlap repite las últimas dos oraciones del Fragmento A al principio del Fragmento B para que ninguna idea quede partida al medio.",
            bridge: "¡Listo! Ya tenés todas las piezas del rompecabezas: Tokens, Ventana de Contexto, Embeddings, Base Vectorial y Chunking con Overlap. Ahora veamos cómo se unen todas en la arquitectura más pedida del mundo corporativo: RAG. Pasemos a la Slide 8."
        },
        {
            num: 8,
            id: "slide-8",
            title: "Anatomía de RAG — Fase 1: Ingestión Offline",
            duration: "3 Min",
            tags: ["RAG (Retrieval-Augmented Generation)", "Pipeline Batch", "Indexación"],
            interaction: "Hacé clic en los 4 pasos interactivos del pipeline de Ingestión (1. Documentos Crudos -> 2. Chunking & Overlap -> 3. Modelo de Embeddings -> 4. Base Vectorial).",
            script: "**RAG** significa *Retrieval-Augmented Generation* (Generación Aumentada por Recuperación), y es literalmente tomarle un examen a la IA a **libro abierto**. Tiene dos fases. Acá en la Slide 8 vemos la **Fase 1 (Ingestión Offline)**, que ocurre tras bambalinas antes de que el usuario use el chat: 1) Tomamos los PDFs oficiales, guías de estilo y glosarios limpios; 2) Los pasamos por la cortadora de **Chunking con 15% de Overlap**; 3) Pasamos cada fragmento por el modelo de **Embeddings** para calcular sus coordenadas; y 4) Guardamos esos vectores con sus etiquetas de metadatos en la **Base Vectorial**. Esto deja nuestra biblioteca corporativa indexada y lista.",
            bridge: "Una vez que la biblioteca vectorial ya está armada en silencio, ¿qué pasa en vivo en los dos segundos que transcurren desde que un usuario escribe una pregunta en el chat hasta que el bot le responde? Pasemos a la Slide 9: Fase 2 de RAG."
        },
        {
            num: 9,
            id: "slide-9",
            title: "Anatomía de RAG — Fase 2: Consulta en Tiempo Real",
            duration: "4 Min",
            tags: ["Retrieval Online", "Inyección de Contexto", "Cero Alucinación"],
            interaction: "Hacé clic en los pasos del flujo en tiempo real y abrí el diagrama completo de arquitectura RAG en pantalla completa para repasar el circuito entero.",
            script: "Mirá la **Fase 2 (Consulta en Vivo)**: una lingüista o un PM entra al chatbot y pregunta: *'¿Cómo debemos traducir los términos del módulo de facturación para LatAm?'*. En menos de dos segundos pasa esto: Paso 1: El sistema convierte esa pregunta en un vector (Embedding) y va a buscar a la Base Vectorial los 3 fragmentos (chunks) de la guía de estilo que estén geométricamente más cerca. Paso 2: El backend arma en secreto un **Prompt Enriquecido** que dice: *'Sos el asistente oficial de la empresa. Respondé a la pregunta del usuario basándote EXCLUSIVAMENTE en estos 3 fragmentos oficiales que te adjunto acá abajo'*. Paso 3: Recién ahí se lo manda al LLM (GPT-4 o Claude). El LLM lee los 3 fragmentos servidos en bandeja en su ventana de contexto y redacta una respuesta perfecta citando la fuente exacta.",
            bridge: "Así es como se construye un chatbot empresarial serio. Ahora, ¿cómo documentás vos como PM los requerimientos de este chatbot para tu equipo de ingeniería? Pasemos a la Slide 10 para ver el Taller del Mock PRD."
        },
        {
            num: 10,
            id: "slide-10",
            title: "Taller Práctico: El Mock PRD de tu Chatbot RAG",
            duration: "4 Min",
            tags: ["PRD (Product Requirements Document)", "Definition of Done", "Alcance"],
            interaction: "Mostrá los bloques constitutivos del PRD en pantalla y recordale que en el portal principal tiene la app interactiva 'Generador de PRD' lista para usar.",
            script: "Cuando liderás un proyecto de IA, los ingenieros no esperan que vos programes en Python, pero sí esperan que les entregues un **PRD (Product Requirements Document)** claro. Mirá qué definís vos en este documento para nuestro *Enterprise Knowledge & Localization Bot*: 1) Qué fuentes de datos entran (manuales de producto, guías de estilo, memorias aprobadas) y cuáles quedan afuera; 2) La estrategia de ingesta recomendada (Chunking recursivo de 500 tokens con 15% de overlap y filtros por cliente/idioma); y 3) El **Definition of Done (DoD)**: qué condiciones de seguridad y precisión tiene que cumplir el bot para que vos apruebes su salida a producción.",
            bridge: "Y hablando de esas condiciones de seguridad innegociables para salir a producción, el primer miedo que te va a plantear cualquier director o cliente es: '¿Mis documentos confidenciales se van a filtrar a internet si usamos IA?'. Vamos a la Slide 11 para ver cómo se blinda eso."
        },
        {
            num: 11,
            id: "slide-11",
            title: "Gobernanza de IA, Privacidad & Prevención de Data Leakage",
            duration: "4 Min",
            tags: ["Data Leakage", "Enterprise SLA", "Zero-Data Retention"],
            interaction: "Contrastá la tarjeta roja izquierda (API Pública / Chat gratuito = Peligro de Fuga) contra la tarjeta verde derecha (API Corporativa bajo Enterprise SLA con Zero-Retention).",
            script: "Si un empleado copia y pega un contrato confidencial o un documento bajo NDA de un cliente en el ChatGPT gratuito web, esos datos pueden ser usados por el proveedor para entrenar futuros modelos públicos. Eso se llama **Data Leakage (Fuga de Datos)** y es un pecado mortal corporativo. ¿Cómo lo resolvemos profesionalmente cuando construimos nuestro propio chatbot? Exigiendo en el proyecto que nos conectemos mediante **APIs Corporativas bajo un Enterprise SLA** (como Azure OpenAI o AWS Bedrock) con cláusula de **Zero-Data Retention (Retención Cero)**. Eso garantiza por contrato y por arquitectura que los datos viajan encriptados, el proveedor borra la consulta de su memoria apenas devuelve la respuesta, ningún humano la revisa y jamás se usa un solo token de tu empresa para entrenar modelos públicos.",
            bridge: "Ya blindamos la privacidad legal de los datos. Ahora blindemos la veracidad: ¿qué pasa si un usuario le pregunta al chatbot algo que NO está en ningún manual de la empresa? ¿Cómo evitamos que el bot invente? Pasemos a la Slide 12."
        },
        {
            num: 12,
            id: "slide-12",
            title: "Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'",
            duration: "3 Min",
            tags: ["Confidence Threshold (0.75)", "Fallback Seguro", "No-Answer Logic"],
            interaction: "Mové el slider interactivo del 'Score de Similitud Semántica' por debajo y por encima de 0.75 para ver cómo el bot bloquea la respuesta o la autoriza.",
            script: "Probá mover este slider en la pantalla porque muestra exactamente cómo le ponemos un bozal a las alucinaciones. Cuando un usuario hace una pregunta y vamos a buscar a la Base Vectorial, cada fragmento encontrado viene con un puntaje de similitud del 0 al 1. Nosotros como PMs fijamos una regla dura llamada **Confidence Threshold (Umbral de Confianza)**, por ejemplo en **0.75**. Si alguien le pregunta al bot sobre un tema que no figura en los manuales, los fragmentos encontrados van a tener un puntaje bajísimo (por ejemplo, 0.42). En ese instante, antes de llamar al LLM, el sistema corta el flujo y dispara una respuesta segura (**No-Answer Fallback**): *'No dispongo de documentación oficial autorizada sobre ese punto'*. Preferimos mil veces un bot que diga 'no sé' a un bot que invente una regla falsa.",
            bridge: "Ahora bien: ya tenemos nuestro bot con RAG, con privacidad Enterprise SLA y con umbral de confianza en 0.75. ¿Cómo probamos científicamente que el bot responde bien antes de lanzarlo a toda la empresa? Pasemos a la Slide 13."
        },
        {
            num: 13,
            id: "slide-13",
            title: "Evaluación de Calidad: Golden Dataset & Evals en CI/CD",
            duration: "4 Min",
            tags: ["Golden Dataset", "Ground Truth", "Evals Automatizadas", "Langfuse"],
            interaction: "Señalá el flujo que une el Golden Dataset (50-100 preguntas de control) con el pipeline de CI/CD que vimos en la Sesión 1.",
            script: "En software tradicional corríamos tests automáticos de código. Pero como la IA redacta distinto cada vez, no alcanza con que vos te sientes cinco minutos a chatear dos preguntas al azar para decir 'anda bien'. En proyectos de IA armamos lo que se llama un **Golden Dataset**: una planilla curada por expertos del negocio (acá tu ojo de traductora y PM es irreemplazable) con 50 a 100 preguntas reales difíciles y cuál es la respuesta ideal esperada (**Ground Truth**). Cada vez que los desarrolladores tocan el prompt o cambian la configuración del chunking, el pipeline de **CI/CD** le dispara automáticamente esas 100 preguntas al bot y mide con métricas estadísticas (**Evals**) si las respuestas siguen siendo fieles al manual. Si la precisión baja del 90%, el despliegue se frena solo.",
            bridge: "Con todo este arsenal técnico sobre la mesa, pongámonos a prueba en un escenario real de reunión o entrevista con un director técnico. Vamos a la Slide 14."
        },
        {
            num: 14,
            id: "slide-14",
            title: "Roleplay: Defensa Técnica de Arquitectura RAG",
            duration: "4 Min",
            tags: ["Roleplay CTO", "RAG vs Fine-Tuning", "Argumentación Ejecutiva"],
            interaction: "Leé el planteo del Director de Ingeniería en pantalla y hacé clic en el botón para revelar los 3 pilares de la respuesta ganadora de Anabela.",
            script: "Imaginá que estás en una reunión o entrevista y el líder técnico te tira esta pregunta con trampa: *'Anabela, ¿por qué no hacemos Fine-Tuning para alimentar al modelo con nuestros glosarios y manuales de producto que cambian cada semana?'*. Con lo que aprendiste hoy, le respondés con una seguridad total en tres puntos: 1) **Naturaleza técnica**: el Fine-Tuning ajusta los pesos neuronales para cambiar el *estilo o tono*, no sirve como memoria de datos que cambian cada semana; 2) **Costo y mantenimiento**: re-entrenar un modelo cada viernes es carísimo y sigue sufriendo alucinaciones; y 3) **La solución correcta es RAG**: indexamos los glosarios en una Base Vectorial con Metadata Filtering, de modo que cuando un glosario se actualiza un martes, en dos segundos el bot ya responde con la versión nueva y citando la página exacta.",
            bridge: "Responder así te separa inmediatamente del 95% de los candidatos y gestores que tocan de oído. Pasemos a la Slide 15 para cerrar esta segunda sesión y conectar con el mundo de los Agentes."
        },
        {
            num: 15,
            id: "slide-15",
            title: "Cierre Sesión 2: Tu Valor como IT Product/Project Manager",
            duration: "2 Min",
            tags: ["Resumen S2", "App Mock PRD", "Puente a Sesión 3 (Agentes)"],
            interaction: "Repasá los 3 pilares consolidados hoy y señalá el acceso al Glosario S2 y a la App interactiva del Mock PRD.",
            script: "¡Brillante sesión, Anabela! Mirá todo lo que dominaste hoy: ya sabés cómo lee y factura un LLM por Tokens, qué es la Ventana de Contexto y por qué se pierde en el medio, cómo funcionan los Embeddings y las Bases Vectoriales, cómo cortar documentos con Chunking y Overlap, y cómo armar un chatbot RAG seguro y auditable con un Golden Dataset.",
            bridge: "🔗 Conexión con la Sesión 3: Hasta acá nuestro chatbot RAG es un 'erudito de biblioteca': lee manuales y responde preguntas con precisión total, pero tiene las manos atadas (es IA Pasiva). En la Sesión 3 le vamos a dar manos al chatbot: vamos a ver cómo construir **Agentes Autónomos (IA Activa)** que no solo responden dudas, sino que se conectan por API a Jira, al TMS o al ERP para ejecutar tareas, verificar capacidad de equipos y pedirte autorización por Slack."
        }
    ]
};

module.exports = { SESSION_1_DATA, SESSION_2_DATA };
