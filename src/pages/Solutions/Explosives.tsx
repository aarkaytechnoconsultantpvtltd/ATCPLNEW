// src/pages/Solutions/Explosives.tsx

import SolutionTemplate from "./SolutionTemplate";
import {
  Search,       // For Track n Trace
  Printer,      // For Print systems
  Package,      // For Packaging & Rejection
  FileText,     // For Online Post Printing
  Warehouse,    // For Storage & Inventory
  Truck,        // For Weighbridge
  Shield,       // For Asset Management
  Clock,        // For Attendance Management
  Monitor,      // For Digital Signage
  AlertTriangle,// For Explosives Inward/Storage
} from "lucide-react";

export const explosives_items = [
  {
    icon: Search,
    title: "Aarkay Explo - Track n Trace (SETT compliant)",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/tnt-cover.png",
    tagline: "End-to-end ERP for explosive materials with SETT compliance",
    description: `<p>SETT-compliant ERP system for explosive materials with complete chain-of-custody tracking.</p>`,
    benefits: [
      "Batch/lot and serial-level production capture",
      "Chain-of-custody and full traceability",
      "SETT-compliant audit logs and reporting",
      "Integrations: WMS, weighbridge, ANPR/RFID",
      "Recall & investigation workflows",
    ],
  },

  {
    icon: Printer,
    title: "Aarkay Explo Print (L3 Post Printing & Scanning)",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/aep-cover.png",
    tagline: "Inline printing & scanning for explosive formulations",
    description: `<p>High-speed inline printing and scanning system for explosive product identification.</p>`,
    benefits: [
      "High-speed label printing & inline scanning",
      "OCR/image capture for verification",
      "Formulation-specific print handling",
      "Integration with rejection & packaging systems",
      "Real-time print/scan event logging",
    ],
  },

  {
    icon: Package,
    title: "Packaging & Rejection SPM (L3 Online Post Printing, Packaging & Rejection)",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/prspm-cover.png",
    tagline: "Automated packaging, inspection and reject control",
    description: `<p>Automated packaging system with inline inspection and reject control mechanisms.</p>`,
    benefits: [
      "Configurable pack & seal recipes",
      "Inline reject mechanisms linked to inspection",
      "Single-piece traceability",
      "Rework/quarantine flows and exception reports",
      "MES/WMS data feeds for compliance evidence",
    ],
  },

  {
    icon: FileText,
    title: "L3 Online Post Printing System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/l3op-cover.png",
    tagline: "Core printing system for product identification post-production",
    description: `<p>Core online printing system for product identification and marking post-production.</p>`,
    benefits: [
      "Print templates & synchronized scanning",
      "Error handling and retry workflows",
      "Integration with label printers and PLCs",
    ],
  },

  {
    icon: AlertTriangle,
    title: "Explosives Inward, Storage, Dispatch & Consumption Management",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/escms-cover.png",
    tagline: "Secure inbound, storage and consumption tracking",
    description: `<p>Secure tracking system for explosive materials with strict access and custody controls.</p>`,
    benefits: [
      "Controlled receipts and quality checks",
      "Secure storage & segregation rules",
      "Authorized issue and custody transfer",
      "Consumption logs linked to production",
      "Compliance and incident reporting",
    ],
  },

  {
    icon: Truck,
    title: "Weighbridge Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/wbms-cover.png",
    tagline: "Manual/IPC/ANPR/RFID vehicle & weight capture",
    description: `<p>Multi-mode weighbridge system with ANPR automation and security logging.</p>`,
    benefits: [
      "Gross/tare/net capture modes",
      "ANPR-driven gate automation",
      "RFID vehicle/container identification",
      "WMS/ERP shipment reconciliation",
      "Dwell-time and security logs",
    ],
  },

  {
    icon: Warehouse,
    title: "Stores & Inventory Management",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/sim-cover.png",
    tagline: "Tight inventory controls for explosive materials",
    description: `<p>Inventory management system with strict controls for explosive raw materials.</p>`,
    benefits: [
      "Bin/slot and batch tracking",
      "Receipt & issue workflows with approvals",
      "Cycle counts and reconciliation",
      "Expiry and restricted handling",
      "Audit-ready reporting",
    ],
  },

  {
    icon: Shield,
    title: "Asset Verification, Re-verification & Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/avms-cover.png",
    tagline: "Asset lifecycle & verification for explosive sites",
    description: `<p>Asset lifecycle management with compliance checks for explosive-handling sites.</p>`,
    benefits: [
      "Asset tagging and scheduled verification",
      "Assignment & maintenance history",
      "Calibration & compliance records",
      "Mobile verification and audit reports",
    ],
  },

  {
    icon: Clock,
    title: "Employee Attendance Management (with Payroll Integration)",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/eam-cover.png",
    tagline: "Workforce capture and payroll integration",
    description: `<p>Attendance capture and workforce management with payroll system integration.</p>`,
    benefits: [
      "Multi-modal attendance capture",
      "Overtime & leave workflows",
      "Payroll/ERP connectors",
      "Timekeeping audit trail",
    ],
  },

  {
    icon: Monitor,
    title: "Centralized Content Management System - Digital Signage",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/explosives/ds-cover.png",
    tagline: "Central CMS for site displays and safety dashboards",
    description: `<p>Centralized content management for digital displays across explosive sites.</p>`,
    benefits: [
      "Playlists, scheduling & templates",
      "Remote player health monitoring",
      "Support for video and live data widgets",
      "Multi-site rollout and access control",
    ],
  },
];

const Explosives = () => (
  <SolutionTemplate industry="Explosives" extraItems={explosives_items} />
);

export default Explosives;
