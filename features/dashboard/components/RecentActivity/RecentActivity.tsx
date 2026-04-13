'use client';

import Link from "next/link";

import { ActivityTable } from "./ActivityTable";
import { Suspense } from "react";

export function RecentActivity() {
  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-on-surface">Recent Activity</h2>
        <Link href="/transfers" className="text-sm text-primary hover:text-primary-fixed-dim transition-colors">
          View All
        </Link>
      </div>

      <Suspense fallback={<h1>Loading...</h1>}>
        <ActivityTable />
      </Suspense>
    </div>
  );
}