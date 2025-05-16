import { ObjectId } from 'mongodb';

export interface Feedback {
  isLike: boolean;
  message: string;
  timestamp: Date;
}

export interface FeedbackStats {
  _id?: ObjectId;
  totalLikes: number;
  totalDislikes: number;
  totalFeedbacks: number;
  feedbacks: Feedback[];
} 