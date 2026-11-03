# 🎙️ Sesión 2: Overview de LLMs, Embeddings y Arquitectura RAG

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Construir paso a paso un caso real coherente ('Enterprise Knowledge & Localization Bot') manteniendo toda la terminología técnica real de la industria (LLMs, Transformers, BPE, Prompt Caching, Lost in the Middle, Embeddings, Cosine Similarity, Metadata Filtering, Chunking, Overlap, RAG, Enterprise SLA, Golden Dataset), explicada con analogías cotidianas y del mundo de la traducción/gestión.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 15 min** | 01. El Motor y sus Límites | Slides 1 a 4 | Presentación del Caso Real ('Enterprise Knowledge & Localization Bot'), cómo funciona un LLM (autocompletado probabilístico), Temperatura, Tokenización BPE, Prompt Caching y por qué no podemos pegar 50 manuales en el prompt ('Lost in the Middle'). |
| **15 - 30 min** | 02. El Buscador por Significado | Slides 5 a 7 | Cómo hacer que el bot encuentre los 3 párrafos exactos sin leer todo el manual: coordenadas de significado (Embeddings 1536d), Similitud por Coseno, Bases Vectoriales con filtros de vigencia/idioma (Metadata Filtering) y corte inteligente (Chunking + Overlap). |
| **30 - 45 min** | 03. Arquitectura & Especificación | Slides 8 a 10 | Ensamblamos el 'Enterprise Knowledge Bot' en 2 etapas con ejemplos reales de datos: Fase 1 (cargar la Guía Pagos LATAM 2026 en segundo plano) y Fase 2 (responder en vivo '¿Cómo se traduce Chargeback?' con citas), y lo bajamos al Mock PRD. |
| **45 - 60 min** | 04. Blindaje Corporativo & Cierre | Slides 11 a 15 | Protección legal de prompts bajo NDA (Enterprise SLA & PII Masking), la barrera del 0.75 para que el bot sepa decir 'no sé', el examen automático de 100 preguntas (Golden Dataset) y defensa en entrevistas. |

---

## Slide 1: Portada: IA Generativa & Arquitectura RAG (Nuestro Hilo Conductor)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Caso Real: Localization Bot · LLMs · Arquitectura RAG · React Simulators

### 🗣️ Guion Literal (Qué decir)
> "¡Bienvenida a la Sesión 2, Anabela! En nuestro primer encuentro vimos cómo se construye el software: Frontend, Backend, APIs, Git y bases de datos. Hoy nos metemos de lleno en tu terreno natural —el lenguaje—, pero visto desde la ingeniería de Inteligencia Artificial.

Para que ningún concepto quede suelto o abstracto, hoy tenemos un **Hilo Conductor de principio a fin** (mirá el banner azul en el centro de la portada): juntos vamos a diseñar paso a paso un **'Enterprise Knowledge & Localization Bot'** —un asistente interno para que los equipos de producto y traducción consulten manuales y glosarios oficiales de la empresa en segundos, con citas reales y cero inventos—.

Mirá las 4 tarjetas de abajo, que son los 4 capítulos de nuestra historia hoy:
* **01. El Motor y sus Límites (Slides 2 a 4):** Primero vamos a abrir el motor del LLM. Vas a ver por qué inventa datos si le preguntás de memoria (**Alucinación**), cuánto cuesta cada sílaba que lee (**Tokens BPE y Prompt Caching**) y por qué **no podemos simplemente pegarle 50 manuales enteros** en el chat (*Lost in the Middle*).
* **02. El Buscador por Significado (Slides 5 a 7):** Como no podemos pegarle los 50 manuales, necesitamos un buscador inteligente que encuentre solo los 3 párrafos exactos. Ahí entran los **Embeddings** (el GPS del significado), la **Base Vectorial con filtros de etiquetas** y el corte de documentos con **Chunking y Overlap**.
* **03. Arquitectura & Especificación (Slides 8 a 10):** Unimos todas esas piezas en el flujo completo de **RAG (Fase 1 y Fase 2)** siguiendo el recorrido real de un PDF de Pagos LATAM, y lo volcamos en tu entregable como PM: el **PRD (Documento de Requisitos de Producto)**.
* **04. Blindaje Corporativo (Slides 11 a 15):** Antes de salir a producción, blindamos el bot con privacidad legal (**Enterprise SLA**), le ponemos la barrera del **0.75** para que sepa decir *'no sé'*, le tomamos un examen automático de 100 casos (**Golden Dataset**) y practicamos cómo defenderlo en una entrevista."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Hilo Conductor (Enterprise Knowledge & Localization Bot):** En lugar de ver conceptos sueltos, durante las 15 diapositivas vamos a diseñar paso a paso un producto real: un asistente corporativo que responde consultas sobre manuales y glosarios de localización sin inventar respuestas ni filtrar secretos.
- **LLM (Large Language Model / Gran Modelo de Lenguaje):** Es el 'motor cerebral' detrás de ChatGPT, Claude o Gemini. Se llama 'Grande' porque fue entrenado leyendo casi todo internet para aprender cómo se conectan las palabras.
- **RAG (Retrieval-Augmented Generation):** En criollo: 'tomarle examen a la IA a libro abierto'. En vez de dejar que responda de memoria (donde puede inventar), primero buscamos el párrafo exacto en los manuales privados de nuestra empresa y se lo damos para que responda solo con esa evidencia.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá primero el banner azul del medio ('🧭 Hilo Conductor de la Clase: Enterprise Knowledge & Localization Bot') para darle contexto de toda la sesión. Luego mostrá las 4 tarjetas numeradas (01 a 04) que cuentan la historia de principio a fin.

### 🔗 Puente de Conexión → Slide 2 (El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017))
> **"Arranquemos por el Paso 1 de nuestra misión: abrir el motor del LLM para entender por qué miente cuando no sabe algo y cómo lo domamos con la Temperatura. Pasemos a la Slide 2."**

---

## Slide 2: El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Paso 1 de 14 · Attention Is All You Need · Next-Token & Temperatura · RAG vs Fine-Tuning

### 🗣️ Guion Literal (Qué decir)
> "Fijate arriba del título: en cada diapositiva tenés una brújula que nos dice en qué paso estamos y qué pregunta del proyecto vamos a resolver. Acá estamos en el **Paso 1: ¿Cómo piensa realmente el motor que vamos a usar y por qué inventa datos si lo dejamos solo?**.

Mirá la tarjeta roja de la izquierda versus la verde de la derecha: cuando uno habla con ChatGPT y ve que redacta tan bien, parece un 'cerebro mágico' que razona como un humano. **La realidad técnica es otra**: un **LLM** es una calculadora gigante de probabilidades que hace una sola cosa: **Next-Token Prediction (Predicción del Siguiente Token)**.

