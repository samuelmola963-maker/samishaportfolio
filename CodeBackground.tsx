import React from 'react';

export const CodeBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.06] dark:opacity-[0.14] transition-opacity duration-300 font-mono text-[12px] leading-relaxed"
    >
      {/* Code Snippet Columns across the viewport */}
      <div className="absolute -top-10 left-4 sm:left-12 w-[340px] text-slate-800 dark:text-slate-200 space-y-2">
        <p className="text-orange-600 dark:text-orange-400 font-semibold">// --- UNIVERSITY LOST &amp; FOUND ---</p>
        <p><span className="text-purple-600 dark:text-purple-400">interface</span> <span className="text-blue-600 dark:text-blue-400">CampusItem</span> &#123;</p>
        <p className="pl-4">id: <span className="text-green-600 dark:text-green-400">&apos;LF-7341&apos;</span>;</p>
        <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">&apos;Engineering Student ID&apos;</span>;</p>
        <p className="pl-4">category: <span className="text-green-600 dark:text-green-400">&apos;Credentials&apos;</span>;</p>
        <p className="pl-4">custodyLocation: <span className="text-green-600 dark:text-green-400">&apos;Central Library Lockers&apos;</span>;</p>
        <p className="pl-4">verifiedOwner: <span className="text-amber-600 dark:text-amber-400">true</span>;</p>
        <p>&#125;</p>
        <p>&nbsp;</p>
        <p><span className="text-purple-600 dark:text-purple-400">async function</span> <span className="text-blue-600 dark:text-blue-400">claimItem</span>(id, token) &#123;</p>
        <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">const</span> record = <span className="text-purple-600 dark:text-purple-400">await</span> db.find(id);</p>
        <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">if</span> (record.hash === token) &#123;</p>
        <p className="pl-8"><span className="text-purple-600 dark:text-purple-400">return</span> Security.authorizeRelease(record);</p>
        <p className="pl-4">&#125;</p>
        <p>&#125;</p>
      </div>

      <div className="hidden md:block absolute top-20 right-6 lg:right-24 w-[380px] text-slate-800 dark:text-slate-200 space-y-2">
        <p className="text-orange-600 dark:text-orange-400 font-semibold">// --- STUDENTS PERFORMANCE PREDICTION ML ---</p>
        <p><span className="text-purple-600 dark:text-purple-400">import</span> &#123; RandomForestClassifier &#125; <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">&apos;sklearn.ensemble&apos;</span>;</p>
        <p><span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-blue-600 dark:text-blue-400">StudentPredictor</span> &#123;</p>
        <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">constructor</span>() &#123;</p>
        <p className="pl-8"><span className="text-purple-600 dark:text-purple-400">this</span>.accuracy = <span className="text-amber-600 dark:text-amber-400">0.948</span>;</p>
        <p className="pl-8"><span className="text-purple-600 dark:text-purple-400">this</span>.features = [<span className="text-green-600 dark:text-green-400">&apos;attendance&apos;</span>, <span className="text-green-600 dark:text-green-400">&apos;studyHours&apos;</span>, <span className="text-green-600 dark:text-green-400">&apos;priorGPA&apos;</span>];</p>
        <p className="pl-4">&#125;</p>
        <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">forecastGPA</span>(metrics) &#123;</p>
        <p className="pl-8"><span className="text-purple-600 dark:text-purple-400">const</span> score = <span className="text-purple-600 dark:text-purple-400">this</span>.weights.reduce((acc, w) =&gt; acc + w * metrics, 0);</p>
        <p className="pl-8"><span className="text-purple-600 dark:text-purple-400">return</span> Math.min(<span className="text-amber-600 dark:text-amber-400">4.0</span>, Math.max(<span className="text-amber-600 dark:text-amber-400">1.8</span>, score));</p>
        <p className="pl-4">&#125;</p>
        <p>&#125;</p>
      </div>

      <div className="hidden lg:block absolute bottom-12 left-1/3 w-[360px] text-slate-800 dark:text-slate-200 space-y-2">
        <p className="text-orange-600 dark:text-orange-400 font-semibold">// --- CAMPUS QR ATTENDANCE VERIFIER ---</p>
        <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">verifyPresence</span> = (lat, lng, qrToken) =&gt; &#123;</p>
        <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">const</span> inRadius = GeoFence.validate(lat, lng, HALL_ZONE);</p>
        <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">const</span> tokenValid = Crypto.verifyRotation(qrToken, <span className="text-amber-600 dark:text-amber-400">15000</span>);</p>
        <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">return</span> inRadius &amp;&amp; tokenValid;</p>
        <p>&#125;;</p>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};
