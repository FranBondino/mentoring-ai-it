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
| **45 - 60 min** | Entrevistas reales y cierre del programa | Slides 12 a 15 | Cómo ordenar respuestas y contar su experiencia en Localización con ejemplos concretos, 2 casos de entrevista con opciones parejas (baja adopción y Model Drift) y plan para el mes. |

---

## Slide 1: Llevar la IA a Producción: Costos, Calidad y Entrevistas
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Sesión 4 · Cierre · Costos & Build/Buy · Rollout & Evals · Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Conectar S1–S3 (cómo se construye) con S4 (costos reales, Build vs Buy, salida a producción, Evals/Drift y entrevistas).
- **👆 Qué tocar en la Slide:** Señalá las 4 tarjetas S1 → S2 → S3 → S4 en portada.
- **💬 La analogía ganadora:** En S1–S3 viste cómo se arma el sistema; hoy ves cómo se maneja cuando ya hay presupuesto, usuarios reales y preguntas de directorio.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Hoy cerramos el programa, Anabela, y vamos a conectar todo lo que vimos en las tres clases anteriores con lo que te toca decidir cuando un producto de IA pasa a usuarios reales. **[Señalá las cuatro tarjetas abajo de izquierda a derecha]** En la Sesión 1 vimos cómo trabaja desarrollo, las APIs, Git y Agile; en la Sesión 2 entendimos los LLMs, los embeddings y cómo busca un RAG en manuales; y en la Sesión 3 viste cómo un agente usa herramientas, sigue el ciclo ReAct y frena con revisión humana.

Lo que nos falta hoy es la parte que define si un proyecto sigue vivo o se cancela: cuánto sale operarlo por mes con costos reales, cuándo conviene comprar antes que programar desde cero, cómo sacarlo en etapas sin exponer errores, cómo medir si la calidad cayó en silencio y cómo defender todo esto en entrevistas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Paso a Producción (Productización):** Todo lo que pasa después del prototipo: presupuesto real, experiencia de uso, monitoreo semanal y manejo de riesgos.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la portada y repasá las 4 tarjetas del recorrido: Base (S1), Memoria (S2), Acción (S3) y Hoy salida a producción y entrevistas (S4).

### 🔗 Puente de Conexión → Slide 2 (Qué vamos a ver hoy (Sesión 4))
> **"Arranquemos viendo el mapa de los cuatro bloques que vamos a recorrer en esta hora. Pasemos a la Slide 2."**

---

## Slide 2: Qué vamos a ver hoy (Sesión 4)
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** 1. Costos & Build/Buy · 2. Rollout & UX · 3. Evals & Langfuse · 4. Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Presentar el mapa completo de la hora en 4 bloques concretos.
- **👆 Qué tocar en la Slide:** Recorré las 4 tarjetas en 30 segundos.
- **💬 La analogía ganadora:** Cuatro frentes concretos: presupuesto, salida a producción, calidad y entrevistas.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
En esta pantalla tenés el recorrido de la clase dividido en cuatro bloques concretos. **[Señalá las tarjetas 1 y 2 arriba]** Primero vamos a ver números y arquitectura de decisión: **Costos reales y Build vs. Buy**, donde te muestro *Model Routing*, *Batch API* a mitad de precio, los gastos fijos que suelen quedar afuera del presupuesto y una calculadora de tiempo del equipo. En el segundo bloque nos metemos en **Lanzamiento y UX para IA**: cómo salir de a poco con *Shadow Mode* y *Canary*, evitar chats congelados, usar *Spikes* cortos de validación y cubrir riesgos actuales como *Shadow AI* y *EU AI Act*.

**[Señalá las tarjetas 3 y 4 abajo]** En el tercer bloque bajamos a tierra **Evals y monitoreo en Langfuse** para saber qué ticket abrir cuando falla la calidad y cómo detectar caídas silenciosas de modelo. Y los últimos quince minutos son para **Entrevistas reales y cierre**: cómo contar tu experiencia en Localización y resolver juntos dos casos donde todas las opciones parecen razonables.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **FinOps en IA:** Controlar y bajar el gasto mensual de un sistema de IA en la nube sin arruinar la calidad.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 4 tarjetas de la grilla marcando los tiempos de la hora.

### 🔗 Puente de Conexión → Slide 3 (FinOps 1: Model Routing (enrutamiento de modelos))
> **"Empecemos por el frente donde antes te van a preguntar los números cuando un bot pasa de piloto a uso diario: cómo evitar pagar de más por cada consulta. Vamos a la Slide 3."**

---

## Slide 3: FinOps 1: Model Routing (enrutamiento de modelos)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Model Routing · Carriles 80/20 · Simulador de ahorro

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar un clasificador liviano para mandar el 80% de pedidos simples a modelos Flash/Haiku y dejar el modelo caro solo para el 20% difícil.
- **👆 Qué tocar en la Slide:** Explicá los 2 carriles a la izquierda y mové el slider al 80% a la derecha ($1,200 → $288).
- **💬 La analogía ganadora:** En una guardia no atiende el especialista más caro los casos de rutina; filtra primero la atención general y deriva solo lo complejo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Uno de los errores más caros al pasar un proyecto a producción es mandar el 100% de los mensajes al modelo más potente del mercado. Si tenés un pedido simple, como clasificar un ticket por idioma o responder una duda frecuente del manual, usar *Claude Sonnet* o *GPT-4o* cuesta alrededor de veinte veces más y responde bastante más lento sin aportar calidad extra.

**[Señalá el diagrama SVG arriba a la izquierda]** Fijate en el esquema de la izquierda: **Model Routing** significa poner un clasificador rápido en la puerta que separa en dos carriles. El **Carril rápido** se lleva entre el 70% y el 85% del tráfico hacia modelos chicos como *Gemini Flash* o *Claude Haiku*, que rondan `$0.15` por millón de tokens y contestan en décimas de segundo. El **Carril complejo** deja el 15% a 30% restante para modelos grandes donde hay contratos ambiguos, transcreación o varios pasos de razonamiento.

**[Mové el deslizador derecho a 0%]** Probémoslo en vivo: si mandamos `0%` al modelo chico, la factura base está en **`$1,200.00 / mes`**. **[Volvelo a 80%]** Al derivar el `80%` de consultas simples al carril rápido, mirá cómo se engrosa la rama verde del diagrama y la cuenta baja a **`$288.00 / mes`**, un **`76%` de ahorro (`$912 USD`)**. **[Probalo en 90%]** Incluso en `90%` bajaría a **`$174.00 / mes` (`86%`)**, aunque siempre conviene reservar un porcentaje para los casos delicados.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Simulador Model Routing + Diagrama SVG
1. Señalá primero el diagrama SVG a la izquierda (`Consulta → Router → Modelo Chico / Modelo Grande`) para mostrar dónde actúa el filtro.
2. Llevá el deslizador derecho a **0%** → la cuenta marca **$1,200.00 / mes** (`0% de ahorro`) y la rama violeta del diagrama toma el **100%**.
3. Volvelo a **80%** (valor recomendado) → baja a **$288.00 / mes** (`76% de ahorro · $912 USD`) y se engrosa la rama verde (**80%**) frente a la violeta (**20%**).
4. Subí a **90%** → da **$174.00 / mes** (`86% de ahorro · $1,026 USD`). Aclará a Anabela que no conviene llevarlo a 95% si hay casos legales o ambiguos que requieren el modelo grande.
- **Ejemplo práctico para contar:** Mesa de ayuda con 10.000 tickets/mes: clasificar idioma, prioridad o dudas repetitivas pasa por *Flash/Haiku*, y solo reclamos complejos o contratos bajo NDA se derivan a *Sonnet/GPT-4o*.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Routing:** Un filtro en la puerta que manda las tareas fáciles a un modelo barato y rápido, y las difíciles al modelo más potente.

