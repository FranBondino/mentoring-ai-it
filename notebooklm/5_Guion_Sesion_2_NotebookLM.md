# 🎙️ Sesión 2: Overview de LLMs, Embeddings y Arquitectura RAG

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Mantener toda la terminología técnica real de la industria (LLMs, Transformers, BPE, Prompt Caching, Lost in the Middle, Embeddings, Cosine Similarity, Metadata Filtering, Chunking, Overlap, RAG, Enterprise SLA, Golden Dataset), pero explicada con analogías cotidianas y del mundo de la traducción/gestión para que Anabela la entienda con total claridad y naturalidad.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 15 min** | Dentro del Cerebro del LLM | Slides 1 a 4 | Cómo funciona realmente un LLM (autocompletado probabilístico), Temperatura, Tokenización BPE en vivo, Prompt Caching y por qué los modelos se olvidan de la mitad del texto ('Lost in the Middle'). |
| **15 - 30 min** | Geometría del Lenguaje & Datos | Slides 5 a 7 | Cómo traducimos significado a coordenadas de GPS (Embeddings 1536d), Similitud por Coseno, Bases Vectoriales con filtros de etiquetas (Metadata Filtering) y corte inteligente de manuales (Chunking + Overlap). |
| **30 - 45 min** | Arquitectura RAG & Taller PRD | Slides 8 a 10 | El 'examen a libro abierto' en 2 etapas: Fase 1 (preparar la biblioteca en segundo plano) y Fase 2 (responder en vivo con citas), más armado del documento de requisitos (Mock PRD). |
| **45 - 60 min** | Gobernanza, Calidad & Roleplay | Slides 11 a 15 | Cómo cuidar los datos privados (Enterprise SLA & Zero-Retention), la barrera del 0.75 para que el bot sepa decir 'no sé', el examen automático de 100 preguntas (Golden Dataset) y práctica de entrevista. |

---

## Slide 1: Portada: IA Generativa & Arquitectura RAG
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Sesión 2 · LLMs · Arquitectura RAG · React Simulators

### 🗣️ Guion Literal (Qué decir)
> "¡Bienvenida a la Sesión 2, Anabela! En nuestro primer encuentro armamos la base de cómo se construye el software: vimos qué es el Frontend, el Backend, las APIs, Git y las bases de datos. Hoy vamos a dar un paso hermoso, porque nos metemos de lleno en tu terreno natural —el lenguaje—, pero visto desde la ingeniería de Inteligencia Artificial.

Hoy vas a escuchar muchos términos técnicos en inglés que se usan todos los días en las empresas de tecnología —como **LLM**, **Tokens BPE**, **Embeddings**, **Similitud por Coseno** o **Arquitectura RAG**—. Mi objetivo hoy es que te quedes con **todos los nombres técnicos reales** para que nadie te pueda hablar en difícil, pero bajando cada uno a tierra con ejemplos súper simples de la vida real y de tu mundo de traducción y gestión.

Mirá las 4 tarjetas de abajo, que son nuestras 4 paradas de hoy:
* **1. Límites Físicos (Slides 2 a 4):** Vamos a abrir la 'caja negra' de ChatGPT o Claude. Vas a ver por qué no piensan como humanos, qué es un **Token**, cómo ahorrar más de la mitad del presupuesto con **Prompt Caching** y por qué a la IA le agarra 'amnesia' en la mitad de los textos largos (*Lost in the Middle*).
* **2. Bloques de RAG (Slides 5 a 7):** Vamos a ver cómo la IA transforma el significado de una frase en coordenadas como si fuera un GPS (**Embeddings**), cómo guarda eso en una **Base Vectorial** con etiquetas (**Metadata Filtering**) y cómo cortamos manuales largos sin romper ideas a la mitad (**Chunking & Overlap**).
* **3. Taller Práctico (Slides 8 a 10):** Unimos todas las piezas para armar una **Arquitectura RAG** completa en 2 fases y la bajamos a un **PRD (Documento de Requisitos de Producto)** real.
* **4. Gobernanza y Entrevistas (Slides 11 a 15):** Cómo proteger los secretos de la empresa (**Enterprise SLA**), cómo obligar al bot a decir *'no sé'* antes de inventar (**Umbral 0.75**), cómo auditarlo con un examen automático (**Golden Dataset**) y cómo defender todo esto en una entrevista."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **IA Generativa (GenAI):** A diferencia de la IA clásica que solo clasificaba datos (ej. detectar spam), la IA Generativa crea contenido nuevo (texto, traducciones, código, resúmenes).
- **LLM (Large Language Model / Gran Modelo de Lenguaje):** Es el 'motor cerebral' detrás de ChatGPT, Claude o Gemini. Se llama 'Grande' porque fue entrenado leyendo casi todo internet para aprender cómo se conectan las palabras.
- **RAG (Retrieval-Augmented Generation):** En criollo: 'tomarle examen a la IA a libro abierto'. En vez de dejar que responda de memoria (donde puede inventar), primero buscamos el párrafo exacto en los manuales privados de nuestra empresa y se lo damos para que responda solo con esa evidencia.

### ⚡ Dinámica / Interacción en Pantalla
- Presentá la portada conectando lo visto en la Sesión 1 con el mundo de la IA. Mostrale a Anabela que las 4 tarjetas de abajo son el mapa de ruta de hoy y que puede hacer clic en cualquiera para saltar a ese módulo.

### 🔗 Puente de Conexión → Slide 2 (El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017))
> **"Para empezar desde el kilómetro cero, veamos de dónde salieron estos modelos de lenguaje y cómo funciona realmente su cerebro por dentro. Pasemos a la Slide 2."**

---

## Slide 2: El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Attention Is All You Need · Transformer (GPT) · Next-Token & Temperatura · RAG vs Fine-Tuning

### 🗣️ Guion Literal (Qué decir)
> "Arranquemos derribando el mito más grande del mercado. Mirá la tarjeta roja de la izquierda versus la verde de la derecha: cuando uno habla con ChatGPT y ve que redacta tan bien, parece un 'cerebro mágico' que razona como un humano y que se sabe todo. **La realidad técnica es otra**: un **LLM** es una calculadora gigante de probabilidades que hace una sola cosa: **Next-Token Prediction (Predicción del Siguiente Token)**.

