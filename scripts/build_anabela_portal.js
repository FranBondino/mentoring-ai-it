const fs = require('fs');
const path = require('path');

const srcScratch = "C:\\Users\\franc\\.gemini\\antigravity\\scratch";
const srcSesiones = path.join(srcScratch, "sesiones");
const destRoot = path.join(srcScratch, "mentoria-anabela-hotian");
const destSesiones = path.join(destRoot, "sesiones");

fs.mkdirSync(destSesiones, { recursive: true });

// Copy proposal HTML & PDF into destRoot as well
fs.copyFileSync(
  path.join(srcScratch, "propuesta_mentoria_anabela_hotian.html"),
  path.join(destRoot, "propuesta_mentoria_anabela_hotian.html")
);
fs.copyFileSync(
  path.join(srcScratch, "Propuesta_Mentoria_IT_IA_Anabela_Hotian.pdf"),
  path.join(destRoot, "Propuesta_Mentoria_IT_IA_Anabela_Hotian.pdf")
);

// Check and copy any referenced images in sesiones/*.html
const sessionFiles = fs.readdirSync(srcSesiones).filter(f => f.endsWith('.html'));
const imgRegex = /src=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|gif))["']/gi;
const copiedImgs = new Set();

for (const f of sessionFiles) {
  const content = fs.readFileSync(path.join(srcSesiones, f), 'utf8');
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    const imgRel = m[1];
    if (!imgRel.startsWith('http') && !imgRel.startsWith('data:')) {
      const resolvedSrc = path.resolve(srcSesiones, imgRel);
      const resolvedDest = path.resolve(destSesiones, imgRel);
      if (fs.existsSync(resolvedSrc) && !copiedImgs.has(resolvedDest)) {
        fs.mkdirSync(path.dirname(resolvedDest), { recursive: true });
        fs.copyFileSync(resolvedSrc, resolvedDest);
        copiedImgs.add(resolvedDest);
        console.log("Copied asset:", path.basename(resolvedSrc));
      }
    }
  }
}

// 1. Adapt index.html
let indexHtml = fs.readFileSync(path.join(srcScratch, "index.html"), 'utf8');
indexHtml = indexHtml
  .replace(/Claudio Vernuccio/g, "Anabela Hotian")
  .replace(/Claudio/g, "Anabela");
fs.writeFileSync(path.join(destRoot, "index.html"), indexHtml, 'utf8');

// Helper function to apply ordered replacements
function applyReplacements(text, pairs) {
  let out = text;
  for (const [search, replace] of pairs) {
    if (typeof search === 'string') {
      out = out.split(search).join(replace);
    } else {
      out = out.replace(search, replace);
    }
  }
  return out;
}

// 2. Adapt glosario_completo_sesion_1.html
let g1 = fs.readFileSync(path.join(srcSesiones, "glosario_completo_sesion_1.html"), 'utf8');
g1 = applyReplacements(g1, [
  ["Claudio Vernuccio", "Anabela Hotian"],
  ['{"usuario": "Claudio", "rol": "PM"}', '{"usuario": "Anabela", "rol": "PM"}'],
  ["como PM de Cargill", "como PM en proyectos de tecnología"],
  ["aduanas o ERPs heredados (Legacy/SAP)", "plataformas de localización (TMS), CRMs o ERPs heredados (Legacy/SAP)"],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "la empresa"]
]);
fs.writeFileSync(path.join(destSesiones, "glosario_completo_sesion_1.html"), g1, 'utf8');

