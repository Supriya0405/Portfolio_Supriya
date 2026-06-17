// --- Skill Database ---
const skillsData = {
  languages: [
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'C Language', icon: 'fa-solid fa-c' },
    { name: 'SQL', icon: 'fa-solid fa-database' }
  ],
  frameworks: [
    { name: 'React.js', icon: 'fa-brands fa-react' },
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'REST APIs', icon: 'fa-solid fa-network-wired' }
  ],
  'cloud-db': [
    { name: 'AWS Cloud', icon: 'fa-brands fa-aws' },
    { name: 'Amazon EC2', icon: 'fa-solid fa-server' },
    { name: 'Amazon S3', icon: 'fa-solid fa-folder-open' },
    { name: 'Amazon RDS', icon: 'fa-solid fa-database' },
    { name: 'AWS IAM', icon: 'fa-solid fa-user-shield' },
    { name: 'AWS VPC', icon: 'fa-solid fa-network-wired' },
    { name: 'CloudFront CDN', icon: 'fa-solid fa-bolt' },
    { name: 'MongoDB', icon: 'fa-solid fa-database' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'SQLite', icon: 'fa-solid fa-database' }
  ],
  tools: [
    { name: 'Git', icon: 'fa-brands fa-git-alt' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'Postman', icon: 'fa-solid fa-envelope-open-text' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'GitHub Actions (CI/CD)', icon: 'fa-solid fa-circle-check' },
    { name: 'Vercel', icon: 'fa-solid fa-cloud' },
    { name: 'Power BI', icon: 'fa-solid fa-chart-bar' },
    { name: 'Tableau', icon: 'fa-solid fa-chart-pie' },
    { name: 'OOPs Concepts', icon: 'fa-solid fa-cube' },
    { name: 'DBMS Systems', icon: 'fa-solid fa-server' },
    { name: 'SDLC Methodologies', icon: 'fa-solid fa-rotate' },
    { name: 'Business Intelligence', icon: 'fa-solid fa-lightbulb' }
  ]
};

// --- AWS Node Details Database ---
const awsNodeData = {
  cloudfront: {
    title: "AWS CloudFront",
    subnet: "Global CDN Edge caching",
    desc: "Global content delivery network (CDN) caches static website files (HTML, CSS, JS) at edge locations worldwide to minimize server response times and deliver lightning-fast asset loading.",
    features: [
      "Secure socket layer (SSL) certificate HTTPS integrations",
      "Dynamic response routing and Cache-Control TTL headers customization",
      "DDoS defense shield configurations"
    ],
    metrics: [
      { val: "120ms", lbl: "Avg Edge Latency" },
      { val: "99.99%", lbl: "Availability SLA" }
    ],
    links: ["link-cf-vpc"]
  },
  vpc: {
    title: "Virtual Private Cloud (VPC)",
    subnet: "Private Network Boundary | 10.0.0.0/16",
    desc: "Provides a virtual network isolation envelope. Houses secure subnets separated into public zones (accessible from CloudFront/web ingress) and private databases layers.",
    features: [
      "Internet Gateways and NAT Gateways routing configuration",
      "Strict Security Group inbound/outbound rules",
      "Subnet Network Access Control Lists (NACLs)"
    ],
    metrics: [
      { val: "2 Zones", lbl: "Multi-AZ Reliability" },
      { val: "Isolated", lbl: "Database Privacy" }
    ],
    links: ["link-cf-vpc", "link-vpc-ec1", "link-vpc-ec2"]
  },
  'ec2-1': {
    title: "EC2 Web Server (Apache)",
    subnet: "Public Subnet | 10.0.1.0/24",
    desc: "AWS Elastic Compute Cloud instance hosting the frontend server running on Apache. Interfaces directly with visitors and handles presentation logic.",
    features: [
      "Custom AMI setup loaded with Apache & PHP environment utilities",
      "Dedicated IAM roles to restrict write access on filesystems",
      "Attached Elastic IPs for reliable network endpoints"
    ],
    metrics: [
      { val: "t2.micro", lbl: "Instance Size" },
      { val: "92ms", lbl: "Load Time Speed" }
    ],
    links: ["link-vpc-ec1", "link-ec1-rds", "link-ec1-s3"]
  },
  'ec2-2': {
    title: "EC2 Application Instance",
    subnet: "Public Subnet | 10.0.1.0/24",
    desc: "Houses the dynamic backend app scripts logic and orchestrates read/write requests to the centralized RDS database layer.",
    features: [
      "RESTful API route handler processes and business logic algorithms",
      "Direct DB credential retrieval from environment variables",
      "Log rotation automated cron routines"
    ],
    metrics: [
      { val: "99.8%", lbl: "Server Uptime" },
      { val: "0% Leak", lbl: "Memory Profile" }
    ],
    links: ["link-vpc-ec2", "link-ec2-rds"]
  },
  rds: {
    title: "Amazon RDS MySQL Cluster",
    subnet: "Private DB Subnet | 10.0.2.0/24",
    desc: "Fully managed SQL database instance. Isolated inside private subnets to prevent public web exposure, allowing incoming query connects ONLY from authorized EC2 nodes.",
    features: [
      "Structured Student records indexing",
      "Automated DB snapshot backup routines",
      "At-rest database filesystem encryptions"
    ],
    metrics: [
      { val: "MySQL 8", lbl: "DB Engine" },
      { val: "< 8ms", lbl: "Read Queries" }
    ],
    links: ["link-ec1-rds", "link-ec2-rds"]
  },
  s3: {
    title: "Amazon S3 Assets Bucket",
    subnet: "Object Storage Bucket",
    desc: "Hosts structural static objects, reports uploads, and student documents storage with high durability and granular bucket access policy controls.",
    features: [
      "Fine-grained IAM policy rule restriction",
      "Encrypted cloud uploads security",
      "Cross-region replicas enablement option"
    ],
    metrics: [
      { val: "11 9s", lbl: "Data Durability" },
      { val: "Unlimited", lbl: "Storage Scaling" }
    ],
    links: ["link-ec1-s3"]
  }
};