* **¿Qué significa esto en criollo?:** Pensá en el texto predictivo de WhatsApp en tu celular: cuando escribís *'Buen'*, te sugiere *'día'* (80%), *'fin de semana'* (15%) o *'provecho'* (5%). Un LLM hace exactamente eso pero habiendo leído miles de millones de textos. ¿Y por qué ocurre entonces la famosa **Alucinación**? Porque si le preguntás una regla interna de tu empresa que no conoce, su instinto estadístico es seguir completando palabras que 'suenen coherentes'. Es como ese alumno que en un examen oral no estudió, pero tiene mucha labia y te chamuya con total seguridad.
* **Simulador en Vivo — Qué es la Temperatura:** Mirá el simulador React acá en el medio. La oración dice: *'Para traducir Checkout en LATAM debemos consultar el...'*. El modelo calcula los candidatos posibles. Si nosotros como PMs configuramos **`Temperatura = 0.0`** (hacé clic en el botón verde), apagamos la creatividad: el modelo está obligado a elegir siempre la opción con mayor puntaje estadístico (`glosario_aprobado` con 88%). En cambio, si subimos a **`Temperatura = 0.9`** (hacé clic al lado), achicamos la diferencia entre las opciones y dejamos que tire los dados: ahí puede elegir `invento_alucinado` (14%). **Regla de oro para vos como PM:** en asistentes de soporte, legales o traducción técnica, en tu documento técnico pedís siempre **Temperatura 0.0**.
* **Las dos joyas de abajo (Origen y Regla de Arquitectura):**
  1. **El Paper de 2017 (*'Attention Is All You Need'*):** Mirá qué lindo dato para tu perfil de traductora: toda esta revolución nació en 2017 porque Google quería mejorar la **traducción automática**. Antes las máquinas leían palabra por palabra y se olvidaban del principio de la frase. Ahí inventaron el **Transformer** (la **'T'** de **GPT**) y el **Self-Attention (Auto-Atención)**, que lee toda la oración de un vistazo y entiende cómo cada palabra cambia el sentido de las demás según el contexto.
  2. **Fine-Tuning vs. RAG:** Si un cliente te dice *'Re-entrenemos el modelo (Fine-Tuning) con nuestros manuales de cada semana'*, vos le explicás que no: el **Fine-Tuning** sirve para enseñarle un *tono de voz o formato*, pero es carísimo y congela la memoria. Para que lea manuales y glosarios que cambian todo el tiempo sin inventar, se usa **RAG**, que es conectarlo a una biblioteca viva."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Next-Token Prediction (Predicción del Siguiente Token):** Es el autocompletado predictivo del teclado de tu celular pero hiper-vitaminado. El modelo no 'sabe' ni 'razona': solo calcula matemáticamente qué palabra o sílaba tiene más probabilidad de seguir a la anterior.
- **Alucinación Factual (Hallucination):** Cuando la IA no tiene un dato privado pero, con tal de completar la oración de forma elocuente y sonar segura, te inventa un dato falso muy bien redactado.
- **Temperatura (0.0 vs 0.9):** Es la 'perilla de creatividad vs. rigor'. En 0.0 la IA elige siempre la palabra #1 más segura (cero inventos, ideal para empresas). En 0.9 la dejamos arriesgar con palabras menos probables (sirve para creatividad, pero alucina en datos técnicos).
- **Transformer & Self-Attention (Auto-Atención):** Nacieron en Google en 2017 para traducir idiomas. En vez de leer palabra por palabra olvidándose del principio, saca una 'foto panorámica' de toda la oración y entiende que la palabra 'banco' cambia de significado si al lado dice 'plaza' o 'hipoteca'.
- **Fine-Tuning vs. RAG:** Fine-Tuning es mandarlo a un 'curso de modales y estilo' (aprende a hablar formal o en código JSON, pero no sirve para datos que cambian cada semana). RAG es darle acceso en vivo a los manuales actualizados de la empresa.

### ⚡ Dinámica / Interacción en Pantalla
- Compará primero las tarjetas superiores (El Mito Roja vs. La Realidad Verde). Luego jugá en vivo con el Simulador React del medio haciendo clic en 'Temp = 0.0 (RAG / Precisión)' y 'Temp = 0.9 (Creativa / Riesgo)' para que vea cómo cambian las barritas de probabilidad. Cerrá con las dos tarjetas de abajo.

### 🔗 Puente de Conexión → Slide 3 (Tokens: La Economía y Lingüística de la IA)
> **"Recién viste que en el simulador hablamos de 'Tokens' en vez de palabras, y que así es como miden el texto las empresas de IA. Pasemos a la Slide 3 para ver en vivo cómo se corta una oración en Tokens y cómo se calcula el presupuesto."**

---

## Slide 3: Tokens: La Economía y Lingüística de la IA
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tokenización BPE · Asimetría Input/Output · Prompt Caching (-55%)

### 🗣️ Guion Literal (Qué decir)
> "Cuando contratás la luz en tu casa te cobran por Kilowatt; cuando una empresa contrata una API de Inteligencia Artificial, **le cobran por millón de Tokens**. Pero, ¿qué es exactamente un Token y por qué no cobran por palabra?

* **Simulador BPE en Vivo (Tarjeta Izquierda):** Mirá la frase en español: *'La localización automática con IA optimiza glosarios técnicos globales'*. Son **9 palabras**, pero cuando activamos el tokenizador **BPE (Byte Pair Encoding)**, se parte en **15 bloquecitos de colores**: `La`, ` locali`, `zación`, ` auto`, `mática`... Para vos que venís de traducción, esto te va a resultar súper familiar: es **morfología pura**. La máquina no guarda todas las palabras conjugadas del mundo; guarda raíces frecuentes (`locali`, `opti`, `glosa`) y terminaciones (`zación`, `miza`, `rios`).
* **Dos detalles económicos clave para una PM:**
  1. **El español gasta un poquito más de tokens que el inglés:** Por los acentos, los plurales más largos y las conjugaciones, 1.000 tokens rinden unas **750 palabras en inglés**, pero unas **650 palabras en español**.
  2. **Asimetría Input vs. Output:** Las APIs te cobran distinto lo que entra (**Input**) de lo que sale (**Output**). Que el modelo lea 10 páginas tuyas es barato; que el modelo redacte 10 páginas nuevas cuesta **de 3 a 5 veces más caro**. Por eso siempre le pedimos respuestas concisas.
* **Calculadora FinOps y Prompt Caching (Tarjeta Derecha):** Ahora mirá cómo le ahorrás miles de dólares a tu empresa con una sola decisión. Supongamos que en tu chatbot corporativo tenés 5.000 consultas por día, y en cada consulta le mandás al principio un manual de instrucciones fijo (el *System Prompt*) de 1.500 tokens. Si apagás el botón de **Prompt Caching** en el simulador, pagás esos 1.500 tokens una y otra vez ($225 USD/mes) y el usuario espera más de 1 segundo (`1150 ms`) para ver la primera letra (**TTFT**). Cuando activás **Prompt Caching**, obligás a los programadores a poner todo lo fijo al principio del prompt: el servidor lo deja 'congelado en memoria rápida', **la factura baja más de la mitad ($101 USD/mes)** y la respuesta arranca en apenas `380 ms`."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Token:** Es la unidad mínima que lee y cobra la IA. No es ni una letra ni una palabra entera: es un 'ladrillito o sílaba' de unas 3 o 4 letras. Regla práctica: 1.000 tokens son unas 750 palabras en inglés (o ~650 en español).
- **BPE (Byte Pair Encoding):** Es el método que usa la IA para partir palabras en tokens: separa raíces comunes ('locali-') de sufijos ('-zación'). Así con solo ~100.000 ladrillitos puede armar cualquier palabra de cualquier idioma.
- **Asimetría Input vs. Output:** Leer lo que vos le mandás (Input) es barato; pero generar la respuesta palabra por palabra (Output) le exige mucho más cálculo al servidor y cuesta entre 3 y 5 veces más caro.
- **Prompt Caching & TTFT (Time To First Token):** Prompt Caching es guardar en la 'memoria rápida' del servidor las instrucciones fijas que se repiten en cada consulta para que te cobren entre 50% y 75% menos. TTFT es cuántos milisegundos tarda en aparecer la primera palabra de la respuesta en pantalla.

