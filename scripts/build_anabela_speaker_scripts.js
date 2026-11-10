const fs = require('fs');
const path = require('path');

const { SESSION_1_DATA, SESSION_2_DATA } = require('./scripts_data_s1_s2.js');
const { SESSION_3_DATA, SESSION_4_DATA } = require('./scripts_data_s3_s4.js');

function normalizeSession(raw) {
  return {
    id: raw.sessionNum,
    title: `Sesión ${raw.sessionNum}`,
    subtitle: raw.title,
    description: raw.subtitle,
    duration: '60 Minutos',
    accent: raw.accentHex,
    accentRgb: raw.accentRgb,
    goal: raw.goal,
    mentalMap60s: raw.mentalMap60s || [],
    antigravityGuide: raw.antigravityGuide || [],
    nextSessionPreview: raw.nextSessionPreview || null,
    agenda: raw.agenda || [],
    slidesFile: `slides_sesion_${raw.sessionNum}.html`,
    slides: raw.slides.map(sl => ({
      num: sl.num,
      id: sl.id,
      title: sl.title,
      time: sl.duration,
      badge: (sl.tags || []).join(' · '),
      tags: sl.tags || [],
      cheatSheet: sl.cheatSheet || null,
      plainTerms: sl.plainTerms || [],
      antigravityDemo: sl.antigravityDemo || null,
      interaction: sl.interaction,
      script: sl.script,
      bridge: sl.bridge
    }))
  };
}

const sessions = [
  normalizeSession(SESSION_1_DATA),
  normalizeSession(SESSION_2_DATA),
  normalizeSession(SESSION_3_DATA),
  normalizeSession(SESSION_4_DATA)
];

const baseDir = path.resolve(__dirname, '..');
const guiasDir = path.join(baseDir, 'guias-mentor');

if (!fs.existsSync(guiasDir)) {
  fs.mkdirSync(guiasDir, { recursive: true });
}

function generateSessionMarkdown(s) {
  let md = `# 🎙️ ${s.title}: ${s.subtitle}\n\n`;
  md += `- **Duración total:** ${s.duration}\n`;
  md += `- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)\n`;
  md += `- **Objetivo del Mentor:** ${s.goal}\n`;
  md += `- **Total de Diapositivas:** ${s.slides.length} slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)\n\n`;

  if (s.mentalMap60s && s.mentalMap60s.length > 0) {
    md += `## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)\n\n`;
    for (const m of s.mentalMap60s) {
      md += `- **${m.step}:** ${m.text}\n`;
    }
    md += `\n`;
  }

  if (s.antigravityGuide && s.antigravityGuide.length > 0) {
    md += `## 🚀 Demos en Vivo con Google Antigravity (Para hacer la clase más amena)\n\n`;
    for (const ag of s.antigravityGuide) {
      md += `- **[${ag.badge}] ${ag.title}:** ${ag.whatToShow}\n  - *Prompt para probar en vivo:* \`${ag.promptToCopy}\`\n`;
    }
    md += `\n`;
  }

  if (s.agenda.length > 0) {
    md += `## 🧭 Cronograma y Bloques de la Sesión\n\n`;
    md += `| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    for (const a of s.agenda) {
      md += `| **${a.time}** | ${a.module} | ${a.slides} | ${a.focus} |\n`;
    }
    md += `\n`;
  }

  md += `---\n\n`;

  for (let i = 0; i < s.slides.length; i++) {
    const sl = s.slides[i];
    const nextSl = i < s.slides.length - 1 ? s.slides[i + 1] : null;
    md += `## Slide ${sl.num}: ${sl.title}\n`;
    md += `- **⏱️ Tiempo estimado:** ${sl.time} | **🏷️ Etiquetas:** ${sl.badge}\n\n`;
    if (sl.cheatSheet) {
      md += `### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)\n`;
      md += `- **🎯 Qué explicás acá (En 1 frase):** ${sl.cheatSheet.idea}\n`;
      md += `- **👆 Qué tocar en la Slide:** ${sl.cheatSheet.clicks}\n`;
      md += `- **💬 La analogía ganadora:** ${sl.cheatSheet.analogy}\n\n`;
    }
    if (sl.antigravityDemo) {
      md += `### 🚀 Ejemplo de IA Activa en Vivo con Google Antigravity\n`;
      md += `- **🖥️ ${sl.antigravityDemo.title}:** ${sl.antigravityDemo.explanation}\n`;
      md += `- **👆 Acción rápida:** ${sl.antigravityDemo.slideBtnHint}\n`;
      if (sl.antigravityDemo.livePrompt) {
        md += `- **📋 Prompt para pegar en Antigravity:** \`${sl.antigravityDemo.livePrompt}\`\n`;
      }
      md += `\n`;
    }
    md += `### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)\n`;
    md += `${sl.script}\n\n`;
    if (sl.plainTerms && sl.plainTerms.length > 0) {
      md += `### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)\n`;
      for (const pt of sl.plainTerms) {
        md += `- **${pt.term}:** ${pt.simple}\n`;
      }
      md += `\n`;
    }
    md += `### ⚡ Dinámica / Interacción en Pantalla\n`;
    md += `- ${sl.interaction}\n\n`;
    if (nextSl) {
      md += `### 🔗 Puente de Conexión → Slide ${nextSl.num} (${nextSl.title})\n`;
    } else {
      md += `### 🏁 Cierre y Puente hacia la Próxima Sesión\n`;
    }
    md += `> **"${sl.bridge}"**\n\n`;
    md += `---\n\n`;
  }

  if (s.nextSessionPreview) {
    md += `## ${s.nextSessionPreview.title}\n\n`;
    md += `${s.nextSessionPreview.spokenIntro}\n\n`;
    for (const p of s.nextSessionPreview.pillars) {
      md += `- **${p.num} — ${p.title}:** ${p.desc}\n`;
    }
    md += `\n`;
  }

  return md;
}

function mdToHtml(str) {
  if (!str) return '';
  return str
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff; font-weight:700;">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em style="color:#fde68a;">$1</em>')
    .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.08); padding:0.1rem 0.36rem; border-radius:5px; font-family:\'JetBrains Mono\',monospace; font-size:0.9em; color:#93c5fd;">$1</code>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

