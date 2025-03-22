
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
