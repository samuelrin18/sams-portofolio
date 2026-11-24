import { createClient } from '@supabase/supabase-js';

// Mengambil kredensial dari file .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Mengekspor instance koneksi agar bisa dipanggil di file mana saja
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
