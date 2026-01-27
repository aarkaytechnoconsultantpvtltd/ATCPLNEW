import SolutionTemplate from "./SolutionTemplate";
import {
	Scale,        // For Weight Capture systems
	Factory,      // For Furnace/Production systems
	Barcode,      // For FG Sheets, WIP Tracking
	Zap,          // For Earth Pit Tracking
	Cog,          // For Electric Motor Movement
	Warehouse,    // For Stores & Inventory
	Truck,        // For Weighbridge
	Package,      // For Asset Management
	Clock,        // For Attendance Management
	Monitor,      // For Digital Signage
} from "lucide-react";

export const automobiles_items = [
	{
		icon: Scale,
		title: "Castor Roll Weight Capture with ERP Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/crwc-cover.png",
		tagline: "Inline roll weight capture and ERP sync",
		description: `<p>Automated weight capture system for castor rolls with real-time ERP integration.</p>`,
		benefits: [
			"Timestamped roll weight capture",
			"Automatic roll ID and batch linkage",
			"ERP posting for receipts and costing",
			"Calibration and tamper-evident logs",
			"Out-of-tolerance alerts and reconciliation",
		],
	},

	{
		icon: Factory,
		title: "Furnace Raw-Material Weight Capture with ERP Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/frm-cover.png",
		tagline: "Weigh capture and batch posting for furnace intake",
		description: `<p>Automated raw material weight capture for furnace operations with real-time ERP integration.</p>`,
		benefits: [
			"Operator-authenticated gross/tare/net capture",
			"Automatic batch creation for furnace feed",
			"ERP posting for consumption and costing",
			"PLC/IPC integration and interlocks",
			"Calibration and reconciliation workflows",
		],
	},

	{
		icon: Barcode,
		title: "FG Sheets Packaging & Weighing Scale Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/fgsp-cover.png",
		tagline: "Validate pack weights and print traceable labels",
		description: `<p>Automated packaging and weighing system for finished goods with barcode labeling.</p>`,
		benefits: [
			"Inline checkweighing and reject flows",
			"Carton/pallet label printing with serial info",
			"WMS integration for put-away and dispatch",
			"QC data logging and compliance",
		],
	},

	{
		icon: Barcode,
		title: "WIP Tracking of HM Coil",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/wip-cover.png",
		tagline: "Work-in-process tracking for heavy-metal coils",
		description: `<p>Barcode-based work-in-progress tracking system for hot metal coils with real-time visibility.</p>`,
		benefits: [
			"Unique coil IDs and movement history",
			"Linked weight and quality attributes",
			"MES/MRP integration for routing",
			"Rework and exception workflows",
			"Throughput and bottleneck dashboards",
		],
	},

	{
		icon: Factory,
		title: "Production Capture to Storage & Despatch Management",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/pcsm-cover.png",
		tagline: "Capture produced units, store and manage despatch",
		description: `<p>End-to-end production tracking, storage management, and dispatch automation system.</p>`,
		benefits: [
			"Auto-receipt with QC clearance",
			"Put-away and slotting for bulky items",
			"Pick/pack and palletization workflows",
			"Consignment labeling and carrier integration",
			"Yield and despatch accuracy reporting",
		],
	},

	{
		icon: Zap,
		title: "Earth Pit Tracking System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/ept-cover.png",
		tagline: "Record and audit earth pit installations and tests",
		description: `<p>Digital management system for earthing installations with compliance tracking and testing workflows.</p>`,
		benefits: [
			"Location and test record capture",
			"Scheduled retesting and reminders",
			"Mobile capture with photos and geotags",
			"Maintenance and corrective-action logs",
			"Compliance and readiness dashboards",
		],
	},

	{
		icon: Cog,
		title: "Electric Motor Movement & Storage Tracking System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/emm-cover.png",
		tagline: "Track movement, storage and service history of motors",
		description: `<p>RFID and barcode-based tracking system for electric motor lifecycle management.</p>`,
		benefits: [
			"Serial tagging and location history",
			"Transfer approvals and installation logs",
			"Work-order linked movements and maintenance",
			"Storage condition and allocation rules",
			"Utilisation and MTTR reporting",
		],
	},

	{
		icon: Warehouse,
		title: "Stores & Inventory Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/sim-cover.png",
		tagline: "Bin control and traceability for materials and spares",
		description: `<p>Barcode-based inventory management with AI-driven space optimization and ERP integration.</p>`,
		benefits: [
			"Bin/slot control and reorder rules",
			"Receipt/issue workflows with approvals",
			"Batch/lot & serial traceability",
			"Cycle counts and reconciliation",
			"Procurement and ERP integration",
		],
	},

	{
		icon: Truck,
		title: "Weighbridge Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/wbms-cover.png",
		tagline: "Vehicle weighing and yard control with ANPR/RFID",
		description: `<p>Automated weighbridge system with ANPR, camera integration, and fraud prevention capabilities.</p>`,
		benefits: [
			"Secure gross/tare/net weighing",
			"ANPR & RFID for fast identification",
			"ERP/WMS reconciliation and billing",
			"Time-stamped manifests and anomaly alerts",
			"Throughput and dwell-time metrics",
		],
	},

	{
		icon: Package,
		title: "Asset Verification, Re-verification & Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/avms-cover.png",
		tagline: "Asset lifecycle and scheduled verification for equipment",
		description: `<p>Web-based asset tracking and verification system using Barcode/RFID technology for complete lifecycle management.</p>`,
		benefits: [
			"Asset tagging and scheduled verification",
			"Calibration and maintenance histories",
			"Mobile re-verification workflows",
			"Discrepancy and transfer approvals",
			"Availability and utilization reports",
		],
	},

	{
		icon: Clock,
		title: "Employee Attendance Management (ERP/Payroll Integration)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/eam-cover.png",
		tagline: "Attendance, rostering and payroll connectors",
		description: `<p>Automated attendance and leave management system with ERP/Payroll integration and self-service kiosk.</p>`,
		benefits: [
			"Multi-modal attendance capture",
			"Shift/roster and exception handling",
			"Payroll/HR API connectors",
			"Audit trails for timekeeping",
			"Absenteeism and labour analytics",
		],
	},

	{
		icon: Monitor,
		title: "Centralized Content Management System - Digital Signage",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/automobiles/ds-cover.png",
		tagline: "In-plant displays for safety, KPIs and announcements",
		description: `<p>Ultra-reliable digital signage solution with cloud connectivity and centralized content management.</p>`,
		benefits: [
			"Playlist & layout scheduling",
			"Live OEE and KPI widgets",
			"Remote player monitoring",
			"Role-based access and approvals",
			"Playback analytics and compliance",
		],
	},
];

const Automobiles = () => <SolutionTemplate industry="Automobiles" extraItems={automobiles_items} />;

export default Automobiles;
