import { SkillRepository } from '@/repositories/technicalskill.repository';
import { Technicalskill } from '@/types/technicalskill';

export class TechnicalskillService {
  private repo = new SkillRepository();

  async getSkill(): Promise<Technicalskill[]> {
    return await SkillRepository.findAll();

    // const data = await this.repo.findAll();
    // // Contoh business logic: bisa ditambahkan filter atau sorting di sini
    // return data;
  }
}