### ⚡ Dinámica / Interacción en Pantalla
- Explicá los dos carriles a la izquierda y mové el deslizador de la derecha en vivo para ver cómo cambia el gráfico SVG y baja el costo de $1,200 a $288 USD/mes.

### 🔗 Puente de Conexión → Slide 4 (FinOps 2: Batch API (-50%) y costos ocultos (TCO))
> **"Con Model Routing optimizamos el chat que necesita respuesta inmediata. Pero ¿qué pasa con los procesos masivos que pueden esperar hasta la mañana siguiente, y qué otros gastos quedan afuera cuando solo mirás el precio del token? Pasemos a la Slide 4."**

---

## Slide 4: FinOps 2: Batch API (-50%) y costos ocultos (TCO)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Batch API (-50%) · TCO real · Idiomas ES/PT vs EN

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar Batch API (-50%) para tareas que pueden esperar horas y sumar al presupuesto los 4 gastos ocultos del TCO (incluyendo +20-30% de tokens en ES/PT).
- **👆 Qué tocar en la Slide:** Compará la tarjeta izquierda (Tiempo real vs Batch) y los 4 puntos del TCO a la derecha.
- **💬 La analogía ganadora:** Batch API es el envío programado nocturno a mitad de precio en lugar de moto urgente; el TCO es contar seguro y mantenimiento además de la nafta.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Acá tenés dos puntos que en presupuestos reales te diferencian enseguida. **[Señalá el gráfico de barras a la izquierda]** El primero es separar qué necesita respuesta en vivo y qué puede esperar. Si un usuario está mirando la pantalla en un chat, vas por modo **Síncrono** menos de dos segundos y pagás el `100%` de tarifa. Ahora, si a las seis de la tarde entra un paquete de 3.000 strings de un release para pre-traducir o revisar glosarios antes de las nueve de la mañana siguiente, no tiene sentido pagar urgencia: lo mandás por **Batch API** de AWS Bedrock u OpenAI, se procesa en 1 a 12 horas y pagás exactamente **`-50%`**, la mitad.

**[Señalá la barra apilada de TCO y los 4 puntos a la derecha]** El segundo punto es el **Costo Total de Propiedad (TCO)**, porque calcular solo la respuesta del modelo deja afuera cuatro gastos fijos y variables reales. Primero, las **vueltas internas del agente**, que en cada paso reenvía contexto acumulado. Segundo, la **infraestructura fija** de Base Vectorial y Langfuse, que suele arrancar entre `$70` y `$250 USD/mes`. Tercero —y esto te toca directo por Localización— el **idioma**: los tokenizadores están optimizados para inglés, así que español y portugués suelen gastar alrededor de `20%` a `30%` más tokens para decir lo mismo. Y cuarto, el gasto en **evaluaciones automáticas y horas humanas de revisión**.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Gráfico Batch API (-50%) y Barra de TCO
1. En la tarjeta izquierda, señalá la barra azul completa (**Síncrono · < 2s · 100% tarifa**) frente a la barra verde a mitad de ancho (**Batch API · 1-12h · -50% costo**).
2. En la tarjeta derecha, señalá la barra horizontal apilada (`Tokens base` / `Vueltas agente` / `Idioma ES/PT` / `Infra + Evals`) para mostrar visualmente que la API pura es solo una fracción del presupuesto mensual.
- **Ejemplo práctico para contar:** Cierre de release a las 18:00 hs con 3.000 strings nuevos para revisar glosario antes de las 9:00 hs: entra por *Batch API* pagando 50%, y presupuestás ~20-30% extra de tokens por ser español/portugués frente a inglés.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **TCO (Costo Total de Propiedad):** Todo lo que cuesta mantener el sistema andando por mes: tokens, base vectorial, monitoreo, evaluaciones y revisión humana.

### ⚡ Dinámica / Interacción en Pantalla
- Compará las barras Síncrono vs. Batch API a la izquierda y recorré la barra apilada con los 4 puntos del TCO a la derecha marcando la diferencia de tokens por idioma.

### 🔗 Puente de Conexión → Slide 5 (Build vs. Buy vs. Configure (y cómo evitar Vendor Lock-in))
> **"Igual, antes de calcular servidores y facturas de API, hay una decisión previa como PM que te puede ahorrar meses enteros de desarrollo innecesario. Mirémosla en la Slide 5."**

---

## Slide 5: Build vs. Buy vs. Configure (y cómo evitar Vendor Lock-in)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Build vs. Buy · Model Gateway · Vendor Lock-in

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Evaluar Buy vs Configure vs Build antes de pedir devs, y usar un Model Gateway si se desarrolla propio para no quedar atado a un proveedor.
- **👆 Qué tocar en la Slide:** Recorré las 3 tarjetas y tocá '1. Llamadas internas', '2. Piloto QA + Jira' y '3. Motor 500k docs/mes'.
- **💬 La analogía ganadora:** Para ir al aeropuerto te tomás un taxi (Buy); no te comprás una fábrica de autos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Cuando surge una necesidad nueva de IA, muchos equipos piden programadores de entrada, y ese suele ser un error de foco. **[Señalá las tres tarjetas arriba]** Primero siempre evaluás estos tres niveles. **Buy (SaaS)** es comprar algo ya armado en días sin usar equipo de desarrollo, ideal para resúmenes de reuniones o traducción estándar que no diferencia al negocio. **Configure** tarda de una a tres semanas y conecta plataformas que ya usás como Jira, Slack o repositorios mediante Bedrock KB, n8n o MCP. Y recién **Build** —que lleva meses y desarrolladores dedicados— se justifica si el producto es central para la empresa.

**[Señalá el diagrama Model Gateway abajo a la izquierda]** Fijate en ese esquema: si decidís construir o configurar algo propio, nunca conectes tu aplicación directo a un solo proveedor. Ponés en el medio un **Model Gateway** como *AWS Bedrock* o *LiteLLM* para poder cambiar mañana de *Claude* a *GPT-4o* o *Gemini* sin reescribir código y sin quedar atada por contrato ni arquitectura.

