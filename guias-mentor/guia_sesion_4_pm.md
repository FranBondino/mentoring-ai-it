# 🎙️ Sesión 4: Costos reales de IA, Lanzamiento, Evals y Entrevistas

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Cerrar el programa bajando a tierra cómo se decide, presupuesta, lanza y defiende un producto de IA en producción: Build vs. Buy vs. Configure, Model Routing y Batch API (-50%) sobre TCO real, cálculo honesto de capacidad liberada, Shadow Mode y Canary, UX y Spikes en Agile, Evals y Model Drift en Langfuse, y práctica con casos de entrevista reales.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)

- **1. Costos reales, Build vs. Buy y tiempo liberado (Slides 1 a 6):** Model Routing (80% a modelo chico ahorra ~76%), Batch API (-50% nocturno), TCO completo (incluyendo +20–30% de tokens en ES/PT), decidir **Build vs. Buy vs. Configure** con Model Gateway y presentar **capacidad liberada** ante Finanzas sin vender recorte de nómina.
- **2. Salida gradual, UX y riesgos 2026 (Slides 7 a 8):** Salir con **Shadow Mode → Canary → feedback**, bajar la espera con **Token Streaming (< 1s)** y botones en Jira/TMS, correr un **Discovery Spike** de 1 semana antes de prometer fechas, y manejar **Shadow AI, EU AI Act e IP**.
- **3. AI Evals en la práctica y Langfuse (Slides 9 a 11):** Saber qué ticket abrir según qué métrica de la **Tríada RAG** cayó, sumar **Trajectory Evals** en agentes, detectar **Model Drift** calibrado con criterio de negocio/idioma y revisar cada semana trazas y **P95** en **Langfuse**.
- **4. Entrevistas reales y cierre (Slides 12 a 15):** Cómo ordenar respuestas y defender su experiencia en Localización, **2 casos con 3 opciones parejas** (Adopción baja → gana B; Model Drift → gana C + Extra Director) y 4 pasos concretos para practicar en el mes.

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 18 min** | Costos reales, Build vs. Buy y tiempo del equipo | Slides 1 a 6 | Model Routing (80/20), Batch API (-50%), los 4 costos ocultos del TCO (incluyendo idioma ES/PT vs EN), cuándo comprar vs. construir y calculadora de capacidad liberada. |
| **18 - 33 min** | Salida gradual, UX y riesgos actuales | Slides 7 a 8 | Shadow Mode → Canary → circuito de feedback, Token Streaming (< 1s), Discovery Spikes de 1 semana en Agile y riesgos reales hoy (Shadow AI, EU AI Act e IP). |
| **33 - 45 min** | AI Evals en la práctica y monitoreo en Langfuse | Slides 9 a 11 | Qué parte del sistema tocar cuando baja cada métrica de la Tríada RAG, Trajectory Evals en agentes, Model Drift calibrado con criterio humano y revisión semanal en Langfuse. |
| **45 - 60 min** | Entrevistas reales y cierre del programa | Slides 12 a 15 | Cómo ordenar respuestas y contar su experiencia en Localización sin sonar armada, 2 casos de entrevista con opciones parejas (baja adopción y Model Drift) y plan para el mes. |

---

## Slide 1: Llevar la IA a Producción: Costos, Calidad y Entrevistas
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Sesión 4 · Cierre · Costos & Build/Buy · Rollout & Evals · Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Conectar S1–S3 (cómo se construye) con S4 (costos reales, Build vs Buy, salida a producción, Evals/Drift y entrevistas).
- **👆 Qué tocar en la Slide:** Señalá las 4 tarjetas S1 → S2 → S3 → S4 en portada.
- **💬 La analogía ganadora:** En S1–S3 viste cómo se arma el sistema; hoy ves cómo se maneja cuando ya hay plata, usuarios y preguntas de directorio.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ARRANQUE DE LA ÚLTIMA CLASE (Las 4 sesiones en perspectiva):**
• En las primeras tres clases vimos cómo trabajan los equipos de desarrollo (S1), cómo funciona un LLM y un RAG por dentro (S2), y cómo un agente ejecuta acciones con herramientas y frenos humanos (S3).

**2️⃣ QUÉ NOS FALTA VER HOY:**
• Hoy no vamos a repetir lo básico de tokens ni de PII que ya tenés claro. Nos enfocamos en lo que te toca resolver cuando el producto ya existe o lo están por aprobar: **cuánto sale de verdad, qué conviene comprar en vez de programar, cómo salir a usuarios reales sin romper nada y cómo responder casos difíciles en entrevistas**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Paso a Producción (Productización):** Todo lo que pasa después del prototipo: presupuesto real, experiencia de uso, monitoreo semanal y manejo de riesgos.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la portada y repasá las 4 tarjetas del recorrido: Base (S1), Memoria (S2), Acción (S3) y Hoy salida a producción y entrevistas (S4).

