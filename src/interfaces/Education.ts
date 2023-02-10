export interface EducationInterface {
  id: number;
  name: string;
  major: string;
  photo: string;
  skills?: string;
  location: string;
  start_date: Date;
  end_date: Date;
  updated_at: Date;
}