### ⚡ Dinámica / Interacción en Pantalla
- En la tarjeta izquierda, hacé clic en las 3 frases de ejemplo ('Frase 1: Localización', 'Frase 2: Regla RAG', 'Frase 3: Output JSON') y en el botón 'Ver Texto Crudo / Tokenizar BPE'. En la tarjeta derecha, mové el deslizador de consultas por día y prendé/apagá el botón de 'Prompt Caching'.

### 🔗 Puente de Conexión → Slide 4 (Ventanas de Contexto & El Sesgo 'Lost in the Middle')
> **"Ya sabemos qué son los tokens y cómo se cobran. Ahora bien: ¿cuántos tokens le podemos mandar de golpe a la IA en una sola pregunta, y qué pasa si le mandamos un libro entero? Vamos a la Slide 4."**

---

## Slide 4: Ventanas de Contexto & El Sesgo 'Lost in the Middle'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Context Window · Curva en U · Lost in the Middle · Primacy & Recency

### 🗣️ Guion Literal (Qué decir)
> "Acá aparece una duda súper común en los equipos de producto. Antes, los primeros modelos de IA tenían una **Ventana de Contexto** (su memoria de corto plazo en una charla) muy chiquita, de unas 3.000 palabras. Hoy existen modelos donde caben **128.000 o hasta 1 millón de tokens** (¡varios libros enteros!). Entonces alguien del equipo te puede decir: *'Che, si ahora caben 10 manuales enteros en el prompt, ¿para qué vamos a armar una arquitectura RAG? ¡Peguemos los 10 manuales enteros en cada pregunta y listo!'*.

Mirá por qué como PM les vas a decir que **eso es una trampa peligrosa**, no solo porque pagarías millones de tokens en cada pregunta, sino por un problema neurológico de los modelos llamado **Lost in the Middle (Perdido en el Medio)**:

* **La Curva en 'U' de Atención (Simulador Derecho):** A los LLMs les pasa exactamente lo mismo que a una persona cuando va al supermercado sin anotador y le dictás una lista de 40 productos. ¿Cuáles se acuerda seguro? Los primeros 3 que le dijiste (**Primacy Bias / Sesgo de Primacía**, ~99% de retención) y los últimos 3 que escuchó antes de entrar (**Recency Bias / Sesgo de Recencia**, ~96%). ¿Y qué pasó con los productos 18, 19 y 20 del medio? **Se los olvidó por completo**.
* **Probémoslo en el Simulador:** Hacé clic en el botón rojo del **Centro Geométrico (Posición 50%)**. Si la regla que prohíbe un reembolso quedó enterrada en la página 25 de un prompt de 50 páginas, la atención del modelo cae al **38%** y te responde cualquier cosa.
* **Tu conclusión ejecutiva:** Como se ve en la analogía de la izquierda, que en tu escritorio físico entren 50 libros apilados no significa que tengas que leer los 50 para responder una duda. Con **RAG**, buscamos primero solo los **3 párrafos exactos** y se los ponemos bien al principio y al final del prompt, donde su atención es casi del 100%."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Ventana de Contexto (Context Window):** Es el tamaño del 'escritorio o memoria de corto plazo' que tiene el modelo en una consulta. Todo lo que le mandás más lo que te responde tiene que caber adentro de esa ventana.
- **Lost in the Middle (Perdido en el Medio):** Estudio de Stanford que demostró que cuando le metés muchísimo texto de golpe a un LLM, presta mucha atención al principio y al final, pero se olvida o ignora hasta el 60% de los datos que quedaron en la mitad.
- **Primacy Bias & Recency Bias:** Son los nombres psicológicos y estadísticos de ese efecto: Primacy Bias es recordar perfecto lo primero que leíste (~99%), y Recency Bias es recordar perfecto lo último que leíste (~96%).

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic en los 3 botones ('Inicio del Prompt 8%', 'Centro Geométrico 50%', 'Final del Prompt 94%') o mové la barrita para que vea cómo el indicador pasa de verde (95%-99% de atención) a rojo en el medio (38% de atención).

### 🔗 Puente de Conexión → Slide 5 (Embeddings: Traduciendo Significado a Coordenadas)
> **"Ahora la pregunta del millón es: ¿cómo hace el sistema para encontrar en milisegundos esos 3 párrafos exactos adentro de 50 manuales, incluso cuando el usuario usa palabras distintas a las del manual? Pasemos a la Slide 5: Embeddings."**

---

## Slide 5: Embeddings: Traduciendo Significado a Coordenadas
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Embeddings (1536d) · Espacio Vectorial · Similitud por Coseno

### 🗣️ Guion Literal (Qué decir)
> "Esta diapositiva es el corazón de cómo busca información la Inteligencia Artificial. Pensá qué pasa cuando usás el buscador clásico (`Ctrl + F`) en un PDF o en una base de datos vieja: busca **letras idénticas**. Si un usuario pregunta en el chat: *'¿Cómo valido la terminología antes de salir a otros países?'*, y tu manual dice: *'Protocolo de revisión de glosarios para localización global'*, ¡no comparten ni una sola palabra clave! Un buscador tradicional te da cero resultados.

¿Cómo logra la IA entender que esas dos frases **significan exactamente lo mismo**? Usando **Embeddings**:

* **El GPS de las Ideas (Pasos 01 y 02 arriba):** Imaginate que tuvieras un mapa gigante donde cada idea del mundo tiene una dirección de GPS (latitud y longitud). Cuando entra una frase, el **Modelo de Embeddings** analiza su sentido y la convierte en una lista de **1536 números** (su coordenada exacta en el mapa). ¿Por qué 1536 números? Porque cada número evalúa una característica del concepto: qué tan relacionado está con idiomas, qué tan técnico es, si habla de finanzas, si habla de software, etc.
* **Similitud por Coseno en Vivo (Paso 03 y Mapa Interactivo):** Una vez que cada párrafo tiene su coordenada en el mapa, medir si dos textos hablan de lo mismo es tan fácil como medir la distancia entre dos casas en Google Maps. A esa cuenta matemática la llamamos **Similitud por Coseno (Cosine Similarity)** y da una nota del **`0.00` al `1.00`**.
* **Probemos el mapa haciendo clic en los puntos:**
  * Hacé clic en los puntos azules de arriba a la izquierda: **'Glosario Técnico' (`0.96`)**, **'Localización Software' (`0.92`)** y **'Memoria de Traducción' (`0.89`)**. Fijate cómo quedaron todos juntitos en el mismo 'barrio lingüístico' porque conceptualmente son hermanos.
  * Ahora hacé clic en los puntos verdes de abajo a la derecha (**'Deploy en Cloud' `0.54`** o **'Pipeline CI/CD' `0.48`**): hablan de tecnología, pero de otro tema, así que quedan en otro barrio más lejos.
  * Y si hacés clic en el punto rojo del medio (**'Automóvil Deportivo'**), la similitud cae a **`0.12`**: no tiene nada que ver y el sistema lo descarta de inmediato."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Embedding (Vector Semántico):** Es traducir el 'significado' de una frase a una lista de números (como las coordenadas de latitud y longitud de un GPS). Así la computadora puede medir matemáticamente si dos textos hablan de lo mismo aunque no usen ninguna palabra igual.