**[Señalá los tres botones abajo a la derecha]** Probemos estos tres escenarios antes de hacer clic: ¿qué elegirías para cada uno? **[Tocá '1. Llamadas internas']** Acá conviene **BUY (~3 días)**: resumir reuniones internas no justifica mantener desarrollo propio. **[Tocá '2. Piloto QA + Jira']** Acá conviene **CONFIGURE (~2 semanas)** usando conectores MCP para validar si la gente realmente lo adopta. **[Tocá '3. Motor 500k docs/mes']** Y recién con medio millón de documentos médicos por mes tiene sentido **BUILD vía Model Gateway** en 8 a 12 semanas.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Diagrama Model Gateway y Casos Build vs. Buy
1. Mostrá primero las 3 tarjetas superiores (`BUY · SAAS`, `CONFIGURE`, `BUILD · GATEWAY`) y el diagrama SVG inferior izquierdo (`Tu Producto → Model Gateway [Bedrock / LiteLLM] → Claude / GPT-4o / Gemini`).
2. Antes de tocar cada botón abajo a la derecha, preguntale a Anabela qué elegiría ella.
3. Presioná **'1. Llamadas internas'** → sale en azul `Conviene BUY (SaaS) · ~3 días` (no justifica equipo propio).
4. Presioná **'2. Piloto QA + Jira'** → sale en ámbar `Conviene CONFIGURE (Managed + MCP) · ~2 semanas`.
5. Presioná **'3. Motor 500k docs/mes'** → sale en violeta `Conviene BUILD vía Model Gateway · 8-12 semanas`.
- **Ejemplo práctico para contar:** Si dentro de 6 meses sale un modelo más barato o preciso para español/portugués, tener un *Model Gateway* en el medio te deja cambiarlo en configuración sin rehacer la aplicación.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Gateway (Anti Vendor Lock-in):** Un adaptador único (como AWS Bedrock o LiteLLM) para cambiar de modelo de IA sin rehacer la aplicación.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 3 columnas arriba, señalá el esquema de Model Gateway a la izquierda y hacé clic en los 3 botones abajo ('1. Llamadas internas', '2. Piloto QA + Jira', '3. Motor 500k docs/mes').

### 🔗 Puente de Conexión → Slide 6 (Ejercicio 1: Costos de IA vs. tiempo del equipo)
> **"Ahora supongamos que el caso sí amerita armar un piloto interno y tenés que sentarte frente a Finanzas a defender el presupuesto con números reales. Hagamos esa cuenta en la Slide 6."**

---

## Slide 6: Ejercicio 1: Costos de IA vs. tiempo del equipo
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Capacidad liberada · TCO real · Cuenta Finanzas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Comparar 3 escenarios (Óptimo $209.16, Sin FinOps $423.00 y Volumen Bajo 134.3 semanas), aclarando que es capacidad liberada y no recorte directo de nómina el mes 1.
- **👆 Qué tocar en la Slide:** Recorré las 3 tarjetas estáticas de izquierda a derecha y cerrá con la nota inferior para Finanzas.
- **💬 La analogía ganadora:** Si liberás 1.000 horas del equipo no reducís personal al día siguiente: usás esas horas para absorber más volumen o bajar atrasos sin contratar de más.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
En esta slide dejamos tres escenarios cerrados uno al lado del otro para que veas cómo defender los números frente a Finanzas sin inflar ahorros falsos. **[Señalá la tarjeta izquierda: Escenario 1 · Óptimo]** Mirá el primer escenario con un volumen real: `5.000 documentos` por mes de `15 minutos` a `$20` la hora. Hacerlo a mano suma `1.250 horas` (`7.8 FTE`), un valor de **`$25,000 USD`**. Con Routing, Batch y suma fija de TCO más `20%` de revisión humana, la operación IA + HITL cuesta **`$5,209` (`21%`)** y solo **`$209.16/mes`** en API + infraestructura + Evals. Libera tiempo por **`$19,790.84`** al mes, y un piloto de `$15.000` equivale a unas **`~3.3 semanas`** de horas liberadas.

**[Señalá la tarjeta del medio: Escenario 2 · Sin FinOps]** Mirá qué pasa con el mismo volumen si salís sin *Model Routing* ni *Batch*: pagás `$225` directos de API y con Evals + TCO fijo la cuenta sube a **`$423.00/mes`**, más del doble de costo de IA.

**[Señalá la tarjeta derecha: Escenario 3 · Volumen Bajo]** Y fijate el tercer caso para saber cuándo decir que no: si tenés solo `500 docs` de `5 minutos`, el tiempo manual vale **`$833`**, pero la infraestructura fija de `$180` deja la IA en `$182.92/mes` y el total sube al **`42%`** (`$350`), estirando el repago a **`~134.3 semanas`**. **[Señalá la nota inferior]** Y en todos los casos, cerrá con la nota de abajo: esto es **capacidad liberada** para absorber volumen o bajar demoras, no recorte de nómina el mes 1.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Comparativa visual de 3 escenarios ante Finanzas
1. **Tarjeta 1 (Escenario 1 · Óptimo):** Mostrá las dos barras (`Manual $25,000` vs `IA + HITL $5,209 (21%)`), remarcando que `IA + TCO + Evals` da `$209.16/mes` y el piloto `$15.000` equivale a `~3.3 semanas` de capacidad liberada.
2. **Tarjeta 2 (Escenario 2 · Sin FinOps):** Señalá cómo sin Routing ni Batch el costo de IA se duplica de `$209` a `$423 (+102%)` con el mismo tráfico.
3. **Tarjeta 3 (Escenario 3 · Volumen Bajo):** Mostrá el límite inferior (`500 docs · 5 min`): los `$180` fijos de infra mantienen la barra en `42%` y el repago salta a `~134.3 semanas` (`No conviene construir a medida`).
4. Cerrá leyendo el recuadro ancho inferior sobre **capacidad liberada** frente a nómina.
- **Ejemplo práctico para contar:** Propuesta ante Finanzas para asistir en revisión documental de 5.000 archivos/mes: en lugar de prometer bajar sueldos desde el mes 1, mostrás con los 3 escenarios que optimizás costos, sabés cuándo no conviene construir y que el equipo actual absorbe más volumen.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Capacidad Liberada:** Horas del equipo que dejan de ir a revisión repetitiva y pasan a tareas de mayor criterio, absorbiendo más trabajo sin sumar sueldos.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré de izquierda a derecha las 3 tarjetas estáticas de escenarios (Óptimo, Sin FinOps y Volumen Bajo) y cerrá leyendo el recuadro inferior para Finanzas.

### 🔗 Puente de Conexión → Slide 7 (Lanzamiento gradual: Shadow Mode, Canary y feedback)
> **"Con los números aprobados, pasamos del presupuesto a la operación: cómo lanzamos esto sobre tráfico real sin exponer errores frente a los clientes desde el día uno. Vamos a la Slide 7."**

---

## Slide 7: Lanzamiento gradual: Shadow Mode, Canary y feedback
- **⏱️ Tiempo estimado:** 6 Min | **🏷️ Etiquetas:** Shadow Mode · Canary Rollout · Feedback continuo

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Lanzar en 3 etapas: Shadow Mode (silencioso), Canary con Feature Flags (5% → 100%) y feedback hacia el Golden Dataset, monitoreado en Langfuse.
- **👆 Qué tocar en la Slide:** Hacé clic en Etapa 1, Etapa 2 y Etapa 3 mirando la barra inferior y señalá la nota de Langfuse.
- **💬 La analogía ganadora:** Primero trabaja a puertas cerradas al lado del equipo (Shadow), después atiende un 5% de pedidos supervisado (Canary) y cada corrección queda anotada.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
A diferencia del software clásico, donde probás en staging y salís para todos igual, un sistema de IA puede responder distinto frente a entradas nuevas. Por eso nunca se habilita directo al 100%. **[Señalá el diagrama SVG arriba y hacé clic en '1. Shadow Mode']** Durante las primeras una o dos semanas corre en **Shadow Mode**: procesa pedidos reales en segundo plano sin mostrar nada al cliente, y el panel inferior confirma **`0% clientes`** y **`Sin impacto en el usuario final`**. Recién avanzamos si alcanza un acuerdo mayor o igual al **`90%`** frente al equipo humano. Y fijate abajo donde dice **Langfuse**: Langfuse es el **panel de monitoreo de IA** donde queda guardada cada consulta con su respuesta, costo y latencia para poder comparar qué habría dicho el bot contra lo que hizo el equipo —después en la Slide 11 lo vamos a ver abierto por dentro—.

