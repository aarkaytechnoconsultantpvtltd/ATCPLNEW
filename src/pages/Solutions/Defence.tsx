import SolutionTemplate from "./SolutionTemplate";
import {
	MapPin,       // For Military Convoy Tracking
	Flame,        // For Fire Fighting Equipment
	Truck,        // For Weighbridge
	Warehouse,    // For Stores & Inventory
	Shield,       // For Asset Management
} from "lucide-react";

export const defence_items = [
	{
		icon: MapPin,
		title: "Military Convoy Tracking Solution",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/defence/mcts-cover.png",
		tagline: "Real-time tracking and coordination for secure convoy movement",
		description: `<p>GPS-based convoy tracking system with encrypted communications and dynamic routing.</p>`,
		benefits: [
			"Encrypted GPS-based tracking",
			"Route planning and geofencing",
			"Convoy formation and role management",
			"Real-time alerts and incident response",
			"ANPR/RFID integration for entry/exit logs",
		],
	},

	{
		icon: Flame,
		title: "Fire Fighting Equipment Audit Data Capture",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/defence/ffe-cover.png",
		tagline: "Field-capable audits and maintenance tracking",
		description: `<p>Mobile audit system for firefighting equipment inspection and maintenance tracking.</p>`,
		benefits: [
			"Mobile audit data capture",
			"Scheduled reminders and defect logging",
			"Maintenance & calibration history",
			"Offline-first with sync",
			"Compliance reporting and SLA dashboards",
		],
	},

	{
		icon: Truck,
		title: "Weighbridge Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/defence/wbms-cover.png",
		tagline: "Secure weighbridge for defence yards (Manual/IPC/ANPR/RFID)",
		description: `<p>Secure weighbridge solution with ANPR, RFID, and tamper-proof audit trails.</p>`,
		benefits: [
			"Operator-authenticated gross/tare/net capture",
			"ANPR/RFID automated vehicle identification",
			"Logistics & inventory reconciliation",
			"Time-stamped manifests and audit trails",
			"Anomaly alerts and throughput metrics",
		],
	},

	{
		icon: Warehouse,
		title: "Stores & Inventory Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/defence/sim-cover.png",
		tagline: "Secure stores for defence supply-chain materials",
		description: `<p>Secure inventory system with strict access controls and batch/serial traceability.</p>`,
		benefits: [
			"Bin/slot and batch/serial traceability",
			"RBAC approvals for receipt/issue",
			"Quarantine and controlled-item workflows",
			"Cycle counts and reconciliation",
			"Integration with maintenance and work orders",
		],
	},

	{
		icon: Shield,
		title: "Asset Verification, Re-verification & Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/defence/avms-cover.png",
		tagline: "Asset lifecycle and audit-ready verification for defence equipment",
		description: `<p>Asset lifecycle management with scheduled verification and audit-ready reporting.</p>`,
		benefits: [
			"Asset tagging and assignment history",
			"Scheduled verification & re-verification",
			"Calibration and certification records",
			"Discrepancy and transfer workflows",
			"Readiness and compliance reporting",
		],
	},
];

const Defence = () => <SolutionTemplate industry="Defence" extraItems={defence_items} />;

export default Defence;