- **Espacio Vectorial (1536 Dimensiones):** En un mapa común tenés 2 dimensiones (Norte-Sur y Este-Oeste). La IA usa un mapa de 1536 dimensiones donde cada número mide un matiz distinto del concepto (si es técnico, si habla de pagos, si es de traducción, etc.).
- **Similitud por Coseno (Cosine Similarity):** Es la 'regla' que mide qué tan cerca quedaron dos frases en ese mapa, dando un puntaje entre 0.00 (nada que ver) y 1.00 (significado idéntico).

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los puntitos de colores del mapa ('Glosario Técnico', 'Memoria de Traducción', 'Deploy en Cloud', 'Automóvil Deportivo') para que Anabela vea en el recuadro de abajo a la derecha cómo cambia el puntaje de Similitud por Coseno de 0.96 a 0.12.

### 🔗 Puente de Conexión → Slide 6 (Bases Vectoriales & Metadata Filtering)
> **"Ya convertimos todos los párrafos de nuestros manuales en coordenadas de este mapa. Ahora, ¿dónde se guardan millones de coordenadas y cómo evitamos que el buscador traiga un manual viejo de hace 5 años? Vamos a la Slide 6."**

---

## Slide 6: Bases Vectoriales & Metadata Filtering
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Vector DB (Pinecone / pgvector) · Metadata Pre-Filtering · Búsqueda Híbrida

### 🗣️ Guion Literal (Qué decir)
> "En la Sesión 1 vimos que las empresas tenían bases SQL (tablas tipo Excel) y NoSQL (documentos flexibles). Bueno, para guardar todos esos vectores de 1536 dimensiones que vimos recién, usamos el tercer tipo: las **Bases de Datos Vectoriales** (vas a escuchar nombres muy famosos como **Pinecone**, **Qdrant** o **pgvector**).

Pero acá quiero enseñarte un secreto de Product Manager que separa a un principiante de un experto. Mirá el cuadro comparativo de la izquierda (**Búsqueda Vectorial Pura vs. Híbrida con Metadata Filtering**):

* **El peligro de buscar solo por significado (Caja Roja):** Supongamos que un traductor o analista pregunta *'¿Qué términos están aprobados para la pantalla de pagos en Argentina?'*. Si la base busca **solamente por parecido semántico**, puede encontrar un párrafo que habla exactamente de pagos en Argentina con un puntaje altísimo (`0.86`), ¡pero que pertenece al **Manual Legacy de 2021 que ya está vencido**, o al manual en inglés de Estados Unidos!
* **La solución: Metadata Pre-Filtering (Simulador Derecho):** ¿Cómo lo resolvemos? Igual que cuando comprás en MercadoLibre o Amazon: antes de mirar productos, filtrás por talle y color. Esas etiquetas se llaman **Metadatos**. Mirá el simulador de la derecha: cuando activamos las etiquetas **`Idioma: ES-LATAM`**, **`Año: 2026 (Vigente)`** y **`Doc: Guía de Estilo`**, la base de datos primero apaga de un plumazo el manual viejo de 2021 y los documentos en inglés (descartando el 67% de basura), y recién ahí mide la Similitud por Coseno únicamente sobre los 2 documentos vigentes.
* **Por qué esto es 100% trabajo tuyo como PM:** Los programadores no saben cómo se organizan los documentos del negocio; **sos vos como PM quien define en el PRD qué etiquetas (metadatos) debe tener cada archivo** (`idioma`, `año_vigencia`, `cliente`, `módulo`)."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Base de Datos Vectorial (Vector DB: Pinecone, Qdrant, pgvector):** Es la 'biblioteca especializada' donde se guardan los Embeddings (las coordenadas numéricas de los textos) para poder buscar por cercanía de significado en milisegundos.
- **Metadatos (Metadata Schema):** Son las 'etiquetas de clasificación' explícitas que le pegamos a cada documento al guardarlo: Idioma = ES-LATAM, Año = 2026, Tipo = Guía de Estilo, Sector = Pagos.
- **Metadata Pre-Filtering (Pre-filtrado por Metadatos):** Es aplicar primero un filtro duro por etiquetas (ej. 'quedate solo con manuales en Español del año 2026') ANTES de buscar por significado, para no recuperar documentos vencidos o de otro país.

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, prendé y apagá las tres etiquetas ('Idioma: ES-LATAM', 'Año: 2026', 'Doc: Guía de Estilo') para mostrarle cómo se tachan/apagan en tiempo real el 'Manual Legacy 2021' y el 'US Checkout Styleguide (English)'.

### 🔗 Puente de Conexión → Slide 7 (Chunking & Overlap: El Arte de Fragmentar Documentos)
> **"Ya sabemos dónde vamos a guardar nuestros documentos y con qué etiquetas. Pero antes de meter un manual PDF de 300 páginas adentro de la base vectorial, tenemos que cortarlo en pedacitos. Veamos en la Slide 7 cómo cortarlo sin romperle el sentido."**

---

## Slide 7: Chunking & Overlap: El Arte de Fragmentar Documentos
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Recursive Character Chunking · Chunk Overlap (15%) · Puente Semántico

### 🗣️ Guion Literal (Qué decir)
> "Imaginate que tenés una Guía de Estilo o un Manual Operativo de 300 páginas. Si intentáramos convertir las 300 páginas enteras en un solo vector (un solo punto en el mapa), sería una ensalada de mil temas mezclados y no serviría para buscar nada específico. Por eso, el primer paso técnico es cortar ese documento largo en bloques chiquitos de unas 200 palabras (~1.000 caracteres). En ingeniería de IA, a cada uno de esos bloquecitos se le dice **Chunk**, y al proceso de cortarlos se le llama **Chunking**.

Acá hay dos términos técnicos que te van a hacer brillar cuando los nombres:

* **1. Recursive Character Chunking (Corte Inteligente por Párrafos):** Si vos le decís a la computadora *'cortame el texto cada 1.000 letras exactas'*, te va a meter la tijera en la mitad de una oración. Por eso pedimos **Recursive Character Chunking**: el sistema busca cortar primero por títulos, si el párrafo sigue siendo largo corta por punto y aparte, y si no, por punto y seguido, respetando siempre la gramática.
* **2. Chunk Overlap (Solapamiento — Simulador en Vivo a la Derecha):** Pero incluso cortando en un punto y seguido, mirá lo que pasa si el Fragmento A dice: *'Se prohíbe publicar la versión si hay errores críticos'* y el Fragmento B que sigue dice: *'En ese caso, se debe bloquear el lanzamiento hasta que QA apruebe'*. Mirá en el simulador cuando ponemos **`0% Overlap`**: si el buscador recupera solo el Fragmento B, dice *'En ese caso se bloquea el lanzamiento'*, ¡pero **perdió el sujeto de la regla** y no sabe en qué caso!
* **Ahora hacé clic en `15% Overlap` en el simulador:** Mirá cómo se ilumina esa frase puente en ambos fragmentos. ¿Qué hizo el sistema? Tomó el último 15% del Fragmento A y lo volvió a copiar al principio del Fragmento B. Es exactamente igual que cuando fotocopiás un plano grande en dos hojas A4: dejás un bordecito repetido en las dos hojas para poder unir la historia sin que nada se pierda en el corte. El estándar ideal de la industria que siempre vas a pedir en tus PRDs es **10% a 15% de Overlap**."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Chunking (Fragmentación Documental):** Es cortar un documento largo (ej. un PDF de 200 páginas) en 'fichas' o bloques pequeños de texto (llamados Chunks, de unas 200 palabras o 1.000 caracteres) antes de convertirlos en vectores.
- **Recursive Character Chunking:** En vez de cortar cada 1.000 letras a ciegas partiendo oraciones por la mitad, corta de forma inteligente respetando primero títulos, luego párrafos y luego puntos seguidos.
- **Chunk Overlap (Solapamiento del 10% al 20%):** Es repetir el final del Fragmento A al comienzo del Fragmento B (como cuando sacás una foto panorámica solapando un borde con el otro) para que ninguna idea o regla quede cortada al medio.

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic primero en el botón '0%' para que vea el cartel rojo '[CORTE ABRUPTO SIN PUENTE]' y '[FALTA SUJETO DE LA REGLA]', y después hacé clic en '15%' para que vea cómo aparece resaltado en naranja el texto compartido entre el Fragmento A y el Fragmento B.

