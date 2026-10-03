import { Venture, ServiceItem, BookingSlot } from '../types';

export const VENTURES_DATA: Venture[] = [
  {
    id: 'vertivolatam',
    name: 'Vertivolatam',
    category: 'AGTECH / VISIÓN IA',
    status: 'Live Production',
    description: 'Catch crop disease before it spreads: AI vision on the edge. Detección fitosanitaria + NVIDIA physical-AI para invernaderos y campo. Hardware + SaaS.',
    mainMetricLabel: 'Detección',
    mainMetricValue: 'Fitosanitaria edge',
    subMetricLabel: 'Mercado',
    subMetricValue: 'Greenhouse growers · LATAM',
    techStack: ['Edge AI', 'Computer Vision', 'Hardware', 'SaaS'],
    foundedYear: '—',
    tractionSummary: 'Visión IA en borde para invernaderos y campo, sobre el stack compartido de ChimeraNext.',
    detailedCaseStudy: {
      problem: 'Las enfermedades de cultivo se detectan tarde, cuando ya se propagaron por el invernadero.',
      solution: 'Detección fitosanitaria con visión IA en edge + NVIDIA physical-AI, construida sobre microservicios compartidos.',
      microservicesDeployed: [
        'vision-core',
        'agentic-core',
        'payments-core',
        'marketplace-core'
      ],
      outcomes: [
        { label: 'Sitio', value: 'vertivolatam.com' },
        { label: 'Modelo', value: 'Hardware + SaaS' }
      ]
    }
  },
  {
    id: 'habitanexus',
    name: 'HabitaNexus',
    category: 'PROPTECH / LEGALTECH',
    status: 'Live Production',
    description: 'From ~60 days to under 7: rent long-term with escrow, two-way claims, no lawyer. Contratos de arriendo Ley-7527 con depósitos escrow y reclamos bidireccionales.',
    mainMetricLabel: 'Arriendo',
    mainMetricValue: 'De ~60 días a <7',
    subMetricLabel: 'Contratos',
    subMetricValue: 'Ley-7527 + escrow',
    techStack: ['Marketplace', 'Escrow', 'Geospatial', 'Compliance'],
    foundedYear: '—',
    tractionSummary: 'Arriendo largo plazo con escrow y claims bidireccionales, más producto B2G de compliance para municipalidades.',
    detailedCaseStudy: {
      problem: 'Arrendar largo plazo toma ~60 días entre búsqueda, negociación, abogados y garantías.',
      solution: 'Marketplace de arriendo Ley-7527 con escrow de depósitos, reclamos bidireccionales sin abogado y capa B2G para municipalidades.',
      microservicesDeployed: [
        'geospatial-core',
        'marketplace-core',
        'payments-core',
        'compliance-core',
        'agentic-core'
      ],
      outcomes: [
        { label: 'Sitio', value: 'habitanexus.com' },
        { label: 'Modelo', value: 'Marketplace + B2G' }
      ]
    }
  },
  {
    id: 'altrupets',
    name: 'AltruPets',
    category: 'PETTECH / GOVTECH',
    status: 'Live Production',
    description: 'The coordination layer for animal welfare: subsidies and abuse reports that actually get routed, approved and acted on.',
    mainMetricLabel: 'Coordinación',
    mainMetricValue: 'Subsidios + denuncias',
    subMetricLabel: 'Mercado',
    subMetricValue: 'Municipalidades · LATAM',
    techStack: ['Marketplace', 'Compliance', 'Geospatial', 'P2P Donations'],
    foundedYear: '—',
    tractionSummary: 'Plataforma cloud-native que conecta rescatistas, veterinarias y municipalidades. Nunca retiene fondos (SUGEF-safe).',
    detailedCaseStudy: {
      problem: 'Subsidios veterinarios y denuncias de maltrato no se rutean ni se actúa sobre ellos.',
      solution: 'Capa de coordinación B2G: subsidios, denuncias autenticadas, rescate, adopción y donaciones P2P.',
      microservicesDeployed: [
        'marketplace-core',
        'agentic-core',
        'compliance-core',
        'filing-core',
        'geospatial-core'
      ],
      outcomes: [
        { label: 'Sitio', value: 'altrupets.com' },
        { label: 'Fondos retenidos', value: 'Ninguno (SUGEF-safe)' }
      ]
    }
  },
  {
    id: 'aduanext',
    name: 'Aduanext',
    category: 'ADUANAS / GOVTECH',
    status: 'Live Production',
    description: 'Clear customs in hours, not days, automated. SaaS de automatización aduanera para el comercio LATAM.',
    mainMetricLabel: 'Despacho',
    mainMetricValue: 'Horas, no días',
    subMetricLabel: 'Mercado',
    subMetricValue: 'Importadores · LATAM',
    techStack: ['Compliance', 'E-invoicing', 'Payments', 'Automation'],
    foundedYear: '—',
    tractionSummary: 'Automatización de aduanas para importadores, exportadores y brokers en LATAM.',
    detailedCaseStudy: {
      problem: 'El despacho aduanero toma días de trámite manual y papel.',
      solution: 'SaaS de automatización aduanera sobre microservicios de compliance, facturación y pagos.',
      microservicesDeployed: [
        'compliance-core',
        'filing-core',
        'invoice-core',
        'payments-core'
      ],
      outcomes: [
        { label: 'Sitio', value: 'aduanext.com' },
        { label: 'Modelo', value: 'SaaS B2B' }
      ]
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cloud-microservices',
    title: 'Arquitectura Cloud & Microservicios',
    description: 'Diseño de infraestructura multi-región, pipelines CI/CD automatizados y orquestación de contenedores para alta disponibilidad y baja latencia.',
    icon: 'cloud_circle',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Docker'],
    category: 'cloud',
    highlightBadge: 'Base Fundamental',
    capabilities: [
      'Multi-cloud resilience con failover automático',
      'Infraestructura como código (Terraform / Pulumi)',
      'Service Mesh Istio con mTLS nativo',
      'Monitoreo Prometheus + Grafana con alertas 24/7'
    ],
    sla: '99.95% P99 SLA Garantizado'
  },
  {
    id: 'agile-islands',
    title: 'Desarrollo Ágil & Islands',
    description: 'Frontend ultrarrápido con arquitectura basada en islas interactivas y renderizado estático en el borde para tiempos de carga inferiores a 300ms.',
    icon: 'terminal',
    tags: ['Astro', 'React Islands', 'Tailwind CSS', 'Edge CDN'],
    category: 'frontend',
    highlightBadge: 'Ultra Rápido',
    capabilities: [
      'Cero JavaScript innecesario en el primer render',
      'Arquitectura de componentes desacoplados e hidratación parcial',
      'Diseño responsivo fluido con Tailwind CSS',
      'Optimización de Core Web Vitals (LCP < 0.8s, CLS = 0)'
    ],
    sla: 'Carga < 300ms a nivel global'
  },
  {
    id: 'ai-applied',
    title: 'Inteligencia Artificial Aplicada',
    description: 'Integración de modelos fundacionales, agentes autónomos y bases de conocimiento propietarias mediante arquitecturas RAG avanzadas.',
    icon: 'psychology',
    tags: ['LLMs', 'Agentes Autónomos', 'RAG', 'Vector DBs'],
    category: 'ai',
    highlightBadge: 'Soberanía de Datos',
    capabilities: [
      'Pipelines RAG híbridos (Sparse + Dense Embeddings)',
      'Agentes autónomos con evaluación determinista de guardrails',
      'Fine-tuning y cuantización de modelos open-source en infraestructura privada',
      'Evaluación continua de precisión y mitigación de sesgos'
    ],
    sla: 'Latencia de inferencia < 450ms'
  },
  {
    id: 'growth-gtm',
    title: 'Growth & Go-To-Market',
    description: 'Ingeniería de tracción comercial con motores automatizados de prospección B2B, experimentación rápida y optimización de conversión continua.',
    icon: 'query_stats',
    tags: ['B2B Outbound', 'Funnel Opt', 'Retention Engines'],
    category: 'growth',
    highlightBadge: 'Tracción B2B',
    capabilities: [
      'Sistemas automatizados de enriquecimiento de leads y scoring',
      'Plataformas de experimentación A/B multivariante sin latencia',
      'Modelado de cohortes de retención y detección de churn',
      'Estrategias de distribución institucional y canal partner'
    ],
    sla: '3x Aceleración en ciclo de ventas'
  },
  {
    id: 'data-analytics',
    title: 'Data Engineering & Analytics',
    description: 'Extracción y transformación de telemetría de eventos en tiempo real con almacenes analíticos columnares y paneles ejecutivos unificados.',
    icon: 'database',
    tags: ['Real-time ETL', 'Telemetry', 'ClickHouse', 'Tableros'],
    category: 'data',
    highlightBadge: 'Streaming Analytics',
    capabilities: [
      'Ingesta de millones de eventos/seg con Kafka y ClickHouse',
      'Transformaciones en vuelo con Apache Flink',
      'Métricas analíticas consolidadas para inversores y boards',
      'Auditoría y linaje de datos de extremo a extremo'
    ],
    sla: 'Sincronización analítica < 1.5s'
  },
  {
    id: 'compliance-ops',
    title: 'Operaciones & Compliance Técnico',
    description: 'Gobierno riguroso, arquitectura de seguridad Zero Trust, auditoría de dependencias y acompañamiento hacia certificaciones de estándar institucional.',
    icon: 'gavel',
    tags: ['SOC2', 'Zero Trust', 'Code Audit', 'SLA 99.9%'],
    category: 'compliance',
    highlightBadge: 'Auditoría Institucional',
    capabilities: [
      'Políticas de seguridad alineadas con SOC2 Type II e ISO 27001',
      'Análisis estático y dinámico de vulnerabilidades (SAST/DAST)',
      'Gobernanza corporativa de código abierto y licencias de software',
      'Protocolos de contingencia, continuidad del negocio y DRP'
    ],
    sla: 'Cumplimiento continuo verificado'
  }
];

export const BOOKING_SLOTS: BookingSlot[] = [
  { id: 'slot-1', label: 'Hoy, 15:30 EST', day: 'Hoy', time: '15:30', tz: 'EST', available: true },
  { id: 'slot-2', label: 'Hoy, 17:00 EST', day: 'Hoy', time: '17:00', tz: 'EST', available: true },
  { id: 'slot-3', label: 'Mañana, 10:00 EST', day: 'Mañana', time: '10:00', tz: 'EST', available: true },
  { id: 'slot-4', label: 'Mañana, 14:00 EST', day: 'Mañana', time: '14:00', tz: 'EST', available: true },
  { id: 'slot-5', label: 'Viernes, 11:30 EST', day: 'Viernes', time: '11:30', tz: 'EST', available: true },
  { id: 'slot-6', label: 'Viernes, 16:00 EST', day: 'Viernes', time: '16:00', tz: 'EST', available: true }
];

export const BRAND_LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1WGZUjniSDS6KaH901WKGBnwE-cmXZcNSvUZlczhSiM2r9TMwjf5W3yxI_M1Y9qh-ujT6aqu8aB9XNJfM6AHt5UlM8dDX7vJndjpuj8qJRbxiL3WZZh022y8b3keMkVkDOM2zLupgT84L8k0p5rct2_iD7fZVCyv9_THVjkFyYTIzGJpotmREPY0QWqrKb5fitWFPvLwFueuICJCXcUPxAXL_Y0S67pBuJkIrKLNTuYpF9ZPpMm3vlqIe-Q';
