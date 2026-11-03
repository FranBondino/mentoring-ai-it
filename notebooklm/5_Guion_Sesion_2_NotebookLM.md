# 🎙️ Sesión 2: Overview de LLMs, Embeddings y Arquitectura RAG

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Construir paso a paso un caso real coherente ('Enterprise Knowledge & Localization Bot') manteniendo toda la terminología técnica real de la industria, explicada con analogías cotidianas y del mundo de la traducción/gestión.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)

- **1. El Problema (Slides 2 a 4):** Queremos armar un Bot que responda dudas de manuales de traducción. El LLM solo predice palabras y miente si no sabe (Slide 2), cobra por sílabas llamadas Tokens (Slide 3) y si le pegamos 50 manuales juntos se olvida de lo del medio (Slide 4).
- **2. El Buscador Inteligente (Slides 5 a 7):** Como no podemos pegarle los 50 manuales, armamos un buscador que convierte frases en coordenadas de GPS (Embeddings, Slide 5), filtra por año 2026 e idioma (Metadata, Slide 6) y corta los PDFs en fichas con un 15% repetido para no cortar reglas al medio (Chunking, Slide 7).
- **3. Armado del Bot RAG y PRD (Slides 8 a 10):** Unimos todo en 2 fases: Fase 1 carga el PDF de Pagos LATAM en segundo plano (Slide 8) y Fase 2 responde en 2 segundos '¿Cómo se traduce Chargeback? → Contracargo pág. 8' (Slide 9). Volcamos esas reglas en el documento PRD (Slide 10).
- **4. Blindaje y Entrevista (Slides 11 a 15):** Antes de lanzar, protegemos datos privados con contrato Enterprise SLA (Slide 11), le ponemos nota mínima de 0.75 para que sepa decir 'no sé' (Slide 12), lo probamos con 100 preguntas automáticas (Golden Dataset, Slide 13) y practicamos preguntas de entrevista (Slide 14).

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

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Hoy no vamos a ver teoría suelta: vamos a diseñar paso a paso un Bot real para consultar manuales y glosarios de traducción sin que invente nada.
- **👆 Qué tocar en la Slide:** 1° Señalá el banner azul del medio ('Hilo Conductor') → 2° Mostrá las 4 tarjetas de abajo (01 a 04) como los 4 capítulos de hoy.
- **💬 La analogía ganadora:** Un LLM común responde de memoria como en un examen oral y puede chamuyar; con RAG le damos el manual abierto en la página exacta.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ BIENVENIDA Y EL PROYECTO DE HOY (Señalá el banner azul del centro):**
¡Bienvenida a la Sesión 2, Anabela! En la Sesión 1 vimos cómo se construye el software (Frontend, Backend, APIs y bases de datos). Hoy nos metemos en tu terreno natural —el lenguaje—, pero desde la Inteligencia Artificial. Para que ningún concepto quede suelto, hoy vamos a construir juntos de principio a fin un producto real: un **'Enterprise Knowledge & Localization Bot'** (un asistente interno para consultar manuales y glosarios de traducción con citas reales y cero inventos).

**2️⃣ NUESTRO OBJETIVO CON EL VOCABULARIO:**
Hoy vas a ver los nombres técnicos en inglés que piden las empresas (**Tokens BPE, Prompt Caching, Embeddings, Similitud por Coseno, Chunking, RAG, Golden Dataset**), pero bajados a tierra con ejemplos súper cotidianos.

**3️⃣ LOS 4 CAPÍTULOS DE LA CLASE (Señalá las 4 tarjetas de abajo):**
* **01. El Motor y sus Límites (Slides 2–4):** Cómo piensa el LLM, por qué miente, cómo cobra por sílabas y por qué no podemos pegarle 50 manuales juntos.
* **02. El Buscador por Significado (Slides 5–7):** Cómo encontramos los 3 párrafos exactos usando un 'GPS de ideas' (Embeddings) y filtros.
* **03. Arquitectura RAG y PRD (Slides 8–10):** Enchufamos todo con un ejemplo real de Pagos LATAM y escribimos el documento de requisitos (PRD).
* **04. Blindaje Corporativo (Slides 11–15):** Privacidad legal, cómo hacer que el Bot sepa decir *'no sé'* y cómo defenderlo en entrevistas.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Hilo Conductor (Enterprise Knowledge & Localization Bot):** En lugar de ver conceptos sueltos, durante las 15 diapositivas vamos a diseñar paso a paso un producto real: un asistente corporativo que responde consultas sobre manuales y glosarios de localización sin inventar respuestas ni filtrar secretos.
- **LLM (Large Language Model / Gran Modelo de Lenguaje):** Es el 'motor cerebral' detrás de ChatGPT, Claude o Gemini. Se llama 'Grande' porque fue entrenado leyendo casi todo internet para aprender cómo se conectan las palabras.
- **RAG (Retrieval-Augmented Generation):** En criollo: 'tomarle examen a la IA a libro abierto'. En vez de dejar que responda de memoria (donde puede inventar), primero buscamos el párrafo exacto en los manuales privados de nuestra empresa y se lo damos para que responda solo con esa evidencia.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá primero el banner azul del medio ('🧭 Hilo Conductor de la Clase: Enterprise Knowledge & Localization Bot') y luego mostrá las 4 tarjetas numeradas (01 a 04).

### 🔗 Puente de Conexión → Slide 2 (El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017))
> **"Arranquemos por el Paso 1 de nuestra misión: abrir el motor del LLM para entender por qué miente cuando no sabe algo y cómo lo domamos con la Temperatura. Pasemos a la Slide 2."**

---

## Slide 2: El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Paso 1 de 14 · Attention Is All You Need · Next-Token & Temperatura · RAG vs Fine-Tuning

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** El LLM no 'sabe' ni razona: es como el autocompletado del celular. Si no sabe algo privado, inventa (alucina). Para nuestro Bot usamos Temperatura 0.0 y RAG.
- **👆 Qué tocar en la Slide:** 1° Compará caja Roja (Mito) vs Verde (Realidad) → 2° En el simulador del medio alterná entre 'Temp = 0.0' y 'Temp = 0.9' → 3° Señalá las 2 tarjetas de abajo.
- **💬 La analogía ganadora:** Alucinación = el alumno que no estudió pero tiene labia y te chamuya seguro. Temperatura 0.0 = obligarlo a elegir siempre la palabra #1 más segura.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL MITO VS. LA REALIDAD (Señalá las dos tarjetas de arriba):**
Cuando hablás con ChatGPT parece un humano que razona, pero es una ilusión. Un **LLM** es una calculadora de probabilidades que hace una sola cosa: **Next-Token Prediction (predecir la siguiente palabra)**, igual que el teclado predictivo de WhatsApp cuando escribís *'Buen'* y te sugiere *'día'* (80%). ¿Y por qué **alucina**? Porque si le preguntás una regla privada de tu empresa que nunca leyó, su instinto es seguir completando palabras que suenen lindas, como un alumno que no estudió pero te chamuya con total seguridad.

