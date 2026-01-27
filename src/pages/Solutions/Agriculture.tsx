import SolutionTemplate from "./SolutionTemplate";
import {
	Factory,      // For Production systems
	Package,      // For Carton Packing
	Warehouse,    // For WMS
	Truck,        // For Weighbridge
	Shield,       // For Asset Management
	Clock,        // For Attendance Management
} from "lucide-react";

export const agriculture_items = [
	{
		icon: Factory,
		title: "Production Capture to Storage & Despatch Management",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/agriculture/pcsm-cover.png",
		tagline: "End-to-end capture of production output through dispatch",
		description: `<p>End-to-end production tracking, storage management, and dispatch automation system.</p>`,
		benefits: [
			"Production-line capture with batch/weight/quality",
			"Automated receipts with quality hold workflows",
			"Allocation & reservation for despatch",
			"Dispatch manifest and consignment generation",
			"Throughput and despatch accuracy reporting",
		],
	},

	{
		icon: Package,
		title: "Secondary & Tertiary Carton Packing and Barcode Sticker Printing",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/agriculture/stcp-cover.png",
		tagline: "Carton packing with automated barcode/QR sticker printing",
		description: `<p>Automated carton packing solution with barcode label generation and verification.</p>`,
		benefits: [
			"Configurable carton & pallet patterns",
			"Automated barcode/QR printing",
			"Pack verification and weight checks",
			"WMS & manifest integration",
			"Audit trails for packing and rework",
		],
	},

	{
		icon: Warehouse,
		title: "Warehouse Management System - Fertilizers, Seeds & Pesticides",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/agriculture/wms-cover.png",
		tagline: "WMS tailored for agri-inputs with segregation and compliance",
		description: `<p>Specialized WMS for agricultural inputs with hazardous material handling and compliance controls.</p>`,
		benefits: [
			"Segregated bin/slot management",
			"Batch/lot expiry & shelf-life handling",
			"Quarantine & restricted material workflows",
			"Regulatory documentation for dispatch",
			"Stock ageing and spoilage KPIs",
		],
	},

	{
		icon: Truck,
		title: "Weighbridge Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/agriculture/wbms-cover.png",
		tagline: "Vehicle weighing and verification with ANPR/RFID options",
		description: `<p>Automated weighbridge system with ANPR, RFID, and fraud prevention capabilities.</p>`,
		benefits: [
			"Gross/tare/net weighing with operator auth",
			"ANPR & RFID vehicle/pallet identification",
			"WMS/ERP reconciliation and billing",
			"Time-stamped manifests and audit logs",
			"Throughput and dwell-time reporting",
		],
	},

	{
		icon: Shield,
		title: "Asset Verification, Re-verification & Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/agriculture/avms-cover.png",
		tagline: "Asset lifecycle and verification for farm and warehouse equipment",
		description: `<p>Asset lifecycle management with barcode/RFID tagging and scheduled verification workflows.</p>`,
		benefits: [
			"Asset tagging and mobile verification",
			"Scheduled re-verification workflows",
			"Maintenance & calibration histories",
			"Transfer and disposal audit records",
			"Utilization and compliance reporting",
		],
	},

	{
		icon: Clock,
		title: "Employee Attendance Management (ERP/Payroll Integration)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/agriculture/eam-cover.png",
		tagline: "Workforce attendance, rostering and payroll connectors",
		description: `<p>Workforce attendance and roster management with payroll/ERP integration.</p>`,
		benefits: [
			"Multi-modal attendance capture",
			"Shift rostering and overtime handling",
			"Payroll and HRIS integration",
			"Exception workflows and approvals",
			"Attendance analytics and compliance",
		],
	},
];

const Agriculture = () => <SolutionTemplate industry="Agriculture" extraItems={agriculture_items} />;

export default Agriculture;