// --- Certifications Database ---
const certificationsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "2026",
    category: "aws",
    link: "https://drive.google.com/file/d/17YpxD33RQQm3REUoiBO8VwJssnW_UzDc/view"
  },
  {
    title: "Data Analytics Virtual Experience Program",
    issuer: "Deloitte",
    date: "2026",
    category: "deloitte",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_696343bd2ba25d20e370dd46_1775114021620_completion_certificate.pdf"
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    date: "2024",
    category: "udemy",
    link: "https://www.udemy.com/certificate/UC-8ecb897a-d987-4df3-bb0f-b2b2dd94a06a/"
  },
  {
    title: "SQL Gold Badge Certificate",
    issuer: "HackerRank",
    date: "2024",
    category: "hackerrank",
    link: "https://www.hackerrank.com/certificates/735a74113e5e"
  },
  {
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "2024",
    category: "hackerrank",
    link: "https://www.hackerrank.com/certificates/e381a1923e32"
  },
  {
    title: "Data Structures and Algorithms (DSA)",
    issuer: "Udemy",
    date: "2024",
    category: "udemy",
    link: "https://www.udemy.com/certificate/UC-dfb1e0f2-3156-4486-8c63-14b5e6b8c56a/"
  }
];

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initSkillsTabs();
  initAWSVisualizer();
  initCertsFilter();
  initTerminal();
  initScrollReveal();
});

// 1. Header Scroll Styling
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active nav links
    const sections = document.querySelectorAll('section, footer');
    let currentSectionId = 'hero';
    
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 100;
      if (window.scrollY >= secTop) {
        currentSectionId = sec.getAttribute('id') || 'hero';
      }
    });
    
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${currentSectionId}`) {
        a.classList.add('active');
      }
    });
  });
}

// 2. Skills Tabs Switcher
function initSkillsTabs() {
  const tabs = document.querySelectorAll('.skills-tab-btn');
  const panelItems = document.getElementById('skills-panel-items');
  const panelTitle = document.getElementById('skills-panel-title');
  
  function renderSkills(category) {
    panelItems.innerHTML = '';
    const skills = skillsData[category] || [];
    
    // Change panel title
    const activeTab = document.querySelector(`.skills-tab-btn[data-category="${category}"]`);
    const categoryName = activeTab.querySelector('span').innerText;
    let iconClass = 'fa-code';
    if (category === 'frameworks') iconClass = 'fa-cubes';
    if (category === 'cloud-db') iconClass = 'fa-cloud';
    if (category === 'tools') iconClass = 'fa-screwdriver-wrench';
    
    panelTitle.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${categoryName}</span>`;
    
    skills.forEach((skill, idx) => {
      const badge = document.createElement('div');
      badge.className = 'skill-badge';
      badge.style.opacity = '0';
      badge.style.transform = 'translateY(15px)';
      badge.style.transition = `opacity 0.3s ease ${idx * 0.05}s, transform 0.3s ease ${idx * 0.05}s`;
      badge.innerHTML = `<i class="${skill.icon}"></i> <span>${skill.name}</span>`;
      panelItems.appendChild(badge);
      
      // Trigger animations in next frame
      setTimeout(() => {
        badge.style.opacity = '1';
        badge.style.transform = 'translateY(0)';
      }, 50);
    });
  }
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderSkills(cat);
    });
  });
  
  // Initial Load
  renderSkills('languages');
}