**2️⃣ DEMO EN VIVO: QUÉ ES LA TEMPERATURA (Tocá los botones Temp 0.0 y Temp 0.9 en el medio):**
Mirá la frase de nuestro Bot: *'Para traducir Checkout en LATAM debemos consultar el...'*. Si ponemos **`Temperatura = 0.0`** (botón verde), apagamos la creatividad y obligamos al modelo a elegir siempre la palabra #1 más segura (`glosario_aprobado` 88%). Si subimos a **`Temperatura = 0.9`**, lo dejamos tirar los dados y puede elegir `invento_alucinado`. **Regla #1 para nuestro Bot:** siempre **Temperatura 0.0**.

**3️⃣ EL ORIGEN EN TRADUCCIÓN Y RAG VS. FINE-TUNING (Señalá las dos tarjetas de abajo):**
* **Izquierda (Paper de 2017):** Qué lindo dato para vos como traductora: toda esta revolución nació en 2017 porque Google quería mejorar la **traducción automática**. Inventaron el **Transformer** (la 'T' de GPT) y la **Auto-Atención (Self-Attention)**, que mira toda la oración a la vez para entender el contexto.
* **Derecha (Fine-Tuning vs RAG):** Si alguien te dice *'re-entrenemos el modelo (Fine-Tuning) con nuestros glosarios cada semana'*, le decís que no: **Fine-Tuning** sirve para enseñar *tono o estilo*, pero es carísimo y congela los datos. Para manuales que cambian cada semana usamos **RAG** (conectarlo a una biblioteca viva).

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Next-Token Prediction (Predicción del Siguiente Token):** Es el autocompletado predictivo del teclado de tu celular pero hiper-vitaminado. El modelo no 'sabe' ni 'razona': solo calcula matemáticamente qué palabra o sílaba tiene más probabilidad de seguir a la anterior.
- **Alucinación Factual (Hallucination):** Cuando la IA no tiene un dato privado de nuestra empresa pero, con tal de completar la oración de forma elocuente y sonar segura, inventa un dato falso muy bien redactado.
- **Temperatura (0.0 vs 0.9):** Es la 'perilla de creatividad vs. rigor'. En 0.0 la IA elige siempre la palabra #1 más segura (cero inventos, ideal para nuestro Bot). En 0.9 la dejamos arriesgar con palabras menos probables (sirve para lluvia de ideas, pero alucina en datos técnicos).
- **Transformer & Self-Attention (Auto-Atención):** Nacieron en Google en 2017 para traducir idiomas. En vez de leer palabra por palabra olvidándose del principio, saca una 'foto panorámica' de toda la oración y entiende que la palabra 'banco' cambia de significado si al lado dice 'plaza' o 'hipoteca'.
- **Fine-Tuning vs. RAG:** Fine-Tuning es mandarlo a un 'curso de modales y estilo' (aprende a hablar formal o en código JSON, pero no sirve para glosarios que cambian cada semana). RAG es darle acceso en vivo a los manuales actualizados de la empresa.

### ⚡ Dinámica / Interacción en Pantalla
- Compará las cajas superiores (Mito vs Realidad), hacé clic en 'Temp = 0.0' y 'Temp = 0.9' en el simulador central, y repasá las dos tarjetas inferiores.

### 🔗 Puente de Conexión → Slide 3 (Tokens: La Economía y Lingüística de la IA)
> **"Recién viste que el simulador decía 'Siguiente Token' en vez de 'Siguiente Palabra'. ¿Por qué la IA parte las palabras en pedacitos y cómo afecta eso al presupuesto mensual de nuestro Bot? Pasemos al Paso 2 en la Slide 3."**

---

## Slide 3: Tokens: La Economía y Lingüística de la IA
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 2 de 14 · Tokenización BPE · Asimetría Input/Output · Prompt Caching (-55%)

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Las empresas de IA no cobran por palabra sino por 'Tokens' (sílabas/raíces). Y con 'Prompt Caching' ahorramos más del 50% de la factura mensual.
- **👆 Qué tocar en la Slide:** 1° Izquierda: clic en Frase 1/2/3 y 'Tokenizar BPE' → 2° Derecha: prendé y apagá el botón 'Prompt Caching ACTIVO' para ver cómo baja de $225 a $101.
- **💬 La analogía ganadora:** Tokenizar es separar raíz ('locali-') y sufijo ('-zación'). Y Prompt Caching es dejar las instrucciones fijas en memoria rápida para no pagarlas de nuevo en cada pregunta.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ ES UN TOKEN Y EL SIMULADOR BPE (Tocá las frases en la tarjeta izquierda):**
Así como la luz se cobra por Kilowatt, las APIs de IA cobran por millón de **Tokens**. Mirá la frase 1 en el simulador: son **9 palabras**, pero el tokenizador **BPE** la parte en **15 bloquecitos de colores** (`La`, ` locali`, `zación`...). Como traductora te va a sonar re familiar: separa **raíces de sufijos**. Dos reglas económicas clave para vos como PM: primero, **el español gasta ~15% más de tokens que el inglés** (1.000 tokens = 750 palabras en inglés o 650 en español); segundo, **lo que el Bot escribe (Output) cuesta de 3 a 5 veces más caro que lo que lee (Input)**.

**2️⃣ DEMO DE AHORRO: PROMPT CACHING (Prendé y apagá el botón en la tarjeta derecha):**
Imaginate que nuestro Bot recibe 5.000 consultas por día, y en cada consulta le mandamos arriba las reglas fijas del sistema (1.500 tokens). Si apagás **Prompt Caching**, pagás esas reglas 5.000 veces por día (**$225 USD/mes**) y tarda **1.150 ms** en arrancar a responder (**TTFT**).

**3️⃣ REGLA DE ORO FINOPS PARA EL PRD:**
Cuando activás **Prompt Caching** (poniendo todo el texto fijo bien arriba del prompt), el servidor lo guarda en memoria rápida: **la factura cae a la mitad ($101 USD/mes)** y la respuesta arranca en apenas **380 ms**.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Token:** Es la unidad mínima que lee y cobra la IA. No es ni una letra ni una palabra entera: es un 'ladrillito o sílaba' de unas 3 o 4 letras. Regla práctica: 1.000 tokens son unas 750 palabras en inglés (o ~650 en español).
- **BPE (Byte Pair Encoding):** Es el método que usa la IA para partir palabras en tokens: separa raíces comunes ('locali-') de sufijos ('-zación'). Así con solo ~100.000 ladrillitos puede armar cualquier palabra de cualquier idioma.
- **Asimetría Input vs. Output:** Leer lo que vos le mandás (Input) es barato; pero generar la respuesta palabra por palabra (Output) le exige mucho más cálculo al servidor y cuesta entre 3 y 5 veces más caro.
- **Prompt Caching & TTFT (Time To First Token):** Prompt Caching es guardar en la 'memoria rápida' del servidor las instrucciones fijas de nuestro Bot para que te cobren entre 50% y 75% menos. TTFT es cuántos milisegundos tarda en aparecer la primera palabra de la respuesta en pantalla.

