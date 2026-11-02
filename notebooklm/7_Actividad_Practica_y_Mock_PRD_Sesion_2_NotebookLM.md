# Sesión 2: Simulador Práctico (4 Misiones) y Plantilla Mock PRD — Enterprise Knowledge Bot

**Mentoría Estratégica en Gestión de Producto, Proyectos IT e Inteligencia Artificial**
**Alumna:** Anabela Hotian

---

## Parte I: Las 4 Misiones del Simulador Práctico (`actividad_practica_sesion_2.html`)

### Misión 1: Laboratorio de Tokens, Temperatura y Ventana de Contexto
1. **Tokenización BPE y FinOps:**
   * Frase de prueba: *"La localización automática con IA optimiza glosarios técnicos globales."* (9 palabras → 15 tokens BPE, ratio `1.67x`).
   * **Prompt Caching:** Activar el caché de prefijos estáticos reduce un **55%** el costo mensual de entrada (ej. de `$75.00 USD/mes` a `$33.75 USD/mes` en 20.000 consultas).
2. **Calibración de Temperatura y Sesgo *Lost in the Middle*:**
   * Para un bot corporativo de reglas de negocio y localización, la configuración óptima es **`T = 0.0` (Determinista)** e inyectar los fragmentos recuperados **al inicio y al final del prompt** (99% de retención), nunca enterrados en el medio de 50 páginas.

### Misión 2: Radar de Embeddings, Similitud por Coseno y Metadata Filtering
* **Consulta:** *"¿Cómo debemos traducir 'Chargeback' y 'Checkout' en la app para clientes de Argentina y México?"*
* **Inspección de Vectores (1536d):**
  * `Vector #104` (*Glosario Oficial Fintech ES-LATAM 2026*): **Cosine `0.93` ✅**
  * `Vector #209` (*Guía de Estilo UX Pagos LATAM 2026*): **Cosine `0.87` ✅**
  * `Vector #512` (*Manual de Pagos España ES-ES 2021 Obsoleto*): **Cosine `0.81` ⚠️ (Ruido Peligroso)**
  * `Vector #899` (*Política de Vacaciones RRHH*): **Cosine `0.14` 🚫 (Descartado)**
* **Solución PM:** Activar **Metadata Pre-Filtering** (`region = "ES-LATAM"` y `status = "vigente_2026"`) para descartar el Vector #512 obsoleto antes del cálculo vectorial.

### Misión 3: Arquitecta de RAG — Chunking, Overlap y Pipeline de 2 Fases
* **Sweet Spot de Fragmentación:** `Chunk Size = 1000 caracteres (~220 palabras)` + `Overlap = 15%` (puente semántico de 150 caracteres para no cortar condiciones ni tablas a la mitad).
* **Separación Arquitectónica:**
  * **Fase 1: Ingestión (Batch Offline):** 1) Extracción de PDFs/Glosarios → 2) Recursive Chunking (1000ch / 15%) → 3) Generación de Embeddings (1536d) → 4) Guardado en Vector DB + Metadatos.
  * **Fase 2: Consulta (Tiempo Real):** 1) Vectorización de la Pregunta → 2) Metadata Filter + Top-K Cosine → 3) Validación de Umbral (`>= 0.75`) → 4) Inyección al Prompt + Respuesta Citada.

### Misión 4: Gobernanza, Umbral Anti-Alucinación (`0.75`) y Defensa ante el CTO
* **Compuerta Lógica (`Confidence Threshold = 0.75`):**
  * Consulta sobre *Split Payment en México* (`Score: 0.91 >= 0.75`) → **AUTORIZADO**: responde con cita oficial.
  * Consulta sobre *cotización del dólar en 2028* (`Score: 0.29 < 0.75`) → **BLOQUEADO**: cortocircuita la llamada al LLM y emite el *No-Answer Fallback* seguro.
* **Respuesta Ganadora ante el CTO (RAG vs. Fine-Tuning):** El Fine-Tuning sirve para enseñar estilo, tono o formato (JSON), pero no para actualizar hechos cambiantes cada semana; RAG sobre una base vectorial garantiza datos frescos al instante, citas verificables y control de costos.

---

## Parte II: Especificación Modelo del Mock PRD (`mock_prd_tarea_sesion_2.html`)

### 1. Visión de Negocio & Fuentes de Datos
* **Problema:** Los Project Managers, lingüistas y analistas de producto pierden de 2 a 4 horas diarias buscando guías de estilo por cliente, glosarios aprobados y especificaciones técnicas dispersas en decenas de PDFs y wikis.
* **Solución Propuesta:** Asistente conversacional RAG conectado a una base vectorial corporativa que responde consultas técnicas y terminológicas en menos de 2 segundos citando el documento fuente.
* **Fuentes Ground Truth:** Guías de Estilo Globales (Edición 2026), Glosarios Terminológicos por Cliente, Documentación de APIs y Manuales de QA.

### 2. Ingestión y Estrategia de Chunking
* **Algoritmo:** *Recursive Character Chunking* (respeta párrafos, puntos y oraciones).
* **Tamaño de Fragmento:** `500 tokens` (~1.000 caracteres).
* **Solapamiento (Overlap):** `15%` (75 tokens de puente semántico).

### 3. Inferencia, Gobernanza y Seguridad
* **Confidence Threshold:** `0.75` con lógica *No-Answer* obligatoria para scores inferiores.
* **Gobernanza:** Contrato **Enterprise SLA con Zero-Data Retention** (Azure OpenAI / AWS Bedrock), cifrado TLS en tránsito y AES-256 en reposo, más anonimización previa de PII.
* **Metadata Filtering Obligatorio:** `Cliente/Producto`, `Idioma (ES-LATAM, PT-BR, EN-US)`, `Año (2026)`, `Tipo de Documento`.

### 4. Definition of Done (DoD) & Golden Dataset
* [x] Umbral de confianza en `0.75` implementado y verificado.
* [x] Pipeline RAG con `15% de Overlap` activo.
* [x] Contrato `Enterprise SLA con Zero-Retention` configurado.
* [x] Pre-filtrado obligatorio por metadatos en Pinecone.
* [x] **Golden Dataset** de 50 a 100 preguntas certificadas integrado en **GitHub Actions (CI/CD)** exigiendo un **Context Adherence >= 90%** en Langfuse.
