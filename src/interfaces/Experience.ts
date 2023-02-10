export interface ExperienceInterface {
  id: number;
  uuid: string;
  name: string;
  photo: string;
  description: string;
  location: string;
  start_date: Date;
  end_date: Date;
  additional: null;
  updated_at: Date;
  company_name: string;
  techs?: string;
}
