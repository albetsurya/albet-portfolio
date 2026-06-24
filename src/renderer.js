// src/renderer.js
// Pure DOM-rendering helpers. Each function receives data and writes to the DOM.

/** Skill category display names */
const SKILL_TITLES = {
  languages:  'Programming Languages',
  frameworks: 'Frameworks & UI Libraries',
  backend:    'Backend & Cloud Database',
  tools:      'DevOps & Workflow Development tools',
}

/** Language icon map for project cards */
const LANG_ICONS = {
  js:   '<i class="fab fa-js text-yellow-500"></i>',
  ts:   '<i class="fab fa-js text-blue-400"></i>',
  php:  '<i class="fab fa-php text-indigo-400"></i>',
  html: '<i class="fab fa-html5 text-orange-500"></i>',
}

// ─── Profile ────────────────────────────────────────────────────────────────

export function renderProfile(profile) {
  document.getElementById('hero-name').textContent     = profile.name
  document.getElementById('hero-title').textContent    = profile.title
  document.getElementById('hero-about').textContent    = profile.about
  document.getElementById('hero-location').textContent = profile.location

  if (profile.email) {
    document.getElementById('nav-cta').href = 'mailto:' + profile.email
  }
  document.getElementById('link-linkedin').href = profile.linkedin || '#'
  document.getElementById('link-github').href   = profile.github   || '#'

  // Tagline chips
  const taglineWrapper = document.getElementById('hero-tagline')
  taglineWrapper.innerHTML = profile.tagline
    .split('·')
    .map(item => `<span class="text-[#ce9178] hover:text-white transition-colors duration-150 cursor-pointer">"${item.trim()}"</span>, `)
    .join('')

  // Stats grid
  const statsWrapper = document.getElementById('stats-container')
  statsWrapper.innerHTML = profile.stats
    .map(stat => `
      <div class="bg-[#252526] border border-[#2b2b2b] p-4 rounded font-mono hover:border-[#3e3e3e] transition-all duration-200">
        <p class="text-[#9cdcfe] text-sm font-mono">
          ${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}
          : <span class="text-[#ce9178]">${stat.value}</span>
        </p>
      </div>`)
    .join('')
}

// ─── Skills ─────────────────────────────────────────────────────────────────

export function renderSkills(skills) {
  const grid = document.getElementById('skills-grid')
  grid.innerHTML = ''

  let idx = 0
  for (const [category, list] of Object.entries(skills)) {
    if (list.length === 0) continue

    const bars = list
      .map(skill => `
        <div class="mb-3 group/item">
          <div class="flex justify-between text-xs mb-1">
            <span class="text-[#9cdcfe] group-hover/item:text-white transition-colors">${skill.name}</span>
            <span class="text-[#b5cea8] font-mono">${skill.pct}%</span>
          </div>
          <div class="w-full bg-[#3e3e3e] rounded-full h-1 overflow-hidden">
            <div class="h-1 rounded-full bg-[#007acc] animate-skill-bar" style="width:${skill.pct}%"></div>
          </div>
        </div>`)
      .join('')

    grid.innerHTML += `
      <div class="p-4 bg-[#252526] rounded border border-[#2b2b2b] hover:border-[#3c3c3c] transition-all duration-300 opacity-0 animate-reveal"
           style="animation-delay:${idx * 100}ms">
        <h3 class="text-xs font-bold text-[#4fc1ff] mb-3 border-b border-[#3c3c3c] pb-1.5 font-sans">
          . ${SKILL_TITLES[category] ?? category}
        </h3>
        ${bars}
      </div>`
    idx++
  }
}

// ─── Experience ──────────────────────────────────────────────────────────────

export function renderExperience(experiences) {
  const timeline = document.getElementById('experience-timeline')
  timeline.innerHTML = ''

  experiences.forEach((exp, i) => {
    const tags = exp.tags
      .map(t => `<span class="text-[10px] bg-[#1e1e1e] border border-[#3c3c3c] text-zinc-400 px-2 py-0.5 rounded">${t}</span>`)
      .join('')

    const resps = exp.responsibilities
      .map(r => `
        <li class="text-xs text-zinc-400 leading-relaxed list-none pl-4 relative
                   before:content-['-'] before:absolute before:left-0 before:text-[#569cd6]">
          ${r}
        </li>`)
      .join('')

    const activeBadge = exp.current
      ? `<span class="ml-2 text-[10px] bg-[#007acc]/20 text-[#4fc1ff] border border-[#007acc]/50 px-1.5 py-0.5 rounded animate-pulse">Active</span>`
      : ''

    timeline.innerHTML += `
      <div class="relative pl-6 before:content-[''] before:absolute before:left-[-4px] before:top-1.5
                  before:w-2 before:h-2 before:bg-[#007acc] before:rounded-full opacity-0 animate-reveal"
           style="animation-delay:${i * 150}ms">
        <div class="p-4 bg-[#252526]/50 rounded border border-[#2b2b2b]
                    hover:border-[#007acc]/40 hover:bg-[#252526] hover:translate-x-1.5 transition-all duration-300 group">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h3 class="text-sm font-bold text-white group-hover:text-[#4fc1ff] transition-colors">${exp.position}</h3>
              <p class="text-xs text-zinc-400">${exp.company} <span class="text-zinc-600">· ${exp.type}</span> ${activeBadge}</p>
            </div>
            <div class="text-left sm:text-right text-xs shrink-0">
              <span class="text-[#6a9955]">${exp.duration}</span>
              <div class="text-zinc-500 text-[11px] mt-0.5"><i class="fas fa-map-marker-alt mr-1"></i>${exp.location}</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-1 my-3">${tags}</div>
          <ul class="space-y-1.5 mt-2 border-t border-[#3c3c3c] pt-2">${resps}</ul>
        </div>
      </div>`
  })
}

