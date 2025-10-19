import { type Inquiry, type InsertInquiry } from "@shared/schema";
import { createClient } from "@supabase/supabase-js";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getInquiryById(id: string): Promise<Inquiry | undefined>;
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || "";
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

export class SupabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const { data, error } = await supabase
      .from("inquiries")
      .insert({
        name: insertInquiry.name,
        email: insertInquiry.email,
        phone: insertInquiry.phone,
        event_date: insertInquiry.eventDate,
        event_type: insertInquiry.eventType,
        package_type: insertInquiry.packageType,
        quantity: insertInquiry.quantity,
        colors: insertInquiry.colors,
        message: insertInquiry.message,
      })
      .select()
      .single();

    if (error) throw error;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      eventDate: data.event_date,
      eventType: data.event_type,
      packageType: data.package_type,
      quantity: data.quantity,
      colors: data.colors,
      message: data.message,
      createdAt: new Date(data.created_at),
    };
  }

  async getInquiries(): Promise<Inquiry[]> {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data.map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      eventDate: row.event_date,
      eventType: row.event_type,
      packageType: row.package_type,
      quantity: row.quantity,
      colors: row.colors,
      message: row.message,
      createdAt: new Date(row.created_at),
    }));
  }

  async getInquiryById(id: string): Promise<Inquiry | undefined> {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    if (!data) return undefined;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      eventDate: data.event_date,
      eventType: data.event_type,
      packageType: data.package_type,
      quantity: data.quantity,
      colors: data.colors,
      message: data.message,
      createdAt: new Date(data.created_at),
    };
  }
}

export const storage = new SupabaseStorage();
