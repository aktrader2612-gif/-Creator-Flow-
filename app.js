/**
 * CreatorFlow — 25+ Viral & Battle-Tested AI Prompts Library
 * Categorized, searchable, 1-click copy, and live prompt builder logic.
 * Card badges & platform tags completely removed.
 */

const PROMPTS_DATA = [
  // --- FREELANCING & CLIENT ACQUISITION ---
  {
    id: 1,
    title: "High-Converting Upwork Proposal (Hook + Proof + CTA)",
    category: "freelancing",
    prompt: `You are an elite freelance pitch specialist who has closed over $500k on Upwork. Write a concise, 140-word proposal for this job post:

Job Description: [Paste Client Job Description Here]
My Core Skills: [e.g., Next.js, Stripe Integration, Tailwind CSS]
My Relevant Proof: [e.g., Built 3 e-commerce platforms with sub-1.2s load speeds]

Structure:
- Line 1: Pattern-interrupt hook showing I immediately identified their biggest technical obstacle.
- Paragraph 2: Exactly how I will solve it in 3 clear steps + 1 bullet of proof.
- Line 3: Low-friction CTA asking 1 smart technical question. (No generic 'Dear Hiring Manager' or fluff).`
  },
  {
    id: 2,
    title: "Cold Email Client Outreach (Problem-Agitate-Solve)",
    category: "freelancing",
    prompt: `Act as a B2B direct-response copywriter. Write a 90-word cold outreach email using the PAS framework:

Target Prospect: [e.g., E-commerce Founder in Fitness Niche]
Observed Pain Point: [e.g., Abandoned cart rate is high due to multi-step checkout]
My Solution: [e.g., 1-Click Fast Checkout redesign]
My Offer: [e.g., Free 5-minute Loom audit of their checkout funnel]

Requirements:
- Subject Line: Under 4 words, casual, curiosity-driven (all lowercase).
- Body: Direct, zero corporate jargon, friendly and respectful.
- CTA: "Open to seeing a 2-minute video walkthrough?"`
  },
  {
    id: 3,
    title: "Polite Scope Creep Boundary & Add-On Upsell",
    category: "freelancing",
    prompt: `Act as a seasoned freelance project manager. Draft a polite, professional, and firm email to a client requesting extra features outside the original scope:

Extra Work Requested: [e.g., 4 additional custom dashboard widgets]
Original Agreed Scope: [e.g., Core analytics screen with 3 standard charts]
Estimated Extra Cost / Time: [$450 / 3 days]

The email must:
1. Validate their idea as valuable for the product.
2. Clearly distinguish that this belongs in 'Phase 2' or an add-on change order.
3. Provide the exact price/timeline to add it right now or offer to log it for post-launch.`
  },
  {
    id: 4,
    title: "Freelance Rate Increase Announcement Letter",
    category: "freelancing",
    prompt: `Write a professional, warm email to existing long-term clients announcing an upcoming rate increase from $[Current Rate] to $[New Rate] effective [Date, e.g., in 30 days].

Key Points to Include:
- Sincere gratitude for their partnership and recent milestone achievements together.
- Context: Continued investment in advanced tools, increased demand, and maintaining top-tier delivery speed.
- Loyalty perk: Honor the current rate for all projects booked or prepaid before the effective date.`
  },
  {
    id: 5,
    title: "5-Star Client Testimonial & Case Study Interview",
    category: "freelancing",
    prompt: `You are a client success manager. Create 5 easy, frictionless questions to send to a happy client ([Client Name/Industry]) upon finishing [Project Name]:

Goal: Elicit specific metrics (revenue gained, time saved, conversion increase) rather than vague compliments.
Draft an intro message explaining that answering these 5 short bullet points will take less than 3 minutes.`
  },

  // --- MARKETING, COPYWRITING & SEO ---
  {
    id: 6,
    title: "Viral LinkedIn Post (Open Loop Hook + Framework)",
    category: "marketing",
    prompt: `Act as a top 0.1% LinkedIn creator with 400,000+ followers. Write a high-engagement post based on this insight:

Topic / Core Lesson: [e.g., Why working 60 hours a week was destroying my client output, and the 20-hour system that doubled my income]
Target Audience: [Freelancers, Creators, Founders]

Format Guidelines:
- Hook (Line 1): 8-12 words that trigger curiosity or challenge a common belief.
- Re-hook (Line 2): Adds tension or proof.
- Body: 5-7 concise, 1-2 sentence paragraphs with double line breaks for ultra-clean mobile scanning.
- Actionable Framework: 3 bullet points.
- Takeaway / Closing Question: Ask an open-ended question to spark 50+ comments.`
  },
  {
    id: 7,
    title: "Viral Twitter / X Thread (10x Repurposing)",
    category: "marketing",
    prompt: `Act as a viral Twitter / X ghostwriter. Turn this article/idea into an 8-tweet viral thread:

Core Concept: [e.g., 7 free AI tools that save 15 hours every week]

Structure:
- Tweet 1 (Hook): Must contain a bold promise + bookmark incentive ("Bookmark this before you forget").
- Tweets 2-7: Each tweet covers 1 tool/tip with: What it is, The #1 use case, and an actionable mini-prompt.
- Tweet 8 (Summary & CTA): Recap the main takeaway and invite a Retweet on the 1st tweet.`
  },
  {
    id: 8,
    title: "High-Converting Landing Page Hero Section Copy",
    category: "marketing",
    prompt: `Act as a senior direct-response landing page copywriter. Write 3 complete variations of the Above-The-Fold (Hero Section) for this product:

Product Name: [e.g., CreatorFlow]
Target User: [e.g., Freelance creators & designers]
Main Transformation: [e.g., Spend 80% less time drafting emails and proposals]

For each variation, generate:
1. H1 Headline (Clear, benefit-driven, max 10 words)
2. Subheadline (2 sentences explaining HOW it works + risk reversal)
3. Primary CTA Button Text & Micro-copy (e.g. 'Get Instant Access — No Credit Card Needed')`
  },
  {
    id: 9,
    title: "SEO Semantic Topic Cluster & Content Silo",
    category: "marketing",
    prompt: `Act as an enterprise SEO architect. Design a high-authority topic cluster around the seed keyword: "[Your Main Keyword]".

Generate:
1. Pillar Page Title & Search Intent breakdown.
2. 8 Supporting Sub-topic Articles (Cluster Content) with targeted Long-Tail Keywords (Search volume > 500, KD < 30).
3. Exact internal linking map showing how each cluster article links up to the Pillar and sideways to related clusters.
4. Primary search intent for each article (Informational, Transactional, Commercial).`
  },
  {
    id: 10,
    title: "High-CTR YouTube Video Titles & 15-Second Hook",
    category: "marketing",
    prompt: `Act as a YouTube viral strategist. For a video about "[Your Video Topic]":

Generate:
1. 10 Click-Worthy Titles (Categorized: Curiosity, Fear/Warning, High Reward, Contrarian).
2. A gripping 15-second opening hook script using the 'Hook, Problem, Preview' formula to prevent audience drop-off in the first 30 seconds.`
  },

  // --- CODING, TECH & WEB DEV ---
  {
    id: 11,
    title: "Senior Principal Code Review & Security Audit",
    category: "coding",
    prompt: `You are a Principal Software Engineer and Security Auditor. Review the following code snippet:

Language / Framework: [e.g., Python / TypeScript / Go]
Code:
\`\`\`
[Paste your code here]
\`\`\`

Perform a deep review covering:
1. Time & Space Complexity (Big-O analysis).
2. Potential security vulnerabilities (SQLi, XSS, memory leaks, unhandled exceptions).
3. Provide the refactored, production-ready code adhering to SOLID principles.
4. Write 3 automated unit test cases including boundary/edge conditions.`
  },
  {
    id: 12,
    title: "SQL Query Performance Optimization & Index Tuning",
    category: "coding",
    prompt: `You are a Database Administrator specializing in query optimization. 

Scenario & Slow Query:
\`\`\`sql
[Paste your SQL query here]
\`\`\`

Database Size: [e.g., 2M rows in orders table]
Goal: Reduce execution time from 4.2s to sub-50ms.

Provide:
1. Diagnosed bottleneck (e.g. Sequential table scan, improper JOIN order).
2. The optimized SQL query rewrite.
3. Recommended B-Tree or Composite Index DDL statements.`
  },
  {
    id: 13,
    title: "Python Automation Script Generator",
    category: "coding",
    prompt: `You are a senior Python developer. Write a robust, production-grade Python script to automate the following task:

Task: [e.g., Fetch latest tech articles from an RSS feed/API, extract title and summary, and save cleanly into a formatted daily CSV or database]

Requirements:
- Use clean modern libraries (e.g., requests, BeautifulSoup4, pydantic).
- Include comprehensive try-except error handling, rate limiting delay, and logging.
- Add docstrings and comments explaining how to run it via cron or background tasks.`
  },
  {
    id: 14,
    title: "Regex (Regular Expression) Pattern Builder & Explainer",
    category: "coding",
    prompt: `You are a Regular Expression specialist. Write a clean, resilient Regex pattern for the following validation requirement:

Requirement: [e.g., Match valid international phone numbers with country code, optional spaces, and hyphens]
Test Cases to Match: [e.g., +1-800-555-0199, +44 20 7946 0991]
Test Cases to Fail: [e.g., 12345, ++123-abc]

Output:
1. Exact Regular Expression pattern (with flags).
2. Line-by-line breakdown of tokens and capture groups.
3. Quick JavaScript & Python implementation snippets.`
  },

  // --- MIDJOURNEY & VISUAL AI ---
  {
    id: 15,
    title: "Photorealistic Studio Product Photography",
    category: "midjourney",
    prompt: `Commercial luxury studio product photography of a [Product, e.g. Minimalist matte black skincare serum glass dropper bottle], set on a raw beige travertine stone pedestal, surrounded by gentle water ripples and delicate monstera leaf shadows, soft warm morning lighting, dramatic rim light, shot on Hasselblad H6D-100c, 85mm lens, f/2.8, hyper-realistic, 8k resolution, photorealistic textures --ar 4:5 --v 6.0 --style raw`
  },
  {
    id: 16,
    title: "Modern 3D Isometric SaaS App Icon & Graphic",
    category: "midjourney",
    prompt: `Modern 3D isometric illustration of [Concept, e.g. Cloud AI data encryption shield with floating glowing tokens], sleek frosted glass, clay morphism, vibrant electric indigo and neon turquoise glow accents, studio lighting, clean background, rendered in Blender 3D and Octane Render, 8k, UI design asset --ar 1:1 --v 6.0`
  },
  {
    id: 17,
    title: "Clean Minimalist Brand Vector Logo Design",
    category: "midjourney",
    prompt: `Minimalist vector logo for a [Company Type, e.g. Modern AI productivity startup called CreatorFlow], abstract geometric lightning bolt fused with infinity symbol, clean bold lines, flat 2D vector graphic, Japanese minimalism aesthetic, dual-tone royal blue and charcoal on pure white background, Paul Rand style, no gradients, high contrast --ar 1:1 --v 6.0`
  },
  {
    id: 18,
    title: "Photorealistic Cinematic Portrait (85mm Lens)",
    category: "midjourney",
    prompt: `Cinematic close-up portrait of a [Subject, e.g. Confident 30-year-old creative entrepreneur working in a modern sunlit minimalist loft], natural window light, subtle catchlights in eyes, ultra-detailed skin texture, shallow depth of field, shot on Sony A7R V with 85mm G-Master f/1.4 lens, 35mm film aesthetic, authentic color grading --ar 16:9 --v 6.0 --style raw`
  },

  // --- EXCEL, PRODUCTIVITY & DATA ---
  {
    id: 19,
    title: "Advanced Dynamic Excel / Google Sheets Formula",
    category: "productivity",
    prompt: `You are an expert Excel & Google Sheets data analyst. Write a robust dynamic formula for this exact business logic:

Scenario: [e.g., Search Table A for Customer ID, sum all completed sales from column D where Date is in Q3 2024 and Status is 'Paid', otherwise return 0 without showing #N/A errors]

Provide:
1. The exact formula using modern functions (XLOOKUP / FILTER / SUMIFS / LAMBDA).
2. Step-by-step breakdown of how each nested argument functions.
3. Troubleshooting tips if date formatting mismatches occur.`
  },
  {
    id: 20,
    title: "Executive 60-Second Meeting Minutes & Action Table",
    category: "productivity",
    prompt: `You are an Executive Chief of Staff. Summarize the following raw meeting notes/transcript into an actionable brief:

Transcript:
\`\`\`
[Paste your raw meeting notes or audio transcript]
\`\`\`

Format strictly as:
- Core Objective (1 sentence)
- Key Decisions Made (Max 3 clear bullet points)
- Action Items Matrix: [Task | Owner | Deadline | Priority]
- Critical Blockers & Open Questions`
  },
  {
    id: 21,
    title: "Weekly High-Performance Time-Block Planner",
    category: "productivity",
    prompt: `Act as an elite productivity coach for high-output founders. Create a personalized weekly time-blocking schedule based on my commitments:

My Core Goals This Week: [e.g., Ship client website, record 2 YouTube videos, 5 gym workouts]
My Work Style: [e.g., Deep work best in mornings from 8 AM - 12 PM, administrative tasks in afternoon]

Provide a structured Monday-Friday schedule with dedicated Deep Work sprints, buffer times, and energy management routines.`
  },

  // --- SOCIAL MEDIA & VIDEO CREATORS ---
  {
    id: 22,
    title: "Viral TikTok / Instagram Reels 3-Second Hook",
    category: "marketing",
    prompt: `You are a viral short-form video director with 100M+ views on TikTok & Reels. For a 30-second video about "[Your Topic, e.g. 3 AI tools for freelance writers]":

Generate 5 distinct visual & verbal opening hooks:
1. The "Negative Warning" Hook (e.g. "Stop doing X...")
2. The "Insane Secret" Hook
3. The "Visual Demonstration" Hook (text on screen + physical action)
4. The "Contrarian Challenge" Hook
5. The "Before vs After" Transformation Hook`
  },
  {
    id: 23,
    title: "Faceless YouTube Automation Script (5-Minute)",
    category: "marketing",
    prompt: `Act as a professional YouTube scriptwriter for high-retention faceless channels. Write an engaging 700-word script for:

Title: "[Your Video Title]"
Target Audience: [e.g., Aspiring entrepreneurs]

Structure in a 2-Column Table:
- Column 1: [Visuals / B-Roll / Screen Prompts / Sound Effects]
- Column 2: [Voiceover Narration with conversational pacing and open-loop retention hooks]`
  },
  {
    id: 24,
    title: "Instagram 7-Slide Educational Carousel Blueprint",
    category: "marketing",
    prompt: `Act as an Instagram growth expert. Create a complete 7-slide educational carousel on the topic: "[Your Topic]".

For each slide, specify:
- Slide 1: High-impact Title + Subtitle Hook (Designed to stop scrolling).
- Slides 2-6: Single big idea per slide (Max 25 words per slide, clean bullet points).
- Slide 7: Save & Share CTA slide with caption copy and 5 relevant hashtags.`
  }
];

