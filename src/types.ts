export interface ThematicTrack {
  id: number;
  code: string;
  title: string;
  description: string;
  keyTopics: string[];
  icon: string;
  category: 'life-sciences' | 'applied-biotech' | 'computational' | 'environmental';
}

export interface SpeakerTeaser {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  country: string;
  specialization: string;
  type: 'plenary' | 'invited' | 'keynote';
  imagePlaceholderUrl: string;
  isConfirmed: boolean;
}

export interface MilestoneDate {
  step: number;
  title: string;
  subtitle: string;
  targetDate: string;
  status: 'active-open' | 'scheduled' | 'tba';
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Conference' | 'Campus' | 'Presentations' | 'Participants';
  imageUrl: string;
}

export interface PreRegistrationData {
  fullName: string;
  email: string;
  affiliation: string;
  role: string;
  country: string;
  selectedTracks: number[];
  interestedInPaperSubmission: boolean;
  registrationId?: string;
  registeredAt?: string;
}
