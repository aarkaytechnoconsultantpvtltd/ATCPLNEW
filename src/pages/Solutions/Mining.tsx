import SolutionTemplate from "./SolutionTemplate";
import {
  Package,      // For Asset Management
  AlertTriangle,// For Explosives Management
  Clock,        // For Attendance Management
  Warehouse,    // For Stores & Inventory
  Truck,        // For DO Process & Weighbridge
  MapPin,       // For Truck Movement Tracking
} from "lucide-react";

export const mining_items = [
  {
    icon: Package,
    title: "Asset Verification, Re-verification & Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/mining/amms-cover.png",
    tagline: "Barcode/RFID-based asset lifecycle tracking & verification",
    description: `<p>Web-based asset tracking and verification system using Barcode/RFID technology.</p>`,
    benefits: [
      "Real-time verification with Barcode/RFID",
      "Visual audit trail with asset images",
      "Accurate variance & audit reports",
      "Reduces human error",
      "ERP integration",
      "Mobile app for field verification",
      "Secure role-based access",
      "Improves asset accountability",
    ],
  },

  {
    icon: AlertTriangle,
    title: "Explosives Inward, Storage & Consumption Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/mining/escms-cover.png",
    tagline: "End-to-end explosive lifecycle tracking with SETT-compliant reporting",
    description: `<p>Secure tracking platform for explosive materials with SETT compliance and real-time visibility.</p>`,
    benefits: [
      "Enhanced safety & compliance",
      "Real-time tracking & visibility",
      "Admin-based user permissions",
      "Automated SETT reports like RE12",
      "Efficient storage & consumption tracking",
      "Improved security & audit readiness",
      "Cost optimization through accurate usage",
    ],
  },

  {
    icon: Clock,
    title: "Employee Attendance Management System with ERP/Payroll Integration",
    coverImage:"https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/mining/eams-cover.png",
    tagline: "Automated attendance, leave & shift management with self-service kiosk",
    description: `<p>Automated attendance and workforce management system with ERP/Payroll integration.</p>`,
    benefits: [
      "Seamless ERP/Payroll integration",
      "Self-service kiosk for leave & attendance",
      "Hindi & English support",
      "Reduced manual HR dependency",
      "Accurate payroll-ready data",
      "Faster decision-making with real-time insights",
      "Improved workforce productivity",
    ],
  },

  {
    icon: Warehouse,
    title: "Stores & Inventory Management System",
    coverImage:"https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/mining/sims-cover.png",
    tagline: "Barcode-based inventory tracking with AI-driven space utilization",
    description: `<p>Barcode-based inventory management with AI-driven space optimization and ERP integration.</p>`,
    benefits: [
      "Accurate barcode-based identification",
      "AI-driven space optimization",
      "Error-free real-time scanning",
      "Digital stock take & traceability",
      "Lifecycle management from gate entry to issue",
      "Wireless handheld terminal support",
      "ERP-integrated operations",
    ],
  },

  {
    icon: MapPin,
    title: "DO Process Capture with Truck Movement Tracking System",
    coverImage:"https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/mining/dpct-cover.png",
    tagline: "End-to-end logistics automation for mining & coal operations",
    description: `<p>Complete DO management and truck tracking platform with OCR, ANPR, and weighbridge integration.</p>`,
    benefits: [
      "End-to-end truck movement traceability",
      "OCR-based DO data capture",
      "Transporter validation & fraud prevention",
      "Real-time status notifications",
      "Weighbridge + ANPR integration",
      "System-enforced validations",
      "Custom MIS & dashboards",
      "ERP/Tally integrated workflows",
    ],
  },

  {
    icon: Truck,
    title: "Weighbridge Management System",
    coverImage:"https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/mining/wms-cover.png",
    tagline: "Automated, fraud-proof weighbridge operations with ANPR & camera integration",
    description: `<p>Automated weighbridge system with ANPR, camera integration, and fraud prevention.</p>`,
    benefits: [
      "Accurate & tamper-proof weighment",
      "Reduced fraud with photo evidence",
      "Real-time multi-camera integration",
      "ANPR-based vehicle identification",
      "Centralized data & MIS",
      "Customizable workflows",
      "Supports public & industrial weighbridges",
    ],
  },
];

const Mining = () => <SolutionTemplate industry="Mining" extraItems={mining_items} />;

export default Mining;
