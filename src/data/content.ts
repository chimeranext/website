import { Venture, ServiceItem, BookingSlot } from '../types';

export const VENTURES_DATA: Venture[] = [
  {
    id: 'nexuspay',
    name: 'NexusPay',
    category: 'FINTECH / PAGOS TRANSFRONTERIZOS',
    status: 'Live Production',
    description: 'Plataforma de orquestación de pagos internacionales con liquidación instantánea multimoneda y cumplimiento regulatorio automatizado para corporaciones en América y Europa.',
    mainMetricLabel: 'Tracción Anualizada',
    mainMetricValue: '$12.4M ARR',
    subMetricLabel: 'Microservicios Núcleo',
    subMetricValue: 'Engine Liquidity + AML Shield',
    techStack: ['Go', 'Rust', 'Kafka', 'Astro', 'React Islands', 'ClickHouse', 'PostgreSQL'],
    foundedYear: '2023',
    tractionSummary: 'De 0 a $12.4M ARR en 18 meses utilizando el motor de liquidación compartida de ChimeraNext.',
    detailedCaseStudy: {
      problem: 'Las transferencias interbancarias corporativas B2B entre LATAM, EE.UU. y Europa sufrían tiempos de retención de 3 a 5 días y comisiones ocultas del 4.2%.',
      solution: 'Despliegue del motor de compensación y liquidación soberana de ChimeraNext con microservicios modulares para AML instantáneo, enrutamiento inteligente de liquidez y API de payout en tiempo real.',
      microservicesDeployed: [
        'Multi-Currency Ledger v3',
        'Real-time AML Screening',
        'Dynamic FX Routing',
        'Compliance Audit Vault'
      ],
      outcomes: [
        { label: 'Tiempo de Liquidación', value: '< 90 segundos' },
        { label: 'Reducción de Costos FX', value: '62%' },
        { label: 'Volumen Mensual Procesado', value: '$84M USD' },
        { label: 'Países Soportados', value: '38 jurisdicciones' }
      ],
      founderTestimonial: {
        quote: 'ChimeraNext nos entregó una arquitectura financiera lista para auditoría SOC2 y SEC desde la semana 3. Eso nos permitió cerrar contratos enterprise en tiempo récord.',
        author: 'Guillermo Arismendi',
        role: 'Co-fundador & CEO, NexusPay'
      }
    }
  },
  {
    id: 'cognipulse',
    name: 'CogniPulse',
    category: 'ENTERPRISE AI / AUTOMATIZACIÓN',
    status: 'Live Production',
    description: 'Agentes inteligentes autónomos para análisis de documentos contractuales y optimización de back-office financiero sin intervención manual de operadores.',
    mainMetricLabel: 'Rendimiento F1 Score',
    mainMetricValue: '99.4% F1',
    subMetricLabel: 'Ahorro Mensual',
    subMetricValue: '320 hrs/mes por cuenta',
    techStack: ['Python', 'LangGraph', 'Vector DB', 'FastAPI', 'React', 'Kubernetes'],
    foundedYear: '2024',
    tractionSummary: 'Orquestación de más de 450,000 contratos legales y pólizas con tasa de alucinación menor al 0.05%.',
    detailedCaseStudy: {
      problem: 'Las firmas de auditoría y fondos de inversión perdían cientos de horas hombre semanales reconciliando cláusulas de covenants y condiciones comerciales.',
      solution: 'Arquitectura RAG multi-agente construida sobre el pipeline cognitivo de microservicios de ChimeraNext, con verificación cruzada determinista y firmas criptográficas.',
      microservicesDeployed: [
        'Cognitive Data Pipeline',
        'Contract AST Parser',
        'Zero-Trust Vector Store',
        'Autonomous Verification Agent'
      ],
      outcomes: [
        { label: 'Precisión F1 en Cláusulas', value: '99.4%' },
        { label: 'Ahorro Operativo por Cuenta', value: '320 hrs/mes' },
        { label: 'Velocidad de Ingesta', value: '1,200 págs/min' },
        { label: 'Integración ERP', value: 'SAP, NetSuite, Salesforce' }
      ],
      founderTestimonial: {
        quote: 'El stack de IA de ChimeraNext erradicó 9 meses de I+D. Logramos un F1 Score de nivel institucional en el primer mes de producción.',
        author: 'Dra. Elena Vasquez',
        role: 'Chief AI Officer, CogniPulse'
      }
    }
  },
  {
    id: 'logistiq',
    name: 'Logistiq',
    category: 'SUPPLY CHAIN & ÚLTIMA MILLA',
    status: 'Live Production',
    description: 'Ruteador algorítmico y monitoreo IoT predictivo para flotas comerciales complejas, optimizando consumos energéticos y reduciendo tiempos muertos de despacho.',
    mainMetricLabel: 'Rutas Optimizadas',
    mainMetricValue: '+180K Rutas',
    subMetricLabel: 'Huella de Carbono',
    subMetricValue: '-22% Emisiones CO2',
    techStack: ['Node.js', 'Go', 'MQTT', 'TimescaleDB', 'Leaflet', 'React Islands'],
    foundedYear: '2023',
    tractionSummary: 'Operando en 7 centros metropolitanos con sincronización telemática en submilisegundos.',
    detailedCaseStudy: {
      problem: 'Ineficiencias severas en entregas urbanas de última milla causadas por congestión variable, ventanas horarias rígidas y alto costo de combustible.',
      solution: 'Despliegue del motor de enrutamiento genético de ChimeraNext combinado con microservicios de telemetría IoT de baja latencia para re-enrutamiento dinámico en tiempo real.',
      microservicesDeployed: [
        'Fleet Telemetry Broker',
        'Spatial Routing Solver',
        'Predictive Maintenance ML',
        'Driver Companion Gateway'
      ],
      outcomes: [
        { label: 'Rutas Diarias Despachadas', value: '+180,000' },
        { label: 'Ahorro de Combustible', value: '18.4%' },
        { label: 'Cumplimiento On-Time (SLA)', value: '98.8%' },
        { label: 'Reducción Emisiones CO2', value: '-22%' }
      ],
      founderTestimonial: {
        quote: 'Nuestras métricas operativas convencieron a los mayores operadores de retail del continente. La infraestructura compartida nos dio respaldo enterprise.',
        author: 'Marcos R. Peña',
        role: 'Director de Operaciones, Logistiq'
      }
    }
  },
  {
    id: 'healthgrid',
    name: 'HealthGrid',
    category: 'HEALTHTECH & INTEROPERABILIDAD',
    status: 'Live Production',
    description: 'Capa de interoperabilidad clínica y teleconsulta cifrada con arquitectura zero-trust para instituciones hospitalarias de alta complejidad.',
    mainMetricLabel: 'Red Operativa',
    mainMetricValue: '42 Clínicas',
    subMetricLabel: 'Seguridad de Datos',
    subMetricValue: 'HIPAA & HL7 Certified',
    techStack: ['Rust', 'TypeScript', 'WebRTC', 'FHIR API', 'Kubernetes', 'PostgreSQL'],
    foundedYear: '2024',
    tractionSummary: 'Certificación HIPAA y HL7 FHIR integrada nativamente para intercambios de historias clínicas sin fisuras.',
    detailedCaseStudy: {
      problem: 'Silos de información en redes hospitalarias privadas que impedían la continuidad asistencial y ponían en riesgo el cumplimiento regulatorio de privacidad médica.',
      solution: 'Capa federada de interoperabilidad FHIR construida sobre microservicios de seguridad Zero-Trust de ChimeraNext con cifrado de grado militar de extremo a extremo.',
      microservicesDeployed: [
        'FHIR Interop Bridge',
        'Zero-Trust Auth Tokenizer',
        'Encrypted Video Teleconsult',
        'Clinical Event Stream'
      ],
      outcomes: [
        { label: 'Hospitales y Clínicas Conectadas', value: '42 sedes' },
        { label: 'Consultas Médicas Mensuales', value: '64,000+' },
        { label: 'Disponibilidad de Servicio', value: '99.98%' },
        { label: 'Cumplimiento Normativo', value: 'HIPAA, GDPR, HL7' }
      ],
      founderTestimonial: {
        quote: 'La seguridad no es negociable en salud. ChimeraNext nos permitió salir al mercado con todas las certificaciones institucionales listas.',
        author: 'Dra. Sofia Mondragón',
        role: 'Founder & Medical Director, HealthGrid'
      }
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