**[Hacé clic en '2. Canary Rollout']** Cuando supera ese corte pasamos a **Canary Rollout**, habilitando con *Feature Flags* del **`5%`** al **`25%`** y hasta el **`100%`** gradualmente. Si el monitoreo marca latencia P95 arriba de `1.5s` o sube el gasto, tenemos **rollback en un clic**.

**[Hacé clic en '3. Circuito de feedback']** Y ya en vivo arranca el tercer paso de la flecha punteada: cada reporte negativo y corrección del especialista entra al **Golden Dataset** semanal para que el mismo fallo no vuelva a repetirse.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Pipeline Interactivo de Rollout (SVG + Tarjetas)
1. Recorré el diagrama SVG superior (`1. Shadow Mode → 2. Canary Rollout → 3. Producción + Feedback`) y señalá la flecha punteada inferior (`Correcciones → Golden Dataset`).
2. Clic en **1. Shadow Mode** → el panel inferior marca `0% clientes`, `Sin impacto`, `Acuerdo ≥ 90%` y **Comparar en Langfuse (panel de monitoreo)**. Señalá la nota al pie explicando qué es Langfuse.
3. Clic en **2. Canary Rollout** → cambia a `5% → 25% → 100% gradual`, `rollback en 1 clic` y vigilar costo, latencia y Drift en Langfuse.
4. Clic en **3. Circuito de feedback** → pasa a `100% en vivo con feedback` y sumar cada error corregido al *Golden Dataset*.
- **Ejemplo práctico para contar:** Asistente nuevo de QA lingüístico: corre 2 semanas en *Shadow* frente al criterio del equipo; recién al superar 90% de coincidencia en Langfuse se habilita *Canary* en un único par de idiomas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Langfuse (Panel de monitoreo de IA):** Herramienta donde queda registrado el historial de cada consulta a la IA: qué respondió, cuánto costó, cuánto tardó y qué evaluación tuvo.
- **Shadow Mode (Modo Sombra):** Correr el agente sobre casos reales sin que el usuario vea sus respuestas, solo para medir acierto contra el equipo humano.
- **Canary Rollout + Feature Flags:** Habilitar la función para un porcentaje chico de usuarios con una llave de apagado rápido.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las 3 etapas (en las tarjetas o en el pipeline SVG superior) para mostrar cómo cambian exposición, riesgo, criterio de avance y tarea del PM, aclarando qué es Langfuse.

### 🔗 Puente de Conexión → Slide 8 (UX en productos de IA, Spikes en Agile y riesgos actuales)
> **"Ahora bien, hay proyectos técnicamente sólidos que salen en Canary y aun así la gente no los usa, o chocan con reglas legales nuevas. Veamos UX, planificación en Agile y los riesgos de hoy en la Slide 8."**

---

## Slide 8: UX en productos de IA, Spikes en Agile y riesgos actuales
- **⏱️ Tiempo estimado:** 9 Min | **🏷️ Etiquetas:** UX & Streaming · Discovery Spike · Shadow AI & EU AI Act

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Explicar por qué falla la adopción por mala UX, cómo usar Discovery Spikes de 1 semana antes de comprometer fechas, y los 3 riesgos de 2026 (Shadow AI, EU AI Act, IP).
- **👆 Qué tocar en la Slide:** Tocá '12s congelada' vs '0.8s streaming' y repasá los 3 bloques de la derecha.
- **💬 La analogía ganadora:** Discovery Spike es probar una tanda chica de 30 casos antes de prometer 3 meses; frenar Shadow AI es ofrecer una vía segura en vez de solo prohibir.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Un asistente puede acertar el 95% de las veces y fracasar igual si tiene mala experiencia de uso. **[Señalá los 3 puntos arriba a la izquierda]** Lo primero es la velocidad percibida: buscá que el primer token aparezca en menos de un segundo usando **Token Streaming** y llamadas en paralelo. Lo segundo es no encerrar todo en un chat vacío: poné botones concretos dentro de Jira o del TMS con citas clicables. Y tercero, en **Agile** no prometas un trimestre entero sin saber si los datos acompañan: corré antes un **Discovery Spike de 5 días con unos 30 casos reales**.

**[Tocá '12s congelada' y luego '0.8s streaming' en la mini-demo]** Mirá la diferencia abajo: sin streaming la pantalla queda congelada doce segundos y muchos cierran la pestaña; con streaming a los `0.3s` avisamos qué estamos consultando y a los `0.8s` ya empieza a responder.

**[Señalá las 3 filas de la tarjeta derecha]** Eso conecta directo con los riesgos actuales más allá de ocultar datos personales. Primero, el **Shadow AI**: mandar un mail prohibiendo IA pública no frena nada si tu herramienta interna es incómoda; la única salida es dar una alternativa segura en su flujo diario. Segundo, el **EU AI Act**, que en casos sensibles como CVs o desempeño exige registro de trazas, supervisión humana y avisar que interactúan con IA. Y tercero, revisar cláusulas de **Propiedad Intelectual** y sesgos en idiomas fuera del inglés.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Mini-demo UX de Espera Percibida
1. Tocá primero el botón **'12s congelada'** → la consola cambia a rojo mostrando 3 llamadas en fila sin respuesta ni feedback visual (causa directa de abandono).
2. Volvé a tocar **'0.8s streaming'** → muestra en verde el aviso temprano a los `0.3s` (`Consultando Jira + glosario en paralelo`) y respuesta progresiva desde los `0.8s`.
3. Conectalo enseguida con la tarjeta derecha (**Shadow AI**): si la herramienta oficial tarda 12s y obliga a salir de Jira, el equipo vuelve a usar cuentas externas personales.
- **Ejemplo práctico para contar:** En vez de mandar un correo prohibiendo chatbots públicos, ponés un botón directo en Jira/TMS con *streaming* rápido conectado al modelo corporativo bajo NDA.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Discovery Spike:** Una prueba corta de 5 días con ~30 casos reales al arranque para comprobar si los datos sirven antes de armar todo el roadmap.
- **Shadow AI:** Cuando la gente usa herramientas de IA personales en el trabajo porque la empresa no le dio una opción aprobada que le sirva.

### ⚡ Dinámica / Interacción en Pantalla
- Alterná los dos botones de la mini-demo ('12s congelada' vs '0.8s streaming') y repasá los 3 riesgos actuales de la derecha.

### 🔗 Puente de Conexión → Slide 9 (AI Evals en la práctica: Tríada RAG, Agentes y Model Drift)
> **"Ya cubrimos presupuesto, salida gradual, experiencia de uso y riesgos. Entremos ahora al tercer bloque: cómo diagnosticar exactamente qué falló cuando baja la calidad y cómo monitorearlo cada semana. Pasemos a la Slide 9."**

---