* **¿Qué significa esto en criollo?:** Pensá en el texto predictivo de WhatsApp en tu celular: cuando escribís *'Buen'*, te sugiere *'día'* (80%), *'fin de semana'* (15%) o *'provecho'* (5%). Un LLM hace exactamente eso pero habiendo leído miles de millones de textos. ¿Y por qué ocurre entonces la famosa **Alucinación**? Porque si un traductor le pregunta una regla privada de nuestra empresa que el modelo nunca vio en internet, su instinto estadístico es seguir completando palabras que 'suenen coherentes'. Es como ese alumno que en un examen oral no estudió, pero tiene mucha labia y te chamuya con total seguridad.
* **Simulador en Vivo — Qué es la Temperatura:** Mirá el simulador React acá en el medio con una frase de nuestro Bot: *'Para traducir Checkout en LATAM debemos consultar el...'*. El modelo calcula los candidatos posibles. Si nosotros como PMs configuramos **`Temperatura = 0.0`** (hacé clic en el botón verde), apagamos la creatividad: el modelo está obligado a elegir siempre la opción con mayor puntaje estadístico (`glosario_aprobado` con 88%). En cambio, si subimos a **`Temperatura = 0.9`** (hacé clic al lado), dejamos que tire los dados y puede elegir `invento_alucinado` (14%). **Primera decisión para nuestro Bot:** en el PRD vamos a exigir **Temperatura 0.0**.
* **Las dos joyas de abajo (Origen y Regla de Arquitectura):**
  1. **El Paper de 2017 (*'Attention Is All You Need'*):** Mirá qué lindo dato para tu perfil de traductora: toda esta revolución nació en 2017 porque Google quería mejorar la **traducción automática**. Antes las máquinas leían palabra por palabra y se olvidaban del principio de la frase. Ahí inventaron el **Transformer** (la **'T'** de **GPT**) y el **Self-Attention (Auto-Atención)**, que lee toda la oración de un vistazo y entiende cómo cada palabra cambia el sentido de las demás según el contexto.
  2. **¿Por qué elegimos RAG y no Fine-Tuning para nuestro Bot?:** Si alguien del equipo propone *'Re-entrenemos el modelo (Fine-Tuning) con nuestros glosarios cada semana'*, vos le explicás que no: el **Fine-Tuning** sirve para enseñarle un *tono de voz o formato*, pero es carísimo y deja los datos congelados. Para consultar glosarios vivos que cambian todas las semanas sin inventar, vamos a construir una arquitectura **RAG**."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Next-Token Prediction (Predicción del Siguiente Token):** Es el autocompletado predictivo del teclado de tu celular pero hiper-vitaminado. El modelo no 'sabe' ni 'razona': solo calcula matemáticamente qué palabra o sílaba tiene más probabilidad de seguir a la anterior.
- **Alucinación Factual (Hallucination):** Cuando la IA no tiene un dato privado de nuestra empresa pero, con tal de completar la oración de forma elocuente y sonar segura, inventa un dato falso muy bien redactado.
- **Temperatura (0.0 vs 0.9):** Es la 'perilla de creatividad vs. rigor'. En 0.0 la IA elige siempre la palabra #1 más segura (cero inventos, ideal para nuestro Bot). En 0.9 la dejamos arriesgar con palabras menos probables (sirve para lluvia de ideas, pero alucina en datos técnicos).
- **Transformer & Self-Attention (Auto-Atención):** Nacieron en Google en 2017 para traducir idiomas. En vez de leer palabra por palabra olvidándose del principio, saca una 'foto panorámica' de toda la oración y entiende que la palabra 'banco' cambia de significado si al lado dice 'plaza' o 'hipoteca'.
- **Fine-Tuning vs. RAG:** Fine-Tuning es mandarlo a un 'curso de modales y estilo' (aprende a hablar formal o en código JSON, pero no sirve para glosarios que cambian cada semana). RAG es darle acceso en vivo a los manuales actualizados de la empresa.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá la etiqueta superior ('MÓDULO 1 · PASO 1 DE 14') y compará El Mito vs. La Realidad. Luego jugá en vivo con el Simulador React del medio alternando entre 'Temp = 0.0 (RAG / Precisión)' y 'Temp = 0.9 (Creativa / Riesgo)' sobre la frase del módulo de Pagos LATAM. Cerrá con las dos tarjetas inferiores.

### 🔗 Puente de Conexión → Slide 3 (Tokens: La Economía y Lingüística de la IA)
> **"Recién viste que el simulador decía 'Siguiente Token' en vez de 'Siguiente Palabra'. ¿Por qué la IA parte las palabras en pedacitos y cómo afecta eso al presupuesto mensual de nuestro Bot? Pasemos al Paso 2 en la Slide 3."**

---

## Slide 3: Tokens: La Economía y Lingüística de la IA
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 2 de 14 · Tokenización BPE · Asimetría Input/Output · Prompt Caching (-55%)

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 2: ¿Cómo lee el texto nuestro Bot y cómo calculamos cuánto nos va a cobrar el proveedor de IA por mes?**.

Cuando contratás la luz en tu casa te cobran por Kilowatt; cuando una empresa contrata la API de OpenAI, Anthropic o Google para un chatbot, **le cobran por millón de Tokens**.

* **Simulador BPE en Vivo (Tarjeta Izquierda):** Mirá la primera frase de nuestro proyecto: *'La localización automática con IA optimiza glosarios técnicos globales'*. Son **9 palabras**, pero cuando activamos el tokenizador **BPE (Byte Pair Encoding)**, se parte en **15 bloquecitos de colores**: `La`, ` locali`, `zación`, ` auto`, `mática`... Para vos que venís de traducción, esto te va a resultar súper familiar: es **morfología pura**. La máquina no guarda un diccionario con millones de palabras conjugadas; guarda raíces frecuentes (`locali`, `opti`, `glosa`) y terminaciones (`zación`, `miza`, `rios`).
* **Dos detalles económicos clave para vos como PM:**
  1. **El español gasta un poquito más de tokens que el inglés:** Por los acentos, los plurales más largos y las conjugaciones, 1.000 tokens rinden unas **750 palabras en inglés**, pero unas **650 palabras en español**. Si tu bot atiende a Latinoamérica, tenés que presupuestar ese ~15% extra.
  2. **Asimetría Input vs. Output:** Las APIs te cobran distinto lo que entra (**Input**) de lo que sale (**Output**). Que el modelo lea 10 párrafos de tu manual es barato; que el modelo escriba 10 párrafos nuevos cuesta **de 3 a 5 veces más caro**. Por eso a nuestro Bot le vamos a pedir respuestas concisas y al grano.
* **Calculadora FinOps y Prompt Caching (Tarjeta Derecha):** Ahora mirá cómo le ahorrás más de la mitad del presupuesto a tu empresa. Supongamos que nuestro Bot recibe 5.000 consultas por día, y en cada consulta le mandás al principio las instrucciones fijas del sistema (el *System Prompt*) de 1.500 tokens. Si apagás **Prompt Caching** en el simulador, pagás esos 1.500 tokens una y otra vez ($225 USD/mes) y el usuario espera más de 1 segundo (`1150 ms`) para ver la primera letra (**TTFT**). Cuando activás **Prompt Caching**, obligás a los programadores a dejar todo el bloque fijo al principio del prompt: el servidor lo guarda pre-calculado en memoria, **la factura baja un 55% ($101 USD/mes)** y la respuesta arranca en apenas `380 ms`."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Token:** Es la unidad mínima que lee y cobra la IA. No es ni una letra ni una palabra entera: es un 'ladrillito o sílaba' de unas 3 o 4 letras. Regla práctica: 1.000 tokens son unas 750 palabras en inglés (o ~650 en español).
- **BPE (Byte Pair Encoding):** Es el método que usa la IA para partir palabras en tokens: separa raíces comunes ('locali-') de sufijos ('-zación'). Así con solo ~100.000 ladrillitos puede armar cualquier palabra de cualquier idioma.
- **Asimetría Input vs. Output:** Leer lo que vos le mandás (Input) es barato; pero generar la respuesta palabra por palabra (Output) le exige mucho más cálculo al servidor y cuesta entre 3 y 5 veces más caro.
- **Prompt Caching & TTFT (Time To First Token):** Prompt Caching es guardar en la 'memoria rápida' del servidor las instrucciones fijas de nuestro Bot para que te cobren entre 50% y 75% menos. TTFT es cuántos milisegundos tarda en aparecer la primera palabra de la respuesta en pantalla.