// 3. Adapt glosario_completo_sesion_2.html
let g2 = fs.readFileSync(path.join(srcSesiones, "glosario_completo_sesion_2.html"), 'utf8');
g2 = applyReplacements(g2, [
  ["Claudio Vernuccio", "Anabela Hotian"],
  ["(por ejemplo, el grano de soja o la navegación fluvial)", "(por ejemplo, el contexto cultural de una traducción o la lógica de un sistema)"],
  ['conceptos de logística portuaria afines como "Barcaza", "Puerto" y "Remolcador"', 'conceptos de producto y localización afines como "Glosario", "Traducción" y "Localización"'],
  ['que "puerto" y "terminal de soja" son parientes conceptuales', 'que "localización de software" y "adaptación cultural" son parientes conceptuales'],
  ["términos locales de aduana", "términos específicos de cada industria"],
  ["los manuales de exportación y normativas arancelarias se almacenan de manera contigua a los reglamentos de navegación fluvial", "los manuales de producto y guías de estilo se almacenan de manera contigua a las memorias de traducción y glosarios técnicos"],
  ["un despachante fluvial de Cargill", "un especialista técnico o revisor senior de la empresa"],
  ["la documentación del embarque de soja de hoy en la terminal portuaria", "la documentación técnica del nuevo lanzamiento de producto de hoy"],
  ["El almacén de logística portuaria desorganizado", "El repositorio documental desorganizado"],
  ["paralizarán el despacho fluvial", "paralizarán la operación del equipo"],
  ["un manual técnico de regulaciones aduaneras", "un manual técnico o glosario corporativo"],
  ["(<strong>Metadata Filtering</strong> por ej. Puerto, Año)", "(<strong>Metadata Filtering</strong> por ej. Idioma, Cliente, Módulo)"],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "la organización"]
]);
fs.writeFileSync(path.join(destSesiones, "glosario_completo_sesion_2.html"), g2, 'utf8');

// 4. Adapt glosario_completo_sesion_3.html
let g3 = fs.readFileSync(path.join(srcSesiones, "glosario_completo_sesion_3.html"), 'utf8');
g3 = applyReplacements(g3, [
  ["2026 CLAUDIO VERNUCCIO | MENTORÍA ESTRATÉGICA IT", "2026 ANABELA HOTIAN | MENTORÍA ESTRATÉGICA IT & IA"],
  ["Claudio Vernuccio", "Anabela Hotian"],
  ["con las reglas de negocio de Cargill o de tu vertical específica", "con las reglas de negocio de tu producto o vertical específica"],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "la empresa"]
]);
fs.writeFileSync(path.join(destSesiones, "glosario_completo_sesion_3.html"), g3, 'utf8');

// 5. Adapt glosario_completo_sesion_4.html
let g4 = fs.readFileSync(path.join(srcSesiones, "glosario_completo_sesion_4.html"), 'utf8');
g4 = applyReplacements(g4, [
  ["2026 CLAUDIO VERNUCCIO | MENTORÍA ESTRATÉGICA IT", "2026 ANABELA HOTIAN | MENTORÍA ESTRATÉGICA IT & IA"],
  ["Claudio Vernuccio", "Anabela Hotian"],
  ["(ej: automatizar la auditoría de contratos en silos fluviales)", "(ej: automatizar la revisión de calidad lingüística o la atención de soporte técnico con IA)"],
  ["(ej. prompts de sistema extensos, manuales de aduana, o regulaciones de la empresa)", "(ej. prompts de sistema extensos, guías de estilo, glosarios técnicos o manuales de producto)"],
  ["(como el inventario de hoy en los silos)", "(como el estado de los tickets o proyectos del sprint actual)"],
  ["[Contexto de Silos]", "[Contexto Documental]"],
  ["Contraste contra Rúbrica de Silos", "Contraste contra Rúbrica de Calidad"],
  ["Si un usuario del puerto reporta que el bot le dio una información errónea sobre el calado de una barcaza", "Si un usuario reporta que el chatbot dio una respuesta inexacta sobre una funcionalidad o término técnico"],
  ["Evaluar la viabilidad financiera de automatizar la auditoría de contratos fluviales agrícolas frente a la revisión manual humana.", "Evaluar la viabilidad financiera de automatizar la revisión documental y soporte con IA frente al procesamiento 100% manual."],
  ["Ejercicio 2: Rúbricas de Evals para la Auditoría de Silos", "Ejercicio 2: Rúbricas de Evals para el Chatbot Corporativo"],
  ["¿Toda afirmación de stock o barcaza está soportada estrictamente por los datos extraídos de la Vector DB?", "¿Toda afirmación de la respuesta está soportada estrictamente por los documentos oficiales extraídos de la Vector DB?"],
  ["¿Los fragmentos extraídos de la base de datos vectorial corresponden al silo y fecha de interés del usuario?", "¿Los fragmentos extraídos de la base de datos vectorial corresponden al módulo, idioma y versión consultada por el usuario?"],
  ["¿La respuesta final soluciona de forma concisa y con tono ejecutivo la consulta del operario del puerto?", "¿La respuesta final soluciona de forma concisa, precisa y con el tono adecuado la consulta del usuario?"],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "la empresa"]
]);
fs.writeFileSync(path.join(destSesiones, "glosario_completo_sesion_4.html"), g4, 'utf8');

