import { Link } from "wouter";
import { Shield, TriangleAlert, Lock, ArrowRight } from "lucide-react";

export default function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-bg to-elevated-bg text-primary-text">
      {/* Header Badge */}
      <div className="bg-gradient-to-r from-police-blue to-darker-blue p-6 text-center border-b-2 border-accent-red">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-elevated-bg rounded-full mb-4">
          <Shield className="text-accent-red w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-primary-text mb-2">CLASSIFIED BRIEFING</h1>
        <div className="text-sm font-medium text-secondary-text tracking-wider">
          CASE: OMITB-001 • PRIORITY: URGENT
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto">
          {/* Priority Banner */}
          <div className="bg-accent-red bg-opacity-20 border border-accent-red rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <TriangleAlert className="text-accent-red mr-2 w-5 h-5" />
              <span className="text-accent-red font-semibold text-sm">PRIORITY CASE</span>
            </div>
          </div>

          {/* Briefing Content */}
          <div className="bg-elevated-bg rounded-xl p-6 shadow-2xl border border-gray-700">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4 text-primary-text">Mission Brief</h2>
                <div className="space-y-4 text-secondary-text leading-relaxed">
                  <p>
                    <strong className="text-primary-text">Welcome, Detective.</strong> You've been seconded to assist on a priority case.
                  </p>
                  
                  <p>
                    You and Deputy Oliver will report to the Duty Chief for an urgent briefing at{" "}
                    <strong className="text-accent-red">8:00pm tonight</strong>
                  </p>
                  
                  <p>
                    You are authorized to review materials marked{" "}
                    <span className="bg-police-blue px-2 py-1 rounded text-primary-text font-mono text-sm">
                      OMITB-001
                    </span>{" "}
                    only.
                  </p>
                  
                  <div className="bg-darker-blue border-l-4 border-accent-red p-4 rounded-r">
                    <p className="text-primary-text font-medium">
                      <Lock className="inline mr-2 text-accent-red w-4 h-4" />
                      Do not discuss the case outside the briefing room.
                    </p>
                  </div>
                </div>
              </div>

              {/* Access Button */}
              <Link
                href="/character-profiles"
                data-testid="button-enter-briefing"
                className="w-full bg-gradient-to-r from-police-blue to-darker-blue hover:from-darker-blue hover:to-police-blue text-primary-text font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-600 flex items-center justify-center"
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                Enter Briefing Room
              </Link>
            </div>
          </div>

          {/* Case Classification */}
          <div className="mt-6 text-center text-xs text-secondary-text">
            <div className="flex items-center justify-center space-x-4">
              <span>CLASSIFIED</span>
              <span>•</span>
              <span>FOR AUTHORIZED PERSONNEL ONLY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
