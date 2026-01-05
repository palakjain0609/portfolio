import React from 'react';
import { Project, Skill, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Palak Jain",
  role: "Data Analyst",
  tagline: "Turning raw data into strategic insights through advanced analytics and visualization.",
  location: "Udaipur, India",
  email: "palak06092005@gmail.com",
  phone: "+91 9079043862",
  linkedin: "https://www.linkedin.com/in/palakjain0609/",
  github: "https://github.com/palakjain0609",
  resumeUrl: "/resume.pdf",
  summary: "I am a Data Analyst with a B.Tech background who believes that data is only as good as the decisions it drives. My focus is on bridging the gap between raw numbers and business strategy. With a strong technical foundation in Python, SQL, and Tableau, I specialize in cleaning complex datasets and building visualizations that tell a clear story. My proficiency is backed by certifications from industry leaders like Cisco and Deloitte, where I honed my skills in data interpretation and predictive analysis."
};

export const PROJECTS: Project[] = [
  {
    id: "vendor_analysis",
    title: "Strategic Vendor Analysis",
    description: "Evaluated procurement performance and supply chain reliability through advanced SQL analytics.",
    highlights: [
      "Optimized procurement cycles by 22% via SQL-driven bottleneck identification.",
      "Achieved 15% cost savings through predictive vendor reliability scoring.",
      "Developed interactive Tableau dashboards for real-time stakeholder KPI tracking."
    ],
    techStack: ["SQL", "Python", "Tableau", "Pandas"],
    image: "/va1.png",
    link: "https://github.com/palakjain0609/vendor-analysis",
    gallery: [
      { 
        url: "/va1.png", 
        caption: "Top 10 Vendor Distribution Analysis" 
      },
      { 
        url: "/va2.png", 
        caption: "Multi-Variable Correlation Heatmap" 
      },
      {
        url: "/va3.png", 
        caption: "Comprehensive Vendor Metrics & Profitability Table"
      },
      {
        url: "/va4.png",
        caption: "Vendor Purchase Contribution: Top 10 vs Others"
      },
      {
        url: "/va5.png",
        caption: "Placeholder 5" // Assuming va5.png exists and needs a caption
      }
    ],
    stats: [
      { label: "Efficiency", value: "+22%" },
      { label: "Cost Saving", value: "15%" }
    ]
  },
  {
    id: "breast_cancer_analysis",
    title: "Breast Cancer Diagnostic Analytics",
    description: "Applied machine learning algorithms to clinical datasets to improve diagnostic accuracy.",
    highlights: [
      "Engineered an ML model achieving 94% accuracy in diagnostic classification.",
      "Reduced false-negative rates by 12% by isolating 5 critical clinical risk indicators.",
      "Automated data preprocessing pipelines for high-dimensional clinical research."
    ],
    techStack: ["Python", "Scikit-Learn", "Seaborn", "NumPy"],
    image: "/bc1.png",
    link: "https://github.com/palakjain0609/breast_cancer_analysis",
    gallery: [
      { 
        url: "/bc1.png", 
        caption: "Exploratory Data Analysis: Initial Dataset Preview (df.head)" 
      },
      { 
        url: "/bc2.png", 
        caption: "Data Quality: Heatmap visualizing missing data distribution" 
      },
      {
        url: "/bc3.png",
        caption: "Advanced Preprocessing: Imputation logic for clinical features"
      },
      {
        url: "/bc4.png",
        caption: "Evaluation Metrics: Classification Report & Confusion Matrix"
      }
    ],
    stats: [
      { label: "Accuracy", value: "94%" },
      { label: "F1 Score", value: "0.92" }
    ]
  },
  {
    id: "movie_data_analysis",
    title: "Cinematic Trend Forecasting",
    description: "Uncovered market trends in the entertainment industry using exploratory data analysis.",
    highlights: [
      "Analyzed 50k+ records to pinpoint 8 high-growth genre segments for production.",
      "Enhanced revenue forecasting accuracy by correlating historical performance with seasonal trends.",
      "Built exploratory models to visualize international market demand impact."
    ],
    techStack: ["Python", "SQL", "Matplotlib", "Jupyter"],
    image: "/ma1.png",
    link: "https://github.com/palakjain0609/movie_data_analysis",
    gallery: [
      {
        url: "/ma1.png",
        caption: "Step 1: Raw Data Ingestion & Initial Feature Observation"
      },
      {
        url: "/ma2.png",
        caption: "Step 2: Distribution Visuals (Popularity, Budget, Revenue Skewness)"
      },
      {
        url: "/ma3.png",
        caption: "Step 3: Scatter Matrix - Relationship between Budget and Market Reach"
      },
      {
        url: "/ma4.png",
        caption: "Step 4: Temporal Trend Analysis - Volume of Releases (1960-2015)"
      },
      {
        url: "/ma5.png",
        caption: "Step 5: Heatmap Visualizing Genre Profitability Across Decades"
      }
    ],
    stats: [
      { label: "Records", value: "50k+" },
      { label: "Insights", value: "8 Key" }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "SQL Queries", category: "Technical", level: 95 },
  { name: "Tableau Desktop / Public", category: "Tools", level: 92 },
  { name: "Data Visualization", category: "Technical", level: 95 },
  { name: "Exploratory Data Analysis", category: "Technical", level: 90 },
  { name: "Pandas & NumPy", category: "Technical", level: 88 },
  { name: "Jupyter Notebooks", category: "Tools", level: 85 }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    date: "2024",
    id: "250-122-025",
    link: "https://www.credly.com/badges/ab9b0e9f-3aed-4948-9975-c703c066968b"
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn",
    date: "Sep 9, 2025",
    id: "8940563",
    link: "https://www.simplilearn.com/"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Nov 17, 2025",
    link: "https://www.netacad.com/"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    date: "Oct 2024",
    id: "CcNT4cYic4e9af5Em",
    link: "https://www.theforage.com/"
  },
  {
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    date: "Aug 1, 2024",
    id: "7055285",
    link: "https://www.simplilearn.com/"
  },
  {
    title: "Python for Data Science",
    issuer: "GeeksforGeeks",
    date: "2024",
    link: "https://media.geeksforgeeks.org/courses/certificates/57bbaf68d1bb34a755133fcf45c0a961.pdf"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Techno NJR Institute of Technology",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 - 2027",
    location: "Udaipur, Rajasthan",
    description: "Focusing on Data Science, Artificial Intelligence, and Big Data Analytics."
  },
  {
    institution: "Step by Step Senior Secondary School",
    degree: "Senior Secondary Education",
    period: "2009 - 2023",
    location: "Udaipur, Rajasthan",
    description: "Consistent academic performer with a focus on Mathematics and Science."
  }
];