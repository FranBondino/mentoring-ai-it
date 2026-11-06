const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcSesiones = path.join(rootDir, 'sesiones');
const srcGuias = path.join(rootDir, 'guias-mentor');

const outMasivo = path.join(rootDir, 'producto-masivo');
const outPortal = path.join(outMasivo, 'portal-estandar');
const outSesiones = path.join(outPortal, 'sesiones');
const outGuias = path.join(outPortal, 'guias-estudio');

fs.mkdirSync(outSesiones, { recursive: true });
fs.mkdirSync(outGuias, { recursive: true });

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

// Reemplazos para neutralizar el portal de Anabela en la versión "Producto Estándar" (Edición Ejecutiva General)
const standardReplacements = [
  ['2026 ANABELA HOTIAN | MENTORÍA ESTRATÉGICA IT & IA', '2026 PROGRAMA EJECUTIVO | ARQUITECTURA IT, AGILE & IA APLICADA'],
  ['2026 ANABELA HOTIAN | MENTORÍA ESTRATÉGICA IT', '2026 PROGRAMA EJECUTIVO | ARQUITECTURA IT, AGILE & IA APLICADA'],
  ['Programa Ejecutivo 1 a 1 · Anabela Hotian', 'Programa Ejecutivo · Edición Product, Project & Tech Leaders'],
  ['Portal de Mentoría IT, Agile &amp; IA — Anabela Hotian', 'Portal Ejecutivo: Arquitectura IT, Agile & IA Aplicada — Ing. Francisco Bondino'],
  ['Portal de Mentoría IT, Agile & IA — Anabela Hotian', 'Portal Ejecutivo: Arquitectura IT, Agile & IA Aplicada — Ing. Francisco Bondino'],
  ['Programa diseñado y personalizado para <strong>Anabela Hotian</strong> · Mentor: <strong>Ing. Francisco Bondino</strong>', 'Programa Ejecutivo de Arquitectura IT, Agile &amp; IA · Creado por el <strong>Ing. Francisco Bondino</strong>'],
  ['Hoja de Ruta de Anabela', 'Hoja de Ruta del Product & Project Manager'],
  ['[HITL] ¡APROBACIÓN RECIBIDA de Anabela Hotian (PM)!', '[HITL] ¡APROBACIÓN RECIBIDA del Product Manager (HITL)!'],
  ['{"usuario": "Anabela", "rol": "PM"}', '{"usuario": "lider_producto", "rol": "PM_AI"}'],
  ['<p>Anabela Hotian</p>', '<p>Edición Ejecutiva IT &amp; IA</p>'],
  ['>Anabela Hotian<', '>Edición Ejecutiva IT &amp; IA<'],
  ['Anabela Hotian', 'Profesional IT & IA'],
  ['para Anabela', 'para el equipo de Producto'],
  ['de Anabela', 'del PM'],
  [/Anabela/g, 'el PM'],
  ['./guias-mentor/', './guias-estudio/'],
  ['🎙️ Guion + Puentes S1', '📘 Guía de Estudio S1'],
  ['🎙️ Guion + Puentes S2', '📘 Guía de Estudio S2'],
  ['🎙️ Guion + Puentes S3', '📘 Guía de Estudio S3'],
  ['🎙️ Guion + Puentes S4', '📘 Guía de Estudio S4'],
  ['🎙️ Copiloto de Orador: Guiones y Conexiones (64 Slides)', '📘 Manual Completo del Programa (Lectura Guiada de las 4 Sesiones)'],
  ['Guion literal palabra por palabra, dinámicas en pantalla y todos los puentes de conexión entre diapositivas de las 4 sesiones.', 'Explicación detallada diapositiva por diapositiva, casos prácticos y conexiones clave de las 4 sesiones para repasar a tu ritmo.'],
  ['Abrir Guiones →', 'Abrir Manual →'],
  ['./propuesta_mentoria_anabela_hotian.html', './propuesta_ejecutiva_estandar.html']
];

