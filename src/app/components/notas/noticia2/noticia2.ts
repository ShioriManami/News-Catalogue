import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-noticia2',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent],
  template: `
    <app-nav-bar />
    
    <main class="news-container">
      <header class="hero-header">
        <div class="hero-content">
          <span class="badge">E-commerce & Estrategia</span>
          <h1>Amazon vs. Mercado Libre: Choque de Titanes en Latinoamérica</h1>
          <div class="meta-data">
            <span>📅 02 Dic 2024</span> • <span>⏱️ 15 min lectura</span> • <span>✍️ Tech Insights</span>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/FB3K5KV4MFBMPF3OONNK4KA3JI.jpg" alt="E-commerce Warehouse">
        </div>
      </header>

      <article class="content-body">
        <p class="lead-text">
          La batalla por el dominio del comercio electrónico en América Latina presenta dos filosofías opuestas. Amazon busca imponer su eficiencia global estandarizada, mientras que Mercado Libre apuesta por una adaptación hiper-local que entiende las complejidades de la región.
        </p>

        <h2 class="section-title">Estrategias de Internacionalización</h2>
        
        <div class="comparison-container">
          <div class="strategy-col amazon-col">
            <div class="col-header">
              <h3>📦 Amazon</h3>
              <span>El Modelo Global</span>
            </div>
            <p>Su enfoque es la <strong>replicación</strong>. Amazon utiliza su inmensa infraestructura tecnológica (AWS) y su capacidad logística para ofrecer un servicio estandarizado.</p>
            <ul>
              <li><strong>Foco:</strong> Membresía Prime y video.</li>
              <li><strong>Reto:</strong> Dificultad para penetrar en zonas con baja bancarización.</li>
              <li><strong>Inversión:</strong> Centros masivos en capitales (CDMX, Sao Paulo).</li>
            </ul>
          </div>
          
          <div class="strategy-col meli-col">
            <div class="col-header">
              <h3>🤝 Mercado Libre</h3>
              <span>El Modelo Local</span>
            </div>
            <p>Su enfoque es la <strong>regionalización profunda</strong>. Entiende que Latinoamérica tiene problemas únicos (informalidad, falta de bancos) y crea soluciones específicas.</p>
            <ul>
              <li><strong>Foco:</strong> Ecosistema integral (Pagos + Créditos + Envíos).</li>
              <li><strong>Ventaja:</strong> Liderazgo en "última milla" compleja.</li>
              <li><strong>Innovación:</strong> Fintech como puerta de entrada.</li>
            </ul>
          </div>
        </div>

        <h2 class="section-title">La Revolución Fintech: Mercado Pago</h2>
        <p>
          Quizás la mayor diferencia estratégica radica en el dinero. Mercado Pago dejó de ser una simple pasarela para convertirse en un banco digital completo. Esta herramienta permitió <strong>bancarizar a millones de usuarios</strong> que operaban en efectivo, ofreciendo rendimientos diarios, créditos a vendedores y pagos con código QR. Amazon, limitado a alianzas con bancos tradicionales, no tiene una herramienta propia con tal penetración social.
        </p>

        <div class="stats-row">
          <div class="stat-card">
            <span class="number">75%</span>
            <span class="label">Paquetes entregados en &lt;48h por Mercado Envíos</span>
          </div>
          <div class="stat-card">
            <span class="number">AWS</span>
            <span class="label">El motor tecnológico que da ventaja de datos a Amazon</span>
          </div>
        </div>

        <h2 class="section-title">Choque Cultural: Silicon Valley vs. Buenos Aires</h2>
        <div class="culture-section">
          <p>
            Las diferencias no son solo operativas, sino humanas. Amazon llegó a la región con una cultura corporativa estadounidense: comunicación directa, racional, basada en métricas duras ("Hard Data") y plazos inflexibles.
          </p>
          <p>
            Mercado Libre, nacida en Argentina, opera con un estilo más relacional. Entiende que en Latinoamérica, la gestión de conflictos requiere <strong>diplomacia y empatía</strong>. Su liderazgo fomenta un ambiente más horizontal y flexible, lo que ha facilitado la retención de talento local y la negociación con sindicatos y gobiernos, áreas donde Amazon ha enfrentado más fricción.
          </p>
        </div>

      </article>

      <footer class="news-footer">
        <a routerLink="/inicio" class="btn-back">← Volver al Inicio</a>
      </footer>
    </main>
  `,
  styles: [`
    .news-container { max-width: 900px; margin: 0 auto; background: #fffde7; min-height: 100vh; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    
    .hero-header { position: relative; height: 450px; display: flex; align-items: flex-end; background: #2d3436; }
    .hero-image img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
    .hero-content { position: relative; z-index: 2; padding: 3rem; width: 100%; color: white; }
    .badge { background: #ff9800; color: black; padding: 0.4rem 1rem; font-weight: bold; border-radius: 4px; text-transform: uppercase; }
    h1 { font-size: 2.5rem; margin: 1rem 0; font-weight: 800; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }

    .content-body { padding: 4rem; background: white; margin-top: -30px; position: relative; z-index: 3; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
    .lead-text { font-size: 1.3rem; color: #333; line-height: 1.6; margin-bottom: 3rem; text-align: justify; }
    .section-title { font-size: 1.8rem; color: #2d3436; margin: 3rem 0 1.5rem; border-bottom: 3px solid #ffcc00; display: inline-block; padding-bottom: 0.5rem; }

    .comparison-container { display: flex; gap: 2rem; margin-bottom: 3rem; }
    .strategy-col { flex: 1; background: #f9f9f9; padding: 2rem; border-radius: 12px; border-top: 5px solid #ccc; }
    .amazon-col { border-top-color: #232f3e; }
    .meli-col { border-top-color: #ffe600; }
    
    .col-header h3 { margin: 0; font-size: 1.5rem; }
    .col-header span { font-size: 0.9rem; color: #666; text-transform: uppercase; letter-spacing: 1px; }
    
    .strategy-col ul { padding-left: 1.2rem; margin-top: 1.5rem; }
    .strategy-col li { margin-bottom: 0.8rem; color: #555; }

    .stats-row { display: flex; gap: 2rem; margin: 3rem 0; }
    .stat-card { flex: 1; background: #2d3436; color: white; padding: 2rem; border-radius: 12px; text-align: center; }
    .number { display: block; font-size: 3rem; font-weight: bold; color: #ffcc00; margin-bottom: 0.5rem; }
    .label { font-size: 1rem; opacity: 0.9; }

    .culture-section { background: #fff8e1; padding: 2.5rem; border-radius: 12px; border-left: 5px solid #ffb300; }
    .culture-section p { font-size: 1.1rem; line-height: 1.8; color: #5d4037; margin-bottom: 1.5rem; }
    .culture-section p:last-child { margin-bottom: 0; }

    .news-footer { padding: 3rem; text-align: center; background: #fffde7; }
    .btn-back { padding: 1rem 3rem; background: #2d3436; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; transition: background 0.2s; }
    .btn-back:hover { background: #000; }

    @media (max-width: 768px) {
      .comparison-container { flex-direction: column; }
      .stats-row { flex-direction: column; }
      .hero-header { height: 350px; }
    }
  `]
})
export class Noticia2Component {}