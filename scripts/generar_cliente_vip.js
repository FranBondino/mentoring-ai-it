#!/usr/bin/env node
/**
 * GENERADOR AUTOMÁTICO DE PORTALES VIP Y PROPUESTAS COMERCIALES POR INDUSTRIA
 * ----------------------------------------------------------------------------
 * Uso:
 *   node scripts/generar_cliente_vip.js --nombre "Martín Gómez" --empresa "Galicia / Fintech" --industria "fintech" --precio 380000
 *
 * Industrias soportadas (--industria):
 *   - fintech       (Banca Digital, Pagos, Prevención de Fraude, KYC, Normativas BCRA)
 *   - ecommerce     (Retail, E-Commerce, Catálogo, Checkout, Logística Última Milla)
 *   - agro          (Agro-exportación, Logística Fluvial, Silos, Aduanas)
 *   - salud         (Healthtech, Historias Clínicas, Turnos, Auditoría Médica, PII)
 *   - localizacion  (Localización Global, Traducción, TMS, Glosarios, QA Multilingüe)
 *   - saas          (Software B2B, CRM/ERP, Operaciones Digitales, Soporte Técnico)
 */

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatARS(num) {
  return '$' + Number(num).toLocaleString('es-AR') + ' ARS';
}

const INDUSTRY_PRESETS = {
  fintech: {
    label: 'Fintech, Pagos & Banca Digital',
    introContext: 'flujos transaccionales, medios de pago, onboarding KYC, prevención de fraude, cumplimiento normativo (BCRA/Compliance) y conciliación bancaria',
    botName: 'Fintech Compliance & Risk Bot',
    agentName: 'Payment & Fraud Triage Agent',
    consoleName: 'Fintech Risk Console',
    ragQueryExample: '¿Qué validaciones KYC y límites diarios se aplican a comercios de alto volumen en pagos con QR?',
    vectorLabels: ['Pagos QR / PIX', 'Normativa BCRA', 'Scoring Crediticio', 'Prevención Fraude'],
    filterTag1: 'Regulación: BCRA-2026',
    filterTag2: 'Doc: Política KYC',
    agentTaskExample: 'Verificar riesgo transaccional y límite operativo del Comercio #4',
    s4InputTitle: 'DATOS DE ENTRADA (Core Bancario DB)',
    s4Row1: '[Cuenta #3] Límite Diario: USD 45.000. Estado KYC: Aprobado Nivel 3.<br>',
    s4Row2: '[Cuenta #4] Límite Diario: USD 12.000. Estado KYC: En Revisión Manual (Bloqueado).'
  },
  ecommerce: {
    label: 'E-Commerce, Retail & Logística Digital',
    introContext: 'conversión en checkout, gestión de catálogo e inventario omnicanal, logística de última milla, devoluciones y atención post-venta automatizada',
    botName: 'Omnichannel Catalog & Support Bot',
    agentName: 'Order & Inventory Fulfillment Agent',
    consoleName: 'Omnichannel Ops Console',
    ragQueryExample: '¿Cuál es la política de cambio exprés y logística inversa para compras Flash Sale en AMBA?',
    vectorLabels: ['Checkout & Carrito', 'Logística Última Milla', 'Stock Omnicanal', 'Política Devolución'],
    filterTag1: 'Canal: E-Commerce',
    filterTag2: 'Doc: Logística Inversa',
    agentTaskExample: 'Verificar stock disponible y tiempos de despacho del Depósito #4',
    s4InputTitle: 'DATOS DE ENTRADA (WMS Stock DB)',
    s4Row1: '[Depósito #3] Stock: 4.500 u. SKU: Auriculares Pro. Estado: Envío 24hs Activo.<br>',
    s4Row2: '[Depósito #4] Stock: 1.200 u. SKU: Smart TV. Estado: Auditoría de Inventario.'
  },
  agro: {
    label: 'Agroindustria, Logística & Operaciones',
    introContext: 'logística fluvial y terrestre, gestión de acopio y silos, normativas aduaneras, trazabilidad de granos e integración con sistemas ERP como SAP',
    botName: 'Agro Customs & Compliance Bot',
    agentName: 'Agro Logistics & Silo Agent',
    consoleName: 'Agro Logistics Console',
    ragQueryExample: '¿Qué documentación de aduana y calado mínimo se requiere para habilitar el despacho en el puerto de Rosario?',
    vectorLabels: ['Puerto Rosario', 'Despacho Aduana', 'Acopio de Granos', 'Trazabilidad ERP'],
    filterTag1: 'Puerto: Rosario',
    filterTag2: 'Doc: Aduana',
    agentTaskExample: 'Verificar stock y capacidad disponible del Silo #4 en terminal',
    s4InputTitle: 'DATOS DE ENTRADA (Silo ERP DB)',
    s4Row1: '[Silo #3] Stock: 4.500 Tn. Grano: Soja Exportación. Estado: Disponible.<br>',
    s4Row2: '[Silo #4] Stock: 1.200 Tn. Grano: Maíz. Estado: Mantenimiento Operativo.'
  },
  salud: {
    label: 'Healthtech, Gestión Médica & Operaciones',
    introContext: 'gestión de turnos e historias clínicas electrónicas, auditoría de prestaciones médicas, autorizaciones de obras sociales/prepagas y resguardo estricto de datos sensibles de salud (PII/HIPAA)',
    botName: 'Clinical Protocol & Coverage Bot',
    agentName: 'Medical Authorization & Triage Agent',
    consoleName: 'Health Operations Console',
    ragQueryExample: '¿Qué requisitos de auditoría médica previa aplican para autorizar estudios de alta complejidad en el Plan Oro?',
    vectorLabels: ['Historia Clínica', 'Nomenclador Médico', 'Autorización Prácticas', 'Privacidad Paciente'],
    filterTag1: 'Plan: Cobertura Oro',
    filterTag2: 'Doc: Protocolo Clínico',
    agentTaskExample: 'Verificar disponibilidad de agenda y cobertura del Consultorio #4',
    s4InputTitle: 'DATOS DE ENTRADA (HIS Clínico DB)',
    s4Row1: '[Módulo #3] Cobertura: 100% Autorizada. Práctica: Resonancia Magnética.<br>',
    s4Row2: '[Módulo #4] Estado: Requiere Auditoría Médica Previa antes de agendar.'
  },
  localizacion: {
    label: 'Localización Global, Contenidos & Enterprise IT',
    introContext: 'flujos de procesamiento de lenguaje, localización de software (TMS), memorias de traducción, control de calidad lingüística y coordinación de entregas globales',
    botName: 'Enterprise Knowledge & Localization Bot',
    agentName: 'Enterprise Localization Workflow Agent',
    consoleName: 'Enterprise Agent Console',
    ragQueryExample: '¿Qué criterios de estilo y terminología se aplican al módulo de pagos para usuarios de Latinoamérica?',
    vectorLabels: ['Localización Software', 'Glosario Técnico', 'Deploy en Cloud', 'Pipeline CI/CD'],
    filterTag1: 'Idioma: ES-LATAM',
    filterTag2: 'Doc: Guía de Estilo',
    agentTaskExample: 'Verificar avance y capacidad operativa del Proyecto #4 en plataforma',
    s4InputTitle: 'DATOS DE ENTRADA (Knowledge DB)',
    s4Row1: '[Módulo Pagos v3] Estado: Activo en Producción. Idiomas: EN, ES, PT.<br>',
    s4Row2: '[Módulo Checkout v4] Estado: En QA / Revisión técnica. Bloqueado para deploy.'
  },
  saas: {
    label: 'Software B2B, Producto Digital & Operaciones',
    introContext: 'desarrollo de productos SaaS, integraciones vía APIs con CRMs/ERPs, automatización de onboarding y soporte técnico Nivel 2 con agentes de IA',
    botName: 'Enterprise SaaS Knowledge Bot',
    agentName: 'SaaS Operations & Support Agent',
    consoleName: 'SaaS Product Console',
    ragQueryExample: '¿Cuál es el procedimiento técnico y SLA para integrar el webhook de facturación en cuentas Enterprise?',
    vectorLabels: ['API & Webhooks', 'Onboarding B2B', 'Deploy en Cloud', 'Pipeline CI/CD'],
    filterTag1: 'Tier: Enterprise B2B',
    filterTag2: 'Doc: API Docs',
    agentTaskExample: 'Verificar estado de entrega y capacidad del Squad #4 en Jira',
    s4InputTitle: 'DATOS DE ENTRADA (Product Knowledge DB)',
    s4Row1: '[Módulo API v3] Estado: Activo en Producción. Disponibilidad SLA: 99.95%.<br>',
    s4Row2: '[Módulo Billing v4] Estado: En QA / Staging. Pendiente de pruebas de regresión.'
  }
};