## Slide 9: AI Evals en la práctica: Tríada RAG, Agentes y Model Drift
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tríada RAG → Sprint · Trajectory Evals · Model Drift & SME

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mapear la Tríada RAG a tickets concretos del sprint, sumar Trajectory Evals para agentes y entender Model Drift + calibración con criterio humano (SME).
- **👆 Qué tocar en la Slide:** Recorré el triángulo a la izquierda y el diagrama de trayectoria a la derecha.
- **💬 La analogía ganadora:** Si el buscador trajo la página equivocada del manual, el problema no es quien redactó la respuesta: hay que corregir el índice.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
En la Sesión 2 viste que existe un *Golden Dataset* para evaluar respuestas. Acá bajamos a tierra cómo leés esas métricas en un sprint para saber qué área del equipo tiene que actuar. **[Señalá el diagrama triangular SVG arriba a la izquierda]** Fijate en la **Tríada RAG**: cada lado conecta dos piezas y te marca un ticket distinto. Si cae la **Fidelidad** —entre Contexto y Respuesta— significa que el modelo inventó fuera del manual, así que el ticket va a ajustar *System Prompt*, bajar temperatura a `0.0` o reforzar un *Guardrail*. Si cae la **Precisión de Contexto** —entre Pregunta y Contexto— no le eches la culpa al prompt: el buscador trajo fragmentos malos y hay que revisar *Chunking*, metadatos o *Top-K* en la Vector DB. Y si baja la **Relevancia**, respondió por las ramas y ajustás formato y extensión.

**[Señalá el diagrama de secuencia SVG a la derecha]** Ahora bien, en agentes no alcanza mirar la salida final: ves en el gráfico `Input → Tool 1 → JSON OK → Tool 2 → Salida` lo que se llama **Trajectory Evaluation**, donde medís si eligió la herramienta correcta y mandó bien el JSON paso a paso. Y abajo tenés un tema clave: el **Model Drift**. A veces nadie tocó tu código, pero el proveedor actualizó el modelo o alguien bajó a una versión más económica y cayó la calidad en silencio. Ahí para calibrar un evaluador automático necesitás criterio real de idioma y negocio, justo lo que vos traés de **QA y Traducción**.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Diagramas SVG de Tríada RAG y Trajectory Evaluation
1. En el diagrama triangular izquierdo, señalá las 3 aristas: **Pregunta ↔ Contexto** (`Precisión Contexto`), **Contexto ↔ Respuesta** (`Fidelidad`) y **Pregunta ↔ Respuesta** (`Relevancia`).
2. Usá ese triángulo para remarcar que el PM no pide "mejorar el prompt" para todo: si falla `Contexto`, el ajuste va al buscador/chunking.
3. En el diagrama derecho (`Input → Tool 1 → JSON OK → Tool 2 → Salida`), señalá el corchete inferior **`Eval de trayectoria (paso a paso)`**.
- **Ejemplo práctico para contar:** Un agente de soporte responde algo prolijo, pero en el camino consultó 4 veces la misma API y mandó mal un campo JSON: en agentes medís toda la secuencia, no solo la frase final.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Drift:** Caída silenciosa de calidad en producción aunque el código no haya cambiado, por actualización del proveedor o cambio de modelo.
- **Trajectory Evaluation:** Revisar si un agente eligió bien las herramientas paso a paso, más allá de cómo redactó la respuesta final.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá el triángulo de la Tríada RAG a la izquierda y el flujo de Trajectory Evaluation a la derecha para explicar qué parte arreglás según cada falla.

### 🔗 Puente de Conexión → Slide 10 (Ejercicio 2: Simulador de auditoría Evals)
> **"Para que no quede en teoría, probemos este mismo diagnóstico en vivo en el simulador de la Slide 10."**

---

## Slide 10: Ejercicio 2: Simulador de auditoría Evals
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Bot de ventas · Alucinación vs Retrieval · Diagnóstico

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar un bot de ventas (Notebook $900 vs envío gratis desde $1.000) para distinguir al instante si inventó el modelo (Fidelidad) o si falló el buscador (Retrieval).
- **👆 Qué tocar en la Slide:** Tocá 'Alucinación', 'Fallo Retrieval', 'Sana' viendo cambiar el ejemplo a la izquierda y mové el slider 3.
- **💬 La analogía ganadora:** Es separar si el vendedor inventó un descuento de la nada (Fidelidad) o si alguien le alcanzó la planilla equivocada de horarios en vez de la lista de precios (Contexto).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Probemos el criterio de la Tríada RAG con un ejemplo bien simple del día a día: un **bot de ventas** de una tienda. **[Señalá la tarjeta izquierda]** Un cliente pregunta: *"¿La Notebook Air 14 tiene stock y envío gratis?"*. En este primer caso el fragmento del catálogo recuperado es exacto: dice que sale `$900 USD` y que el envío gratis corre recién **desde `$1.000 USD`**. Pero mirá la frase en rojo al final de la respuesta del bot: por quedar amable con el cliente, inventó que incluye **envío gratis a todo el país y 20% de descuento hoy**.

**[Señalá el botón activo 'Alucinación' arriba a la derecha]** Acá la **Precisión del contexto** es `1.0` porque el buscador trajo la ficha correcta, pero la **Fidelidad** cae a `0.2`. Veredicto: **`RECHAZADO (70%)`** y el ticket va derecho a **Prompt / Temperatura 0.0 / Guardrail** para frenar promesas comerciales falsas.

**[Hacé clic en 'Fallo Retrieval']** Ahora mirá qué pasa cuando cambia el escenario a la izquierda: el buscador recuperó un fragmento sobre **horarios de sucursales y cambios**, no la ficha de la notebook. El bot no inventó nada (`Fidelidad 0.9`), pero faltó el dato (`Contexto 0.3`). Sigue rechazado (`67%`), pero el ticket no va al prompt: va a **Chunking / Metadatos / Vector DB**. **[Hacé clic en 'Sana' y luego bajá manualmente el slider 3 'Relevancia' a 0.5]** En **`Sana`** responde exacto aclarando que el envío gratis aplica desde `$1.000 USD` (`APROBADO PARA CANARY 95%`), y si bajamos **Relevancia** ves el tercer ticket posible para ajustar formato e instrucción.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Calificador Interactivo Tríada RAG sobre un Bot de Ventas
1. Leé la tarjeta izquierda con **'Alucinación'** activo: el catálogo aclara envío gratis desde `$1.000 USD`, pero el bot promete en rojo envío gratis y `20%` de descuento (`0.2 / 1.0 / 0.9` → `RECHAZADO 70%`, ticket a `Prompt / Temperatura 0.0 / Guardrail`).
2. Tocá **`Fallo Retrieval`** → cambian el fragmento y la respuesta a la izquierda (el buscador trajo horarios de sucursales en lugar del producto: `0.9 / 0.3 / 0.8` → `RECHAZADO 67%`, ticket a `Chunking / Metadatos / Vector DB`).
3. Tocá **`Sana`** → cambia el texto a verde (`0.95 / 0.95 / 0.95`, aclarando que el envío gratis aplica desde `$1.000 USD` → `APROBADO PARA CANARY 95%`).
4. Con los otros dos en `0.95`, bajá manualmente el 3er slider (`3. Relevancia`) a `0.5` → muestra el 3er ticket posible: `Baja Relevancia (< 0.80): Ticket para ajustar formato e instrucción de respuesta`.
- **Ejemplo práctico para contar:** Cuando en tienda online o soporte alguien dice "el bot mintió un descuento o no encontró el precio", este esquema separa al instante si falló el catálogo indexado (Retrieval) o si el modelo inventó una promoción (Fidelidad).

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Diagnóstico de causa raíz:** Identificar si el error salió del buscador del catálogo o del modelo antes de abrir una tarea en Jira.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá los 3 botones arriba a la derecha ('Alucinación', 'Fallo Retrieval', 'Sana') viendo cómo cambian el catálogo recuperado, la respuesta del bot de ventas y el ticket; luego bajá el slider 3 'Relevancia'.