// 3. AWS Cloud Visualizer Node Interaction
function initAWSVisualizer() {
  const nodes = document.querySelectorAll('.aws-node');
  const infoTitle = document.getElementById('info-node-title');
  const infoSub = document.getElementById('info-node-subnet');
  const infoDesc = document.getElementById('info-node-desc');
  const infoFeatures = document.getElementById('info-node-features');
  const infoMetrics = document.getElementById('info-node-metrics');
  
  function updateVisualizer(nodeId) {
    // 1. Remove active state from all nodes
    nodes.forEach(n => n.classList.remove('active'));
    
    // 2. Add active to current node
    const activeNode = document.getElementById(`aws-node-${nodeId}`);
    if (activeNode) activeNode.classList.add('active');
    
    // 3. Reset network SVG connection lines
    const paths = document.querySelectorAll('.network-link');
    paths.forEach(p => {
      p.classList.remove('active');
      p.classList.remove('active-secondary');
    });
    
    // 4. Update node descriptions in side panel
    const data = awsNodeData[nodeId];
    if (data) {
      infoTitle.innerText = data.title;
      infoSub.innerText = data.subnet;
      infoDesc.innerText = data.desc;
      
      // Populate features
      infoFeatures.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-shield-halved"></i> <span>${feat}</span>`;
        infoFeatures.appendChild(li);
      });
      
      // Populate metrics
      infoMetrics.innerHTML = '';
      data.metrics.forEach(met => {
        const div = document.createElement('div');
        div.className = 'cloud-metric';
        div.innerHTML = `<span class="cloud-metric-val">${met.val}</span><span class="cloud-metric-lbl">${met.lbl}</span>`;
        infoMetrics.appendChild(div);
      });
      
      // 5. Highlight active network path connections
      data.links.forEach((linkId, idx) => {
        const link = document.getElementById(linkId);
        if (link) {
          if (idx === 0) {
            link.classList.add('active');
          } else {
            link.classList.add('active-secondary');
          }
        }
      });
    }
  }
  
  nodes.forEach(node => {
    // VPC boundary is layout decorative, but can handle clicks as well
    node.addEventListener('click', () => {
      const nodeId = node.getAttribute('data-node');
      if (nodeId) updateVisualizer(nodeId);
    });
  });
  
  // Initial visualizer node
  updateVisualizer('cloudfront');
}

// 4. Certifications Showcase Filtering
function initCertsFilter() {
  const container = document.getElementById('certs-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  function renderCerts(filter = 'all') {
    container.innerHTML = '';
    const filteredData = filter === 'all' 
      ? certificationsData 
      : certificationsData.filter(c => c.category === filter);
      
    filteredData.forEach((cert, idx) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95) translateY(10px)';
      card.style.transition = `opacity 0.3s ease ${idx * 0.05}s, transform 0.3s ease ${idx * 0.05}s`;
      
      card.innerHTML = `
        <div class="cert-card-header">
          <span class="cert-issuer">${cert.issuer}</span>
          <h3 class="cert-title">${cert.title}</h3>
        </div>
        <div class="cert-card-footer">
          <span class="cert-date">${cert.date}</span>
          <a href="${cert.link}" class="cert-link" target="_blank" rel="noreferrer noopener">
            <span>Verify</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      `;
      container.appendChild(card);
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)';
      }, 50);
    });
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderCerts(filter);
    });
  });
  
  // Initial render
  renderCerts('all');
}

