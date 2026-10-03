export type ThemeMode = 'dark' | 'light';

export interface Venture {
  id: string;
  name: string;
  category: string;
  status: 'Live Production' | 'Escalamiento' | 'Fase Piloto';
  description: string;
  mainMetricLabel: string;
  mainMetricValue: string;
  subMetricLabel: string;
  subMetricValue: string;
  techStack: string[];
  foundedYear: string;
  tractionSummary: string;
  detailedCaseStudy: {
    problem: string;
    solution: string;
    microservicesDeployed: string[];
    outcomes: { label: string; value: string }[];
    founderTestimonial?: { quote: string; author: string; role: string };
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  category: 'cloud' | 'frontend' | 'ai' | 'growth' | 'data' | 'compliance';
  highlightBadge?: string;
  capabilities: string[];
  sla: string;
}

export interface BookingSlot {
  id: string;
  label: string;
  day: string;
  time: string;
  tz: string;
  available: boolean;
}

export interface InquiryFormData {
  fullName: string;
  corporateEmail: string;
  interestType: string;
  stage: string;
  projectDescription: string;
  ndaRequested: boolean;
}
