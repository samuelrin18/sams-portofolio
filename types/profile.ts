export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: string;
}
export interface Profile {
  fullName: string;
  headline: string;
  bio: string;
  email: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
  phoneNo: string;

}
