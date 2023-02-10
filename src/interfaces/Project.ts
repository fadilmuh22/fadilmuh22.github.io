export interface ProjectInterface {
  id: number;
  uuid: string;
  name: string;
  photo: string;
  description: string;
  role: string;
  techs?: string;
  start_date: Date;
  end_date: Date;
  additional: null;
  created_at: Date;
}