// DOM Elements
const promptsContainer = document.getElementById('prompts-container');
const categoryFilterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const quickTags = document.querySelectorAll('.quick-tag');
const promptCountEl = document.getElementById('prompt-count');
const toastEl = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

// Generator Elements
const generatePromptBtn = document.getElementById('generate-prompt-btn');
const promptRoleSelect = document.getElementById('prompt-role');
const promptGoalSelect = document.getElementById('prompt-goal');
const promptToneSelect = document.getElementById('prompt-tone');
const promptTopicInput = document.getElementById('prompt-topic');
const generatedOutput = document.getElementById('generated-output');
const copyGeneratedBtn = document.getElementById('copy-generated-btn');

let currentCategory = 'all';
let searchQuery = '';

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderPrompts();
  setupEventListeners();
});

// Render Prompts Grid (Without any badges or tags)
function renderPrompts() {
  const filteredPrompts = PROMPTS_DATA.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (promptCountEl) {
    promptCountEl.textContent = `Showing ${filteredPrompts.length} prompt${filteredPrompts.length === 1 ? '' : 's'}`;
  }

  if (filteredPrompts.length === 0) {
    promptsContainer.innerHTML = `
      <div class="empty-state">
        <h3>No prompts found matching "${searchQuery}"</h3>
        <p>Try searching with different keywords or select another category above.</p>
      </div>
    `;
    return;
  }

  promptsContainer.innerHTML = filteredPrompts.map((item, index) => `
    <div class="prompt-card animated-fade-in" style="animation-delay: ${Math.min(index * 0.05, 0.5)}s;" data-id="${item.id}">
      <div class="card-inner-top">
        <div class="card-top">
          <span class="card-category">${item.category}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <div class="prompt-box">${highlightVariables(item.prompt)}</div>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm copy-card-btn" onclick="copyPromptText(${item.id})">
          Copy Prompt
        </button>
      </div>
    </div>
  `).join('');
}