### 🔗 Puente de Conexión → Slide 2 (Qué vamos a ver hoy (Sesión 4))
> **"Miremos rápido en la Slide 2 los cuatro bloques de hoy."**

---

## Slide 2: Qué vamos a ver hoy (Sesión 4)
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** 1. Costos & Build/Buy · 2. Rollout & UX · 3. Evals & Langfuse · 4. Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Presentar el mapa completo de la hora en 4 bloques concretos.
- **👆 Qué tocar en la Slide:** Recorré las 4 tarjetas en 30 segundos.
- **💬 La analogía ganadora:** Cuatro frentes concretos: plata, salida a calle, calidad y entrevistas.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LOS 4 BLOQUES DE HOY (Grilla 2×2):**
• **1. Costos reales y Build vs. Buy:** Model Routing, Batch API a mitad de precio, gastos fijos que suelen olvidarse y cuándo comprar un SaaS en lugar de desarrollar.
• **2. Cómo lanzar y UX para IA:** Salir por etapas (*Shadow Mode → Canary*), evitar pantallas congeladas, usar *Spikes* cortos en Agile y manejar *Shadow AI* y *EU AI Act*.
• **3. Evaluar calidad y monitorear en Langfuse:** Qué parte tocar cuando cae una métrica, Evals en agentes y cómo detectar *Model Drift*.
• **4. Entrevistas reales y cierre:** Cómo contar tu experiencia previa en Localización y practicar 2 casos con opciones parejas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **FinOps en IA:** Controlar y bajar el gasto mensual de un sistema de IA en la nube sin arruinar la calidad.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 4 tarjetas de la grilla marcando los tiempos de la hora.

### 🔗 Puente de Conexión → Slide 3 (FinOps 1: Model Routing (enrutamiento de modelos))
> **"Arranquemos por la decisión de costos más común cuando ya hay tráfico real: el Model Routing en la Slide 3."**

---

## Slide 3: FinOps 1: Model Routing (enrutamiento de modelos)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Model Routing · Carriles 80/20 · Simulador de ahorro

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar un clasificador liviano para mandar el 80% de pedidos simples a modelos Flash/Haiku y dejar el modelo caro solo para el 20% difícil.
- **👆 Qué tocar en la Slide:** Explicá los 2 carriles a la izquierda y mové el slider al 80% a la derecha ($1,200 → $288).
- **💬 La analogía ganadora:** En una guardia no atiende el especialista más caro los casos de rutina; filtra primero la atención general y deriva solo lo complejo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ POR QUÉ NO USAR UN SOLO MODELO PARA TODO (Tarjeta izquierda):**
• Mandar una duda simple o la clasificación de un ticket a *Claude Opus* o *GPT-4o* es pagar alrededor de **20 veces más** y esperar el triple de tiempo sin ningún beneficio.
• Con **Model Routing**, ponés un filtro rápido en la entrada que separa en dos carriles:
  • **🟢 Carril rápido (70%-85%):** Modelos chicos (*Gemini Flash, Claude Haiku, GPT-4o-mini, AWS Nova Micro*) a ~$0.15/1M tokens en ~`0.3 seg`.
  • **🟣 Carril complejo (15%-30%):** Modelos grandes solo para contratos ambiguos, transcreación o decisiones de varios pasos.

**2️⃣ SIMULADOR EN VIVO (Mové el deslizador derecho):**
• Si todo va al modelo grande gastás **$1,200/mes**. Si mandás el **80%** de lo simple al modelo chico, la cuenta cae a **$288/mes** (**76% menos**) y encima responde mucho más rápido.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Routing:** Un filtro en la puerta que manda las tareas fáciles a un modelo barato y rápido, y las difíciles al modelo más potente.

### ⚡ Dinámica / Interacción en Pantalla
- Explicá los dos carriles a la izquierda y mové el deslizador de la derecha en vivo para ver cómo baja de $1,200 a $288 USD/mes.

### 🔗 Puente de Conexión → Slide 4 (FinOps 2: Batch API (-50%) y costos ocultos (TCO))
> **"Eso resuelve el chat en vivo. Pero ¿qué pasa cuando tenés un volumen grande que puede esperar a la noche, y qué gastos extras suelen quedar afuera del primer presupuesto? Pasemos a la Slide 4."**

