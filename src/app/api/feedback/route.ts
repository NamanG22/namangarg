import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Feedback, FeedbackStats } from '@/types';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const stats = await db.collection('feedback').findOne({}) as unknown as FeedbackStats;
    
    if (!stats) {
      // Initialize feedback stats if they don't exist
      const initialStats: FeedbackStats = {
        totalLikes: 0,
        totalDislikes: 0,
        totalFeedbacks: 0,
        feedbacks: []
      };
      
      await db.collection('feedback').insertOne(initialStats as any);
      return NextResponse.json(initialStats);
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
    
    const feedback: Feedback = await request.json();
    feedback.timestamp = new Date();
    
    const updateOperation = {
      $inc: {
        totalLikes: feedback.isLike ? 1 : 0,
        totalDislikes: feedback.isLike ? 0 : 1,
        totalFeedbacks: 1
      },
      $push: {
        feedbacks: feedback
      }
    };
    
    const result = await db.collection('feedback').updateOne(
      {}, // Update the first document
      updateOperation as any,
      { upsert: true } // Create if doesn't exist
    );
    
    const updatedStats = await db.collection('feedback').findOne({}) as unknown as FeedbackStats;
    return NextResponse.json(updatedStats);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 });
  }
}