// 6. Adapt slides_sesion_1.html
let s1 = fs.readFileSync(path.join(srcSesiones, "slides_sesion_1.html"), 'utf8');
s1 = applyReplacements(s1, [
  ["Claudio Vernuccio", "Anabela Hotian"],
  ['"Lideré el delivery end-to-end de SAP PPM para plantas LatAm, coordinando 12 equipos y presupuesto de USD 15M."', '"Lideré la entrega end-to-end de proyectos digitales y localización global, coordinando equipos multidisciplinarios de ingeniería, QA y lingüistas."'],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "Enterprise IT"]
]);
fs.writeFileSync(path.join(destSesiones, "slides_sesion_1.html"), s1, 'utf8');

// 7. Adapt slides_sesion_2.html
let s2 = fs.readFileSync(path.join(srcSesiones, "slides_sesion_2.html"), 'utf8');
s2 = applyReplacements(s2, [
  ["Claudio Vernuccio", "Anabela Hotian"],
  ["Mock PRD Cargill", "Mock PRD Chatbot IA"],
  ["(ej: hablar como un despachante portuario ultra-formal de Cargill o dar respuestas estructuradas en JSON)", "(ej: redactar con la guía de estilo exacta de una marca global o devolver traducciones y validaciones en formato JSON)"],
  ['"Liberar despacho de granos en Rosario"', '"Validar glosario técnico para lanzamiento global"'],
  ['data-label="Puerto de Rosario"', 'data-label="Localización Software"'],
  ['data-label="Despacho de Aduana"', 'data-label="Glosario Técnico"'],
  ['data-label="Carga de Granos"', 'data-label="Deploy en Cloud"'],
  ['data-label="Soja y Maíz"', 'data-label="Pipeline CI/CD"'],
  ['Términos afines de logística fluvial ("Barcaza", "Remolcador") quedan con un score de similitud de 0.89, mientras "Deportivo" queda aislado en 0.12.', 'Términos afines de tecnología y lenguaje ("Localización", "Memoria de Traducción") quedan con un score de similitud de 0.89, mientras "Automóvil" queda aislado en 0.12.'],
  ["(puerto, año, despachante)", "(idioma, cliente, módulo)"],
  ["Puerto: Rosario", "Idioma: ES-LATAM"],
  ["Doc: Aduana", "Doc: Guía de Estilo"],
  ['"Se requiere autorización para la barcaza en el puerto de Rosario antes del <span class="overlap-highlight">despacho de aduana del puerto</span>..."', '"Se requiere validar el glosario y las variables del código antes del <span class="overlap-highlight">despliegue de la versión en producción</span>..."'],
  ['"...<span class="overlap-highlight">despacho de aduana del puerto</span>, que aplica aranceles preferenciales para la carga de granos."', '"...<span class="overlap-highlight">despliegue de la versión en producción</span>, asegurando consistencia en la interfaz de usuario para todos los idiomas."'],
  ["PDFs de Aduana", "Docs & Glosarios"],
  ["(ej. PDFs de aduanas, normativas portuarias, reglamentos internos de Cargill)", "(ej. manuales de producto, guías de estilo, glosarios técnicos y wikis internas)"],
  ['"¿Qué documentación de aduana se requiere para habilitar una barcaza en el puerto de Rosario?"', '"¿Qué criterios de estilo y terminología se aplican al módulo de pagos para usuarios de Latinoamérica?"'],
  ["'¿Qué documentación de aduana se requiere para habilitar una barcaza en el puerto de Rosario?'", "'¿Qué criterios de estilo y terminología se aplican al módulo de pagos para usuarios de Latinoamérica?'"],
  ["Taller: El Mock PRD (Cargill AI)", "Taller: El Mock PRD (AI Knowledge & Localization Bot)"],
  ['del "Cargill Customs Bot"', 'del "Enterprise Knowledge Bot"'],
  ["Asistente RAG que asiste a los analistas comerciales y despachantes de Cargill a verificar normativas portuarias antes de movilizar mercadería.", "Asistente RAG que ayuda a equipos de Producto, Ingeniería y Localización a consultar documentación técnica, glosarios y reglas de negocio en segundos."],
  ["Auditoría semántica de aduanas fluviales", "Consulta semántica de documentación y glosarios"],
  ["fluvial.", "contexto."],
  ["El puerto de San Lorenzo requiere habilitación de aduana fluvial.", "El despliegue del chatbot multilingüe requiere validación de contexto."],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "Enterprise"]
]);
fs.writeFileSync(path.join(destSesiones, "slides_sesion_2.html"), s2, 'utf8');

