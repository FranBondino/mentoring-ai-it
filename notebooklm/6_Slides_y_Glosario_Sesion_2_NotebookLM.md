# Sesión 2: Diapositivas Interactivas y Glosario Completo — IA Generativa, LLMs y Arquitectura RAG

**Mentoría Estratégica en Gestión de Producto, Proyectos IT e Inteligencia Artificial**
**Alumna:** Anabela Hotian

---

## Parte I: Síntesis Estructurada de las 15 Diapositivas (con Simuladores React 18)

### Slide 1: Portada — IA Generativa & Arquitectura RAG
* **Objetivo de la Sesión:** Estructurar propuestas estratégicas de IA Generativa y dominar la arquitectura RAG (*Retrieval-Augmented Generation*) conectada a datos privados.
* **4 Módulos de la Sesión:**
  1. **01. Límites Físicos (Slides 2–4):** Next-Token Prediction, Temperatura, Tokenización BPE, Prompt Caching y sesgo *Lost in the Middle*.
  2. **02. Bloques de RAG (Slides 5–7):** Embeddings (1536 dimensiones), Similitud por Coseno, Bases Vectoriales con Metadata Filtering y Chunking con Overlap.
  3. **03. Taller Práctico (Slides 8–10):** Pipeline RAG en 2 Fases (Ingestión Batch vs. Consulta en Tiempo Real) y especificación del Mock PRD (*Enterprise Knowledge Bot*).
  4. **04. Gobernanza & QA (Slides 11–15):** Contratos Enterprise SLA (*Zero-Data Retention*), Umbral Anti-Alucinación (`0.75`), Golden Dataset en CI/CD y Roleplay de Entrevista.

### Slide 2: El Origen y Motor de los LLMs
* **El Mito ("Cerebro Mágico"):** Creer que la IA razona conscientemente o que posee una base de datos omnisciente con las normativas privadas y glosarios de tu compañía.
* **La Realidad (Transformers & Next-Token Prediction):** Es un motor probabilístico que calcula matemáticamente cuál es el siguiente token estadísticamente más probable. Ante un vacío de datos privados, inventa una respuesta verosímil (**Alucinación Factual**).
* **Simulador React de Temperatura (`T = 0.0` vs. `T = 0.9`):**
  * `T = 0.0` (Determinista / RAG): Elige siempre el token de máxima probabilidad (`glosario_aprobado` 88%), garantizando consistencia factual.
  * `T = 0.9` (Creativa): Aplana la distribución de probabilidad y habilita respuestas creativas pero riesgosas para datos corporativos.
* **Hitos Fundacionales:**
  * **Paper *"Attention Is All You Need"* (Google, 2017):** Nacido para resolver la Traducción Automática, creó la arquitectura **Transformer** (la "T" de GPT) y el mecanismo de **Self-Attention**, que procesa toda la oración en paralelo ponderando cómo cada palabra modifica a las demás.
  * **Fine-Tuning (Estilo) vs. RAG (Conocimiento):** El Fine-Tuning ajusta tono o formato (ej. JSON), pero no sirve para cargar datos que cambian semanalmente. Para conectar manuales y glosarios privados en vivo sin alucinar, usamos **RAG**.

### Slide 3: Tokens — La Economía de la IA y FinOps
* **Tokenización BPE (*Byte Pair Encoding*):** Divide palabras en raíces conceptuales (`locali`) y sufijos (`zación`). Ejemplo: *"La localización automática con IA optimiza glosarios técnicos globales."* (9 palabras = 15 tokens BPE).
* **Regla de Conversión y Facturación Asimétrica:** ~1.000 tokens equivalen a ~750 palabras en inglés (~650 en español). Los tokens de salida (**Output**) cuestan de 3x a 5x más que los de entrada (**Input**).
* **Prompt Caching:** Almacena en caché de servidor los prefijos estáticos del System Prompt, reduciendo el costo de tokens de entrada entre un **50% y 75%** y acelerando el TTFT (*Time To First Token*).

### Slide 4: Ventanas de Contexto & El Fenómeno "Lost in the Middle"
* **Ventana de Contexto:** Memoria RAM de corto plazo del LLM en una llamada de API. Aunque existan ventanas de 128k a 1M de tokens, inyectar manuales completos degrada la precisión, dispara la latencia y multiplica costos.
* **Curva en "U" (*Lost in the Middle*):** Los LLMs retienen con ~99% de precisión la información ubicada al **inicio** (*Primacy Bias*) y al **final** (*Recency Bias*) del prompt, pero sufren una caída al ~38%–40% en el **centro geométrico**.

### Slide 5: Embeddings — Traducción Semántica
* **De Texto a Coordenadas (1536 Dimensiones):** Un modelo de Embeddings convierte frases en vectores numéricos que capturan su significado conceptual.
* **Similitud por Coseno:** Conceptos afines (*"Glosario Técnico"*, *"Memoria de Traducción"*, *"Localización Software"*) quedan con score alto (`0.89` a `0.96`), mientras conceptos ajenos (*"Automóvil Deportivo"*) quedan aislados (`0.12`).

### Slide 6: Bases Vectoriales & Metadata Filtering
* **Persistencia Semántica (Pinecone / Qdrant / pgvector):** Indexan millones de vectores para búsquedas conceptuales en milisegundos.
* **Metadata Pre-Filtering:** Aplica primero un filtro duro estructurado (`Idioma: ES-LATAM`, `Año: 2026`, `Doc: Guía de Estilo`) antes de calcular la similitud por coseno, descartando manuales obsoletos (ej. 2021) o de otra región.