### ⚡ Dinámica / Interacción en Pantalla
- En la izquierda probá las 3 frases con el tokenizador BPE. En la derecha prendé y apagá 'Prompt Caching' y mové el slider de consultas diarias.

### 🔗 Puente de Conexión → Slide 4 (Ventanas de Contexto & El Sesgo 'Lost in the Middle')
> **"Ahora bien: si hoy existen modelos con ventanas de contexto enormes donde entran 50 manuales enteros, ¿por qué no le pegamos todos los manuales de la empresa en el prompt y nos ahorramos de construir un buscador? Pasemos al Paso 3 en la Slide 4."**

---

## Slide 4: Ventanas de Contexto & El Sesgo 'Lost in the Middle'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 3 de 14 · Context Window · Lost in the Middle · Por qué necesitamos RAG

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Aunque hoy caben 50 libros en la memoria del LLM (Ventana de Contexto), si le mandás todo junto se olvida de lo que está en la mitad ('Lost in the Middle'). Por eso necesitamos RAG.
- **👆 Qué tocar en la Slide:** 1° Señalá la analogía del escritorio (izquierda) → 2° En el simulador derecho tocá el botón rojo 'Centro Geométrico (50%)' para mostrar cómo la atención cae a 38%.
- **💬 La analogía ganadora:** Es como dictarle a alguien 40 cosas del supermercado sin papel: se acuerda las primeras 3 y las últimas 3, pero se olvida todas las del medio.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA DUDA TRAMPA EN LOS EQUIPOS (Señalá la tarjeta izquierda):**
La **Ventana de Contexto** es el escritorio o memoria de corto plazo del modelo. Hoy hay modelos donde entran 1 millón de tokens (¡50 manuales enteros!). Entonces alguien te puede preguntar: *'Che, ¿por qué no pegamos los 20 manuales de la empresa enteros en cada pregunta y listo?'*.

**2️⃣ DEMO EN VIVO: EL FENÓMENO 'LOST IN THE MIDDLE' (Tocá el botón rojo del 50% a la derecha):**
Mirá lo que descubrió la Universidad de Stanford: a la IA le pasa igual que a un humano cuando le dictás 40 productos del supermercado sin anotar. Se acuerda perfecto los primeros (**Primacy Bias**, 99%) y los últimos (**Recency Bias**, 96%), pero **se olvida de todo lo que quedó en el medio**. Fijate en el simulador: si la regla de cómo traducir *'Chargeback'* cayó en la página 25 de 50 (posición 50%), la atención cae al **38%** y el Bot la ignora.

**3️⃣ CONCLUSIÓN QUE ABRE EL MÓDULO 2:**
Por eso **no pegamos manuales enteros**. Necesitamos construir un **buscador inteligente** que rescate solo los **3 párrafos exactos** y los ponga en los extremos del prompt, donde la atención supera el 95%.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Ventana de Contexto (Context Window):** Es el tamaño del 'escritorio o memoria de corto plazo' que tiene el modelo en una consulta. Todo lo que le mandás más lo que te responde tiene que caber adentro de esa ventana.
- **Lost in the Middle (Perdido en el Medio):** Estudio de Stanford que demostró que cuando le metés muchísimo texto de golpe a un LLM (ej. 50 páginas), presta mucha atención al principio y al final, pero se olvida o ignora hasta el 60% de los datos que quedaron en la mitad.
- **Primacy Bias & Recency Bias:** Son los nombres de ese efecto: Primacy Bias es recordar perfecto lo primero que leíste (~99%), y Recency Bias es recordar perfecto lo último que leíste (~96%).

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador derecho hacé clic en 'Inicio del Prompt (8%)', luego en 'Centro Geométrico (50%)' y luego en 'Final del Prompt (94%)'.

### 🔗 Puente de Conexión → Slide 5 (Embeddings: Traduciendo Significado a Coordenadas)
> **"Así entramos al Módulo 2 de nuestro proyecto: ¿cómo construimos ese buscador inteligente que encuentra los 3 párrafos exactos aunque el usuario escriba con sinónimos? Pasemos al Paso 4 en la Slide 5: Embeddings."**

---

## Slide 5: Embeddings: Traduciendo Significado a Coordenadas
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 4 de 14 · Embeddings (1536d) · Espacio Vectorial · Similitud por Coseno

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Para buscar por 'significado' y no por letras exactas (Ctrl+F), convertimos cada frase en coordenadas de un mapa tipo GPS (Embeddings) y medimos la distancia entre ellas (Similitud por Coseno).
- **👆 Qué tocar en la Slide:** 1° Señalá los pasos 01-02-03 arriba → 2° En el mapa de abajo hacé clic en los puntos azules (0.96), verdes (0.54) y el rojo 'Automóvil Deportivo' (0.12).
- **💬 La analogía ganadora:** Un Embedding es darle una dirección de GPS a cada idea. Dos frases que significan lo mismo viven en la misma cuadra aunque usen palabras distintas.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL PROBLEMA DEL BUSCADOR CLÁSICO (Señalá las 3 tarjetas de arriba):**
El buscador viejo (`Ctrl + F`) solo busca letras idénticas: si un usuario pregunta *'¿Cómo valido términos para otros países?'* y el manual dice *'Protocolo de glosarios para localización global'*, no coinciden en ninguna palabra y da cero resultados. ¿Cómo entiende nuestro Bot que hablan de lo mismo? Con **Embeddings**: convierte el significado de cada frase en una coordenada matemática de **1536 números**, como la latitud y longitud de un GPS.

**2️⃣ DEMO EN EL MAPA: SIMILITUD POR COSENO (Hacé clic en los puntos de colores del mapa):**
Una vez que cada frase tiene su coordenada en el mapa, medimos qué tan cerca quedaron con una cuenta llamada **Similitud por Coseno** (que da una nota de `0.00` a `1.00`):
* Tocá los **puntos azules** (*Glosario Técnico `0.96`*, *Memoria de Traducción `0.89`*): como hablan de lo mismo, viven en el mismo barrio.
* Tocá el **punto rojo** (*Automóvil Deportivo*): da **`0.12`**, vive en la otra punta del mapa y el buscador lo descarta.

**3️⃣ QUÉ SE LLEVA ANABELA:**
Gracias a los Embeddings y la Similitud por Coseno, nuestro Bot encuentra la respuesta aunque el usuario use sinónimos o palabras completamente distintas al manual.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Embedding (Vector Semántico):** Es traducir el 'significado' de una frase a una lista de números (como las coordenadas de latitud y longitud de un GPS). Así la computadora puede medir matemáticamente si dos textos hablan de lo mismo aunque no usen ninguna palabra igual.
- **Espacio Vectorial (1536 Dimensiones):** En un mapa común tenés 2 dimensiones (Norte-Sur y Este-Oeste). La IA usa un mapa de 1536 dimensiones donde cada número mide un matiz distinto del concepto (si es técnico, si habla de pagos, si es de traducción, etc.).
- **Similitud por Coseno (Cosine Similarity):** Es la 'regla' que mide qué tan cerca quedaron dos frases en ese mapa, dando un puntaje entre 0.00 (nada que ver) y 1.00 (significado idéntico).

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los puntos del mapa ('Glosario Técnico', 'Memoria de Traducción', 'Deploy en Cloud', 'Automóvil Deportivo') y mostrá el puntaje en la esquina inferior derecha.

