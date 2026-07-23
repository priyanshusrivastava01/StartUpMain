import React from 'react';
import { motion } from 'framer-motion';

const comparisons = [
  {
    num: '01',
    aspect: 'The Incessant Interruptions',
    wfh: 'Family demands, domestic background noise, and sudden call interruptions break your concentration.',
    cafe: 'Soundproof privacy cabins and designated quiet corners designed purely for uninterrupted execution.'
  },
  {
    num: '02',
    aspect: 'The Focus Erosion',
    wfh: 'Working where you sleep blurs boundary limits, slowly draining your motivation and physical posture.',
    cafe: 'A spaces collection built around ergonomic task chairs, curated lighting, and premium business architecture.'
  },
  {
    num: '03',
    aspect: 'The Connection Drops',
    wfh: 'Local broadband drops or slows to a crawl during high-stakes client syncs and tight deadlines.',
    cafe: 'Dual active fiber lines with automatic failover routing to guarantee your workflow never breaks.'
  },
  {
    num: '04',
    aspect: 'The Client Compromise',
    wfh: 'Pitching major contracts from standard local coffee houses or noisy public tables ruins credibility.',
    cafe: 'Fully serviced boardrooms and executive styling that immediately commands professional trust.'
  },
  {
    num: '05',
    aspect: 'The Scattered Team',
    wfh: 'Managing culture and priority alignment over disjointed Slack messages and pixelated video grids.',
    cafe: 'A physical basecamp where your core team whiteboard, align, and compound momentum daily.'
  }
];

const PainPointsEditorial = () => {
  return (
    <section className="py-20 sm:py-32 bg-white border-y border-[#E9E4DC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-[10px] font-bold tracking-widest text-bronze uppercase block">
              The WFH Dilemma
            </span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-obsidian leading-[1.1]">
              The cost of working <br />
              from home is <br />
              often <span className="font-serif-editorial italic font-normal text-bronze text-5xl sm:text-6xl">lost speed.</span>
            </h2>
            <p className="text-xs sm:text-sm text-obsidian/60 leading-relaxed font-light max-w-sm">
              Distractions aren't just minor annoyances—they directly compound as invisible losses to your execution, business growth, and peace of mind.
            </p>
          </div>

          {/* Right Column: Refined Hairline Separated Contrast List */}
          <div className="lg:col-span-7 divide-y divide-[#E9E4DC]">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="py-8 first:pt-0 last:pb-0 flex gap-6 sm:gap-10 items-start"
              >
                {/* Serif Serial Number */}
                <span className="font-serif-editorial italic text-2xl sm:text-3xl text-bronze/70 select-none">
                  {item.num}
                </span>

                <div className="space-y-3 flex-1">
                  <h3 className="text-sm font-bold text-obsidian tracking-tight uppercase">
                    {item.aspect}
                  </h3>

                  {/* Contrast Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-obsidian/40 uppercase tracking-wider block">At Home:</span>
                      <p className="text-xs text-obsidian/65 font-light leading-relaxed">
                        {item.wfh}
                      </p>
                    </div>
                    <div className="space-y-1 border-l sm:border-l border-bronze/15 pl-4">
                      <span className="text-[9px] font-bold text-bronze uppercase tracking-wider block">At Startup Cafe:</span>
                      <p className="text-xs text-obsidian/90 font-light leading-relaxed">
                        {item.cafe}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPointsEditorial;