### ⚡ Dinámica / Interacción en Pantalla
- En la tarjeta izquierda, hacé clic en las 3 frases de nuestro proyecto ('Frase 1: Localización', 'Frase 2: Regla RAG', 'Frase 3: Output JSON') y en el botón 'Ver Texto Crudo / Tokenizar BPE'. En la tarjeta derecha, mové el deslizador de consultas por día y prendé/apagá el botón de 'Prompt Caching'.

### 🔗 Puente de Conexión → Slide 4 (Ventanas de Contexto & El Sesgo 'Lost in the Middle')
> **"Ahora bien: si hoy existen modelos con ventanas de contexto enormes donde entran 50 manuales enteros, ¿por qué no le pegamos todos los manuales de la empresa en el prompt y nos ahorramos de construir un buscador? Pasemos al Paso 3 en la Slide 4."**

---

## Slide 4: Ventanas de Contexto & El Sesgo 'Lost in the Middle'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 3 de 14 · Context Window · Lost in the Middle · Por qué necesitamos RAG

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 3: ¿Por qué no podemos simplemente pegarle todos los PDFs de la empresa en un prompt gigante?**.

Esta es una duda súper común. Antes, los primeros modelos de IA tenían una **Ventana de Contexto** (su memoria de corto plazo en una charla) muy chiquita, de unas 3.000 palabras. Hoy existen modelos donde caben **128.000 o hasta 1 millón de tokens** (¡varios libros enteros!). Entonces un desarrollador Junior te puede decir: *'Anabela, si en la ventana caben los 20 manuales de la empresa, peguemos los 20 manuales enteros en cada pregunta y listo'*.

Mirá por qué como PM les vas a decir que **eso es un error grave de arquitectura**, no solo porque pagarías millones de tokens en cada pregunta, sino por un fenómeno comprobado por la Universidad de Stanford llamado **Lost in the Middle (Perdido en el Medio)**:

* **La Curva en 'U' de Atención (Simulador Derecho):** A los LLMs les pasa exactamente lo mismo que a una persona cuando va al supermercado sin anotador y le dictás una lista de 40 productos. ¿Cuáles se acuerda seguro? Los primeros 3 que le dijiste (**Primacy Bias / Sesgo de Primacía**, ~99% de retención) y los últimos 3 que escuchó antes de entrar (**Recency Bias / Sesgo de Recencia**, ~96%). ¿Y qué pasó con los productos 18, 19 y 20 del medio? **Se los olvidó por completo**.
* **Probémoslo en el Simulador:** Hacé clic en el botón rojo del **Centro Geométrico (Posición 50%)**. Si la regla que explica cómo traducir *'Chargeback'* quedó enterrada en la página 25 de un prompt de 50 páginas, la atención del modelo cae al **38%** y el Bot ignora la regla o alucina.
* **La conclusión que abre el Módulo 2:** Como ves en la tarjeta izquierda, que en tu escritorio entren 50 libros apilados no significa que tengas que leer los 50 para responder una duda. Necesitamos un **buscador inteligente** que rescate únicamente los **3 párrafos exactos** y los ponga bien al principio y al final del prompt, donde la atención del modelo supera el 95%."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Ventana de Contexto (Context Window):** Es el tamaño del 'escritorio o memoria de corto plazo' que tiene el modelo en una consulta. Todo lo que le mandás más lo que te responde tiene que caber adentro de esa ventana.
- **Lost in the Middle (Perdido en el Medio):** Estudio de Stanford que demostró que cuando le metés muchísimo texto de golpe a un LLM (ej. 50 páginas), presta mucha atención al principio y al final, pero se olvida o ignora hasta el 60% de los datos que quedaron en la mitad.
- **Primacy Bias & Recency Bias:** Son los nombres de ese efecto: Primacy Bias es recordar perfecto lo primero que leíste (~99%), y Recency Bias es recordar perfecto lo último que leíste (~96%).

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic en los 3 botones ('Inicio del Prompt 8%', 'Centro Geométrico 50%', 'Final del Prompt 94%') o mové la barrita para que vea cómo el indicador pasa de verde (95%-99% de atención) a rojo en el medio (38% de atención).

### 🔗 Puente de Conexión → Slide 5 (Embeddings: Traduciendo Significado a Coordenadas)
> **"Así entramos al Módulo 2 de nuestro proyecto: ¿cómo construimos ese buscador inteligente que encuentra los 3 párrafos exactos aunque el usuario escriba con sinónimos? Pasemos al Paso 4 en la Slide 5: Embeddings."**

---

## Slide 5: Embeddings: Traduciendo Significado a Coordenadas
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 4 de 14 · Embeddings (1536d) · Espacio Vectorial · Similitud por Coseno

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 4: ¿Cómo busca nuestro Bot por significado cuando el usuario no usa las mismas palabras que el manual?**.

Pensá qué pasa cuando usás el buscador clásico (`Ctrl + F`) en un PDF o en Word: busca **letras idénticas**. Si un traductor pregunta en nuestro Bot: *'¿Cómo valido los términos antes de salir a otros países?'*, y el manual oficial dice: *'Protocolo de revisión de glosarios para localización global'*, ¡no comparten ni una sola palabra clave! Un buscador tradicional te da cero resultados.

¿Cómo logra la IA entender que esas dos frases **significan exactamente lo mismo**? Usando **Embeddings**:

* **El GPS de las Ideas (Pasos 01 y 02 arriba):** Imaginate que tuvieras un mapa gigante donde cada idea del mundo tiene una dirección de GPS (latitud y longitud). Cuando entra una frase, el **Modelo de Embeddings** analiza su sentido y la convierte en una lista de **1536 números** (su coordenada exacta en el mapa). ¿Por qué 1536 números? Porque cada número evalúa una característica del concepto: qué tan relacionado está con idiomas, qué tan técnico es, si habla de pagos, si habla de software, etc.
* **Similitud por Coseno en Vivo (Paso 03 y Mapa Interactivo):** Una vez que cada párrafo de nuestros manuales tiene su coordenada en el mapa, medir si la pregunta del usuario habla de lo mismo es tan fácil como medir la distancia entre dos casas en Google Maps. A esa cuenta matemática la llamamos **Similitud por Coseno (Cosine Similarity)** y da una nota del **`0.00` al `1.00`**.
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
> **"Ahora bien: si guardamos en este mapa todos los manuales de la empresa desde el año 2020 y de todos los países, ¿qué pasa si un manual viejo de 2021 habla del mismo tema que el manual nuevo de 2026? ¡Quedan pegaditos en el mapa! Veamos en el Paso 5 (Slide 6) cómo evitamos esa trampa."**