const args = parseArgs(process.argv);

if (args.help || !args.nombre) {
  console.log(`
================================================================================
🚀 GENERADOR DE CLIENTES VIP 1 A 1 — ING. FRANCISCO BONDINO
================================================================================
Uso:
  node scripts/generar_cliente_vip.js --nombre "Nombre Apellido" [--industria fintech|ecommerce|agro|salud|localizacion|saas] [--empresa "Nombre Empresa"] [--precio 380000]

Ejemplo:
  node scripts/generar_cliente_vip.js --nombre "Martín Gómez" --industria "fintech" --empresa "Mercado Pago" --precio 380000
================================================================================
`);
  process.exit(0);
}

const clientName = args.nombre.trim();
const clientFirstName = clientName.split(' ')[0];
const industryKey = (args.industria || 'saas').toLowerCase();
const preset = INDUSTRY_PRESETS[industryKey] || INDUSTRY_PRESETS.saas;
const companyName = args.empresa ? args.empresa.trim() : preset.label;
const totalARS = Number(String(args.precio || '380000').replace(/[^0-9]/g, '')) || 380000;
const halfARS = Math.round(totalARS / 2);
const sessionARS = Math.round(totalARS / 4);

const clientSlug = slugify(clientName);
const rootDir = path.resolve(__dirname, '..');
const outClientDir = path.join(rootDir, 'producto-masivo', 'clientes-vip', clientSlug);
const outSesionesDir = path.join(outClientDir, 'sesiones');
const outGuiasDir = path.join(outClientDir, 'guias-mentor');

