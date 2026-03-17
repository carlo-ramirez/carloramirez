'use client';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import md5 from 'blueimp-md5';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('loading');

        const formData = new FormData(formRef.current);
        const name = formData.get('name') as string;
        const email = (formData.get('email') as string).trim().toLowerCase();
        
        // Generate Gravatar, Initial and Time for the email template
        const avatar = `https://www.gravatar.com/avatar/${md5(email)}?s=120&d=mp`;
        const initial = name.trim().charAt(0).toUpperCase();
        const time = new Date().toLocaleString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true,
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const templateParams = {
            name: name,
            email: email,
            subject: formData.get('subject'),
            message: formData.get('message'),
            avatar: avatar,
            initial: initial,
            time: time
        };

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.status === 200) {
                setStatus('success');
                formRef.current.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-contact', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section relative overflow-hidden" id="contact-section">
            <div className="container relative z-[1]" ref={containerRef}>
                <SectionTitle title="Get In Touch" />
                
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="slide-up-contact">
                        <h2 className="text-6xl md:text-8xl font-anton leading-[0.85] mb-10">
                            LET&apos;S
                            <span className="text-primary">TALK</span>
                        </h2>
                        
                        <div className="space-y-12">
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                                Have a vision? Let&apos;s build it together. I turn complex ideas into 
                                high-performance digital reality.
                            </p>

                            <div className="flex flex-col gap-10">
                                <div>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Direct Channel</p>
                                    <a 
                                        href={`mailto:${GENERAL_INFO.email}`}
                                        className="text-2xl md:text-3xl hover:text-primary border-b border-white/10 hover:border-primary pb-2 transition-all font-medium"
                                    >
                                        {GENERAL_INFO.email}
                                    </a>
                                </div>

                                {/* <div>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Social Network</p>
                                    <div className="flex flex-wrap gap-8">
                                        {SOCIAL_LINKS.map((link) => (
                                            <a 
                                                key={link.name}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg text-muted-foreground hover:text-white transition-colors capitalize font-medium"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="slide-up-contact">
                        <div className="bg-background-light/20 p-8 md:p-12 border border-white/5 rounded-3xl backdrop-blur-xl shadow-2xl">
                            {status === 'success' ? (
                                <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary font-anton text-4xl">
                                        DONE
                                    </div>
                                    <h3 className="text-3xl font-anton mb-4 tracking-tight">TRANSMISSION SENT</h3>
                                    <p className="text-muted-foreground mb-10">I&apos;ve received your message and will respond within 24 hours.</p>
                                    <Button as="button" variant="primary" onClick={() => setStatus('idle')} className="w-full">
                                        Send Another
                                    </Button>
                                </div>
                            ) : (
                                <form className="space-y-8" onSubmit={handleSubmit} ref={formRef}>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors">Identity</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-lg transition-all placeholder:text-white/10"
                                            />
                                        </div>
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors">Digital Address</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                placeholder="email@example.com"
                                                required
                                                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-lg transition-all placeholder:text-white/10"
                                            />
                                        </div>
                                    </div>
                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors">Objective</label>
                                        <input 
                                            type="text" 
                                            name="subject"
                                            placeholder="What is this regarding?"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-lg transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors">Intelligence</label>
                                        <textarea 
                                            name="message"
                                            rows={4}
                                            placeholder="Detail your requirements..."
                                            required
                                            className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-lg transition-all resize-none placeholder:text-white/10"
                                        ></textarea>
                                    </div>
                                    
                                    <div className="pt-4">
                                        <Button 
                                            as="button" 
                                            type="submit" 
                                            variant="primary" 
                                            className="w-full h-14"
                                            loading={status === 'loading'}
                                        >
                                            Transmit Message
                                        </Button>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-destructive text-sm text-center font-medium">Link failure. Please try again or use direct email.</p>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2" />
        </section>
    );
};

export default Contact;
