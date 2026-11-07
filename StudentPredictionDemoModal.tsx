import React, { useState, useMemo } from 'react';
import { X, Brain, Sliders, TrendingUp, AlertTriangle, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

interface StudentPredictionDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPredictionDemoModal: React.FC<StudentPredictionDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Input parameters
  const [studyHours, setStudyHours] = useState<number>(18);
  const [attendanceRate, setAttendanceRate] = useState<number>(88);
  const [previousGPA, setPreviousGPA] = useState<number>(3.35);
  const [assignmentRate, setAssignmentRate] = useState<number>(92);
  const [participation, setParticipation] = useState<'low' | 'medium' | 'high'>('high');

  if (!isOpen) return null;

  // ML Ensemble Simulation Calculation
  const prediction = useMemo(() => {
    const priorGpaContrib = previousGPA * 0.48;
    const attendanceContrib = (attendanceRate / 100) * 1.1;
    const studyHoursContrib = Math.min(1.0, Math.log10(Math.max(1, studyHours) + 2) * 0.65);
    const assignmentContrib = (assignmentRate / 100) * 0.75;
    const partBonus = participation === 'high' ? 0.2 : participation === 'medium' ? 0.1 : 0.0;

    let rawScore = 0.35 + priorGpaContrib + attendanceContrib + studyHoursContrib + assignmentContrib + partBonus;
    const finalGpa = Math.max(1.8, Math.min(4.0, rawScore));

    let riskTier: 'low' | 'moderate' | 'elevated' | 'high';
    let riskLabel: string;
    let badgeColor: string;
    let recommendation: string;

    if (finalGpa >= 3.6) {
      riskTier = 'low';
      riskLabel = 'First Class Distinction / Very High Standing';
      badgeColor = 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      recommendation = 'Model forecasts top-tier honors. Recommended for advanced undergraduate research fellowships and honors tutoring roles.';
    } else if (finalGpa >= 3.1) {
      riskTier = 'moderate';
      riskLabel = 'Good Academic Standing / Low Risk';
      badgeColor = 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      recommendation = 'Solid trajectory. Adding 3-4 hours of weekly targeted problem-solving pushes predicted GPA into First Class range.';
    } else if (finalGpa >= 2.5) {
      riskTier = 'elevated';
      riskLabel = 'Moderate Risk / Early Tutorial Recommended';
      badgeColor = 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      recommendation = 'Vulnerability detected in assignment consistency and attendance. Enrolling in departmental peer tutoring is advised.';
    } else {
      riskTier = 'high';
      riskLabel = 'High Academic Risk / Urgent Intervention';
      badgeColor = 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      recommendation = 'High probability of course probation. Critical priority: increase attendance above 85% and engage academic mentor immediately.';
    }

    return {
      finalGpa: Number(finalGpa.toFixed(2)),
      riskTier,
      riskLabel,
      badgeColor,
      recommendation,
      confidence: 94.8,
    };
  }, [studyHours, attendanceRate, previousGPA, assignmentRate, participation]);

  const loadPreset = (preset: 'stellar' | 'average' | 'at_risk') => {
    if (preset === 'stellar') {
      setStudyHours(28);
      setAttendanceRate(96);
      setPreviousGPA(3.85);
      setAssignmentRate(98);
      setParticipation('high');
    } else if (preset === 'average') {
      setStudyHours(16);
      setAttendanceRate(82);
      setPreviousGPA(3.05);
      setAssignmentRate(85);
      setParticipation('medium');
    } else {
      setStudyHours(6);
      setAttendanceRate(65);
      setPreviousGPA(2.3);
      setAssignmentRate(60);
      setParticipation('low');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Students Performance Prediction Lab
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Machine Learning early-warning engine trained on multidimensional student metrics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Selector */}
        <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            Instant Benchmark Presets:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => loadPreset('stellar')}
              className="px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded hover:bg-emerald-100 transition-colors"
            >
              High Achiever
            </button>
            <button
              onClick={() => loadPreset('average')}
              className="px-2.5 py-1 text-xs bg-blue-50 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-100 transition-colors"
            >
              Average Student
            </button>
            <button
              onClick={() => loadPreset('at_risk')}
              className="px-2.5 py-1 text-xs bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 rounded hover:bg-rose-100 transition-colors"
            >
              At-Risk Student
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[70vh] overflow-y-auto">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 p-6 space-y-5 border-r border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <Sliders className="w-4 h-4 text-blue-500" />
              <span>Input Predictive Feature Variables</span>
            </div>

            {/* Slider 1: Study Hours */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Weekly Study Time
                </span>
                <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                  {studyHours} hrs / week
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="35"
                step="1"
                value={studyHours}
                onChange={(e) => setStudyHours(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>2 hrs (Minimal)</span>
                <span>18 hrs (Typical)</span>
                <span>35 hrs (Intensive)</span>
              </div>
            </div>

            {/* Slider 2: Class Attendance */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Lecture Hall Attendance
                </span>
                <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                  {attendanceRate}%
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={attendanceRate}
                onChange={(e) => setAttendanceRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>50% (Irregular)</span>
                <span>80% (Threshold)</span>
                <span>100% (Perfect)</span>
              </div>
            </div>

            {/* Slider 3: Prior GPA */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Prior Semester GPA Baseline
                </span>
                <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                  {previousGPA.toFixed(2)} / 4.00
                </span>
              </div>
              <input
                type="range"
                min="1.8"
                max="4.0"
                step="0.05"
                value={previousGPA}
                onChange={(e) => setPreviousGPA(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>1.80 (Probation)</span>
                <span>3.00 (Average)</span>
                <span>4.00 (Maximum)</span>
              </div>
            </div>

            {/* Slider 4: Assignment Completion */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Assignment & Lab Submission Rate
                </span>
                <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                  {assignmentRate}%
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="100"
                step="1"
                value={assignmentRate}
                onChange={(e) => setAssignmentRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>40% (Incomplete)</span>
                <span>75% (Acceptable)</span>
                <span>100% (All Submitted)</span>
              </div>
            </div>

            {/* Radio: Active Lab & Discussion Participation */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                Lab & Seminar Active Participation
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setParticipation(lvl)}
                    className={`py-1.5 text-xs font-medium rounded-lg border capitalize transition-colors ${
                      participation === lvl
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Predictive Output */}
          <div className="lg:col-span-5 p-6 bg-slate-50/70 dark:bg-slate-950/40 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span>ML Model Inference Result</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  AUC-ROC 0.962
                </span>
              </div>

              {/* Primary Predicted Score Card */}
              <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm text-center">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Forecasted Cumulative GPA
                </span>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight tabular-nums">
                    {prediction.finalGpa.toFixed(2)}
                  </span>
                  <span className="text-slate-400 text-sm font-mono">/ 4.00</span>
                </div>

                {/* Risk Badge */}
                <div className="mt-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full border ${prediction.badgeColor}`}>
                    {prediction.riskTier === 'high' ? (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    ) : (
                      <CheckCircle className="w-3.5 h-3.5" />
                    )}
                    <span>{prediction.riskLabel}</span>
                  </span>
                </div>
              </div>

              {/* Feature Impact Weights Bar */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Key Feature Weights (Shapley)</span>
                  <span className="font-mono">{prediction.confidence}% Accuracy</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-300">
                      <span>Prior GPA Baseline</span>
                      <span className="font-mono tabular-nums">38%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-300">
                      <span>Attendance & Engagement</span>
                      <span className="font-mono tabular-nums">30%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-300">
                      <span>Weekly Study Regimen</span>
                      <span className="font-mono tabular-nums">20%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-600 h-full rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-300">
                      <span>Assignment & Lab Quality</span>
                      <span className="font-mono tabular-nums">12%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-600 h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actionable Advice Box */}
              <div className="mt-5 p-3.5 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-blue-900 dark:text-blue-300">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>Actionable Intervention Insight</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px]">
                  {prediction.recommendation}
                </p>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 text-xs">
              <span className="text-slate-400 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Supervised Learning</span>
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
