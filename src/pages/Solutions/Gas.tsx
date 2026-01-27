import SolutionTemplate from "./SolutionTemplate";
import {
  Package,      // For Asset Management
  Clock,        // For Attendance Management
  Cylinder,     // For Gas Cylinder Tracking
  Truck,        // For DO Process & Weighbridge
  Warehouse,    // For Stores & Inventory
} from "lucide-react";

export const gas_items = [
  {
    icon: Package,
    title: "Asset Verification, Re-verification & Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/gas/avms-cover.png",
    tagline: "Barcode/RFID-based asset lifecycle tracking & verification",
    description: `<p>Web-based asset tracking and verification system using Barcode/RFID technology.</p>`,
    benefits: [
      "Real-time verification with Barcode/RFID",
      "Visual audit trail with asset images",
      "Accurate variance & audit reports",
      "ERP integration",
      "Mobile app for field verification",
      "Secure role-based access"
    ],
  },

  {
    icon: Clock,
    title: "Employee Attendance Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/gas/eam-cover.png",
    tagline: "Automated attendance, leave & shift management with ERP/Payroll integration",
    description: `<p>Automated attendance and workforce management system with ERP/Payroll integration.</p>`,
    benefits: [
      "Seamless ERP/Payroll integration",
      "Self-service kiosk for employees",
      "Hindi & English support",
      "Reduces manual HR dependency",
      "Faster decision-making with real-time data",
      "Accurate payroll-ready data"
    ],
  },

  {
    icon: Cylinder,
    title: "Industrial Gas Cylinder Tracking System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/gas/igct-cover.png",
    tagline: "Barcode-based end-to-end cylinder traceability",
    description: `<p>Barcode-enabled tracking system for industrial gas cylinders from filling to returns.</p>`,
    benefits: [
      "Complete barcode-based traceability",
      "Real-time inventory visibility",
      "Accurate cylinder reconciliation",
      "Minimized manual errors",
      "Improved loading efficiency",
      "Enhanced security & compliance"
    ],
  },

  {
    icon: Truck,
    title: "DO Process & Tracking System – Packaged Cylinder Division (PCD)",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/gas/dopts-cover.png",
    tagline: "Automated DO import, route planning & cylinder movement tracking",
    description: `<p>Comprehensive logistics automation for DO management, vehicle routing, and cylinder dispatch.</p>`,
    benefits: [
      "End-to-end traceability",
      "Automated DO import",
      "Optimized route planning",
      "Vehicle GPS tracking",
      "Trip expense management",
      "Accurate delivery & return workflows"
    ],
  },

  {
    icon: Warehouse,
    title: "Stores & Inventory Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/gas/sim-cover.png",
    tagline: "Barcode-based inventory tracking with AI-driven space optimization",
    description: `<p>Barcode-based inventory management with AI-driven space optimization and ERP integration.</p>`,
    benefits: [
      "Accurate barcode-based identification",
      "AI-driven space optimization",
      "Error-free real-time scanning",
      "Digital stock take",
      "Traceable material lifecycle",
      "ERP-integrated operations"
    ],
  },

  {
    icon: Truck,
    title: "Weighbridge Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/gas/wbms-cover.png",
    tagline: "Automated, fraud-proof weighbridge operations with ANPR & camera integration",
    description: `<p>Automated weighbridge system with ANPR, camera integration, and fraud prevention.</p>`,
    benefits: [
      "Accurate & tamper-proof weighment",
      "Reduced fraud with photo evidence",
      "Automated workflows improving efficiency",
      "ANPR-based detection",
      "Centralized data & MIS",
      "Customizable for any industry"
    ],
  },
];

const Gas = () => <SolutionTemplate industry="Gas" extraItems={gas_items} />;

export default Gas;
