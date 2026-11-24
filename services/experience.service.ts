import { ExperienceRepository } from '@/repositories/experience.repository';
import { Experience } from '@/types/experiences';

export class ExperienceService {
  private repo = new ExperienceRepository();

  async getExperiences(): Promise<Experience[]> {
    return await ExperienceRepository.findAll();

    // const data = await this.repo.findAll();
    // // Contoh business logic: bisa ditambahkan filter atau sorting di sini
    // return data;
  }
}
