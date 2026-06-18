import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a routerLink="/inicio" class="logo">
          <span class="logo-icon">🌐</span>
          <span class="logo-text">Global<span class="highlight">News</span></span>
        </a>
        
        <button class="mobile-menu-btn" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen()">
          <span class="hamburger-box">
            <span class="hamburger-inner" [class.open]="isMenuOpen()"></span>
          </span>
        </button>
        
        <div class="nav-links" [class.active]="isMenuOpen()">
          <a
            routerLink="/inicio"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMenu()">
            🏠 Inicio
          </a>

          <a
            routerLink="/noticias"
            routerLinkActive="active"
            (click)="closeMenu()">
            📰 Catálogo
          </a>

          <a
            routerLink="/Noticia1"
            routerLinkActive="active"
            (click)="closeMenu()">
            🚙 Autos & EVs
          </a>
          
          <a 
            routerLink="/Noticia2" 
            routerLinkActive="active"
            (click)="closeMenu()">
            📦 E-commerce
          </a>
          
          <a 
            routerLink="/Noticia3" 
            routerLinkActive="active"
            (click)="closeMenu()">
            ⚖️ Historia & Leyes
          </a>
          
          <a 
            routerLink="/contactanos" 
            class="contact-btn"
            (click)="closeMenu()">
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      --primary-color: #2563eb; /* Azul moderno */
      --text-color: #f8fafc;
      --nav-bg: rgba(15, 23, 42, 0.85); /* Slate oscuro transparente */
      --active-color: #38bdf8; /* Azul cielo brillante */
    }

    .navbar {
      background: var(--nav-bg);
      backdrop-filter: blur(12px); /* Efecto vidrio */
      -webkit-backdrop-filter: blur(12px);
      padding: 0.8rem 2rem;
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* --- Logo Styling --- */
    .logo {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color);
      letter-spacing: -0.5px;
    }

    .logo-icon {
      font-size: 1.8rem;
    }

    .highlight {
      color: var(--primary-color);
    }

    /* --- Desktop Links --- */
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    @media (min-width: 769px) {
      .nav-links a:not(.contact-btn) {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
        padding: 0.5rem 0;
        position: relative;
        transition: color 0.3s ease;
      }

      .nav-links a:not(.contact-btn)::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--active-color);
        transition: width 0.3s ease;
      }

      .nav-links a:not(.contact-btn):hover {
        color: white;
      }

      .nav-links a:not(.contact-btn):hover::after {
        width: 100%;
      }

      .nav-links a.active {
        color: white;
      }

      .nav-links a.active::after {
        width: 100%;
        box-shadow: 0 0 10px var(--active-color);
      }
    }

    /* --- Contact Button Style --- */
    .contact-btn {
      background: var(--primary-color);
      color: white;
      text-decoration: none;
      padding: 0.6rem 1.2rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: transform 0.2s, background 0.2s;
      box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
    }

    .contact-btn:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    /* --- Mobile Menu Styles --- */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: block;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #0f172a; /* Solid dark color for mobile menu */
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        transform: translateY(-150%);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
      }

      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      .nav-links a {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        width: 100%;
        text-align: center;
        padding: 0.5rem;
        border-radius: 8px;
      }

      .nav-links a.active {
        background: rgba(255,255,255,0.1);
        color: var(--active-color);
      }

      .contact-btn {
        width: 100%;
        margin-top: 1rem;
      }
    }

    /* --- Hamburger Icon Animation --- */
    .hamburger-box {
      width: 24px;
      height: 24px;
      display: inline-block;
      position: relative;
    }

    .hamburger-inner {
      display: block;
      top: 50%;
      margin-top: -2px;
    }

    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      width: 24px;
      height: 2px;
      background-color: white;
      border-radius: 4px;
      position: absolute;
      transition: transform 0.15s ease;
    }

    .hamburger-inner::before, .hamburger-inner::after {
      content: "";
      display: block;
    }

    .hamburger-inner::before { top: -8px; }
    .hamburger-inner::after { bottom: -8px; }

    .hamburger-inner.open {
      transform: rotate(45deg);
    }
    .hamburger-inner.open::before {
      top: 0;
      opacity: 0;
    }
    .hamburger-inner.open::after {
      bottom: 0;
      transform: rotate(-90deg);
    }
  `]
})
export class NavBarComponent {
  isMenuOpen = signal(false);
  isScrolled = false; // Podrías usar esto para cambiar estilo al bajar

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
  
  closeMenu() {
    this.isMenuOpen.set(false);
  }
}