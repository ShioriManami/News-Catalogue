import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-noticia1',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent],
  template: `
    <app-nav-bar />
    
    <main class="news-container">
      <header class="hero-header">
        <div class="hero-content">
          <span class="badge">Industria Automotriz</span>
          <h1>El auge de los autos eléctricos chinos en México: BYD, MG y JAC</h1>
          <div class="meta-data">
            <span>📅 02 Dic 2024</span> • <span>⏱️ 12 min lectura</span> • <span>✍️ Análisis de Mercado</span>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop" alt="BYD Car">
        </div>
      </header>

      <article class="content-body">
        <p class="lead-text">
          La industria automotriz en México atraviesa una transformación histórica. Marcas como BYD, MG y JAC no solo han incrementado su presencia, sino que están redefiniendo el concepto de movilidad con una combinación agresiva de innovación tecnológica, precios competitivos y una oferta diversificada de vehículos cero emisiones.
        </p>

        <div class="highlight-box">
          <h3>🚗 Panorama del Mercado</h3>
          <p>La oferta china ha logrado democratizar el acceso a la tecnología eléctrica. Mientras los fabricantes tradicionales europeos y estadounidenses mantienen precios elevados, las marcas asiáticas han encontrado el equilibrio entre autonomía, equipamiento y costo.</p>
        </div>

        <h2 class="section-title">Análisis Detallado por Marca</h2>
        
        <div class="detail-section">
          <h3>BYD (Build Your Dreams)</h3>
          <p>
            BYD se posiciona con una estrategia dual. Por un lado, ataca el segmento de <strong>flotas corporativas</strong> con el <em>Yuan Plus (Atto 3)</em>, un SUV compacto que ofrece aproximadamente 480 km de autonomía por un precio cercano a los $799,000 MXN. Este modelo es clave para empresas que buscan optimizar su Costo Total de Propiedad (TCO).
          </p>
          <p>
            Por otro lado, para la penetración masiva en ciudades densas, el modelo <em>Dolphin</em> (Hatchback urbano) se presenta como la opción de entrada, con precios desde los $398,000 MXN, ideal para usuarios que buscan su primer eléctrico.
          </p>
        </div>

        <div class="detail-section">
          <h3>MG y JAC: Estrategias Opuestas</h3>
          <p>
            <strong>MG (SAIC Motor)</strong> apuesta por el volumen en retail. Su modelo <em>MG4 Electric</em> ha demostrado una alta elasticidad de demanda gracias a su diseño y rango de precios ($474,900–$589,900 MXN). 
          </p>
          <p>
            <strong>JAC</strong>, en cambio, juega la carta de la localización. Al ensamblar modelos como el <em>E10X</em> en Hidalgo, la marca logra mitigar el impacto de los aranceles y dominar el segmento de "última milla" urbana con el eléctrico más accesible del mercado.
          </p>
        </div>

        <h2 class="section-title">El Reto Regulatorio y Arancelario</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🚫 Sin Tratado Libre Comercio</h4>
            <p>A diferencia de los vehículos producidos en Norteamérica (T-MEC) que entran sin arancel, los autos chinos deben pagar un arancel general del <strong>15% al 20%</strong>, además del IVA del 16%.</p>
          </div>
          <div class="info-item">
            <h4>📜 Normativa NOM-194</h4>
            <p>La seguridad es innegociable. Todos los modelos importados deben cumplir estrictamente con la NOM-194-SE-2021, que exige dispositivos mínimos de seguridad como bolsas de aire, frenos ABS y control de estabilidad.</p>
          </div>
        </div>

        <h2 class="section-title">Factor Cultural: Negociando con China</h2>
        <p>
          El éxito de la importación no es solo logístico, sino cultural. Las empresas chinas operan bajo el concepto de <strong>"Guanxi"</strong>, que prioriza las relaciones de confianza a largo plazo sobre las transacciones inmediatas.
        </p>
        <ul class="custom-list">
          <li><strong>Jerarquía:</strong> La toma de decisiones suele ser colectiva y respetar estrictas líneas de mando.</li>
          <li><strong>Flexibilidad Contractual:</strong> A diferencia de Occidente, donde el contrato es ley, en China se percibe como un marco de cooperación que puede ajustarse si el contexto cambia.</li>
          <li><strong>Paciencia:</strong> Las negociaciones pueden ser lentas; la prisa puede interpretarse como falta de seriedad.</li>
        </ul>

      </article>

      <footer class="news-footer">
        <a routerLink="/inicio" class="btn-back">← Volver al Inicio</a>
      </footer>
    </main>
  `,
  styles: [`
    .news-container { max-width: 900px; margin: 0 auto; background: #f8f9fa; min-height: 100vh; font-family: 'Segoe UI', sans-serif; }
    
    .hero-header { position: relative; height: 450px; overflow: hidden; display: flex; align-items: flex-end; }
    .hero-image img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; filter: brightness(0.7); }
    .hero-content { position: relative; z-index: 2; padding: 3rem; width: 100%; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); color: white; }
    .badge { background: #007bff; padding: 0.4rem 1rem; border-radius: 4px; font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }
    h1 { font-size: 2.8rem; margin: 1rem 0; line-height: 1.1; font-weight: 700; }
    .meta-data { opacity: 0.9; font-size: 0.95rem; display: flex; gap: 1rem; }

    .content-body { padding: 4rem; background: white; margin-top: -20px; position: relative; z-index: 3; border-radius: 20px 20px 0 0; box-shadow: 0 -10px 30px rgba(0,0,0,0.05); }
    .lead-text { font-size: 1.35rem; color: #2c3e50; line-height: 1.6; margin-bottom: 3rem; font-weight: 300; }
    
    .section-title { font-size: 1.8rem; color: #1a252f; margin: 3rem 0 1.5rem; border-left: 5px solid #007bff; padding-left: 1rem; }
    
    .highlight-box { background: #e3f2fd; padding: 2rem; border-radius: 12px; border-left: 5px solid #2196f3; margin-bottom: 3rem; }
    .highlight-box h3 { margin-top: 0; color: #0d47a1; }
    
    .detail-section { margin-bottom: 2.5rem; }
    .detail-section h3 { font-size: 1.4rem; color: #34495e; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem; }
    .detail-section p { font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 1rem; }

    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0; }
    .info-item { background: #f8f9fa; padding: 2rem; border-radius: 12px; border: 1px solid #eee; }
    .info-item h4 { color: #e74c3c; margin-top: 0; font-size: 1.2rem; }
    
    .custom-list { padding-left: 0; list-style: none; }
    .custom-list li { position: relative; padding-left: 2rem; margin-bottom: 1rem; line-height: 1.6; font-size: 1.1rem; color: #444; }
    .custom-list li::before { content: '✔'; position: absolute; left: 0; color: #27ae60; font-weight: bold; }

    .news-footer { padding: 3rem; text-align: center; background: white; border-top: 1px solid #eee; }
    .btn-back { display: inline-block; padding: 1rem 3rem; background: #2c3e50; color: white; text-decoration: none; border-radius: 50px; font-weight: 600; transition: all 0.3s; }
    .btn-back:hover { background: #34495e; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }

    @media (max-width: 768px) {
      .hero-header { height: 350px; }
      h1 { font-size: 2rem; }
      .content-body { padding: 2rem; }
      .info-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AutosChinosComponent {}