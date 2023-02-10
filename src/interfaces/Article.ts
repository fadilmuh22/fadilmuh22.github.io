export interface ArticleInterface {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: null;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date;
  crossposted_at: null;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: any[];
  tags: string;
  user: UserTo;
}

export interface UserTo {
  name: string;
  username: string;
  twitter_username: null;
  github_username: string;
  user_id: number;
  website_url: null;
  profile_image: string;
  profile_image_90: string;
}