---

## Slide 6: Bases Vectoriales & Metadata Filtering
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 5 de 14 · Vector DB (Pinecone) · Metadata Pre-Filtering · Búsqueda Híbrida

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 5: ¿Dónde guardamos esos vectores y cómo evitamos que nuestro Bot responda con un manual vencido de 2021 o de otro país?**.

En la Sesión 1 vimos que las empresas tenían bases SQL y NoSQL. Para guardar todos esos vectores de 1536 dimensiones que vimos recién, usamos el tercer tipo: las **Bases de Datos Vectoriales** (como **Pinecone**, **Qdrant** o **pgvector**).

Pero mirá el problema real que aparece en el simulador de la derecha cuando alguien le pregunta a nuestro Bot: *'¿Cómo se traduce Checkout y Chargeback en nuestra app de Pagos?'*:

* **El peligro de buscar solo por significado (Caja Roja Izquierda y Simulador sin filtros):** Si apagamos los botones de filtro en el simulador, fijate qué pasa: el **'Manual Legacy Pagos 2021 (Obsoleto)'** tiene un puntaje de similitud altísimo (**`0.86`**) porque habla exactamente de pagos, ¡y la guía de Estados Unidos (**`US Checkout Styleguide`**) tiene **`0.84`**! Si buscamos solo por cercanía semántica, el Bot le va a dar al traductor una regla derogada hace 5 años.
* **La solución: Metadata Pre-Filtering (Prendé los filtros en el Simulador):** ¿Cómo lo resolvemos? Igual que cuando comprás en MercadoLibre o Amazon: antes de mirar productos, filtrás por talle y año. Esas etiquetas se llaman **Metadatos**. Cuando en el simulador activamos **`Idioma: ES-LATAM`** y **`Año: 2026 (Vigente)`**, la base vectorial primero tacha de un plumazo el manual viejo de 2021 y los documentos de EE. UU./Reino Unido, y recién después calcula la Similitud por Coseno únicamente sobre los manuales vigentes de 2026.
* **Por qué esto es 100% responsabilidad tuya como PM:** Los ingenieros arman la base, pero **sos vos como PM quien conoce el negocio y define en el PRD qué etiquetas (metadatos) obligatorias lleva cada documento** (`idioma`, `año_vigencia`, `módulo`, `tipo_doc`)."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Base de Datos Vectorial (Vector DB: Pinecone, Qdrant, pgvector):** Es la 'biblioteca especializada' donde se guardan los Embeddings (las coordenadas numéricas de los textos) para poder buscar por cercanía de significado en milisegundos.
- **Metadatos (Metadata Schema):** Son las 'etiquetas de clasificación' explícitas que le pegamos a cada documento al guardarlo: Idioma = ES-LATAM, Año = 2026, Tipo = Guía de Estilo, Sector = Pagos.
- **Metadata Pre-Filtering (Pre-filtrado por Metadatos):** Es aplicar primero un filtro duro por etiquetas (ej. 'quedate solo con manuales en Español del año 2026') ANTES de buscar por significado, para no recuperar documentos vencidos o de otro país.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá primero en el simulador de la derecha la consulta real del usuario ('💬 Consulta al Bot: ¿Cómo se traduce Checkout y Chargeback?'). Luego apagá las etiquetas 'Año: 2026' e 'Idioma: ES-LATAM' para que vea cómo se cuelan con puntaje alto (0.86 y 0.84) el Manual Legacy 2021 y el US Styleguide en inglés, y volvelas a prender.

### 🔗 Puente de Conexión → Slide 7 (Chunking & Overlap: El Arte de Fragmentar Documentos)
> **"Ya tenemos la Base Vectorial y las etiquetas de filtrado. Nos falta resolver un último detalle antes de cargar los archivos: un manual PDF tiene 200 páginas, ¿cómo lo cortamos en pedacitos sin partir una regla por la mitad? Pasemos al Paso 6 en la Slide 7."**

---

## Slide 7: Chunking & Overlap: El Arte de Fragmentar Documentos
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 6 de 14 · Recursive Character Chunking · Chunk Overlap (15%) · Puente Semántico

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 6: ¿Cómo cortamos un manual PDF de 200 páginas en fichas pequeñas sin romper una regla a la mitad?**.

Si intentáramos convertir un manual entero de 200 páginas en un solo vector (un solo punto en el mapa), sería una ensalada de mil temas mezclados. Por eso, antes de calcular los Embeddings, cortamos el documento en bloques chiquitos de unas 200 palabras (~1.000 caracteres). En ingeniería de IA, a cada ficha se le dice **Chunk**, y al proceso de cortarlos se le llama **Chunking**.

Acá hay dos decisiones técnicas que vos vas a especificar en tu PRD:

* **1. Recursive Character Chunking (Corte Inteligente por Párrafos):** Si le decís al sistema *'cortá cada 1.000 letras exactas'*, mete la tijera en la mitad de una palabra o idea. Por eso pedimos **Recursive Character Chunking**: el sistema corta respetando la estructura humana (primero títulos, después párrafos y después oraciones).
* **2. Chunk Overlap (Solapamiento — Simulador en Vivo a la Derecha):** Pero mirá en el simulador lo que pasa incluso cortando entre dos frases cuando tenemos una regla condicional: *'Se requiere validar el glosario técnico antes del despliegue en producción si hay errores P1 abiertos, bloqueando automáticamente el lanzamiento global hasta aprobación de QA'*.
  * **Hacé clic en `0%` en el simulador:** El corte cae justo en el medio. Si un usuario pregunta *'¿Cuándo se bloquea el lanzamiento global?'* y la base vectorial recupera el **Fragmento B**, el fragmento dice *'...bloqueando automáticamente el lanzamiento global'*, ¡pero **perdió la primera mitad donde decía que eso pasa solo si hay errores P1**! El Bot no sabe la causa y alucina.
  * **Ahora hacé clic en `15%` en el simulador:** Mirá cómo aparece resaltado el puente compartido en ambos fragmentos (*'despliegue de la versión en producción si hay errores P1'*). Al repetir el último 15% del Fragmento A al comienzo del Fragmento B, cualquier ficha que recupere el buscador conserva la regla completa con su sujeto y condición."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Chunking (Fragmentación Documental):** Es cortar un documento largo (ej. un PDF de 200 páginas) en 'fichas' o bloques pequeños de texto (llamados Chunks, de unas 200 palabras o 1.000 caracteres) antes de convertirlos en vectores.
- **Recursive Character Chunking:** En vez de cortar cada 1.000 letras a ciegas partiendo oraciones por la mitad, corta de forma inteligente respetando primero títulos, luego párrafos y luego puntos seguidos.
- **Chunk Overlap (Solapamiento del 10% al 20%):** Es repetir el final del Fragmento A al comienzo del Fragmento B (como cuando sacás una foto panorámica solapando un borde con el otro) para que ninguna condición o regla quede huérfana.

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic primero en el botón '0%' para que vea el corte abrupto donde el Fragmento B pierde la condición ('si hay errores P1'), y después hacé clic en '15%' para que vea cómo el puente amarillo repite el contexto en ambos fragmentos.

