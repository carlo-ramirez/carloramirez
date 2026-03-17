import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'n97651900@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Thomas, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/ThomasTanner',
};

export const SOCIAL_LINKS = [
    // { name: 'github', url: 'https://github.com/ThomasTanner' },
    // { name: 'linkedin', url: 'https://www.linkedin.com/in/thomas-tanner-009444242/' },
    // { name: 'facebook', url: 'https://www.facebook.com/thomas.tanner.9230' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        { name: 'HTML5', icon: '/logo/html.png' },
        { name: 'CSS3', icon: '/logo/css.png' },
        { name: 'JavaScript (ES6+)', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Vue.js', icon: '/logo/vue.png' },
        { name: 'Redux', icon: '/logo/redux.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
        { name: 'Sass', icon: '/logo/sass.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    cms: [
        { name: 'WordPress', icon: '/logo/wordpress.png' },
        { name: 'Wix', icon: '/logo/wix.webp' },
        { name: 'Elementor', icon: '/logo/elementor.png' },
        { name: 'Divi', icon: '/logo/divi.jpg' },
        { name: 'WPBakery', icon: '/logo/wpbakery.png' },
    ],
    backend: [
        { name: 'PHP', icon: '/logo/php.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'NestJS', icon: '/logo/nest.svg' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Prisma', icon: '/logo/prisma.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Figma', icon: '/logo/figma.png' },
    ],
    hosting: [
        { name: 'DNS Management', icon: '/logo/dns.png' },
        { name: 'SSL Configuration', icon: '/logo/ssl.png' },
        { name: 'Hosting Setup', icon: '/logo/hosting.png' },
        { name: 'SiteGround', icon: '/logo/siteground.png' },
        { name: 'WP Engine', icon: '/logo/wp.svg' },
        { name: 'GoDaddy', icon: '/logo/godaddy.png' },
        { name: 'Bluehost', icon: '/logo/bluehost.webp' },
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
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
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
        techStack: ['Vue.js', 'JavaScript', 'Sass', 'Firebase'],
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
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
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
        techStack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
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
        techStack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
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
        techStack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
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
        techStack: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
        thumbnail: '/projects/thumbnail/lwfellowshipchurch.png',
        longThumbnail: '/projects/long/lwfellowshipchurch.png',
        images: ['/projects/lwfellowshipchurch/1.png', '/projects/lwfellowshipchurch/2.png', '/projects/lwfellowshipchurch/3.png', '/projects/lwfellowshipchurch/4.png', '/projects/lwfellowshipchurch/5.png', '/projects/lwfellowshipchurch/6.png', '/projects/lwfellowshipchurch/7.png', '/projects/lwfellowshipchurch/8.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Frontend Developer',
        company: 'Northbridge Financial Systems',
        duration: '03/2021 – 11/2025',
        details: [
            'Develop high-converting landing pages and marketing websites using HTML5, CSS3, JavaScript, and modular frontend architecture, translating Figma designs into responsive interfaces optimized for desktop, tablet, and mobile devices.',
            'Write and implement conversion-focused copy for hero sections, CTAs, lead forms, and landing page messaging, improving lead conversion rates by 34% across multiple service-industry campaigns.',
            'Collaborate closely with marketing strategists to align UX layout, messaging hierarchy, and CTA placement with campaign goals and user acquisition strategies.',
            'Optimize page performance through asset compression, lazy loading, CSS/JS minimization, and performance auditing, reducing average page load time by 45% and improving Core Web Vitals metrics.',
            'Integrate CRM systems, marketing automation platforms, and third-party APIs including form tracking and lead routing tools to automate inbound lead capture and follow-up workflows.',
            'Implement SEO-friendly page structures including semantic HTML, schema markup, metadata optimization, and fast-loading page frameworks, increasing organic traffic by 27%.',
            'Maintain and enhance frontend codebases for 40+ lead-generation websites supporting local service businesses across multiple industries.',
            'Build reusable UI components and responsive layout systems ensuring design consistency across campaign pages and microsites.',
            'Manage Git-based version control and collaborate with designers and backend developers to maintain scalable deployment workflows.',
        ],
    },
    {
        title: 'Web Developer',
        company: 'BlueWave Software Engineering',
        duration: '01/2018 – 02/2021',
        details: [
            'Built responsive marketing websites and landing pages from Figma and wireframes using HTML5, CSS3, JavaScript, and lightweight frontend frameworks, focusing on conversion-driven layouts.',
            'Implemented persuasive landing page copywriting strategies including headline optimization, benefit-driven messaging, and high impact CTA structures.',
            'Integrated lead capture forms and CRM platforms such as HubSpot and custom REST API endpoints to streamline lead management pipelines.',
            'Conducted A/ B testing experiments on landing page sections and CTAs, improving campaign conversion performance by 22%.',
            'Optimized front-end architecture and asset loading strategies to improve page performance scores by 40% while maintaining SEO compliance.',
            'Developed responsive layouts using Flexbox and CSS Grid, ensuring seamless performance across mobile and desktop traffic sources.',
            'Collaborated with internal marketing teams to design conversion funnels and user journeys supporting paid advertising campaigns and SEO-driven traffic.',
            'Maintained WordPress-based landing pages and implemented lightweight custom templates to support marketing campaigns without heavy page builder dependencies.',
            'Supported campaign deployments for 100k+ monthly visitors across multiple digital advertising funnels.',
        ],
    },
    {
        title: 'Junior Frontend Developer',
        company: 'InnovaTech Systems',
        duration: '06/2016 – 12/2017',
        details: [
            'Developed responsive landing pages and campaign microsites using HTML, CSS, and JavaScript, focusing on performance and lead capture optimization.',
            'Assisted in implementing conversion-focused UI elements including CTA buttons, trust sections, testimonial blocks, and lead generation forms. Converted design mockups and wireframes into responsive front-end layouts while maintaining cross-browser compatibility.',
            'Supported SEO optimization initiatives including structured markup, metadata implementation, and page speed improvements.',
            'Implemented integrations with third-party marketing tools and analytics platforms for campaign tracking and reporting.',
            'Optimized front-end code through CSS refactoring, JavaScript minimization, and improved asset delivery pipelines.',
            'Collaborated with designers and marketers in Agile workflows to support rapid campaign launches.',
            'Assisted with maintenance and updates across multiple marketing websites supporting paid advertising funnels.',
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