### 🔗 Puente de Conexión → Slide 8 (Anatomía de RAG — Fase 1: Ingestión Offline (Batch))
> **"¡Impecable! Ya tenés todas las piezas del rompecabezas: Tokens, Ventana de Contexto, Embeddings, Base Vectorial con Metadatos y Chunking con Overlap. Ahora veamos cómo se arma la máquina completa de RAG en dos fases. Vamos a la Slide 8."**

---

## Slide 8: Anatomía de RAG — Fase 1: Ingestión Offline (Batch)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** RAG Fase 1 · Pipeline Batch Offline · Ground Truth

### 🗣️ Guion Literal (Qué decir)
> "Llegamos al corazón de la sesión: cómo explicarle a cualquier persona o líder técnico cómo funciona una **Arquitectura RAG** de punta a punta. Para que sea súper fácil de visualizar, dividimos RAG en **dos momentos separados** (Fase 1 en esta diapositiva y Fase 2 en la siguiente). Pensalo como un restaurante: la **Fase 1 es preparar y ordenar la despensa antes de abrir**, y la **Fase 2 es cocinar el plato en el momento en que entra el cliente**.

Acá en la Slide 8 estamos en la **Fase 1: Ingestión del Dato (Batch Offline)**. Decimos *Offline* o *Batch* porque esto ocurre en segundo plano (por ejemplo, cada vez que vos o alguien del equipo sube un glosario nuevo o actualiza un PDF), sin que haya ningún usuario chateando. Hacé clic en **'▶ Simular Pipeline Batch'** y sigamos los 4 pasos que ya conocés:

* **Paso 1 — Documentos (Ground Truth):** Recolectamos y limpiamos los archivos oficiales de la empresa (PDFs, Word, Confluence, memorias de traducción). En la jerga de IA a estos documentos oficiales les decimos el **Ground Truth (la Verdad de Base)**.
* **Paso 2 — Chunking:** Agarramos esos manuales largos y los cortamos en fichas prolijas de ~1.000 caracteres con un **15% de Overlap (solapamiento)** para no romper ninguna regla por la mitad.
* **Paso 3 — Embedding:** Pasamos cada ficha por el modelo de Embeddings para calcular su coordenada de GPS de **1536 dimensiones** según su significado.
* **Paso 4 — Vector DB:** Guardamos cada coordenada junto con su texto y sus etiquetas (**Metadatos**: idioma, año, módulo) adentro de nuestra Base de Datos Vectorial (como Pinecone). ¡Listo! La biblioteca inteligente ya quedó armada y ordenada."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fase 1: Ingestión Offline (Batch Pipeline):** Es 'preparar la cocina antes de abrir el restaurante'. Corre en segundo plano cuando subimos o actualizamos manuales, sin que haya ningún usuario esperando en el chat.
- **Ground Truth (Fuente Única de Verdad):** Son los documentos oficiales validados por humanos (manuales vigentes, glosarios aprobados, políticas legales) que tomamos como verdad absoluta para alimentar al bot.
- **Upsert en Vector DB:** Término que combina 'Update' (actualizar) + 'Insert' (insertar): guarda los vectores nuevos y pisa los viejos para que la biblioteca esté siempre al día.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en el botón '▶ Simular Pipeline Batch' arriba a la derecha (o hacé clic paso por paso en los 4 círculos: 1. Documentos -> 2. Chunking -> 3. Embedding -> 4. Vector DB) para que vea cómo avanza la luz por la tubería y cambia el texto explicativo abajo.

### 🔗 Puente de Conexión → Slide 9 (Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live))
> **"Ahora que la biblioteca ya está lista y ordenada en nuestra Base Vectorial, abrimos las puertas del restaurante: un usuario entra al chat y hace una pregunta. Pasemos a la Slide 9 para ver qué pasa en vivo en esos 2 segundos."**

---

## Slide 9: Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** RAG Fase 2 · Top-K Retrieval · Prompt Aumentado · Cita Verificable

### 🗣️ Guion Literal (Qué decir)
> "Ahora estamos en la **Fase 2: Consulta de Usuario en Tiempo Real**. Una persona del equipo abre el chatbot y escribe: *'¿Qué criterios de estilo y terminología se aplican al módulo de pagos para usuarios de Latinoamérica?'*. Mirá todo lo que hace el sistema por atrás en menos de 2 segundos (hacé clic en **'▶ Simular Consulta Live'**):

* **Paso 1 — Pregunta y Vectorización (~35 milisegundos):** El sistema agarra la pregunta del usuario y la pasa por el mismo GPS matemático (**Embedding**) para obtener sus 1536 coordenadas. ¿Por qué? Porque para buscar en el mapa de la base vectorial necesitamos saber en qué coordenada cayó la pregunta.
* **Paso 2 — Recuperación con Filtro y Top-K:** El sistema va a la Base Vectorial, filtra primero por las etiquetas vigentes (`idioma = ES-LATAM` y `año = 2026`) y busca por **Similitud de Coseno** los **3 párrafos más cercanos** a la pregunta. A traer los 3 mejores resultados se le llama técnicamente **Top-K Retrieval (`Top-K = 3`)**.
* **Paso 3 — El Prompt Aumentado (El Examen a Libro Abierto):** ¡Acá ocurre la magia de RAG! El usuario cree que habló directo con el LLM, pero en realidad nuestro servidor armó en secreto un **Prompt Aumentado**: le pegó arriba la regla estricta (*'Respondé ÚNICAMENTE usando estos 3 fragmentos oficiales. No inventes nada'*), le pegó los 3 párrafos recuperados del manual y recién abajo puso la pregunta del usuario.
* **Paso 4 — LLM con Temperatura 0.0 y Cita Verificable:** El LLM lee esos 3 párrafos (como un alumno con el libro abierto en la página exacta), redacta la respuesta en lenguaje natural claro y te agrega abajo la cita: *'Fuente: Guía de Estilo Pagos LATAM 2026, pág. 14'*. Cero alucinación y 100% auditable."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fase 2: Consulta en Tiempo Real (Online Inference):** Es lo que ocurre en menos de 2 segundos desde que el usuario aprieta 'Enviar' en el chat hasta que recibe la respuesta con su cita.
- **Top-K Retrieval (ej. Top-K = 3):** Es pedirle a la base vectorial que nos devuelva únicamente los 'K' fragmentos más parecidos a la pregunta (por lo general los mejores 3 o 5 fragmentos).
- **Prompt Aumentado (Context Injection):** Es el truco central de RAG: antes de mandarle la pregunta del usuario al LLM, el sistema le 'inyecta' en secreto los 3 párrafos oficiales encontrados y le ordena responder solo con esa información.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en '▶ Simular Consulta Live' para recorrer los 4 pasos animados, y después hacé clic en el botón violeta '🔍 Ver Diagrama Completo RAG' para mostrarle la ilustración completa que une Fase 1 y Fase 2.