// 1. Copiar imágenes de la raíz a portal-estandar/
const rootFiles = fs.readdirSync(rootDir);
for (const file of rootFiles) {
  if (/\.(png|jpg|jpeg|svg|webp|gif)$/i.test(file)) {
    fs.copyFileSync(path.join(rootDir, file), path.join(outPortal, file));
  }
}

// 2. Adaptar index.html del Portal Estándar
let portalIndex = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
portalIndex = applyReplacements(portalIndex, standardReplacements);

// Agregar barra superior en el Portal Estándar que conecte con la Landing Comercial
const topBannerHtml = `
    <div style="background: rgba(15, 23, 42, 0.9); border-bottom: 1px solid rgba(59, 130, 246, 0.25); padding: 10px 20px; position: sticky; top: 0; z-index: 50; backdrop-filter: blur(12px);">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; font-size: 0.82rem;">
            <div style="display: flex; align-items: center; gap: 10px; color: #cbd5e1;">
                <span style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.35); padding: 3px 10px; border-radius: 999px; font-weight: 700; font-size: 0.72rem; text-transform: uppercase;">Campus Interactivo</span>
                <span><strong> Ed. Estándar</strong> · 4 Módulos + Simuladores en Vivo + Glosarios + Talleres PRD</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
                <a href="../landing-comercial.html" style="color: #93c5fd; text-decoration: none; font-weight: 600;">← Volver a la Página de Ventas</a>
                <a href="./propuesta_ejecutiva_estandar.html" style="background: #2563eb; color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 8px; font-weight: 700;">Ver Planes y Propuesta PDF</a>
            </div>
        </div>
    </div>
`;
portalIndex = portalIndex.replace('<div class="portal-wrapper">', topBannerHtml + '\n    <div class="portal-wrapper">');
fs.writeFileSync(path.join(outPortal, 'index.html'), portalIndex, 'utf8');

// 3. Adaptar archivos de sesiones/
const sessionFiles = fs.readdirSync(srcSesiones).filter(f => f.endsWith('.html'));
for (const file of sessionFiles) {
  let content = fs.readFileSync(path.join(srcSesiones, file), 'utf8');
  content = applyReplacements(content, standardReplacements);
  fs.writeFileSync(path.join(outSesiones, file), content, 'utf8');
}

// 4. Adaptar guías de estudio en guias-estudio/
if (fs.existsSync(srcGuias)) {
  const guiaFiles = fs.readdirSync(srcGuias).filter(f => f.endsWith('.html') || f.endsWith('.md'));
  for (const file of guiaFiles) {
    let content = fs.readFileSync(path.join(srcGuias, file), 'utf8');
    content = applyReplacements(content, standardReplacements);
    fs.writeFileSync(path.join(outGuias, file), content, 'utf8');
  }
}

// 5. Generar propuesta_ejecutiva_estandar.html (con los 3 planes: Self-Paced, Grupal y 1:1 VIP)
let propHtml = fs.readFileSync(path.join(rootDir, 'propuesta_mentoria_anabela_hotian.html'), 'utf8');
propHtml = applyReplacements(propHtml, [
  ['Propuesta de Mentoría IT & IA - Anabela Hotian', 'Programa Ejecutivo: Sistemas, Agile & IA Aplicada - Propuesta Comercial'],
  ['Para: Anabela Hotian', 'Perfiles: PMs, Analistas, Líderes & Operaciones'],
  ['Modalidad: 4 Sesiones 1 a 1 (Online)', 'Modalidades: On-Demand · Grupal en Vivo · 1 a 1 VIP'],
  ['Propuesta elaborada especialmente para <strong>Anabela Hotian</strong>.<br>', 'Propuesta Ejecutiva Oficial — <strong>Programa de Arquitectura IT, Agile &amp; IA Aplicada</strong>.<br>']
]);