function stripMd(str) {
  if (!str) return '';
  return str
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

function generateSingleSessionHTML(s) {
  const otherLinks = sessions.map(other => {
    const active = other.id === s.id ? 'active-nav-pill' : '';
    return `<a href="guia_sesion_${other.id}_pm.html" class="nav-pill ${active}">Sesión ${other.id} (${other.slides.length} slides)</a>`;
  }).join('\n          ');

  const mentalMapHTML = (s.mentalMap60s && s.mentalMap60s.length > 0) ? `
    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(59, 130, 246, 0.12)); border: 2px solid rgba(16, 185, 129, 0.45); border-radius: 14px; padding: 1.15rem 1.35rem; margin-bottom: 1.25rem;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; font-weight: 800; color: #6ee7b7; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.65rem;">
        ⚡ MACHETE GENERAL DE 60 SEGUNDOS (LEÉ ESTOS 4 PUNTOS 1 MINUTO ANTES DE EMPEZAR LA LLAMADA)
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.7rem;">
        ${s.mentalMap60s.map(m => `
          <div style="background: rgba(7, 11, 20, 0.75); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 0.75rem 0.9rem;">
            <strong style="display: block; color: #34d399; font-size: 0.86rem; margin-bottom: 0.25rem;">${m.step}</strong>
            <p style="color: #e2e8f0; font-size: 0.82rem; line-height: 1.45; margin: 0;">${mdToHtml(m.text)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const antigravityGuideHTML = (s.antigravityGuide && s.antigravityGuide.length > 0) ? `
    <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.14), rgba(139, 92, 246, 0.12)); border: 2px solid rgba(249, 115, 22, 0.45); border-radius: 14px; padding: 1.15rem 1.35rem; margin-bottom: 1.25rem;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; font-weight: 800; color: #fdba74; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem;">
        🚀 4 DEMOS EN VIVO CON GOOGLE ANTIGRAVITY (PARA HACER LA SESIÓN SÚPER AMENA Y PRÁCTICA)
      </div>
      <p style="color: #cbd5e1; font-size: 0.85rem; margin-bottom: 0.8rem;">
        Además de los botones <strong>"🚀 Ver en Antigravity"</strong> integrados en las diapositivas, podés copiar cualquiera de estos 4 prompts con un clic y pegarlos en tu ventana de Antigravity para que ella vea <strong>IA Activa</strong> funcionando en tiempo real:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.75rem;">
        ${s.antigravityGuide.map(ag => `
          <div style="background: rgba(7, 11, 20, 0.82); border: 1px solid rgba(249, 115, 22, 0.28); border-radius: 10px; padding: 0.85rem 0.95rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.55rem;">
            <div>
              <span style="display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; color: #fb923c; background: rgba(249, 115, 22, 0.14); padding: 2px 8px; border-radius: 99px; margin-bottom: 0.35rem;">${ag.badge}</span>
              <strong style="display: block; color: #ffffff; font-size: 0.88rem; margin-bottom: 0.25rem;">${ag.title}</strong>
              <p style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.42; margin: 0;">${mdToHtml(ag.whatToShow)}</p>
            </div>
            <div style="background: rgba(15, 23, 42, 0.9); border: 1px dashed rgba(249, 115, 22, 0.4); border-radius: 8px; padding: 0.5rem 0.65rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #fdba74; font-weight: 700;">PROMPT PARA PROBAR EN VIVO:</span>
                <button class="copy-btn" style="padding: 2px 8px; font-size: 0.7rem;" onclick="copyText(this, \`${stripMd(ag.promptToCopy)}\`)">📋 Copiar Prompt</button>
              </div>
              <code style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #fed7aa; line-height: 1.35;">"${ag.promptToCopy}"</code>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const nextSessionPreviewHTML = s.nextSessionPreview ? `
    <div id="preview-sesion-4" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(56, 189, 248, 0.12)); border: 2px solid rgba(245, 158, 11, 0.55); border-radius: 16px; padding: 1.25rem 1.45rem; margin: 1.25rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 0.6rem;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.84rem; font-weight: 800; color: #fcd34d; text-transform: uppercase; letter-spacing: 0.04em;">
          ${s.nextSessionPreview.title}
        </div>
        <button class="copy-btn" onclick="copyText(this, \`${stripMd(s.nextSessionPreview.spokenIntro + '\\n' + s.nextSessionPreview.pillars.map(p => p.num + ' - ' + p.title + ': ' + p.desc).join('\\n'))}\`)">📋 Copiar Adelanto Sesión 4</button>
      </div>
      <p style="color: #fef3c7; font-size: 0.92rem; line-height: 1.5; margin-bottom: 0.9rem;">
        “${mdToHtml(s.nextSessionPreview.spokenIntro)}”
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 0.75rem;">
        ${s.nextSessionPreview.pillars.map(p => `
          <div style="background: rgba(7, 11, 20, 0.82); border: 1px solid rgba(245, 158, 11, 0.32); border-left: 3px solid #f59e0b; border-radius: 10px; padding: 0.8rem 0.95rem;">
            <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: #fbbf24; margin-bottom: 0.2rem;">${p.num}</span>
            <strong style="display: block; color: #ffffff; font-size: 0.88rem; margin-bottom: 0.35rem;">${p.title}</strong>
            <p style="color: #cbd5e1; font-size: 0.81rem; line-height: 1.45; margin: 0;">${mdToHtml(p.desc)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const agendaRows = s.agenda.map(a => `
    <div class="agenda-item">
      <span class="agenda-time">${a.time}</span>
      <div>
        <strong>${a.module}</strong> <span class="agenda-slides">(${a.slides})</span>
        <p>${mdToHtml(a.focus)}</p>
      </div>
    </div>
  `).join('\n');

  const slidesHTML = s.slides.map((sl, idx) => {
    const nextSl = idx < s.slides.length - 1 ? s.slides[idx + 1] : null;
    const bridgeLabel = nextSl
      ? `🔗 Puente de Conexión → Slide ${nextSl.num}: ${nextSl.title}`
      : `🏁 Cierre de Sesión ${s.id} y Puente a la Siguiente Clase`;

    const cheatSheetHTML = sl.cheatSheet ? `
        <div class="cheat-sheet-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.13), rgba(245, 158, 11, 0.09)); border: 2px solid rgba(16, 185, 129, 0.45); border-radius: 14px; padding: 1rem 1.2rem; margin-bottom: 1.2rem;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.77rem; font-weight: 800; color: #6ee7b7; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.65rem;">
            ⚡ MACHETE EXPRESS DE 5 SEGUNDOS (SI NO REPASASTE, MIRÁ SOLO ESTAS 3 CAJAS MIENTRAS COMPARTÍS PANTALLA)
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.7rem;">
            <div style="background: rgba(7, 11, 20, 0.78); border-left: 3px solid #10b981; border-radius: 8px; padding: 0.65rem 0.85rem;">
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: #6ee7b7; margin-bottom: 0.2rem;">🎯 1. IDEA CENTRAL EN 1 FRASE</span>
              <p style="font-size: 0.88rem; color: #ffffff; font-weight: 600; line-height: 1.42; margin: 0;">${mdToHtml(sl.cheatSheet.idea)}</p>
            </div>
            <div style="background: rgba(7, 11, 20, 0.78); border-left: 3px solid #38bdf8; border-radius: 8px; padding: 0.65rem 0.85rem;">
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: #7dd3fc; margin-bottom: 0.2rem;">👆 2. QUÉ TOCAR EN LA SLIDE</span>
              <p style="font-size: 0.86rem; color: #e2e8f0; line-height: 1.42; margin: 0;">${mdToHtml(sl.cheatSheet.clicks)}</p>
            </div>
            <div style="background: rgba(7, 11, 20, 0.78); border-left: 3px solid #f59e0b; border-radius: 8px; padding: 0.65rem 0.85rem;">
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: #fcd34d; margin-bottom: 0.2rem;">💬 3. ANALOGÍA GANADORA</span>
              <p style="font-size: 0.86rem; color: #fef3c7; line-height: 1.42; margin: 0;">${mdToHtml(sl.cheatSheet.analogy)}</p>
            </div>
          </div>
        </div>
    ` : '';

    const plainTermsHTML = (sl.plainTerms && sl.plainTerms.length > 0) ? `
        <div class="plain-terms-box">
          <div class="plain-terms-title">💡 Explicación en Palabras Simples (Cómo explicárselo claro a Anabela)</div>
          <div class="plain-terms-grid">
            ${sl.plainTerms.map(pt => `
              <div class="plain-term-item">
                <span class="pt-term">🔹 ${mdToHtml(pt.term)}</span>
                <p class="pt-desc">${mdToHtml(pt.simple)}</p>
              </div>
            `).join('')}
          </div>
        </div>
    ` : '';

    const antigravityDemoHTML = sl.antigravityDemo ? `
        <div class="ag-live-demo-box" style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.14), rgba(139, 92, 246, 0.1)); border: 1px solid rgba(249, 115, 22, 0.45); border-left: 4px solid #f97316; border-radius: 12px; padding: 0.95rem 1.15rem; margin-bottom: 1.1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.45rem;">
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.76rem; font-weight: 800; color: #fdba74; text-transform: uppercase; letter-spacing: 0.04em;">
              🚀 EJEMPLO DE IA ACTIVA EN VIVO CON GOOGLE ANTIGRAVITY: ${sl.antigravityDemo.title}
            </span>
            ${sl.antigravityDemo.livePrompt ? `<button class="copy-btn" style="border-color: rgba(249,115,22,0.5); color: #fed7aa;" onclick="copyText(this, \`${stripMd(sl.antigravityDemo.livePrompt)}\`)">📋 Copiar Prompt para Antigravity</button>` : ''}
          </div>
          <p style="font-size: 0.88rem; color: #f8fafc; line-height: 1.48; margin-bottom: 0.45rem;">${mdToHtml(sl.antigravityDemo.explanation)}</p>
          <p style="font-size: 0.8rem; color: #fdba74; margin: 0;"><strong>👆 En la presentación:</strong> ${mdToHtml(sl.antigravityDemo.slideBtnHint)}</p>
          ${sl.antigravityDemo.livePrompt ? `<div style="margin-top: 0.5rem; background: rgba(7, 11, 20, 0.78); border: 1px dashed rgba(249, 115, 22, 0.35); border-radius: 8px; padding: 0.45rem 0.7rem; font-family: 'JetBrains Mono', monospace; font-size: 0.77rem; color: #fde68a;">💬 Prompt en vivo: "${sl.antigravityDemo.livePrompt}"</div>` : ''}
        </div>
    ` : '';

    return `
      <article class="slide-script-card" id="slide-${sl.num}" data-slide="${sl.num}">
        <div class="card-header">
          <div class="header-left">
            <label class="check-wrap" title="Marcar slide como dictada">
              <input type="checkbox" class="slide-check" onchange="toggleDone(${sl.num}, this.checked)">
              <span class="slide-num">SLIDE ${String(sl.num).padStart(2, '0')}</span>
            </label>
            <h2 class="slide-title">${sl.title}</h2>
          </div>
          <div class="header-right">
            <span class="badge-tag">${sl.badge}</span>
            <span class="time-tag">⏱️ ${sl.time}</span>
          </div>
        </div>

        ${cheatSheetHTML}
        ${antigravityDemoHTML}

        <div class="script-section">
          <div class="section-head">
            <span class="section-label">🎙️ GUION PASO A PASO EN 3 BLOQUES CORTOS (SI QUERÉS LEERLO TEXTUAL)</span>
            <button class="copy-btn" onclick="copyText(this, \`${stripMd(sl.script)}\`)">📋 Copiar Guion</button>
          </div>
          <blockquote class="spoken-script">
            ${mdToHtml(sl.script)}
          </blockquote>
        </div>

        ${plainTermsHTML}

        <div class="interaction-box">
          <div class="interaction-title">⚡ Acción en Pantalla & Dinámica con Anabela</div>
          <p>${mdToHtml(sl.interaction)}</p>
        </div>

        <div class="bridge-connector">
          <div class="bridge-card">
            <div class="bridge-head">
              <span class="bridge-badge">${bridgeLabel}</span>
              <button class="copy-btn copy-bridge" onclick="copyText(this, \`${stripMd(sl.bridge)}\`)">📋 Copiar Puente</button>
            </div>
            <p class="bridge-text">“${mdToHtml(sl.bridge)}”</p>
          </div>
        </div>
      </article>
    `;
  }).join('\n');

  const quickJumpHTML = s.slides.map(sl =>
    `<a href="#slide-${sl.num}" class="jump-chip" id="chip-${sl.num}"><span>#${sl.num}</span> ${sl.title}</a>`
  ).join('\n        ');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guion Orador - ${s.title}: ${s.subtitle} | Anabela Hotian</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-main: #070b14;
      --bg-card: #0f172a;
      --bg-elevated: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent: ${s.accent};
      --bridge-color: #f59e0b;
      --action-color: #10b981;
      --border: rgba(255, 255, 255, 0.09);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-main);
      background-image:
        radial-gradient(circle at 10% 10%, rgba(${s.accentRgb}, 0.12), transparent 35%),
        radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.07), transparent 35%);
      color: var(--text-main);
      line-height: 1.65;
      padding-bottom: 5rem;
    }

    .top-copilot-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(7, 11, 20, 0.9);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      padding: 0.75rem 1.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .bar-left {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      flex-wrap: wrap;
    }

    .portal-btn {
      text-decoration: none;
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border);
      padding: 0.45rem 0.9rem;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 600;
      transition: 0.2s;
    }
    .portal-btn:hover { background: rgba(255, 255, 255, 0.14); }

    .open-slides-btn {
      text-decoration: none;
      color: #fff;
      background: var(--accent);
      padding: 0.45rem 1rem;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
      transition: 0.2s;
    }
    .open-slides-btn:hover { filter: brightness(1.12); transform: translateY(-1px); }

    .nav-pills {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }

    .nav-pill {
      text-decoration: none;
      color: var(--text-muted);
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid var(--border);
      padding: 0.4rem 0.85rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      transition: 0.2s;
    }
    .nav-pill:hover { color: var(--text-main); border-color: var(--accent); }
    .active-nav-pill {
      color: var(--text-main);
      background: rgba(${s.accentRgb}, 0.2);
      border-color: var(--accent);
    }

    .container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 2rem 1.25rem;
    }

    .hero-box {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85));
      border: 1px solid var(--border);
      border-left: 5px solid var(--accent);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    }

    .hero-eyebrow {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
      display: block;
    }

    .hero-box h1 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(1.7rem, 3.3vw, 2.35rem);
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }

    .hero-goal {
      color: #cbd5e1;
      font-size: 1rem;
      margin-bottom: 1.25rem;
    }

    .agenda-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }
    .agenda-item {
      background: rgba(7, 11, 20, 0.65);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 0.85rem 1rem;
      font-size: 0.84rem;
    }
    .agenda-time {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.74rem;
      color: var(--accent);
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .agenda-slides {
      color: var(--text-muted);
      font-size: 0.76rem;
    }
    .agenda-item p {
      color: #94a3b8;
      margin-top: 0.25rem;
      font-size: 0.8rem;
      line-height: 1.45;
    }

    .controls-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }

    .search-input {
      flex: 1;
      min-width: 240px;
      background: rgba(7, 11, 20, 0.8);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 0.65rem 1rem;
      border-radius: 10px;
      font-size: 0.9rem;
    }
    .search-input:focus { outline: none; border-color: var(--accent); }

    .mode-btn {
      background: rgba(245, 158, 11, 0.14);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 0.6rem 1rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: 0.2s;
    }
    .mode-btn:hover { background: rgba(245, 158, 11, 0.24); }

    .progress-stat {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: var(--action-color);
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 0.5rem 0.9rem;
      border-radius: 10px;
    }

    .quick-jump {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.1rem 1.25rem;
      margin-bottom: 2rem;
    }
    .quick-jump-title {
      font-size: 0.78rem;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      letter-spacing: 0.06em;
    }
    .jump-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }
    .jump-chip {
      text-decoration: none;
      font-size: 0.78rem;
      color: #cbd5e1;
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid var(--border);
      padding: 0.32rem 0.7rem;
      border-radius: 8px;
      transition: 0.18s;
    }
    .jump-chip span {
      color: var(--accent);
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      margin-right: 0.25rem;
    }
    .jump-chip:hover { border-color: var(--accent); color: #fff; transform: translateY(-1px); }
    .jump-chip.done-chip {
      opacity: 0.5;
      border-color: var(--action-color);
      text-decoration: line-through;
    }

    .slide-script-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 1.75rem;
      margin-bottom: 2.25rem;
      position: relative;
      transition: 0.25s;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }
    .slide-script-card:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }
    .slide-script-card.card-done {
      opacity: 0.62;
      border-color: rgba(16, 185, 129, 0.4);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
      padding-bottom: 1.1rem;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid var(--border);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-wrap: wrap;
    }

    .check-wrap {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      user-select: none;
    }
    .slide-check {
      width: 18px;
      height: 18px;
      accent-color: var(--action-color);
      cursor: pointer;
    }

    .slide-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      font-weight: 700;
      color: #fff;
      background: var(--accent);
      padding: 0.28rem 0.7rem;
      border-radius: 6px;
      letter-spacing: 0.05em;
    }

    .slide-title {
      font-family: 'Outfit', sans-serif;
      font-size: 1.38rem;
      color: #fff;
    }

    .header-right {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .badge-tag {
      font-size: 0.76rem;
      font-weight: 600;
      padding: 0.28rem 0.7rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.07);
      color: #e2e8f0;
      border: 1px solid var(--border);
    }

    .time-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: var(--accent);
      background: rgba(${s.accentRgb}, 0.14);
      border: 1px solid rgba(${s.accentRgb}, 0.35);
      padding: 0.28rem 0.65rem;
      border-radius: 999px;
    }

    .script-section {
      margin-bottom: 1.25rem;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
      gap: 0.5rem;
    }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--accent);
      letter-spacing: 0.06em;
    }

    .copy-btn {
      background: rgba(255, 255, 255, 0.06);
      color: #cbd5e1;
      border: 1px solid var(--border);
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.18s;
    }
    .copy-btn:hover { background: rgba(255, 255, 255, 0.15); color: #fff; }

    .spoken-script {
      background: rgba(15, 23, 42, 0.9);
      border-left: 4px solid var(--accent);
      border-radius: 0 12px 12px 0;
      padding: 1.25rem 1.4rem;
      font-size: 1.07rem;
      line-height: 1.78;
      color: #f1f5f9;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .plain-terms-box {
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(168, 85, 247, 0.07));
      border: 1px solid rgba(56, 189, 248, 0.32);
      border-radius: 14px;
      padding: 1.1rem 1.3rem;
      margin-bottom: 1.25rem;
    }

    .plain-terms-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 0.75rem;
    }

    .plain-terms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 0.75rem;
    }

    .plain-term-item {
      background: rgba(7, 11, 20, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 0.75rem 0.95rem;
    }

    .pt-term {
      display: block;
      font-family: 'Outfit', sans-serif;
      font-size: 0.92rem;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 0.28rem;
    }

    .pt-desc {
      font-size: 0.86rem;
      color: #cbd5e1;
      line-height: 1.5;
    }

    .interaction-box {
      background: rgba(16, 185, 129, 0.07);
      border: 1px solid rgba(16, 185, 129, 0.28);
      border-radius: 12px;
      padding: 1rem 1.25rem;
      margin-bottom: 1.35rem;
    }

    .interaction-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      font-weight: 700;
      color: #34d399;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.35rem;
    }

    .interaction-box p {
      font-size: 0.95rem;
      color: #d1fae5;
    }

    .bridge-connector {
      position: relative;
      margin-top: 1.2rem;
    }

    .bridge-card {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.13), rgba(234, 88, 12, 0.08));
      border: 1px dashed rgba(245, 158, 11, 0.55);
      border-left: 4px solid var(--bridge-color);
      border-radius: 12px;
      padding: 1.1rem 1.3rem;
    }

    .bridge-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.45rem;
    }

    .bridge-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      font-weight: 700;
      color: #fbbf24;
      letter-spacing: 0.03em;
    }

    .bridge-text {
      font-size: 1.02rem;
      font-weight: 500;
      color: #fef3c7;
      font-style: italic;
    }

    body.bridges-only .script-section,
    body.bridges-only .plain-terms-box,
    body.bridges-only .interaction-box {
      display: none;
    }
    body.bridges-only .slide-script-card {
      padding: 1.1rem 1.4rem;
      margin-bottom: 1rem;
    }

    body.cheat-mode-only .script-section {
      display: none;
    }

    @media (max-width: 768px) {
      .top-copilot-bar { padding: 0.65rem 1rem; }
      .hero-box { padding: 1.35rem; }
      .slide-script-card { padding: 1.25rem; }
      .spoken-script { font-size: 1rem; padding: 1rem; }
    }
  </style>
