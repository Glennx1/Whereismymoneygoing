import { Suspense } from 'react';
import { Metadata } from 'next';
import FeedbackForm from './FeedbackForm';

export const metadata: Metadata = {
  title: 'Report Data Error & Feedback | Bengaluru Project Tracker',
  description:
    'Report budget or infrastructure project data discrepancies directly to our open-source audit queue.',
};

export default function FeedbackPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-2xl px-4 py-16 text-center text-xs text-neutral-500">
          Loading feedback form...
        </div>
      }
    >
      <FeedbackForm />
    </Suspense>
  );
}
