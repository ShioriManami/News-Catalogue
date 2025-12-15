import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Agregar esta importación
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar';
import { NewsService } from '../../Services/news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, // ✅ Agregar FormsModule aquí
    RouterLink, 
    NavBarComponent
  ],
  template: `
    <app-nav-bar />
    
    <main class="news-container">
      <header class="news-header">
        <h1>Todas las Novedades Automovilísticas</h1> <!-- Cambiado -->
        <p>Mantente actualizado con los últimos lanzamientos y tecnologías del sector</p> <!-- Cambiado -->
        
        <div class="filter-controls">
          <div class="search-box">
            <input 
              type="text" 
              placeholder="Buscar modelos, marcas o tecnologías..."
              [(ngModel)]="searchTermValue"
              (ngModelChange)="onSearchChange($event)"
            /> <!-- Cambiado -->
            <span>🔍</span>
          </div>
          
          <div class="category-filters">
            <button 
              class="category-btn" 
              [class.active]="selectedCategory() === 'all'"
              (click)="selectCategory('all')">
              Todas
            </button>
            @for (category of uniqueCategories(); track category) {
              <button 
                class="category-btn" 
                [class.active]="selectedCategory() === category"
                (click)="selectCategory(category)">
                {{ category }}
              </button>
            }
          </div>
        </div>
      </header>
      
      <section class="news-list">
        @if (filteredNews().length > 0) {
          <div class="news-grid">
            @for (news of filteredNews(); track news.id) {
              <article class="news-card" [routerLink]="['/noticias', news.id]">
                <div class="news-image">
                  <img [src]="news.imageUrl" [alt]="news.title" loading="lazy" />
                  <span class="category-badge">{{ news.category }}</span>
                </div>
                <div class="news-content">
                  <h3>{{ news.title }}</h3>
                  <p>{{ news.summary }}</p>
                  
                  <div class="tags">
                    @for (tag of news.tags; track tag) {
                      <span class="tag">{{ tag }}</span>
                    }
                  </div>
                  
                  <div class="news-footer">
                    <div class="author-info">
                      <span>✍️ {{ news.author }}</span>
                      <span>📅 {{ news.date | date:'mediumDate' }}</span>
                    </div>
                    <div class="read-more">
                      <span>⏱️ {{ news.readTime }} min</span>
                      <span class="read-link">Ver detalles →</span> <!-- Cambiado -->
                    </div>
                  </div>
                </div>
              </article>
            }
          </div>
        } @else {
          <div class="empty-state">
            <h3>No se encontraron novedades</h3> <!-- Cambiado -->
            <p>Intenta con otros términos de búsqueda o categorías</p>
          </div>
        }
      </section>
    </main>
  `,
  styles: [`
    .news-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .news-header {
      margin-bottom: 3rem;
      text-align: center;
      
      h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 0.5rem;
      }
      
      p {
        color: #666;
        font-size: 1.125rem;
        margin-bottom: 2rem;
      }
    }
    
    .filter-controls {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .search-box {
      position: relative;
      margin-bottom: 2rem;
      
      input {
        width: 100%;
        padding: 1rem 1rem 1rem 3rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        
        &:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
      }
      
      span {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #888;
      }
    }
    
    .category-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
    
    .category-btn {
      padding: 0.5rem 1.5rem;
      border: 2px solid #e0e0e0;
      background: white;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #667eea;
        color: #667eea;
      }
      
      &.active {
        background: #667eea;
        color: white;
        border-color: #667eea;
      }
    }
    
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .news-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 24px rgba(0,0,0,0.15);
        
        .read-link {
          color: #667eea;
        }
      }
    }
    
    .news-image {
      position: relative;
      height: 200px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      .news-card:hover & img {
        transform: scale(1.05);
      }
    }
    
    .category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: rgba(102, 126, 234, 0.9);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: bold;
    }
    
    .news-content {
      padding: 1.5rem;
      
      h3 {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
        color: #333;
        line-height: 1.4;
      }
      
      p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .tag {
      background: #f0f4ff;
      color: #667eea;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .news-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      color: #888;
      border-top: 1px solid #f0f0f0;
      padding-top: 1rem;
    }
    
    .author-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    
    .read-more {
      text-align: right;
      
      .read-link {
        display: block;
        margin-top: 0.25rem;
        font-weight: bold;
        transition: color 0.3s ease;
      }
    }
    
    .empty-state {
      text-align: center;
      padding: 4rem;
      background: #f8f9fa;
      border-radius: 12px;
      
      h3 {
        color: #333;
        margin-bottom: 1rem;
      }
      
      p {
        color: #666;
      }
    }
  `]
})
export class NewsComponent {
  private newsService = inject(NewsService);
  
  // Signals
  searchTerm = signal('');
  selectedCategory = signal('all');
  
  // Propiedad para ngModel (two-way binding)
  searchTermValue: string = '';
  
  // Computed properties
  allNews = this.newsService.allNews;
  uniqueCategories = computed(() => 
    [...new Set(this.allNews().map(n => n.category))]
  );
  
  filteredNews = computed(() => {
    let filtered = this.allNews();
    
    // Filtrar por categoría
    if (this.selectedCategory() !== 'all') {
      filtered = filtered.filter(news => 
        news.category === this.selectedCategory()
      );
    }
    
    // Filtrar por término de búsqueda
    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(term) ||
        news.summary.toLowerCase().includes(term) ||
        news.content.toLowerCase().includes(term) ||
        news.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    return filtered;
  });
  
  onSearchChange(value: string) {
    this.searchTerm.set(value);
  }
  
  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
}