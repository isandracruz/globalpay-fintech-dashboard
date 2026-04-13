'use client';

import { RecentActivity } from "@/features/dashboard";

export default function DashboardPage() {
  return (
    <section className="p-8 flex flex-col gap-8 max-w-400">
      <div className="grid grid-cols-12 gap-8">

        <RecentActivity />


        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-highest rounded-xl p-6 border border-primary/20 shadow-2xl shadow-black/50">
            <h1>Form</h1>
          </div>
        </div>

      </div>
    </section>
  );
}