import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mnvuvcboiuwpzvklcaba.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1udnV2Y2JvaXV3cHp2a2xjYWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDgwNjQsImV4cCI6MjA1NzM4NDA2NH0.m5burzlDOyPTNXdCUmCNNOQnawMKPlT7HX6yevf2ysk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
