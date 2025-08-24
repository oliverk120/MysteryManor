import { Link } from "wouter";
import { ArrowLeft, UserCheck, Users, Search, ClipboardList, Target } from "lucide-react";

export default function CharacterProfilesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-bg to-elevated-bg text-primary-text">
      {/* Navigation Header */}
      <div className="bg-elevated-bg border-b border-gray-700 sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <Link
            href="/"
            data-testid="button-back-to-brief"
            className="flex items-center text-secondary-text hover:text-primary-text transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            <span className="text-sm">Back to Brief</span>
          </Link>
          <h1 className="text-lg font-semibold text-primary-text">Team Profiles</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto space-y-6">
          
          {/* Cath Profile */}
          <div className="bg-elevated-bg rounded-xl p-6 shadow-2xl border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-police-blue to-darker-blue rounded-full flex items-center justify-center mr-4">
                <UserCheck className="text-primary-text w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary-text">Catherine "Cath" Waite</h2>
                <div className="text-accent-red text-sm font-medium">Lead Investigator</div>
              </div>
            </div>

            <div className="space-y-4 text-secondary-text text-sm leading-relaxed">
              <div>
                <h3 className="text-primary-text font-semibold mb-2">Assignment</h3>
                <p>You are Catherine "Cath" Waite, Lead Detective on case OMITB-001.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Role</h3>
                <p>Set the working timeline, choose initial leads, run interviews, call decisions.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Public Background</h3>
                <p>Commended for pattern-spotting and witness rapport; calm under pressure; trusted to make tight calls.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Prior Contact with Victim</h3>
                <p><em>(routine):</em> You took Graham Steele's statement last fall re: a suspected break-in; saw him at a community safety seminar.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Working Style</h3>
                <p>Evidence-first, clear questions; trust your gut but verify; stay open to exculpatory info.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Dynamic with Oliver</h3>
                <p>You keep things professional-ish; you enjoy light banter but don't encourage romance; you steer him back on task when he gets playful or pushes the boundary.</p>
              </div>

              <div className="bg-police-blue bg-opacity-30 p-3 rounded-lg border border-police-blue">
                <h3 className="text-primary-text font-semibold mb-2">
                  <Target className="inline text-accent-red mr-2 w-4 h-4" />
                  Objective Tonight
                </h3>
                <p className="text-primary-text">Own the brief, pick an initial suspect to pressure, and keep the lens wide.</p>
              </div>
            </div>
          </div>

          {/* Oliver Profile */}
          <div className="bg-elevated-bg rounded-xl p-6 shadow-2xl border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-darker-blue to-police-blue rounded-full flex items-center justify-center mr-4">
                <UserCheck className="text-primary-text w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary-text">Oliver Khan</h2>
                <div className="text-accent-red text-sm font-medium">Lead Deputy</div>
                <div className="text-xs text-secondary-text mt-1">(for your eyes)</div>
              </div>
            </div>

            <div className="space-y-4 text-secondary-text text-sm leading-relaxed">
              <div>
                <h3 className="text-primary-text font-semibold mb-2">Partnership</h3>
                <p>You work with Oliver Khan, Lead Deputy supporting OMITB-001.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Role</h3>
                <p>Manage evidence packets/exhibits, run the GPT "interrogator," and handle scene flow (briefing → clues → interrogations).</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Public Background</h3>
                <p>Organized, detail-minded, tech-savvy; reliable under time pressure.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Temperament & Dynamic with You</h3>
                <p>Protective and occasionally intense; likes theatrics; flirts and nudges past strictly professional tone. You sometimes banter back but set the pace and boundaries.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Strengths You Rely On</h3>
                <p>Tight logistics, timely props, surfacing the right clue at the right moment.</p>
              </div>

              <div>
                <h3 className="text-primary-text font-semibold mb-2">Watch-outs</h3>
                <p>Can chase a lead too fast or ham it up—responds well when you redirect or assign a concrete task.</p>
              </div>

              <div className="bg-police-blue bg-opacity-30 p-3 rounded-lg border border-police-blue">
                <h3 className="text-primary-text font-semibold mb-2">
                  <Target className="inline text-accent-red mr-2 w-4 h-4" />
                  Objective Tonight
                </h3>
                <p className="text-primary-text">Keep materials flowing on your cue so you can decide the initial suspect and drive the case.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-elevated-bg border-t border-gray-700 p-4">
        <div className="flex justify-center space-x-6">
          <button 
            data-testid="nav-profiles"
            className="flex flex-col items-center text-accent-red"
          >
            <Users className="w-6 h-6 mb-1" />
            <span className="text-xs">Profiles</span>
          </button>
          <button 
            data-testid="nav-evidence"
            className="flex flex-col items-center text-secondary-text hover:text-primary-text transition-colors"
          >
            <Search className="w-6 h-6 mb-1" />
            <span className="text-xs">Evidence</span>
          </button>
          <button 
            data-testid="nav-interview"
            className="flex flex-col items-center text-secondary-text hover:text-primary-text transition-colors"
          >
            <ClipboardList className="w-6 h-6 mb-1" />
            <span className="text-xs">Interview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
