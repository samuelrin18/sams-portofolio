// import { experiencesData } from '@/data/experiences';
// import { unstable_cache } from 'next/cache';

import { supabase } from '@/lib/supabase';
import { Experience } from '@/types/experiences';

export class ExperienceRepository {
  static async findAll(): Promise<Experience[]> {
    'use cache'; // <-- Tambahkan baris ini agar hasil kueri di-cache saat prerendering

    const { data, error } = await supabase
      .from('experiences')
      .select('role, company, period, description, responsibilities, technologies')
      .order('sort_order', { ascending: false });

    if (error) {
      console.error('Error fetching experiences:', error.message);
      return [];
    }

    return data as Experience[];
  }
}