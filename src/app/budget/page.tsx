import { Metadata } from 'next';
import BudgetDashboard from './BudgetDashboard';

export const metadata: Metadata = {
  title: 'Karnataka Budget vs Actual | Bengaluru Project Tracker',
  description:
    'Sourced analysis of Karnataka State Budget Estimates (BE), Revised Estimates (RE), and audited CAG Actuals across infrastructure, education, health, and urban sectors.',
};

export default function BudgetPage() {
  return <BudgetDashboard />;
}
