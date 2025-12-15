import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-noticia3',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent],
  template: `
    <app-nav-bar />
    
    <main class="news-container">
      <header class="hero-header">
        <div class="overlay"></div>
        <div class="hero-content">
          <span class="badge">Historia & Economía</span>
          <h1>La Guerra del Banano: Ecuador vs. Unión Europea</h1>
          <div class="meta-data">
            <span>📅 01 Dic 2024</span> • <span>⏱️ 10 min lectura</span> • <span>✍️ Archivo Histórico</span>
          </div>
        </div>
      </header>

      <article class="content-body">
        <div class="intro-box">
          <p>
            Durante más de dos décadas, el comercio internacional fue testigo de una de las disputas más complejas y prolongadas ante la Organización Mundial del Comercio (OMC). No fue solo una cuestión de frutas; fue un choque entre el proteccionismo europeo y el derecho al libre comercio de las economías latinoamericanas.
          </p>
        </div>

        <h2 class="section-title">El Origen: Discriminación Comercial</h2>
        <p>
          El conflicto surgió cuando la Unión Europea estableció un régimen de importación diseñado para proteger a sus excolonias en África, el Caribe y el Pacífico (países ACP). Bajo el <strong>Acuerdo de Lomé</strong>, el banano de estas regiones ingresaba a Europa libre de aranceles.
        </p>
        <p>
          En contraste, el banano de Ecuador y otros países latinoamericanos —a pesar de ser más barato y de mejor calidad— enfrentaba restricciones severas:
        </p>
        <div class="restrictions-grid">
          <div class="restriction-card">
            <div class="icon">💰</div>
            <h4>Aranceles Punitivos</h4>
            <p>Se llegaron a imponer tarifas de hasta <strong>176 euros por tonelada</strong>, reduciendo drásticamente el margen de ganancia de los productores.</p>
          </div>
          <div class="restriction-card">
            <div class="icon">📊</div>
            <h4>Sistema de Cuotas</h4>
            <p>Se limitaba físicamente la cantidad de fruta que podía ingresar, independientemente de la demanda del consumidor europeo.</p>
          </div>
          <div class="restriction-card">
            <div class="icon">📑</div>
            <h4>Licencias Complejas</h4>
            <p>Se favorecía a importadores tradicionales europeos, cerrando el mercado a nuevos competidores.</p>
          </div>
        </div>

        <h2 class="section-title">La Batalla Legal y el Acuerdo de Ginebra</h2>
        <p>
          Ecuador, siendo el mayor exportador mundial, lideró la ofensiva diplomática. El país argumentó que estas medidas violaban el principio de "Trato de la Nación Más Favorecida". Tras años de litigio, fallos a favor y amenazas de sanciones cruzadas, la diplomacia triunfó.
        </p>
        <p class="highlight-text">
          En 2009 se firmó el <strong>Acuerdo de Ginebra</strong>, un hito histórico donde la UE se comprometió a reducir progresivamente el arancel desde los 176 euros hasta llegar a los <strong>114 euros por tonelada</strong>. Esto devolvió la competitividad al sector y aseguró el empleo de más de dos millones de personas en la cadena productiva.
        </p>

        <h2 class="section-title">Legado: La Revolución Sostenible</h2>
        <div class="legacy-section">
          <div class="legacy-image">
             <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=800&fit=crop" alt="Agricultura Sostenible">
          </div>
          <div class="legacy-content">
            <p>
              El fin del conflicto trajo consigo una exigencia inesperada: la calidad ambiental. Para reconquistar el mercado europeo, los productores ecuatorianos tuvieron que modernizarse.
            </p>
            <p>
              Hoy en día, certificaciones como <em>Rainforest Alliance</em>, <em>GlobalGAP</em> y prácticas de comercio justo son la norma. Se implementaron sistemas de trazabilidad, reducción de agroquímicos y protección de la biodiversidad. Lo que comenzó como una barrera comercial terminó convirtiendo a Ecuador en un líder de agricultura sostenible.
            </p>
          </div>
        </div>

      </article>

      <footer class="news-footer">
        <a routerLink="/inicio" class="btn-back">← Volver al Inicio</a>
      </footer>
    </main>
  `,
  styles: [`
    .news-container { max-width: 900px; margin: 0 auto; background: #f1f8e9; min-height: 100vh; font-family: 'Georgia', serif; }
    
    .hero-header { position: relative; height: 500px; background-image: url('https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1200&h=800&fit=crop'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; }
    .overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(27, 94, 32, 0.75); }
    .hero-content { position: relative; z-index: 2; padding: 2rem; color: white; }
    .badge { background: #aed581; color: #1b5e20; padding: 0.5rem 1.5rem; letter-spacing: 2px; text-transform: uppercase; font-size: 0.8rem; font-family: sans-serif; font-weight: bold; }
    h1 { font-size: 3.5rem; margin: 1.5rem 0; font-weight: normal; font-style: italic; }

    .content-body { padding: 4rem; background: white; max-width: 850px; margin: -60px auto 0; position: relative; z-index: 3; box-shadow: 0 15px 40px rgba(0,0,0,0.15); border-radius: 4px; }
    
    .intro-box { font-size: 1.4rem; color: #558b2f; text-align: center; margin-bottom: 4rem; line-height: 1.8; font-style: italic; border-bottom: 1px solid #c5e1a5; padding-bottom: 2rem; }
    .section-title { font-family: sans-serif; text-transform: uppercase; color: #33691e; margin: 3rem 0 1.5rem; letter-spacing: 1px; font-weight: bold; border-left: 4px solid #7cb342; padding-left: 1rem; }
    
    p { font-size: 1.15rem; line-height: 1.8; color: #333; margin-bottom: 1.5rem; }

    .restrictions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
    .restriction-card { background: #f9fbe7; padding: 1.5rem; text-align: center; border-radius: 8px; border: 1px solid #dcedc8; transition: transform 0.3s; }
    .restriction-card:hover { transform: translateY(-5px); background: #f1f8e9; }
    .icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .restriction-card h4 { margin: 0 0 0.5rem; color: #558b2f; font-family: sans-serif; }
    .restriction-card p { font-size: 1rem; margin: 0; }

    .highlight-text { background: #e8f5e9; padding: 1.5rem; border-left: 4px solid #2e7d32; font-weight: bold; color: #1b5e20; }

    .legacy-section { display: flex; gap: 2rem; margin-top: 2rem; align-items: center; }
    .legacy-image { flex: 1; }
    .legacy-image img { width: 100%; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    .legacy-content { flex: 2; }

    .news-footer { padding: 3rem; text-align: center; background: #f1f8e9; }
    .btn-back { display: inline-block; padding: 1rem 3rem; background: #33691e; color: white; text-decoration: none; font-family: sans-serif; text-transform: uppercase; letter-spacing: 1px; transition: background 0.3s; font-weight: bold; }
    .btn-back:hover { background: #1b5e20; }

    @media (max-width: 768px) {
      .hero-header { height: 400px; }
      h1 { font-size: 2.2rem; }
      .legacy-section { flex-direction: column; }
      .content-body { padding: 2rem; width: 95%; }
    }
  `]
})
export class Noticia3Component {}