### 🔗 Puente de Conexión → Slide 6 (Bases Vectoriales & Metadata Filtering)
> **"Ahora bien: si guardamos en este mapa todos los manuales de la empresa desde el año 2020 y de todos los países, ¿qué pasa si un manual viejo de 2021 habla del mismo tema que el manual nuevo de 2026? ¡Quedan pegaditos en el mapa! Veamos en el Paso 5 (Slide 6) cómo evitamos esa trampa."**

---

## Slide 6: Bases Vectoriales & Metadata Filtering
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 5 de 14 · Vector DB (Pinecone) · Metadata Pre-Filtering · Búsqueda Híbrida

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Guardamos los vectores en una Base Vectorial (Pinecone), pero ANTES de buscar por significado filtramos por etiquetas duras (Año = 2026, Idioma = ES-LATAM) para que no se cuele un manual vencido.
- **👆 Qué tocar en la Slide:** 1° En el simulador derecho destildá 'Año: 2026' e 'Idioma: ES-LATAM' para mostrar cómo se cuela el Manual 2021 Obsoleto (0.86) → 2° Volvelos a tildar.
- **💬 La analogía ganadora:** Igual que en MercadoLibre: antes de mirar zapatillas parecidas, filtrás por tu talle (Metadatos) para no enamorarte de un par que no te entra.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL PELIGRO DE BUSCAR SOLO POR SIGNIFICADO (Señalá la caja roja izquierda):**
Todos esos vectores los guardamos en una **Base de Datos Vectorial** (como **Pinecone**). Pero ojo: si alguien pregunta *'¿Cómo se traduce Checkout y Chargeback?'* y buscamos **solo por parecido de significado**, el manual viejo de 2021 habla exactamente de eso y tiene un puntaje altísimo (`0.86`), ¡así que el Bot respondería con una regla derogada hace 5 años!

**2️⃣ DEMO EN VIVO: METADATA PRE-FILTERING (Apagá y prendé los botones del simulador derecho):**
Mirá el simulador: si apagamos los filtros, se cuelan el **Manual Legacy 2021 (`0.86`)** y la guía de EE. UU. en inglés (**`0.84`**). Cuando activamos las etiquetas (**Metadatos**) **`Idioma: ES-LATAM`** y **`Año: 2026 (Vigente)`**, la base primero tacha toda la basura vieja o de otro idioma y busca similitud solo en los documentos vigentes.

**3️⃣ POR QUÉ ESTO ES TRABAJO DE LA PM:**
Los programadores no saben cómo se clasifican los documentos del negocio; **sos vos como PM quien define en el PRD qué etiquetas (metadatos) obligatorias lleva cada archivo**.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Base de Datos Vectorial (Vector DB: Pinecone, Qdrant, pgvector):** Es la 'biblioteca especializada' donde se guardan los Embeddings (las coordenadas numéricas de los textos) para poder buscar por cercanía de significado en milisegundos.
- **Metadatos (Metadata Schema):** Son las 'etiquetas de clasificación' explícitas que le pegamos a cada documento al guardarlo: Idioma = ES-LATAM, Año = 2026, Tipo = Guía de Estilo, Sector = Pagos.
- **Metadata Pre-Filtering (Pre-filtrado por Metadatos):** Es aplicar primero un filtro duro por etiquetas (ej. 'quedate solo con manuales en Español del año 2026') ANTES de buscar por significado, para no recuperar documentos vencidos o de otro país.

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador derecho apagá las píldoras 'Idioma: ES-LATAM' y 'Año: 2026' para ver el peligro y volvelas a prender.

### 🔗 Puente de Conexión → Slide 7 (Chunking & Overlap: El Arte de Fragmentar Documentos)
> **"Ya tenemos la Base Vectorial y las etiquetas de filtrado. Nos falta resolver un último detalle antes de cargar los archivos: un manual PDF tiene 200 páginas, ¿cómo lo cortamos en pedacitos sin partir una regla por la mitad? Pasemos al Paso 6 en la Slide 7."**

---

## Slide 7: Chunking & Overlap: El Arte de Fragmentar Documentos
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 6 de 14 · Recursive Character Chunking · Chunk Overlap (15%) · Puente Semántico

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cortamos los PDFs largos en fichas chicas de ~1.000 letras (Chunks), pero repetimos un 15% del texto entre ficha y ficha (Overlap) para que ninguna regla quede cortada por la mitad.
- **👆 Qué tocar en la Slide:** 1° En el simulador derecho tocá '0%' (mostrá el cartel rojo de corte abrupto) → 2° Tocá '15%' para mostrar el puente amarillo compartido entre el Fragmento A y B.
- **💬 La analogía ganadora:** Cuando sacás una foto panorámica o fotocopiás un plano grande en dos hojas A4, dejás un bordecito repetido en las dos hojas para que no se pierda nada en la unión.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ ES CHUNKING (Señalá las dos tarjetas de la izquierda):**
No podemos convertir un PDF de 200 páginas en un solo vector porque mezclaría mil temas. Por eso lo cortamos en fichas chicas de unas 200 palabras (~1.000 caracteres) llamadas **Chunks**. Y para no cortar palabras al medio usamos **Recursive Character Chunking**, que corta respetando títulos, párrafos y puntos.

**2️⃣ DEMO EN VIVO: POR QUÉ NECESITAMOS 'OVERLAP' (Tocá 0% y luego 15% en el simulador derecho):**
Mirá qué pasa en el simulador cuando ponemos **`0% Overlap`**: la regla se corta justo al medio y el **Fragmento B** dice *'...bloqueando el lanzamiento global'*, ¡pero **perdió la primera parte que decía que eso pasa solo si hay errores P1**! Si ahora tocás **`15%`**, el sistema repite el último 15% del Fragmento A al principio del Fragmento B (el texto resaltado). Así ambos fragmentos conservan el sujeto y la condición completa.

**3️⃣ REGLA DE ORO PARA TU PRD:**
El estándar de oro que siempre pedís en tus proyectos es **Chunks de ~1.000 caracteres con 10% a 15% de Overlap**.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Chunking (Fragmentación Documental):** Es cortar un documento largo (ej. un PDF de 200 páginas) en 'fichas' o bloques pequeños de texto (llamados Chunks, de unas 200 palabras o 1.000 caracteres) antes de convertirlos en vectores.
- **Recursive Character Chunking:** En vez de cortar cada 1.000 letras a ciegas partiendo oraciones por la mitad, corta de forma inteligente respetando primero títulos, luego párrafos y luego puntos seguidos.
- **Chunk Overlap (Solapamiento del 10% al 20%):** Es repetir el final del Fragmento A al comienzo del Fragmento B (como cuando sacás una foto panorámica solapando un borde con el otro) para que ninguna condición o regla quede huérfana.

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador derecho alterná entre '0%' (corte roto) y '15%' (puente amarillo).

