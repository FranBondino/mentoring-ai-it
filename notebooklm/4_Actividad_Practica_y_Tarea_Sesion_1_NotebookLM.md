# Taller Práctico y Simulador Interactivo — Sesión 1: Anatomía de Sistemas IT, Cloud, Delivery & Agile

**Mentoría:** Inmersión IT, Agile & IA Aplicada
**Mentee:** Anabela Hotian
**Mentor:** Ing. Francisco Bondino
**Versión Interactiva Web:** `sesiones/actividad_practica_sesion_1.html`

---

## Propósito de este Taller Práctico
Este documento acompaña al **Simulador Interactivo Web de la Sesión 1** (`actividad_practica_sesion_1.html`). En lugar de responder preguntas teóricas de memoria, la propuesta es resolver **4 misiones prácticas basadas en escenarios cotidianos de equipos IT** (como si estuvieras radiografiando una app real, tomando decisiones en una reunión de seguimiento con programadores o traduciendo tu propia experiencia profesional al idioma tecnológico).

Podés realizar las actividades directamente en la página web interactiva y usar este documento en **Google NotebookLM** para pedirle que actúe como tu simulador de entrevistas o compañero de práctica.

---

## Misión 1: Inspector de Rayos X de una App (Arquitectura, APIs y Bases de Datos)

**Contexto:** Cuando tocás un botón en una aplicación (como Mercado Pago, PedidosYa o un sistema corporativo), por detrás viaja un pedido desde el **Frontend** hacia el **Backend** a través de una **API REST**, y el servidor consulta o guarda información en una **Base de Datos**.

Para cada uno de los siguientes **4 casos reales**, identificá:
1. **Qué verbo HTTP usa la API** (`GET`, `POST`, `PUT/PATCH` o `DELETE`).
2. **Qué código de estado HTTP devuelve** (`200 OK`, `400/401/403 Error de Cliente` o `500 Error de Servidor`) si todo sale bien vs. si ocurre una falla.
3. **Qué tipo de Base de Datos interviene principalmente** (`SQL Relacional`, `NoSQL Documental` o `Vector DB`).

### Caso 1.1: Abrir el Home Banking para consultar tu saldo y últimos movimientos
- **Acción del usuario:** Abrís la app y ves tus cuentas y movimientos en pantalla (solo lectura).
- **Resolución esperada (Rayos X IT):**
  - **Verbo HTTP:** `GET` (consulta datos sin modificar nada).
  - **Código HTTP normal:** `200 OK` (o `401 Unauthorized` si venció tu sesión y tenés que volver a loguearte).
  - **Base de Datos:** **SQL Relacional** (ej. PostgreSQL / SQL Server), porque los saldos y movimientos bancarios requieren consistencia estricta (ACID) y tablas estructuradas.

### Caso 1.2: Confirmar una transferencia o pagar un carrito de compras
- **Acción del usuario:** Tocás el botón *"Transferir \$25.000"* para crear una nueva transacción en el sistema.
- **Resolución esperada (Rayos X IT):**
  - **Verbo HTTP:** `POST` (crea un nuevo registro/transacción en el servidor).
  - **Código HTTP:** `200 OK / 201 Created` si se procesa con éxito; `400 Bad Request` si ingresaste un alias inválido o saldo insuficiente; `500 Internal Server Error` si se cayó el motor central del banco.
  - **Base de Datos:** **SQL Relacional** (transacción financiera que descuenta de una cuenta y acredita en otra sin perder un centavo).

### Caso 1.3: Cambiar tu dirección de entrega o teléfono en "Mi Perfil"
- **Acción del usuario:** Editás tu calle y número en un formulario que ya existía y tocás *"Guardar cambios"*.
- **Resolución esperada (Rayos X IT):**
  - **Verbo HTTP:** `PUT` o `PATCH` (actualiza datos de un registro existente).
  - **Código HTTP:** `200 OK`.
  - **Base de Datos:** **SQL Relacional** (tabla de usuarios) o **NoSQL Documental** (ej. MongoDB) si el perfil guarda preferencias flexibles de configuración.

### Caso 1.4: Hacerle una pregunta en lenguaje natural al asistente de IA de soporte
- **Acción del usuario:** Escribís en el chat de ayuda: *"¿Cómo pido el reintegro de un cobro duplicado?"* y el sistema busca en segundos los manuales internos más parecidos por significado.
- **Resolución esperada (Rayos X IT):**
  - **Verbo HTTP:** `POST` (envía tu consulta al servicio de IA para generar una respuesta).
  - **Código HTTP:** `200 OK`.
  - **Base de Datos:** **Base de Datos Vectorial (Vector DB)**, que convierte tu pregunta en vectores numéricos (*embeddings*) y busca fragmentos de manuales por **similitud semántica** (concepto clave para RAG en la Sesión 2).

