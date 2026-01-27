import SolutionTemplate from "./SolutionTemplate";
import {
	Monitor,      // For Digital Signage
	FileText,     // For Estimate Management
	Clock,        // For Payroll Integration
	Printer,      // For Printing & Label Management
	Factory,      // For Production Capture
	Shield,       // For Re-verification
	Warehouse,    // For Stores & Inventory
	Truck,        // For Weighbridge/ANPR
} from "lucide-react";

export const pharma_items = [
	{
		icon: Monitor,
		title: "Digital Signage (In-facility)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/es-cover.png",
		tagline: "Centralized CMS for safety, KPIs and announcements",
		description: `<p>Centralized content management for in-facility digital displays and dashboards.</p>`,
		benefits: [
			"Central playlist & per-screen scheduling",
			"Live KPI widgets and alerts",
			"Remote health checks & rollback",
			"Role-based access & audit trails",
			"Playback analytics",
		],
	},

	{
		icon: FileText,
		title: "Estimate Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/ds-cover.png",
		tagline: "Estimates, quotations and pre-order processing",
		description: `<p>System for managing estimates, quotations, and pre-order processing with CRM/ERP integration.</p>`,
		benefits: [
			"Configurable estimate templates & pricing rules",
			"Link estimates to BOM and orders",
			"CRM/ERP integration for validation",
			"Exportable docs and versioning",
			"Approval audit trails",
		],
	},

	{
		icon: Clock,
		title: "Payroll Software Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/rms-cover.png",
		tagline: "Secure payroll connectors and exports",
		description: `<p>Secure connectors and export formats for attendance and payroll data synchronization.</p>`,
		benefits: [
			"Secure payroll connectors",
			"Attendance to payroll mapping",
			"Validation & reconciliation reports",
			"Scheduled/manual export modes",
			"Data privacy controls",
		],
	},

	{
		icon: Printer,
		title: "Printing & Label Management (GS1)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/plm-cover.png",
		tagline: "GS1-compliant barcode printing for secondary/tertiary packaging",
		description: `<p>GS1-compliant barcode and label generation system for pharmaceutical packaging.</p>`,
		benefits: [
			"GS1 template support and dynamic mapping",
			"SSCC/serial generation and queuing",
			"Printer integration and validation",
			"Traceability linking labels to batches",
			"Print audit trails",
		],
	},

	{
		icon: Factory,
		title: "Production Capture to Storage & Despatch Management",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/pcsm-cover.png",
		tagline: "Auto-receipt, QC clearance and despatch orchestration",
		description: `<p>End-to-end production tracking, storage management, and dispatch automation with QC workflows.</p>`,
		benefits: [
			"Auto-receipt with QC hold/release",
			"Slotting and cold-chain flags",
			"Batch allocation and pick/pack rules",
			"Labeling and carrier integration",
			"Yield and despatch reporting",
		],
	},

	{
		icon: Shield,
		title: "Re-verification & Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/rms-cover.png",
		tagline: "Scheduled re-verification and compliance workflows",
		description: `<p>Scheduled re-verification and compliance management for critical products and equipment.</p>`,
		benefits: [
			"Re-verification schedules and mobile checklists",
			"Non-conformance and corrective-action tracking",
			"Offline capture and secure sync",
			"Certification and expiry alerts",
		],
	},

	{
		icon: Warehouse,
		title: "Stores & Inventory Management (Pharma)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/sim-cover.png",
		tagline: "Lot/expiry-aware stores for pharmaceuticals",
		description: `<p>Pharmaceutical inventory management with strict lot/expiry control and FIFO/FEFO handling.</p>`,
		benefits: [
			"Batch/lot & expiry tracking (FIFO/FEFO)",
			"Quarantine and returns workflows",
			"Cycle counts and reconciliation",
			"Cold-chain flags and restricted access",
			"QC & ERP integration",
		],
	},

	{
		icon: Truck,
		title: "Weighbridge / ANPR Integration",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/pharma%26healthcare/wbi-cover.png",
		tagline: "Weighbridge and gate automation with ANPR/RFID",
		description: `<p>Weighbridge and gate automation system with ANPR/RFID for secure yard handling.</p>`,
		benefits: [
			"Secure gross/tare/net capture",
			"ANPR-driven identification & gate flows",
			"RFID for container identification",
			"WMS/ERP manifest reconciliation",
			"Dwell-time and throughput reports",
		],
	},
];

const PharmaHealthcare = () => <SolutionTemplate industry="Pharma & Healthcare" extraItems={pharma_items} />;

export default PharmaHealthcare;