</head>
<body>

  <header class="top-copilot-bar">
    <div class="bar-left">
      <a href="../index.html" class="portal-btn">⬅ Portal Mentoría</a>
      <a href="guia_completa_mentoria.html" class="portal-btn">📚 Hub Maestro (63 Slides)</a>
      <a href="../sesiones/${s.slidesFile}" target="_blank" class="open-slides-btn">🖥️ Abrir Slides Sesión ${s.id} ↗</a>
      ${s.id === 1 ? '<a href="../sesiones/actividad_practica_sesion_1.html" target="_blank" class="portal-btn" style="border-color: rgba(16,185,129,0.5); color: #6ee7b7;">🎯 Simulador Práctico S1 ↗</a>' : ''}
      ${s.id === 2 ? '<a href="../sesiones/actividad_practica_sesion_2.html" target="_blank" class="portal-btn" style="border-color: rgba(16,185,129,0.5); color: #6ee7b7;">🎯 Simulador Práctico S2 ↗</a><a href="../sesiones/mock_prd_tarea_sesion_2.html" target="_blank" class="portal-btn" style="border-color: rgba(168,85,247,0.5); color: #d8b4fe;">📝 Plantilla PRD Tarea ↗</a><a href="../sesiones/glosario_completo_sesion_2.html" target="_blank" class="portal-btn" style="border-color: rgba(56,189,248,0.5); color: #7dd3fc;">📖 Glosario S2 ↗</a>' : ''}
      ${s.id === 3 ? '<a href="../sesiones/actividad_practica_sesion_3.html" target="_blank" class="portal-btn" style="border-color: rgba(16,185,129,0.5); color: #6ee7b7;">🎯 Simulador Práctico S3 ↗</a><a href="../sesiones/guia_antigravity_aws_mcp.html" target="_blank" class="portal-btn" style="border-color: rgba(249,115,22,0.5); color: #fdba74;">☁️ Guía Antigravity + AWS ↗</a><a href="../sesiones/glosario_completo_sesion_3.html" target="_blank" class="portal-btn" style="border-color: rgba(56,189,248,0.5); color: #7dd3fc;">📖 Glosario S3 ↗</a>' : ''}
      ${s.id === 4 ? '<a href="../sesiones/glosario_completo_sesion_4.html" target="_blank" class="portal-btn" style="border-color: rgba(56,189,248,0.5); color: #7dd3fc;">📖 Glosario S4 ↗</a>' : ''}
    </div>
    <nav class="nav-pills">
      ${otherLinks}
    </nav>
  </header>

  <main class="container">
    <section class="hero-box">
      <span class="hero-eyebrow">COPILOTO DE ORADOR · MENTORÍA ANABELA HOTIAN</span>
      <h1>${s.title}: ${s.subtitle}</h1>
      <p class="hero-goal"><strong>🎯 Objetivo pedagógico:</strong> ${s.goal}</p>

      ${mentalMapHTML}
      ${antigravityGuideHTML}
      ${nextSessionPreviewHTML}

      <div class="agenda-grid">
        ${agendaRows}
      </div>

      <div class="controls-row">
        <input type="text" id="searchInput" class="search-input" placeholder="🔍 Filtrar por palabra clave, número de slide o puente..." oninput="filterSlides()">
        <button class="mode-btn" style="background: rgba(16, 185, 129, 0.16); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.45);" onclick="toggleCheatMode(this)">⚡ Modo Machete Rápido (Ocultar texto largo)</button>
        <button class="mode-btn" onclick="toggleBridgesMode(this)">🔗 Ver Solo Puentes entre Slides</button>
        <div class="progress-stat" id="progressStat">0 / ${s.slides.length} dictadas</div>
      </div>
    </section>

    <nav class="quick-jump">
      <div class="quick-jump-title">⚡ Salto Rápido a Diapositivas (${s.slides.length} Slides)</div>
      <div class="jump-grid">
        ${quickJumpHTML}
      </div>
    </nav>

    <section id="slidesContainer">
      ${slidesHTML}
    </section>

    ${nextSessionPreviewHTML}
  </main>

  <script>
    const totalSlides = ${s.slides.length};

    function updateProgress() {
      const checks = document.querySelectorAll('.slide-check:checked').length;
      document.getElementById('progressStat').textContent = checks + ' / ' + totalSlides + ' dictadas';
    }

    function toggleDone(num, checked) {
      const card = document.getElementById('slide-' + num);
      const chip = document.getElementById('chip-' + num);
      if (checked) {
        card.classList.add('card-done');
        chip.classList.add('done-chip');
      } else {
        card.classList.remove('card-done');
        chip.classList.remove('done-chip');
      }
      updateProgress();
    }

    function toggleCheatMode(btn) {
      document.body.classList.remove('bridges-only');
      document.body.classList.toggle('cheat-mode-only');
      const active = document.body.classList.contains('cheat-mode-only');
      btn.textContent = active ? '📖 Mostrar Guion Completo + Machete' : '⚡ Modo Machete Rápido (Ocultar texto largo)';
    }

    function toggleBridgesMode(btn) {
      document.body.classList.remove('cheat-mode-only');
      document.body.classList.toggle('bridges-only');
      const active = document.body.classList.contains('bridges-only');
      btn.textContent = active ? '🎙️ Mostrar Guion Completo + Puentes' : '🔗 Ver Solo Puentes entre Slides';
    }

    function filterSlides() {
      const q = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.slide-script-card');
      cards.forEach(c => {
        const text = c.innerText.toLowerCase();
        c.style.display = text.includes(q) ? '' : 'none';
      });
    }

    function copyText(btn, text) {
      navigator.clipboard.writeText(text).then(() => {
        const prev = btn.textContent;
        btn.textContent = '✅ Copiado';
        setTimeout(() => { btn.textContent = prev; }, 1600);
      });
    }
  </script>