### 🔗 Puente de Conexión → Slide 8 (Anatomía de RAG — Fase 1: Ingestión Offline (Batch))
> **"¡Listo! Ya dominás todas las piezas sueltas. Ahora entramos al Módulo 3: vamos a enchufar todas estas piezas juntas para ver funcionar nuestro 'Enterprise Knowledge Bot' con un documento real. Pasemos al Paso 7 en la Slide 8."**

---

## Slide 8: Anatomía de RAG — Fase 1: Ingestión Offline (Batch)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Paso 7 de 14 · RAG Fase 1 · Pipeline Batch Offline · Ejemplo Real Pagos LATAM

### 🗣️ Guion Literal (Qué decir)
> "Llegamos al **Módulo 3 (Paso 7): ¿Cómo ensamblamos todas las piezas que vimos recién para cargar los manuales en nuestro Bot?**.

Toda **Arquitectura RAG** se divide en **dos momentos separados**: la **Fase 1 (en esta Slide 8)** es preparar y ordenar la biblioteca en segundo plano antes de abrir, y la **Fase 2 (en la Slide 9)** es responderle al usuario en vivo cuando hace una pregunta.

Sigamos el recorrido de un archivo real de nuestro proyecto haciendo clic en **'▶ Simular Pipeline Batch'** y mirando cómo cambia el **Ejemplo en vivo** en el recuadro inferior:

* **Paso 1 — Documentos (Ground Truth):** Subimos el archivo oficial aprobado por el equipo: `Guia_Estilo_Pagos_LATAM_2026.pdf` (42 páginas). El sistema lo limpia de encabezados repetidos y basura visual.
* **Paso 2 — Chunking (1000 chars + 15% Overlap):** El sistema corta esas 42 páginas en fichas. Mirá en el ejemplo abajo cómo queda la **Ficha #14**: *'En pagos LATAM, Chargeback se traduce oficialmente como Contracargo (nunca Reverso)...'* conservando su puente de 15% con la ficha anterior.
* **Paso 3 — Embedding (1536d):** Esa Ficha #14 pasa por el modelo de Embeddings y se transforma en su coordenada matemática de 1536 números: `[0.021, -0.084, 0.419, ...]`.
* **Paso 4 — Vector DB (Pinecone):** Guardamos en Pinecone ese vector junto con sus etiquetas obligatorias (**Metadatos**): `{ id: 'chunk_14', lang: 'ES-LATAM', year: 2026, page: 8 }`. ¡Listo! Nuestra biblioteca inteligente ya está indexada."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fase 1: Ingestión Offline (Batch Pipeline):** Es 'preparar la biblioteca antes de que entren los lectores'. Corre en segundo plano cada vez que subimos o actualizamos manuales, sin ningún usuario esperando en el chat.
- **Ground Truth (Fuente Única de Verdad):** Son los documentos oficiales validados por humanos (en nuestro ejemplo: 'Guia_Estilo_Pagos_LATAM_2026.pdf') que tomamos como verdad absoluta para alimentar al bot.
- **Upsert en Vector DB:** Término que combina 'Update' (actualizar) + 'Insert' (insertar): guarda los vectores nuevos en Pinecone y pisa los viejos para que la biblioteca esté siempre al día.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en '▶ Simular Pipeline Batch' arriba a la derecha (o en los círculos 1, 2, 3 y 4) y señalá especialmente la línea inferior verde con fuente monoespaciada ('📄 Ejemplo en este paso'), que muestra cómo se transforma el archivo 'Guia_Estilo_Pagos_LATAM_2026.pdf' en cada etapa.

### 🔗 Puente de Conexión → Slide 9 (Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live))
> **"Ahora que la Ficha #14 ya está guardada con sus coordenadas y etiquetas en Pinecone, abrimos el chat a los empleados: un traductor entra y pregunta '¿Cómo se traduce Chargeback?'. Pasemos al Paso 8 en la Slide 9 para ver qué ocurre en menos de 2 segundos."**

---

## Slide 9: Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 8 de 14 · RAG Fase 2 · Top-K Retrieval · Prompt Aumentado + Cita

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 8: Un traductor abre nuestro Bot y escribe: '¿Cómo se traduce Chargeback en la app?'**. Mirá todo lo que hace el sistema por atrás en menos de 2 segundos (hacé clic en **'▶ Simular Consulta Live'** y seguí el ejemplo en la línea azul de abajo):

* **Paso 1 — Pregunta y Vectorización (~35 ms):** El usuario escribe *'¿Cómo se traduce Chargeback en la app?'*. El sistema convierte esa pregunta en su coordenada de GPS de 1536 números (`[0.019, -0.079, 0.412, ...]`) para poder buscarla en el mapa.
* **Paso 2 — Recuperación con Filtro y Top-K:** El sistema va a Pinecone, aplica primero el filtro duro de metadatos (`lang = ES-LATAM` y `year = 2026`) y busca por **Similitud de Coseno** los **3 fragmentos más cercanos (`Top-K = 3`)**. ¡Bingo! Encuentra en primer lugar nuestra **Ficha #14** de la página 8 con un puntaje altísimo de **`Score = 0.91`**.
* **Paso 3 — El Prompt Aumentado (El Examen a Libro Abierto):** El usuario cree que habló directo con el LLM, pero en realidad nuestro Backend armó en secreto un **Prompt Aumentado**: arriba puso el System Prompt en caché (*'Respondé SOLO usando estos fragmentos'*), en el medio inyectó la Ficha #14 de la página 8, y al final puso la pregunta del usuario.
* **Paso 4 — LLM con Temperatura 0.0 y Cita Verificable:** El LLM lee esa ficha con **Temperatura 0.0** y devuelve en pantalla: *'Se traduce oficialmente como **Contracargo** [Fuente: Guía Pagos LATAM 2026, pág. 8]'*. Cero alucinación, rápido, económico y 100% verificable."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fase 2: Consulta en Tiempo Real (Online Inference):** Es lo que ocurre en menos de 2 segundos desde que el usuario aprieta 'Enviar' en el chat hasta que recibe la respuesta con la página exacta del manual.
- **Top-K Retrieval (ej. Top-K = 3):** Es pedirle a la base vectorial que nos devuelva únicamente los 'K' fragmentos más parecidos a la pregunta (en nuestro Bot, los 3 mejores párrafos).
- **Prompt Aumentado (Context Injection):** Es el corazón de RAG: antes de mandarle la pregunta del usuario al LLM, el servidor le 'inyecta' en secreto los 3 párrafos oficiales encontrados en Pinecone y le ordena responder solo con esa evidencia.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en '▶ Simular Consulta Live' para recorrer los 4 pasos en vivo mostrando cómo cambia el recuadro inferior azul ('💬 Ejemplo en vivo') desde la pregunta por 'Chargeback' hasta la respuesta final con cita a la página 8. Luego abrí un segundo '🔍 Ver Diagrama Completo RAG' para mostrar el póster integrador.

### 🔗 Puente de Conexión → Slide 10 (Taller Práctico: El Mock PRD de tu Chatbot RAG)
> **"¡Acabás de ver el ciclo completo! Ahora, como Product Manager de este proyecto, ¿cómo volcás todas las decisiones que tomamos entre la Slide 2 y la Slide 9 en un documento formal para tu equipo de ingeniería? Pasemos al Paso 9 en la Slide 10: el Mock PRD."**

