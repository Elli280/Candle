import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  eventDate: text("event_date").notNull(),
  eventType: text("event_type").notNull(),
  packageType: text("package_type").notNull(),
  quantity: text("quantity").notNull(),
  colors: text("colors").array().notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  eventDate: z.string().min(1, "Please select an event date"),
  eventType: z.string().min(1, "Please select an event type"),
  packageType: z.string().min(1, "Please select a package type"),
  quantity: z.string().min(1, "Please specify quantity"),
  colors: z.array(z.string()).min(1, "Please select at least one color"),
  message: z.string().optional(),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

// Package definitions
export const floorPackages = [
  { quantity: "Under 50", price: 23, unit: "per candle", popular: false },
  { quantity: "50", price: 1150, unit: "total", popular: false },
  { quantity: "75", price: 1575, unit: "total", popular: true },
  { quantity: "100", price: 1850, unit: "total", popular: false },
  { quantity: "200", price: 2400, unit: "total", popular: false },
  { quantity: "250", price: 3500, unit: "total", popular: false },
  { quantity: "300", price: 4200, unit: "total", popular: false },
];

export const semiPackages = [
  { quantity: "Under 20", price: 17, unit: "per candle", popular: false },
  { quantity: "20", price: 300, unit: "total", popular: false },
  { quantity: "30", price: 450, unit: "total", popular: false },
  { quantity: "50", price: 625, unit: "total", popular: true },
  { quantity: "60", price: 875, unit: "total", popular: false },
  { quantity: "80", price: 1250, unit: "total", popular: false },
  { quantity: "100", price: 1800, unit: "total", popular: false },
];

// Candle colors with French names
export const candleColors = [
  { english: "White", french: "Blanche", hex: "#FDFCFA" },
  { english: "Nude Sand", french: "Sable", hex: "#E8DCCF" },
  { english: "Pink", french: "Rose Pêche", hex: "#F7C5CC" },
  { english: "Lilac", french: "Lilas", hex: "#C8A2D0" },
  { english: "Lavender", french: "Mauve", hex: "#B39DDB" },
  { english: "Sky Blue", french: "Bleu Ciel", hex: "#87CEEB" },
  { english: "Green", french: "Vert", hex: "#A4D4AE" },
  { english: "Barbie Pink", french: "Bon Bon", hex: "#FF69B4" },
  { english: "Yellow", french: "Beurre", hex: "#F9E79F" },
  { english: "Black", french: "Noir", hex: "#2C2C2C" },
  { english: "Red", french: "Vermeil", hex: "#C83F49" },
  { english: "Mint", french: "Eau", hex: "#B2E0D9" },
  { english: "Dusty Rose", french: "Ash Rose", hex: "#DCAE96" },
  { english: "Blush", french: "Rougir Rose", hex: "#FAD4D8" },
  { english: "Christmas Green", french: "Sapin", hex: "#2F5233" },
  { english: "Baby Blue", french: "Layette", hex: "#A8D8EA" },
  { english: "Orange", french: "Abricot", hex: "#FFB347" },
];