// 8. Adapt slides_sesion_3.html
let s3 = fs.readFileSync(path.join(srcSesiones, "slides_sesion_3.html"), 'utf8');
s3 = applyReplacements(s3, [
  ["Claudio Vernuccio", "Anabela Hotian"],
  ["Hoja de Ruta de Claudio", "Hoja de Ruta de Anabela"],
  ['"El usuario solicita los despachos pendientes. Para conseguir esta información, debo llamar a la API de despacho fluvial"', '"El usuario consulta el estado de entrega de los módulos del sprint. Para responder con datos reales, debo consultar la API de Jira / TMS"'],
  ["'El usuario solicita los despachos pendientes. Para conseguir esta información, debo llamar a la API de despacho fluvial'", "'El usuario consulta el estado de entrega de los módulos del sprint. Para responder con datos reales, debo consultar la API de Jira / TMS'"],
  ["get_fluvial_cargo_status(cargo_id='99')", "get_sprint_module_status(project_id='99')"],
  ["Auditor Silos", "Auditor QA/TMS"],
  ["Auditor de Silos", "Auditor de Proyecto & QA"],
  ['Usuario: "Verificar stock del Silo 4 de granos en Rosario"', 'Usuario: "Verificar avance y capacidad del Proyecto #4 en plataforma"'],
  ['Usuario: \\"Verificar stock del Silo 4 de granos en Rosario\\"', 'Usuario: \\"Verificar avance y capacidad del Proyecto #4 en plataforma\\"'],
  ["Caso de Estudio: Logística Fluvial y Despacho", "Caso de Estudio: Automatización de Proyectos & Localización"],
  ["Caso de Estudio: Logística Fluvial", "Caso de Estudio: Agente de Operaciones & Localización"],
  ["Automatización en tiempo real del despacho portuario y control de silos de granos", "Coordinación automatizada de entregas técnicas, validación de calidad y asignación de equipos"],
  ["Simulación de automatización de reasignación de silos por sobrefacturación", "Simulación de reasignación inteligente de tareas ante sobrecarga operativa del equipo"],
  ["Cargill Logistics Agent", "Enterprise Workflow Agent"],
  ["Cargill Logistics Console", "Enterprise Agent Console"],
  ["El bot lee el manifiesto de la barcaza en PDF, valida en el ERP de stock la disponibilidad de silos de soja y detecta que el silo original asignado está completo.", "El agente lee el brief del nuevo release en PDF/JSON, consulta en el sistema de gestión (Jira/TMS) la disponibilidad del equipo y detecta que el squad original tiene su capacidad al 100%."],
  ["En lugar de detenerse, el agente consulta la API del canal fluvial, localiza un silo de contingencia libre, prepara la actualización e invoca la aprobación humana (HITL) por Slack para realizar el desvío operativo de forma segura.", "En lugar de detenerse, el agente consulta la API de disponibilidad de equipos, localiza un squad alternativo con capacidad libre, valida el glosario técnico e invoca aprobación humana (HITL) por Slack antes de reasignar el proyecto."],
  ["Ruta A (API Aduanas Online)", "Ruta A (API Principal Cloud)"],
  ["Consulta y registro en vivo de regulaciones fluviales.", "Consulta y sincronización en vivo con el sistema central."],
  ["Apaga el servidor de aduanas para ver cómo el agente redirige el flujo de datos para evitar colapsar la terminal.", "Simula una caída de la API principal para ver cómo el agente aplica Fallback automático sin interrumpir el servicio."],
  ["Apagar API de Aduana", "Simular Caída de API"],
  ["Encender API de Aduana", "Restaurar API Principal"],
  ["Taller: Mock PRD del Silo Agent", "Taller: Mock PRD del Workflow Agent"],
  ["desvíos de asignación en silos superiores al 10% o cambios manuales de terminal fluvial suspenden el loop del agente y obligan a la firma electrónica del supervisor.", "desvíos de presupuesto/horas superiores al 10% o cambios de fecha de entrega suspenden el loop del agente y requieren aprobación explícita del PM."],
  ["a la base de datos central de Cargill", "a la base de datos de Producción"],
  ["Especialista en leer manifiestos de barcazas y reglamentaciones en formato PDF. Su ventana de contexto está blindada con prompts enfocados para extraer datos en variables rígidas, ignorando ruidos o textos comerciales ajenos al cargamento.", "Especialista en analizar requerimientos, briefs de producto y archivos de localización (PDF/JSON/XLIFF). Extrae metadatos clave y recuento de palabras/tokens en formato estructurado."],
  ["Agente experto en interactuar con bases de datos relacionales y de stock. Posee herramientas de lectura para verificar calados, capacidades de silos y estado de almacenamiento de soja, maíz y trigo en tiempo real.", "Agente conectado por API a Jira/TMS y bases de datos. Verifica carga horaria de desarrolladores y lingüistas, fechas de entrega de sprints y cumplimiento de criterios de calidad."],
  ["y tono comercial exigido por Cargill.", "y tono ejecutivo requerido por el equipo de Producto."],
  ["Necesito revisar la capacidad actual del Silo 4 de granos en Rosario.\\nInvoco función 'get_silo_stock' con argumento {'silo_id': 4}.", "Necesito revisar la carga operativa actual del Proyecto #4.\\nInvoco función 'get_project_capacity' con argumento {'project_id': 4}."],
  ["El Silo 4 posee 485.5 toneladas de 500 max. Está casi completo.\\nRespuesta: 'El Silo 4 está a su capacidad límite (485.5t / 500t max).'", "El Proyecto #4 consume 485.5 horas de 500 max del sprint.\\nRespuesta: 'El Proyecto #4 está al límite de capacidad operativa (485.5h / 500h max).'"],
  ["El stock disponible de soja es de aproximadamente 500 toneladas en el silo 4. Saludos.", "La capacidad asignada al proyecto 4 es de aproximadamente 500 horas en el sprint actual. Saludos."],
  ["[Agente] Escaneando Manifiesto PDF: Barcaza 'Rosario II' - 650 Toneladas de Soja.", "[Agente] Analizando Release Package: 'Lanzamiento App v2.4' - 12 Módulos UI + Docs."],
  ["[Agente] Validando ERP: Consultando disponibilidad en Silo 3 (Original)...", "[Agente] Consultando Jira/TMS: Verificando capacidad en Squad Alpha (Original)..."],
  ["[Silos ERP] Respuesta: Silo 3 COMPLETO (Capacidad disponible: 120 Ton).", "[Jira API] Respuesta: Squad Alpha COMPLETO (Capacidad libre: solo 12 hs)."],
  ["[Agente] Alerta de sobrecupo. Consultando disponibilidad en silos alternativos...", "[Agente] Alerta de cuello de botella. Buscando equipos alternativos disponibles..."],
  ["[Silos ERP] Respuesta: Silo 4 DISPONIBLE (Espacio libre: 800 Ton).", "[Jira API] Respuesta: Squad Beta DISPONIBLE (Capacidad libre: 80 hs)."],
  ["[Agente] Consultando API Hidrovía: Nivel de calado en Silo 4 es óptimo (28 pies).", "[Agente] Validando perfil técnico: Squad Beta cuenta con certificación en el glosario del cliente."],
  ["[Agente] Generando propuesta de desvío de Barcaza a Silo 4.", "[Agente] Generando propuesta de reasignación de paquete a Squad Beta."],
  ["[HITL] ¡APROBACIÓN RECIBIDA de Claudio Vernuccio!", "[HITL] ¡APROBACIÓN RECIBIDA de Anabela Hotian (PM)!"],
  ["[Agente] Ejecutando orden en ERP: Reasignando a Silo 4.", "[Agente] Ejecutando actualización en Jira/TMS: Asignado a Squad Beta."],
  ["[Silos ERP] Stock actualizado (+650 Ton).", "[Jira API] Sprint Backlog actualizado correctamente."],
  ["[Inferencia 1] Llamando API de Aduanas...", "[Inferencia 1] Llamando API Principal..."],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "Enterprise"]
]);
fs.writeFileSync(path.join(destSesiones, "slides_sesion_3.html"), s3, 'utf8');

