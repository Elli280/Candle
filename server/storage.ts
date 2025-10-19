import { type Inquiry, type InsertInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getInquiryById(id: string): Promise<Inquiry | undefined>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<string, Inquiry>;

  constructor() {
    this.inquiries = new Map();
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getInquiryById(id: string): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }
}

export const storage = new MemStorage();
