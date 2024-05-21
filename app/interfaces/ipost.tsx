interface Post {
    postid: string;
    owner_username: string;
    profile_pic_url: string;
    post_pic_url: string;
    caption?: string;
    likes?: number;
    comments?: Comment[];
    timestamp?: Date;
    location?: string;
  }