import React, { useState, useEffect } from 'react';
import { pages } from './data/pages';
import PageRenderer from './components/PageRenderer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Organize pages for Desktop Spread view
  const desktopSpreads = [];
  if (!isMobile) {
    // Page 1 (Cover) is standalone
    desktopSpreads.push([pages[0]]);

    // Pages 2-23 are paired (Spread 1: [2,3], Spread 2: [4,5], etc.)
    // Note: pages array is 0-indexed. pages[0] is Page 1.
    for (let i = 1; i < pages.length - 1; i += 2) {
      if (i + 1 < pages.length) {
        desktopSpreads.push([pages[i], pages[i+1]]);
      } else {
        desktopSpreads.push([pages[i]]); // Orphan page if any
      }
    }

    // Last Page (Back Cover) is standalone? 
    // Actually, usually in print:
    // Cover (1) -> Inside Front (2) + Page 3 -> ... -> Inside Back (23) + Back Cover (24).
    // Let's stick to the prompt's logic: "Display pages side-by-side (2-page spread) where appropriate... Cover (Page 1) and Back Cover (Page 24) should be single pages."
    
    // My loop above handles 2+3, 4+5... 
    // If we have 24 pages:
    // 0: [P1]
    // 1: [P2, P3]
    // ...
    // 11: [P22, P23]
    // 12: [P24] (If P24 exists in array)
    
    // Currently pages array only has 4 items.
    // 0: [P1]
    // 1: [P2, P3]
    // 2: [P4] (Since P5 is missing)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 md:py-16 overflow-x-hidden">
      
      {/* Mobile View: Vertical Stack */}
      {isMobile ? (
        <div className="flex flex-col gap-4 w-full px-4 max-w-md">
          {pages.map((page) => (
            <div key={page.id} className="w-full shadow-2xl rounded-sm overflow-hidden">
              <PageRenderer page={page} />
            </div>
          ))}
        </div>
      ) : (
        /* Desktop View: Spreads */
        <div className="flex flex-col gap-16 w-full max-w-6xl px-8">
          {desktopSpreads.map((spread, index) => (
            <div key={index} className={`flex justify-center ${spread.length === 1 ? 'mx-auto' : ''}`}>
              {/* If spread has 2 pages, render them side-by-side. If 1, render centered. */}
              {spread.map((page, pIdx) => (
                <div key={page.id} className={`shadow-2xl transition-transform hover:scale-[1.01] duration-500 ${spread.length === 1 ? '' : ''}`} style={{ width: '500px' }}> {/* Fixed width for consistent spread look */}
                   <PageRenderer page={page} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 text-gray-400 text-xs font-sans tracking-widest text-center">
        WHALEBAY EXPEDITIONS PDF REPLICA
      </div>
    </div>
  );
}

export default App;
