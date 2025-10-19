/*
  # Create inquiries table for candle business

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `event_date` (text) - Date of the event
      - `event_type` (text) - Type of event (wedding, birthday, etc.)
      - `package_type` (text) - Selected package (Floor, Semi, or Custom)
      - `quantity` (text) - Number of candles requested
      - `colors` (text array) - Selected candle colors
      - `message` (text, optional) - Additional message or notes
      - `created_at` (timestamptz) - When the inquiry was submitted

  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for public to insert inquiries (form submissions)
    - Add policy for authenticated users to view all inquiries (admin access)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date text NOT NULL,
  event_type text NOT NULL,
  package_type text NOT NULL,
  quantity text NOT NULL,
  colors text[] NOT NULL,
  message text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view specific inquiry"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);