// 9. Adapt slides_sesion_4.html
let s4 = fs.readFileSync(path.join(srcSesiones, "slides_sesion_4.html"), 'utf8');
s4 = applyReplacements(s4, [
  ["Claudio Vernuccio", "Anabela Hotian"],
  ["Ejercicio 1: Calculadora de ROI (Auditoría Fluvial)", "Ejercicio 1: Calculadora de ROI (Automatización con IA)"],
  ["(tarifas, nombres de barcazas, calados secretos)", "(tarifas confidenciales, contratos de clientes, datos personales PII)"],
  ["¿La respuesta se basa estrictamente en la base de datos de silos (cero alucinación)?", "¿La respuesta se basa estrictamente en la documentación oficial recuperada (cero alucinación)?"],
  ["¿La base de datos vectorial recuperó los chunks exactos del silo solicitado?", "¿La base de datos vectorial recuperó los fragmentos exactos del módulo o glosario consultado?"],
  ["¿Resuelve directamente la pregunta del operario del puerto?", "¿Resuelve directamente la consulta del usuario o analista?"],
  ["DATOS DE ENTRADA (Silo DB)", "DATOS DE ENTRADA (Knowledge DB)"],
  ["[Silo 3] Stock: 4.500 Tn. Grano: Soja Cargill. Estado: Disponible.<br>", "[Módulo Pagos v3] Estado: Activo en Producción. Idiomas: EN, ES, PT.<br>"],
  ["[Silo 4] Stock: 1.200 Tn. Grano: Soja. Estado: Mantenimiento.", "[Módulo Checkout v4] Estado: En QA / Revisión técnica. Bloqueado para deploy."],
  ['"En el Silo 3 hay 4.500 Tn de Soja disponibles para despacho. En el Silo 4 hay 1.200 Tn de Soja, pero se encuentra en mantenimiento y no se puede tocar. Además, estimamos que la barcaza llegará mañana a la mañana".', '"El Módulo Pagos v3 está activo en producción (EN, ES, PT). El Módulo Checkout v4 sigue en revisión de QA y aún no debe desplegarse. Además, estimamos que mañana se aprobará sin pruebas adicionales".'],
  ["Trace Tree: Auditoría Silos (Langfuse)", "Trace Tree: Chatbot Corporativo (Langfuse)"],
  ["[Trace] Auditoría Silos", "[Trace] Consulta Chatbot IA"],
  ['Query: "Stock de silo 3"', 'Query: "Estado Módulo Pagos v3"'],
  ['"Lanzamos el bot al puerto y en una semana quemamos todo el presupuesto de API de tokens del mes. ¿Qué pasó y qué hacés?"', '"Lanzamos el chatbot a producción y en una semana consumimos todo el presupuesto mensual de tokens de la API. ¿Qué pasó y cómo lo optimizás?"'],
  ["Consola del Puerto (Latencia)", "Consola de Producción (Latencia)"],
  ['"Los operarios en las barcazas se quejan de que el bot tarda 12 segundos en empezar a responder. ¿Cómo bajas ese tiempo?"', '"Los usuarios se quejan de que el chatbot tarda 12 segundos en empezar a mostrar la respuesta en pantalla. ¿Cómo bajás ese tiempo percibido?"'],
  ['"Tengo miedo de que el agente comparta información comercial confidencial de Cargill con Claudio. ¿Cómo lo blindás?"', '"Nos preocupa que el chatbot filtre información confidencial de clientes al enviar prompts a proveedores externos de IA. ¿Cómo lo blindamos?"'],
  ['"Falta de fidelidad (alucinación detectada en la barcaza)."', '"Falta de fidelidad (el modelo inventó una fecha de aprobación no presente en el contexto)."'],
  ["para que el operario empiece a leer palabras", "para que el usuario empiece a leer la respuesta en tiempo real"],
  ["para el contexto de silos", "para el prompt de sistema y glosario base"],
  ['{"silo_stock_key": "4500tn", "contrato_secreto_cliente": "Cargill-Claudio"}', '{"project_id": "PRJ-402", "cliente_confidencial": "Enterprise-NDA-Client"}'],
  ['{"silo_stock_key": "4500tn", "contrato_secreto_cliente": "[REDACTED_CLIENT_KEY]"}', '{"project_id": "PRJ-402", "cliente_confidencial": "[REDACTED_CLIENT_KEY]"}'],
  [/Claudio/g, "Anabela"],
  [/Cargill/gi, "Enterprise"]
]);
fs.writeFileSync(path.join(destSesiones, "slides_sesion_4.html"), s4, 'utf8');

console.log("All Anabela portal & session files generated successfully in:", destRoot);
