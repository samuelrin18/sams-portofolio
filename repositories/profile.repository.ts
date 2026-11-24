import { supabase } from "@/lib/supabase";
import { Profile } from "@/types/profile";

export class ProfileRepository {
 static async getProfile(): Promise<Profile |null>{
    'use cache';

    const { data, error } = await supabase
      .from('profiles')
      .select(`
        id,
        fullName:full_name,
        headline,
        bio,
        email,
        location,
        resumeUrl:resume_url,
        socials,
        phoneNo: phone_no
      `)
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching profile:', error.message);
      return null;
    }

    return data as Profile;
  }

 }