---

## Slide 4: FinOps 2: Batch API (-50%) y costos ocultos (TCO)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Batch API (-50%) · TCO real · Idiomas ES/PT vs EN

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar Batch API (-50%) para tareas que pueden esperar horas y sumar al presupuesto los 4 gastos ocultos del TCO (incluyendo +20-30% de tokens en ES/PT).
- **👆 Qué tocar en la Slide:** Compará la tarjeta izquierda (Tiempo real vs Batch) y los 4 puntos del TCO a la derecha.
- **💬 La analogía ganadora:** Batch API es el envío programado nocturno a mitad de precio en lugar de moto urgente; el TCO es contar seguro y mantenimiento además de la nafta.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ SEPARAR LO URGENTE DE LO NOCTURNO (Tarjeta izquierda):**
• **⚡ Síncrono (100% tarifa):** Chat donde la persona está esperando en pantalla en menos de 2 segundos.
• **🌙 Batch API / Asíncrono (50% tarifa):** Si te entran 3.000 strings de un release o querés auditar glosarios durante la noche para la mañana siguiente, lo mandás por **Batch API** (OpenAI, Anthropic, AWS Bedrock) y te cobran **la mitad**.

**2️⃣ LOS 4 COSTOS OCULTOS DEL TCO (Tarjeta derecha):**
• Si solo multiplicás tokens de salida te quedás corta. En la cuenta real entran: **1)** las vueltas internas del agente ReAct, **2)** infraestructura fija de Vector DB y monitoreo (~$70–$250/mes), **3)** la **diferencia por idioma**: los tokenizadores están más optimizados para inglés y en español o portugués suelen gastar ~20–30% más tokens, y **4)** tokens de evaluaciones automáticas + horas humanas de revisión.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **TCO (Costo Total de Propiedad):** Todo lo que cuesta mantener el sistema andando por mes: tokens, base vectorial, monitoreo, evaluaciones y revisión humana.

### ⚡ Dinámica / Interacción en Pantalla
- Compará Síncrono vs. Batch API a la izquierda y recorré los 4 puntos del TCO a la derecha marcando la diferencia de tokens por idioma.

### 🔗 Puente de Conexión → Slide 5 (Build vs. Buy vs. Configure (y cómo evitar Vendor Lock-in))
> **"Igual, antes de calcular servidores y APIs, hay una pregunta previa que ahorra meses de trabajo. Vamos a la Slide 5: Build vs. Buy vs. Configure."**

---

## Slide 5: Build vs. Buy vs. Configure (y cómo evitar Vendor Lock-in)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Build vs. Buy · Model Gateway · Vendor Lock-in

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Evaluar Buy vs Configure vs Build antes de pedir devs, y usar un Model Gateway si se desarrolla propio para no quedar atado a un proveedor.
- **👆 Qué tocar en la Slide:** Recorré las 3 tarjetas y tocá los 3 casos de abajo.
- **💬 La analogía ganadora:** Para ir al aeropuerto te tomás un taxi (Buy); no te comprás una fábrica de autos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ANTES DE PEDIR PROGRAMADORES (3 columnas):**
• **🛒 BUY (SaaS):** Si es una necesidad común sin diferencial propio (resumir llamadas, DeepL Pro), comprás licencia en días y no distraés ingenieros.
• **🧩 CONFIGURE (Conectado):** Para flujos internos conectando Jira, Slack o documentos, armás sobre AWS Bedrock KB, n8n o MCP en 1–3 semanas.
• **🏗️ BUILD (Propio):** Solo si es parte central del negocio y hay escala. Y si desarrollás, poné un **Model Gateway** (*AWS Bedrock / LiteLLM*) para cambiar entre Claude, Gemini y GPT sin reescribir código (**evitar Vendor Lock-in**).

**2️⃣ 3 CASOS CONCRETOS (Botones de abajo):**
• Probalos con Anabela: *1. Resumir reuniones → BUY*, *2. Piloto QA en Jira → CONFIGURE*, *3. Motor médico 500k docs/mes → BUILD con Gateway*.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Gateway (Anti Vendor Lock-in):** Un adaptador único (como AWS Bedrock o LiteLLM) para cambiar de modelo de IA sin rehacer la aplicación.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 3 columnas arriba y hacé clic en los 3 botones abajo para debatir qué conviene en cada caso.

### 🔗 Puente de Conexión → Slide 6 (Ejercicio 1: Costos de IA vs. tiempo del equipo)
> **"Cuando sí tiene sentido construir o configurar un proyecto interno, ¿cómo armás los números para Finanzas sin vender humo? Pasemos a la Slide 6."**