---

## Slide 10: Taller Práctico: El Mock PRD de tu Chatbot RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 9 de 14 · Mock PRD · Definition of Done (DoD) · Trazabilidad Técnica

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 9: ¿Cómo se ve el entregable real que escribís vos como PM para que los ingenieros construyan este Bot sin adivinar nada?**.

Fijate qué lindo cómo en esta diapositiva **todas las piezas que fuimos aprendiendo encajan en un solo documento**: el **PRD (Product Requirements Document)** y su **Definition of Done (DoD)**.

* **Mirá la Tarjeta Izquierda (Especificación Funcional):**
  * Definís el **Ground Truth** (manuales y glosarios oficiales `.md/.pdf`, que vimos en la Slide 8).
  * Definís el **Comportamiento del Bot**: Temperatura `0.0` (que vimos en la Slide 2), cita obligatoria a la página exacta y prohibición de responder de memoria.
  * Definís el **Esquema de Metadatos** para el pre-filtrado: `idioma`, `año_vigencia`, `modulo` y `tipo_doc` (que probamos en el simulador de la Slide 6).
* **Y mirá la Tarjeta Derecha (Tu Definition of Done Técnico):**
  * **Chunking:** Cortes de `1.000 caracteres` con `15% de Overlap` (que probamos en la Slide 7) y `Prompt Caching` activo (Slide 3).
  * **Vector DB:** Recuperación `Top-K = 3` con nota mínima de similitud de **`Score >= 0.75`**.
  * **Seguridad y QA:** Contrato `Zero-Data Retention SLA` y aprobar el `Golden Dataset` con **`>= 90%`**.

Notá que los últimos tres puntos de esa lista (Privacidad SLA, el freno del `0.75` y el examen del `90%`) son justamente los **3 blindajes corporativos** que vamos a construir ahora en el último módulo."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **PRD (Product Requirements Document):** Es el documento madre que escribe el Product Manager para definir qué producto se va a construir, con qué fuentes de datos, qué filtros y bajo qué reglas de calidad.
- **Definition of Done (DoD / Definición de Terminado):** Es el contrato de calidad con los programadores y QA: la lista de parámetros exactos (Chunking, Overlap, Score >= 0.75, SLA, Evals >= 90%) que deben cumplirse para aprobar el lanzamiento.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrale a Anabela cómo cada renglón de las dos tarjetas cita entre paréntesis la Slide exacta donde aprendimos ese concepto ('visto en Slide 6', 'visto en Slide 7', 'lo veremos en Slide 11-13'). Mostrale también los botones inferiores para abrir la App Mock PRD y el Simulador Práctico.

### 🔗 Puente de Conexión → Slide 11 (Gobernanza de IA, Privacidad & Prevención de Data Leakage)
> **"Entremos entonces al Módulo 4 (Blindaje Corporativo) para completar esos 3 requisitos finales de nuestro PRD: empezamos en el Paso 10 (Slide 11) con Privacidad y Gobernanza Legal."**

---

## Slide 11: Gobernanza de IA, Privacidad & Prevención de Data Leakage
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 10 de 14 · Data Leakage · Enterprise SLA · Zero-Data Retention · PII Masking

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 10: ¿Cómo garantizamos que los glosarios bajo contrato de confidencialidad (NDA) y los datos personales nunca se filtren afuera de la empresa?**.

Esto es lo primero que te va a preguntar el área de Legales o Seguridad Informática (InfoSec) antes de dejarte poner el Bot en producción:

* **El Peligro Real — Data Leakage (Tarjeta Roja):** Cuando alguien usa una cuenta gratuita o común de navegador (como ChatGPT Free/Plus estándar), los términos dicen que **todo lo que pegues ahí puede ser revisado por humanos y usado para entrenar las próximas versiones públicas del modelo**. Si un traductor pega un documento del lanzamiento secreto de un cliente farmacéutico, estás cometiendo una **Fuga de Datos (Data Leakage)** y violando el **NDA** y normas como **GDPR** o **ISO 27001**.
* **El Estándar Corporativo — API bajo Enterprise SLA + PII Masking (Tarjeta Verde y Simulador):** ¿Cómo lo blindamos en nuestro Bot? Mirá el simulador de abajo con el prompt real: *'Lanzamiento Pfizer Q4 — contacto: ana.perez@pfizer.com'*.
  * Si hacés clic en **'🚨 Enviar por Chat Gratuito'**, el nombre del cliente y el email real viajan en crudo y quedan guardados en servidores de entrenamiento externos.
  * Ahora hacé clic en **'🛡️ Enviar por API Enterprise SLA (Zero-Retention)'**: primero pasa por nuestro filtro de **PII Masking**, que transforma el texto en `'Lanzamiento [CLIENT_ORG] Q4 — contacto: [EMAIL_REDACTED]'`. Y segundo, viaja por una API Corporativa con **Zero-Data Retention**: el proveedor procesa la respuesta en memoria efímera y la destruye en milisegundos, con **0% de entrenamiento sobre tus datos**."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Data Leakage (Fuga de Datos / Propiedad Intelectual):** Es el riesgo de que información confidencial de la empresa o de un cliente bajo NDA termine filtrada afuera por enviarla a cuentas gratuitas o públicas de IA.
- **Enterprise SLA & Zero-Data Retention (Retención Cero):** Es el contrato corporativo con OpenAI, Anthropic, Microsoft o AWS donde se comprometen legal y técnicamente a procesar tus textos en memoria temporal y borrarlos en el acto, sin usarlos jamás para entrenar sus modelos públicos.
- **PII Masking (Enmascaramiento de Datos Personales):** PII significa 'Información Personal Identificable' (nombres, DNI, emails). El Masking es un filtro automático que reemplaza esos datos por etiquetas ('[EMAIL_REDACTED]') antes de que salgan hacia la API.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá en el simulador de abajo el caso concreto ('Lanzamiento Pfizer Q4 — contacto: ana.perez@pfizer.com'). Alterná entre los botones '🚨 Enviar por Chat Gratuito' (muestra el payload expuesto en crudo) y '🛡️ Enviar por API Enterprise SLA' (muestra cómo el PII Masking oculta '[CLIENT_ORG]' y '[EMAIL_REDACTED]' bajo Zero-Data Retention).

### 🔗 Puente de Conexión → Slide 12 (Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer')
> **"Ya blindamos legalmente los datos que entran. Ahora vamos al Paso 11 (Slide 12): ¿qué pasa si un empleado le hace al Bot una pregunta que NO está en ningún manual? ¿Cómo logramos que el Bot se calle en vez de inventar?"**

---

## Slide 12: Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 11 de 14 · Confidence Threshold (0.75) · Guardrail Determinista · Fallback Seguro

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 11: ¿Cómo le enseñamos a nuestro Bot a decir 'No sé' cuando le preguntan algo que no figura en los manuales?**.