// ─── Education ───────────────────────────────────────────────────────────────

export function renderEducation(education) {
  const container = document.getElementById('education-container')
  container.innerHTML = ''

  education.forEach((ed, i) => {
    const achievements = ed.achievements
      .map(a => `<p class="text-xs text-[#6a9955] mt-1">// <span class="font-sans text-zinc-400">${a}</span></p>`)
      .join('')

    const skills = ed.skills
      .map(s => `<span class="text-[10px] text-[#4fc1ff] bg-[#1e1e1e] border border-[#2b2b2b] px-1.5 py-0.5 rounded font-mono">${s}</span>`)
      .join('')

    container.innerHTML += `
      <div class="p-4 bg-[#252526]/50 border border-[#2b2b2b] rounded flex flex-col justify-between
                  hover:border-[#3c3c3c] transition-all duration-200 opacity-0 animate-reveal"
           style="animation-delay:${i * 100}ms">
        <div>
          <div class="flex justify-between items-start gap-4">
            <div>
              <h3 class="text-sm font-bold text-white">${ed.institution}</h3>
              <p class="text-xs text-[#9cdcfe] mt-0.5">${ed.degree} <span class="text-zinc-500 font-sans">in ${ed.field}</span></p>
            </div>
            <span class="text-xs text-[#b5cea8] font-mono bg-[#1e1e1e] px-2 py-0.5 border border-[#2b2b2b] rounded">
              ${ed.period || ed.gpa}
            </span>
          </div>
          <div class="mt-2">${achievements}</div>
        </div>
        <div class="flex flex-wrap gap-1 mt-4 border-t border-[#3c3c3c] pt-2">${skills}</div>
      </div>`
  })
}

// ─── Projects ────────────────────────────────────────────────────────────────

export function renderProjects(projects) {
  const grid = document.getElementById('projects-grid')
  grid.innerHTML = ''

  projects.forEach((p, i) => {
    const tags    = p.tags.map(t => `<span class="text-[10px] text-zinc-500 font-mono">#${t}</span>`).join(' ')
    const langIcon = LANG_ICONS[p.lang] ?? '<i class="fas fa-file-code"></i>'

    grid.innerHTML += `
      <div class="p-4 bg-[#252526] border border-[#2b2b2b] rounded flex flex-col justify-between
                  hover:bg-[#2d2d30] hover:border-[#007acc]/60 hover:-translate-y-1 transition-all duration-300 group
                  opacity-0 animate-reveal"
           style="animation-delay:${i * 100}ms">
        <div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-zinc-500">${langIcon} ${p.lang || 'src'}</span>
            <a href="${p.url}" target="_blank"
               class="text-zinc-400 hover:text-white transition-colors transform hover:scale-110 duration-150">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <h3 class="text-sm font-bold text-[#4fc1ff] group-hover:underline">
            <a href="${p.url}" target="_blank">${p.name}</a>
          </h3>
          <p class="text-xs text-zinc-400 mt-2 font-sans line-clamp-3 leading-relaxed">${p.description}</p>
        </div>
        <div class="mt-4 pt-2 border-t border-[#3c3c3c]">
          <div class="text-[11px] truncate mb-2">${tags}</div>
          <div class="flex items-center justify-between text-[11px] text-zinc-500">
            <div class="flex items-center gap-3">
              <span><i class="far fa-star mr-1 text-yellow-600 group-hover:text-yellow-400 transition-colors"></i>${p.stars}</span>
              <span><i class="fas fa-code-branch mr-1 text-zinc-600"></i>${p.forks}</span>
            </div>
          </div>
        </div>
      </div>`
  })
}

// ─── Recommendations ─────────────────────────────────────────────────────────

export function renderRecommendations(recommendations) {
  const grid = document.getElementById('recommendations-grid')
  grid.innerHTML = ''

  recommendations.forEach((r, i) => {
    grid.innerHTML += `
      <div class="p-4 bg-[#252526]/40 border border-[#2b2b2b] rounded flex flex-col justify-between text-xs
                  hover:border-[#3c3c3c] transition-all duration-200 opacity-0 animate-reveal"
           style="animation-delay:${i * 120}ms">
        <p class="text-zinc-400 italic font-sans leading-relaxed">"${r.text}"</p>
        <div class="flex items-center gap-2 mt-4 pt-3 border-t border-[#3c3c3c]">
          <div class="w-6 h-6 rounded bg-[#333333] text-zinc-300 border border-[#444444]
                      flex items-center justify-center font-bold text-[10px]">
            ${r.avatar || 'RN'}
          </div>
          <div class="truncate">
            <h4 class="font-bold text-white truncate">${r.author}</h4>
            <p class="text-[10px] text-zinc-500 truncate font-sans">${r.role} <span class="text-zinc-600">· ${r.relation}</span></p>
          </div>
        </div>
      </div>`
  })
}