---

## Slide 6: Ejercicio 1: Costos de IA vs. tiempo del equipo
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Capacidad liberada · TCO real · Cuenta Finanzas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Calcular costo IA + TCO + 20% HITL frente al tiempo manual, aclarando que es capacidad liberada y no recorte directo de nómina el mes 1.
- **👆 Qué tocar en la Slide:** Mostrá los defaults ($209.16 IA + TCO, $5,000 HITL, $19,790.84 capacidad liberada, ~3.3 semanas para piloto $15k) y jugá con los checks.
- **💬 La analogía ganadora:** Si ahorrás 1.000 horas del equipo no echás gente al día siguiente: usás esas horas para sacar atrasos o tomar más clientes sin contratar de más.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CÓMO PRESENTAR LOS NÚMEROS SIN EXAGERAR (Izquierda y derecha):**
• Con **5.000 documentos/mes** de **15 min** a **$20/h**, hoy ese trabajo equivale a **1.250 horas** (7.8 personas FTE), o sea **$25,000 USD/mes** de valor de tiempo.
• Activando **Model Routing + Batch**, la API cae de $225 a $27; sumando **$180 fijos de Vector DB/Langfuse + 8% de Evals**, el costo IA total real da **$209.16 USD/mes**. Sumado al **20% de revisión humana ($5,000/mes)**, liberás capacidad equivalente a **$19,790.84 USD/mes**.

**2️⃣ EL DETALLE QUE TE HACE SONAR HONESTA ANTE FINANZAS (Nota inferior):**
• Aclará siempre que esto es **capacidad liberada del equipo** (para absorber más volumen o bajar demoras), no ahorro inmediato de sueldos el mes 1. Usándolo como referencia frente a un piloto de **$15,000**, equivale a unas **3.3 semanas** de horas liberadas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Capacidad Liberada:** Horas del equipo que dejan de ir a revisión repetitiva y pasan a tareas de mayor criterio, absorbiendo más trabajo sin sumar sueldos.

### ⚡ Dinámica / Interacción en Pantalla
- Dejá los defaults (5.000 docs, 15 min, $20/h) con los 3 checks marcados, luego destildá y volvé a tildar Routing/Batch/TCO destacando la nota sobre horas liberadas vs. nómina.

### 🔗 Puente de Conexión → Slide 7 (Lanzamiento gradual: Shadow Mode, Canary y feedback)
> **"Con el caso armado y aprobado, viene la parte práctica: ¿cómo salimos a producción sin romper nada ni hacer papelones con clientes? Vamos a la Slide 7."**

---

## Slide 7: Lanzamiento gradual: Shadow Mode, Canary y feedback
- **⏱️ Tiempo estimado:** 6 Min | **🏷️ Etiquetas:** Shadow Mode · Canary Rollout · Feedback continuo

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Lanzar en 3 etapas: Shadow Mode (silencioso), Canary con Feature Flags (5% → 100%) y circuito de feedback hacia el Golden Dataset.
- **👆 Qué tocar en la Slide:** Hacé clic en Etapa 1, Etapa 2 y Etapa 3 mirando cómo cambia la barra inferior.
- **💬 La analogía ganadora:** Primero trabaja a puertas cerradas al lado del equipo (Shadow), después atiende un 5% de pedidos supervisado (Canary) y cada corrección queda anotada.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ETAPA 1: SHADOW MODE / MODO SOMBRA (Clic en Etapa 1):**
• Nunca salís directo para el 100% de los usuarios. Las primeras 1–2 semanas el sistema corre en **Shadow Mode**: procesa pedidos reales en segundo plano sin mostrarle nada al cliente.
• Mirá el tablero de abajo: **0% de clientes expuestos** y avanzás recién cuando coincide **≥ 90%** con lo que resolvió el equipo humano.

**2️⃣ ETAPA 2: CANARY 5% → 25% → 100% (Clic en Etapa 2):**
• Con *Feature Flags*, prendés para un **5%** o un proyecto piloto mirando latencia P95 y costos, sabiendo que con un clic volvés atrás.

**3️⃣ ETAPA 3: CIRCUITO DE FEEDBACK (Clic en Etapa 3):**
• Ponés **👍 / 👎**. Cada corrección que carga el especialista suma al *Golden Dataset* para que el mismo error no vuelva a pasar.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Shadow Mode (Modo Sombra):** Correr el agente sobre casos reales sin que el usuario vea sus respuestas, solo para medir acierto contra el equipo humano.
- **Canary Rollout + Feature Flags:** Habilitar la función para un porcentaje chico de usuarios con una llave de apagado rápido.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las 3 etapas arriba para mostrar abajo cómo cambian exposición, riesgo, criterio para avanzar y tu tarea como PM.