### 🔗 Puente de Conexión → Slide 10 (Taller Práctico: El Mock PRD de tu Chatbot RAG)
> **"Entender estas dos fases te da una ventaja enorme. Ahora veamos cómo bajás todo esto a un documento real de trabajo cuando liderás un proyecto: pasemos a la Slide 10 para ver el Mock PRD."**

---

## Slide 10: Taller Práctico: El Mock PRD de tu Chatbot RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Mock PRD · Definition of Done (DoD) · Criterios de Aceptación IA

### 🗣️ Guion Literal (Qué decir)
> "Acá bajamos toda la teoría al rol diario de una **Product Manager o Project Manager en IT**. Cuando vos liderás la creación de una herramienta con IA, a vos no te van a pedir que programes el código, pero sí te van a pedir tu entregable más importante: el **PRD (Product Requirements Document)** y su **Definition of Done (DoD)**.

Imaginate la diferencia entre dos PMs:
* **Un PM sin base técnica escribe en su PRD:** *'Hacer un chatbot con IA que responda preguntas de los manuales de la empresa y ande bien'*. Los programadores adivinan todo, el bot mezcla manuales viejos con nuevos y alucina.
* **Ahora mirá lo que escribís vos en tu PRD después de esta clase (Tarjetas Izquierda y Derecha):**
  1. **En Fuentes y Datos (Izquierda):** Definís cuál es el **Ground Truth** (manuales de producto, guías de estilo y glosarios `.md/.pdf`), exigís que toda respuesta tenga **cita clicable obligatoria** y definís el **Esquema de Metadatos** (`idioma`, `año_vigencia`, `modulo`, `tipo_doc`).
  2. **En el Definition of Done de IA (Derecha):** Ponés reglas medibles para aprobar el proyecto: **Chunking** de `1000 caracteres con 15% de overlap`, **Base Vectorial** con nota mínima de similitud de **`Score >= 0.75`**, contrato de privacidad **Zero-Retention SLA** y que apruebe el examen de calidad con **`>= 90%`**. Cuando un Tech Lead lee un PRD así, te respeta de inmediato porque le diste el plano arquitectónico exacto.

Abajo tenés el botón para abrir la **App Interactiva del Mock PRD**, donde podés completar estos campos paso a paso y descargarte el documento final listo para tu portfolio."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **PRD (Product Requirements Document):** Es el documento madre que escribe el Product Manager para definir qué producto se va a construir, para quién, con qué datos y bajo qué reglas.
- **Definition of Done (DoD / Definición de Terminado):** Es el contrato de calidad con los programadores y QA: la lista de requisitos técnicos y métricas que deben cumplirse sí o sí para dar por aprobada la funcionalidad.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las dos tarjetas (Especificación Funcional a la izquierda y Definition of Done de IA a la derecha) y mostrale los dos botones de abajo ('🛠️ Abrir App Mock PRD S2' y '⚡ Abrir Simulador Práctico S2').

### 🔗 Puente de Conexión → Slide 11 (Gobernanza de IA, Privacidad & Prevención de Data Leakage)
> **"En esa tarjeta de la derecha pusimos tres requisitos clave de seguridad y calidad: Zero-Retention SLA, Score >= 0.75 y Evals >= 90%. Veamos cada uno en detalle en las próximas tres slides. Vamos a la Slide 11."**

---

## Slide 11: Gobernanza de IA, Privacidad & Prevención de Data Leakage
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Data Leakage · Enterprise SLA · Zero-Data Retention · PII Masking

### 🗣️ Guion Literal (Qué decir)
> "Hablemos de **Gobernanza y Privacidad**, que es lo primero que te va a preguntar cualquier director, cliente corporativo o área de Legales antes de aprobar un proyecto de IA.

* **El Peligro Real — Data Leakage (Tarjeta Roja):** ¿Por qué muchas empresas prohibieron al principio usar ChatGPT? Porque cuando usás la versión gratuita o común de navegador, en los términos y condiciones dice que **todo lo que escribas ahí puede ser leído por entrenadores humanos y usado para alimentar las próximas versiones públicas del modelo**. Si alguien pega ahí un contrato bajo **NDA (Acuerdo de Confidencialidad)** o un glosario de un lanzamiento secreto, estás cometiendo una **Fuga de Datos (Data Leakage)** e incumpliendo normas internacionales como **GDPR** o **ISO 27001**.
* **La Solución Corporativa — API bajo Enterprise SLA con Zero-Data Retention (Tarjeta Verde):** ¿Cómo se hace bien en las empresas? Nunca se usa el chat público; se conecta el sistema por atrás mediante una **API Corporativa** (por ejemplo, Azure OpenAI, AWS Bedrock o Anthropic Enterprise) bajo un contrato llamado **Enterprise SLA con Zero-Data Retention (Retención Cero)**.
* **¿Qué significa Retención Cero en criollo?:** Hacé clic en el botón verde del simulador de abajo. Significa que por contrato legal y bloqueo técnico, el proveedor recibe tu consulta cifrada, te genera la respuesta en milisegundos y **destruye el texto de su memoria inmediatamente**. Nadie lo lee y ningún modelo aprende de tus datos. Y como doble cinturón de seguridad, aplicamos **PII Masking**: antes de que la consulta salga de nuestra empresa, un filtro oculta nombres reales, DNI o teléfonos."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Data Leakage (Fuga de Datos / Propiedad Intelectual):** Es el riesgo de que información privada de la empresa o de un cliente termine filtrada afuera por pegarla en herramientas de IA gratuitas o públicas.
- **Enterprise SLA & Zero-Data Retention (Retención Cero):** Es el contrato corporativo que firmás con OpenAI, Anthropic, Microsoft o AWS donde se comprometen legal y técnicamente a procesar tus textos en memoria temporal y borrarlos en el acto, sin usarlos jamás para entrenar sus modelos públicos.
- **PII Masking (Enmascaramiento de Datos Personales):** PII significa 'Información Personal Identificable' (nombres, DNI, emails, tarjetas). El Masking es un filtro automático que tapa o reemplaza esos datos por etiquetas genéricas ('[NOMBRE_OCULTO]') antes de enviar el texto a la IA.

### ⚡ Dinámica / Interacción en Pantalla
- Compará la tarjeta roja (peligro de cuentas gratuitas/públicas) con la tarjeta verde (estándar corporativo Enterprise SLA). Abajo, hacé clic en los dos botones del simulador ('🚨 Enviar por Chat Gratuito' vs. '🛡️ Enviar por API Enterprise SLA').