</body>
</html>`;
}

function generateMasterHubHTML() {
  const tabsHTML = sessions.map((s, idx) => `
    <button class="session-tab ${idx === 0 ? 'active' : ''}" onclick="switchSession(${s.id}, this)">
      <span class="tab-num">SESIÓN 0${s.id}</span>
      <span class="tab-name">${s.subtitle}</span>
      <span class="tab-count">${s.slides.length} slides + puentes de conexión</span>
    </button>
  `).join('\n');

  const panelsHTML = sessions.map((s, idx) => {
    const cards = s.slides.map((sl, i) => {
      const nextSl = i < s.slides.length - 1 ? s.slides[i + 1] : null;
      const bridgeTitle = nextSl
        ? `🔗 Conexión hacia Slide ${nextSl.num} (${nextSl.title})`
        : `🏁 Cierre de Sesión ${s.id} y Conexión con la Próxima Clase`;

      return `
        <article class="hub-card" id="s${s.id}-slide-${sl.num}">
          <div class="hub-card-top">
            <div>
              <span class="hub-slide-badge">S${s.id} · SLIDE ${String(sl.num).padStart(2, '0')}</span>
              <span class="hub-cat-badge">${sl.badge}</span>
              <span class="hub-time-badge">⏱️ ${sl.time}</span>
              <h3>${sl.title}</h3>
            </div>
            <button class="hub-copy" onclick="copyHubText(this, \`${stripMd(sl.script)} \\n\\n[PUENTE]: ${stripMd(sl.bridge)}\`)">📋 Copiar Guion + Puente</button>
          </div>

          ${sl.cheatSheet ? `
          <div style="background:linear-gradient(135deg, rgba(16,185,129,0.12), rgba(245,158,11,0.08)); border:1px solid rgba(16,185,129,0.4); border-radius:10px; padding:0.85rem 1rem; margin-bottom:0.9rem;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.74rem; font-weight:800; color:#6ee7b7; margin-bottom:0.5rem;">⚡ MACHETE EXPRESS DE 5 SEGUNDOS (SI NO REPASASTE)</div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.55rem;">
              <div style="background:rgba(7,11,20,0.75); border-left:3px solid #10b981; border-radius:8px; padding:0.55rem 0.75rem;">
                <strong style="display:block; color:#6ee7b7; font-size:0.74rem; font-family:monospace;">🎯 1. IDEA CENTRAL</strong>
                <span style="color:#fff; font-size:0.84rem;">${mdToHtml(sl.cheatSheet.idea)}</span>
              </div>
              <div style="background:rgba(7,11,20,0.75); border-left:3px solid #38bdf8; border-radius:8px; padding:0.55rem 0.75rem;">
                <strong style="display:block; color:#7dd3fc; font-size:0.74rem; font-family:monospace;">👆 2. QUÉ TOCAR</strong>
                <span style="color:#e2e8f0; font-size:0.82rem;">${mdToHtml(sl.cheatSheet.clicks)}</span>
              </div>
              <div style="background:rgba(7,11,20,0.75); border-left:3px solid #f59e0b; border-radius:8px; padding:0.55rem 0.75rem;">
                <strong style="display:block; color:#fcd34d; font-size:0.74rem; font-family:monospace;">💬 3. ANALOGÍA GANADORA</strong>
                <span style="color:#fef3c7; font-size:0.82rem;">${mdToHtml(sl.cheatSheet.analogy)}</span>
              </div>
            </div>
          </div>
          ` : ''}

          ${sl.antigravityDemo ? `
          <div style="background:linear-gradient(135deg, rgba(249,115,22,0.13), rgba(139,92,246,0.09)); border:1px solid rgba(249,115,22,0.45); border-left:4px solid #f97316; border-radius:10px; padding:0.85rem 1rem; margin-bottom:0.9rem;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.74rem; font-weight:800; color:#fdba74; margin-bottom:0.35rem;">🚀 EJEMPLO DE IA ACTIVA EN VIVO CON GOOGLE ANTIGRAVITY: ${sl.antigravityDemo.title}</div>
            <p style="color:#f8fafc; font-size:0.86rem; line-height:1.45; margin-bottom:0.35rem;">${mdToHtml(sl.antigravityDemo.explanation)}</p>
            <p style="color:#fdba74; font-size:0.8rem; margin:0;"><strong>👆 En la slide:</strong> ${mdToHtml(sl.antigravityDemo.slideBtnHint)}</p>
          </div>
          ` : ''}

          <div class="hub-script">
            <div class="hub-label">🗣️ GUION PASO A PASO (3 BLOQUES CORTOS)</div>
            <p>${mdToHtml(sl.script)}</p>
          </div>

          ${(sl.plainTerms && sl.plainTerms.length > 0) ? `
          <div class="hub-plain-terms" style="background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.3); border-radius:10px; padding:0.85rem 1rem; margin-bottom:0.9rem;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:0.75rem; font-weight:700; color:#38bdf8; margin-bottom:0.5rem;">💡 EXPLICACIÓN EN PALABRAS SIMPLES DE LA TERMINOLOGÍA TÉCNICA</div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.55rem;">
              ${sl.plainTerms.map(pt => `
                <div style="background:rgba(7,11,20,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.6rem 0.8rem;">
                  <strong style="display:block; color:#fff; font-size:0.86rem; margin-bottom:0.2rem;">🔹 ${mdToHtml(pt.term)}</strong>
                  <span style="color:#cbd5e1; font-size:0.82rem; line-height:1.45;">${mdToHtml(pt.simple)}</span>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}

          <div class="hub-action">
            <strong>⚡ Dinámica en Pantalla:</strong> ${mdToHtml(sl.interaction)}
          </div>

          <div class="hub-bridge">
            <div class="hub-bridge-label">${bridgeTitle}</div>
            <p>“${mdToHtml(sl.bridge)}”</p>
          </div>
        </article>
      `;
    }).join('\n');

    return `
      <section class="session-panel ${idx === 0 ? 'active' : ''}" id="panel-s${s.id}">
        <div class="panel-banner">
          <div>
            <h2>${s.title}: ${s.subtitle}</h2>
            <p>${s.goal}</p>
          </div>
          <div class="panel-actions">
            <a href="guia_sesion_${s.id}_pm.html" class="panel-btn">📄 Vista Dedicada S${s.id}</a>
            <a href="../sesiones/${s.slidesFile}" target="_blank" class="panel-btn primary">🖥️ Abrir Presentación S${s.id} ↗</a>
          </div>
        </div>
        ${cards}
      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hub Maestro de Guiones y Conexiones (63 Slides) | Mentoría Anabela Hotian</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070b14;
      --card: #0f172a;
      --border: rgba(255,255,255,0.09);
      --text: #f8fafc;
      --muted: #94a3b8;
      --accent: #38bdf8;
      --amber: #f59e0b;
      --emerald: #10b981;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
      padding-bottom: 4rem;
    }
    .topbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(7, 11, 20, 0.92);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
      padding: 0.85rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .topbar a {
      color: var(--text);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      background: rgba(255,255,255,0.07);
      padding: 0.45rem 0.95rem;
      border-radius: 999px;
      border: 1px solid var(--border);
    }
    .container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 2rem 1.25rem;
    }
    .master-hero {
      text-align: center;
      margin-bottom: 2rem;
    }
    .master-hero h1 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(1.9rem, 3.8vw, 2.75rem);
      margin-bottom: 0.6rem;
    }
    .master-hero p {
      color: var(--muted);
      max-width: 780px;
      margin: 0 auto 1.25rem;
    }
    .toolbar {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 1.75rem;
    }
    .toolbar input {
      width: min(460px, 100%);
      background: #0f172a;
      border: 1px solid var(--border);
      color: #fff;
      padding: 0.65rem 1rem;
      border-radius: 10px;
      font-size: 0.9rem;
    }
    .toolbar button {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.45);
      color: #fbbf24;
      padding: 0.65rem 1.1rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
    }
    .tabs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 0.85rem;
      margin-bottom: 2rem;
    }
    .session-tab {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1rem 1.15rem;
      text-align: left;
      color: var(--text);
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .session-tab:hover { border-color: var(--accent); }
    .session-tab.active {
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(139, 92, 246, 0.14));
      border-color: var(--accent);
      box-shadow: 0 10px 25px rgba(56, 189, 248, 0.15);
    }
    .tab-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--accent);
      font-weight: 700;
    }
    .tab-name {
      font-family: 'Outfit', sans-serif;
      font-size: 1.02rem;
      font-weight: 700;
    }
    .tab-count {
      font-size: 0.78rem;
      color: var(--muted);
    }
    .session-panel { display: none; }
    .session-panel.active { display: block; }
    .panel-banner {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 1.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .panel-banner h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.45rem;
      margin-bottom: 0.3rem;
    }
    .panel-banner p { color: #cbd5e1; font-size: 0.95rem; max-width: 680px; }
    .panel-actions { display: flex; gap: 0.6rem; flex-wrap: wrap; }
    .panel-btn {
      text-decoration: none;
      color: #fff;
      background: rgba(255,255,255,0.08);
      border: 1px solid var(--border);
      padding: 0.55rem 1rem;
      border-radius: 10px;
      font-size: 0.84rem;
      font-weight: 600;
    }
    .panel-btn.primary {
      background: var(--accent);
      color: #0f172a;
      border-color: transparent;
      font-weight: 700;
    }
    .hub-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .hub-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      padding-bottom: 0.85rem;
      border-bottom: 1px solid var(--border);
    }
    .hub-card-top h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.3rem;
      margin-top: 0.45rem;
    }
    .hub-slide-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.76rem;
      font-weight: 700;
      background: var(--accent);
      color: #0f172a;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
      margin-right: 0.4rem;
    }
    .hub-cat-badge, .hub-time-badge {
      font-size: 0.76rem;
      color: #cbd5e1;
      background: rgba(255,255,255,0.06);
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      margin-right: 0.35rem;
    }
    .hub-copy {
      background: rgba(255,255,255,0.07);
      border: 1px solid var(--border);
      color: #e2e8f0;
      padding: 0.35rem 0.75rem;
      border-radius: 8px;
      font-size: 0.78rem;
      cursor: pointer;
    }
    .hub-script {
      background: rgba(7, 11, 20, 0.75);
      border-left: 4px solid var(--accent);
      padding: 1.1rem 1.25rem;
      border-radius: 0 12px 12px 0;
      margin-bottom: 0.9rem;
    }
    .hub-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.74rem;
      color: var(--accent);
      font-weight: 700;
      margin-bottom: 0.35rem;
    }
    .hub-script p { font-size: 1.03rem; color: #f1f5f9; }
    .hub-action {
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.28);
      color: #d1fae5;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      font-size: 0.92rem;
      margin-bottom: 0.9rem;
    }
    .hub-bridge {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(234, 88, 12, 0.08));
      border: 1px dashed rgba(245, 158, 11, 0.55);
      border-left: 4px solid var(--amber);
      padding: 0.95rem 1.15rem;
      border-radius: 10px;
    }
    .hub-bridge-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      font-weight: 700;
      color: #fbbf24;
      margin-bottom: 0.25rem;
    }
    .hub-bridge p { color: #fef3c7; font-style: italic; font-size: 0.98rem; }
    body.only-bridges .hub-script,
    body.only-bridges .hub-plain-terms,
    body.only-bridges .hub-action { display: none; }
  </style>
</head>
<body>
  <header class="topbar">
    <a href="../index.html">⬅ Volver al Portal Principal de Anabela</a>
    <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
      <a href="guia_sesion_1_pm.html">🎙️ S1 (18)</a>
      <a href="guia_sesion_2_pm.html">🎙️ S2 (15)</a>
      <a href="guia_sesion_3_pm.html">🎙️ S3 (15)</a>
      <a href="guia_sesion_4_pm.html">🎙️ S4 (15)</a>
    </div>
  </header>

  <main class="container">
    <section class="master-hero">
      <h1>🎙️ Guion Maestro de Orador & Conexiones entre Diapositivas</h1>
      <p>Las <strong>63 diapositivas</strong> del programa para <strong>Anabela Hotian</strong> con su guion literal, dinámica interactiva en vivo y el puente exacto ("hilo conductor") para pasar de cada slide a la siguiente sin perder ritmo.</p>
      <div class="toolbar">
        <input type="text" id="globalSearch" placeholder="🔍 Buscar en las 63 slides (ej. RAG, Jira, tokens, RWS, puente...)" oninput="filterHub()">
        <button onclick="toggleOnlyBridges(this)">🔗 Ver Solo Conexiones entre Diapositivas</button>
      </div>
    </section>

    <div class="tabs-grid">
      ${tabsHTML}
    </div>

    ${panelsHTML}
  </main>

  <script>
    function switchSession(id, btn) {
      document.querySelectorAll('.session-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.session-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-s' + id).classList.add('active');
    }

    function toggleOnlyBridges(btn) {
      document.body.classList.toggle('only-bridges');
      const on = document.body.classList.contains('only-bridges');
      btn.textContent = on ? '🎙️ Mostrar Guion Completo + Conexiones' : '🔗 Ver Solo Conexiones entre Diapositivas';
    }

    function filterHub() {
      const q = document.getElementById('globalSearch').value.toLowerCase().trim();
      const panels = document.querySelectorAll('.session-panel');
      if (q.length > 0) {
        panels.forEach(p => p.classList.add('active'));
      }
      document.querySelectorAll('.hub-card').forEach(c => {
        c.style.display = c.innerText.toLowerCase().includes(q) ? '' : 'none';
      });
    }

    function copyHubText(btn, txt) {
      navigator.clipboard.writeText(txt).then(() => {
        const old = btn.textContent;
        btn.textContent = '✅ Copiado';
        setTimeout(() => btn.textContent = old, 1500);
      });
    }
  </script>
</body>
</html>`;
}

// Write all individual HTML & MD files + Master Hub
let fullMasterMd = `# 🎙️ Guion Maestro Completo (Sesiones 1 a 4 — 63 Diapositivas con Conexiones)\n\n`;
fullMasterMd += `**Programa:** De la Traducción a la Ingeniería de IA & Gestión Agile\n`;
fullMasterMd += `**Alumna:** Anabela Hotian | **Mentor:** Ing. Francisco Bondino\n\n---\n\n`;

for (const s of sessions) {
  const mdContent = generateSessionMarkdown(s);
  const htmlContent = generateSingleSessionHTML(s);

  const mdPath = path.join(guiasDir, `guia_sesion_${s.id}_pm.md`);
  const htmlPath = path.join(guiasDir, `guia_sesion_${s.id}_pm.html`);
  const aliasHtmlPath = path.join(guiasDir, `guion_mentor_sesion_${s.id}.html`);

  fs.writeFileSync(mdPath, mdContent, 'utf8');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  fs.writeFileSync(aliasHtmlPath, htmlContent, 'utf8');

  fullMasterMd += mdContent + `\n\n`;
  console.log(`Generated S${s.id}: ${s.slides.length} slides -> ${htmlPath}, ${aliasHtmlPath} & ${mdPath}`);
}

const masterHtmlPath = path.join(guiasDir, 'guia_completa_mentoria.html');
const masterMdPath = path.join(guiasDir, 'guion_completo_mentoria_anabela.md');
fs.writeFileSync(masterHtmlPath, generateMasterHubHTML(), 'utf8');
fs.writeFileSync(masterMdPath, fullMasterMd, 'utf8');
console.log(`Generated Master Hub -> ${masterHtmlPath} & ${masterMdPath}`);