### 🔗 Puente de Conexión → Slide 8 (UX en productos de IA, Spikes en Agile y riesgos actuales)
> **"Ahora bien: muchos sistemas funcionan bien en pruebas y aun así nadie los usa, o chocan con reglas nuevas de la empresa. Veamos UX, planificación en Agile y riesgos actuales en la Slide 8."**

---

## Slide 8: UX en productos de IA, Spikes en Agile y riesgos actuales
- **⏱️ Tiempo estimado:** 9 Min | **🏷️ Etiquetas:** UX & Streaming · Discovery Spike · Shadow AI & EU AI Act

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Explicar por qué falla la adopción por mala UX, cómo usar Discovery Spikes de 1 semana antes de comprometer fechas, y los 3 riesgos de 2026 (Shadow AI, EU AI Act, IP).
- **👆 Qué tocar en la Slide:** Tocá '🐢 12s congelada' vs '⚡ 0.8s streaming' y repasá los 3 bloques de la derecha.
- **💬 La analogía ganadora:** Discovery Spike es probar una tanda chica de 30 casos antes de prometer 3 meses; frenar Shadow AI es ofrecer una vía segura en vez de solo prohibir.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ UX EN IA Y PLANNING REALISTA (Tarjeta izquierda + Demo):**
• Un modelo bueno fracasa si tarda 12 segundos con la pantalla en blanco: necesitás **Token Streaming** (primeras palabras en &lt; 1s), llamadas en paralelo y avisos de estado (*'Consultando Jira...'*).
• Y no mandes a todos a un chat vacío: poné botones contextuales dentro de Jira/TMS donde ya trabajan.
• En **Agile**, antes de prometer un trimestre cuando no sabés si tus datos alcanzan, corré un **Discovery Spike de 1 semana con ~30 casos reales**.

**2️⃣ RIESGOS ACTUALES (Tarjeta derecha):**
• **Shadow AI:** Si solo prohibís usar IA por mail, la gente igual pega textos en cuentas personales; la única forma real de frenarlo es dar una alternativa interna segura.
• **EU AI Act:** Si el sistema toca RRHH, evaluaciones o crédito, exige trazas, supervisión humana y avisar al usuario.
• Y revisá siempre **Propiedad Intelectual (IP)** y sesgos en idiomas fuera del inglés.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Discovery Spike:** Una prueba corta de 5 días con ~30 casos reales al arranque para comprobar si los datos sirven antes de armar todo el roadmap.
- **Shadow AI:** Cuando la gente usa herramientas de IA personales en el trabajo porque la empresa no le dio una opción aprobada que le sirva.

### ⚡ Dinámica / Interacción en Pantalla
- Alterná los dos botones de la mini-demo ('12s congelada' vs '0.8s streaming') y repasá los 3 riesgos actuales de la derecha.

### 🔗 Puente de Conexión → Slide 9 (AI Evals en la práctica: Tríada RAG, Agentes y Model Drift)
> **"Ya vimos cómo presupuestar y lanzar cuidando la experiencia. Pasemos al bloque 3 (Slides 9 a 11) para bajar a tierra cómo evaluar calidad y usar Langfuse."**

---

## Slide 9: AI Evals en la práctica: Tríada RAG, Agentes y Model Drift
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tríada RAG → Sprint · Trajectory Evals · Model Drift & SME

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mapear la Tríada RAG a tickets concretos del sprint, sumar Trajectory Evals para agentes y entender Model Drift + calibración con criterio humano (SME).
- **👆 Qué tocar en la Slide:** Recorré las 3 métricas a la izquierda y las 2 cajas de la derecha.
- **💬 La analogía ganadora:** Si el buscador trajo la página equivocada del manual, no retes al redactor: arreglá el índice de la biblioteca.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ ARREGLAR SEGÚN QUÉ MÉTRICA CAE (Tarjeta izquierda):**
• En S2 vimos el *Golden Dataset* en CI/CD. En el día a día te sirve para no mandar tickets a ciegas:
  • Baja **Fidelidad** → el modelo inventó → ajustar *Prompt / Temperatura 0.0 / Guardrail*.
  • Baja **Precisión de Contexto** → el buscador trajo mal párrafo → revisar *Chunking / Metadatos / Vector DB* (no el prompt).
  • Baja **Relevancia** → dio vueltas → ajustar formato e instrucción.