### 🔗 Puente de Conexión → Slide 11 (Monitoreo en producción con Langfuse)
> **"Ahora bien: cuando este sistema ya está corriendo en producción todos los días, ¿en qué pantalla abrís cada consulta para ver esos datos sin depender de un desarrollador? Vamos a la Slide 11 para ver Langfuse."**

---

## Slide 11: Monitoreo en producción con Langfuse
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Langfuse · Traces & Spans · Latencia P95

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Leer trazas estilo waterfall en Langfuse (Router/Retrieval, LLM, Eval) y revisar cada semana origen de errores, Model Drift y P95.
- **👆 Qué tocar en la Slide:** Desplegá Span 1 y Span 2 a la izquierda y tocá 'Simular reporte → mandar al Golden Dataset'.
- **💬 La analogía ganadora:** Es la caja negra y el ticket detallado de cada consulta: ves en 10 segundos qué paso tardó o falló y cuánto costó.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
¿Te acordás que en Shadow Mode y Canary nombramos a **Langfuse** como el panel de registro y monitoreo de IA? Acá es donde lo ves por dentro sin tener que pedirle capturas a desarrollo. **Langfuse** guarda el historial completo de cada consulta dividida en pasos o *Spans*, con una regla temporal arriba de `0ms` a `1.15s`. **[Señalá las barras waterfall a la izquierda]** Fijate a simple vista en la barra ámbar: el sistema tardó `1.15s` en total y costó `$0.0011`, pero casi todo el tiempo (`900ms`) estuvo en la generación del modelo.

**[Hacé clic en '[Span 1] Router y Retrieval']** Si abrís el **Span 1** ves qué decidió el router —mandó la consulta a *Gemini Flash* gastando apenas `$0.0001` en `160ms`— y qué fragmentos encontró filtrando por `ES-LATAM, 2026`. **[Hacé clic en '[Span 2] Generación LLM']** En el **Span 2** confirmás que el primer token salió a los `220ms` y qué página del manual citó. **[En '[Span 3] Eval y Feedback', tocá 'Simular reporte → mandar al Golden Dataset']** Y cuando alguien marca un error, fijate cómo con ese clic el caso `#S4-PROD-992` queda guardado directo para sumar al *Golden Dataset*.

**[Señalá los 3 puntos de la tarjeta derecha]** Todas las semanas revisás tres cosas rápidas en Langfuse: primero, aislar Span 1 vs. Span 2 si reportan un fallo; segundo, detectar *Model Drift* si baja Fidelidad sin cambios de código; y tercero, controlar el gasto por área y la latencia P95.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Traza Waterfall Interactiva en Langfuse
1. Señalá primero la regla temporal (`0ms` → `500ms` → `1.15s`) y las 4 barras horizontales: la barra ámbar del **Span 2** muestra a simple vista dónde está el `78%` de la espera (`900ms` de `1.15s`).
2. Hacé clic en **`[Span 1] Router y Retrieval`** para desplegar su detalle: usó `Gemini Flash` (`$0.0001`), filtró `ES-LATAM, 2026` con similitud `0.91`.
3. Hacé clic en **`[Span 2] Generación LLM`** para desplegar `TTFT: 220ms · Streaming`, `180 tokens` y la cita al manual.
4. En **`[Span 3] Eval y Feedback`** (abierto), tocá el botón **`Simular reporte → mandar al Golden Dataset`** → el estado cambia a verde: `PASS: Caso #S4-PROD-992 guardado con la corrección → sumado al Golden Dataset.`
- **Ejemplo práctico para contar:** Un lunes reportan que el asistente respondió mal un dato de lanzamiento: en 20 segundos abrís la traza, confirmás si la búsqueda trajo el chunk viejo (*Span 1*) o si redactó mal (*Span 2*), y guardás el caso para pruebas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Latencia P95:** El tiempo máximo que tarda para el 95% de los usuarios; evita que un promedio lindo esconda demoras feas en casos puntuales.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá las barras de tiempo waterfall, hacé clic para desplegar Span 1 y Span 2, tocá 'Simular reporte → mandar al Golden Dataset' y repasá los 3 chequeos semanales.

### 🔗 Puente de Conexión → Slide 12 (Cómo encarar entrevistas técnicas y defender tu perfil)
> **"Con toda la parte de presupuesto, salida gradual y monitoreo resuelta, usemos los últimos quince minutos para entrevistas técnicas y cómo defender tu perfil. Vamos a la Slide 12."**

---

## Slide 12: Cómo encarar entrevistas técnicas y defender tu perfil
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Entrevistas IT · Trade-offs · Localización → IA

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Ordenar respuestas en 3 puntos (1. Diagnóstico → 2. Propuesta y trade-off → 3. Métrica de corte) y responder sobre experiencia previa conectando Localización con Evals, HITL y multilingüe.
- **👆 Qué tocar en la Slide:** Señalá primero los 3 pasos a la izquierda y después la pregunta y los 3 puentes a la derecha.
- **💬 La analogía ganadora:** Tu experiencia en Localización no queda afuera: es exactamente el criterio de lenguaje, calidad y coordinación que falta en muchos equipos técnicos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Entramos al bloque final de entrevistas, dividido en tres pantallas: primero vemos cómo ordenar cualquier respuesta, y después hacemos dos simulacros concretos donde yo hago de entrevistador. Cuando vas a una entrevista de Project o Product Manager para equipos con IA, nadie espera que escribas código: miran cómo decidís bajo incertidumbre. **[Señalá los 3 pasos a la izquierda]** Si seguís esta **estructura de tres pasos** no fallás: primero decís qué revisás con datos —trazas en Langfuse y charlas con usuarios— antes de pedir cambios; segundo hacés una propuesta concreta aclarando el *trade-off*, o sea qué dejás afuera hoy; y tercero definís de entrada la métrica de corte.

**[Señalá la tarjeta derecha y la pregunta arriba: '¿Tenés experiencia real con productos de IA?']** Y ante la pregunta típica de si ya manejaste productos de IA, mirá cómo tu perfil de Localización encaja directo acá. Haber armado **glosarios y QA lingüístico** es definir rúbricas de Evals. **Coordinar traductores y entregas** es gestionar flujos *Human-in-the-Loop*, SLAs y negocio. Y liderar **proyectos multilingües** te hace prever el gasto extra de tokens en español y portugués y sesgos culturales. Elegí uno de estos tres puentes ahora y contame en treinta segundos cómo responderías.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Práctica Oral con Puentes Visuales (Localización → IA)
1. Repasá la plantilla de 3 pasos a la izquierda (`1. Diagnóstico con datos → 2. Propuesta y trade-off → 3. Métrica de corte`) que va a usar en las Slides 13 y 14.
2. Leé la pregunta guía de la tarjeta derecha (`"¿Tenés experiencia real con productos de IA?"`) y pedile a Anabela que elija uno de los 3 puentes (`Glosarios y QA → Rúbricas Evals`, `Coordinar traductores → Flujos HITL` o `Multilingüe ES/PT → FinOps y sesgos`) para responder en 30 segundos con un ejemplo real suyo.
- **Ejemplo práctico para contar:** Si preguntan *"¿Tenés experiencia real evaluando productos de IA?"*, responde: *"Vengo de dirigir glosarios y QA multilingüe: definir criterios de fidelidad, tono y ambigüedad con revisores humanos es exactamente la base para armar rúbricas de AI Evals y calibrar flujos HITL."*

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Trade-off:** Elegir qué priorizás y qué dejás de lado (por ejemplo, velocidad o costo frente a cobertura total en una primera etapa).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá los 3 pasos de la izquierda y planteá la pregunta de la derecha ('¿Tenés experiencia real con productos de IA?') para que Anabela elija uno de los 3 puentes y arme una respuesta de 30 segundos.

