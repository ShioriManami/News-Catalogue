import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar';
import { ContactForm } from '../../models/news/news-module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  template: `
    <app-nav-bar />
    
        <main class="contact-container">
      <div class="contact-wrapper">
        <section class="contact-info">
          <h1>📞 Contáctanos</h1>
          <p class="subtitle">
            ¿Tienes preguntas sobre modelos, quieres probar un vehículo 
            o necesitas información especializada? Estamos aquí para ayudarte.
          </p> <!-- Cambiado -->
          
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h3>Oficina Central</h3> <!-- Cambiado -->
              <p>Avenida del Automóvil 456</p> <!-- Cambiado -->
              <p>Madrid, 28080</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">📧</div>
              <h3>Email</h3>
              <p>info@autonews.com</p> <!-- Cambiado -->
              <p>prensa@autonews.com</p> <!-- Cambiado -->
            </div>
            
            <div class="info-card">
              <div class="info-icon">📱</div>
              <h3>Teléfono</h3>
              <p>+34 900 555 123</p>
              <p>Lun-Vie: 9:00-18:00</p>
            </div>
          </div>
          
          <div class="social-links">
            <h3>Síguenos en redes sociales</h3>
            <div class="social-icons">
              <a href="#" class="social-icon twitter">𝕏</a>
              <a href="#" class="social-icon facebook">f</a>
              <a href="#" class="social-icon youtube">▶️</a>
              <a href="#" class="social-icon instagram">📸</a>
            </div>
          </div>
        </section>
        
        <section class="contact-form-section">
          <div class="form-card">
            <h2>Envíanos un mensaje</h2>
            
          </div>
        </section>
      </div>
    </main>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
      
      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .contact-info {
      h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 1rem;
      }
      
      .subtitle {
        font-size: 1.125rem;
        color: #666;
        line-height: 1.6;
        margin-bottom: 3rem;
      }
    }
    
    .info-cards {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    
    .info-card {
      padding: 1.5rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0,0,0,0.1);
      }
      
      .info-icon {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      h3 {
        color: #333;
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
      }
      
      p {
        color: #666;
        margin: 0.25rem 0;
        font-size: 0.875rem;
      }
    }
    
    .social-links {
      h3 {
        color: #333;
        margin-bottom: 1rem;
      }
    }
    
    .social-icons {
      display: flex;
      gap: 1rem;
    }
    
    .social-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
      }
      
      &.twitter { background: #1da1f2; }
      &.facebook { background: #1877f2; }
      &.linkedin { background: #0077b5; }
      &.instagram { 
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
      }
    }
    
    .form-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      
      h2 {
        color: #333;
        margin-bottom: 2rem;
        font-size: 1.75rem;
      }
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        color: #333;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
      
      input, textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        
        &:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        &.invalid {
          border-color: #ef4444;
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }
    
    .error-message {
      display: block;
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    
    .submit-btn {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      
      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    
    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .success-message {
      text-align: center;
      padding: 2rem;
      
      .success-icon {
        width: 60px;
        height: 60px;
        background: #10b981;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 0 auto 1rem;
      }
      
      h3 {
        color: #333;
        margin-bottom: 0.5rem;
      }
      
      p {
        color: #666;
        margin-bottom: 2rem;
      }
    }
    
    .reset-btn {
      padding: 0.75rem 2rem;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #5a67d8;
        transform: translateY(-2px);
      }
    }
  `]
})
export class ContactComponent {
  // Signals
  formData = signal<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  isSubmitted = signal(false);
  isLoading = signal(false);
  
  onSubmit() {
    if (this.formData().name && this.formData().email && 
        this.formData().subject && this.formData().message) {
      
      this.isLoading.set(true);
      
      // Simular envío asíncrono
      setTimeout(() => {
        console.log('Formulario enviado:', this.formData());
        this.isSubmitted.set(true);
        this.isLoading.set(false);
      }, 1500);
    }
  }
}