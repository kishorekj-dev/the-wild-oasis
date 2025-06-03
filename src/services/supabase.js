import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nfajhrofmdqwqkqbnaej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mYWpocm9mbWRxd3FrcWJuYWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MzMzMjksImV4cCI6MjA2MjIwOTMyOX0.wLS7wKr4UUZnX9tESbEsHzMOPbP1AVYbYfZH2fm3vTk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