### 🔗 Puente de Conexión → Slide 13 (Caso de entrevista 1: Baja adopción y presupuesto en riesgo)
> **"Ahora vamos a probar esta estructura de tres pasos en dos simulacros donde yo hago de entrevistador y vos respondés como PM. Empecemos por el Caso 1 en la Slide 13."**

---

## Slide 13: Caso de entrevista 1: Baja adopción y presupuesto en riesgo
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Caso adopción · UX + FinOps · Paso 1 y Paso 2

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Caso de baja adopción en 2 pasos: auditar por qué no lo usan (12s, salir de Jira, costo) y defender Opción B ordenada en Diagnóstico, Propuesta/trade-off y Métrica.
- **👆 Qué tocar en la Slide:** Paso 1: 'Ver datos de auditoría' → Paso 2: que elija A, B o C (gana la B) y leer los 3 pasos abajo.
- **💬 La analogía ganadora:** Si nadie usa una herramienta cara, no sirve mandar un mail obligando ni agregarle funciones: primero mirás dónde se traban.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Vamos con el primer simulacro: yo hago de entrevistador y vos respondés como PM usando los tres pasos. **[Leé el recuadro 'Pregunta del entrevistador' arriba]** *"Lanzamos un asistente hace 2 meses. Pasa las pruebas técnicas, pero solo lo usa el 12% y Finanzas lo corta en 30 días. ¿Qué hacés?"*

Antes de elegir una solución, ¿qué investigarías primero? **[Tocá 'Ver datos de auditoría' en el Paso 1 a la izquierda]** Fijate qué aparece en el tablero: con `12% · 3 hallazgos` confirmamos que el modelo acierta, pero tiene tres frenos reales —espera de `~12s` sin streaming que hace abandonar, obligación de salir de Jira o del TMS para usarlo, y gasto alto por consulta sin *Model Routing*—.

**[Señalá el Paso 2 a la derecha antes de cliquear]** Con estos datos sobre la mesa, Anabela, entre la **Opción A (Empujar por mail)**, **Opción B (Fricción + costo)** y **Opción C (Cambiar modelo)**, ¿cuál defenderías y por qué? **[Comentá si surge A o C, y luego cliqueá 'Opción B']** La **Opción A** sube el uso una semana a la fuerza y vuelve a caer porque la espera sigue igual. La **Opción C** pide dos meses más y un modelo más caro justo cuando Finanzas corta en treinta días. Al cliquear **Opción B**, el tablero pasa a **`Plan defendible`** y ves la respuesta ordenada en tres pasos: **1. Diagnóstico** con Langfuse y ocho charlas cortas; **2. Propuesta y trade-off** metiendo el botón en Jira con streaming y Routing sin sumar funciones nuevas; y **3. Métrica de corte** con uso semanal recurrente y costo por usuario en treinta días.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Simulador de Entrevista 1: Paso 1 (Auditoría) → Paso 2 (Respuesta)
1. Leé el recuadro `Pregunta del entrevistador` arriba y preguntale a Anabela qué datos revisaría antes de contestar.
2. En **Paso 1 · Investigar datos**, tocá **`Ver datos de auditoría`** → el tablero muestra **`12% · 3 hallazgos`** (espera `~12s`, salir de Jira/TMS, gasto sin Routing).
3. En **Paso 2 · Elegir respuesta**, pedile a Anabela que elija entre **Opción A, B o C** antes de hacer clic.
4. Probá **Opción A** o **Opción C** si hace falta mostrar en el recuadro inferior por qué no convencen; luego tocá **`Opción B`** → se abre la respuesta en **3 pasos** (`1. Diagnóstico`, `2. Propuesta / trade-off`, `3. Métrica de corte`) y el tablero izquierdo cambia a **`Plan defendible`**.
5. Tocá **`Reiniciar`** si quieren practicar la respuesta oral de corrido sin mirar la pantalla.
- **Ejemplo práctico para contar:** Frase modelo para decir en entrevista: *"Primero confirmo con Langfuse y ocho charlas dónde se traban; después meto el botón en Jira con streaming y Routing sin sumar features nuevas; y lo mido por uso semanal y costo por usuario en treinta días."*

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fricción de flujo:** Obligar a la persona a salir de su herramienta diaria (Jira/TMS) para copiar y pegar textos en un chat aparte.

### ⚡ Dinámica / Interacción en Pantalla
- Leé la pregunta de arriba como entrevistador, tocá 'Ver datos de auditoría' en el Paso 1, dejá que Anabela elija entre Opción A, B o C en el Paso 2 y revisen la devolución abajo (gana la B).

### 🔗 Puente de Conexión → Slide 14 (Caso de entrevista 2: Caída silenciosa de calidad (Model Drift))
> **"Ahí defendiste un caso de baja adopción combinando diagnóstico con usuarios, UX y FinOps. Pasemos ahora al Caso 2 en la Slide 14, donde se cae la calidad justo en terminología legal y sumamos una pregunta extra de cierre."**

---

## Slide 14: Caso de entrevista 2: Caída silenciosa de calidad (Model Drift)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Model Drift · Feature Flag + Routing · Pregunta extra

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver un Model Drift sin tirar todo el ahorro ni tapar con revisión manual 100%: Paso 1 ('Ver reporte de Evals') → Paso 2 (gana C en 3 pasos) + Pregunta extra.
- **👆 Qué tocar en la Slide:** 1° 'Ver reporte de Evals' → 2° Debatir A, B y C (gana C) → 3° Abrir 'Pregunta extra' abajo.
- **💬 La analogía ganadora:** Si un cambio de proveedor falla solo en textos legales, no frenás toda la operación ni revisás todo a mano: separás por tipo de tarea.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Vamos con el segundo simulacro, bien cerca de tu especialidad. **[Leé 'Pregunta del entrevistador' arriba]** *"Pasamos a un modelo más barato (-60%). Unit tests en verde, pero Localización reporta errores de glosario legal. ¿Qué hacés?"*

**[Tocá 'Ver reporte de Evals' en el Paso 1 a la izquierda]** Fijate en esa aparente contradicción: los *unit tests* están en verde, pero la fidelidad del glosario cayó de `0.94` a **`0.64 · Alerta Drift`**. ¿Por qué pasó esto? Porque los tests tradicionales solo validan formato JSON, no idioma ni terminología, y además el reporte muestra que el modelo chico rinde `>= 0.90` en consultas simples y solo falla en Legal.

**[Señalá el Paso 2 a la derecha antes de cliquear]** Con ese diagnóstico, Anabela, ¿elegís **Opción A (Revertir todo)**, **Opción B (Revisión total)** u **Opción C (Rollback selectivo)**? **[Comentá A y B si surgen, y luego cliqueá 'Opción C']** Con la **Opción A** perdés el 60% de ahorro y seguís sin Evals para el próximo Drift; con la **Opción B** armás una revisión manual más cara que el modelo grande. Al tocar **Opción C**, la fidelidad vuelve a **`0.95 · Estabilizado`** y tenés la respuesta en tres pasos: **1. Diagnóstico** con el Golden Dataset por categoría en Langfuse; **2. Propuesta y trade-off** usando *feature flag* al modelo grande solo en Legal para sostener ahorro en simples; y **3. Métrica de corte** con fidelidad `>= 0.90` por categoría y alerta automática.

