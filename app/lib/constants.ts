export const report =
  'https://irp.cdn-website.com/47057fca/files/uploaded/2025+QRHIRC+Impact+Report.pdf';

export const directions = [
  {
    id: 'institute',
    name: 'Research institute',
    description:
      'Editorial clarity. Confident, considered, and grounded in evidence.',
  },
  {
    id: 'country',
    name: 'Connected to country',
    description:
      'An expansive regional story. Warm, human, and close to place.',
  },
  {
    id: 'public',
    name: 'Health in common',
    description:
      'A clear public purpose. Direct, structured, and open to everyone.',
  },
] as const;

export type Direction = (typeof directions)[number]['id'];

export const priorities = [
  {
    id: 'health-equity',
    title: 'Health equity',
    text: 'Making access to quality healthcare more equitable, wherever people live.',
  },
  {
    id: 'priority-populations',
    title: 'Priority populations',
    text: 'Research informed by the communities whose health and wellbeing it seeks to improve.',
  },
  {
    id: 'disease-prevention',
    title: 'Disease prevention',
    text: 'Understanding local needs to help prevent disease and support healthier communities.',
  },
  {
    id: 'rural-workforce',
    title: 'Rural workforce',
    text: 'Building research capability and supporting a sustainable rural health workforce.',
  },
] as const;

export const collaborativeMembers = [
  {
    id: 'unisq',
    href: 'https://www.unisq.edu.au/',
    className: 'partner-unisq',
    label: 'University of Southern Queensland',
  },
  {
    id: 'dd',
    href: 'https://www.darlingdowns.health.qld.gov.au/',
    className: 'partner-dd',
    label: 'Darling Downs Health',
  },
  {
    id: 'uq',
    href: 'https://rcs.medicine.uq.edu.au/',
    className: 'partner-uq',
    label: 'UQ Rural Clinical School',
  },
  {
    id: 'sqrh',
    href: 'https://www.sqrh.com.au/',
    className: 'partner-sqrh',
    label: 'Southern Queensland Rural Health',
  },
  {
    id: 'rme',
    href: 'https://ruralmeded.org.au/',
    className: 'partner-rme',
    label: 'RuralMedEd',
  },
] as const;

export const researchProjects = [
  {
    id: 'prehab',
    topic: 'Access to care',
    title: 'Bringing recovery closer to home.',
    meta: 'Research project · Funded 2025',
    text:
      'Exploring a hybrid prehabilitation program to help rural patients prepare for knee replacement surgery—with less travel and more support.',
    image: '/assets/landscape-detail.jpg',
    imageAlt: 'A windmill in the Darling Downs',
  },
  {
    id: 'first-nations',
    topic: 'Priority populations',
    title: 'First Nations voices. Stronger health research.',
    meta: 'Community-led research',
    text:
      'Developing a rural, regional and remote advocacy panel to help shape research around community priorities.',
    image: '/assets/landscape.jpg',
    imageAlt: 'The countryside at Picnic Point, Toowoomba',
  },
  {
    id: 'workforce',
    topic: 'Rural workforce',
    title: 'Building research capability across the region.',
    meta: 'Capacity building',
    text:
      'Supporting rural health professionals to develop research skills and contribute to evidence that reflects local practice.',
    image: '/assets/landscape-detail.jpg',
    imageAlt: 'Regional landscape in the Darling Downs',
  },
] as const;

export const events = [
  {
    id: 'irt-intake',
    title: 'Intensive Research Training Program',
    type: 'Training',
    format: 'In person · 4 full-day workshops',
    location: 'Toowoomba',
    description:
      'A practical, mentor-supported program that helps you turn a local health challenge into a research question.',
    duration: '5 months',
    cost: 'Free of charge',
  },
  {
    id: 'research-workshop',
    title: 'Introduction to rural health research',
    type: 'Workshop',
    format: 'Half-day workshop',
    location: 'Darling Downs & South West Queensland',
    description:
      'A shorter introduction for health professionals exploring research for the first time.',
    duration: 'Half day',
    cost: 'Free of charge',
  },
  {
    id: 'collaborative-forum',
    title: 'QRHIRC collaborative forum',
    type: 'Forum',
    format: 'In person',
    location: 'Baillie Henderson Hospital, Toowoomba',
    description:
      'Connect with partners, hear about regional research progress, and explore new collaboration opportunities.',
    duration: 'Full day',
    cost: 'By invitation',
  },
] as const;

export const inquiryTopics = [
  'Research collaboration',
  'Training & workshops',
  'Partnership enquiry',
  'Community perspective',
  'General question',
] as const;
