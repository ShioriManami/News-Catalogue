import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar';
import { NewsService } from '../../Services/news';
import { News } from '../../models/news/news-module';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent],
  template: `
    <app-nav-bar />
    
    <main class="detail-container">
      @if (loading()) {
        <div class="loading">
          <div class="spinner"></div>
          <p>Cargando novedad...</p> <!-- Cambiado -->
        </div>
      } @else if (news()) {
        <article class="news-article">
          <header class="article-header">
            <nav class="breadcrumb">
              <a routerLink="/inicio">Inicio</a> /
              <a routerLink="/noticias">Novedades</a> / <!-- Cambiado -->
              <span>{{ news()!.title }}</span>
            </nav>
            
            <div class="article-meta">
              <span class="category">{{ news()!.category }}</span>
              <span>📅 {{ news()!.date | date:'fullDate' }}</span>
              <span>✍️ {{ news()!.author }}</span>
              <span>⏱️ {{ news()!.readTime }} min lectura</span>
            </div>
            
            <h1 class="article-title">{{ news()!.title }}</h1>
            <p class="article-excerpt">{{ news()!.summary }}</p>
            
            <div class="article-image">
              <img 
                [src]="news()!.imageUrl" 
                [alt]="news()!.title" 
                loading="lazy"
              />
            </div>
          </header>
          
          <div class="article-content">
            @defer (on viewport) {
              <div class="content-wrapper">
                <p>{{ news()!.content }}</p>
                
                @if (news()!.tags.length > 0) {
                  <div class="article-tags">
                    <strong>Etiquetas:</strong>
                    @for (tag of news()!.tags; track tag) {
                      <span class="tag">{{ tag }}</span>
                    }
                  </div>
                }
                
                <div class="related-news">
                  <h3>🚗 Novedades Relacionadas</h3> <!-- Cambiado -->
                  @if (relatedNews().length > 0) {
                    <div class="related-grid">
                      @for (related of relatedNews(); track related.id) {
                        <div 
                          class="related-card" 
                          [routerLink]="['/noticias', related.id]"
                        >
                          <h4>{{ related.title }}</h4>
                          <p>{{ related.summary }}</p>
                        </div>
                      }
                    </div>
                  } @else {
                    <p>No hay novedades relacionadas</p> <!-- Cambiado -->
                  }
                </div>
              </div>
            } @placeholder {
              <div class="content-placeholder">
                <div class="placeholder-line"></div>
                <div class="placeholder-line"></div>
                <div class="placeholder-line"></div>
                <div class="placeholder-line" style="width: 50%;"></div>
              </div>
            } @loading {
              <div class="content-loading">
                <p>Cargando contenido...</p>
              </div>
            }
          </div>
          
          <footer class="article-footer">
            <a routerLink="/noticias" class="back-button">
              ← Volver a Novedades <!-- Cambiado -->
            </a>
            
            <div class="share-buttons">
              <button class="share-btn" (click)="shareNews()">
                📤 Compartir
              </button>
              <button class="print-btn" (click)="printArticle()">
                🖨️ Imprimir
              </button>
            </div>
          </footer>
        </article>
      } @else {
        <div class="not-found">
          <h2>Novedad no encontrada</h2> <!-- Cambiado -->
          <p>La novedad que buscas no existe o ha sido eliminada.</p> <!-- Cambiado -->
          <a routerLink="/noticias" class="cta-button">
            Ver todas las novedades <!-- Cambiado -->
          </a>
        </div>
      }
    </main>
  `,
  styles: [`
    .detail-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .loading {
      text-align: center;
      padding: 4rem;
      
      .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #f0f0f0;
        border-top: 4px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    }
    
    .news-article {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .article-header {
      padding: 2rem;
      background: linear-gradient(135deg, #f5f7ff 0%, #f0f4ff 100%);
    }
    
    .breadcrumb {
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: #666;
      
      a {
        color: #667eea;
        text-decoration: none;
        margin: 0 0.25rem;
        
        &:hover {
          text-decoration: underline;
        }
      }
      
      span {
        color: #888;
        margin-left: 0.25rem;
      }
    }
    
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      color: #666;
      
      .category {
        background: #667eea;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: bold;
      }
    }
    
    .article-title {
      font-size: 2.5rem;
      color: #333;
      margin: 0 0 1rem 0;
      line-height: 1.2;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    .article-excerpt {
      font-size: 1.125rem;
      color: #666;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .article-image {
      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      }
    }
    
    .article-content {
      padding: 2rem;
    }
    
    .content-wrapper {
      p {
        font-size: 1.125rem;
        line-height: 1.8;
        color: #444;
        margin-bottom: 2rem;
      }
    }
    
    .article-tags {
      margin: 2rem 0;
      padding-top: 2rem;
      border-top: 1px solid #eee;
      
      strong {
        display: block;
        margin-bottom: 1rem;
        color: #333;
      }
    }
    
    .tag {
      display: inline-block;
      background: #f0f4ff;
      color: #667eea;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      margin: 0.25rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .related-news {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
      
      h3 {
        color: #333;
        margin-bottom: 1.5rem;
      }
    }
    
    .related-grid {
      display: grid;
      gap: 1rem;
    }
    
    .related-card {
      padding: 1rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #667eea;
        background: #f8faff;
        
        h4 {
          color: #667eea;
        }
      }
      
      h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        color: #333;
        transition: color 0.3s ease;
      }
      
      p {
        font-size: 0.875rem;
        color: #666;
        margin: 0;
      }
    }
    
    .content-placeholder {
      padding: 2rem;
      
      .placeholder-line {
        height: 1rem;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        border-radius: 4px;
        margin-bottom: 1rem;
        
        &:nth-child(1) { width: 100%; }
        &:nth-child(2) { width: 90%; }
        &:nth-child(3) { width: 95%; }
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    }
    
    .content-loading {
      text-align: center;
      padding: 2rem;
      color: #666;
    }
    
    .article-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      border-top: 1px solid #eee;
      background: #f8f9fa;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }
    }
    
    .back-button {
      padding: 0.75rem 1.5rem;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      transition: all 0.3s ease;
      
      &:hover {
        background: #5a67d8;
        transform: translateX(-4px);
      }
    }
    
    .share-buttons {
      display: flex;
      gap: 1rem;
      
      @media (max-width: 768px) {
        justify-content: center;
      }
    }
    
    .share-btn, .print-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid #667eea;
      background: white;
      color: #667eea;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #667eea;
        color: white;
      }
    }
    
    .not-found {
      text-align: center;
      padding: 4rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      
      h2 {
        color: #333;
        margin-bottom: 1rem;
      }
      
      p {
        color: #666;
        margin-bottom: 2rem;
      }
    }
    
    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
      }
    }
  `]
})
export class NewsDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);
  
  // Signals
  news = signal<News | null>(null);
  loading = signal(true);
  relatedNews = signal<News[]>([]);
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadNews(id);
    });
  }
  
  loadNews(id: number) {
    this.loading.set(true);
    
    // Simular carga asíncrona
    setTimeout(() => {
      const news = this.newsService.getNewsById(id);
      this.news.set(news || null);
      
      if (news) {
        // Obtener noticias relacionadas (misma categoría, excluyendo actual)
        const related = this.newsService.allNews()
          .filter(n => n.category === news.category && n.id !== news.id)
          .slice(0, 3);
        this.relatedNews.set(related);
      }
      
      this.loading.set(false);
    }, 300);
  }
  
  shareNews() {
    if (this.news()) {
      const url = window.location.href;
      const text = `Mira esta noticia: ${this.news()!.title}`;
      
      if (navigator.share) {
        navigator.share({
          title: this.news()!.title,
          text: this.news()!.summary,
          url: url
        });
      } else {
        // Fallback para navegadores sin Web Share API
        navigator.clipboard.writeText(url);
        alert('Enlace copiado al portapapeles!');
      }
    }
  }
  
  printArticle() {
    window.print();
  }
}