Acordate lo que vimos en la Slide 2: el LLM por naturaleza siempre quiere completar la oración. Entonces, si alguien le pregunta a nuestro Bot de localización: *'¿Cuál es el salario confidencial del Director de Finanzas?'*, y nosotros le mandamos al LLM cualquier párrafo suelto con puntaje bajísimo, el modelo puede tratar de inventar una respuesta.

Para evitarlo, en el código del servidor ponemos un 'peaje' matemático llamado **Confidence Threshold (Umbral de Confianza Semántica)** fijado en **`0.75`**:

* **Probémoslo en vivo en el Simulador de la Derecha:**
  * **Hacé clic en el Caso 1 (`Score 0.91`):** El usuario pregunta *'¿Cómo se traduce Chargeback en el módulo de Pagos LATAM?'*. Pinecone encuentra el Glosario 2026 (pág. 8) con nota **`0.91`**. Como supera el `0.75`, se enciende la caja verde (**AUTORIZADO**), invoca al LLM y mirá abajo la respuesta exacta del Bot: *'Según el Glosario Pagos LATAM 2026 (pág. 8), Chargeback se traduce oficialmente como Contracargo'*.
  * **Ahora hacé clic en el Caso 3 (`Score 0.34`):** El usuario pregunta *'¿Cuál es el salario confidencial del Director de Finanzas?'*. En nuestros manuales de traducción no hay nada parecido, así que el mejor puntaje en Pinecone da apenas **`0.34`**. Como es menor a `0.75`, el servidor hace un **cortocircuito automático (caja roja BLOQUEADO)**: **no llama al LLM** (gasta `0 tokens`) y devuelve el **Fallback Seguro**: *'No dispongo de información oficial verificada sobre esa consulta en los manuales vigentes'*."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Confidence Threshold (Umbral de Confianza Semántica, ej. 0.75):** Es la 'nota mínima de aprobación' que le exigimos al buscador vectorial (Pinecone). Si el párrafo más parecido del manual tiene una nota menor a 0.75, asumimos que el manual no habla de ese tema.
- **Cortocircuito en Backend (Deterministic Guardrail):** Si la nota no llega a 0.75, nuestro servidor frena ahí mismo y ni siquiera llama al LLM. Así es 100% imposible que alucine y además ahorramos el 100% de los tokens de generación.
- **No-Answer Fallback (Respuesta de Abstención Segura):** Es el mensaje educado y fijo que devuelve el sistema cuando se activa el freno ('No dispongo de información oficial verificada sobre esa consulta en los manuales vigentes').

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic en el 'Caso 1 (Score 0.91: Chargeback)', el 'Caso 2 (Score 0.78: Tono de errores)' y el 'Caso 3 (Score 0.34: Salario del Director)'. Mostrale cómo en las cajas de abajo se ve la respuesta exacta que da el Bot cuando está AUTORIZADO vs. cuando está BLOQUEADO.

### 🔗 Puente de Conexión → Slide 13 (Evaluación de Calidad: Golden Dataset & Evals en CI/CD)
> **"Ya tenemos el Bot armado, blindado legalmente y con su freno anti-alucinaciones en 0.75. Nos queda el último requisito del PRD antes de salir a producción: ¿cómo probamos automáticamente que el Bot responde bien 100 preguntas reales? Vamos al Paso 12 en la Slide 13."**

---

## Slide 13: Evaluación de Calidad: Golden Dataset & Evals en CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 12 de 14 · Golden Dataset · Evals en CI/CD · Context Adherence >= 90%

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 12: Antes de publicar una nueva versión de nuestro Bot a toda la empresa, ¿cómo verificamos automáticamente que no se rompió nada?**.

Conectemos esto con lo que aprendiste en la **Sesión 1 sobre QA y el Pipeline de CI/CD**. En Inteligencia Artificial pasa algo muy particular: a veces un desarrollador toca dos palabras del System Prompt para que el Bot salude más simpático, ¡y sin querer arruina cómo el Bot citaba los glosarios! Como nadie puede probar 100 preguntas a mano cada tarde, armamos un sistema de **QA para IA en 3 pilares**:

