const output = document.getElementById('terminal-output');
const input = document.getElementById('terminal-input');
const form = document.getElementById('terminal-form');
let cosmicTheme = true;


let currentMenu = 'main';

function showMainMenu() {
  printToTerminal(
    `<b>Choose what you want to read about :(enter number or type command)</b><br>1) $Accomplished missions<br>2) $Upcoming missions<br>3) $Launchers<br>4) $Satellites<br>5) $Space Application`
  );
  currentMenu = 'main';
}

function showAccomplishedMissionsMenu() {
  printToTerminal(
    `<b>Accomplished Missions:</b><br>
    1) $Spacecraft Missions<br>
    2) $Satellites realised by private players or students<br>
    3) $Foreign satellites launched by ISRO<br>
    4) $Launch Missions<br>
    5) $Re-entry Missions & POEMS<br>
    6) $Launch missions facilitated by ISRO<br>
    7) $Gaganyaan`
  );
  currentMenu = 'accomplished';
}

function showUpcomingMissionsMenu() {
  printToTerminal(
    `<b>Upcoming Missions:</b><br>
    1) $Gyanganga<br>
    2) $NISAR`
  );
  currentMenu = 'upcoming';
}

function showSatellitesMenu() {
  printToTerminal(
    `<b>Satellites:</b><br>
    1) $Communication Satellites<br>
    2) $Earth Observation Satellites<br>
    3) $Scientific Spacecraft<br>
    4) $Navigation Satellites<br>
    5) $Experimental Satellites<br>
    6) $Small Satellites<br>
    7) $Student Satellites`
  );
  currentMenu = 'satellites';
}

function handleAccomplishedMissions(cmd) {
  const c = cmd.trim().toLowerCase();
  if (c === '1' || c.includes('spacecraft')) {
    printButtonToTerminal('', 'https://www.isro.gov.in/SpacecraftMissions.html');
    currentMenu = 'main';
  } else if (c === '2' || c.includes('private') || c.includes('student')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/Student_Satellite.html');
    currentMenu = 'main';
  } else if (c === '3' || c.includes('foreign')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/ForeignSatellites.html');
    currentMenu = 'main';
  } else if (c === '4' || c.includes('launch mission')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/LaunchMissions.html');
    currentMenu = 'main';
  } else if (c === '5' || c.includes('re-entry') || c.includes('poem')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/ReEntryMissions.html');
    currentMenu = 'main';
  } else if (c === '6' || c.includes('facilitated')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/Indian_private_players.html');
    currentMenu = 'main';
  } else if (c === '7' || c.includes('gaganyaan')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/Gaganyaan_Mission.html');
    currentMenu = 'main';
  } else {
    printToTerminal(`<span style='color:#ff4b8e'>Unknown command:</span> ${cmd}`);
  }
}

function handleUpcomingMissions(cmd) {
  const c = cmd.trim().toLowerCase();
  if (c === '1' || c.includes('gyanganga')) {
    printButtonToTerminal('Gotto ISRO Gaganyaan', 'https://www.isro.gov.in/Gaganyaan.html');
    currentMenu = 'main';
  } else if (c === '2' || c.includes('nisar')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/NISARSatellite.html');
    currentMenu = 'main';
  } else {
    printToTerminal(`<span style='color:#ff4b8e'>Unknown command:</span> ${cmd}`);
  }
}

function handleSatellites(cmd) {
  const c = cmd.trim().toLowerCase();
  if (c === '1' || c.includes('communication')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/CommunicatioSatellitenNew.html');
    currentMenu = 'main';
  } else if (c === '2' || c.includes('earth observation')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/EarthObservationSatellites.html');
    currentMenu = 'main';
  } else if (c === '3' || c.includes('scientific')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/spacesciexp.html');
    currentMenu = 'main';
  } else if (c === '4' || c.includes('navigation')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/satellitenavign.html');
    currentMenu = 'main';
  } else if (c === '5' || c.includes('experimental')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/ExperimentalSatellites.html');
    currentMenu = 'main';
  } else if (c === '6' || c.includes('small')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/smallsat.html');
    currentMenu = 'main';
  } else if (c === '7' || c.includes('student')) {
    printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/Student_Satellite.html');
    currentMenu = 'main';
  } else {
    printToTerminal(`<span style='color:#ff4b8e'>Unknown command:</span> ${cmd}`);
  }
}