### 🔗 Puente de Conexión → Slide 12 (Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer')
> **"Ya protegimos los datos legales de la empresa. Ahora protejamos al usuario de las mentiras de la IA: ¿cómo hacemos técnicamente para que el bot sepa callarse y decir 'no sé' cuando le preguntan algo que no está en los manuales? Vamos a la Slide 12."**

---

## Slide 12: Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Confidence Threshold (0.75) · Guardrail Determinista · Fallback No-Answer

### 🗣️ Guion Literal (Qué decir)
> "Mirá qué importante es esta diapositiva. Dijimos que el LLM por naturaleza es 'complaciente': siempre quiere darte una respuesta. Entonces, ¿qué pasa si a nuestro bot de manuales de localización alguien le pregunta: *'¿Cuál es el sueldo confidencial del Director de Finanzas?'* o *'¿Cómo arreglo la cafetera de la oficina?'*?

Si no pusiéramos un freno, la Base Vectorial buscaría los 3 párrafos 'menos lejanos' (aunque tengan una nota pobrísima de parecido, como `0.34`) y se los mandaría al LLM tratando de forzar una respuesta. Para evitar eso, como PMs definimos una barrera llamada **Confidence Threshold (Umbral de Confianza Semántica)**, que suele fijarse en **`0.75`** (en una escala de 0 a 1):

* **Probémoslo en el Simulador de la Derecha:**
  * **Hacé clic en el Caso 1 (`Score 0.91`):** La pregunta es *'¿Cómo se traduce Chargeback en Pagos LATAM?'*. La base vectorial encuentra el glosario oficial con una similitud de `0.91`. Como `0.91` es mayor a `0.75`, el semáforo se pone en **VERDE (AUTORIZADO)** y pasa al LLM para que responda citando la página 8.
  * **Ahora hacé clic en el Caso 3 (`Score 0.34`):** La pregunta es *'¿Cuál es el salario del Director de Finanzas?'*. Cuando la base vectorial busca en los manuales técnicos, lo más parecido que encuentra da un puntaje de apenas `0.34`. Como es **menor a `0.75`**, el semáforo se pone en **ROJO (BLOQUEADO)**.
* **¿Y qué hace el sistema cuando bloquea?:** Hace un **cortocircuito**: ni siquiera despierta al LLM (así que gastás $0 en tokens de generación) y muestra automáticamente un **No-Answer Fallback** (el mensajito seguro de la izquierda): *'No dispongo de información oficial verificada sobre ese punto en la base documental vigente'*. Es la forma más limpia y segura de eliminar alucinaciones."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Confidence Threshold (Umbral de Confianza Semántica, ej. 0.75):** Es la 'nota mínima de aprobación' que le exigimos al buscador vectorial. Si el fragmento más parecido del manual tiene una nota menor a 0.75, asumimos que el manual no habla de ese tema.
- **Cortocircuito en Backend (Deterministic Guardrail):** Si la nota no llega a 0.75, el servidor frena ahí mismo y ni siquiera le manda la pregunta al LLM. Así es 100% imposible que alucine y además ahorramos plata en tokens.
- **No-Answer Fallback (Respuesta de Abstención Segura):** Es el mensaje educado y predefinido que devuelve el sistema cuando se activa el freno (ej. 'No tengo información oficial verificada sobre ese punto, ¿querés que lo derive al equipo?').

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic en el 'Caso 1 (Score 0.91)', luego en el 'Caso 2 (Score 0.78)' y finalmente en el 'Caso 3 (Score 0.34: salario del Director)'. También mové el deslizador manual para que vea cómo en 0.75 exacto cambia de AUTORIZADO (verde) a BLOQUEADO (rojo).

### 🔗 Puente de Conexión → Slide 13 (Evaluación de Calidad: Golden Dataset & Evals en CI/CD)
> **"Ya tenemos el bot construido y con su barrera anti-alucinación en 0.75. Pero antes de sacarlo a producción, ¿cómo le tomamos examen para estar 100% seguros de que responde bien en todos los casos? Pasemos a la Slide 13."**

---

## Slide 13: Evaluación de Calidad: Golden Dataset & Evals en CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Golden Dataset · Evals en CI/CD · Context Adherence >= 90% · Langfuse

### 🗣️ Guion Literal (Qué decir)
> "Conectemos esto con lo que aprendiste en la **Sesión 1 sobre QA y el Pipeline de CI/CD**. En el software tradicional es fácil hacer un test automático: probás si `2 + 2` da `4`. Pero en Inteligencia Artificial las respuestas son texto redactado, y pasa algo muy loco: a veces un programador toca una línea de las instrucciones para que el bot sea más amable, ¡y sin darse cuenta arruina cómo el bot respondía las preguntas técnicas! Y obviamente nadie puede sentarse a probar 100 preguntas a mano todos los días.

¿Cómo auditan la calidad los equipos profesionales de IA? Con los **3 pilares** que ves en las tarjetas de arriba:

* **1. El Golden Dataset (El Examen Oficial):** Antes de lanzar, vos como PM te sentás con los expertos del tema (por ejemplo, las líderes de traducción o de producto) y arman una lista de **50 a 100 preguntas reales bien variadas** (fáciles, difíciles y preguntas trampa que no están en el manual) junto con **la respuesta correcta esperada**. Esa planilla certificada por humanos se llama el **Golden Dataset (Dataset de Oro)**.
* **2. Evals Automatizadas en CI/CD (Simulador de Abajo):** Cada vez que un desarrollador intenta subir un cambio al código (un *Pull Request*), el pipeline le toma automáticamente esas 100 preguntas al bot y compara sus respuestas contra tu *Golden Dataset*.
  * Mirá el simulador abajo en el **PR #42 (botón verde)**: la fidelidad al manual (**Context Adherence**) dio **`96.4%`** (supera nuestra meta de `>= 90%`) y hubo **`0%` de alucinaciones**, así que el sistema dice **`DEPLOY APPROVED ✅`**.
  * Ahora hacé clic en el **PR #43 (botón rojo)**: alguien tocó el prompt sin querer, la fidelidad cayó al **`74.0%`** y alucinó en 18 preguntas. Automáticamente salta **`DEPLOY BLOCKED 🛑`** y ese error nunca llega a los clientes.
* **3. Observabilidad en Vivo (Langfuse):** Y una vez que el bot ya está en la calle, usamos herramientas como **Langfuse** para ver en un tablero cuánto tarda en responder, cuántos dólares lleva gastados en el mes y qué preguntas nuevas hacen los usuarios."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Golden Dataset (Conjunto de Datos de Oro):** Es una planilla con 50 a 100 preguntas reales (incluyendo preguntas trampa) y sus 'respuestas ideales perfectas' redactadas y validadas por los expertos humanos del negocio.
- **Evals en CI/CD (Evaluación Continua Automatizada):** Cada vez que un programador quiere subir un cambio al sistema, un robot le toma automáticamente las 100 preguntas del Golden Dataset al chatbot. Si saca menos de 90%, el sistema bloquea la subida a producción.
- **Context Adherence / Faithfulness (Fidelidad al Contexto):** Métrica que mide qué porcentaje de la respuesta del bot salió fielmente de los manuales provistos sin agregar ni inventar nada por su cuenta.
- **Observabilidad LLMOps (Langfuse / Arize):** Es el panel de control en vivo (como el tablero de un auto) que muestra cuánto tarda el bot, cuánto gasta en dólares por día y qué preguntas están fallando en producción.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 3 tarjetas de arriba (1. Golden Dataset, 2. Evals en CI/CD, 3. Observabilidad) y abajo hacé clic en los dos botones del simulador ('✅ PR #42: Chunking 1000ch + 15% Overlap' vs. '❌ PR #43: Prompt sin Guardrail') para que vea cómo cambia el cartel de DEPLOY APPROVED a DEPLOY BLOCKED.