* **1. El Golden Dataset (Tu Examen Oficial como PM):** Antes del lanzamiento, vos te sentás con los referentes de traducción y arman una planilla con **100 casos certificados**: preguntas reales (como nuestro **Caso #14: '¿Traducción de Chargeback?'**), cuál es la respuesta exacta esperada (*'Contracargo [Cita pág. 8]'*) y preguntas trampa que deben activar el Fallback. Esa planilla es tu **Golden Dataset**.
* **2. Evals Automatizadas en CI/CD (Mirá el Simulador de Abajo):** Cada vez que un desarrollador sube un cambio (un *Pull Request*), el pipeline corre las 100 preguntas automáticamente:
  * **En el PR #42 (botón verde):** Mirá la línea de muestra del Caso #14: el Bot respondió *'Contracargo (Glosario 2026, pág. 8) [PASS]'*. En el global de las 100 preguntas logró **`96.4%` de fidelidad al manual (Context Adherence)** y **`0%` de alucinación**. El pipeline dice **`DEPLOY APPROVED ✅`**.
  * **Ahora hacé clic en el PR #43 (botón rojo):** Alguien borró sin querer el guardrail del prompt. Mirá qué pasó en el Caso #14: el Bot contestó *'Reverso bancario (sin cita) [FAIL: Alucinación]'*. La fidelidad cayó a **`74.0%`** y el pipeline dispara **`DEPLOY BLOCKED 🛑`**, impidiendo que ese error llegue a los usuarios.
* **3. Observabilidad en Vivo (Langfuse):** Y cuando el cambio aprobado ya está en producción, monitoreamos en un tablero en tiempo real la latencia, el costo por consulta y los votos de los usuarios."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Golden Dataset (Conjunto de Datos de Oro):** Es una planilla con 50 a 100 preguntas reales (incluyendo el Caso #14 de 'Chargeback' y preguntas trampa) con sus 'respuestas ideales certificadas' por los expertos humanos del negocio.
- **Evals en CI/CD (Evaluación Continua Automatizada):** Cada vez que un programador quiere subir un cambio al código (un Pull Request), el pipeline le toma automáticamente las 100 preguntas del Golden Dataset al Bot. Si saca menos de 90%, bloquea el despliegue.
- **Context Adherence / Faithfulness (Fidelidad al Contexto):** Métrica que mide qué porcentaje de las respuestas del Bot salieron fielmente de los manuales oficiales sin inventar nada.
- **Observabilidad LLMOps (Langfuse / Arize):** Es el tablero de control en vivo que monitorea en producción cuánto tarda cada respuesta, cuántos dólares consume por día y si algún usuario votó con pulgar abajo (👎).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 3 tarjetas superiores y luego en el simulador de abajo señalá la fila de muestra ('🧪 Muestra Caso #14/100: ¿Traducción de Chargeback?'). Alterná entre el botón verde ('✅ PR #42') y el botón rojo ('❌ PR #43') para que vea cómo el Caso #14 pasa de 'Contracargo [PASS]' a 'Reverso bancario [FAIL: Alucinación]' y bloquea el deploy.

### 🔗 Puente de Conexión → Slide 14 (Roleplay: Defensa Técnica en Entrevistas IT)
> **"¡Con esto completamos de punta a punta el diseño y blindaje de nuestro Bot! Ahora pasemos al Paso 13 (Slide 14): ¿cómo defendés estas decisiones técnicas cuando te las preguntan en una entrevista laboral?"**

---

## Slide 14: Roleplay: Defensa Técnica en Entrevistas IT
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 13 de 14 · Roleplay Ejecutivo · RAG vs Fine-Tuning · FinOps & Escalabilidad

### 🗣️ Guion Literal (Qué decir)
> "Estamos en el **Paso 13: ¿Cómo suena Anabela defendiendo en una entrevista el mismo Bot que acabamos de construir?**.

Vamos a practicar las **dos preguntas favoritas** de los CTOs y líderes de Producto, usando exactamente las piezas de nuestra clase de hoy:

* **Escenario 1 — La trampa del Fine-Tuning:** Te preguntan: *'¿Por qué para este Bot no hacemos un Fine-Tuning del modelo así aprende nuestros glosarios que actualizamos todas las semanas?'*.
  * **Tu respuesta ganadora en 3 pasos:**
    1. **Diferenciás forma vs. hechos (Slide 2):** *'El Fine-Tuning sirve para enseñar estilo, tono o formato JSON, pero no sirve para conocimiento que cambia cada semana porque congela los pesos del modelo y sigue alucinando'*.
    2. **Mostrás visión de negocio:** *'Además, re-entrenar todas las semanas es lento, carísimo y no permite auditar qué página del manual usó'*.
    3. **Proponés nuestra arquitectura RAG (Slides 6 a 9):** *'Para datos vivos diseñamos una arquitectura **RAG** sobre una **Base Vectorial (Pinecone)**: actualizamos los chunks en segundos, aplicamos **Metadata Pre-Filtering** para traer solo documentos vigentes de 2026, exigimos un **umbral >= 0.75** y obligamos al Bot a citar la página exacta'*.

* **Escenario 2 — El miedo a la factura de tokens (FinOps):** Te preguntan: *'Si el Bot pasa de 100 a 50.000 usuarios activos, ¿cómo evitás que la factura de la API destruya el presupuesto?'*.
  * **Tu respuesta conectando las slides de hoy:**
    1. **Ahorro en instrucciones fijas (Slide 3):** *'Activamos **Prompt Caching** dejando fijo el prefijo del System Prompt para ahorrar más del 50% en tokens de entrada y bajar la latencia'*.
    2. **Ahorro evitando llamadas inútiles al LLM (Slide 12):** *'Usamos **Caché Semántica** para preguntas repetidas y el **cortocircuito del umbral 0.75** en el backend para no invocar ni pagarle al LLM cuando la consulta no está en los manuales'*.
    3. **Eficiencia de contexto (Slides 6, 7 y 9):** *'Pre-filtramos por metadatos e inyectamos solo el **Top-3 de chunks** de 1.000 caracteres en vez de mandar manuales enteros'*."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Qué evalúan en la Pregunta 1 (RAG vs. Fine-Tuning):** Quieren ver si caés en la trampa de principiante de pedir 're-entrenar el modelo' cada semana (carísimo y propenso a alucinar) o si sabés defender la arquitectura RAG con Base Vectorial que construimos hoy.
- **Qué evalúan en la Pregunta 2 (Escalabilidad FinOps):** Quieren ver si cuidás el margen económico del producto combinando los 3 ahorros que implementamos en el Bot: Prompt Caching (Slide 3), Metadata Pre-Filtering + Top-3 (Slides 6 y 9) y Cortocircuito en < 0.75 (Slide 12).

### ⚡ Dinámica / Interacción en Pantalla
- Leé con Anabela cada una de las dos preguntas de entrevista. Hacé clic en el botón '👁️ Ocultar / ✨ Revelar' de cada tarjeta para practicar primero cómo lo respondería ella pensando en el Bot que armamos hoy y luego comparar con los 3 pilares ganadores.

### 🔗 Puente de Conexión → Slide 15 (Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager)
> **"Pasemos a nuestra última diapositiva, el Paso 14 en la Slide 15, para repasar el mapa completo de lo que construiste hoy y cómo se conecta con los Agentes Autónomos de la Sesión 3."**

---

## Slide 15: Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Paso 14 de 14 · Recorrido Completo del Bot · Entregables S2 · Puente a Sesión 3 (Agentes ReAct)

### 🗣️ Guion Literal (Qué decir)
> "¡Felicitaciones, Anabela! Mirá el recorrido completo que hiciste hoy: empezamos con una hoja en blanco y terminaste diseñando de punta a punta un **Enterprise Knowledge & Localization Bot** de nivel corporativo.

Repasemos en 20 segundos cómo conectaste todo en la tarjeta izquierda:
1. **Módulo 1 (Motor y Límites):** Viste que un LLM predice tokens (**BPE**), que para no inventar necesita **Temperatura 0.0**, que ahorramos 55% con **Prompt Caching** y que no podemos pegar 50 manuales por el sesgo **Lost in the Middle**.
2. **Módulo 2 (Buscador Vectorial):** Cortamos los manuales en fichas de **1.000 caracteres con 15% de Overlap**, las convertimos en coordenadas de **1536 dimensiones (Embeddings)** y las filtramos por vigencia e idioma en **Pinecone (Metadata Pre-Filtering)**.
3. **Módulo 3 (RAG y PRD):** Armamos la **Fase 1 (Ingestión)** y la **Fase 2 (Consulta en vivo con Top-K = 3 y Prompt Aumentado)** y lo plasmamos en tu **Mock PRD**.
4. **Módulo 4 (Blindaje):** Lo protegimos con **Enterprise SLA + PII Masking**, le pusimos el freno anti-alucinación en **Score >= 0.75** y lo auditamos con un **Golden Dataset de 100 casos en CI/CD**.

Abajo tenés los 3 accesos directos para practicar en la semana: la **Actividad Práctica S2**, el **Generador de Mock PRD** y el **Glosario Completo S2**."

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **IA Consultiva (RAG Pasivo — Lo que construimos en la Sesión 2):** Es el 'Cerebro que lee': nuestro Bot busca en los manuales privados de Pinecone y responde dudas con total precisión y cita verificable, pero no ejecuta acciones por su cuenta en otros sistemas.
- **IA Agéntica (Agentes con ReAct y Tool Calling — Lo que veremos en la Sesión 3):** Son las 'Manos que actúan': además de leer el manual, el agente puede tomar decisiones paso a paso y conectarse por API a otros programas (ej. actualizar el glosario en el sistema, crear un ticket en Jira o enviar un mail con permiso humano).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las dos tarjetas de síntesis (a la izquierda los 4 módulos del Bot que diseñamos hoy; a la derecha la evolución hacia los Agentes de la Sesión 3) y señalá los 3 botones interactivos del banner inferior.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 3: Hoy construimos el **'Cerebro consultivo'** de la IA (nuestro Bot lee manuales privados y responde sin alucinar, pero todavía tiene 'las manos atadas': no puede tocar botones ni ejecutar tareas en otros programas). En la **Sesión 3** le vamos a dar **'Manos y Autonomía'**: vamos a ver cómo funcionan los **Agentes de IA (arquitectura ReAct)** que razonan paso a paso, usan herramientas externas por API (**Tool Calling**) y piden autorización humana antes de ejecutar una acción crítica (**Human-in-the-Loop**)."**

---

