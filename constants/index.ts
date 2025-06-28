export const subjects = [
  "operating systems",
  "dbms",
  "computer networks",
  "data structures & algorithms",
  "oop",
  "software engineering",
];

export const subjectsColors = {
  "operating systems": "#E5D0FF",
  dbms: "#FFDA6E",
  "computer networks": "#BDE7FF",
  "data structures & algorithms": "#FFC8E4",
  oop: "#FFECC8",
  "software engineering": "#C8FFDF",
};

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const recentSessions = [
  {
    id: "1",
    subject: "operating systems",
    name: "Kernel King",
    topic: "Process Scheduling & Synchronization",
    duration: 45,
    color: subjectsColors["operating systems"],
  },
  {
    id: "2",
    subject: "dbms",
    name: "Query Master",
    topic: "SQL Joins & Normalization",
    duration: 30,
    color: subjectsColors.dbms,
  },
  {
    id: "3",
    subject: "computer networks",
    name: "Net Ninja",
    topic: "TCP/IP Fundamentals",
    duration: 30,
    color: subjectsColors["computer networks"],
  },
  {
    id: "4",
    subject: "data structures & algorithms",
    name: "Algo Ace",
    topic: "Sorting Algorithms Deep-Dive",
    duration: 45,
    color: subjectsColors["data structures & algorithms"],
  },
  {
    id: "5",
    subject: "oop",
    name: "Object Architect",
    topic: "Inheritance & Polymorphism",
    duration: 20,
    color: subjectsColors.oop,
  },
  {
    id: "6",
    subject: "software engineering",
    name: "Design Doctor",
    topic: "SDLC & Agile Methodologies",
    duration: 25,
    color: subjectsColors["software engineering"],
  },
];
