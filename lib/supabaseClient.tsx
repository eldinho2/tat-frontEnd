import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string,
  {
    auth: {
      persistSession: true,
      storageKey: "tat",
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    flowType: "pkce",
  },
});