fs.mkdirSync(outSesionesDir, { recursive: true });
fs.mkdirSync(outGuiasDir, { recursive: true });

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

// 1. Copiar assets visuales
for (const file of fs.readdirSync(rootDir)) {
  if (/\.(png|jpg|jpeg|svg|webp|gif)$/i.test(file)) {
    fs.copyFileSync(path.join(rootDir, file), path.join(outClientDir, file));
  }
}

const propFileName = `propuesta_mentoria_${clientSlug.replace(/-/g, '_')}.html`;

// 2. Generar Propuesta Comercial HTML lista para imprimir a PDF
let propHtml = fs.readFileSync(path.join(rootDir, 'propuesta_mentoria_anabela_hotian.html'), 'utf8');
propHtml = applyReplacements(propHtml, [
  ['Anabela Hotian', clientName],
  ['ANABELA HOTIAN', clientName.toUpperCase()],
  ['propuesta_mentoria_anabela_hotian.html', propFileName],
  [
    'incluyendo flujos de procesamiento de lenguaje, localización, gestión de contenidos y automatización corporativa',
    `incluyendo casos aplicados a <strong>${preset.label}</strong> (${preset.introContext})`
  ],
  ['$300.000 ARS', formatARS(totalARS)],
  ['$150.000 ARS', formatARS(halfARS)],
  ['$75.000 ARS', formatARS(sessionARS)]
]);
fs.writeFileSync(path.join(outClientDir, propFileName), propHtml, 'utf8');