---

## Misión 2: Decisiones en el Pipeline (Git, Ambientes y CI/CD)

**Contexto:** Estás participando en el seguimiento de un lanzamiento de software. En cada situación, elegí qué decisión tomarías junto al equipo técnico para cuidar la estabilidad del producto:

### Escenario 2.1: Dos desarrolladores quieren trabajar al mismo tiempo sin pisarse el código
- **Situación:** Un programador está armando el botón de "Exportar a Excel" y otra programadora está arreglando el filtro de fechas en la misma pantalla.
- **¿Cómo trabajan ordenados?**
  - **Práctica IT correcta:** Cada uno crea su propia **rama independiente (`feature branch`) en Git** a partir de la rama principal (`main`). Cuando terminan, abren un **Pull Request (PR)** para revisión de código (*Code Review*) antes de fusionarlo (*merge*).

### Escenario 2.2: Aparece un error en las pruebas antes del lanzamiento
- **Situación:** El equipo de negocio y QA está probando una versión nueva en **Staging / Pre-Producción (UAT)** y detecta que el cálculo de impuestos da error para clientes del interior.
- **¿Qué significa que haya pasado en Staging y qué se hace?**
  - **Práctica IT correcta:** ¡Buenas noticias! Como ocurrió en **Staging** (el ambiente espejo previo a Producción), **ningún cliente real fue afectado**. Se frena el pase a Producción, los desarrolladores corrigen el bug en una subrama, el pipeline de **CI/CD** vuelve a correr los tests automáticos y se valida nuevamente en Staging antes de salir en vivo.

### Escenario 2.3: El código ya tiene que subirse hoy, pero Comercial quiere activar la pantalla recién el lunes
- **Situación:** El equipo técnico quiere evitar subir todo de golpe el lunes a las 9 AM, pero Marketing pide que ningún cliente vea el botón nuevo hasta que salga la campaña.
- **¿Cómo separás el trabajo técnico del lanzamiento comercial?**
  - **Práctica IT correcta:** Aplicando **Deploy vs. Release con Feature Flags**. El equipo hace el **Deploy** (despliegue técnico del código a Producción) hoy mismo pero con la funcionalidad **apagada detrás de un Feature Flag**. El lunes a las 9 AM se enciende el interruptor (**Release** comercial) sin necesidad de tocar código ni reiniciar servidores, o incluso activándolo primero para el 5% de los usuarios (**Canary Release**).

### Escenario 2.4: Viernes 16:00 hs — Después de una subida a Producción, el login empieza a devolver "Error 500"
- **Situación:** Acaban de desplegar la versión `v2.4` y el monitoreo alerta que los usuarios no pueden entrar porque la API devuelve **500 Internal Server Error**.
- **¿Cuál es la prioridad número uno en ese minuto?**
  - **Práctica IT correcta:** Ejecutar un **Rollback inmediato** a la versión anterior estable (`v2.3`) desde el pipeline de CI/CD para **restaurar el servicio en minutos**. No se intenta adivinar ni programar el arreglo en vivo con el sistema caído. Una vez que el servicio volvió a funcionar, se analiza el problema en Staging y se realiza un **Post-Mortem sin culpa (Blameless)** para que no se repita.

---

## Misión 3: Consultorio Agile — Arquitectura Moderna, Scrum, Kanban y "Scrumban"

**Contexto:** Como vimos en la Sesión 1, el paso del **Monolito** (donde todo el sistema estaba atado en un solo bloque y se hacían entregas gigantes cada 6 meses en cascada) a los **Microservicios y APIs** permitió que las empresas organicen equipos más chicos y autónomos (**Squads**).

Analizá qué enfoque ágil recomendarías en cada caso:

### Caso 3.1: Equipo de Producto construyendo una nueva billetera digital
- **Necesidad:** Tienen una hoja de ruta trimestral, necesitan coordinar entregas visibles cada 2 semanas con los stakeholders y mostrar avances reales al final de cada ciclo.
- **Enfoque recomendado:** **Scrum (Trabajo por Sprints)**. Trabajan en ciclos fijos de 2 semanas (*Sprints*), eligen qué historias del *Product Backlog* entran en la *Sprint Planning*, se sincronizan 15 minutos por día en la *Daily*, muestran el software funcionando en la *Sprint Review* y mejoran su proceso en la *Retrospectiva*.

