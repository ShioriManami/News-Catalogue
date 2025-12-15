import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent],
  template: `
    <app-nav-bar />
    
    <main class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Análisis Global de Negocios</h1>
          <p class="hero-subtitle">
            Tu fuente confiable de análisis a fondo sobre la industria automotriz, 
            estrategias de e-commerce y conflictos comerciales históricos.
          </p>
          <a routerLink="/Noticia1" class="cta-button">
            Leer Reportaje Principal →
          </a>
        </div>
        <div class="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop" 
            alt="Autos Eléctricos"
            loading="lazy"
          />
        </div>
      </section>
      
      <section class="featured-news">
        <h2>🔥 Reportajes Destacados</h2>
        
        <div class="news-grid">
          <article class="news-card" *ngFor="let news of featuredNews" [routerLink]="news.route">
            <div class="news-image">
              <img [src]="news.imageUrl" [alt]="news.title" loading="lazy" />
              <span class="news-badge" [ngClass]="news.badgeClass">{{ news.category }}</span>
            </div>
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.summary }}</p>
              <div class="news-tags">
                <span *ngFor="let tag of news.tags"># {{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>
      
      <section class="stats">
        <div class="stat-card">
          <h3>📰</h3>
          <p class="stat-number">{{ featuredNews.length }}</p>
          <p class="stat-label">Reportajes a Fondo</p>
        </div>
        <div class="stat-card">
          <h3>🌍</h3>
          <p class="stat-number">{{ categories.length }}</p>
          <p class="stat-label">Sectores Globales</p>
        </div>
        <div class="stat-card">
          <h3>🧠</h3>
          <p class="stat-number">{{ authors.length }}</p>
          <p class="stat-label">Analistas Expertos</p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Segoe UI', sans-serif;
    }
    
    /* Hero Styles */
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 5rem;
      padding: 3rem 0;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
    }
    
    .hero-content h1 {
      font-size: 3.5rem;
      color: #1a202c;
      margin-bottom: 1rem;
      line-height: 1.1;
      font-weight: 800;
      
      @media (max-width: 768px) { font-size: 2.5rem; }
    }
    
    .hero-content p {
      font-size: 1.25rem;
      color: #4a5568;
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }
    
    .cta-button {
      display: inline-block;
      background: #2d3748;
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
      box-shadow: 0 4px 14px 0 rgba(0,0,0,0.39);
      
      &:hover {
        transform: translateY(-2px);
        background: #000;
        box-shadow: 0 6px 20px rgba(0,0,0,0.23);
      }
    }
    
    .hero-image img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transform: perspective(1000px) rotateY(-5deg);
      transition: transform 0.5s ease;
      
      &:hover {
        transform: perspective(1000px) rotateY(0deg);
      }
    }
    
    /* Featured News Styles */
    .featured-news { margin-bottom: 5rem; }
    
    .featured-news h2 {
      font-size: 2.2rem;
      margin-bottom: 3rem;
      color: #2d3748;
      text-align: center;
      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
      
      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: #4299e1;
        margin: 0.5rem auto 0;
        border-radius: 2px;
      }
    }
    
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }
    
    .news-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      border: 1px solid #e2e8f0;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    }
    
    .news-image {
      position: relative;
      height: 220px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      .news-card:hover & img { transform: scale(1.1); }
    }
    
    .news-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: white;
      padding: 0.35rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    /* Badge colors based on topic */
    .badge-auto { background: #007bff; }
    .badge-ecommerce { background: #f59e0b; }
    .badge-history { background: #48bb78; }
    
    .news-content {
      padding: 2rem;
      
      h3 {
        margin: 0 0 1rem 0;
        font-size: 1.4rem;
        color: #2d3748;
        line-height: 1.3;
      }
      
      p {
        color: #718096;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        font-size: 1rem;
      }
    }
    
    .news-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid #edf2f7;
      
      span {
        font-size: 0.85rem;
        color: #718096;
        background: #f7fafc;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-weight: 500;
      }
    }
    
    /* Stats Styles */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .stat-card {
      text-align: center;
      padding: 2.5rem;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      transition: transform 0.3s ease;
      
      &:hover { transform: translateY(-5px); border-color: #cbd5e0; }
      
      h3 { font-size: 3rem; margin-bottom: 0.5rem; }
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: #2d3748;
      margin: 0.5rem 0;
    }
    
    .stat-label {
      color: #718096;
      font-size: 0.95rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `]
})
export class HomeComponent {
  // Datos actualizados a los temas de tus noticias
  featuredNews = [
    {
      id: 1,
      title: 'Autos Eléctricos Chinos',
      summary: 'BYD, MG y JAC redefinen el mercado con precios competitivos y enfrentan el reto de los aranceles[cite: 1, 4, 33].',
      imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop', // Azul/Auto
      category: 'Automotriz',
      badgeClass: 'badge-auto',
      route: '/Noticia1',
      tags: ['Electromovilidad', 'Aranceles', 'Guanxi']
    },
    {
      id: 2,
      title: 'Amazon vs. Mercado Libre',
      summary: 'Choque de titanes: La eficiencia global de Amazon contra la adaptación local y Fintech de Mercado Libre[cite: 170].',
      imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop', // Warehouse
      category: 'E-commerce',
      badgeClass: 'badge-ecommerce',
      route: '/Noticia2',
      tags: ['Logística', 'Fintech', 'Estrategia']
    },
    {
      id: 3,
      title: 'Guerra del Banano',
      summary: 'La disputa histórica en la OMC entre Ecuador y la Unión Europea por el comercio del banano[cite: 324].',
      imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop', // Agricultura
      category: 'Historia',
      badgeClass: 'badge-history',
      route: '/Noticia3',
      tags: ['OMC', 'Comercio', 'Sostenibilidad']
    }
  ];

  // Obtener categorías únicas
  get categories(): string[] {
    return [...new Set(this.featuredNews.map(news => news.category))];
  }

  // Analistas basados en los componentes anteriores
  authors = ['Análisis de Mercado', 'Tech Insights', 'Archivo Histórico'];
}