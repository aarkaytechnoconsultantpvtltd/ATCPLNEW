import SolutionTemplate from "./SolutionTemplate";
import {
	Warehouse,    // For WMS
	Tag,          // For Electronic Shelf Labelling
	Truck,        // For Weighbridge
	Monitor,      // For Digital Signage
	Package,      // For Asset Management
	Clock,        // For Attendance Management
} from "lucide-react";

export const retail_items = [
	{
		icon: Warehouse,
		title: "Warehouse Management System - CFA's / Distributors & Wholesalers",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/retail%26distribution/wms-cover.png",
		tagline: "Warehouse & distribution management for CFAs, distributors and wholesalers",
		description: `<p>Warehouse and distribution management for high-volume inventory and order fulfillment.</p>`,
		benefits: [
			"Multi-node inventory visibility",
			"Order allocation & batch reservation",
			"Returns and reverse logistics handling",
			"Dock/yard scheduling and manifesting",
			"Fill-rate, lead-time and ageing KPIs",
		],
	},

	{
		icon: Tag,
		title: "Electronic Shelf Labelling (ESL) Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/retail%26distribution/esl-cover.png",
		tagline: "Real-time shelf labels and promotional management",
		description: `<p>Centralized ESL system for real-time price tag and promotional management.</p>`,
		benefits: [
			"Wireless price & promo updates",
			"Scheduled group pricing with rollback",
			"POS/ERP integration for price consistency",
			"Battery & health monitoring",
			"Multi-currency/promotional rules support",
		],
	},

	{
		icon: Truck,
		title: "Weighbridge Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/retail%26distribution/wbms-cover.png",
		tagline: "Vehicle weighing and manifest reconciliation",
		description: `<p>Vehicle weighing and manifest reconciliation with ANPR and RFID support.</p>`,
		benefits: [
			"Gross/tare/net weighing modes",
			"ANPR-driven vehicle workflows",
			"RFID for fast identification",
			"ERP/WMS manifest reconciliation",
			"Weighbridge logs and anomaly reports",
		],
	},

	{
		icon: Monitor,
		title: "Centralized Content Management - Digital Signage",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/retail%26distribution/ds-cover.png",
		tagline: "Digital signage for retail stores and campaigns",
		description: `<p>Central CMS for managing digital signage across retail stores and campaigns.</p>`,
		benefits: [
			"Playlists, zone layouts & scheduling",
			"Remote player health monitoring",
			"Dynamic data widget support",
			"Role-based access and audits",
			"Content engagement analytics",
		],
	},

	{
		icon: Package,
		title: "Asset Verification, Re-verification & Management System",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/retail%26distribution/avms-cover.png",
		tagline: "Asset lifecycle management for retail infrastructure",
		description: `<p>Asset lifecycle management with verification workflows for retail infrastructure.</p>`,
		benefits: [
			"Asset tagging & location tracking",
			"Scheduled & ad-hoc verification",
			"Maintenance & calibration records",
			"Discrepancy reporting and approvals",
			"Audit-ready verification logs",
		],
	},

	{
		icon: Clock,
		title: "Employee Attendance Management (ERP/Payroll Integration)",
		coverImage: "https://atcpl-files.s3.ap-south-1.amazonaws.com/industry/retail%26distribution/eam-cover.png",
		tagline: "Workforce timekeeping with payroll connectors",
		description: `<p>Workforce attendance and time tracking system with ERP and payroll integration.</p>`,
		benefits: [
			"Multi-mode attendance capture",
			"Shift rostering & overtime handling",
			"Leave management and approvals",
			"Payroll & HRIS connectors",
			"Timekeeping audit trail and analytics",
		],
	},
];

const RetailsDistribution = () => <SolutionTemplate industry="Retails & Distribution" extraItems={retail_items} />;

export default RetailsDistribution;
