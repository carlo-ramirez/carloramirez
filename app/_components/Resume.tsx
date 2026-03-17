'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE, MY_EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.resume-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const detailRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggle = (index: number, hasDetails: boolean) => {
        if (!hasDetails) return;
        const prev = activeIndex;
        const next = index === activeIndex ? null : index;
        if (prev !== null && detailRefs.current[prev]) {
            const el = detailRefs.current[prev]!;
            const h = el.scrollHeight || 0;
            gsap.set(el, { height: h, display: 'block' });
            gsap.to(el, {
                height: 0,
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.set(el, { display: 'none', clearProps: 'height,opacity' });
                },
            });
        }
        setActiveIndex(next);
        if (next !== null && detailRefs.current[next]) {
            const el = detailRefs.current[next]!;
            gsap.set(el, { height: 'auto', display: 'block' });
            const h = el.scrollHeight || 0;
            gsap.fromTo(
                el,
                { height: 0, autoAlpha: 0 },
                {
                    height: h,
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.set(el, { height: 'auto', clearProps: 'display' });
                    },
                },
            );
        }
    };

    return (
        <section className="py-section" id="resume">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Resume" />
                <div className="flex justify-center mt-8">
                    <a href="/resume/Carlo Ramirez CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors duration-300">
                        View & Download Resume
                    </a>
                </div>

                <div className="grid gap-14">
                    <SectionTitle title="My Experience" />
                    {MY_EXPERIENCE.map((item, index) => {
                        const details = (item as any).details as string[] | undefined;
                        const hasDetails = Array.isArray(details) && details.length > 0;
                        const open = activeIndex === index;
                        return (
                            <div key={item.title} className="resume-item">
                                <button
                                    type="button"
                                    onClick={() => toggle(index, hasDetails)}
                                    className="w-full text-left group -mx-2 px-2 py-1 rounded-md transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                                    aria-expanded={open}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xl text-muted-foreground group-hover:text-primary transition-colors">
                                                {item.company}
                                            </p>
                                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </p>
                                            <p className="text-lg text-muted-foreground">
                                                {item.duration}
                                            </p>
                                        </div>
                                        {hasDetails && (
                                            <ChevronDown
                                                className={`mt-1 transition-transform duration-300 group-hover:text-primary ${open ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </div>
                                </button>
                                {hasDetails && (
                                    <div
                                        ref={(el) => {
                                            detailRefs.current[index] = el;
                                        }}
                                        className="overflow-hidden will-change-transform h-0 opacity-0"
                                    >
                                        <div className="pt-5 text-muted-foreground">
                                            <ul className="list-disc pl-5 space-y-2">
                                                {details!.map((d, i) => (
                                                    <li key={i} className="text-lg">
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="grid gap-14 mt-14">
                    <SectionTitle title="My Education" />
                    {MY_EDUCATION.map((item, index) => {
                        const details = (item as any).details as string[] | undefined;
                        const hasDetails = Array.isArray(details) && details.length > 0;
                        const open = activeIndex === MY_EXPERIENCE.length + index;
                        return (
                            <div key={item.title} className="resume-item">
                                <button
                                    type="button"
                                    onClick={() => toggle(MY_EXPERIENCE.length + index, hasDetails)}
                                    className="w-full text-left group -mx-2 px-2 py-1 rounded-md transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                                    aria-expanded={open}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xl text-muted-foreground group-hover:text-primary transition-colors">
                                                {item.company}
                                            </p>
                                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </p>
                                            <p className="text-lg text-muted-foreground">
                                                {item.duration}
                                            </p>
                                        </div>
                                        {hasDetails && (
                                            <ChevronDown
                                                className={`mt-1 transition-transform duration-300 group-hover:text-primary ${open ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </div>
                                </button>
                                {hasDetails && (
                                    <div
                                        ref={(el) => {
                                            detailRefs.current[MY_EXPERIENCE.length + index] = el;
                                        }}
                                        className="overflow-hidden will-change-transform h-0 opacity-0"
                                    >
                                        <div className="pt-5 text-muted-foreground">
                                            <ul className="list-disc pl-5 space-y-2">
                                                {details!.map((d, i) => (
                                                    <li key={i} className="text-lg">
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Resume;
