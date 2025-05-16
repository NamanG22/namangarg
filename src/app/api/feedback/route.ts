import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Feedback from '@/models/Feedback';

export async function GET() {
  try {
    await connectDB();
    
    let stats = await Feedback.findOne({});
    
    if (!stats) {
      // Initialize feedback stats if they don't exist
      stats = await Feedback.create({
        totalLikes: 0,
        totalDislikes: 0,
        totalFeedbacks: 0,
        feedbacks: []
      });
    }
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to fetch feedback stats' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const feedback = await request.json();
    
    const updateOperation = {
      $inc: {
        totalLikes: feedback.isLike ? 1 : 0,
        totalDislikes: feedback.isLike ? 0 : 1,
        totalFeedbacks: 1
      },
      $push: {
        feedbacks: {
          isLike: feedback.isLike,
          message: feedback.message,
          timestamp: new Date()
        }
      }
    };
    
    const updatedStats = await Feedback.findOneAndUpdate(
      {}, // Update the first document
      updateOperation,
      { 
        upsert: true,
        new: true // Return the updated document
      }
    );
    
    return NextResponse.json(updatedStats);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 });
  }
}