// Highlight bracketed placeholder variables like [Variable]
function highlightVariables(text) {
  return text.replace(/\[([^\]]+)\]/g, '<mark>[$1]</mark>');
}

// Copy to Clipboard with Toast Notification
window.copyPromptText = function(id) {
  const promptItem = PROMPTS_DATA.find(p => p.id === id);
  if (!promptItem) return;

  navigator.clipboard.writeText(promptItem.prompt).then(() => {
    showToast(`"${promptItem.title}" copied to clipboard!`);
  }).catch(() => {
    showToast('Failed to copy text.');
  });
};

function showToast(msg) {
  if (!toastEl || !toastMsg) return;
  toastMsg.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Filter Pills
  categoryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderPrompts();
    });
  });

  // Search Input with real-time filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderPrompts();
    });
  }

  // Clear Search
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderPrompts();
      searchInput.focus();
    });
  }

  // Quick Trending Tags Click
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const tagText = tag.dataset.tag;
      searchInput.value = tagText;
      searchQuery = tagText;
      if (clearSearchBtn) clearSearchBtn.style.display = 'block';
      renderPrompts();
      document.getElementById('prompts').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Dynamic Prompt Customizer Generator
  if (generatePromptBtn) {
    generatePromptBtn.addEventListener('click', handleGeneratePrompt);
  }
  
  if (copyGeneratedBtn) {
    copyGeneratedBtn.addEventListener('click', () => {
      const text = generatedOutput.textContent;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Custom prompt copied to clipboard!');
      });
    });
  }
}

// Generate Custom Prompt logic
function handleGeneratePrompt() {
  const role = promptRoleSelect ? promptRoleSelect.value : 'Freelance Specialist';
  const goal = promptGoalSelect ? promptGoalSelect.value : 'High-Converting Proposal';
  const tone = promptToneSelect ? promptToneSelect.value : 'Professional & Persuasive';
  const topic = (promptTopicInput && promptTopicInput.value.trim()) || '[Specify your exact client background/project details here]';

  const customPrompt = `Act as an industry-leading ${role}. Your objective is to create a ${goal}.

Context & Specific Input:
- Project / Client Details: ${topic}
- Desired Tone of Voice: ${tone}
- Target Output: Deliver a high-converting, actionable, and structured draft.

Mandatory Constraints:
1. Eliminate all generic AI clichés, preamble, and robotic fillers.
2. Focus on high-intent clarity, measurable proof points, and specific value.
3. Provide 2 alternative high-impact subject lines/hooks at the very top for A/B testing.`;

  if (generatedOutput) {
    generatedOutput.textContent = customPrompt;
  }
  showToast('Custom prompt generated successfully!');
}