**2️⃣ AGENTES Y MODEL DRIFT (Tarjeta derecha):**
• En agentes mirás además la trayectoria (**Trajectory Evaluation**): si eligió la herramienta correcta y con JSON válido.
• Y ojo con el **Model Drift**: a veces el proveedor cambia el modelo por detrás o el equipo pasa a un modelo más chico y la calidad cae sin que nadie haya tocado el código. Calibrar un *LLM-as-a-Judge* pide criterio real del idioma y del negocio (ahí aporta directo tu experiencia en **Traducción y QA**).

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Drift:** Caída silenciosa de calidad en producción aunque el código no haya cambiado, por actualización del proveedor o cambio de modelo.
- **Trajectory Evaluation:** Revisar si un agente eligió bien las herramientas paso a paso, más allá de cómo redactó la respuesta final.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la columna izquierda (qué nota baja → qué ticket creás) y la derecha (agentes y Model Drift).

### 🔗 Puente de Conexión → Slide 10 (Ejercicio 2: Simulador de auditoría Evals)
> **"Probémoslo rápido en el simulador de la Slide 10 para ver cómo cambia el ticket según la falla."**

---

## Slide 10: Ejercicio 2: Simulador de auditoría Evals
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Auditoría Evals · Alucinación vs Retrieval · Diagnóstico

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Distinguir con los 3 presets cuándo el problema es del prompt (Fidelidad) y cuándo es del buscador (Contexto).
- **👆 Qué tocar en la Slide:** Tocá '🔍 Alucinación', '📂 Fallo Retrieval' y '✅ Sana'.
- **💬 La analogía ganadora:** Es separar si alguien contestó mal porque le dieron la fotocopia equivocada (Contexto) o porque inventó fuera de la hoja (Fidelidad).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL EJEMPLO EN PANTALLA (Izquierda):**
• El manual dice que *Checkout v4* está **bloqueado en QA lingüístico**, pero al final el bot inventó que *'mañana se aprueba automáticamente sin más pruebas'*.

**2️⃣ PROBAR LOS 3 PRESETS (Derecha):**
• **Alucinación:** Contexto `1.0` pero Fidelidad `0.2` → **RECHAZADO · Ticket para Prompt / Temperatura / Guardrail**.
• **Fallo Retrieval:** Fidelidad `0.9` pero Contexto `0.3` → **RECHAZADO · Ticket para Chunking / Metadatos / Vector DB**.
• **Sana:** Todo ≥ `0.95` → **Pasa a Canary**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Diagnóstico de causa raíz:** Identificar si el error salió del buscador vectorial o del modelo antes de abrir una tarea en Jira.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá los 3 presets arriba a la derecha ('🔍 Alucinación', '📂 Fallo Retrieval', '✅ Sana') para ver cómo cambia el ticket de respuesta.

### 🔗 Puente de Conexión → Slide 11 (Monitoreo en producción con Langfuse)
> **"Y cuando ya está andando en vivo, ¿dónde mirás todas estas trazas sin pedirle favores a un developer? Vamos a la Slide 11: Langfuse."**

---

## Slide 11: Monitoreo en producción con Langfuse
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Langfuse · Traces & Spans · Latencia P95

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Leer trazas en Langfuse (Span de Router/Retrieval, Span de LLM, Span de Eval) y revisar cada semana origen de errores, Model Drift y P95.
- **👆 Qué tocar en la Slide:** Expandí los 4 nodos de la izquierda y tocá el botón de reporte negativo.
- **💬 La analogía ganadora:** Es la caja negra y el ticket detallado de cada consulta: ves en 10 segundos qué paso falló y cuánto costó.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ RADIOGRAFÍA DE UNA CONSULTA EN LANGFUSE (Árbol izquierdo):**
• Cada mensaje deja una **Traza** dividida en pasos (**Spans**): en **Span 1** ves que el router eligió *Flash* (`$0.0001`, `160ms`) y qué chunks trajo; en **Span 2** ves el streaming (`TTFT 220ms`); en **Span 3** la nota de Eval (`0.97`).
• Probá el botón **'👎 Simular reporte → mandar al Golden Dataset'** para ver cómo entra una corrección real al set de pruebas.

**2️⃣ QUÉ MIRÁS TODAS LAS SEMANAS (Tarjeta derecha):**
• 1) Si reportan un error, mirás Span 1 vs. Span 2 sin adivinar; 2) Si cae el promedio de *Faithfulness* sin cambios propios, detectás **Model Drift**; 3) Controlás costo por área y **latencia P95**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Latencia P95:** El tiempo máximo que tarda para el 95% de los usuarios; evita que un promedio lindo esconda demoras feas en casos puntuales.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los 4 pasos de la traza a la izquierda, tocá '👎 Simular reporte → mandar al Golden Dataset' y repasá los 3 chequeos semanales a la derecha.

