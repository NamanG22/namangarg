import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Feedback, FeedbackStats } from '@/types';
import { UpdateFilter } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection<FeedbackStats>('feedback');
    
    const stats = await collection.findOne({});
    
    if (!stats) {
      // Initialize feedback stats if they don't exist
      const initialStats: Omit<FeedbackStats, '_id'> = {
        totalLikes: 0,
        totalDislikes: 0,
        totalFeedbacks: 0,
        feedbacks: []
      };
      
      const result = await collection.insertOne(initialStats);
      return NextResponse.json({ ...initialStats, _id: result.insertedId });
    }
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to fetch feedback stats' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection<FeedbackStats>('feedback');
    
    const feedback: Omit<Feedback, 'timestamp'> = await request.json();
    const feedbackWithTimestamp = { ...feedback, timestamp: new Date() };
    
    const updateOperation: UpdateFilter<FeedbackStats> = {
      $inc: {
        totalLikes: feedback.isLike ? 1 : 0,
        totalDislikes: feedback.isLike ? 0 : 1,
        totalFeedbacks: 1
      },
      $push: {
        feedbacks: feedbackWithTimestamp
      }
    };
    
    await collection.updateOne(
      {}, // Update the first document
      updateOperation,
      { upsert: true }
    );
    
    const updatedStats = await collection.findOne({});
    return NextResponse.json(updatedStats);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 });
  }
}