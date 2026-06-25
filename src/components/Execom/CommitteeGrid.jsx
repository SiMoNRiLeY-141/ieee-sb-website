import React from "react";
import { Linkedin, User } from "lucide-react";

export const CommitteeGrid = ({ sections }) => {
  return Object.keys(sections).map((sectionName) => (
    <div key={sectionName} className="mb-12 w-full">
      <h3 className="text-[#0f172a] font-monument font-bold text-lg sm:text-xl tracking-wider uppercase border-b border-slate-200/80 pb-2 mb-8">
        {sectionName}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {sections[sectionName].map((member, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-[200px] aspect-[4/5] bg-white border border-slate-200/85 rounded-xl p-4 flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:border-sky-500/30 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
          >
            {/* Photo Area */}
            <div className="flex-1 flex items-center justify-center w-full relative">
              <div className="w-36 h-36 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200/50 group-hover:border-sky-500/20 transition-all duration-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <User className="w-16 h-16 text-slate-300" />
                )}
              </div>
            </div>

            {/* Name & Position */}
            <div className="w-full text-center mt-3 z-10">
              <h4 className="text-slate-800 font-bold text-xs leading-snug tracking-wide truncate uppercase">
                {member.name}
              </h4>
              <p className="text-sky-600 font-medium text-[9px] uppercase tracking-widest mt-1 truncate">
                {member.position}
              </p>
            </div>

            {/* Hover overlay showing LinkedIn */}
            {member.linkedinUrl && (
              <div className="absolute inset-x-0 bottom-0 h-10 bg-white/95 backdrop-blur-sm border-t border-slate-100 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-slate-500 hover:text-sky-600 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ));
};

export default CommitteeGrid;
