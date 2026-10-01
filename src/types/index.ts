export interface SportItem {
  id: string;
  name: string;
  category: 'Olympic' | 'Indoor' | 'Outdoor' | 'Equestrian & Combat';
  image: string;
  description: string;
  achievement?: string;
  facility: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  stats: string;
}

export interface MentorItem {
  name: string;
  title: string;
  image: string;
  achievement: string;
  role: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  relation: string;
  studentClass: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface GradeCurriculum {
  gradeRange: string;
  title: string;
  description: string;
  curriculum: string[];
  features: string[];
  sportsFocus: string[];
  routineHighlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
