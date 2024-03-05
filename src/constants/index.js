import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fete1,
  fete2,
  fete3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Events",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Upliftment",
    icon: web,
  },
  {
    title: "Global reach grows",
    icon: mobile,
  },
  {
    title: "Student-run seeks allies",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Warmly embrace all",
    icon: web,
  },
  {
    title: "Local impact beyond",
    icon: mobile,
  },
  {
    title: "Diverse views enrich",
    icon: backend,
  },
  {
    title: "Open arms, all welcome",
    icon: creator,
  },
  {
    title: "Warm hosts, smooth experience",
    icon: web,
  },
  {
    title: "Reliable results",
    icon: mobile,
  },
  {
    title: "Expert care, every step",
    icon: backend,
  },
  {
    title: "Meticulous oversight",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Formation of Fete",
    company_name: "Fete",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022",
    points: [
      "Having a Drink in Starbucks.",
      "Spending quality time.",
      "etc etc.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      `Fete holds a great initiative. The idea of having students clubs is a creative approach in gathering students who add more value to self empowerment & mutual growth. The motive of building a strong community in changing lives & creating a better society makes it more special.I like the fact that it also has fun activities. Basically, a community for a happy & safe place - “You’re just a fete away” I wish to continue to be a part of fete and contribute my little towards a happy and better future.`,
    name: "Pranathi Rao",
    designation: "CFO",
    company: "Acme Co",
    image: "https://fete.site.live/img/HfuBq-ZOJPO-p1EnE-MPkOx-zu8ls.png",
  },
  {
    testimonial:
      `At Fete in Hubli-Dharwad, I absolutely love how it elevates student initiatives through diverse events. The thoughtful touch in every detail reflects a deep commitment to community empowerment and societal progress, making collective growth a shared journey that I truly appreciate`,
    name: "Gouri V. Vernekar",
    designation: "COO",
    company: "DEF Corp",
    image: "https://fete.site.live/img/YgnDe-IixE9-p0bzX-wRWOe-39jDZ.jpeg",
  },
  {
    testimonial:
      `Collaborating with Fete for their brand endorsement shoot was a delightful experience. Their unique initiative in Hubli-Dharwad creates a welcoming space for socially awkward individuals to host and participate in events.  I love that they are making a positive impact in our community. If you're seeking meaningful connections and memorable experiences, Fete is the place to be!`,
    name: "Vibhashree B.S",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://fete.site.live/img/gDVOV-VoNcE-md0He-CJgwG-A6USs.jpeg",
  },
  {
    testimonial: `Fete seems like a commendable initiative fostering community empowerment in Hubli and Dharwad sounds awesome! Hrishika Babar and Faheem Dehalvi are rocking it. Love how they're all about letting students take the lead. Growing together for real progress – count me in on that mindset! it's a full-blown collective journey to kick societal progress into high gear and I’m here for all of it`,
    name: "Aditi Ponkshe",
    designation: "CEO",
    company: "XYZ Corp",
    image: "https://fete.site.live/img/0a48w-YjtQB-7U2UG-ZHfpL-zBqlD.png",
  },
];

const projects = [
  {
    name: "Our First Post",
    description:
      "Our First meetup",
    tags: [
      {
        name: "FirstMeetup",
        color: "blue-text-gradient",
      },
      {
        name: "fun",
        color: "green-text-gradient",
      },
      {
        name: "bonds",
        color: "pink-text-gradient",
      },
    ],
    image: fete1,
    source_code_link: "https://www.instagram.com/p/C2KqzZTSwxR/",
  },
  {
    name: "idk post",
    description:
      "2nd view of the first meetup",
    tags: [
      {
        name: "dunno",
        color: "blue-text-gradient",
      },
      {
        name: "fun",
        color: "green-text-gradient",
      },
      {
        name: "bonds",
        color: "pink-text-gradient",
      },
    ],
    image: fete2,
    source_code_link: "https://www.instagram.com/p/C4A4eD_SaCp/",
  },
  {
    name: "No idea post",
    description:
      "3rd view of the first meetup",
    tags: [
      {
        name: "idk",
        color: "blue-text-gradient",
      },
      {
        name: "fun",
        color: "green-text-gradient",
      },
      {
        name: "no idea",
        color: "pink-text-gradient",
      },
    ],
    image: fete3,
    source_code_link: "https://www.instagram.com/p/C2KuVILSkSi/?img_index=1",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