### 🔗 Puente de Conexión → Slide 14 (Roleplay: Defensa Técnica en Entrevistas IT)
> **"¡Con esto ya tenés el vocabulario completo de principio a fin! Ahora pongamos todo esto en práctica para vos: ¿cómo suena Anabela respondiendo como una líder de producto en una entrevista real? Vamos a la Slide 14."**

---

## Slide 14: Roleplay: Defensa Técnica en Entrevistas IT
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Roleplay Ejecutivo · RAG vs Fine-Tuning · FinOps & Escalabilidad

### 🗣️ Guion Literal (Qué decir)
> "Vamos a entrenar con las **dos preguntas favoritas** que hacen los directores de tecnología (CTOs) o líderes de Producto en entrevistas cuando quieren saber si realmente entendés cómo llevar IA a una empresa o si solo repetís palabras de moda.

* **Escenario 1 — La trampa del Fine-Tuning:** Te preguntan: *'¿Por qué no hacemos un Fine-Tuning del modelo para cargarle nuestros glosarios y manuales que actualizamos todas las semanas?'*.
  * **Cómo lo pensás y lo respondés en 3 pasos súper claros:**
    1. **Diferenciás qué hace cada cosa:** *'El Fine-Tuning sirve para enseñarle al modelo un estilo, tono o formato de salida (como responder en JSON), pero no sirve para cargarle datos que cambian cada semana porque su memoria queda estática y sigue alucinando'*.
    2. **Mostrás visión de costos y negocio:** *'Además, re-entrenar un modelo todas las semanas es lento, carísimo y no te permite saber de qué página sacó la respuesta'*.
    3. **Das la solución ganadora:** *'Para datos vivos usamos una arquitectura **RAG** conectada a una **Base de Datos Vectorial**: actualizamos los fragmentos en segundos, filtramos por metadatos vigentes, exigimos un umbral de confianza de 0.75 y obligamos al bot a citar el documento fuente'*.

* **Escenario 2 — El miedo a la factura de tokens (FinOps):** Te preguntan: *'Si el chatbot pasa de 100 usuarios a 50.000 usuarios por mes, ¿cómo evitás que la factura de la API nos funda?'*.
  * **Tu respuesta en 3 capas de ahorro:**
    1. **Ahorro en instrucciones fijas:** *'Activamos **Prompt Caching** dejando fijo el inicio del System Prompt para ahorrar entre un 50% y 75% en tokens de entrada'*.
    2. **Ahorro evitando llamadas inútiles al LLM:** *'Usamos **Caché Semántica** (si 500 personas preguntan lo mismo, se responde desde la memoria sin volver a pagarle al LLM) y el **cortocircuito del umbral 0.75** para no llamar al modelo en preguntas fuera de tema'*.
    3. **Eficiencia en lo que inyectamos:** *'Pre-filtramos por metadatos y enviamos solo el **Top-3 de chunks** de 1.000 caracteres, en vez de mandar manuales enteros'*. 

Fijate cómo usás toda la terminología técnica real, pero explicando el **porqué** con una claridad que enamora a cualquier entrevistador."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Qué evalúan en la Pregunta 1 (RAG vs. Fine-Tuning):** Quieren ver si caés en la trampa de principiante de pedir 're-entrenar el modelo' cada semana (carísimo y propenso a alucinar) o si sabés proponer una arquitectura RAG con Base Vectorial.
- **Qué evalúan en la Pregunta 2 (Escalabilidad FinOps):** Quieren ver si cuidás la rentabilidad del negocio combinando ahorro en tokens fijos (Prompt Caching), ahorro en preguntas repetidas (Caché Semántica) y filtro previo de llamadas inútiles (Umbral 0.75 + Metadata Filtering).

### ⚡ Dinámica / Interacción en Pantalla
- Leé con Anabela cada una de las dos preguntas de entrevista. Podés hacer clic en el botón '👁️ Ocultar / ✨ Revelar' de cada tarjeta para practicar primero qué respondería ella con sus palabras y luego comparar con los 3 pilares ganadores y el Pitch Ejecutivo.

### 🔗 Puente de Conexión → Slide 15 (Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager)
> **"Pasemos a nuestra última diapositiva, la Slide 15, para resumir todo lo que construiste hoy y ver cómo se conecta con la Sesión 3."**

---

## Slide 15: Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Súper-Poder PM · Entregables S2 · Puente a Sesión 3 (Agentes ReAct)

### 🗣️ Guion Literal (Qué decir)
> "¡Felicitaciones, Anabela! Mirá todo lo que dominaste en esta segunda sesión. Al principio podían sonar intimidantes palabras como *BPE, Prompt Caching, Lost in the Middle, Embeddings de 1536 dimensiones, Similitud por Coseno, Metadata Pre-Filtering, Chunking con Overlap, Umbral 0.75 o Golden Dataset*, y ahora no solo sabés qué significa cada una en criollo, sino **para qué la usás vos al tomar decisiones de producto**.

* **Tus 3 herramientas prácticas en el Portal (Banner Inferior):**
  1. **⚡ Actividad Práctica S2:** Un simulador interactivo con 4 misiones cortitas para jugar y afianzar todo lo que vimos hoy.
  2. **🛠️ App Mock PRD:** El generador interactivo donde podés armar paso a paso el PRD del chatbot corporativo y descargarlo.
  3. **📖 Glosario S2:** El diccionario completo con los 22 términos técnicos explicados con su metáfora cotidiana y tablas comparativas."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **IA Consultiva (RAG Pasivo — Sesión 2):** Es el 'Cerebro que lee': busca en los manuales privados y responde dudas con total precisión y cita, pero no ejecuta acciones en otros sistemas.
- **IA Agéntica (Agentes con ReAct y Tool Calling — Sesión 3):** Son las 'Manos que actúan': además de leer el manual, el agente puede tomar decisiones paso a paso y conectarse por API a otros programas (ej. crear un ticket en Jira, procesar un reembolso o enviar un mail con permiso humano).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las dos tarjetas de síntesis (El Súper-Poder del IT PM en IA a la izquierda y la evolución de Sesión 2 → Sesión 3 → Sesión 4 a la derecha) y señalá los 3 botones verdes/azules/violetas del banner inferior.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 3: Hoy construimos el **'Cerebro consultivo'** de la IA (un sistema RAG que lee manuales privados y responde sin alucinar, pero que todavía tiene 'las manos atadas': no puede tocar botones ni ejecutar tareas en otros sistemas). En la **Sesión 3** le vamos a dar **'Manos y Autonomía'**: vamos a ver cómo funcionan los **Agentes de IA (arquitectura ReAct)** que razonan paso a paso, usan herramientas externas por API (**Tool Calling**) y piden autorización humana antes de hacer una acción crítica (**Human-in-the-Loop**)."**

---

