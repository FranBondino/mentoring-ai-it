const fs = require('fs');
const path = require('path');

const sesionesDir = 'C:\\Users\\franc\\.gemini\\antigravity\\scratch\\mentoria-anabela-hotian\\sesiones';

for (let i = 1; i <= 4; i++) {
  const file = path.join(sesionesDir, `slides_sesion_${i}.html`);
  let content = fs.readFileSync(file, 'utf8');

  const glossaryLink = `<a href="./glosario_completo_sesion_${i}.html" class="anabela-hud-btn" title="Abrir Glosario Completo de la Sesión ${i}">`;
  const scriptBtn = `<a href="../guias-mentor/guia_sesion_${i}_pm.html" target="_blank" class="anabela-hud-btn" title="Abrir Guion de Orador y Conexiones de la Sesión ${i}">
                🎙️ <span class="hud-label-hide-sm">Guion S${i}</span>
            </a>\n            `;

  if (!content.includes(`guia_sesion_${i}_pm.html`) && content.includes(glossaryLink)) {
    content = content.replace(glossaryLink, scriptBtn + glossaryLink);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Added Guion S${i} button to slides_sesion_${i}.html`);
  } else {
    console.log(`Skipped or already present in slides_sesion_${i}.html`);
  }
}
