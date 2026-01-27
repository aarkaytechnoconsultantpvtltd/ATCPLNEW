import SolutionTemplate from "./SolutionTemplate";
import {
	Package,      // For Asset Management
	Monitor,      // For Digital Signage
	Truck,        // For FDY Despatch
	Barcode,      // For FG Roll Tracking
	Tag,          // For Fabric Identification
	Warehouse,    // For Grey Storage, Stores & Inventory
	Settings,     // For Overhead Crane Management
	Clock,        // For Payroll Integration
	Factory,      // For Production Planning & Control
	Scale,        // For Weighbridge
	Cctv,         // For WMS + ANPR Integration
} from "lucide-react";

export const textiles_items = [
	{
		icon: Package,
		title: "Asset Verification, Re-verification & Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/avms-cover.png",
		tagline: "Periodic and ad-hoc asset verification with audit trails",
		description: `<p>Asset verification and lifecycle management system for textile manufacturing sites.</p>`,
		benefits: [
			"Periodic and ad-hoc verification workflows",
			"Re-verification schedules and audit logs",
			"Barcode/RFID tagging and mobile verification",
			"Asset lifecycle and transfer approvals",
			"Compliance and utilization reporting",
		],
	},

	{
		icon: Monitor,
		title: "Centralized Content Management System - Digital Signage",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/ds-cover.png",
		tagline: "Central CMS for multi-screen digital signage",
		description: `<p>Centralized content management for multi-screen digital signage with scheduling.</p>`,
		benefits: [
			"Playlist & layout management",
			"Scheduling and templates",
			"Remote player health monitoring",
			"Support for video and live feeds",
			"Multi-site rollout planning",
		],
	},

	{
		icon: Truck,
		title: "FDY Despatch Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/fdy-cover.png",
		tagline: "Despatch workflows for FDY shipments",
		description: `<p>Dispatch management system for Fully Drawn Yarn (FDY) shipments and workflows.</p>`,
		benefits: [
			"Order-to-despatch automation",
			"Labeling and consignment generation",
			"Carrier integrations and scheduling",
			"Gate check-in/out workflows",
			"POD capture and exception handling",
		],
	},

	{
		icon: Barcode,
		title: "FG Roll Tracking & Tracing",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/fgroll-cover.png",
		tagline: "Finished goods roll-level traceability",
		description: `<p>Roll-level tracking system for finished goods from production to dispatch.</p>`,
		benefits: [
			"Roll-level serialization and labeling",
			"Quality & inspection records",
			"Movement history and storage mapping",
			"Recall and returns traceability",
			"Yield and reject analytics",
		],
	},

	{
		icon: Tag,
		title: "Fabric Identification & Labeling (FIDL)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/fidl-cover.png",
		tagline: "Standardized fabric ID schema and labeling",
		description: `<p>Standardized fabric identification and labeling system with ERP integration.</p>`,
		benefits: [
			"Standardized fabric IDs",
			"Label printing & placement guidelines",
			"ERP SKU & batch mapping",
			"Quality and compliance fields",
			"Downstream traceability",
		],
	},

	{
		icon: Warehouse,
		title: "Grey Storage Management",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/gsm-cover.png",
		tagline: "Inbound handling and storage for greige fabric",
		description: `<p>Storage management system for grey (greige) fabric with batch tracking.</p>`,
		benefits: [
			"Receiving & grading workflows",
			"Slotting and yard-aware storage",
			"Batch/lot tracking",
			"Pick/issue records for transfers",
			"Inventory snapshots and cycle counts",
		],
	},

	{
		icon: Settings,
		title: "Overhead Crane Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/ocm-cover.png",
		tagline: "Manage crane operations, safety and maintenance",
		description: `<p>Management system for overhead crane operations with safety and maintenance tracking.</p>`,
		benefits: [
			"Crane scheduling & operator assignment",
			"Maintenance and safety interlocks",
			"Load tracking and lift history",
			"Integration with yard movements",
			"Alerts and incident reporting",
		],
	},

	{
		icon: Clock,
		title: "Payroll Software Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/psi-cover.png",
		tagline: "Sync attendance and operations data to payroll",
		description: `<p>Integration system for syncing attendance and operations data to payroll systems.</p>`,
		benefits: [
			"Attendance → payroll mapping",
			"Connectors for payroll vendors",
			"Validation and reconciliation",
			"Secure transmission and audit trails",
		],
	},

	{
		icon: Factory,
		title: "Production Capture → Storage & Despatch Management",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/pcsm-cover.png",
		tagline: "End-to-end flow from production output to despatch",
		description: `<p>End-to-end production tracking, storage management, and dispatch automation system.</p>`,
		benefits: [
			"Production-line capture into inventory",
			"Automated receipts with quality checks",
			"Allocation and despatch planning",
			"Pack/label generation",
			"Throughput and despatch KPIs",
		],
	},

	{
		icon: Factory,
		title: "Production Planning & Control Tracking",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/ppc-cover.png",
		tagline: "Planning, scheduling and shop-floor control",
		description: `<p>Production planning, scheduling, and process control system for textile manufacturing.</p>`,
		benefits: [
			"Master scheduling & capacity planning",
			"Work order routing & tracking",
			"MRP and line balancing",
			"Real-time shop-floor capture",
			"Utilization and bottleneck dashboards",
		],
	},

	{
		icon: Warehouse,
		title: "Stores & Inventory Management",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/sim-cover.png",
		tagline: "Warehouse management for raw, consumables & FG",
		description: `<p>Warehouse management for raw materials, consumables, and finished goods.</p>`,
		benefits: [
			"Receiving & put-away workflows",
			"Requisition and consumption tracking",
			"Batch/lot & expiry handling",
			"Cycle counts and audit trails",
			"Supplier returns and reconciliations",
		],
	},

	{
		icon: Cctv,
		title: "WMS + ANPR Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/wms-anpr-cover.png",
		tagline: "Yard and gate automation with ANPR",
		description: `<p>WMS integration with ANPR for gate automation and yard management.</p>`,
		benefits: [
			"ANPR-driven gate flows",
			"Link vehicle events to WMS records",
			"Dwell time and throughput analytics",
			"Secure timestamped logs",
			"Driver notifications and automation",
		],
	},

	{
		icon: Scale,
		title: "Weighbridge Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/textiles/wbms-cover.png",
		tagline: "Weighbridge modes: Manual / IPC / ANPR / RFID",
		description: `<p>Multi-mode weighbridge management for inbound and outbound operations.</p>`,
		benefits: [
			"Multiple weighbridge integration modes",
			"Automatic ticketing & consignment linking",
			"ANPR/RFID vehicle identification",
			"Integration with WMS & despatch",
		],
	},
];

const Textiles = () => <SolutionTemplate industry="Textiles" extraItems={textiles_items} />;

export default Textiles;
