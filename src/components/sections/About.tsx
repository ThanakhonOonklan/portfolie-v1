'use client';

import { useRef } from 'react';
import { useTranslation } from '@/hooks';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const { locale } = useTranslation();

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
      }}
    >
      <div className="section-container">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Image / Visual Area */}
          <div className="col-span-12 lg:col-span-5">
            <div
              ref={imageRef}
              className="gsap-reveal sticky top-27 w-full max-w-[360px] xl:max-w-[420px] mx-auto lg:mx-0"
            >
              {/* About Me Portrait */}
              <div
                className="w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl relative group bg-neutral-900"
                style={{ aspectRatio: '3 / 4' }}
              >
                {/* Tech scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                {/* Actual photo */}
                <img
                  src="/images/profile/profile-1.jpg"
                  alt="Thanakhon Oonklan - About"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" ref={storyRef}>
            {/* Section Label */}
            <span className="section-label block mb-6 gsap-reveal">About Me</span>

            {/* Personal Story */}
            <div className="mb-12 gsap-reveal">
              {locale === 'th' ? (
                <div className="space-y-10">
                  {/* Highlighted Intro Quote */}
                  <div className="py-2">
                    <p
                      className="text-white font-[family-name:var(--font-body)] leading-relaxed font-light"
                      style={{ fontSize: 'var(--text-title)' }}
                    >
                      สวัสดีครับ ผมชื่อ <span className="text-[var(--accent)] font-medium">ธนกรณ์ อ่อนกลั่น</span> ชื่อเล่น <span className="text-[var(--accent)] font-medium">เจเจ</span> ปัจจุบันกำลังศึกษางาน backend เพื่อไปสู่การเป็น <span className="text-white font-semibold whitespace-nowrap">Full Stack Developer</span> ในอนาคต
                    </p>
                  </div>

                  {/* Elegant horizontal line separating intro quote from the rest */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-[var(--accent)]/50 via-white/10 to-transparent mt-10 mb-10" />

                  {/* Education & Related Coursework */}
                  <div className="">
                    <h4 className="text-xs font-[family-name:var(--font-body)] tracking-[0.2em] text-[var(--accent)] mb-4 uppercase font-semibold">
                      การศึกษา
                    </h4>
                    <div className="space-y-6 text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      <div>
                        <strong className="text-white block font-medium text-lg leading-relaxed">
                          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี
                        </strong>
                        <p className="leading-relaxed text-sm mt-1">
                          หลักสูตรอุตสาหกรรมศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศและการจัดการอุตสาหกรรม
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Philosophy block */}
                  <div className="mt-12 pt-12 border-t border-white/10">
                    <h4 className="text-xs font-[family-name:var(--font-body)] tracking-[0.2em] text-[var(--accent)] mb-4 uppercase font-semibold">
                      วิสัยทัศน์และการทำงาน
                    </h4>
                    <p
                      className="text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      เป้าหมายของผมคือการเป็นนักพัฒนาที่สามารถ <strong className="text-white font-semibold">เชื่อมต่อทั้งการออกแบบและการเขียนโค้ดเข้าหากันได้อย่างไร้รอยต่อ</strong> ผมเชื่อมั่นว่าผลิตภัณฑ์ดิจิทัลที่ดีไม่ใช่แค่ความสวยงาม แต่ต้องใช้งานได้จริง มีเหตุผล และช่วยมอบคุณค่าที่แท้จริงให้แก่ผู้ใช้งาน
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p
                    className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    I&apos;m a passionate frontend developer with a deep love for
                    creating innovative digital experiences. With expertise in modern
                    web technologies, I bring ideas to life through clean code,
                    thoughtful design, and purposeful motion.
                  </p>
                  <p
                    className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    My journey in tech started with curiosity and has evolved into a
                    career focused on building user-centric applications that make a
                    real difference. I enjoy tackling complex problems and
                    transforming them into elegant, interactive solutions.
                  </p>
                  <p
                    className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    Every project I take on is an opportunity to push creative
                    boundaries — whether it&apos;s through scroll-driven storytelling,
                    micro-interactions, or immersive 3D experiences.
                  </p>
                  <p
                    className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    On the technical side, I specialize in building scalable web architectures using React, Next.js, and TypeScript. I have a deep appreciation for semantic HTML, modern styling tools like Tailwind CSS, and optimization techniques that keep bundle sizes small and render times blazing fast.
                  </p>
                  <p
                    className="text-[var(--text-secondary)] mb-8 leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    I believe that motion design is a critical aspect of modern user experience. By leveraging libraries like GSAP, ScrollTrigger, and smooth scroll adapters like Lenis, I create interfaces that respond organically to user behavior, establishing a seamless link between navigation and visual storytelling.
                  </p>
                  <p
                    className="text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    Collaboration is at the core of my workflow. I enjoy partnering with talented designers to translate Figma layouts into pixel-perfect code, and syncing with backend developers to design robust API integrations. I'm always looking to learn, explore new technologies, and push the limits of what is possible on the web.
                  </p>
                </>
              )}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