### Caso 3.2: Equipo de Soporte Técnico, Infraestructura Cloud o Guardia de Incidentes
- **Necesidad:** No pueden planificar qué se va a romper de acá a dos semanas. Reciben tickets urgentes, pedidos de accesos y alertas todos los días, y si intentan hacer todo a la vez se saturan.
- **Enfoque recomendado:** **Kanban (Flujo Continuo + Límite de WIP)**. No usan Sprints fijos; trabajan con un tablero visual (`Por hacer -> En curso -> En revisión -> Listo`) donde la regla de oro es **limitar el Trabajo en Curso (WIP Limit)** para destrabar cuellos de botella y medir el **Lead Time / Cycle Time** (cuánto tarda un ticket desde que entra hasta que se resuelve).

### Caso 3.3: ¿Qué pasa en la vida real cuando te preguntan en una entrevista por Scrum vs. Kanban?
- **Realidad de la industria:** Casi ninguna empresa aplica un método "de manual" al 100%. La mayoría adapta **modelos híbridos ("Scrumban")**: usan el tablero continuo y límites de WIP de Kanban, pero mantienen rituales de Scrum (como la *Daily*, una planificación quincenal y la *Retrospectiva*) para dar previsibilidad al negocio.

---

## Misión 4: Traductor de Perfil al Idioma IT & Agile

**Objetivo personal para traer conversado a la Sesión 2:**
Toda tu experiencia previa liderando equipos, ordenando prioridades, resolviendo urgencias con clientes y mejorando procesos **ya es experiencia de gestión aplicable a tecnología**; el secreto está en nombrarla con el vocabulario que usan los equipos de software.

1. **Practicá cómo contar 2 logros reales de tu carrera usando estos puentes de traducción:**
   - *"Recibir pedidos urgentes de distintos sectores y decidir qué se hace primero"* -> **Gestión y priorización de Backlog junto a Stakeholders**, definiendo **criterios de aceptación** y alcance (**MVP**).
   - *"Asegurar que el equipo no se trabe cuando hay mil temas abiertos al mismo tiempo"* -> **Gestión de flujo en tableros ágiles (Scrum / Kanban)**, controlando el **trabajo en curso (WIP)**, destrabando **bloqueos (Blockers)** y cuidando el **Cycle Time / SLA**.
   - *"Coordinar que un cambio grande salga bien y los usuarios lo puedan probar antes sin romper la operación"* -> **Coordinación de entregas extremo a extremo (End-to-End Delivery)** acompañando las pruebas de aceptación (**UAT en Staging**), control de **riesgos de Release** y seguimiento post-lanzamiento.
   - *"Cuando algo falló en la operación, apagar el incendio rápido y después armar un control para que no vuelva a pasar"* -> **Gestión de incidentes en Producción**, priorizando la rápida restauración del servicio y liderando análisis de causa raíz (**Post-Mortem / Mejora Continua**).

---

## Prompts Interactivos para practicar en NotebookLM

Copiá y pegá cualquiera de estos prompts en el chat de tu cuaderno de **NotebookLM** para practicar de forma interactiva:

1. **Simulador de Rayos X de una App:**
   > *"Actuá como un Arquitecto de Software amigable. Proponeme 3 acciones cotidianas que yo haría en una app (como Spotify, Uber o Mercado Libre) de a una por vez, y pedime que adivine qué pasa en el Frontend, qué verbo HTTP usa la API REST, qué código devolvería y qué tipo de base de datos usaría. Corregime de forma didáctica."*

2. **Juego de Rol: Reunión Daily con el equipo técnico:**
   > *"Simulemos una reunión Daily de 5 minutos. Vos sos dos desarrolladores y un QA de mi equipo comentándome en qué están trabajando (mencionando ramas de Git, un Pull Request pendiente, un error 403 en Staging y un Feature Flag). Después de hablar, preguntame qué decisiones o prioridades sugiero tomar."*

3. **Entrenador de Entrevistas IT (Traductor de Experiencia):**
   > *"Te voy a contar en mis propias palabras una situación laboral donde tuve que organizar un equipo o resolver un problema complejo. Ayudame a reescribir esa misma anécdota en dos versiones naturales y profesionales usando vocabulario IT y Agile (Backlog, Stakeholders, Sprints/Kanban, SLA, UAT, Mitigación de Riesgos) sin que suene forzado."*
