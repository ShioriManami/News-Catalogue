import { Injectable, signal, computed } from '@angular/core';
import { News } from '../models/news/news-module';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // Usando Signals para estado reactivo
  private newsSignal = signal<News[]>([
    // --- TEMA 1: AUTOS ELÉCTRICOS ---
    {
      id: 1,
      title: 'Top Modelos EV Chinos en México: BYD, MG y JAC',
      summary: 'Análisis de la oferta actual: del BYD Dolphin urbano al MG4 para volumen masivo',
      content: 'Las marcas chinas están redefiniendo el mercado mexicano con una combinación de innovación y precio. BYD apuesta por el Yuan Plus para flotas corporativas y el Dolphin para la penetración urbana. MG impulsa el MG4 Electric con alta elasticidad de demanda, mientras que JAC domina la última milla con el E10X, el eléctrico más accesible ensamblado en Hidalgo.',
      imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop', // Auto eléctrico
      category: 'Automotriz',
      author: 'Carlos Méndez',
      date: new Date('2024-12-02'),
      readTime: 6,
      tags: ['BYD', 'MG', 'Electromovilidad']
    },
    {
      id: 2,
      title: 'Aranceles y Normatividad: El reto de importar EVs',
      summary: 'Impacto del 20% de arancel a vehículos chinos sin tratado comercial',
      content: 'Desde octubre de 2024, los vehículos eléctricos chinos enfrentan un arancel general del 15% al 20% al no contar con un Tratado de Libre Comercio. A diferencia de las unidades del T-MEC, estas marcas deben pagar IVA y cumplir con la NOM-194 de seguridad. JAC mitiga esto mediante el ensamblaje local (CKD) para reducir la exposición a variaciones arancelarias.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', // Aduana/Carga
      category: 'Economía',
      author: 'Redacción Legal',
      date: new Date('2024-12-02'),
      readTime: 5,
      tags: ['Impuestos', 'Aduanas', 'T-MEC']
    },
    {
      id: 3,
      title: 'Cultura de Negocios con China: El valor del "Guanxi"',
      summary: 'Cómo negociar exitosamente entendiendo las jerarquías y valores asiáticos',
      content: 'Para empresas como BYD o SAIC, el concepto de guanxi o confianza a largo plazo es prioritario. La comunicación debe ser formal y paciente, ya que la toma de decisiones suele ser jerárquica. A diferencia de occidente, los contratos en China se ven como marcos de cooperación flexibles que pueden revisarse si el contexto cambia.',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop', // Negocios/Reunión
      category: 'Negocios',
      author: 'Ana Rodríguez',
      date: new Date('2024-12-01'),
      readTime: 4,
      tags: ['Cultura', 'Negociación', 'China']
    },

    // --- TEMA 2: AMAZON VS MERCADO LIBRE ---
    {
      id: 4,
      title: 'Amazon vs. Mercado Libre: Choque de Estrategias',
      summary: 'Eficiencia global de Amazon contra la adaptación local de Mercado Libre',
      content: 'La expansión del e-commerce presenta dos modelos opuestos. Amazon replica su modelo global basado en eficiencia, infraestructura y membresías Prime. Por otro lado, Mercado Libre apuesta por la regionalización profunda, desarrollando soluciones específicas para la informalidad y la falta de bancarización que caracterizan a Latinoamérica.',
      imageUrl: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop', // E-commerce/Amazon concept
      category: 'E-commerce',
      author: 'Tech Insights',
      date: new Date('2024-12-02'),
      readTime: 7,
      tags: ['Estrategia', 'Latam', 'Competencia']
    },
    {
      id: 5,
      title: 'La Batalla Logística: Última Milla en Latam',
      summary: 'Mercado Envíos entrega el 75% de paquetes en menos de 48 horas',
      content: 'La logística es el eje del éxito en la región. Mercado Libre construyó una red propia de fulfillment que cubre casi todo el territorio, logrando tiempos de entrega récord. Amazon respondió inaugurando en 2023 su mayor centro logístico en CDMX. Ambas empresas invierten fuertemente en tecnología para superar la inseguridad y las direcciones complejas.',
      imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop', // Almacén/Logística
      category: 'Logística',
      author: 'Marco Ferrari',
      date: new Date('2024-11-30'),
      readTime: 5,
      tags: ['Envíos', 'Supply Chain', 'Fulfillment']
    },
    {
      id: 6,
      title: 'Fintech: La Revolución de Mercado Pago',
      summary: 'Integración de servicios financieros para la población no bancarizada',
      content: 'Mercado Pago evolucionó de una simple pasarela a un banco digital completo, ofreciendo créditos y billeteras a millones de usuarios no bancarizados. Esta vertical financiera es una ventaja competitiva clave que Amazon, limitada a alianzas con bancos tradicionales, no ha podido replicar con la misma profundidad en el mercado masivo.',
      imageUrl: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&h=400&fit=crop', // Pagos digitales/Banco
      category: 'Finanzas',
      author: 'Laura Schmidt',
      date: new Date('2024-11-29'),
      readTime: 6,
      tags: ['Fintech', 'Bancos', 'Pagos']
    },
    {
      id: 7,
      title: 'Liderazgo y Cultura: Silicon Valley vs. Buenos Aires',
      summary: 'Diferencias en gestión y resolución de conflictos corporativos',
      content: 'Amazon llegó con un estilo directo, racional y basado en métricas duras. Mercado Libre opera con un estilo más relacional, flexible y empático. En el entorno latinoamericano, donde las emociones influyen en los negocios, el enfoque humano de Mercado Libre ha facilitado una conexión más natural para retener talento y negociar con socios.',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop', // Trabajo en equipo
      category: 'Management',
      author: 'RRHH Global',
      date: new Date('2024-11-28'),
      readTime: 8,
      tags: ['Liderazgo', 'RRHH', 'Cultura']
    },

    // --- TEMA 3: GUERRA DEL BANANO ---
    {
      id: 8,
      title: 'Historia: La Guerra del Banano y la UE',
      summary: 'Discriminación histórica a favor de las excolonias europeas',
      content: 'Durante los años 90 y 2000, la Unión Europea impuso un sistema de cuotas que favorecía a los países de África, Caribe y Pacífico, discriminando al banano latinoamericano. Esto generó una estructura desigual donde Ecuador, pese a ser más eficiente, enfrentaba aranceles punitivos que amenazaban el empleo de dos millones de personas.',
      imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop', // Bananos
      category: 'Historia',
      author: 'Archivo Histórico',
      date: new Date('2024-12-01'),
      readTime: 6,
      tags: ['Banano', 'UE', 'Proteccionismo']
    },
    {
      id: 9,
      title: 'Victoria Legal en la OMC: El Acuerdo de Ginebra',
      summary: 'Cómo Ecuador venció el proteccionismo europeo con derecho internacional',
      content: 'Ecuador llevó el caso ante la Organización Mundial del Comercio argumentando discriminación y ganó. El conflicto culminó con el Acuerdo de Ginebra en 2009, donde la UE se comprometió a reducir progresivamente el arancel de 176 a 114 euros por tonelada, permitiendo a Ecuador recuperar competitividad y mercado sin trato desigual.',
      imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop', // Justicia/Martillo
      category: 'Legal',
      author: 'Thomas Weber',
      date: new Date('2024-11-28'),
      readTime: 7,
      tags: ['OMC', 'Derecho', 'Diplomacia']
    },
    {
      id: 10,
      title: 'Sostenibilidad: La Nueva Era del Banano',
      summary: 'Transformación del sector hacia prácticas ecológicas certificadas',
      content: 'La presión europea y el fin del conflicto impulsaron una modernización ecológica. Hoy, certificaciones como Rainforest Alliance son la norma en Ecuador. Se priorizó el uso racional del agua y el control de plagas. Lo que comenzó como una barrera comercial se convirtió en una ventaja competitiva basada en la calidad y el respeto al medio ambiente.',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop', // Campo/Agricultura
      category: 'Sostenibilidad',
      author: 'Agro Futuro',
      date: new Date('2024-12-02'),
      readTime: 5,
      tags: ['Ecología', 'Certificaciones', 'Campo']
    }
  ]);

  // Computed signal para obtener todas las noticias
  readonly allNews = computed(() => this.newsSignal());

  // Computed signal para noticias destacadas (últimas 3)
  readonly featuredNews = computed(() => 
    this.newsSignal().slice(0, 3)
  );

  // Método para obtener noticia por ID
  getNewsById(id: number) {
    return this.newsSignal().find(news => news.id === id);
  }

  // Método para obtener noticias por categoría
  getNewsByCategory(category: string) {
    return computed(() => 
      this.newsSignal().filter(news => news.category === category)
    );
  }
}