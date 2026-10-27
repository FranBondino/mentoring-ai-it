# Actividad Práctica y Material Post-Clase — Sesión 1
**Programa:** Mentoría Estratégica en IT, Agile & Inteligencia Artificial
**Sesión 1:** Ecosistema IT, DevOps, Cloud (AWS) y Dinámicas de Equipos

---

## 🎯 Objetivo de esta Actividad (10-15 minutos, sin estrés)
El objetivo entre la Sesión 1 y la Sesión 2 no es estudiar definiciones de memoria, sino **empezar a reconocer la arquitectura invisible** que hay detrás de las aplicaciones que usamos todos los días y practicar cómo traducir tu propia experiencia profesional al vocabulario del mundo IT.

---

## 🧩 Desafío 1: "Radiografía de una App Cotidiana" (5 minutos)
Elegí una acción que hagas todos los días en tu celular o computadora (por ejemplo: *pedir comida en PedidosYa, buscar una serie en Netflix, transferir plata en Mercado Pago o gestionar un proyecto en una plataforma de trabajo*) y respondé mentalmente o en una nota:

1. **Frontend vs. Backend:**
   - ¿Qué elementos pertenecen puramente al **Frontend** (la mesa del restaurante)?
   - ¿Qué validaciones o cálculos ocurren ocultos en el **Backend** (la cocina)?
2. **El Mesero (API REST y Verbos HTTP):**
   - Cuando tocás el botón principal de esa pantalla, ¿qué verbo HTTP está viajando por la API?
     - ¿Es un `GET` (consultar datos)?
     - ¿Es un `POST` (crear un pedido/registro nuevo)?
     - ¿Es un `PUT/PATCH` (actualizar un estado)?
     - ¿Es un `DELETE` (eliminar algo)?
3. **Semáforo de Códigos de Estado (`2xx`, `4xx`, `5xx`):**
   - Si intentás entrar con la contraseña vencida o te falta completar un campo obligatorio, ¿es un error `4xx` (del lado del cliente) o `5xx` (caída del servidor)?
   - Si la app te muestra *"Estamos experimentando demoras en nuestros servidores"*, ¿qué código numérico ocurrió atrás (`4xx` o `5xx`) y qué ambiente se vio afectado (**Staging** o **Production**)?
4. **Bases de Datos (`SQL` vs. `NoSQL` vs. `Vector DB`):**
   - ¿Qué dato de esa app guardarías sí o sí en una **Base Relacional (SQL)** por seguridad contable?
   - Si esa app tuviera un buscador inteligente con IA que entiende sinónimos e intención, ¿qué tipo de base de datos usaría?
5. **Arquitectura Modular y Metodología Agile (`Scrum` vs. `Kanban`):**
   - ¿Por qué esa app puede actualizar su buscador o su pantalla sin que se caiga el módulo de pagos (**Microservicios vs. Monolito**)?
   - Si el equipo tiene que construir una funcionalidad grande desde cero durante 2 semanas, ¿usaría **Scrum (Sprints)** o **Kanban (flujo continuo)**? ¿Y para el equipo que resuelve reclamos o bugs rápidos del día a día?

---

## ✍️ Desafío 2: "Traducí 2 Hitos de tu Experiencia al Idioma IT" (5 minutos)
Pensá en **2 logros o responsabilidades reales** de tu trabajo actual o pasado (coordinación de entregas, manejo de clientes, resolución de problemas, uso de plataformas, control de calidad o cumplimiento de plazos/SLAs) y reescribilos usando al menos **3 conceptos técnicos** de la Sesión 1:

* **Palabras clave sugeridas para integrar:**
  - *Marcos Agile (Scrum / Kanban), Backlog en Jira, Criterios de Aceptación (UAT).*
  - *Integraciones vía APIs REST, Ambientes (Staging / Producción), Pipelines de CI/CD, Infraestructura Cloud (AWS).*
  - *Gestión de SLAs, Incident Management, Release Management, Equipos multifuncionales.*

> **Ejemplo guía:**
> * **Versión tradicional:** *"Me encargaba de revisar que los proyectos salieran a tiempo y sin errores antes de mandarlos al cliente."*
> * **Versión en clave IT:** *"Lideré el control de calidad funcional (UAT) y validación de criterios de aceptación previo al Release, asegurando un 99% de cumplimiento de SLAs en entregas para clientes globales."*

---

## 🤖 Bonus: Cómo usar este material en Google NotebookLM
Podés subir el archivo `3_Slides_y_Glosario_Sesion_1_NotebookLM.md` (o pegar los links de la web) en [Google NotebookLM](https://notebooklm.google.com/) y:
1. Hacer clic en **"Resumen de Audio" (Audio Overview)** para que dos conductores de IA te armen un podcast conversado de 8 minutos repasando Frontend, Backend, APIs, Git, CI/CD, AWS y el paper *"Attention Is All You Need"*.
2. Pedirle en el chat de NotebookLM: *"Haceme 3 preguntas prácticas sobre la Sesión 1 para ver si entendí bien la diferencia entre Frontend, Backend, APIs y CI/CD"*.

---

## 🔮 Adelanto de la Sesión 2: Dentro del Cerebro de los LLMs y Arquitectura RAG
En nuestro próximo encuentro vamos a conectar las **APIs** y las **Bases de Datos Vectoriales** que vimos hoy con el mundo de los **Grandes Modelos de Lenguaje (LLMs)**:
- Cómo nació todo en 2017 con el paper *"Attention Is All You Need"* (arquitectura Transformer).
- Qué son los **Tokens** y cómo facturan las APIs de IA.
- Qué es la **Ventana de Contexto** y por qué los modelos sufren el sesgo *"Lost in the Middle"*.
- Cómo funcionan los **Embeddings** y cómo se diseña paso a paso un sistema **RAG (Retrieval-Augmented Generation)** con **Chunking & Overlap** para conectar una IA con documentos privados sin que alucine.
