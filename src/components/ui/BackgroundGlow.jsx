import React from 'react'

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30 light:opacity-20" />

      {/* Top Ambient Glow Orb 1 */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25 dark:opacity-20 light:opacity-10 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500"
        aria-hidden="true"
      />

      {/* Middle Right Subtle Accent Glow */}
      <div 
        className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 dark:opacity-15 light:opacity-5 bg-gradient-to-bl from-blue-600 to-indigo-600"
        aria-hidden="true"
      />

      {/* Lower Left Soft Glow */}
      <div 
        className="absolute top-[75%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 dark:opacity-15 light:opacity-5 bg-gradient-to-tr from-purple-600 to-pink-600"
        aria-hidden="true"
      />
    </div>
  )
}