### 🔗 Puente de Conexión → Slide 12 (Cómo encarar entrevistas técnicas y defender tu perfil)
> **"Con toda la parte técnica y operativa cubierta, usemos los últimos 15 minutos para entrevistas y cómo defender tu perfil. Pasemos a la Slide 12."**

---

## Slide 12: Cómo encarar entrevistas técnicas y defender tu perfil
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Entrevistas IT · Trade-offs · Localización → IA

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Ordenar respuestas en 3 puntos (qué mirás → qué decidís y qué resignás → cómo medís) y conectar Localización con Evals, HITL y costos multilingües.
- **👆 Qué tocar en la Slide:** Señalá primero los 3 pasos a la izquierda y después los 3 puentes a la derecha.
- **💬 La analogía ganadora:** Tu experiencia en Localización no queda afuera: es exactamente el criterio de lenguaje, calidad y coordinación que falta en muchos equipos técnicos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ QUIEREN ESCUCHAR CUANDO TE HACEN UN CASO (Izquierda):**
• Nadie espera que escribas código. Miran si ordenás la cabeza así: **1)** qué revisás primero con datos (Langfuse + usuarios), **2)** qué cambio proponés y qué **trade-off** aceptás, y **3)** cómo medís si funcionó.

**2️⃣ LO QUE YA TRAÉS DE LOCALIZACIÓN (Derecha):**
• No empezás de cero: haber armado **glosarios y QA lingüístico** te da criterio directo para armar rúbricas de evaluación y contexto; **coordinar traductores y entregas** es gestionar flujos *Human-in-the-Loop*, SLAs y stakeholders; y manejar **proyectos multilingües** te hace ver al toque el mayor gasto de tokens en ES/PT y los matices culturales.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Trade-off:** Elegir qué priorizás y qué dejás de lado (por ejemplo, velocidad o costo frente a cobertura total en una primera etapa).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá los 3 pasos de la izquierda y cómo se traduce la experiencia de Anabela en la derecha.

### 🔗 Puente de Conexión → Slide 13 (Caso de entrevista 1: Baja adopción y presupuesto en riesgo)
> **"Vamos a probarlo en dos casos reales donde las tres opciones parecen razonables a primera vista. Pasemos a la Slide 13."**

---

## Slide 13: Caso de entrevista 1: Baja adopción y presupuesto en riesgo
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Caso adopción · UX + FinOps · 3 opciones parejas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Caso donde el bot funciona técnicamente pero no se adopta: la mejor opción es la B (auditar datos/entrevistas + llevarlo al flujo real con streaming + bajar costo).
- **👆 Qué tocar en la Slide:** 1° '1. Auditar uso' → 2° Que Anabela elija entre A, B y C (gana la B).
- **💬 La analogía ganadora:** Si nadie usa una herramienta cara, no sirve mandar un mail obligando ni agregarle funciones: primero mirás dónde se traban.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA PREGUNTA (Leela tal cual):**
• *'Lanzamos un asistente interno hace 2 meses. Anda bien en pruebas técnicas, pero casi nadie lo usa (~12%) y Finanzas quiere cortar el presupuesto en 30 días. ¿Qué hacés?'*

**2️⃣ COMPARAR LAS 3 OPCIONES (A, B y C — acá la mejor es la B):**
• Preguntale a Anabela cuál elegiría antes de hacer clic.
• **Opción A (Mail de dirección + capacitación):** Empuja el uso una semana y después vuelve a caer porque el problema real no se tocó.
• **Opción C (Pedir 2 meses y modelo más caro):** Finanzas corta en 30 días; pedir más tiempo y gasto sin entender por qué no lo usan acelera el cierre.
• **Opción B (Mejor camino ✅):** Cruzás Langfuse con 8–10 charlas cortas (espera larga sin streaming, salir de Jira), llevás el bot a un flujo puntual en Jira con streaming y bajás el gasto con Routing/Batch para defender el presupuesto.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fricción de flujo:** Obligar a la persona a salir de su herramienta diaria (Jira/TMS) para copiar y pegar textos en un chat aparte.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '1. Auditar uso' a la izquierda y dejá que Anabela elija primero entre Opción A, B y C a la derecha antes de probarlas.

