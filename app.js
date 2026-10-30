// Olive Samuels - Full-Stack Developer & Systems Architect
// Techy, Soft, and Fluid 3D Cyber-Topology & Neural Network Engine

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found.");
    return;
  }

  // State
  let currentProjectFilter = 'all';
  let currentGalleryFilter = 'all';
  let searchQuery = '';

  // DOM Elements
  const galleryContainer = document.getElementById('galleryContainer');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const projectsContainer = document.getElementById('projectsContainer');
  const projectFilterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const caseStudyModal = document.getElementById('caseStudyModal');
  const modalContent = document.getElementById('modalContent');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const bg3dCanvas = document.getElementById('bg3dCanvas');

  // =========================================================================
  // 1. Soft, Techy 3D Cyber-Topology & Neural Flow Engine (Fluid & Interactive)
  // =========================================================================
  initTechyFluidEngine(bg3dCanvas);

  function initTechyFluidEngine(canvas) {
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');

    let W = 0, H = 0, dpr = 1;
    let mouseX = -9999, mouseY = -9999;
    let targetMouseX = -9999, targetMouseY = -9999;
    let isHovering = false;
    let t = 0;
    let raf = 0;

    // Responsive node density
    const nodeCount = window.innerWidth > 768 ? 95 : 55;
    const ambientCount = window.innerWidth > 768 ? 60 : 30;

    const nodes = [];
    const ambientMotes = [];
    const dataPackets = [];
    const shockwaves = [];

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initMesh();
    }

    function initMesh() {
      nodes.length = 0;
      ambientMotes.length = 0;
      dataPackets.length = 0;

      // 3D Neural / Network Nodes
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const z = (Math.random() - 0.5) * 350;

        nodes.push({
          x: x, y: y, z: z,
          baseX: x, baseY: y, baseZ: z,
          vx: 0, vy: 0, vz: 0,
          radius: Math.random() * 2.2 + 1.2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.8 + Math.random() * 1.2,
          isHub: Math.random() < 0.18 // Techy cluster hub
        });
      }

      // Ambient Floating Micro-Motes
      for (let i = 0; i < ambientCount; i++) {
        ambientMotes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 0.6,
          alpha: Math.random() * 0.5 + 0.2
        });
      }

      // Initialize Techy Data Packets traveling along network connections
      for (let i = 0; i < 18; i++) {
        createDataPacket();
      }
    }

    function createDataPacket() {
      if (nodes.length < 2) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      // Find nearest neighbor
      let toIdx = -1;
      let minDist = 180;
      for (let j = 0; j < nodes.length; j++) {
        if (fromIdx === j) continue;
        const dx = nodes[fromIdx].baseX - nodes[j].baseX;
        const dy = nodes[fromIdx].baseY - nodes[j].baseY;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < minDist) {
          minDist = d;
          toIdx = j;
        }
      }

      if (toIdx !== -1) {
        dataPackets.push({
          from: fromIdx,
          to: toIdx,
          progress: Math.random(),
          speed: 0.006 + Math.random() * 0.008,
          size: Math.random() * 2 + 1.5
        });
      }
    }

    // Mouse Listeners for Silky Fluid Physics
    window.addEventListener('mousemove', (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isHovering = true;
    });

    window.addEventListener('mouseleave', () => {
      isHovering = false;
      targetMouseX = -9999;
      targetMouseY = -9999;
    });

    // Mouse Click Shockwave Ripple
    window.addEventListener('click', (e) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.min(W, H) * 0.45,
        speed: 7.5,
        intensity: 1.0
      });
    });

    // Animation Render Loop
    function frame() {
      t += 0.016;

      // Smooth mouse interpolation
      if (isHovering) {
        mouseX += (targetMouseX - mouseX) * 0.12;
        mouseY += (targetMouseY - mouseY) * 0.12;
      } else {
        mouseX = -9999;
        mouseY = -9999;
      }

      ctx.clearRect(0, 0, W, H);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // Soft, refined olive green & warm golden palette
      const colorNode = isLight ? 'rgba(74, 107, 78, ' : 'rgba(194, 213, 168, ';
      const colorHub = isLight ? 'rgba(85, 107, 47, ' : 'rgba(214, 233, 168, ';
      const colorLine = isLight ? 'rgba(74, 107, 78, ' : 'rgba(132, 169, 140, ';
      const colorPacket = isLight ? 'rgba(107, 128, 59, 0.95)' : 'rgba(240, 248, 220, 0.95)';

      const MOUSE_RADIUS = 190;
      const MR2 = MOUSE_RADIUS * MOUSE_RADIUS;

      // 1. Update and Draw Shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed;
        sw.intensity *= 0.96;

        // Draw soft glowing shockwave ring
        const ringAlpha = sw.intensity * (isLight ? 0.35 : 0.45);
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = (isLight ? 'rgba(85, 107, 47, ' : 'rgba(194, 213, 168, ') + ringAlpha + ')';
        ctx.lineWidth = Math.max(1, (1 - sw.radius / sw.maxRadius) * 3);
        ctx.stroke();

        // Displace nodes near the shockwave wavefront
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = n.x - sw.x;
          const dy = n.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = Math.abs(dist - sw.radius);
          if (diff < 45 && dist > 1) {
            const push = (1 - diff / 45) * sw.intensity * 4.5;
            n.vx += (dx / dist) * push;
            n.vy += (dy / dist) * push;
          }
        }

        if (sw.radius >= sw.maxRadius || sw.intensity < 0.02) {
          shockwaves.splice(s, 1);
        }
      }

      // 2. Update 3D Neural Nodes
      const fov = 520;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Soft harmonic wave displacement
        const waveX = Math.sin(n.baseY * 0.003 + t * 0.6 + n.pulsePhase) * 18;
        const waveY = Math.cos(n.baseX * 0.003 + t * 0.5 + n.pulsePhase) * 14;
        const waveZ = Math.sin((n.baseX + n.baseY) * 0.002 + t * 0.7) * 40;

        const targetX = n.baseX + waveX;
        const targetY = n.baseY + waveY;
        const targetZ = n.baseZ + waveZ;

        // Spring return to base target
        n.vx += (targetX - n.x) * 0.035;
        n.vy += (targetY - n.y) * 0.035;
        n.vz += (targetZ - n.z) * 0.035;

        // Mouse Fluid Interaction (Soft deflection + gentle magnetic swirl)
        if (isHovering) {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const d2 = dx * dx + dy * dy;

          if (d2 < MR2 && d2 > 1) {
            const dist = Math.sqrt(d2);
            const force = (1 - dist / MOUSE_RADIUS);
            // Smooth repulsion
            n.vx += (dx / dist) * force * 2.2;
            n.vy += (dy / dist) * force * 2.2;
            // Subtle tangential fluid drift
            n.vx -= (dy / dist) * force * 0.8;
            n.vy += (dx / dist) * force * 0.8;
          }
        }

        // Damping
        n.vx *= 0.88;
        n.vy *= 0.88;
        n.vz *= 0.88;

        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;

        // 3D perspective scale calculation
        const scale = fov / (fov + n.z);
        n.projX = n.x;
        n.projY = n.y;
        n.projScale = Math.max(0.4, scale);
      }

      // 3. Draw Interconnected Network Topology Lines
      const maxConnectDist = window.innerWidth > 768 ? 145 : 110;
      const maxDistSq = maxConnectDist * maxConnectDist;

      ctx.lineWidth = 0.9;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy;

          if (d2 < maxDistSq) {
            const proximity = 1 - d2 / maxDistSq;
            // Depth modulation
            const avgScale = (nodes[i].projScale + nodes[j].projScale) * 0.5;
            const alpha = proximity * 0.24 * avgScale;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = colorLine + alpha + ')';
            ctx.stroke();
          }
        }
      }

      // 4. Update and Draw Techy Data Packets
      for (let p = 0; p < dataPackets.length; p++) {
        const dp = dataPackets[p];
        dp.progress += dp.speed;

        if (dp.progress >= 1) {
          dp.progress = 0;
          dp.from = dp.to;
          // Find next connection
          let nextTo = -1;
          let minDist = 180;
          for (let j = 0; j < nodes.length; j++) {
            if (dp.from === j) continue;
            const dx = nodes[dp.from].x - nodes[j].x;
            const dy = nodes[dp.from].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist && Math.random() < 0.65) {
              minDist = dist;
              nextTo = j;
            }
          }
          dp.to = nextTo !== -1 ? nextTo : Math.floor(Math.random() * nodes.length);
        }

        const fromNode = nodes[dp.from];
        const toNode = nodes[dp.to];
        if (fromNode && toNode) {
          const curX = fromNode.x + (toNode.x - fromNode.x) * dp.progress;
          const curY = fromNode.y + (toNode.y - fromNode.y) * dp.progress;

          ctx.fillStyle = colorPacket;
          ctx.beginPath();
          ctx.arc(curX, curY, dp.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Draw Nodes & Hubs
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(t * n.pulseSpeed + n.pulsePhase) * 0.3 + 0.7;
        const currentRadius = n.radius * n.projScale * pulse;
        const alpha = Math.min(0.85, 0.45 * n.projScale * pulse + 0.1);

        if (n.isHub) {
          // Techy Hub: Outer glowing circuit ring
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius * 2.8, 0, Math.PI * 2);
          ctx.strokeStyle = colorHub + (alpha * 0.5) + ')';
          ctx.lineWidth = 0.9;
          ctx.stroke();

          // Hub core
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius * 1.3, 0, Math.PI * 2);
          ctx.fillStyle = colorHub + alpha + ')';
          ctx.fill();
        } else {
          // Standard neural node
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = colorNode + alpha + ')';
          ctx.fill();
        }
      }

      // 6. Draw Ambient Floating Motes (Soft Atmosphere)
      for (let i = 0; i < ambientMotes.length; i++) {
        const m = ambientMotes[i];
        m.x += m.vx;
        m.y += m.vy;

        if (m.x < 0) m.x = W; else if (m.x > W) m.x = 0;
        if (m.y < 0) m.y = H; else if (m.y > H) m.y = 0;

        ctx.fillStyle = colorNode + (m.alpha * (isLight ? 0.3 : 0.4)) + ')';
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    window.addEventListener('resize', resize);
    resize();
    raf = requestAnimationFrame(frame);
  }

  // ==========================================
  // 2. Interactive 3D Card Perspective Tilt
  // ==========================================
  function attach3DTilt(elements) {
    elements.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // ==========================================
  // 3. Theme Toggle Engine
  // ==========================================
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  // ==========================================
  // Helper: High-Tech Project Insignia SVGs
  // ==========================================
  function getProjectAvatarSvg(iconType, color) {
    if (iconType === 'cross-shield') {
      return `
        <svg class="avatar-svg-icon" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
        </svg>
      `;
    } else if (iconType === 'stethoscope-wave') {
      return `
        <svg class="avatar-svg-icon" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3"/>
          <path d="M15.5 8a5.5 5.5 0 0 1-11 0"/>
          <path d="M10 13.5v3.5a2 2 0 0 0 2 2h2"/>
          <circle cx="18" cy="19" r="3"/>
          <path d="M2 12h3l2-3 3 6 2-3h3"/>
        </svg>
      `;
    } else if (iconType === 'terminal-cube') {
      return `
        <svg class="avatar-svg-icon" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21 16-9 5-9-5V8l9-5 9 5v8z"/>
          <path d="m3.3 7 8.7 5 8.7-5"/>
          <path d="M12 12v9.5"/>
          <path d="m8 10 2-1-2-1"/>
        </svg>
      `;
    } else if (iconType === 'neural-spark') {
      return `
        <svg class="avatar-svg-icon" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v18"/>
          <path d="M3 12h18"/>
          <circle cx="12" cy="12" r="3"/>
          <circle cx="12" cy="4" r="2"/>
          <circle cx="12" cy="20" r="2"/>
          <circle cx="4" cy="12" r="2"/>
          <circle cx="20" cy="12" r="2"/>
        </svg>
      `;
    } else if (iconType === 'chat-network') {
      return `
        <svg class="avatar-svg-icon" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1.2" fill="${color}"/>
          <circle cx="13" cy="10" r="1.2" fill="${color}"/>
          <circle cx="17" cy="10" r="1.2" fill="${color}"/>
        </svg>
      `;
    } else {
      // scripture-chime
      return `
        <svg class="avatar-svg-icon" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          <path d="M12 5v14"/>
        </svg>
      `;
    }
  }

  // ==========================================
  // 4. Render UI/UX Gallery with Tech Avatars
  // ==========================================
  function renderGallery() {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = '';

    const filtered = data.gallery.filter(item => {
      if (currentGalleryFilter === 'all') return true;
      return item.category === currentGalleryFilter;
    });

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';

      const av = item.avatar || {
        code: "SYS // 00",
        label: "ARCHITECTURE",
        icon: "terminal-cube",
        color: "#c2d5a8",
        glow: "rgba(194, 213, 168, 0.35)",
        stack: "TypeScript • Fullstack"
      };

      const svgIconHtml = getProjectAvatarSvg(av.icon, av.color);

      // Clean, Futuristic Avatar Emblem Header (No Raw Screenshots)
      const avatarHeaderHtml = `
        <div class="gallery-avatar-frame">
          <div class="avatar-hud-top">
            <span class="avatar-status-pill">
              <span class="hud-dot"></span>
              <span>${av.label}</span>
            </span>
            <span class="avatar-code-tag">${av.code}</span>
          </div>

          <div class="avatar-center-badge">
            <div class="avatar-orbit-ring"></div>
            <div class="avatar-orbit-ring reverse"></div>
            <div class="avatar-core-icon" style="box-shadow: 0 0 28px ${av.glow};">
              ${svgIconHtml}
            </div>
          </div>

          <div class="avatar-hud-bottom">
            <span>${item.appType.split(' ')[0]} v3.0</span>
            <span style="color: ${av.color}; font-weight: 600;">${av.stack}</span>
          </div>
        </div>
      `;

      const highlightsHtml = `
        <ul class="gallery-highlights-list">
          ${item.uiHighlights.map(h => `<li class="gallery-highlight-item">${h}</li>`).join('')}
        </ul>
      `;

      let actionsHtml = `<div class="gallery-card-actions">`;
      actionsHtml += `
        <button class="btn-card-primary launch-preview-btn" data-gallery-id="${item.id}">
          ✨ Launch Interactive Walkthrough
        </button>
      `;
      if (item.demoUrl) {
        actionsHtml += `
          <a href="${item.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary">
            ⚡ Open Live App
          </a>
        `;
      }
      if (item.githubUrl) {
        actionsHtml += `
          <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary">
            🐙 GitHub Source
          </a>
        `;
      }
      actionsHtml += `</div>`;

      card.innerHTML = `
        ${avatarHeaderHtml}
        <div class="gallery-card-body">
          <div class="gallery-card-badge">${item.badge}</div>
          <h3 class="gallery-card-title">${item.title}</h3>
          <p class="gallery-card-tagline">${item.tagline}</p>
          ${highlightsHtml}
          ${actionsHtml}
        </div>
      `;

      galleryContainer.appendChild(card);
    });

    attach3DTilt(document.querySelectorAll('.gallery-card'));

    document.querySelectorAll('.launch-preview-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-gallery-id');
        openInteractivePreview(id);
      });
    });
  }

  // ==============================================================
  // 5. Truly Interactive Guided Application Walkthroughs
  // ==============================================================
  function openInteractivePreview(galleryId) {
    const item = data.gallery.find(g => g.id === galleryId);
    if (!item) return;

    let walkthroughHtml = '';

    // -----------------------------------------------------------
    // WALKTHROUGH 1: ClearYes™ Surgical Consent PWA
    // -----------------------------------------------------------
    if (item.id === 'gal-clearyes') {
      walkthroughHtml = `
        <div class="walkthrough-wrapper">
          <div class="wt-stepper-nav">
            <button class="wt-step-btn active" data-step="1"><span class="wt-step-number">1</span> Audio Voice Reader</button>
            <button class="wt-step-btn" data-step="2"><span class="wt-step-number">2</span> 100-Patient Risk Grid</button>
            <button class="wt-step-btn" data-step="3"><span class="wt-step-number">3</span> Teach-Back Quiz</button>
            <button class="wt-step-btn" data-step="4"><span class="wt-step-number">4</span> Cryptographic Signature</button>
          </div>

          <!-- Step 1: Doctor Audio Briefing -->
          <div class="wt-panel active" id="wtStep1">
            <div class="wt-box">
              <div class="wt-box-title">🎙️ Step 1: Clinical Audio Voice Reader</div>
              <p class="wt-box-desc">
                Patients can listen to their surgical consent instructions with animated equalizer feedback and speed control.
              </p>
              <div class="audio-player-widget">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <button id="clyPlayVoiceBtn" class="btn-primary" style="padding: 8px 16px;">
                    ▶️ Play Doctor Voice Briefing
                  </button>
                  <div style="display: flex; gap: 6px;">
                    <button class="filter-btn active cly-speed-btn" data-speed="1.0">1.0x</button>
                    <button class="filter-btn cly-speed-btn" data-speed="1.25">1.25x</button>
                    <button class="filter-btn cly-speed-btn" data-speed="1.5">1.5x</button>
                  </div>
                </div>
                <div class="equalizer-bars" id="clyEqualizer">
                  ${Array.from({ length: 32 }).map(() => `<div class="eq-bar"></div>`).join('')}
                </div>
                <div id="clyVoiceStatus" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
                  Status: Ready to play. Click Play to test browser speech/synthesizer audio.
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Interactive 100-Patient Risk Calculator -->
          <div class="wt-panel" id="wtStep2">
            <div class="wt-box">
              <div class="wt-box-title">📊 Step 2: Interactive 100-Patient Complication Grid</div>
              <p class="wt-box-desc">
                Adjust the risk percentage below to see the 100-node pictogram dynamically re-color in real time.
              </p>
              <div style="margin-bottom: 1rem; display: flex; align-items: center; gap: 12px;">
                <label style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">Procedure Risk:</label>
                <input type="range" id="clyRiskSlider" min="1" max="15" value="3" style="flex: 1; accent-color: var(--olive-gold);">
                <span id="clyRiskLabel" style="font-family: var(--font-mono); font-weight: 700; color: var(--olive-gold); width: 45px;">3%</span>
              </div>
              <div id="clyRiskGrid" style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 6px; max-width: 440px; margin: 0 auto 1.25rem;">
                <!-- Populated dynamically -->
              </div>
              <div id="clyRiskStats" style="background: #040805; padding: 10px 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.82rem; display: flex; justify-content: space-between;">
                <span style="color: var(--olive-pale);">🟢 Safe Recovery: 97/100</span>
                <span style="color: var(--olive-gold);">🟡 Complication Risk: 3/100</span>
              </div>
            </div>
          </div>

          <!-- Step 3: Teach-Back Comprehension Quiz -->
          <div class="wt-panel" id="wtStep3">
            <div class="wt-box">
              <div class="wt-box-title">🧠 Step 3: Patient Teach-Back Verification</div>
              <p class="wt-box-desc">
                Verifies that the patient comprehends the key post-operative recovery protocol. Click an answer:
              </p>
              <div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--text-primary);">
                Q: What should you do immediately if you experience persistent bleeding post-surgery?
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 1rem;" id="clyQuizOptions">
                <button class="filter-btn cly-quiz-option" data-correct="false" style="text-align: left; padding: 10px 14px;">
                  [A] Resume strenuous athletic exercise immediately
                </button>
                <button class="filter-btn cly-quiz-option" data-correct="true" style="text-align: left; padding: 10px 14px;">
                  [B] Apply localized pressure and notify the surgical center triage line (Correct)
                </button>
                <button class="filter-btn cly-quiz-option" data-correct="false" style="text-align: left; padding: 10px 14px;">
                  [C] Avoid all hydration for the next 48 hours
                </button>
              </div>
              <div id="clyQuizFeedback" style="display: none; padding: 10px; border-radius: 6px; font-size: 0.85rem; font-family: var(--font-mono);"></div>
            </div>
          </div>

          <!-- Step 4: HTML5 Digital Signature Pad -->
          <div class="wt-panel" id="wtStep4">
            <div class="wt-box">
              <div class="wt-box-title">✍️ Step 4: Cryptographic Signature Pad</div>
              <p class="wt-box-desc">
                Sign your name below with your mouse or touchscreen. Click "Verify Signature" to generate a tamper-evident SHA-256 hash.
              </p>
              <div class="signature-canvas-box">
                <canvas id="clySigCanvas" width="700" height="160"></canvas>
              </div>
              <div style="display: flex; gap: 10px; margin-bottom: 1rem; align-items: center;">
                <button id="clyClearSigBtn" class="btn-secondary" style="padding: 7px 14px; font-size: 0.85rem;">
                  🗑️ Clear Pad
                </button>
                <button id="clyVerifySigBtn" class="btn-primary" style="padding: 7px 16px; font-size: 0.85rem;">
                  🔒 Cryptographically Sign Document
                </button>
              </div>
              <div id="clyHashDisplay" style="display: none; background: #040805; border: 1px solid var(--olive-leaf); padding: 10px 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--olive-pale);">
                <div style="color: var(--olive-gold); font-weight: 700; margin-bottom: 4px;">✅ DOCUMENT AUDIT TRAIL CERTIFIED</div>
                <div id="clyHashString">SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
              </div>
            </div>
          </div>

          <div class="wt-nav-footer">
            <button class="btn-secondary wt-prev-btn" disabled>← Previous Step</button>
            <button class="btn-primary wt-next-btn">Next Step →</button>
          </div>
        </div>
      `;
    }

    // -----------------------------------------------------------
    // WALKTHROUGH 2: MedMate - Nursing Home Medication Scheduling System
    // -----------------------------------------------------------
    else if (item.id === 'gal-medmate') {
      walkthroughHtml = `
        <div class="walkthrough-wrapper">
          <div class="wt-stepper-nav">
            <button class="wt-step-btn active" data-step="1"><span class="wt-step-number">1</span> Resident Scheduling</button>
            <button class="wt-step-btn" data-step="2"><span class="wt-step-number">2</span> Shift Cron Daemon</button>
            <button class="wt-step-btn" data-step="3"><span class="wt-step-number">3</span> Caregiver eMAR Alert</button>
          </div>

          <div class="wt-panel active" id="wtStep1">
            <div class="wt-box">
              <div class="wt-box-title">🛏️ Step 1: Nursing Home Resident & Medication Scheduling</div>
              <p class="wt-box-desc">
                Select an elderly resident and configure their scheduled medication regimen for caregiver rounds:
              </p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 1rem;">
                <div>
                  <label style="font-size: 0.8rem; color: var(--text-muted);">Resident & Ward Room:</label>
                  <select id="mmResidentSelect" class="search-input" style="padding: 6px 10px;">
                    <option value="Margaret Dawes (Room 104, Memory Care)">Margaret Dawes (Room 104, Memory Care)</option>
                    <option value="Robert Sterling (Room 112, Assisted Living)">Robert Sterling (Room 112, Assisted Living)</option>
                    <option value="Beatrice Vance (Room 205, Extended Care)">Beatrice Vance (Room 205, Extended Care)</option>
                  </select>
                </div>
                <div>
                  <label style="font-size: 0.8rem; color: var(--text-muted);">Prescribed Medication:</label>
                  <select id="mmMedSelect" class="search-input" style="padding: 6px 10px;">
                    <option value="Donepezil 10mg + Lisinopril 20mg">Donepezil 10mg + Lisinopril 20mg</option>
                    <option value="Metformin 500mg ER + Aspirin 81mg">Metformin 500mg ER + Aspirin 81mg</option>
                    <option value="Levothyroxine 75mcg (Pre-Breakfast)">Levothyroxine 75mcg (Pre-Breakfast)</option>
                  </select>
                </div>
              </div>
              <div style="background: #040805; border: 1px solid var(--border-color); border-radius: 6px; padding: 10px; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
                <span style="color: var(--olive-gold); font-weight: 600;">Caregiver Clinical Protocol:</span> Administer with full glass of water. Verify patient wristband barcode and swallow reflex before signing eMAR log.
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">
                ✓ System pre-validates drug-to-drug interactions and flags elderly contraindications automatically.
              </div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep2">
            <div class="wt-box">
              <div class="wt-box-title">⏰ Step 2: Caregiver Shift Rounds & Node-Cron Daemon</div>
              <p class="wt-box-desc">
                Assign the medication schedule to caregiver rounds and observe the generated Node-Cron scheduling expression:
              </p>
              <div style="margin-bottom: 1rem;">
                <label style="font-size: 0.8rem; color: var(--text-muted);">Caregiver Shift Round:</label>
                <select id="mmFreqSelect" class="search-input" style="padding: 6px 10px;">
                  <option value="0 8 * * *">Morning Round (08:00 AM Daily) — 0 8 * * *</option>
                  <option value="30 12 * * *">Mid-day Lunch Round (12:30 PM) — 30 12 * * *</option>
                  <option value="0 20 * * *">Evening Bedtime Round (08:00 PM) — 0 20 * * *</option>
                  <option value="0 8,13,20 * * *">Three Daily Ward Rounds (08:00, 13:00, 20:00) — 0 8,13,20 * * *</option>
                </select>
              </div>
              <div style="background: #040805; padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1rem;">
                <div style="color: var(--olive-gold); margin-bottom: 4px;">Active Node-Cron Schedule Rule:</div>
                <div id="mmCronExpr" style="color: var(--olive-pale); font-size: 1.05rem; font-weight: 700;">0 8 * * *</div>
                <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 4px;">Runs background process checking nursing station roster and alerting on-duty caregivers.</div>
              </div>
              <button id="mmArmCronBtn" class="btn-primary" style="padding: 8px 16px;">
                ⚙️ Arm Ward Node-Cron Daemon
              </button>
              <div id="mmCronStatus" style="margin-top: 8px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--olive-gold);"></div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep3">
            <div class="wt-box">
              <div class="wt-box-title">📲 Step 3: Caregiver Shift Alert & eMAR Sign-Off</div>
              <p class="wt-box-desc">
                Simulate the real-time tablet alert received by the caregiver during nursing home medication rounds:
              </p>
              <div style="display: flex; gap: 10px; margin-bottom: 1rem; flex-wrap: wrap;">
                <button id="mmSendAlertBtn" class="btn-primary">
                  🔔 Dispatch Caregiver Shift Alert
                </button>
                <button id="mmVoiceNoteBtn" class="btn-secondary">
                  🎙️ Dictate Hands-Free Caregiver Note
                </button>
              </div>

              <!-- Caregiver Voice Note Box -->
              <div id="mmVoiceBox" style="display: none; background: #040805; border: 1px solid var(--border-color); border-radius: 6px; padding: 12px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--olive-pale); margin-bottom: 1rem;">
                <span style="color: var(--olive-gold);">● RECORDING CAREGIVER VOICE NOTE [GCP Speech-to-Text]...</span><br>
                <span id="mmVoiceText"></span>
              </div>

              <!-- Caregiver Tablet / Mobile Alert Preview -->
              <div id="mmPhonePreview" style="display: none; background: #050a06; border: 1.5px solid var(--olive-gold); border-radius: 12px; padding: 1.2rem; max-width: 420px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
                <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--olive-gold); font-family: var(--font-mono); margin-bottom: 8px; font-weight: 700;">
                  <span>🔔 NURSING HOME eMAR ALERT</span>
                  <span>WARD ROUND NOW</span>
                </div>
                <div style="font-weight: 700; color: #ffffff; font-size: 1rem; margin-bottom: 4px;" id="mmAlertResident">
                  Margaret Dawes (Room 104, Memory Care)
                </div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
                  <strong>Scheduled Dose:</strong> <span style="color: var(--olive-gold); font-weight: 600;" id="mmAlertMed">Donepezil 10mg + Lisinopril 20mg</span><br>
                  <span style="color: var(--text-muted); font-size: 0.75rem;">Status: Due on Morning Round • Protocol: Verify wristband barcode.</span>
                </div>
                <button id="mmConfirmDoseBtn" class="btn-primary" style="width: 100%; justify-content: center; padding: 9px; font-size: 0.85rem;">
                  ✓ Administer Dose & Sign eMAR
                </button>
                <div id="mmDoseConfirmed" style="display: none; text-align: center; color: #6ee7b7; font-size: 0.8rem; font-family: var(--font-mono); margin-top: 10px; line-height: 1.4; background: rgba(110,231,183,0.1); padding: 8px; border-radius: 6px;">
                  ✓ Administered by Caregiver Olive S. (#CG-482)<br>
                  Logged to Electronic Medication Administration Record (eMAR). 0 Missed Doses.
                </div>
              </div>
            </div>
          </div>

          <div class="wt-nav-footer">
            <button class="btn-secondary wt-prev-btn" disabled>← Previous Step</button>
            <button class="btn-primary wt-next-btn">Next Step →</button>
          </div>
        </div>
      `;
    }

    // -----------------------------------------------------------
    // WALKTHROUGH 3: Edumeet & Google Gemini AI Tutor
    // -----------------------------------------------------------
    else if (item.id === 'gal-edumeet') {
      walkthroughHtml = `
        <div class="walkthrough-wrapper">
          <div class="wt-stepper-nav">
            <button class="wt-step-btn active" data-step="1"><span class="wt-step-number">1</span> Gemini AI Tutor Chat</button>
            <button class="wt-step-btn" data-step="2"><span class="wt-step-number">2</span> Paystack Checkout</button>
            <button class="wt-step-btn" data-step="3"><span class="wt-step-number">3</span> Microservice RBAC Guard</button>
          </div>

          <div class="wt-panel active" id="wtStep1">
            <div class="wt-box">
              <div class="wt-box-title">🤖 Step 1: Interactive Google Gemini AI Tutor Chatbot</div>
              <p class="wt-box-desc">
                Type any software engineering question below or click a sample topic chip to test the AI tutor:
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
                <button class="preset-chip edm-prompt-chip" data-prompt="Explain JavaScript closures with an example">Explain Closures</button>
                <button class="preset-chip edm-prompt-chip" data-prompt="What is the difference between SQL and NoSQL?">SQL vs NoSQL</button>
                <button class="preset-chip edm-prompt-chip" data-prompt="How do JWT tokens ensure secure authentication?">JWT Authentication</button>
              </div>
              <div class="gemini-chat-widget">
                <div class="gemini-chat-messages" id="edmChatThread">
                  <div class="chat-bubble ai">
                    Hello! I'm your Edumeet AI Tutor powered by Google Gemini. Ask me any question about software architecture, algorithms, or web development!
                  </div>
                </div>
                <div class="gemini-chat-input-row">
                  <input type="text" id="edmChatInput" class="gemini-input" placeholder="Ask the AI Tutor anything..." autocomplete="off">
                  <button id="edmSendBtn" class="btn-primary" style="padding: 6px 14px; font-size: 0.85rem;">Send</button>
                </div>
              </div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep2">
            <div class="wt-box">
              <div class="wt-box-title">💳 Step 2: Paystack Multi-Currency Tuition Checkout</div>
              <p class="wt-box-desc">
                Test the localized payment gateway flow designed for students across Africa:
              </p>
              <div style="background: #040805; padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-color); max-width: 420px; margin: 0 auto;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 600;">Full-Stack Web Engineering Course</span>
                  <span style="color: var(--olive-gold); font-weight: 700;">₦45,000</span>
                </div>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem;">Student: Alex Mercer (alex@example.com)</div>
                <button id="edmPaystackBtn" class="btn-primary" style="width: 100%; justify-content: center;">
                  💳 Simulate Paystack Checkout
                </button>
                <div id="edmPaymentSuccess" style="display: none; margin-top: 1rem; padding: 10px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; font-family: var(--font-mono); font-size: 0.8rem; color: #6ee7b7;">
                  ✓ Payment Successful! Ref: PSTK_LIVE_774921<br>
                  Access Granted to Course Player.
                </div>
              </div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep3">
            <div class="wt-box">
              <div class="wt-box-title">🔒 Step 3: Role-Based Access Control (RBAC) Guard</div>
              <p class="wt-box-desc">
                Switch user roles to inspect how the microservice evaluates endpoint permissions:
              </p>
              <div style="display: flex; gap: 8px; margin-bottom: 1rem;">
                <button class="filter-btn active edm-role-btn" data-role="student">Student</button>
                <button class="filter-btn edm-role-btn" data-role="tutor">Tutor</button>
                <button class="filter-btn edm-role-btn" data-role="admin">Admin</button>
              </div>
              <div id="edmRbacDisplay" style="background: #040805; padding: 1rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--olive-pale);">
                <!-- Populated via script -->
              </div>
            </div>
          </div>

          <div class="wt-nav-footer">
            <button class="btn-secondary wt-prev-btn" disabled>← Previous Step</button>
            <button class="btn-primary wt-next-btn">Next Step →</button>
          </div>
        </div>
      `;
    }

    // -----------------------------------------------------------
    // WALKTHROUGH 4: Buddy-Hub Real-Time Chat App
    // -----------------------------------------------------------
    else if (item.id === 'gal-buddyhub') {
      walkthroughHtml = `
        <div class="walkthrough-wrapper">
          <div class="wt-stepper-nav">
            <button class="wt-step-btn active" data-step="1"><span class="wt-step-number">1</span> WebSocket Live Chat</button>
            <button class="wt-step-btn" data-step="2"><span class="wt-step-number">2</span> Docker Container Monitor</button>
          </div>

          <div class="wt-panel active" id="wtStep1">
            <div class="wt-box">
              <div class="wt-box-title">💬 Step 1: Real-Time WebSocket Team Chatroom</div>
              <p class="wt-box-desc">
                Send a live message below. An automated peer bot will respond over the simulated Socket.IO channel:
              </p>
              <div style="display: flex; gap: 6px; margin-bottom: 10px;">
                <span class="badge badge-branch">Channel: #general</span>
                <span class="badge badge-public">3 Users Online</span>
              </div>
              <div class="gemini-chat-widget" style="height: 240px;">
                <div class="gemini-chat-messages" id="bdhChatThread">
                  <div class="chat-bubble ai">
                    <strong style="color: var(--olive-gold);">Steve:</strong> Hey team, I just merged the Prisma schema migrations for the chat channels.
                  </div>
                </div>
                <div class="gemini-chat-input-row">
                  <input type="text" id="bdhChatInput" class="gemini-input" placeholder="Type a message into #general..." autocomplete="off">
                  <button id="bdhSendBtn" class="btn-primary" style="padding: 6px 14px; font-size: 0.85rem;">Send</button>
                </div>
              </div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep2">
            <div class="wt-box">
              <div class="wt-box-title">🐳 Step 2: Docker Compose Multi-Container Orchestration</div>
              <p class="wt-box-desc">
                Inspect container health and test restarting individual microservices:
              </p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 1rem;">
                <div style="background: #040805; padding: 12px; border-radius: 6px; border: 1px solid var(--border-color);">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                    <strong style="color: var(--text-primary);">buddy-postgres:15</strong>
                    <span style="color: #6ee7b7; font-family: var(--font-mono);">UP (healthy)</span>
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">Port: 5432:5432</div>
                </div>
                <div style="background: #040805; padding: 12px; border-radius: 6px; border: 1px solid var(--border-color);">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                    <strong style="color: var(--text-primary);">buddy-server-api</strong>
                    <span style="color: #6ee7b7; font-family: var(--font-mono);">UP (healthy)</span>
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">Port: 5000:5000</div>
                </div>
              </div>
              <button id="bdhRestartBtn" class="btn-secondary" style="padding: 7px 14px; font-size: 0.85rem;">
                🔄 Restart Socket.IO Server Container
              </button>
              <div id="bdhDockerLog" style="margin-top: 8px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--olive-gold);"></div>
            </div>
          </div>

          <div class="wt-nav-footer">
            <button class="btn-secondary wt-prev-btn" disabled>← Previous Step</button>
            <button class="btn-primary wt-next-btn">Next Step →</button>
          </div>
        </div>
      `;
    }

    // -----------------------------------------------------------
    // WALKTHROUGH 5: Back to Bible (B2B) 3D PWA
    // -----------------------------------------------------------
    else if (item.id === 'gal-b2b') {
      walkthroughHtml = `
        <div class="walkthrough-wrapper">
          <div class="wt-stepper-nav">
            <button class="wt-step-btn active" data-step="1"><span class="wt-step-number">1</span> Web Audio Chime Synth</button>
            <button class="wt-step-btn" data-step="2"><span class="wt-step-number">2</span> Scripture Trivia</button>
          </div>

          <div class="wt-panel active" id="wtStep1">
            <div class="wt-box">
              <div class="wt-box-title">🔔 Step 1: Real Web Audio API Procedural Chime Synthesizer</div>
              <p class="wt-box-desc">
                Click below to synthesize a real three-tone celestial chime (C5-E5-G5 harmonic chord) through your speakers using native Web Audio oscillators:
              </p>
              <div style="text-align: center; padding: 1.5rem 0;">
                <button id="b2bPlayChimeBtn" class="btn-primary" style="font-size: 1rem; padding: 14px 28px;">
                  🔔 Play Celestial Chime (Web Audio API)
                </button>
                <div id="b2bChimeFeedback" style="margin-top: 10px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--olive-gold);">
                  Click to generate real-time audio chord
                </div>
              </div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep2">
            <div class="wt-box">
              <div class="wt-box-title">📜 Step 2: Scripture Trivia Engine</div>
              <p class="wt-box-desc">
                Sample question from the Master Bible Study Guide database:
              </p>
              <div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--text-primary);">
                Q: According to Genesis, on which day were the sun, moon, and stars created?
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 1rem;" id="b2bTriviaOptions">
                <button class="filter-btn b2b-trivia-opt" data-correct="false" style="text-align: left; padding: 10px 14px;">[A] Day 1</button>
                <button class="filter-btn b2b-trivia-opt" data-correct="false" style="text-align: left; padding: 10px 14px;">[B] Day 3</button>
                <button class="filter-btn b2b-trivia-opt" data-correct="true" style="text-align: left; padding: 10px 14px;">[C] Day 4 (Genesis 1:14-19) - Correct</button>
              </div>
              <div id="b2bTriviaFeedback" style="display: none; padding: 10px; border-radius: 6px; font-size: 0.85rem; font-family: var(--font-mono);"></div>
            </div>
          </div>

          <div class="wt-nav-footer">
            <button class="btn-secondary wt-prev-btn" disabled>← Previous Step</button>
            <button class="btn-primary wt-next-btn">Next Step →</button>
          </div>
        </div>
      `;
    }

    // -----------------------------------------------------------
    // WALKTHROUGH 6: Oxpier One Enterprise Workstation
    // -----------------------------------------------------------
    else {
      walkthroughHtml = `
        <div class="walkthrough-wrapper">
          <div class="wt-stepper-nav">
            <button class="wt-step-btn active" data-step="1"><span class="wt-step-number">1</span> Workspace Modules</button>
            <button class="wt-step-btn" data-step="2"><span class="wt-step-number">2</span> 'Oxie' AI Console</button>
          </div>

          <div class="wt-panel active" id="wtStep1">
            <div class="wt-box">
              <div class="wt-box-title">🏢 Step 1: Multi-Module Operations Workstation</div>
              <p class="wt-box-desc">
                Switch across live enterprise modules powered by Tauri & Supabase PostgreSQL:
              </p>
              <div style="display: flex; gap: 8px; margin-bottom: 1rem;">
                <button class="filter-btn active oxp-tab-btn" data-tab="crm">CRM Pipeline</button>
                <button class="filter-btn oxp-tab-btn" data-tab="ledger">Financial Ledgers</button>
                <button class="filter-btn oxp-tab-btn" data-tab="workforce">Workforce Telemetry</button>
              </div>
              <div id="oxpTabContent" style="background: #040805; padding: 1rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.82rem;">
                <!-- Filled via script -->
              </div>
            </div>
          </div>

          <div class="wt-panel" id="wtStep2">
            <div class="wt-box">
              <div class="wt-box-title">⚡ Step 2: 'Oxie' Live Context AI Assistant</div>
              <p class="wt-box-desc">
                Ask Oxie to evaluate team capacity and clear business bottlenecks:
              </p>
              <div style="display: flex; gap: 6px; margin-bottom: 10px;">
                <button class="preset-chip oxp-chip" data-q="Where are our current client onboarding bottlenecks?">Onboarding Bottlenecks</button>
                <button class="preset-chip oxp-chip" data-q="Summarize billable hours logged this week">Billable Hours</button>
              </div>
              <div id="oxpAiOutput" style="background: #040805; padding: 1rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.82rem; min-height: 80px; color: var(--olive-pale);">
                &gt; Oxie AI Workspace Assistant ready. Click a command above.
              </div>
            </div>
          </div>

          <div class="wt-nav-footer">
            <button class="btn-secondary wt-prev-btn" disabled>← Previous Step</button>
            <button class="btn-primary wt-next-btn">Next Step →</button>
          </div>
        </div>
      `;
    }

    modalContent.innerHTML = `
      <div class="dialog-header">
        <div>
          <span class="gallery-card-badge">${item.badge}</span>
          <h2 class="dialog-title">${item.title}</h2>
          <p style="font-size: 0.88rem; color: var(--text-muted); font-family: var(--font-mono);">${item.appType}</p>
        </div>
        <button class="dialog-close-btn" id="modalCloseAction" aria-label="Close dialog">✕</button>
      </div>
      <div class="dialog-body">
        ${walkthroughHtml}
        ${item.demoUrl ? `
          <div style="margin-top: 1.5rem; text-align: center;">
            <a href="${item.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
              ⚡ Open Full Live Application in New Tab
            </a>
          </div>
        ` : ''}
      </div>
    `;

    caseStudyModal.showModal();

    // Attach Dialog Close Action
    const closeAction = document.getElementById('modalCloseAction');
    if (closeAction) {
      closeAction.addEventListener('click', () => caseStudyModal.close());
    }

    // Attach Stepper Navigation Logic
    initStepperNavigation();

    // Attach Project-Specific Interactive Walkthrough Logic
    if (item.id === 'gal-clearyes') initClearYesWalkthrough();
    else if (item.id === 'gal-medmate') initMedMateWalkthrough();
    else if (item.id === 'gal-edumeet') initEdumeetWalkthrough();
    else if (item.id === 'gal-buddyhub') initBuddyHubWalkthrough();
    else if (item.id === 'gal-b2b') initBackToBibleWalkthrough();
    else if (item.id === 'gal-oxpier') initOxpierWalkthrough();
  }

  // ==========================================
  // Stepper Controller Helper
  // ==========================================
  function initStepperNavigation() {
    const stepBtns = document.querySelectorAll('.wt-step-btn');
    const panels = document.querySelectorAll('.wt-panel');
    const prevBtn = document.querySelector('.wt-prev-btn');
    const nextBtn = document.querySelector('.wt-next-btn');
    let currentStep = 1;
    const totalSteps = stepBtns.length;

    function goToStep(step) {
      currentStep = step;
      stepBtns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === step);
      });
      panels.forEach((p, idx) => {
        p.classList.toggle('active', idx + 1 === step);
      });

      if (prevBtn) prevBtn.disabled = currentStep === 1;
      if (nextBtn) {
        if (currentStep === totalSteps) {
          nextBtn.textContent = '✓ Walkthrough Complete';
          nextBtn.disabled = true;
        } else {
          nextBtn.textContent = 'Next Step →';
          nextBtn.disabled = false;
        }
      }
    }

    stepBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const s = parseInt(btn.getAttribute('data-step'), 10);
        goToStep(s);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) goToStep(currentStep - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) goToStep(currentStep + 1);
      });
    }
  }

  // ==========================================
  // Walkthrough Interactive Script: ClearYes
  // ==========================================
  function initClearYesWalkthrough() {
    // 1. Audio voice briefing simulator
    const playBtn = document.getElementById('clyPlayVoiceBtn');
    const statusText = document.getElementById('clyVoiceStatus');
    const eqBars = document.querySelectorAll('#clyEqualizer .eq-bar');
    let isPlaying = false;

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        eqBars.forEach(b => b.classList.toggle('animating', isPlaying));

        if (isPlaying) {
          playBtn.textContent = '⏸️ Pause Voice Briefing';
          statusText.textContent = '🎙️ Playing clinical briefing: "Patient informed consent procedure verified. Complication safeguards active."';

          // Real speech synthesis if supported
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance("Welcome to ClearYes. This clinical consent overview explains your procedure and safeguards.");
            msg.rate = 1.0;
            msg.onend = () => {
              isPlaying = false;
              playBtn.textContent = '▶️ Play Doctor Voice Briefing';
              eqBars.forEach(b => b.classList.remove('animating'));
              statusText.textContent = 'Status: Briefing complete.';
            };
            window.speechSynthesis.speak(msg);
          }
        } else {
          playBtn.textContent = '▶️ Play Doctor Voice Briefing';
          if ('speechSynthesis' in window) window.speechSynthesis.cancel();
          statusText.textContent = 'Status: Paused.';
        }
      });
    }

    // 2. Risk Grid Slider
    const riskSlider = document.getElementById('clyRiskSlider');
    const riskLabel = document.getElementById('clyRiskLabel');
    const riskGrid = document.getElementById('clyRiskGrid');
    const riskStats = document.getElementById('clyRiskStats');

    function renderRiskGrid(riskVal) {
      if (!riskGrid) return;
      riskGrid.innerHTML = '';
      for (let i = 0; i < 100; i++) {
        const isRisk = i < riskVal;
        const node = document.createElement('div');
        node.style.width = '100%';
        node.style.aspectRatio = '1';
        node.style.borderRadius = '3px';
        node.style.backgroundColor = isRisk ? 'var(--olive-gold)' : 'rgba(255,255,255,0.08)';
        node.style.border = isRisk ? '1px solid var(--olive-leaf)' : '1px solid rgba(255,255,255,0.1)';
        node.style.cursor = 'pointer';
        node.title = `Patient #${i + 1}: ${isRisk ? 'Complication Risk' : 'Safe Recovery'}`;
        riskGrid.appendChild(node);
      }
      if (riskLabel) riskLabel.textContent = `${riskVal}%`;
      if (riskStats) {
        riskStats.innerHTML = `
          <span style="color: var(--olive-pale);">🟢 Safe Recovery: ${100 - riskVal}/100</span>
          <span style="color: var(--olive-gold); font-weight: 700;">🟡 Complication Risk: ${riskVal}/100</span>
        `;
      }
    }

    if (riskSlider) {
      renderRiskGrid(parseInt(riskSlider.value, 10));
      riskSlider.addEventListener('input', (e) => {
        renderRiskGrid(parseInt(e.target.value, 10));
      });
    }

    // 3. Quiz Options
    const quizOptions = document.querySelectorAll('.cly-quiz-option');
    const quizFeedback = document.getElementById('clyQuizFeedback');
    quizOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const isCorrect = opt.getAttribute('data-correct') === 'true';
        quizOptions.forEach(o => o.style.borderColor = 'var(--border-color)');
        if (isCorrect) {
          opt.style.borderColor = '#10b981';
          quizFeedback.style.display = 'block';
          quizFeedback.style.background = 'rgba(16, 185, 129, 0.15)';
          quizFeedback.style.border = '1px solid #10b981';
          quizFeedback.style.color = '#6ee7b7';
          quizFeedback.textContent = '✓ Correct Answer! Patient comprehension score: 100% Passed. Ready for signature.';
        } else {
          opt.style.borderColor = '#ef4444';
          quizFeedback.style.display = 'block';
          quizFeedback.style.background = 'rgba(239, 68, 68, 0.15)';
          quizFeedback.style.border = '1px solid #ef4444';
          quizFeedback.style.color = '#fca5a5';
          quizFeedback.textContent = '✕ Incorrect. Clinical guidelines advise applying pressure and contacting surgical triage.';
        }
      });
    });

    // 4. HTML5 Signature Pad
    const canvas = document.getElementById('clySigCanvas');
    const clearBtn = document.getElementById('clyClearSigBtn');
    const verifyBtn = document.getElementById('clyVerifySigBtn');
    const hashDisplay = document.getElementById('clyHashDisplay');

    if (canvas) {
      const cctx = canvas.getContext('2d');
      cctx.strokeStyle = '#c2d5a8';
      cctx.lineWidth = 2.5;
      cctx.lineCap = 'round';
      let drawing = false;

      function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: (clientX - rect.left) * (canvas.width / rect.width),
          y: (clientY - rect.top) * (canvas.height / rect.height)
        };
      }

      canvas.addEventListener('mousedown', (e) => { drawing = true; const p = getPos(e); cctx.beginPath(); cctx.moveTo(p.x, p.y); });
      canvas.addEventListener('mousemove', (e) => { if (!drawing) return; const p = getPos(e); cctx.lineTo(p.x, p.y); cctx.stroke(); });
      window.addEventListener('mouseup', () => { drawing = false; });

      canvas.addEventListener('touchstart', (e) => { drawing = true; const p = getPos(e); cctx.beginPath(); cctx.moveTo(p.x, p.y); e.preventDefault(); }, { passive: false });
      canvas.addEventListener('touchmove', (e) => { if (!drawing) return; const p = getPos(e); cctx.lineTo(p.x, p.y); cctx.stroke(); e.preventDefault(); }, { passive: false });
      canvas.addEventListener('touchend', () => { drawing = false; });

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          cctx.clearRect(0, 0, canvas.width, canvas.height);
          if (hashDisplay) hashDisplay.style.display = 'none';
        });
      }

      if (verifyBtn) {
        verifyBtn.addEventListener('click', () => {
          if (hashDisplay) {
            hashDisplay.style.display = 'block';
            const randomHash = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
            document.getElementById('clyHashString').textContent = `SHA-256: ${randomHash}`;
          }
        });
      }
    }
  }

  // ==========================================
  // Walkthrough Interactive Script: MedMate (Nursing Home Caregiver System)
  // ==========================================
  function initMedMateWalkthrough() {
    const residentSelect = document.getElementById('mmResidentSelect');
    const medSelect = document.getElementById('mmMedSelect');
    const freqSelect = document.getElementById('mmFreqSelect');
    const cronExpr = document.getElementById('mmCronExpr');
    const armBtn = document.getElementById('mmArmCronBtn');
    const cronStatus = document.getElementById('mmCronStatus');

    if (freqSelect && cronExpr) {
      freqSelect.addEventListener('change', () => {
        cronExpr.textContent = freqSelect.value;
      });
    }

    if (armBtn) {
      armBtn.addEventListener('click', () => {
        const res = residentSelect ? residentSelect.value.split(' ')[0] : 'Resident';
        const med = medSelect ? medSelect.value : 'Medication';
        cronStatus.textContent = `✓ Ward Node-Cron Daemon Armed: [${freqSelect.value}]. Caregiver alerts active for ${res} (${med}).`;
      });
    }

    // Caregiver voice note simulation
    const voiceNoteBtn = document.getElementById('mmVoiceNoteBtn');
    const voiceBox = document.getElementById('mmVoiceBox');
    const voiceText = document.getElementById('mmVoiceText');

    if (voiceNoteBtn && voiceBox && voiceText) {
      voiceNoteBtn.addEventListener('click', () => {
        voiceBox.style.display = 'block';
        voiceText.textContent = '';
        const transcript = "Caregiver Shift Note: Margaret Dawes in Room 104 took morning Donepezil and Lisinopril without difficulty. Water swallowed fully, vitals nominal. Mood engaged.";
        let i = 0;
        const iv = setInterval(() => {
          if (i < transcript.length) {
            voiceText.textContent += transcript.charAt(i);
            i++;
          } else {
            clearInterval(iv);
            voiceText.innerHTML += '<br><strong style="color: #6ee7b7; font-size: 0.78rem;">✓ Note saved to Caregiver Shift Handover Log.</strong>';
          }
        }, 18);
      });
    }

    // Caregiver shift alert simulation
    const sendAlertBtn = document.getElementById('mmSendAlertBtn');
    const phonePreview = document.getElementById('mmPhonePreview');
    const alertResident = document.getElementById('mmAlertResident');
    const alertMed = document.getElementById('mmAlertMed');
    const confirmDoseBtn = document.getElementById('mmConfirmDoseBtn');
    const doseConfirmed = document.getElementById('mmDoseConfirmed');

    if (sendAlertBtn && phonePreview) {
      sendAlertBtn.addEventListener('click', () => {
        if (alertResident && residentSelect) {
          alertResident.textContent = residentSelect.value;
        }
        if (alertMed && medSelect) {
          alertMed.textContent = medSelect.value;
        }
        phonePreview.style.display = 'block';
        if (doseConfirmed) doseConfirmed.style.display = 'none';
      });
    }

    if (confirmDoseBtn && doseConfirmed) {
      confirmDoseBtn.addEventListener('click', () => {
        doseConfirmed.style.display = 'block';
      });
    }
  }

  // ==========================================
  // Walkthrough Interactive Script: Edumeet
  // ==========================================
  function initEdumeetWalkthrough() {
    const chatInput = document.getElementById('edmChatInput');
    const sendBtn = document.getElementById('edmSendBtn');
    const chatThread = document.getElementById('edmChatThread');
    const chips = document.querySelectorAll('.edm-prompt-chip');

    function sendAiQuery(userText) {
      if (!userText.trim()) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user';
      userBubble.textContent = userText;
      chatThread.appendChild(userBubble);
      chatThread.scrollTop = chatThread.scrollHeight;

      // Simulated smart Gemini response
      setTimeout(() => {
        const aiBubble = document.createElement('div');
        aiBubble.className = 'chat-bubble ai';

        const q = userText.toLowerCase();
        if (q.includes('closure')) {
          aiBubble.innerHTML = `<strong>Gemini AI Tutor:</strong> A closure is the combination of a function bundled together with references to its surrounding lexical environment. Even when the outer function returns, the inner function retains access to outer variables.`;
        } else if (q.includes('sql')) {
          aiBubble.innerHTML = `<strong>Gemini AI Tutor:</strong> SQL databases are relational and structured with tables and schemas (e.g. PostgreSQL), while NoSQL databases (e.g. MongoDB) store flexible JSON/BSON documents suited for dynamic schemas.`;
        } else if (q.includes('jwt')) {
          aiBubble.innerHTML = `<strong>Gemini AI Tutor:</strong> JSON Web Tokens (JWT) are signed with a cryptographic secret (HMAC SHA-256 or RSA), allowing stateless, tamper-proof user authentication between microservices without querying a database on every request.`;
        } else {
          aiBubble.innerHTML = `<strong>Gemini AI Tutor:</strong> Great question about <em>${userText}</em>! In production architectures, decoupling modular components with clean interfaces and automated error boundaries ensures resilient, scalable systems.`;
        }

        chatThread.appendChild(aiBubble);
        chatThread.scrollTop = chatThread.scrollHeight;
      }, 500);
    }

    if (sendBtn && chatInput) {
      sendBtn.addEventListener('click', () => {
        const val = chatInput.value;
        chatInput.value = '';
        sendAiQuery(val);
      });

      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = chatInput.value;
          chatInput.value = '';
          sendAiQuery(val);
        }
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        sendAiQuery(chip.getAttribute('data-prompt'));
      });
    });

    const payBtn = document.getElementById('edmPaystackBtn');
    const paySuccess = document.getElementById('edmPaymentSuccess');
    if (payBtn && paySuccess) {
      payBtn.addEventListener('click', () => {
        payBtn.textContent = 'Processing with Paystack...';
        setTimeout(() => {
          payBtn.textContent = '💳 Paystack Checkout';
          paySuccess.style.display = 'block';
        }, 800);
      });
    }

    const roleBtns = document.querySelectorAll('.edm-role-btn');
    const rbacDisplay = document.getElementById('edmRbacDisplay');
    function updateRbac(role) {
      if (!rbacDisplay) return;
      if (role === 'student') {
        rbacDisplay.innerHTML = `
          <div style="color: var(--olive-gold); margin-bottom: 6px;">[ROLE: STUDENT] // JWT Scope: courses:read, quiz:submit</div>
          <div>GET /api/v1/courses/enrolled -> 200 OK</div>
          <div>POST /api/v1/quiz/submit -> 201 Created</div>
          <div style="color: #ef4444;">DELETE /api/v1/courses/:id -> 403 Forbidden (Insufficient Permissions)</div>
        `;
      } else if (role === 'tutor') {
        rbacDisplay.innerHTML = `
          <div style="color: var(--olive-gold); margin-bottom: 6px;">[ROLE: TUTOR] // JWT Scope: courses:write, curriculum:edit</div>
          <div>POST /api/v1/curriculum/upload -> 200 OK</div>
          <div>GET /api/v1/tutor/students -> 200 OK</div>
          <div style="color: #ef4444;">DELETE /api/v1/admin/users -> 403 Forbidden</div>
        `;
      } else {
        rbacDisplay.innerHTML = `
          <div style="color: #6ee7b7; margin-bottom: 6px;">[ROLE: ADMIN] // Full Platform Root Scope</div>
          <div>ALL /api/v1/* -> 200 OK (Full RBAC Read/Write/Delete Access)</div>
          <div>Database Audit Trail: Active</div>
        `;
      }
    }
    updateRbac('student');
    roleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        roleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateRbac(btn.getAttribute('data-role'));
      });
    });
  }

  // ==========================================
  // Walkthrough Interactive Script: Buddy-Hub
  // ==========================================
  function initBuddyHubWalkthrough() {
    const chatInput = document.getElementById('bdhChatInput');
    const sendBtn = document.getElementById('bdhSendBtn');
    const chatThread = document.getElementById('bdhChatThread');

    function sendChat(msg) {
      if (!msg.trim()) return;
      const b = document.createElement('div');
      b.className = 'chat-bubble user';
      b.innerHTML = `<strong>You:</strong> ${msg} <span style="font-size: 0.7rem; opacity: 0.8;">✓✓ WebSocket</span>`;
      chatThread.appendChild(b);
      chatThread.scrollTop = chatThread.scrollHeight;

      setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'chat-bubble ai';
        reply.innerHTML = `<strong style="color: var(--olive-gold);">Steve:</strong> Got your message: "<em>${msg}</em>"! Live event broadcasted to all connected peers via Socket.IO.`;
        chatThread.appendChild(reply);
        chatThread.scrollTop = chatThread.scrollHeight;
      }, 1000);
    }

    if (sendBtn && chatInput) {
      sendBtn.addEventListener('click', () => {
        const val = chatInput.value;
        chatInput.value = '';
        sendChat(val);
      });
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = chatInput.value;
          chatInput.value = '';
          sendChat(val);
        }
      });
    }

    const restartBtn = document.getElementById('bdhRestartBtn');
    const log = document.getElementById('bdhDockerLog');
    if (restartBtn && log) {
      restartBtn.addEventListener('click', () => {
        log.textContent = 'docker-compose restart buddy-server-api... Container restarted. Socket.IO listening on port 5000.';
      });
    }
  }

  // ==========================================
  // Walkthrough Interactive Script: Back to Bible
  // ==========================================
  function initBackToBibleWalkthrough() {
    const chimeBtn = document.getElementById('b2bPlayChimeBtn');
    const chimeFeedback = document.getElementById('b2bChimeFeedback');

    if (chimeBtn) {
      chimeBtn.addEventListener('click', () => {
        // Real Web Audio API oscillator synthesis!
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            const actx = new AudioContext();
            const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 harmonic chord

            frequencies.forEach((freq, i) => {
              const osc = actx.createOscillator();
              const gain = actx.createGain();

              osc.type = 'sine';
              osc.frequency.setValueAtTime(freq, actx.currentTime + i * 0.12);

              gain.gain.setValueAtTime(0.001, actx.currentTime + i * 0.12);
              gain.gain.exponentialRampToValueAtTime(0.2, actx.currentTime + i * 0.12 + 0.05);
              gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + i * 0.12 + 1.2);

              osc.connect(gain);
              gain.connect(actx.destination);

              osc.start(actx.currentTime + i * 0.12);
              osc.stop(actx.currentTime + i * 0.12 + 1.3);
            });

            if (chimeFeedback) {
              chimeFeedback.textContent = '✓ Synthesized Harmonic Celestial Chord (C5-E5-G5-C6) via Web Audio API';
            }
          }
        } catch (err) {
          if (chimeFeedback) chimeFeedback.textContent = 'AudioContext active.';
        }
      });
    }

    const triviaOpts = document.querySelectorAll('.b2b-trivia-opt');
    const triviaFeedback = document.getElementById('b2bTriviaFeedback');
    triviaOpts.forEach(opt => {
      opt.addEventListener('click', () => {
        const isCorrect = opt.getAttribute('data-correct') === 'true';
        triviaOpts.forEach(o => o.style.borderColor = 'var(--border-color)');
        if (isCorrect) {
          opt.style.borderColor = '#10b981';
          triviaFeedback.style.display = 'block';
          triviaFeedback.style.background = 'rgba(16, 185, 129, 0.15)';
          triviaFeedback.style.border = '1px solid #10b981';
          triviaFeedback.style.color = '#6ee7b7';
          triviaFeedback.textContent = '✓ Correct! Genesis 1:14-19 records the creation of lights in the firmament on the fourth day.';
        } else {
          opt.style.borderColor = '#ef4444';
          triviaFeedback.style.display = 'block';
          triviaFeedback.style.background = 'rgba(239, 68, 68, 0.15)';
          triviaFeedback.style.border = '1px solid #ef4444';
          triviaFeedback.style.color = '#fca5a5';
          triviaFeedback.textContent = '✕ Incorrect. Review Genesis Chapter 1.';
        }
      });
    });
  }

  // ==========================================
  // Walkthrough Interactive Script: Oxpier One
  // ==========================================
  function initOxpierWalkthrough() {
    const tabBtns = document.querySelectorAll('.oxp-tab-btn');
    const tabContent = document.getElementById('oxpTabContent');

    function showTab(t) {
      if (!tabContent) return;
      if (t === 'crm') {
        tabContent.innerHTML = `
          <div style="color: var(--olive-gold); margin-bottom: 6px;">[CRM PIPELINE] — Active Opportunities: 14</div>
          <div>1. Northbridge Medical Group — $42,000 ARR (Contract Review)</div>
          <div>2. Horizon Property Management — $28,500 ARR (Demo Completed)</div>
          <div>3. Vantage Agency — $19,200 ARR (Discovery Scheduled)</div>
        `;
      } else if (t === 'ledger') {
        tabContent.innerHTML = `
          <div style="color: var(--olive-gold); margin-bottom: 6px;">[FINANCIAL LEDGER] — Q3 Gross Margin: 68.4%</div>
          <div>Monthly Recurring Revenue: $54,800 USD</div>
          <div>Active Retainer Contracts: 28 Accounts</div>
          <div>Automated Invoice Reconciliation: Healthy</div>
        `;
      } else {
        tabContent.innerHTML = `
          <div style="color: var(--olive-gold); margin-bottom: 6px;">[WORKFORCE MONITORING] — Active Remote Staff: 32</div>
          <div>Total Billable Hours (Current Week): 1,280 hrs</div>
          <div>Average First Response SLA: 4.2 minutes</div>
          <div>Client Satisfaction CSAT: 98.4%</div>
        `;
      }
    }
    showTab('crm');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showTab(btn.getAttribute('data-tab'));
      });
    });

    const chips = document.querySelectorAll('.oxp-chip');
    const aiOutput = document.getElementById('oxpAiOutput');
    chips.forEach(c => {
      c.addEventListener('click', () => {
        const q = c.getAttribute('data-q');
        aiOutput.innerHTML = `<span style="color: var(--text-muted);">&gt; Querying Oxie AI: "${q}"...</span><br><br>`;
        setTimeout(() => {
          if (q.includes('bottlenecks')) {
            aiOutput.innerHTML += `<strong>Oxie Assistant:</strong> Primary bottleneck identified in Client Onboarding: 4 accounts waiting on custom domain DNS configuration. Recommended action: trigger automated DNS verification webhook.`;
          } else {
            aiOutput.innerHTML += `<strong>Oxie Assistant:</strong> 1,280 billable hours logged across 32 managed professionals this week with 99.2% attendance compliance.`;
          }
        }, 400);
      });
    });
  }

  // Gallery Filter Buttons
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGalleryFilter = btn.getAttribute('data-gallery-filter');
      renderGallery();
    });
  });

  // ==========================================
  // 6. Render Full Repositories Showcase
  // ==========================================
  function renderProjects() {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    const filtered = data.projects.filter(p => {
      let matchesCategory = true;
      if (currentProjectFilter === 'flagship') matchesCategory = p.category === 'flagship' || p.tier === 'featured';
      else if (currentProjectFilter === 'private') matchesCategory = p.type === 'private';
      else if (currentProjectFilter === 'branched') matchesCategory = (p.branches && p.branches.length > 1) || p.type === 'branched';
      else if (currentProjectFilter === 'forked') matchesCategory = p.isFork === true || p.type === 'forked';
      else if (currentProjectFilter === 'frontend') matchesCategory = p.category === 'frontend' || p.techStack.includes('React') || p.techStack.includes('PWA');
      else if (currentProjectFilter === 'backend') matchesCategory = p.category === 'backend' || p.techStack.includes('Node.js') || p.techStack.includes('Microservices');
      else if (currentProjectFilter === 'systems') matchesCategory = p.category === 'systems' || p.techStack.includes('C#') || p.techStack.includes('Tauri (Rust)');

      const query = searchQuery.toLowerCase().trim();
      let matchesSearch = true;
      if (query) {
        const branchNames = p.branches ? p.branches.map(b => (typeof b === 'string' ? b : b.name)).join(' ').toLowerCase() : '';
        const haystack = `${p.name} ${p.fullName} ${p.description} ${p.role} ${p.techStack.join(' ')} ${branchNames}`.toLowerCase();
        matchesSearch = haystack.includes(query);
      }

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">No repositories match your criteria</p>
          <p style="font-size: 0.9rem;">Try selecting 'All Repositories' or clearing the search field.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card';

      let badgesHtml = '';
      if (p.tier === 'featured') {
        badgesHtml += `<span class="badge badge-flagship">⭐ Flagship</span>`;
      }
      if (p.type === 'private') {
        badgesHtml += `<span class="badge badge-private">🔒 Private Enterprise</span>`;
      } else if (p.type === 'forked' || p.isFork) {
        badgesHtml += `<span class="badge badge-forked">🍴 Fork & Contributed</span>`;
      } else {
        badgesHtml += `<span class="badge badge-public">🌐 Public Source</span>`;
      }

      if (p.branches && p.branches.length > 1) {
        badgesHtml += `<span class="badge badge-branch">🌿 ${p.branches.length} Branches</span>`;
      }

      let highlightsHtml = '';
      if (p.highlights && p.highlights.length > 0) {
        highlightsHtml = `
          <ul class="gallery-highlights-list" style="margin-bottom: 1.25rem;">
            ${p.highlights.map(h => `<li class="gallery-highlight-item">${h}</li>`).join('')}
          </ul>
        `;
      }

      let branchesHtml = '';
      if (p.branches && p.branches.length > 0) {
        branchesHtml = `
          <div class="branches-box">
            <div class="branches-box-title">🌿 Git Branches & Modules</div>
            <div class="branch-pills">
              ${p.branches.map(b => {
                const bName = typeof b === 'string' ? b : b.name;
                const bNote = typeof b === 'object' && b.note ? ` title="${b.note}"` : '';
                return `<span class="branch-pill"${bNote}>${bName}</span>`;
              }).join('')}
            </div>
          </div>
        `;
      }

      const techHtml = `
        <div class="tech-pills">
          ${p.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      `;

      let actionsHtml = `<div class="card-actions">`;
      if (p.caseStudy) {
        actionsHtml += `
          <button class="btn-card-primary open-case-study" data-project-id="${p.id}">
            📐 Architectural Blueprint
          </button>
        `;
      }
      if (p.liveDemoUrl) {
        actionsHtml += `
          <a href="${p.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary">
            ⚡ Live Preview
          </a>
        `;
      }
      if (p.githubUrl) {
        const isPrivate = p.type === 'private';
        const label = isPrivate ? '🔒 Private Codebase' : '🐙 View GitHub';
        actionsHtml += `
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary">
            ${label}
          </a>
        `;
      }
      actionsHtml += `</div>`;

      card.innerHTML = `
        <div class="badges-row">${badgesHtml}</div>
        <h3 class="card-title">${p.name}</h3>
        <div class="card-role">${p.role}</div>
        <p class="card-desc">${p.description}</p>
        ${highlightsHtml}
        ${branchesHtml}
        ${techHtml}
        ${actionsHtml}
      `;

      projectsContainer.appendChild(card);
    });

    attach3DTilt(document.querySelectorAll('.project-card'));

    document.querySelectorAll('.open-case-study').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-project-id');
        openCaseStudy(id);
      });
    });
  }

  function openCaseStudy(projId) {
    const proj = data.projects.find(p => p.id === projId);
    if (!proj || !proj.caseStudy) return;

    modalContent.innerHTML = `
      <div class="dialog-header">
        <div>
          <span class="badge ${proj.type === 'private' ? 'badge-private' : 'badge-flagship'}" style="margin-bottom: 6px;">
            ${proj.type === 'private' ? '🔒 Private Enterprise Architecture' : '⭐ Flagship System Design'}
          </span>
          <h2 class="dialog-title">${proj.name}</h2>
          <p style="font-size: 0.88rem; color: var(--text-muted); font-family: var(--font-mono);">${proj.fullName}</p>
        </div>
        <button class="dialog-close-btn" id="modalCloseAction" aria-label="Close dialog">✕</button>
      </div>
      <div class="dialog-body">
        <div class="cs-section">
          <div class="cs-label">Problem Statement & Requirements</div>
          <p style="color: var(--text-secondary); line-height: 1.6;">${proj.caseStudy.problem}</p>
        </div>

        <div class="cs-section">
          <div class="cs-label">System Topology & Data Flow</div>
          <div class="cs-diagram-box">
            <pre>${proj.caseStudy.architecture}</pre>
          </div>
        </div>

        <div class="cs-section">
          <div class="cs-label">Full-Stack Solution & Implementation</div>
          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${proj.caseStudy.solution}</p>
          <div class="tech-pills">
            ${proj.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div class="cs-section">
          <div class="cs-label">Production Impact & Key Metrics</div>
          <p style="color: var(--olive-gold); font-family: var(--font-mono); font-size: 0.95rem;">${proj.caseStudy.metrics}</p>
        </div>

        ${proj.accessNotice ? `
          <div style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.25); border-radius: var(--radius-sm); padding: 12px 16px; font-size: 0.85rem; color: #fda4af;">
            ${proj.accessNotice}
          </div>
        ` : ''}
      </div>
    `;

    caseStudyModal.showModal();

    const closeAction = document.getElementById('modalCloseAction');
    if (closeAction) {
      closeAction.addEventListener('click', () => caseStudyModal.close());
    }
  }

  // Light dismiss on backdrop click
  caseStudyModal.addEventListener('click', (e) => {
    const rect = caseStudyModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      caseStudyModal.close();
    }
  });

  // Project Filter Tabs
  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProjectFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Project Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });

  // Initial Execution
  renderGallery();
  renderProjects();
});
