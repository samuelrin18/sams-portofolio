import { supabase } from '@/lib/supabase';
import { Technicalskill } from '@/types/technicalskill';

export class SkillRepository {
  static async findAll(): Promise<Technicalskill[]> {
    'use cache';

    const { data, error } = await supabase
      .from('skills')
      .select('category, items')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching skills:', error.message);
      return [];
    }

    return data as Technicalskill[];
  }
}
