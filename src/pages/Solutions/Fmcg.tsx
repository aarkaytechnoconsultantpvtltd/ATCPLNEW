import SolutionTemplate from "./SolutionTemplate";
import {
  Code2,
  Package, // For Asset Management
  Clock, // For Attendance Management
  Scale, // For Inline Checkweighing
  Monitor, // For Digital Signage
  Truck, // For Inbound & Outbound Logistics
  ShoppingCart, // For Order Booking & Management
  Warehouse, // For Storage & Despatch Management
  Store, // For Store & Inventory Management
  Search, // For Tracking & Tracing
  Cctv, // For WMS + ANPR Integration
} from "lucide-react";

export const fm_items = [
  {
    icon: Package, // Suggested: Package for physical assets
    title: "Asset Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/avms-cover.png",
    tagline: "Track and manage physical assets across locations",
    description: `<p>System for tracking and managing physical assets across locations.</p>`,
    benefits: [
      "Asset lifecycle tracking (procurement → deployment → disposal)",
      "Barcode/RFID tagging for fast identification and audits",
      "Scheduled and ad-hoc verification / re-verification workflows",
      "Asset assignment, transfer, and location history",
      "Reporting: depreciation, utilization, and compliance logs",
    ],
  },

  {
    icon: Clock, // Suggested: Clock for time/attendance
    title: "Attendance Management System",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/eam-cover.png",
    tagline: "Employee attendance capture and ERP/payroll integration",
    description: `<p>Employee attendance capture and management suite.</p>`,
    benefits: [
      "Multi-modal attendance capture: biometric, card, mobile check-in",
      "Shift and roster management with overtime calculation",
      "Integration with payroll and HR systems",
      "Leave management and exceptions handling",
      "Attendance reports, compliance exports, and audit trail",
    ],
  },

  {
    icon: Scale, // Suggested: Scale for weighing
    title: "Inline Checkweighing",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/icw-cover.png",
    tagline: "Inline checkweighing for production quality control",
    description: `<p>Inline checkweighing solution for production quality control.</p>`,
    benefits: [
      "Real-time weight verification on conveyor lines",
      "Tolerance-based accept/reject automation with reject mechanisms",
      "Calibration, traceable records, and audit logs",
      "Integration with PLC/SCADA and MES for process control",
      "Data capture for statistics, reports, and compliance",
    ],
  },

  {
    icon: Monitor, // Suggested: Monitor for display/signage
    title: "Digital Signage Solutions",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/ds-cover.png",
    tagline: "Centralized CMS for multi-location content delivery",
    description: `<p>Digital signage platform for content delivery and remote management.</p>`,
    benefits: [
      "Centralized Content Management System (CMS) for playlists and layouts",
      "Scheduling, templates, and per-screen customization",
      "Player software for remote devices with health monitoring",
      "Support for video, images, live data feeds, and web widgets",
      "Remote updates, analytics, and multi-location rollouts",
    ],
  },

  {
    icon: Truck, // Suggested: Truck for logistics/transport
    title: "Inbound & Outbound Logistics",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/iol-cover.png",
    tagline: "WMS touchpoints for inbound and outbound flows",
    description: `<p>Inbound and outbound logistics operations and WMS touchpoints.</p>`,
    benefits: [
      "Goods receiving and quality checks for inbound flows",
      "Put-away strategies and receiving-to-storage mapping",
      "Order picking, packing, and dispatch workflows for outbound",
      "Dock/slot management and shipping label generation",
      "Integration with carriers, EDI, and ERP/WMS systems",
    ],
  },

  {
    icon: ShoppingCart, // Suggested: ShoppingCart for ordering
    title: "Order Booking & Management",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/obm-cover.png",
    tagline: "Mobile/field sales and order lifecycle management",
    description: `<p>Order booking / management solution for mobile/field sales or microservices.</p>`,
    benefits: [
      "Order capture (mobile/web) with validation and price rules",
      "Real-time stock checks and reservation/allocation",
      "Customer/route management for field sales teams",
      "Order lifecycle: confirm → pick → pack → dispatch → invoice",
      "Integration hooks for invoicing, CRM, and fulfilment",
    ],
  },

  {
    icon: Warehouse, // Suggested: Warehouse for storage/despatch
    title: "Storage & Despatch Management",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/sdm-cover.png",
    tagline: "Warehouse storage strategies and despatch processes",
    description: `<p>Warehouse storage strategies and despatch processes.</p>`,
    benefits: [
      "Storage optimization (slotting, FIFO/LIFO, shelf-life handling)",
      "Picking techniques (batch, wave, zone) and packing rules",
      "Dispatch planning, carrier selection, and manifest creation",
      "Yard and dock scheduling for smooth handoffs",
      "KPIs: throughput, on-time dispatch, and shrinkage monitoring",
    ],
  },

  {
    icon: Store, // Suggested: Store for store-level inventory
    title: "Store & Inventory Management",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/sim-cover.png",
    tagline: "Store-level inventory and replenishment",
    description: `<p>Store-level inventory management and replenishment.</p>`,
    benefits: [
      "Stock counts, cycle counting, and variance reconciliation",
      "Reorder points, safety stock, and replenishment triggers",
      "Shelf management and expiry / batch tracking",
      "Transfer requests between stores and central warehouses",
      "Mobile scanning workflows and snapshot inventory reports",
    ],
  },

  {
    icon: Search, // Suggested: Search for tracking/tracing
    title: "Tracking & Tracing",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/tnt-cover.png",
    tagline: "Product traceability across the supply chain",
    description: `<p>Product tracking & traceability across the supply chain.</p>`,
    benefits: [
      "Batch/lot and serial-level traceability for provenance",
      "Record chain-of-custody for each movement and transformation",
      "Recall workflows and reverse logistics processes",
      "Data capture for compliance (regulatory labeling, timestamps)",
      "Integration with barcodes, QR codes, and serialization systems",
    ],
  },

  {
    icon: Cctv, // Suggested: Cctv for ANPR/security
    title: "WMS + ANPR Integration",
    coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/fmcg/wms-anpr-cover.png",
    tagline: "Yard and gate automation with ANPR",
    description: `<p>WMS integration with ANPR for yard and gate automation.</p>`,
    benefits: [
      "Automatic vehicle identification using ANPR cameras at gates",
      "Vehicle scheduling, check-in/out, and dwell-time tracking",
      "Gate automation tied to WMS shipping/receiving workflows",
      "Security logs, time-stamped entry/exit records, and alerts",
      "Integration for automated document checks and driver notifications",
    ],
  },
];

const Fmcg = () => <SolutionTemplate industry="FMCG" extraItems={fm_items} />;

export default Fmcg;