### 🔗 Puente de Conexión → Slide 8 (Anatomía de RAG — Fase 1: Ingestión Offline (Batch))
> **"¡Listo! Ya dominás todas las piezas sueltas. Ahora entramos al Módulo 3: vamos a enchufar todas estas piezas juntas para ver funcionar nuestro 'Enterprise Knowledge Bot' con un documento real. Pasemos al Paso 7 en la Slide 8."**

---

## Slide 8: Anatomía de RAG — Fase 1: Ingestión Offline (Batch)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Paso 7 de 14 · RAG Fase 1 · Pipeline Batch Offline · Ejemplo Real Pagos LATAM

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** RAG tiene 2 momentos. Esta Fase 1 es 'preparar la biblioteca antes de abrir': subimos el PDF de Pagos LATAM, lo cortamos en Chunks, calculamos sus Embeddings y lo guardamos en Pinecone.
- **👆 Qué tocar en la Slide:** 1° Tocá el botón verde '▶ Simular Pipeline Batch' arriba a la derecha → 2° Señalá cómo cambia el ejemplo real abajo en verde (de PDF a Ficha #14 a Vector a Pinecone).
- **💬 La analogía ganadora:** Fase 1 es ordenar y etiquetar la despensa del restaurante a la mañana antes de que entren los clientes.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA DIVIDIMOS EN 2 FASES (Concepto general):**
Acá armamos la máquina completa de **RAG**, que siempre se divide en dos momentos: **Fase 1 (esta Slide 8)** es preparar y ordenar la biblioteca en segundo plano antes de abrir, y **Fase 2 (la Slide 9)** es responderle al usuario en vivo.

**2️⃣ DEMO PASO A PASO CON NUESTRO ARCHIVO REAL (Tocá '▶ Simular Pipeline Batch' y mirá la línea verde de abajo):**
* **Paso 1 (Documentos / Ground Truth):** Subimos el manual oficial `Guia_Estilo_Pagos_LATAM_2026.pdf` (42 páginas) y limpiamos encabezados.
* **Paso 2 (Chunking):** Lo cortamos en fichas de 1.000 caracteres con 15% de overlap. Mirá abajo la **Ficha #14**: *'Chargeback se traduce oficialmente como Contracargo'*.
* **Paso 3 (Embedding):** Convertimos esa Ficha #14 en su coordenada matemática de 1536 números.
* **Paso 4 (Vector DB):** La guardamos en **Pinecone** con sus etiquetas (`lang: ES-LATAM`, `year: 2026`, `page: 8`). ¡Nuestra biblioteca ya está lista!

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fase 1: Ingestión Offline (Batch Pipeline):** Es 'preparar la biblioteca antes de que entren los lectores'. Corre en segundo plano cada vez que subimos o actualizamos manuales, sin ningún usuario esperando en el chat.
- **Ground Truth (Fuente Única de Verdad):** Son los documentos oficiales validados por humanos (en nuestro ejemplo: 'Guia_Estilo_Pagos_LATAM_2026.pdf') que tomamos como verdad absoluta para alimentar al bot.
- **Upsert en Vector DB:** Término que combina 'Update' (actualizar) + 'Insert' (insertar): guarda los vectores nuevos en Pinecone y pisa los viejos para que la biblioteca esté siempre al día.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en '▶ Simular Pipeline Batch' y leé con ella el recuadro inferior verde que muestra cómo se transforma el PDF en cada uno de los 4 pasos.

### 🔗 Puente de Conexión → Slide 9 (Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live))
> **"Ahora que la Ficha #14 ya está guardada con sus coordenadas y etiquetas en Pinecone, abrimos el chat a los empleados: un traductor entra y pregunta '¿Cómo se traduce Chargeback?'. Pasemos al Paso 8 en la Slide 9 para ver qué ocurre en menos de 2 segundos."**

---

## Slide 9: Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 8 de 14 · RAG Fase 2 · Top-K Retrieval · Prompt Aumentado + Cita

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Fase 2 es en vivo (< 2 seg): entra la pregunta por 'Chargeback', buscamos los 3 mejores párrafos en Pinecone, se los pegamos en secreto al LLM (Prompt Aumentado) y responde 'Contracargo (pág. 8)'.
- **👆 Qué tocar en la Slide:** 1° Tocá '▶ Simular Consulta Live' → 2° Señalá la línea azul inferior con el ejemplo de 'Chargeback' → 3° Tocá '🔍 Ver Diagrama Completo RAG' para mostrar el mapa entero.
- **💬 La analogía ganadora:** El usuario cree que habló directo con el LLM, pero nuestro servidor le abrió el libro en la página 8 antes de que responda.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ENTRÓ UNA PREGUNTA EN VIVO (Tocá '▶ Simular Consulta Live' y mirá la línea azul abajo):**
Un traductor abre nuestro Bot y pregunta: *'¿Cómo se traduce Chargeback en la app?'*. Mirá lo que pasa en menos de 2 segundos:
* **Paso 1 (Pregunta a Vector):** Convertimos su pregunta en coordenadas de GPS (1536 números).
* **Paso 2 (Recuperación Top-K = 3):** Vamos a Pinecone, filtramos por `ES-LATAM` y `2026`, y traemos los 3 fragmentos más cercanos. ¡Aparece nuestra **Ficha #14 (pág. 8)** con un puntaje altísimo de **`0.91`**!

**2️⃣ LA MAGIA: EL PROMPT AUMENTADO (Paso 3):**
El usuario no lo ve, pero nuestro servidor arma en secreto un **Prompt Aumentado**: arriba pone la regla (*'Respondé SOLO con estos fragmentos'*), en el medio pega la Ficha #14 de la página 8, y abajo pone la pregunta.

**3️⃣ RESPUESTA SIN ALUCINAR (Paso 4):**
El LLM lee esa ficha con **Temperatura 0.0** y responde: *'Se traduce oficialmente como **Contracargo** [Fuente: Guía Pagos LATAM 2026, pág. 8]'*.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fase 2: Consulta en Tiempo Real (Online Inference):** Es lo que ocurre en menos de 2 segundos desde que el usuario aprieta 'Enviar' en el chat hasta que recibe la respuesta con la página exacta del manual.
- **Top-K Retrieval (ej. Top-K = 3):** Es pedirle a la base vectorial que nos devuelva únicamente los 'K' fragmentos más parecidos a la pregunta (en nuestro Bot, los 3 mejores párrafos).
- **Prompt Aumentado (Context Injection):** Es el corazón de RAG: antes de mandarle la pregunta del usuario al LLM, el servidor le 'inyecta' en secreto los 3 párrafos oficiales encontrados en Pinecone y le ordena responder solo con esa evidencia.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '▶ Simular Consulta Live' siguiendo el ejemplo azul de abajo y luego abrí '🔍 Ver Diagrama Completo RAG'.

### 🔗 Puente de Conexión → Slide 10 (Taller Práctico: El Mock PRD de tu Chatbot RAG)
> **"¡Acabás de ver el ciclo completo! Ahora, como Product Manager de este proyecto, ¿cómo volcás todas las decisiones que tomamos entre la Slide 2 y la Slide 9 en un documento formal para tu equipo de ingeniería? Pasemos al Paso 9 en la Slide 10: el Mock PRD."**

---

## Slide 10: Taller Práctico: El Mock PRD de tu Chatbot RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 9 de 14 · Mock PRD · Definition of Done (DoD) · Trazabilidad Técnica

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Acá juntamos todo lo que vimos en las slides anteriores adentro del entregable real de una PM: el PRD y la lista de criterios de aprobación (Definition of Done).
- **👆 Qué tocar en la Slide:** 1° Señalá en la tarjeta izquierda las fuentes y metadatos (cita entre paréntesis la Slide donde se vio) → 2° Señalá la tarjeta derecha (DoD) → 3° Mostrá el botón 'Abrir App Mock PRD'.
- **💬 La analogía ganadora:** Un PM sin base técnica escribe 'hacer un chatbot que ande bien'; vos escribís el plano exacto con Chunking 1000/15%, Top-3, Temp 0.0 y Score >= 0.75.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ DE LA TEORÍA A TU ENTREGABLE COMO PM:**
Cuando liderás un proyecto de IA no programás el código, pero escribís el documento más importante del equipo: el **PRD (Documento de Requisitos de Producto)** y su **Definition of Done (DoD)**. Fijate cómo cada renglón de esta slide resume lo que acabamos de aprender.

**2️⃣ TARJETA IZQUIERDA (Alcance y Datos):**
* **Ground Truth:** Manuales y glosarios oficiales (visto en Slide 8).
* **Regla de Respuesta:** Temperatura `0.0` (Slide 2) y cita obligatoria a la página (Slide 9).
* **Metadatos:** `idioma`, `año_vigencia`, `modulo` (Slide 6).

**3️⃣ TARJETA DERECHA (Tu Contrato de Calidad / DoD):**
* **Chunking:** `1.000 caracteres` con `15% de Overlap` (Slide 7) y `Prompt Caching` (Slide 3).
* **Los 3 Blindajes que veremos ahora en el Módulo 4:** Contrato privado **Zero-Retention SLA** (Slide 11), freno anti-inventos en **Score >= 0.75** (Slide 12) y aprobar el examen del **Golden Dataset con >= 90%** (Slide 13).

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **PRD (Product Requirements Document):** Es el documento madre que escribe el Product Manager para definir qué producto se va a construir, con qué fuentes de datos, qué filtros y bajo qué reglas de calidad.
- **Definition of Done (DoD / Definición de Terminado):** Es el contrato de calidad con los programadores y QA: la lista de parámetros exactos (Chunking, Overlap, Score >= 0.75, SLA, Evals >= 90%) que deben cumplirse para aprobar el lanzamiento.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las dos tarjetas mostrando que cada ítem indica entre paréntesis en qué Slide se aprendió, y señalá los botones de abajo.

### 🔗 Puente de Conexión → Slide 11 (Gobernanza de IA, Privacidad & Prevención de Data Leakage)
> **"Entremos entonces al Módulo 4 (Blindaje Corporativo) para completar esos 3 requisitos finales de nuestro PRD: empezamos en el Paso 10 (Slide 11) con Privacidad y Gobernanza Legal."**

---

## Slide 11: Gobernanza de IA, Privacidad & Prevención de Data Leakage
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 10 de 14 · Data Leakage · Enterprise SLA · Zero-Data Retention · PII Masking

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Nunca usamos chats gratuitos porque guardan tus datos para entrenar modelos públicos (Data Leakage). Usamos API Corporativa con Retención Cero (Zero-Data Retention) y enmascarado de datos personales (PII Masking).
- **👆 Qué tocar en la Slide:** 1° Compará caja Roja vs Verde → 2° En el simulador de abajo alterná entre '🚨 Chat Gratuito' (expone Pfizer y el email) y '🛡️ API Enterprise SLA' (oculta [CLIENT_ORG] y [EMAIL_REDACTED]).
- **💬 La analogía ganadora:** PII Masking es pasarle corrector líquido a los nombres reales y mails antes de mandar la hoja a la API.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL RIESGO LEGAL: DATA LEAKAGE (Señalá la tarjeta roja):**
Si un empleado pega un glosario confidencial de un cliente en el ChatGPT gratuito o común, esos textos quedan guardados y se usan para entrenar futuros modelos públicos. Eso se llama **Data Leakage (Fuga de Datos)** y viola contratos de confidencialidad (**NDA**) y normas **ISO 27001 / GDPR**.

**2️⃣ LA SOLUCIÓN CORPORATIVA (Señalá la tarjeta verde):**
En empresas nos conectamos por **API Corporativa** bajo un contrato llamado **Enterprise SLA con Zero-Data Retention (Retención Cero)**: el proveedor procesa la consulta en memoria temporal, responde y la borra en el acto, con **0% de entrenamiento sobre tus datos**.

**3️⃣ DEMO EN VIVO: PII MASKING (Tocá los dos botones del simulador de abajo):**
Mirá la consulta confidencial: *'Lanzamiento Pfizer Q4 — contacto: ana.perez@pfizer.com'*. En el botón rojo viaja desnuda. En el botón verde (**Enterprise SLA**), antes de salir pasa por **PII Masking**, que tapa el cliente y el mail (`[CLIENT_ORG]` y `[EMAIL_REDACTED]`). Doble blindaje legal.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Data Leakage (Fuga de Datos / Propiedad Intelectual):** Es el riesgo de que información confidencial de la empresa o de un cliente bajo NDA termine filtrada afuera por enviarla a cuentas gratuitas o públicas de IA.
- **Enterprise SLA & Zero-Data Retention (Retención Cero):** Es el contrato corporativo con OpenAI, Anthropic, Microsoft o AWS donde se comprometen legal y técnicamente a procesar tus textos en memoria temporal y borrarlos en el acto, sin usarlos jamás para entrenar sus modelos públicos.
- **PII Masking (Enmascaramiento de Datos Personales):** PII significa 'Información Personal Identificable' (nombres, DNI, emails). El Masking es un filtro automático que reemplaza esos datos por etiquetas ('[EMAIL_REDACTED]') antes de que salgan hacia la API.

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador inferior alterná entre '🚨 Enviar por Chat Gratuito' y '🛡️ Enviar por API Enterprise SLA (Zero-Retention)'.

### 🔗 Puente de Conexión → Slide 12 (Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer')
> **"Ya blindamos legalmente los datos que entran. Ahora vamos al Paso 11 (Slide 12): ¿qué pasa si un empleado le hace al Bot una pregunta que NO está en ningún manual? ¿Cómo logramos que el Bot se calle en vez de inventar?"**

---

## Slide 12: Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 11 de 14 · Confidence Threshold (0.75) · Guardrail Determinista · Fallback Seguro

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Le ponemos una nota mínima de similitud (0.75) a Pinecone. Si lo que encontró tiene menos de 0.75, el servidor bloquea la llamada al LLM (gasta $0) y devuelve una respuesta fija diciendo 'No tengo información verificada'.
- **👆 Qué tocar en la Slide:** 1° En el simulador derecho tocá 'Caso 1 (Score 0.91)' → 2° Tocá 'Caso 3 (Score 0.34: salario del Director)' y mostrá cómo se prende la caja roja BLOQUEADO con el Fallback Seguro.
- **💬 La analogía ganadora:** Es un patovica en la puerta del LLM: si el párrafo del manual no tiene al menos 7,50 puntos de parecido con la pregunta, ni siquiera te deja pasar a hablar con el LLM.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CÓMO ENSEÑARLE AL BOT A DECIR 'NO SÉ':**
¿Qué pasa si alguien le pregunta a nuestro Bot de traducción: *'¿Cuál es el salario del Director de Finanzas?'*? Si dejáramos pasar esa pregunta al LLM, intentaría inventar algo. Por eso ponemos en el servidor una barrera matemática llamada **Confidence Threshold (Umbral de Confianza)** en **`0.75`**.

**2️⃣ DEMO EN VIVO EN EL SIMULADOR (Tocá Caso 1 y luego Caso 3 a la derecha):**
* **Caso 1 (`Score 0.91` — Chargeback):** Como `0.91` supera el umbral de `0.75`, se prende la caja verde (**AUTORIZADO**), llama al LLM y responde *'Contracargo (pág. 8)'*.
* **Caso 3 (`Score 0.34` — Salario del Director):** Como en los manuales de traducción no hay nada parecido, el puntaje da `0.34` (menor a `0.75`). Se prende la caja roja (**BLOQUEADO**).

**3️⃣ EL CORTOCIRCUITO Y AHORRO:**
Cuando bloquea, **ni siquiera despierta al LLM (ahorra 100% de tokens)** y responde con el **Fallback Seguro**: *'No dispongo de información oficial verificada sobre esa consulta en los manuales vigentes'*.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Confidence Threshold (Umbral de Confianza Semántica, ej. 0.75):** Es la 'nota mínima de aprobación' que le exigimos al buscador vectorial (Pinecone). Si el párrafo más parecido del manual tiene una nota menor a 0.75, asumimos que el manual no habla de ese tema.
- **Cortocircuito en Backend (Deterministic Guardrail):** Si la nota no llega a 0.75, nuestro servidor frena ahí mismo y ni siquiera llama al LLM. Así es 100% imposible que alucine y además ahorramos el 100% de los tokens de generación.
- **No-Answer Fallback (Respuesta de Abstención Segura):** Es el mensaje educado y fijo que devuelve el sistema cuando se activa el freno ('No dispongo de información oficial verificada sobre esa consulta en los manuales vigentes').

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador derecho hacé clic en el Caso 1 (0.91), Caso 2 (0.78) y Caso 3 (0.34), y mové la barra deslizante alrededor de 0.75.

### 🔗 Puente de Conexión → Slide 13 (Evaluación de Calidad: Golden Dataset & Evals en CI/CD)
> **"Ya tenemos el Bot armado, blindado legalmente y con su freno anti-alucinaciones en 0.75. Nos queda el último requisito del PRD antes de salir a producción: ¿cómo probamos automáticamente que el Bot responde bien 100 preguntas reales? Vamos al Paso 12 en la Slide 13."**

---

## Slide 13: Evaluación de Calidad: Golden Dataset & Evals en CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 12 de 14 · Golden Dataset · Evals en CI/CD · Context Adherence >= 90%

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Antes de subir cualquier cambio a producción, un robot le toma un examen automático de 100 preguntas reales (Golden Dataset). Si saca menos de 90% de fidelidad, bloquea la subida (CI/CD Gate).
- **👆 Qué tocar en la Slide:** 1° Señalá las 3 tarjetas de arriba → 2° En el simulador de abajo mirá la 'Muestra Caso #14 (Chargeback)' y alterná entre '✅ PR #42' (PASS) y '❌ PR #43' (FAIL: Alucinación → DEPLOY BLOCKED).
- **💬 La analogía ganadora:** El Golden Dataset es la plantilla de respuestas correctas del examen; el pipeline CI/CD es el profesor automático que corrige las 100 preguntas en 2 minutos antes de dejar salir al Bot.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL PROBLEMA DE TOCAR EL PROMPT:**
En IA pasa algo loco: un programador toca un renglón para que el Bot sea más simpático, ¡y sin darse cuenta arruina cómo respondía las reglas técnicas! Como nadie puede probar 100 preguntas a mano todos los días, vos como PM armás con las expertas una planilla de **100 preguntas reales con su respuesta ideal certificada**: el **Golden Dataset (Dataset de Oro)**.

**2️⃣ DEMO EN VIVO: EVALS EN CI/CD (Tocá PR #42 y PR #43 abajo):**
Cada vez que alguien quiere subir un cambio, el sistema le toma las 100 preguntas automáticamente (mirá la **Muestra Caso #14: '¿Traducción de Chargeback?'**):
* **En PR #42 (verde):** El Bot responde *'Contracargo (pág. 8) [PASS]'*, saca **96.4%** de fidelidad (**Context Adherence**) y sale **`DEPLOY APPROVED ✅`**.
* **En PR #43 (rojo):** Alguien rompió el guardrail, el Bot alucina *'Reverso bancario (sin cita)'*, la nota cae a **74%** y salta **`DEPLOY BLOCKED 🛑`**.

**3️⃣ MONITOREO EN VIVO (Tarjeta 3):**
Y una vez en la calle, miramos en **Langfuse** cuánto tarda, cuánto gasta y los votos de los usuarios.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Golden Dataset (Conjunto de Datos de Oro):** Es una planilla con 50 a 100 preguntas reales (incluyendo el Caso #14 de 'Chargeback' y preguntas trampa) con sus 'respuestas ideales certificadas' por los expertos humanos del negocio.
- **Evals en CI/CD (Evaluación Continua Automatizada):** Cada vez que un programador quiere subir un cambio al código (un Pull Request), el pipeline le toma automáticamente las 100 preguntas del Golden Dataset al Bot. Si saca menos de 90%, bloquea el despliegue.
- **Context Adherence / Faithfulness (Fidelidad al Contexto):** Métrica que mide qué porcentaje de las respuestas del Bot salieron fielmente de los manuales oficiales sin inventar nada.
- **Observabilidad LLMOps (Langfuse / Arize):** Es el tablero de control en vivo que monitorea en producción cuánto tarda cada respuesta, cuántos dólares consume por día y si algún usuario votó con pulgar abajo (👎).

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador inferior alterná entre '✅ PR #42' y '❌ PR #43' señalando cómo cambia el Caso #14 y el cartel final (DEPLOY APPROVED vs DEPLOY BLOCKED).

### 🔗 Puente de Conexión → Slide 14 (Roleplay: Defensa Técnica en Entrevistas IT)
> **"¡Con esto completamos de punta a punta el diseño y blindaje de nuestro Bot! Ahora pasemos al Paso 13 (Slide 14): ¿cómo defendés estas decisiones técnicas cuando te las preguntan en una entrevista laboral?"**

---

## Slide 14: Roleplay: Defensa Técnica en Entrevistas IT
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Paso 13 de 14 · Roleplay Ejecutivo · RAG vs Fine-Tuning · FinOps & Escalabilidad

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Practicamos las 2 preguntas clásicas de entrevista usando exactamente nuestro Bot: 1) ¿Por qué RAG y no Fine-Tuning? 2) ¿Cómo cuidás la factura de tokens si escala a 50.000 usuarios?
- **👆 Qué tocar en la Slide:** 1° Leé la Pregunta 1 y tocá '👁️ Ocultar / ✨ Revelar' para ver los 3 pilares → 2° Hacé lo mismo con la Pregunta 2.
- **💬 La analogía ganadora:** Pregunta 1: Fine-Tuning enseña modales (forma), RAG consulta el libro actualizado (hechos). Pregunta 2: Ahorramos con Prompt Caching, Umbral 0.75 y Top-3 Chunks.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ESCENARIO 1: LA TRAMPA DEL FINE-TUNING (Tarjeta superior):**
* **Te preguntan:** *'¿Por qué no hacemos Fine-Tuning del modelo cada semana para cargarle los glosarios nuevos?'*
* **Tus 3 puntos ganadores:**
  1. **Forma vs. Hechos:** El Fine-Tuning sirve para enseñar tono o formato JSON, pero congela los conocimientos y sigue alucinando.
  2. **Costo inviable:** Re-entrenar cada semana es lento, carísimo y no permite citar la página.
  3. **Solución RAG:** Con **RAG + Pinecone** actualizamos fichas en segundos, filtramos por metadatos de 2026 y citamos la fuente.

**2️⃣ ESCENARIO 2: ESCALABILIDAD Y COSTOS FINOPS (Tarjeta inferior):**
* **Te preguntan:** *'Si pasamos de 100 a 50.000 usuarios, ¿cómo evitás que la factura de tokens nos funda?'*
* **Tus 3 capas de ahorro (todo lo que vimos hoy):**
  1. **Prompt Caching (Slide 3):** Ahorra +50% en las instrucciones fijas del sistema.
  2. **Cortocircuito en < 0.75 y Caché Semántica (Slide 12):** No llamamos ni pagamos al LLM en preguntas repetidas o fuera de tema.
  3. **Top-3 Chunks con Metadata Pre-Filtering (Slides 6 y 9):** Inyectamos solo 3 fichas de 1.000 letras en vez de manuales enteros.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **Qué evalúan en la Pregunta 1 (RAG vs. Fine-Tuning):** Quieren ver si caés en la trampa de principiante de pedir 're-entrenar el modelo' cada semana (carísimo y propenso a alucinar) o si sabés defender la arquitectura RAG con Base Vectorial que construimos hoy.
- **Qué evalúan en la Pregunta 2 (Escalabilidad FinOps):** Quieren ver si cuidás el margen económico del producto combinando los 3 ahorros que implementamos en el Bot: Prompt Caching (Slide 3), Metadata Pre-Filtering + Top-3 (Slides 6 y 9) y Cortocircuito en < 0.75 (Slide 12).

### ⚡ Dinámica / Interacción en Pantalla
- Usá el botón '👁️ Ocultar / ✨ Revelar' en ambas preguntas para que Anabela intente responder primero con sus palabras y luego vea la respuesta modelo.

### 🔗 Puente de Conexión → Slide 15 (Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager)
> **"Pasemos a nuestra última diapositiva, el Paso 14 en la Slide 15, para repasar el mapa completo de lo que construiste hoy y cómo se conecta con los Agentes Autónomos de la Sesión 3."**

---

## Slide 15: Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Paso 14 de 14 · Recorrido Completo del Bot · Entregables S2 · Puente a Sesión 3 (Agentes ReAct)

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cerramos repasando los 4 módulos del Bot que diseñamos hoy (tarjeta izquierda), las 3 apps prácticas para usar en la semana (abajo) y el salto de la Sesión 3: pasar de un Bot que solo lee (RAG) a un Agente que ejecuta acciones (ReAct).
- **👆 Qué tocar en la Slide:** 1° Señalá el resumen de los 4 módulos (izquierda) → 2° Señalá la evolución hacia Sesión 3 (derecha) → 3° Mostrá los 3 botones de abajo (Actividad Práctica, App Mock PRD y Glosario).
- **💬 La analogía ganadora:** Hoy construimos el 'Cerebro que lee y responde' (RAG); en la Sesión 3 le vamos a dar 'Manos para actuar en otros sistemas' (Agentes con Tool Calling).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ RESUMEN DE TU LOGRO DE HOY (Tarjeta izquierda):**
¡Felicitaciones, Anabela! Empezamos con una hoja en blanco y diseñaste completo nuestro **Enterprise Knowledge & Localization Bot**:
* **Módulo 1:** Domaste el motor con **Temperatura 0.0**, **Tokens BPE**, **Prompt Caching** y evitaste el **Lost in the Middle**.
* **Módulo 2:** Armaste el buscador con **Embeddings (1536d)**, **Pinecone + Metadata Filtering** y **Chunking con 15% Overlap**.
* **Módulo 3:** Conectaste la **Fase 1 y Fase 2 de RAG** y escribiste el **PRD con Definition of Done**.
* **Módulo 4:** Lo blindaste con **Enterprise SLA**, **Umbral 0.75** y **Golden Dataset en CI/CD**.

**2️⃣ TUS 3 HERRAMIENTAS PARA LA SEMANA (Botones de abajo):**
Tenés la **Actividad Práctica S2** (4 misiones interactivas), la **App Generadora de Mock PRD** y el **Glosario Completo S2**.

### 💡 Traducción "En Criollo" de los Términos Técnicos (Para explicar fácil a Anabela)
- **IA Consultiva (RAG Pasivo — Lo que construimos en la Sesión 2):** Es el 'Cerebro que lee': nuestro Bot busca en los manuales privados de Pinecone y responde dudas con total precisión y cita verificable, pero no ejecuta acciones por su cuenta en otros sistemas.
- **IA Agéntica (Agentes con ReAct y Tool Calling — Lo que veremos en la Sesión 3):** Son las 'Manos que actúan': además de leer el manual, el agente puede tomar decisiones paso a paso y conectarse por API a otros programas (ej. actualizar el glosario en el sistema, crear un ticket en Jira o enviar un mail con permiso humano).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las dos tarjetas de síntesis y mostrale los 3 botones inferiores para practicar durante la semana.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 3: Hoy construimos el **'Cerebro consultivo'** de la IA (nuestro Bot lee manuales privados y responde sin alucinar, pero todavía tiene 'las manos atadas': no puede tocar botones ni ejecutar tareas en otros programas). En la **Sesión 3** le vamos a dar **'Manos y Autonomía'**: vamos a ver cómo funcionan los **Agentes de IA (arquitectura ReAct)** que razonan paso a paso, usan herramientas externas por API (**Tool Calling**) y piden autorización humana antes de ejecutar una acción crítica (**Human-in-the-Loop**)."**

---