### Slide 7: Chunking & Overlap (Estrategias de Fragmentación)
* **Recursive Character Chunking:** Divide documentos largos en fragmentos manejables (ej. 500 tokens / 1.000 caracteres) respetando encabezados, párrafos y oraciones.
* **Overlap (Solapamiento del 10%–15%):** Duplica el tramo final del Fragmento A al inicio del Fragmento B como un **puente semántico** para que ninguna regla condicional o tabla quede cortada por la mitad.

### Slide 8: Anatomía de RAG — Fase 1: Ingestión (Batch Offline)
1. **Documentos (Ground Truth):** Extracción y limpieza de PDFs, Markdowns y glosarios oficiales.
2. **Chunking:** Fragmentación de 1.000 caracteres con 15% de Overlap.
3. **Embedding:** Vectorización en 1536 dimensiones.
4. **Vector DB:** Guardado en Pinecone junto con etiquetas de metadatos JSON.

### Slide 9: Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Online)
1. **Pregunta del Usuario:** Vectorización de la consulta en ~35 ms.
2. **Recuperación:** Pre-filtrado por metadatos + búsqueda Top-K por Similitud de Coseno (`Score >= 0.75`).
3. **Prompt Aumentado:** Inyección de los 3 fragmentos oficiales en el System Prompt ("Examen a Libro Abierto").
4. **LLM & Cita Verificable:** Generación con `Temperatura = 0.0` y cita obligatoria a la fuente documental.

### Slide 10: Taller — El Mock PRD (Enterprise Knowledge Bot)
* Traducción de decisiones técnicas en un **PRD** formal con **Definition of Done (DoD)**: Chunking `1000 chars / 15% overlap`, Vector DB `Pinecone (1536d) | Score >= 0.75`, `Zero-Retention SLA` y `Evals >= 90%`.

### Slide 11: Gobernanza de IA & Prevención de Data Leakage
* **Peligro (Chat Público / Licencias Consumer):** Los prompts y documentos subidos pueden ser retenidos y usados para re-entrenar modelos comerciales públicos (*Data Leakage*), violando NDAs y GDPR.
* **Estándar Corporativo (API bajo Enterprise SLA con Zero-Data Retention):** Garantía contractual y técnica de retención cero, prohibición de re-entrenamiento y *PII Masking*.

### Slide 12: Mitigación de Alucinaciones — Umbral de Confianza (`0.75`)
* **Confidence Threshold (`0.75`):**
  * Si `Score >= 0.75`: Envía los fragmentos al LLM y responde citando la fuente.
  * Si `Score < 0.75`: Cortocircuita la llamada al LLM y activa el **Fallback No-Answer Seguro** (*"No dispongo de información oficial verificada sobre ese punto en la base documental"*).

### Slide 13: Evaluación de Calidad — Golden Dataset & Evals en CI/CD
* **1. Golden Dataset:** 50 a 100 preguntas reales y casos borde con respuestas ideales certificadas por expertos (*Ground Truth*).
* **2. Evals en CI/CD (GitHub Actions):** Ejecución automática ante cada Pull Request; bloquea el deploy si el *Context Adherence* cae por debajo del **90%**.
* **3. Observabilidad Activa (Langfuse / Arize):** Monitoreo de latencia P95, costo en USD por sesión y deriva semántica en producción.

### Slide 14: Roleplay — Defensa Técnica en Entrevistas IT
* **Pregunta 1 (CTO — ¿Por qué RAG y no Fine-Tuning para glosarios semanales?):** Fine-Tuning = forma/estilo pero congela hechos y alucina; re-entrenar semanalmente es inviable; RAG + Vector DB actualiza en segundos con cita verificable.
* **Pregunta 2 (Head of Product — ¿Cómo escalar usuarios sin fundir el presupuesto de API?):** 1) *Prompt Caching* (-50% a -75% en Input); 2) *Caché Semántica* + cortocircuito `< 0.75`; 3) *Top-3 Chunks* pre-filtrados + *Rate Limits*.

### Slide 15: Tu Ruta y Valor como IT Product/Project Manager
* Evolución del programa: **Sesión 2** = IA Consultiva con RAG (El "Cerebro" a libro abierto) → **Sesión 3** = Sistemas Agénticos y ReAct (Las "Manos" que ejecutan APIs con *Human-in-the-Loop*) → **Sesión 4** = Cloud, LLMOps y Simulacro Ejecutivo.

---

## Parte II: Tablas Comparativas Clave del Glosario S2

| Criterio de Producto | Prompt Engineering + Caching | RAG (Retrieval-Augmented Generation) | Fine-Tuning (Re-entrenamiento) |
| :--- | :--- | :--- | :--- |
| **Objetivo Principal** | Definir rol, formato de salida (JSON) y ejemplos fijos. | Conectar el LLM con **conocimiento privado o cambiante** sin alucinar. | Enseñar un **tono, estilo** o estructura muy específica. |
| **Frecuencia de Cambio** | Estático en el System Prompt (*Prompt Caching*). | **Alta (Tiempo Real / Diaria / Semanal)** actualizando vectores. | **Baja (Estática):** queda obsoleto si las reglas cambian cada semana. |
| **Citas y Veracidad** | Media. | **Muy Alta ("Libro Abierto")** con umbral `>= 0.75` y cita documental. | **Baja para hechos:** responde de memoria estadística sin citar páginas. |
