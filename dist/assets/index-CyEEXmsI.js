(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const c="https://script.google.com/macros/s/AKfycbzyPlHJw0fCSl28fg6agcNu0Smia8VcTkmttl-1ItxfK-aZ5Nt4gmztbphXjRzth1wbEg/exec";async function l(){const e=await fetch(c,{method:"GET",redirect:"follow",cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}: Failed to connect to Google Sheets API`);const n=await e.json();if(!n.success)throw new Error(n.error??"Unknown API error");return n.data}const d={languages:"Programming Languages",frameworks:"Frameworks & UI Libraries",backend:"Backend & Cloud Database",tools:"DevOps & Workflow Development tools"},f={js:'<i class="fab fa-js text-yellow-500"></i>',ts:'<i class="fab fa-js text-blue-400"></i>',php:'<i class="fab fa-php text-indigo-400"></i>',html:'<i class="fab fa-html5 text-orange-500"></i>'};function m(e){document.getElementById("hero-name").textContent=e.name,document.getElementById("hero-title").textContent=e.title,document.getElementById("hero-about").textContent=e.about,document.getElementById("hero-location").textContent=e.location,e.email&&(document.getElementById("nav-cta").href="mailto:"+e.email),document.getElementById("link-linkedin").href=e.linkedin||"#",document.getElementById("link-github").href=e.github||"#";const n=document.getElementById("hero-tagline");n.innerHTML=e.tagline.split("·").map(a=>`<span class="text-[#ce9178] hover:text-white transition-colors duration-150 cursor-pointer">"${a.trim()}"</span>, `).join("");const t=document.getElementById("stats-container");t.innerHTML=e.stats.map(a=>`
      <div class="bg-[#252526] border border-[#2b2b2b] p-4 rounded font-mono hover:border-[#3e3e3e] transition-all duration-200">
        <p class="text-[#9cdcfe] text-sm font-mono">
          ${a.label.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}
          : <span class="text-[#ce9178]">${a.value}</span>
        </p>
      </div>`).join("")}function b(e){const n=document.getElementById("skills-grid");n.innerHTML="";let t=0;for(const[a,s]of Object.entries(e)){if(s.length===0)continue;const o=s.map(r=>`
        <div class="mb-3 group/item">
          <div class="flex justify-between text-xs mb-1">
            <span class="text-[#9cdcfe] group-hover/item:text-white transition-colors">${r.name}</span>
            <span class="text-[#b5cea8] font-mono">${r.pct}%</span>
          </div>
          <div class="w-full bg-[#3e3e3e] rounded-full h-1 overflow-hidden">
            <div class="h-1 rounded-full bg-[#007acc] animate-skill-bar" style="width:${r.pct}%"></div>
          </div>
        </div>`).join("");n.innerHTML+=`
      <div class="p-4 bg-[#252526] rounded border border-[#2b2b2b] hover:border-[#3c3c3c] transition-all duration-300 opacity-0 animate-reveal"
           style="animation-delay:${t*100}ms">
        <h3 class="text-xs font-bold text-[#4fc1ff] mb-3 border-b border-[#3c3c3c] pb-1.5 font-sans">
          . ${d[a]??a}
        </h3>
        ${o}
      </div>`,t++}}function p(e){const n=document.getElementById("experience-timeline");n.innerHTML="",e.forEach((t,a)=>{const s=t.tags.map(i=>`<span class="text-[10px] bg-[#1e1e1e] border border-[#3c3c3c] text-zinc-400 px-2 py-0.5 rounded">${i}</span>`).join(""),o=t.responsibilities.map(i=>`
        <li class="text-xs text-zinc-400 leading-relaxed list-none pl-4 relative
                   before:content-['-'] before:absolute before:left-0 before:text-[#569cd6]">
          ${i}
        </li>`).join(""),r=t.current?'<span class="ml-2 text-[10px] bg-[#007acc]/20 text-[#4fc1ff] border border-[#007acc]/50 px-1.5 py-0.5 rounded animate-pulse">Active</span>':"";n.innerHTML+=`
      <div class="relative pl-6 before:content-[''] before:absolute before:left-[-4px] before:top-1.5
                  before:w-2 before:h-2 before:bg-[#007acc] before:rounded-full opacity-0 animate-reveal"
           style="animation-delay:${a*150}ms">
        <div class="p-4 bg-[#252526]/50 rounded border border-[#2b2b2b]
                    hover:border-[#007acc]/40 hover:bg-[#252526] hover:translate-x-1.5 transition-all duration-300 group">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h3 class="text-sm font-bold text-white group-hover:text-[#4fc1ff] transition-colors">${t.position}</h3>
              <p class="text-xs text-zinc-400">${t.company} <span class="text-zinc-600">· ${t.type}</span> ${r}</p>
            </div>
            <div class="text-left sm:text-right text-xs shrink-0">
              <span class="text-[#6a9955]">${t.duration}</span>
              <div class="text-zinc-500 text-[11px] mt-0.5"><i class="fas fa-map-marker-alt mr-1"></i>${t.location}</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-1 my-3">${s}</div>
          <ul class="space-y-1.5 mt-2 border-t border-[#3c3c3c] pt-2">${o}</ul>
        </div>
      </div>`})}function u(e){const n=document.getElementById("education-container");n.innerHTML="",e.forEach((t,a)=>{const s=t.achievements.map(r=>`<p class="text-xs text-[#6a9955] mt-1">// <span class="font-sans text-zinc-400">${r}</span></p>`).join(""),o=t.skills.map(r=>`<span class="text-[10px] text-[#4fc1ff] bg-[#1e1e1e] border border-[#2b2b2b] px-1.5 py-0.5 rounded font-mono">${r}</span>`).join("");n.innerHTML+=`
      <div class="p-4 bg-[#252526]/50 border border-[#2b2b2b] rounded flex flex-col justify-between
                  hover:border-[#3c3c3c] transition-all duration-200 opacity-0 animate-reveal"
           style="animation-delay:${a*100}ms">
        <div>
          <div class="flex justify-between items-start gap-4">
            <div>
              <h3 class="text-sm font-bold text-white">${t.institution}</h3>
              <p class="text-xs text-[#9cdcfe] mt-0.5">${t.degree} <span class="text-zinc-500 font-sans">in ${t.field}</span></p>
            </div>
            <span class="text-xs text-[#b5cea8] font-mono bg-[#1e1e1e] px-2 py-0.5 border border-[#2b2b2b] rounded">
              ${t.period||t.gpa}
            </span>
          </div>
          <div class="mt-2">${s}</div>
        </div>
        <div class="flex flex-wrap gap-1 mt-4 border-t border-[#3c3c3c] pt-2">${o}</div>
      </div>`})}function x(e){const n=document.getElementById("projects-grid");n.innerHTML="",e.forEach((t,a)=>{const s=t.tags.map(r=>`<span class="text-[10px] text-zinc-500 font-mono">#${r}</span>`).join(" "),o=f[t.lang]??'<i class="fas fa-file-code"></i>';n.innerHTML+=`
      <div class="p-4 bg-[#252526] border border-[#2b2b2b] rounded flex flex-col justify-between
                  hover:bg-[#2d2d30] hover:border-[#007acc]/60 hover:-translate-y-1 transition-all duration-300 group
                  opacity-0 animate-reveal"
           style="animation-delay:${a*100}ms">
        <div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-zinc-500">${o} ${t.lang||"src"}</span>
            <a href="${t.url}" target="_blank"
               class="text-zinc-400 hover:text-white transition-colors transform hover:scale-110 duration-150">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <h3 class="text-sm font-bold text-[#4fc1ff] group-hover:underline">
            <a href="${t.url}" target="_blank">${t.name}</a>
          </h3>
          <p class="text-xs text-zinc-400 mt-2 font-sans line-clamp-3 leading-relaxed">${t.description}</p>
        </div>
        <div class="mt-4 pt-2 border-t border-[#3c3c3c]">
          <div class="text-[11px] truncate mb-2">${s}</div>
          <div class="flex items-center justify-between text-[11px] text-zinc-500">
            <div class="flex items-center gap-3">
              <span><i class="far fa-star mr-1 text-yellow-600 group-hover:text-yellow-400 transition-colors"></i>${t.stars}</span>
              <span><i class="fas fa-code-branch mr-1 text-zinc-600"></i>${t.forks}</span>
            </div>
          </div>
        </div>
      </div>`})}function g(e){const n=document.getElementById("recommendations-grid");n.innerHTML="",e.forEach((t,a)=>{n.innerHTML+=`
      <div class="p-4 bg-[#252526]/40 border border-[#2b2b2b] rounded flex flex-col justify-between text-xs
                  hover:border-[#3c3c3c] transition-all duration-200 opacity-0 animate-reveal"
           style="animation-delay:${a*120}ms">
        <p class="text-zinc-400 italic font-sans leading-relaxed">"${t.text}"</p>
        <div class="flex items-center gap-2 mt-4 pt-3 border-t border-[#3c3c3c]">
          <div class="w-6 h-6 rounded bg-[#333333] text-zinc-300 border border-[#444444]
                      flex items-center justify-center font-bold text-[10px]">
            ${t.avatar||"RN"}
          </div>
          <div class="truncate">
            <h4 class="font-bold text-white truncate">${t.author}</h4>
            <p class="text-[10px] text-zinc-500 truncate font-sans">${t.role} <span class="text-zinc-600">· ${t.relation}</span></p>
          </div>
        </div>
      </div>`})}async function v(){try{const e=await l();m(e.profile),b(e.skills),p(e.experiences),u(e.education),x(e.projects),g(e.recommendations),h()}catch(e){console.error("Failed to load portfolio data:",e),alert("Failed to load integrated portfolio data: "+e.message)}}function h(){const e=document.getElementById("loading-screen");e.style.transition="opacity 0.4s ease",e.style.opacity="0",setTimeout(()=>e.classList.add("hidden"),400)}v();