// Actualizar la sección 4 de precios en la propuesta estándar para mostrar la Escalera de Valor (los 3 Tiers)
const oldPricingBlockRegex = /<!-- 4\. INVERSIÓN Y MODALIDAD DE PAGO -->[\s\S]*?<!-- FIRMA -->/;
const newPricingBlock = `<!-- 4. INVERSIÓN Y MODALIDADES DE CURSADA -->
  <h2 class="section-title">4. Modalidades de Cursada e Inversión</h2>

  <div class="pricing-highlight">
    <div class="pricing-highlight-left">
      <h3>3 Formatos Diseñados según tu Objetivo Profesional</h3>
      <p>Todas las modalidades incluyen acceso completo al Portal Web Interactivo, Simuladores en Vivo, 4 Glosarios y Plantillas de PRD.</p>
    </div>
    <div class="pricing-highlight-right">
      <div class="price-amount">Desde $85.000 ARS</div>
      <div class="price-sub">Opciones On-Demand, Cohorte Grupal y 1 a 1 VIP</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width: 28%;">Modalidad / Plan</th>
        <th style="width: 52%;">Alcance y Beneficios Incluidos</th>
        <th style="width: 20%;">Inversión</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Plan 1: On-Demand (Self-Paced)</strong><br><span style="font-size:7.3pt; color:#64748b;">A tu propio ritmo</span></td>
        <td>Acceso 24/7 al Portal Interactivo Estándar, las 4 Presentaciones con Simuladores, 4 Glosarios, Taller de PRD, Simulador de Entrevistas y Guías de Estudio.</td>
        <td><strong>$85.000 ARS</strong><br><span style="font-size:7.3pt; color:#64748b;">(USD $79 exterior)</span></td>
      </tr>
      <tr class="table-total">
        <td><strong>Plan 2: Bootcamp Grupal en Vivo ⭐</strong><br><span style="font-size:7.3pt; color:#1d4ed8;">Cohorte reducida (6 a 10 personas)</span></td>
        <td>Todo lo incluido en el Plan 1 + <strong>4 Clases Semanales en Vivo (75 min c/u)</strong> + Práctica grupal con casos reales, feedback en vivo sobre tu PRD y networking con pares.</td>
        <td><strong>$195.000 ARS</strong><br><span style="font-size:7.3pt; color:#1e40af;">(o 2 pagos de $105.000)</span></td>
      </tr>
      <tr>
        <td><strong>Plan 3: Mentoría 1 a 1 VIP Custom</strong><br><span style="font-size:7.3pt; color:#6d28d9;">100% Personalizado a tu Industria</span></td>
        <td><strong>4 Sesiones Individuales 1 a 1</strong> en horarios a medida + <strong>Portal Web y Simuladores adaptados a los casos de tu propia empresa/rubro</strong> (Agro, Fintech, SaaS, Localización, E-commerce) + Armado del PRD de un proyecto real de tu trabajo.</td>
        <td><strong>$380.000 ARS</strong><br><span style="font-size:7.3pt; color:#64748b;">(o 2 tramos de $195.000)</span></td>
      </tr>
    </tbody>
  </table>

  <div class="callout">
    <div class="callout-title">Garantía de Upgrade y Capacitaciones In-Company (B2B)</div>
    <p>
      Si comenzás por la modalidad <strong>On-Demand</strong> y luego deseás sumarte a una <strong>Cohorte Grupal</strong> o pasar al <strong>Programa 1 a 1 VIP</strong>, se te reconoce el 100% de lo abonado como crédito a favor. También ofrecemos ediciones cerradas <strong>In-Company</strong> para equipos de Producto, Operaciones y Tecnología.
    </p>
  </div>

  <!-- FIRMA -->`;

propHtml = propHtml.replace(oldPricingBlockRegex, newPricingBlock);
fs.writeFileSync(path.join(outPortal, 'propuesta_ejecutiva_estandar.html'), propHtml, 'utf8');

console.log('Portal Estándar generado con éxito en:', outPortal);