// 5. Retro Developer Command Terminal
function initTerminal() {
  const terminal = document.getElementById('terminal-drawer');
  const toggleBtn = document.getElementById('terminal-toggle-btn');
  const heroBtn = document.getElementById('btn-hero-terminal');
  const closeBtn = document.getElementById('terminal-close-btn');
  const minBtn = document.getElementById('terminal-minimize-btn');
  const header = document.getElementById('terminal-header');
  const input = document.getElementById('terminal-input');
  const history = document.getElementById('terminal-history');
  
  // Toggle Open/Closed Drawer
  function toggleTerminal() {
    terminal.classList.toggle('open');
    if (terminal.classList.contains('open')) {
      input.focus();
    }
  }
  
  toggleBtn.addEventListener('click', toggleTerminal);
  if (heroBtn) heroBtn.addEventListener('click', toggleTerminal);
  closeBtn.addEventListener('click', () => terminal.classList.remove('open'));
  minBtn.addEventListener('click', () => terminal.classList.remove('open'));
  header.addEventListener('click', (e) => {
    if (e.target !== closeBtn && e.target !== minBtn && !e.target.classList.contains('t-btn')) {
      toggleTerminal();
    }
  });
  
  // Handle Input Commands
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.value;
      const cmd = rawCmd.trim().toLowerCase();
      input.value = '';
      
      if (cmd.length > 0) {
        executeCommand(cmd, rawCmd);
      }
    }
  });
  
  function executeCommand(cmd, rawCmd) {
    // Append entered command first
    appendLine(`supriya@aws-cloud:~$ ${rawCmd}`, 'terminal-prompt-line', 'white');
    
    switch (cmd) {
      case 'help':
        appendLine(`Available Commands:
  - about       : Briefly introduces Supriya
  - skills      : Output a visual technical roadmap
  - projects    : Details primary project deployments
  - achievements: Lists verified coding accomplishments
  - contact     : Display contact and connection links
  - clear       : Clear terminal screen logs
  - exit        : Close the terminal emulator`, 'terminal-line', '#a1a1aa');
        break;
        
      case 'about':
        appendLine(`Supriya DV is an aspiring Cloud & Full-Stack developer based in Tamil Nadu.
Currently pursuing Engineering at Sri Eshwar College of Engineering (7.3 CGPA).
Specializes in AWS networking architectures (VPC subnets, compute nodes isolation, databases layers) 
alongside full-stack MERN workflows.`, 'terminal-line', '#f3f4f6');
        break;
        
      case 'skills':
        appendLine(`=================== TECH ROADMAP ===================
[1] Languages     : Java, Python, C, SQL
[2] Web Tech      : HTML5, CSS3, React.js, Tailwind CSS, Bootstrap
[3] Databases     : MySQL, MongoDB, SQLite
[4] AWS Cloud     : EC2, S3, RDS, IAM, VPC Subnets, CloudFront
[5] Tools & CI/CD : Git, GitHub, Postman, Docker, GitHub Actions`, 'terminal-line', '#06b6d4');
        break;
        
      case 'projects':
        appendLine(`---------------- PROJECTS LOG ----------------
* STUDENT MANAGEMENT SYSTEM (AWS CLOUD)
  - Stack: AWS EC2, AWS RDS, VPC Subnets, Apache, PHP, MySQL.
  - Setup: Secure multi-tier networking architecture isolation.
  
* CuraAI - MEDICAL CHATBOT SYSTEM
  - Stack: Python, Gradio, LLM/API, SQLite, Speech/Audio, MongoDB.
  - Setup: Voice-enabled patient symptom diagnostics assistant.

* DQ-FIX AGENT (AI DATA QUALITY AGENT)
  - Stack: Python, Streamlit, Pandas, YAML, Groq LLM, Ollama.
  - Setup: Intelligent data diagnostics, cleansing, and repair system.`, 'terminal-line', '#6366f1');
        break;
        
      case 'achievements':
        appendLine(`★ LEETCODE  : Solved 200+ DSA algorithmic exercises.
★ SKILLRACK : Solved 250+ logic aptitude challenges.`, 'terminal-line', '#ec4899');
        break;
        
      case 'contact':
        appendLine(`Connect directly:
  - Email    : supriyavenkatasalapathi205@gmail.com
  - Phone    : +91 98659 88663
  - LinkedIn : linkedin.com/in/supriyadv (mock)
  - GitHub   : github.com/supriyadv (mock)`, 'terminal-line', '#10b981');
        break;
        
      case 'clear':
        history.innerHTML = '';
        break;
        
      case 'exit':
        terminal.classList.remove('open');
        break;
        
      default:
        appendLine(`Command '${cmd}' not recognized. Type 'help' for support list.`, 'terminal-line', '#ef4444');
        break;
    }
    
    // Auto-scroll terminal body to bottom
    const terminalBody = document.getElementById('terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
  
  function appendLine(text, className = 'terminal-line', color = '') {
    const el = document.createElement('div');
    el.className = className;
    if (color) el.style.color = color;
    el.innerText = text;
    history.appendChild(el);
  }
}

// 6. Scroll Reveal Animations
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once triggered to make smooth
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // trigger slightly before entering screen viewport
  });
  
  reveals.forEach(rev => {
    observer.observe(rev);
  });
}