// 3. Generar Portal index.html personalizado
let indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
indexHtml = applyReplacements(indexHtml, [
  ['Programa Ejecutivo 1 a 1 · Anabela Hotian', `Programa Ejecutivo 1 a 1 · ${clientName} (${preset.label})`],
  ['Anabela Hotian', clientName],
  ['./propuesta_mentoria_anabela_hotian.html', `./${propFileName}`]
]);
fs.writeFileSync(path.join(outClientDir, 'index.html'), indexHtml, 'utf8');

// 4. Reemplazos de Industria + Nombre de Cliente para las 4 Sesiones y Glosarios
const sessionReplacements = [
  ['2026 ANABELA HOTIAN', `2026 ${clientName.toUpperCase()}`],
  ['Anabela Hotian', clientName],
  ['Hoja de Ruta de Anabela', `Hoja de Ruta de ${clientFirstName}`],
  ['{"usuario": "Anabela", "rol": "PM"}', `{"usuario": "${clientFirstName}", "rol": "PM"}`],
  ['Enterprise Knowledge & Localization Bot', preset.botName],
  ['AI Knowledge & Localization Bot', preset.botName],
  ['Enterprise Knowledge Bot', preset.botName],
  ['Enterprise Workflow Agent', preset.agentName],
  ['Enterprise Agent Console', preset.consoleName],
  ['data-label="Localización Software"', `data-label="${preset.vectorLabels[0]}"`],
  ['data-label="Glosario Técnico"', `data-label="${preset.vectorLabels[1]}"`],
  ['data-label="Deploy en Cloud"', `data-label="${preset.vectorLabels[2]}"`],
  ['data-label="Pipeline CI/CD"', `data-label="${preset.vectorLabels[3]}"`],
  ['Idioma: ES-LATAM', preset.filterTag1],
  ['Doc: Guía de Estilo', preset.filterTag2],
  ['¿Qué criterios de estilo y terminología se aplican al módulo de pagos para usuarios de Latinoamérica?', preset.ragQueryExample],
  ['Verificar avance y capacidad del Proyecto #4 en plataforma', preset.agentTaskExample],
  ['DATOS DE ENTRADA (Knowledge DB)', preset.s4InputTitle],
  ['[Módulo Pagos v3] Estado: Activo en Producción. Idiomas: EN, ES, PT.<br>', preset.s4Row1],
  ['[Módulo Checkout v4] Estado: En QA / Revisión técnica. Bloqueado para deploy.', preset.s4Row2],
  [/Anabela/g, clientFirstName],
  ['en proyectos corporativos y de localización (ej. RWS)', `en ${companyName} (${preset.label})`]
];

const srcSesiones = path.join(rootDir, 'sesiones');
for (const file of fs.readdirSync(srcSesiones).filter(f => f.endsWith('.html'))) {
  let content = fs.readFileSync(path.join(srcSesiones, file), 'utf8');
  content = applyReplacements(content, sessionReplacements);
  fs.writeFileSync(path.join(outSesionesDir, file), content, 'utf8');
}

const srcGuias = path.join(rootDir, 'guias-mentor');
if (fs.existsSync(srcGuias)) {
  for (const file of fs.readdirSync(srcGuias).filter(f => f.endsWith('.html') || f.endsWith('.md'))) {
    let content = fs.readFileSync(path.join(srcGuias, file), 'utf8');
    content = applyReplacements(content, sessionReplacements);
    fs.writeFileSync(path.join(outGuiasDir, file), content, 'utf8');
  }
}

console.log('================================================================================');
console.log(`✅ CLIENTE VIP GENERADO CON ÉXITO: ${clientName}`);
console.log(`🏢 Industria / Rubro: ${preset.label} (${companyName})`);
console.log(`💰 Inversión configurada: ${formatARS(totalARS)} (2 tramos de ${formatARS(halfARS)} | ${formatARS(sessionARS)}/sesión)`);
console.log(`📂 Carpeta de salida: ${outClientDir}`);
console.log(`📄 Propuesta lista para PDF: ${path.join(outClientDir, propFileName)}`);
console.log(`🌐 Portal Interactivo VIP:   ${path.join(outClientDir, 'index.html')}`);
console.log('================================================================================');
