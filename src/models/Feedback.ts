import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  totalLikes: {
    type: Number,
    default: 0,
  },
  totalDislikes: {
    type: Number,
    default: 0,
  },
  totalFeedbacks: {
    type: Number,
    default: 0,
  },
  feedbacks: [{
    isLike: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    }
  }]
});

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema); 