**[Abrí 'Pregunta extra' abajo a la izquierda]** Y para cerrar, una repregunta común de dirección: *"Nos piden sacar un agente en 30 días pero los datos no están ordenados"*. La respuesta clara es: no prometo producción en treinta días; propongo un Discovery Spike de cinco días con treinta casos reales, una vía Buy/Configure y salida en Shadow Mode.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Simulador de Entrevista 2: Paso 1 (Evals) → Paso 2 (Rollback selectivo) + Extra
1. Leé la `Pregunta del entrevistador` arriba marcando el contraste entre `UNIT TESTS: PASS` y los reclamos de Localización.
2. En **Paso 1 · Revisar Evals**, tocá **`Ver reporte de Evals`** → pasa a **`0.64 · Alerta Drift`** y explica que los unit tests miran JSON y que el modelo chico rinde `≥ 0.90` en simples, pero falla en Legal.
3. En **Paso 2 · Elegir respuesta**, debatan **Opción A, B y C** antes de cliquear. Tocá **`Opción C`** → el panel inferior explica los **3 pasos** (`1. Diagnóstico`, `2. Propuesta / trade-off`, `3. Métrica de corte`) y el tablero izquierdo sube a **`0.95 · Estabilizado`**.
4. Tocá abajo a la izquierda **`Pregunta extra: "Piden agente en 30 días sin datos"`** para desplegar la respuesta sobre `Spike de 5 días + Buy/Configure + Shadow Mode`, o tocá **`Reiniciar`** para repetir.
- **Ejemplo práctico para contar:** Frase modelo en entrevista: *"Dejo el ahorro donde las métricas por categoría en Langfuse superan 0.90 y hago rollback con feature flag solo en glosario legal, sumando alerta de Drift."*

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Routing por categoría:** Dejar el modelo económico donde las pruebas dan arriba de 0.90 y mantener el modelo grande en los casos donde el detalle importa.

### ⚡ Dinámica / Interacción en Pantalla
- Leé la pregunta de arriba, tocá 'Ver reporte de Evals' en el Paso 1, debatan A, B y C en el Paso 2 (gana C) y abrí la 'Pregunta extra' abajo a la izquierda.

### 🔗 Puente de Conexión → Slide 15 (Cierre del programa y próximos pasos)
> **"Excelente. Ya practicaste cómo responder preguntas de producto IA con datos, trade-offs y métricas concretas. Cerremos el programa viendo tus próximos pasos para este mes en la Slide 15."**

---

## Slide 15: Cierre del programa y próximos pasos
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Cierre · Repaso S1–S4 · Próximo mes

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cerrar de forma cercana repasando las 4 clases y dejando 4 tareas semanales concretas para el próximo mes.
- **👆 Qué tocar en la Slide:** Mostrá las 4 tarjetas S1–S4, la fila de 4 semanas y los 3 botones finales.
- **💬 La analogía ganadora:** Te queda el mapa entero ordenado en un solo lugar para repasar 15 minutos antes de cualquier charla técnica.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
Llegamos al cierre de las cuatro sesiones, Anabela. **[Señalá las cuatro tarjetas S1 a S4]** Mirá todo el recorrido que armaste: arrancaste entendiendo cómo trabaja ingeniería en S1, cómo buscan contexto los LLMs y RAG en S2, cómo operan los agentes ReAct con MCP y revisión humana en S3, y hoy sumaste FinOps, Build vs. Buy, salida controlada, Evals en Langfuse y defensa en entrevistas.

**[Señalá el bloque central 'Próximo mes · 4 pasos simples']** Para que todo esto te quede firme sin abrumarte, tenés un plan concreto de cuatro semanas: en la Semana 1 bajá a una página tu caso práctico usando el Mock PRD y la cuenta de TCO; en la Semana 2 actualizá CV y LinkedIn conectando Localización con proyectos de IA; en la Semana 3 practicá contar en dos minutos el flujo que viste en Antigravity con AWS MCP; y en la Semana 4 volvé al Simulador S4 y practicá defender los tres casos de entrevista sin mirar la respuesta.

**[Señalá los tres botones abajo]** Si nos quedan cinco minutos, abrimos juntos el **Simulador Práctico S4** para probar una crisis de punta a punta; si no, todo te queda acá disponible junto al **Glosario Completo S4** y el **Portal Principal** para repasar antes de cualquier entrevista.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Portfolio práctico de 1 página:** Un caso concreto (problema, arquitectura, riesgos, TCO y cómo lo medirías) listo para contar en 3 minutos en una entrevista.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 4 sesiones, recorré los 4 pasos simples para el próximo mes y recordale dónde quedan el Simulador S4, Glosario S4 y Portal.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"Todo el portal con las 4 presentaciones, los glosarios, la plantilla de PRD y los simuladores te queda abierto para consultar cuando tengas una reunión técnica o una entrevista. Te felicito por todo el recorrido y muchos éxitos en lo que sigue."**

---

## Guía paso a paso: Simulador Práctico Independiente (actividad_practica_sesion_4.html)

Usá este laboratorio en los últimos 5–8 minutos si queda tiempo después de la Slide 15, o dejáselo a Anabela para practicar sola antes de una entrevista. Tiene 4 decisiones a la izquierda y 3 casos de crisis a la derecha.

1. Abrí **`Simulador Práctico S4`** desde la barra superior (o el botón de cierre en la Slide 15). Dejá los 4 selectores de la izquierda en la opción inicial (configuración básica sin controles).
2. **Paso 1 — Provocar el fallo:** Sin cambiar ningún selector, tocá **`Caso 1 (Baja adopción y presupuesto)`** a la derecha → la consola sale en rojo mostrando por qué fracasa un bot caro sin streaming ni integración.
3. **Paso 2 — Arreglar un frente y mostrar qué falta:** Cambiá manualmente **`1. FinOps`** y **`2. Salida/UX`** a la opción recomendada y volvé a tocar `Caso 1` → pasa a verde (`CASO 1 RESUELTO`). Enseguida tocá **`Caso 2 (Model Drift)`** → sigue en rojo porque falta **`3. Evaluaciones y monitoreo`** (demuestra que ahorrar costos sin Evals no protege la calidad).
4. **Paso 3 — Escenario completo:** Tocá **`Cargar configuración recomendada`** arriba a la izquierda (ajusta los 4 selectores) y probá **`Caso 2`** y **`Caso 3`** repasando cada diagnóstico en consola junto con Anabela.

### Casos del Simulador Práctico

- **Caso 1: Baja adopción y presupuesto en riesgo** *(Requiere: 1. FinOps + 2. Salida/UX)*: Conectar trazas + entrevistas para llevar el flujo dentro de Jira/TMS con Token Streaming (< 1s) y bajar factura con Routing/Batch.
- **Caso 2: Model Drift en Localización** *(Requiere: 3. Evals + 1. FinOps)*: Rollback selectivo con Feature Flag en glosario crítico, Golden Dataset por categoría en Langfuse y alertas de Drift sin perder todo el ahorro.
- **Caso 3: Pedido apurado (30 días) y Shadow AI** *(Requiere: 4. Gobernanza + 2. Salida/UX)*: Discovery Spike de 1 semana con 30 casos reales + salida Configure/Buy segura contra Shadow AI mientras prueban en Shadow Mode y cuidan trazas EU AI Act.