### 🔗 Puente de Conexión → Slide 14 (Caso de entrevista 2: Caída silenciosa de calidad (Model Drift))
> **"Bien resuelto: entendiste el problema de uso y de presupuesto antes de pedir más desarrollo. Vamos al segundo caso en la Slide 14."**

---

## Slide 14: Caso de entrevista 2: Caída silenciosa de calidad (Model Drift)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Model Drift · Feature Flag + Routing · Extra Director

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver un Model Drift en terminología sin tirar todo el ahorro ni tapar con revisión manual 100%: gana la C (rollback selectivo + Evals por categoría + Routing).
- **👆 Qué tocar en la Slide:** 1° '1. Simular caída' → 2° Debatir A, B y C (gana C) → 3° Abrir bloque Extra abajo.
- **💬 La analogía ganadora:** Si un cambio de proveedor falla solo en textos legales, no frenás toda la operación ni revisás todo a mano: separás por tipo de tarea.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA PREGUNTA DE LOCALIZACIÓN / MODEL DRIFT:**
• *'Migramos a un modelo más barato para ahorrar 60%. Todos los unit tests pasan en verde, pero Localización reporta errores graves en términos legales bajo NDA. ¿Qué hacés hoy?'*

**2️⃣ DEBATE ENTRE A, B Y C (Gana la C) + EXTRA:**
• **Opción A (Volver todo atrás para siempre):** Apaga el fuego, pero perdés todo el ahorro y seguís sin Evals.
• **Opción B (Revisión manual al 100%):** Arma un cuello de botella más caro que el modelo grande.
• **Opción C (Mejor camino ✅):** Revertís con *feature flag* solo en terminología crítica, corrés el *Golden Dataset* por categoría en Langfuse y dejás el modelo chico únicamente donde saca ≥ 0.90, sumando alertas de Drift.
• Si sobra 1 minuto, abrí el bloque **'Extra'** abajo sobre cómo responder cuando un Director pide un agente en 30 días sin datos limpios (*Discovery Spike* + *Shadow Mode*).

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Routing por categoría:** Dejar el modelo económico donde las pruebas dan arriba de 0.90 y mantener el modelo grande en los casos donde el detalle importa.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '1. Simular caída' a la izquierda, debatan A, B y C a la derecha (gana la C), y si da el tiempo abrí el bloque desplegable 'Extra' abajo.

### 🔗 Puente de Conexión → Slide 15 (Cierre del programa y próximos pasos)
> **"Con esto cerramos los casos de entrevista. Pasemos a la última slide, la Slide 15, para repasar todo y ver cómo seguir este mes."**

---

## Slide 15: Cierre del programa y próximos pasos
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Cierre · Repaso S1–S4 · Próximo mes

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cerrar de forma cercana repasando las 4 clases y dejando 4 tareas semanales concretas para el próximo mes.
- **👆 Qué tocar en la Slide:** Mostrá las 4 tarjetas S1–S4, la fila de 4 semanas y los 3 botones finales.
- **💬 La analogía ganadora:** Te queda el mapa entero ordenado en un solo lugar para repasar 15 minutos antes de cualquier charla técnica.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CIERRE DEL RECORRIDO (Las 4 sesiones):**
• En cuatro clases conectaste tu base de gestión y localización con cómo trabajan hoy los equipos de software (S1), LLMs y RAG (S2), Agentes y MCP (S3) y hoy costos reales, salida gradual, Evals/Drift y entrevistas (S4).

**2️⃣ CÓMO SEGUIR PRACTICANDO ESTE MES (4 pasos simples):**
• **Semana 1:** Bajá a una página tu caso práctico usando el Mock PRD de S2 y el cálculo honesto de TCO/tiempo de hoy.
• **Semana 2:** Ajustá CV y LinkedIn conectando tu trayectoria en Localización con proyectos de IA y QA.
• **Semana 3:** Repasá en voz alta cómo mostraste el flujo de Antigravity + AWS MCP en 2 minutos.
• **Semana 4:** Volvé al Simulador S4 y practicá defender los dos casos sin mirar la respuesta.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Portfolio práctico de 1 página:** Un caso concreto (problema, arquitectura, riesgos, TCO y cómo lo medirías) listo para contar en 3 minutos en una entrevista.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 4 sesiones, recorré los 4 pasos simples para el próximo mes y recordale dónde quedan el Simulador S4, Glosario S4 y Portal.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🏁 Cierre Final: Todo el portal con las 4 presentaciones, glosarios, Mock PRD y simuladores te queda abierto para consultar cuando tengas una entrevista o reunión técnica. ¡Muchos éxitos!"**

---

