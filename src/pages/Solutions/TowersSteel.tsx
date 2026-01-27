import SolutionTemplate from "./SolutionTemplate";
import {
  Package,      // For Asset Management
  Monitor,      // For Digital Signage
  Clock,        // For Attendance Management
  Warehouse,    // For Stores & Inventory
  Barcode,      // For WIP Tracking
  Truck,        // For Weighbridge
} from "lucide-react";

export const towerssteel_items = [
  {
    icon: Package,
    title: "Asset Verification, Re-verification & Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/towers%26steels/avms-cover.png",
    tagline: "Barcode/RFID-based asset lifecycle tracking & verification",
    description: `<p>Web-based asset tracking and verification system using Barcode/RFID technology.</p>`,
    benefits: [
      "Real-time verification using Barcode/RFID",
      "Visual audit trail with photos & location",
      "Accurate variance & audit reporting",
      "Reduces manual errors",
      "Organized categorization by department/location",
      "ERP integration",
      "Inventory optimization & loss prevention",
      "Compliance-ready record keeping",
      "Mobile Android app for field verification",
      "Secure role-based access",
    ],
  },

  {
    icon: Monitor,
    title: "Centralized Content Management System - Digital Signage Solutions",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/towers%26steels/ds-cover.png",
    tagline: "High-performance, secure, and scalable digital signage ecosystem",
    description: `<p>Ultra-reliable digital signage solution with cloud connectivity and centralized content management.</p>`,
    benefits: [
      "Purpose-built digital signage players",
      "High reliability, security & uptime",
      "PC-level performance",
      "Free ongoing updates",
      "Real-time cloud access",
      "Un-hackable proprietary OS",
      "99.9% uptime",
      "< 1% hardware failure",
      "Cryptographically signed system",
      "One-way or locked-down modes",
      "Self-encrypting SSD support",
      "Secure content authentication",
    ],
  },

  {
    icon: Clock,
    title: "Employee Attendance Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/towers%26steels/eam-cover.png",
    tagline: "Automated attendance, leave & shift management with ERP/Payroll integration",
    description: `<p>Automated attendance and workforce management system with ERP/Payroll integration.</p>`,
    benefits: [
      "ERP/Payroll integration",
      "Reduces manual HR errors",
      "Self-service kiosk for employees",
      "Hindi & English language support",
      "Faster approvals & decision-making",
      "Accurate payroll-ready data",
      "Improves transparency with payslip access",
    ],
  },

  {
    icon: Warehouse,
    title: "Stores & Inventory Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/towers%26steels/sim-cover.png",
    tagline: "Barcode-based inventory tracking with AI-driven space optimization",
    description: `<p>Barcode-based inventory management with AI-driven space optimization and ERP integration.</p>`,
    benefits: [
      "Unique barcode identification for items & locations",
      "AI-based space optimization",
      "Error-free real-time scanning",
      "Digital stock take & tracking",
      "Handles demo, returns & replacement materials",
      "Wireless handheld terminal support",
      "Comprehensive MIS & movement reports",
      "Gate-to-issue lifecycle tracking",
      "ERP integration",
      "Enhanced traceability & accountability",
    ],
  },

  {
    icon: Barcode,
    title: "Work In Process (WIP) Tracking & Tracing Solution",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/towers%26steels/wip-cover.png",
    tagline: "Real-time production tracking, planning alignment & ERP-integrated workflow",
    description: `<p>Real-time WIP management system with ERP integration for production visibility.</p>`,
    benefits: [
      "Real-time production tracking",
      "Accurate material count at each stage",
      "Route sheet-based workflow",
      "Reporting & analytics for bottlenecks",
      "ERP/SAP integration via API or FTP",
      "Enhanced quality control",
      "Improved production efficiency",
      "Cost savings via optimized workflow",
    ],
  },

  {
    icon: Truck,
    title: "Weighbridge Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/towers%26steels/wbms-cover.png",
    tagline: "Automated, fraud-proof weighbridge operations with ANPR & camera integration",
    description: `<p>Automated weighbridge system with ANPR, camera integration, and fraud prevention.</p>`,
    benefits: [
      "Tamper-proof weighment records",
      "ANPR-based vehicle OCR detection",
      "Reduces fraud using photo/video evidence",
      "Email/WhatsApp automated slip sharing",
      "IP camera streaming & snapshots",
      "Touch kiosk & boom barrier support",
      "Real-time data without manual entry",
      "Centralized reporting for multi-site operations",
      "Customizable for all industries & weighbridge types",
    ],
  },
];

const TowersSteel = () => <SolutionTemplate industry="Towers/Steel" extraItems={towerssteel_items} />;

export default TowersSteel;
