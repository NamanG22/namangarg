export interface Feedback {
  isLike: boolean;
  message: string;
  timestamp: Date;
}

export interface FeedbackStats {
  _id?: string;
  totalLikes: number;
  totalDislikes: number;
  totalFeedbacks: number;
  feedbacks: Feedback[];
} 