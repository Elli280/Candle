import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create inquiry" });
      }
    }
  });

  app.get("/api/inquiries", async (_req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  app.get("/api/inquiries/:id", async (req, res) => {
    try {
      const inquiry = await storage.getInquiryById(req.params.id);
      if (!inquiry) {
        res.status(404).json({ error: "Inquiry not found" });
        return;
      }
      res.json(inquiry);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiry" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