function printToTerminal(text, isCmd = false) {
  const div = document.createElement('div');
  if (isCmd) {
    div.innerHTML = `<span class='cosmic-glow' style="white-space: pre-wrap">&gt; ${text}</span>`;
  } else {
    div.innerHTML = text;
  }
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function printButtonToTerminal(label, url) {
  const div = document.createElement('div');
  div.innerHTML = `<button class="terminal-link-btn" tabindex="0">${label}</button>`;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
  const btn = div.querySelector('button');
  btn.focus();

 
  const allBtns = output.querySelectorAll('.terminal-link-btn');
  allBtns.forEach(b => { if (b !== btn) b.tabIndex = -1; });


  if (window._terminalBtnHandler) {
    window._terminalBtnHandler();
    window._terminalBtnHandler = null;
  }

 
  function keyHandler(e) {
    if (document.activeElement === btn) {
      if (e.key === 'Enter') {
        window.open(url, '_blank');
        e.preventDefault();
      } else if (e.key === '/') {
        input.focus();
        e.preventDefault();
      }
    }
  }
  btn.addEventListener('keydown', keyHandler);
  btn.addEventListener('click', function() {
    window.open(url, '_blank');
  });

  
  window._terminalBtnHandler = () => {
    btn.removeEventListener('keydown', keyHandler);
    btn.removeEventListener('click', function() {
      window.open(url, '_blank');
    });
  };
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const cmd = input.value;
  if (!cmd.trim()) return;
  printToTerminal(cmd, true);
  const c = cmd.trim().toLowerCase();

  if (currentMenu === 'main') {
    if (c === '1' || c.includes('accomplished')) {
      showAccomplishedMissionsMenu();
    } else if (c === '2' || c.includes('upcoming')) {
      showUpcomingMissionsMenu();
    } else if (c === '3' || c.includes('launchers')) {
      printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/Launchers.html');
      showMainMenu();
    } else if (c === '4' || c.includes('satellites')) {
      showSatellitesMenu();
    } else if (c === '5' || c.includes('space application')) {
      printButtonToTerminal('click enter to redirect and / to write terminal commands', 'https://www.isro.gov.in/SpaceApplications.html');
      showMainMenu();
    } else if (c === 'command') {
      showMainMenu();
    } else {
      printToTerminal(`<span style='color:#ff4b8e'>Unknown command:</span> ${cmd}`);
    }
  } else if (currentMenu === 'accomplished') {
    handleAccomplishedMissions(cmd);
  } else if (currentMenu === 'upcoming') {
    handleUpcomingMissions(cmd);
  } else if (currentMenu === 'satellites') {
    handleSatellites(cmd);
  }
  input.value = '';
});


(function() {
  const canvas = document.getElementById('stars-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  resize();
  window.addEventListener('resize', resize);

  
  const STAR_COUNT = 180; 
  const SHOOTING_STAR_FREQ = 0.045; 
  const stars = [];
  const shootingStars = [];

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }


  function Star() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 1.1 + 0.2;
    this.alpha = randomBetween(0.5, 1);
    this.alphaChange = randomBetween(0.002, 0.008) * (Math.random() < 0.5 ? 1 : -1);
    this.speed = randomBetween(0.01, 0.05);
  }
  Star.prototype.draw = function() {
    this.alpha += this.alphaChange;
    if (this.alpha <= 0.2 || this.alpha >= 1) this.alphaChange *= -1;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
    // Slight drift
    this.x += this.speed * 0.2;
    if (this.x > w) this.x = 0;
  };

 
  function ShootingStar() {
    this.x = randomBetween(w * 0.1, w * 0.9);
    this.y = randomBetween(0, h * 0.95); // Spread vertically
    this.len = randomBetween(180, 300);
    this.speed = randomBetween(8, 16);
    this.angle = randomBetween(Math.PI / 4, Math.PI / 3);
    this.life = 0;
    this.alpha = 1;
    this.maxLife = randomBetween(30, 60);
  }
  ShootingStar.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x - this.len * Math.cos(this.angle),
      this.y + this.len * Math.sin(this.angle)
    );
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    this.x += this.speed * Math.cos(this.angle);
    this.y -= this.speed * Math.sin(this.angle);
    this.life++;
    this.alpha -= 0.025;
  };

 
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    
    for (let s of stars) s.draw();
    
    if (Math.random() < SHOOTING_STAR_FREQ) {
      shootingStars.push(new ShootingStar());
    }
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      shootingStars[i].draw();
      if (shootingStars[i].life > shootingStars[i].maxLife || shootingStars[i].alpha <= 0) {
        shootingStars.splice(i, 1);
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

document.addEventListener('DOMContentLoaded', function() {

  const bootContainer = document.getElementById('boot-container');
  if (bootContainer) {
    const bootMessagesDiv = document.getElementById('boot-messages');
    const continueBtn = document.getElementById('continue-btn');
    let currentMessageIndex = 0;
    
    let bootMessages = [
      "Initializing system...",
      "Loading kernel...",
      "Mounting file systems...",
      "Starting security services...",
      "Scanning for threats...",
      "Loading portfolio data...",
      "Initializing secure terminal interface..."
    ];
    let finalMessage = "Boot sequence complete. Welcome to secure terminal.";
    
    if (document.title && document.title.toLowerCase().includes("cosmic")) {
      finalMessage = "Boot sequence complete. Welcome to secure terminal.";
    }
    function showNextMessage() {
      if (currentMessageIndex < bootMessages.length) {
        const line = document.createElement('div');
        line.className = 'boot-line';
        line.innerHTML = `<span class='boot-arrow'>&gt;</span><span class='typing-animation'>${bootMessages[currentMessageIndex]}</span><span class='cursor-blink'>_</span>`;
        bootMessagesDiv.appendChild(line);
        currentMessageIndex++;
        setTimeout(showNextMessage, 600);
      } else {
        const line = document.createElement('div');
        line.className = 'boot-line';
        line.style.marginTop = '12px';
        line.innerHTML = `<span class='boot-arrow'>&gt;</span><span class='typing-animation'>${finalMessage}</span><span class='cursor-blink'>_</span>`;
        bootMessagesDiv.appendChild(line);
        setTimeout(() => {
          continueBtn.style.display = 'block';
          continueBtn.focus();
        }, 1200);
      }
    }
    showNextMessage();
    continueBtn.addEventListener('click', () => {
      bootContainer.style.display = 'none';
      const terminal = document.getElementById('terminal');
      if (terminal) {
        terminal.style.display = 'flex';
        setTimeout(() => {
          const input = document.getElementById('terminal-input');
          if (input) input.focus();
        }, 100);
      }
    });
    continueBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        continueBtn.click();
      }
    });
  }
}); 