import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'n97651900@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Carlo, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/CarloRamirez',
};

export const SOCIAL_LINKS = [
    // { name: 'github', url: 'https://github.com/CarloRamirez' },
    // { name: 'linkedin', url: 'https://www.linkedin.com/in/carlo-ramirez/' },
    // { name: 'facebook', url: 'https://www.facebook.com/carlo.ramirez' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend_cms: [
        { name: 'WordPress', icon: '/logo/wordpress.png' },
        { name: 'Elementor', icon: '/logo/elementor.png' },
        { name: 'HTML5', icon: '/logo/html.png' },
        { name: 'CSS3', icon: '/logo/css.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'React', icon: '/logo/react.png' },
    ],
    design_tools: [
        { name: 'Adobe Photoshop', icon: '/logo/photoshop.png' },
        { name: 'Adobe Illustrator', icon: '/logo/adobe-illustrator.png' },
        { name: 'Canva', icon: '/logo/canva.png' },
        // { name: 'Typography', icon: '/logo/typography.png' },
        // { name: 'Layout Design', icon: '/logo/layout.png' },
    ],
    performance: [
        { name: 'Google PageSpeed Insights', icon: '/logo/google-pagespeed-insights.png' },
        { name: 'GTmetrix', icon: '/logo/gtmetrix.png' },
        // { name: 'Core Web Vitals', icon: '/logo/dns.png' },
        // { name: 'SEO Basics', icon: '/logo/dns.png' },
    ],
    web_operations: [
        { name: 'DNS Management', icon: '/logo/dns.png' },
        { name: 'Website Security', icon: '/logo/ssl.png' },
        // { name: 'Backup & Restore', icon: '/logo/hosting.png' },
        { name: 'Hosting Management', icon: '/logo/hosting.png' },
    ],
    tools_workflow: [
        { name: 'Chrome DevTools', icon: '/logo/chrome-dev-tool.png' },
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Agile', icon: '/logo/agile.png' },
        { name: 'SOP', icon: '/logo/sop.png' },
        { name: 'QMS', icon: '/logo/qms.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'ABC Word Academy',
        slug: 'abc-word-academy',
        liveUrl: 'https://abcwordacademy.org',
        year: 2025,
        description:
            'ABC Word Academy is a non-denominational Christian school providing academic excellence for children 18 months through 5 years old in a secure and loving atmosphere. It offers a biblically integrated curriculum in a student-centered learning environment that influences students’ value system and helps them make morally accurate choices. The school focuses on developing each child’s personal gifts and talents academically, socially, and spiritually through small class sizes and caring teachers.',
        role: '',
        techStack: ['WordPress', 'Elementor', 'Photoshop', 'Canva'],
        thumbnail: '/projects/thumbnail/abcwordacademy.png',
        longThumbnail: '/projects/long/abcwordacademy.png',
        images: ['/projects/abcwordacademy/1.png', '/projects/abcwordacademy/2.png', '/projects/abcwordacademy/3.png', '/projects/abcwordacademy/4.png', '/projects/abcwordacademy/5.png', '/projects/abcwordacademy/6.png'],
    },
    {
        title: 'Crossroads Community Church',
        slug: 'crossroads-community-church',
        liveUrl: 'https://crossroadschurch.net',
        year: 2024,
        description:
            'Crossroads Community Church is a family of faith focused on responding to Jesus, offering services on Sundays and special Easter events with in-person and online options. The church emphasizes building relationships, encouragement, and faith growth through ministries, while sharing stories of God’s redemption and a mission to extend love and grace to the community and world. It invites participation in faith journeys and highlights core beliefs in one true God in three persons, the divinity of Jesus, and the authority of the Bible.',
        role: '',
        techStack: ['WordPress', 'Elementor', 'Illustrator', 'DNS Management'],
        thumbnail: '/projects/thumbnail/crossroadschurch.png',
        longThumbnail: '/projects/long/crossroadschurch.png',
        images: ['/projects/crossroadschurch/1.png', '/projects/crossroadschurch/2.png', '/projects/crossroadschurch/3.png', '/projects/crossroadschurch/4.png', '/projects/crossroadschurch/5.png', '/projects/crossroadschurch/6.png', '/projects/crossroadschurch/7.png', '/projects/crossroadschurch/8.png'],
    },
    {
        title: 'Madison County Sports Zone',
        slug: 'madison-county-sports-zone',
        liveUrl: 'https://mcsportszone.net',
        year: 2024,
        description:
            'Madison County Sports Zone offers baseball lessons, member packages, and birthday packages focused on hitting, fielding, and pitching. It also runs summer ball programs led by Coach Chris Maloney for motivated players aged 15-18, along with Thunder Season tryouts and leagues for ages 6-14. The site promotes off-season training programs and renovated facilities for baseball development.',
        role: '',
        techStack: ['WordPress', 'Elementor', 'Performance Optimization', 'GTmetrix'],
        thumbnail: '/projects/thumbnail/mcsportszone.png',
        longThumbnail: '/projects/long/mcsportszone.png',
        images: ['/projects/mcsportszone/1.png', '/projects/mcsportszone/2.png', '/projects/mcsportszone/3.png', '/projects/mcsportszone/4.png', '/projects/mcsportszone/5.png', '/projects/mcsportszone/6.png', '/projects/mcsportszone/7.png', '/projects/mcsportszone/8.png', '/projects/mcsportszone/9.png'],
    },
    {
        title: 'The Chapel',
        slug: 'the-chapel',
        liveUrl: 'https://thechapel.org',
        year: 2023,
        description:
            'The Chapel is a community centered on Jesus, offering casual yet reverent worship services on Sundays at 8:40, 10:00, and 11:20am. It provides biblical teaching through expository preaching by Pastor Dave and his team, along with resources like sermons, eNews, and a Church Center app for staying connected. The church welcomes diverse individuals and emphasizes love for God, people, and serving the world.',
        role: '',
        techStack: ['WordPress', 'Elementor', 'Photoshop', 'Security Hardening'],
        thumbnail: '/projects/thumbnail/thechapel.png',
        longThumbnail: '/projects/long/thechapel.png',
        images: ['/projects/thechapel/1.png', '/projects/thechapel/2.png', '/projects/thechapel/3.png', '/projects/thechapel/4.png', '/projects/thechapel/5.png', '/projects/thechapel/6.png', '/projects/thechapel/7.png', '/projects/thechapel/8.png', '/projects/thechapel/9.png'],
    },
    {
        title: 'Second Baytown Church',
        slug: 'second-baytown-church',
        liveUrl: 'https://secondbaytown.org',
        year: 2023,
        description:
            `Second Baytown serves as a welcoming home for its community, guiding people toward a Christ-centered life through Sunday services at 8:30, 10:00, and 11:30 am (with online streaming at 10:00 am). It emphasizes worship, building connections via small groups, serving others, and investing in the church and wider community to help everyone grow in faith and use their God-given gifts. The site highlights an inviting atmosphere where "there's a place for you," making it ideal for showcasing clean, relational church web design.`,
        role: '',
        techStack: ['WordPress', 'Elementor', 'Adobe Illustrator', 'Hosting Management'],
        thumbnail: '/projects/thumbnail/secondbaytown.png',
        longThumbnail: '/projects/long/secondbaytown.png',
        images: ['/projects/secondbaytown/1.png', '/projects/secondbaytown/2.png', '/projects/secondbaytown/3.png', '/projects/secondbaytown/4.png', '/projects/secondbaytown/5.png', '/projects/secondbaytown/6.png', '/projects/secondbaytown/7.png', '/projects/secondbaytown/8.png', '/projects/secondbaytown/9.png'],
    },
    {
        title: 'The Avenue Church',
        slug: 'the-avenue-church',
        liveUrl: 'https://myavenue.church',
        year: 2022,
        description:
            `The Avenue Church exists to move people from where they are to where God wants them to be, creating a welcoming space for spiritual growth and connection. It offers weekend services at 9am and 10:30am, children's ministry, Growth Track for newcomers to discover their purpose, Small Groups for deeper community, and ways to serve and contribute. The site emphasizes a modern, inviting environment focused on life transformation through faith.`,
        role: '',
        techStack: ['WordPress', 'Elementor', 'Canva', 'Backup & Restore'],
        thumbnail: '/projects/thumbnail/myavenue.png',
        longThumbnail: '/projects/long/myavenue.png',
        images: ['/projects/myavenue/1.png', '/projects/myavenue/2.png', '/projects/myavenue/3.png', '/projects/myavenue/4.png', '/projects/myavenue/5.png', '/projects/myavenue/6.png', '/projects/myavenue/7.png'],
    },
    {
        title: 'Living Word Fellowship Church',
        slug: 'living-word-fellowship-church',
        liveUrl: 'https://lwfellowshipchurch.org',
        year: 2022,
        description:
            `Living Word Fellowship Church in Houston, Texas, centers its community on putting Jesus Christ at the heart of life through worship, prayer, Bible study, and a welcoming environment for all. It offers Sunday services with praise and worship at 8:00 AM and a contemporary service at 11:00 AM (including children's church both times), plus extensive ministries for kids, youth, young adults, men, women, marriage, singles, seniors, evangelism, missions, worship, outreach, and life application. The site features a professional, visually appealing layout that highlights connection, growth, and service in faith.`,
        role: '',
        techStack: ['WordPress', 'Elementor', 'Photoshop', 'Responsive Design'],
        thumbnail: '/projects/thumbnail/lwfellowshipchurch.png',
        longThumbnail: '/projects/long/lwfellowshipchurch.png',
        images: ['/projects/lwfellowshipchurch/1.png', '/projects/lwfellowshipchurch/2.png', '/projects/lwfellowshipchurch/3.png', '/projects/lwfellowshipchurch/4.png', '/projects/lwfellowshipchurch/5.png', '/projects/lwfellowshipchurch/6.png', '/projects/lwfellowshipchurch/7.png', '/projects/lwfellowshipchurch/8.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Web Developer',
        company: 'Northbridge Financial Systems',
        duration: 'March 2021 – November 2025',
        details: [
            'Designed and developed responsive WordPress websites using Elementor, converting complex Illustrator and brand mockups into high-performance web pages with full cross-browser and device compatibility, improving user engagement by 38% and reducing bounce rate by 25% across client projects.',
            'Built and maintained custom WordPress themes and plugins, integrating third-party tools and APIs to enhance functionality, supporting over 50 active client websites with scalable architecture and optimized performance.',
            'Executed comprehensive performance optimization strategies using Google PageSpeed Insights and GTmetrix, improving Core Web Vitals scores by 45% and decreasing page load time from 4.2s to 2.1s across high-traffic sites.',
            'Produced high-quality creative assets including digital banners, social media graphics, newsletters, and ad creatives using Adobe Photoshop, Illustrator, and Canva, contributing to a 30% increase in campaign conversion rates.',
            'Managed website operations including DNS configuration, security hardening, backups, and uptime monitoring, ensuring 99.9% availability and minimizing downtime incidents by 60%.',
            'Collaborated with marketing, content, and project management teams to align on branding, technical requirements, and delivery timelines, ensuring consistent execution across multiple campaigns and platforms.',
            'Conducted pre-launch and post-launch testing, identifying and resolving issues related to redirects, broken links, and spam vulnerabilities, improving site reliability and user experience metrics.',
            'Automated repetitive workflows and content deployment processes, reducing manual effort by 35% and accelerating project delivery timelines in a multi-project environment.',
            'Maintained detailed documentation including release notes, change logs, and SOP adherence, improving team efficiency and ensuring consistency across development and design deliverables.',
        ],
    },
    {
        title: 'Web Developer',
        company: 'BlueWave Software Engineering',
        duration: 'January 2018 – February 2021',
        details: [
            'Developed and managed WordPress websites using Elementor, ensuring responsive design, optimized site architecture, and seamless user experiences across devices, increasing client retention by 28%.',
            'Designed a wide range of marketing materials including brochures, flyers, banners, billboards, and digital ads, aligning with brand guidelines and improving customer engagement metrics by 32%.',
            'Integrated third-party marketing tools and plugins into WordPress environments, enabling automation of lead capture and campaign tracking systems, improving marketing efficiency by 27%.',
            'Utilized Chrome DevTools and debugging tools to identify and resolve front-end and performance issues, reducing bug resolution time by 40% and improving site stability.',
            'Optimized website performance through image compression, caching strategies, and script minimization, improving PageSpeed scores by 35% and reducing server load.',
            'Coordinated with cross-functional teams to define project scope, timelines, and deliverables, ensuring on-time delivery of over 40 client projects annually.',
            'Managed DNS settings, domain configurations, and hosting environments, ensuring reliable deployment and minimizing technical disruptions.',
            'Implemented backup and restore procedures, ensuring data integrity and reducing risk of data loss incidents by 50%.',
            'Followed SOPs and QMS processes to ensure consistency, quality, and efficiency across all design and development outputs.',
        ],
    },
    {
        title: 'Junior Web Developer',
        company: 'InnovaTech Systems',
        duration: 'June 2016 – December 2017',
        details: [
            'Assisted in developing WordPress websites using Elementor, translating design mockups into responsive layouts and improving overall site usability and visual consistency.',
            'Created marketing assets including social media posts, blog graphics, and email templates using Adobe Photoshop and Canva, contributing to a 20% increase in audience engagement.',
            'Supported website maintenance tasks including plugin updates, bug fixes, and performance monitoring, ensuring stable and secure web environments.',
            'Conducted testing across multiple browsers and devices to ensure compatibility and responsive design, reducing UI-related issues by 30%.',
            'Collaborated with senior developers and designers to deliver integrated marketing campaigns, aligning visual design with technical implementation.',
            'Applied basic SEO and performance optimization techniques, improving search visibility and page load performance by 18%.',
            'Assisted in managing website backups and security configurations, contributing to improved system reliability and reduced vulnerability exposure.',
            'Maintained documentation for development updates and design changes, supporting team knowledge sharing and process improvement initiatives.',
            'Participated in Agile workflows, contributing to sprint planning and iterative delivery of web and design features.',
        ],
    },
];

export const MY_EDUCATION = [
    {
        title: 'Bachelor of Science in Computer Science',
        company: 'Ateneo de Manila University',
        duration: '06/2012 – 05/2016',
        details: [
            'Loyola Heights, Quezon City, Philippines',
        ],
    },
];

