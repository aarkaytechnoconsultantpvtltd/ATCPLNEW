import SolutionTemplate from "./SolutionTemplate";
import {
  Package,      // For Asset Management
  Clock,        // For Attendance Management
  Scale,        // For Weight Capture systems
  Monitor,      // For Digital Signage
  Zap,          // For Earth Pit Tracking
  Factory,      // For Furnace/Production systems
  Warehouse,    // For Storage & Inventory
  Barcode,      // For WIP Tracking, FG Sheets
  Truck,        // For Weighbridge
  Cog,          // For Electric Motor Movement
} from "lucide-react";

export const aluminium_items = [
  {
    icon: Package,
    title: "Asset Verification, Re-verification & Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/avms-cover.png",
    tagline: "Barcode/RFID-based asset lifecycle tracking & verification",
    description: `<p>Web-based asset tracking and verification system using Barcode/RFID technology for complete lifecycle management.</p>`,
    benefits: [
      "Real-time verification using barcode & RFID scanning",
      "Visual audit trail with asset images linked to location",
      "Automatic variance and audit reports for management",
      "Reduces human error through digitization",
      "Better organization by department, location, and usage",
      "ERP integration with existing systems",
      "Inventory optimization to avoid loss/theft/duplication",
      "Compliance-ready with accurate audit records",
      "Mobile Android app for field teams",
      "Secure role-based user management",
    ],
  },

  {
    icon: Clock,
    title: "Employee Attendance Management System with ERP/Payroll Software Integration",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/eam-cover.png",
    tagline: "Automated attendance, leave & shift management with ERP/Payroll integration",
    description: `<p>Automated attendance and leave management system with ERP/Payroll integration and self-service kiosk.</p>`,
    benefits: [
      "Seamless integration with ERP/Payroll software",
      "Reduced manual errors through automation",
      "Self-service kiosk & portal for employees",
      "Multi-language support (Hindi & English)",
      "Faster decision making with real-time leave status",
      "Increased operational efficiency",
      "Accurate & timely payslip access via kiosk",
      "Boosts workplace productivity",
      "Customizable dashboards & reports",
    ],
  },

  {
    icon: Scale,
    title: "Castor Roll Weight Capture with ERP Integration",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/crwc-cover.png",
    tagline: "Automated weight capture & ERP integration for castor rolls",
    description: `<p>Automated weight capture system for castor rolls with real-time ERP integration.</p>`,
    benefits: [
      "Enhanced accuracy eliminating manual errors",
      "Operational efficiency speeding up processes",
      "Real-time data availability in ERP",
      "Reduced disputes & rework",
      "Compliance & accountability with audit trails",
      "Ease of integration with industrial scales & ERPs",
    ],
  },

  {
    icon: Monitor,
    title: "Centralized Content Management System - Digital Signage solutions",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/ds-cover.png",
    tagline: "Ultra-reliable digital signage with cloud connectivity",
    description: `<p>Ultra-reliable digital signage solution with cloud connectivity and centralized content management.</p>`,
    benefits: [
      "Ultra-high reliability, security & uptime",
      "Elevates content performance to PC-levels",
      "Free updates for longevity",
      "Real-time access via cloud connectivity",
      "Resilient, unhackable signage solution",
      "99.9% player uptime with proprietary OS",
      "Commercial-grade platform with <1% failure",
      "Cryptographically signed root system",
      "Supports fixed, self-encrypting SSD storage",
      "iOS app for quick on-screen updates",
    ],
  },

  {
    icon: Zap,
    title: "Earth Pit Tracking System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/ept-cover.png",
    tagline: "Digital management & compliance for earthing installations",
    description: `<p>Digital management system for earthing installations with compliance tracking and testing workflows.</p>`,
    benefits: [
      "Operational efficiency with digital records",
      "Improved safety & compliance with regular testing",
      "Field technician enablement with mobile data capture",
      "Data integrity & traceability with audit trails",
      "Scalable for single or multi-location setups",
      "Integration ready with SAP, CMMS, or asset systems",
    ],
  },

  {
    icon: Factory,
    title: "Furnace Raw-Material Weight Capture with ERP Integration",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/frm-cover.png",
    tagline: "Automated raw material weighment for furnace charging",
    description: `<p>Automated raw material weight capture for furnace operations with real-time ERP integration.</p>`,
    benefits: [
      "Improved accuracy eliminating manual entry",
      "Process automation streamlining material feeding",
      "Real-time consumption updates in ERP",
      "Increased accountability with traceability",
      "Operational efficiency reducing wait times",
      "System compatibility with wide range of scales & ERPs",
    ],
  },

  {
    icon: Factory,
    title: "Production Capture to Storage & Despatch Management",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/pcsm-cover.png",
    tagline: "End-to-end production, storage & dispatch automation",
    description: `<p>End-to-end production tracking, storage management, and dispatch automation system.</p>`,
    benefits: [
      "Real-time production tracking",
      "Seamless storage & AI-driven inventory management",
      "Comprehensive order management",
      "Optimized operations management",
      "Integration with weighing scale & weighbridge",
      "Quality assurance & traceability",
      "End-to-end ERP integration",
      "Real-time alerts & notifications",
      "Dispatch order & route planning",
      "Fuel dispensing & GPS integration",
    ],
  },

  {
    icon: Warehouse,
    title: "Stores & Inventory Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/sim-cover.png",
    tagline: "Barcode-based inventory tracking with AI-driven space optimization",
    description: `<p>Barcode-based inventory management with AI-driven space optimization and ERP integration.</p>`,
    benefits: [
      "Unique barcode tagging for accurate identification",
      "AI-driven space utilization",
      "Data-driven picking & loading (FIFO/LIFO)",
      "Eliminates manual entry errors",
      "Improved inventory accuracy",
      "Efficient handling of diverse materials",
      "Faster operations with handheld terminals",
      "Centralized monitoring with comprehensive MIS",
      "Full lifecycle management",
      "Seamless ERP integration",
    ],
  },

  {
    icon: Barcode,
    title: "FG Sheets Packaging & Weighing Scale Integration",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/fgsp-cover.png",
    tagline: "Automated packaging & weighing for finished goods sheets",
    description: `<p>Automated packaging and weighing system for finished goods with barcode labeling and ERP sync.</p>`,
    benefits: [
      "Eliminates manual data entry errors",
      "Improves traceability with barcode stickers",
      "Real-time synchronization with Oracle ERP",
      "Reduces spreadsheet dependency",
      "Streamlines workflow with handheld terminals",
      "Supports customizable packing patterns",
      "Enhances productivity reducing paperwork",
      "Enables precise weight-based reporting",
      "Improves packing accuracy",
      "Boosts operational efficiency",
    ],
  },

  {
    icon: Cog,
    title: "Electric Motor Movement & Storage Tracking System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/emm-cover.png",
    tagline: "RFID & barcode-based motor lifecycle tracking",
    description: `<p>RFID and barcode-based tracking system for electric motor lifecycle management.</p>`,
    benefits: [
      "End-to-end traceability",
      "Real-time movement monitoring via RFID",
      "Error-free storage allocation",
      "Purpose-driven movement logging",
      "Inventory accuracy with digital records",
      "Auditable records with timestamps",
      "Operational efficiency",
      "Security integration with buzzer alerts",
    ],
  },

  {
    icon: Barcode,
    title: "WIP Tracking of HM Coil",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/wip-cover.png",
    tagline: "Barcode-based work-in-progress tracking for hot metal coils",
    description: `<p>Barcode-based work-in-progress tracking system for hot metal coils with real-time visibility.</p>`,
    benefits: [
      "Real-time traceability",
      "Improved inventory accuracy",
      "Efficient operations with scanning",
      "Process accountability",
      "Seamless documentation",
      "Flexible & scalable with ERP integration",
    ],
  },

  {
    icon: Truck,
    title: "Weighbridge Management System - Manual/IPC Integrated/ANPR/RFID",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/aluminium/wbms-cover.png",
    tagline: "Automated, fraud-proof weighbridge operations with ANPR & camera integration",
    description: `<p>Automated weighbridge system with ANPR, camera integration, and fraud prevention capabilities.</p>`,
    benefits: [
      "Enhanced accuracy & reduced fraud",
      "Increased operational efficiency",
      "Enhanced security & traceability",
      "Improved data integration & centralization",
      "Flexibility & customization for diverse needs",
      "Enhanced user experience",
      "Long-term cost savings",
      "ANPR-based vehicle detection",
      "Email/WhatsApp integration",
      "Customizable MIS reports",
    ],
  },
];

const Aluminium = () => <SolutionTemplate industry="Aluminium" extraItems={aluminium_items} />;

export default Aluminium;
