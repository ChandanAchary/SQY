/* Atlas clone — app logic */
(function(){
  const D = window.ATLAS_DATA;
  const $ = (s,el=document)=>el.querySelector(s);
  const el = (tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
  const badgeClass = s => ({"Ready to Move":"ready","Under Construction":"uc","New Launch":"new","Upcoming":"up","Partially Ready To Move":"partial"}[s]||"up");
  const MARK = `<svg class="mark" viewBox="0 0 32 32" fill="none"><defs><linearGradient id="ag" x1="0" y1="32" x2="32" y2="0"><stop stop-color="#4f83ff"/><stop offset=".45" stop-color="#4db6e6"/><stop offset=".75" stop-color="#2ecc71"/><stop offset="1" stop-color="#f5b942"/></linearGradient></defs><path d="M16 3 L28 29 H22 L16 13 L10 29 H4 Z" fill="url(#ag)"/><rect x="12" y="21" width="8" height="3.4" rx="1.5" fill="url(#ag)"/></svg>`;
  const LOGO = `<div class="logo">${MARK}<span class="word">Atlas</span></div>`;

  let map=null, markers=[], curScreen='project';

  /* ---------------- LOGIN ---------------- */
  function initLogin(){
    $('#login .brand-slot').innerHTML = LOGO;
    $('#loginBtn').addEventListener('click',e=>{e.preventDefault();enterApp();});
    $('#login form').addEventListener('submit',e=>{e.preventDefault();enterApp();});
  }
  function enterApp(){ $('#login').hidden=true; $('#app').hidden=false; renderDashboard(); }

  /* ---------------- TOPBAR ---------------- */
  function topbar(mode, project){
    const tb = $('#topbar');
    if(mode==='dashboard'){
      tb.innerHTML = `${LOGO}<div class="divider"></div><div class="crumb">Select a Project</div>
        <div class="spacer"></div><div class="user">${D.user.name}</div>
        <button class="icon-btn" title="Help">?</button>
        <button class="logout" id="logoutBtn">⎋ Logout</button>`;
    } else {
      tb.innerHTML = `${LOGO}<div class="divider"></div>
        <div class="proj-crumb"><img src="${projImg(project)}" alt=""/>
          <div><div class="pt">${project.name} <small>(${project.developer})</small></div>
          <div class="ps">${project.location} · ${mmName(project.micromarket)}</div></div></div>
        <div class="spacer"></div><div class="user">${D.user.name}</div>
        <button class="icon-btn" title="Help">?</button>
        <button class="logout" id="backBtn">← Projects</button>`;
      $('#backBtn').addEventListener('click',renderDashboard);
      return;
    }
    $('#logoutBtn').addEventListener('click',()=>{location.reload();});
  }
  const mmName = k => (D.micromarkets.find(m=>m.key===k)||{}).name||k;
  const projImg = p => `https://picsum.photos/seed/${encodeURIComponent(p.id)}/240/180`;

  /* ---------------- DASHBOARD ---------------- */
  function renderDashboard(){
    curScreen='project';
    topbar('dashboard');
    const body = $('#body'); body.innerHTML='';
    // sidebar
    const sb = el('div','sidebar');
    sb.innerHTML = `<div class="head"><h1>FOCUS PROJECTS</h1>
      <div class="sub">${D.city.totalProjects} projects · ${D.city.micromarketCount} micromarkets</div></div>
      <div class="city-row"><span class="lbl">City</span><span class="val">${D.city.name}</span></div>
      <div class="search"><input id="search" placeholder="Search by Name"></div>
      <div class="mm-list" id="mmList"></div>`;
    body.appendChild(sb);
    // map
    const mw = el('div','map-wrap');
    mw.innerHTML = `<div id="map"></div><div class="map-fallback" id="mapFallback">Map tiles need an internet connection</div>
      <div class="map-style-toggle"><button class="active">BASIC</button><button>NAME</button><button>IMG</button></div>
      ${masterPlanHTML()}`;
    body.appendChild(mw);

    const list = $('#mmList');
    D.micromarkets.forEach(m=>{
      const projs = D.projects.filter(p=>p.micromarket===m.key);
      const mm = el('div','mm');
      mm.innerHTML = `<button class="mm-head"><span class="name">${m.name.toUpperCase()}</span>
        <span class="right"><span class="count">${m.count}</span><span class="chev">▾</span></span></button>
        <div class="mm-body"></div>`;
      const head=$('.mm-head',mm), bodyEl=$('.mm-body',mm);
      if(projs.length){
        projs.forEach(p=>{
          const c = el('button','pcard');
          c.innerHTML = `<img class="thumb" src="${projImg(p)}" alt=""/>
            <div class="info"><div class="pname">${p.name}</div><div class="ploc">${p.location}</div>
            <span class="badge ${badgeClass(p.status)}">${p.status}</span>
            <div class="price">${p.price}</div></div>`;
          c.addEventListener('click',()=>openProject(p.id));
          bodyEl.appendChild(c);
        });
      } else {
        bodyEl.appendChild(el('div','', `<div style="padding:14px 18px;color:var(--muted);font-size:12px">
          ${m.count} projects · full list available via official data export</div>`));
      }
      head.addEventListener('click',()=>{
        const open=bodyEl.classList.toggle('open'); head.classList.toggle('open',open);
        bodyEl.classList.toggle('mm-body'); bodyEl.classList.add('mm-body');
      });
      if(m.key==='central'){bodyEl.classList.add('open');head.classList.add('open');}
      list.appendChild(mm);
    });
    // search
    $('#search').addEventListener('input',e=>{
      const q=e.target.value.toLowerCase();
      document.querySelectorAll('.pcard').forEach(c=>{
        c.style.display = $('.pname',c).textContent.toLowerCase().includes(q)?'':'none';
      });
    });
    initMap(null);
  }

  function masterPlanHTML(){
    const layers=[["Metro","mp-metro"],["Highways","mp-hw"],["Railway","mp-rail"],["Emp. Hubs","mp-emp"],["Industrial","mp-ind"],["Airports","mp-air"]];
    return `<div class="masterplan"><h4>CITY MASTER PLAN <span style="color:var(--gold)">◉</span></h4>
      ${layers.map(l=>`<label class="layer"><span class="dot ${l[1]}"></span>${l[0]}</label>`).join('')}</div>`;
  }

  /* ---------------- PROJECT VIEW ---------------- */
  const SCREENS=[["project","Project"],["developer","Developer Profile"],["micromarket","Micromarket"],
    ["infrastructure","Infrastructure"],["neighbourhood","Neighbourhood"],["caseStudies","Case Studies"],["outlook","Outlook"]];

  function openProject(id){
    const p = D.projects.find(x=>x.id===id); if(!p)return;
    curScreen='project';
    topbar('project',p);
    const body=$('#body'); body.innerHTML='';
    // map + tabs on the left
    const left=el('div','map-wrap');
    left.innerHTML=`<div id="map"></div><div class="map-fallback">Map tiles need an internet connection</div>
      <div class="map-style-toggle"><button class="active">2D</button><button>SAT</button></div>`;
    // evidence panel
    const ev=el('div','evidence'); ev.id='evidence';
    const wrap=el('div'); wrap.style.cssText='flex:1;display:flex;flex-direction:column;min-height:0';
    const tabs=el('div','screen-tabs');
    SCREENS.forEach(([k,label])=>{
      const t=el('button','tab'+(k===curScreen?' active':''),label);
      t.addEventListener('click',()=>{curScreen=k;document.querySelectorAll('.screen-tabs .tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');renderScreen(p);});
      tabs.appendChild(t);
    });
    wrap.appendChild(tabs);
    const evScroll=el('div'); evScroll.style.cssText='flex:1;display:flex;min-height:0';
    evScroll.appendChild(left);
    body.appendChild(wrap);
    // layout: tabs on top spanning, below = map + evidence
    body.innerHTML='';
    body.style.flexDirection='column';
    body.appendChild(tabs);
    const lower=el('div'); lower.style.cssText='flex:1;display:flex;min-height:0';
    lower.appendChild(left); lower.appendChild(ev);
    body.appendChild(lower);
    renderScreen(p);
    const coords=D.localityCoords[p.location]||[12.9716,77.5946];
    initMap(coords,p);
  }

  function renderScreen(p){
    const ev=$('#evidence'); if(!ev)return; ev.scrollTop=0;
    ev.innerHTML = ({
      project:screenProject, developer:screenDeveloper, micromarket:screenMicromarket,
      infrastructure:screenInfra, neighbourhood:screenNeigh, caseStudies:screenCase, outlook:screenOutlook
    }[curScreen]||(()=>'<div class="ev-pad">—</div>'))(p);
  }

  const money = n => '₹'+n.toLocaleString('en-IN');

  function screenProject(p){
    const s=p.screens&&p.screens.project;
    if(!s) return placeholder(p,"Project");
    return `<div class="hero" style="background-image:linear-gradient(180deg,rgba(10,13,20,.1),rgba(10,13,20,.85)),url('${projImg(p)}');background-size:cover;background-position:center">
        <div class="cap"><h2>${p.name}</h2><p>${p.location}, ${D.city.name}</p></div></div>
      <div class="price-line">${s.priceLabel}</div>
      <div class="stat-grid">
        <div class="stat full"><div class="k"><span class="chip chip-blue">🖥️</span>Status</div><div class="v" style="color:#25a25a">${s.status}</div></div>
        <div class="stat"><div class="k"><span class="chip chip-green">🛏️</span>Unit Config</div><div class="v">${s.unitConfig}</div></div>
        <div class="stat"><div class="k"><span class="chip chip-purple">📐</span>Size</div><div class="v">${s.size}</div></div>
        <div class="stat"><div class="k"><span class="chip chip-amber">🏢</span>Number of Units</div><div class="v">${s.units}</div></div>
        <div class="stat"><div class="k"><span class="chip chip-teal">🌳</span>Total area</div><div class="v">${s.area}</div></div>
      </div>
      <div class="resources">${s.resources.map(r=>`<div class="res-row">${r}<span class="chev">▾</span></div>`).join('')}</div>`;
  }

  function screenDeveloper(p){
    const dev=D.developers[p.developerId];
    if(!dev) return `<div class="ev-pad"><div class="ev-label">DEVELOPER PROFILE</div><div class="ev-title">${p.developer}</div>
      <div class="empty-note">Detailed developer profile available via official data export.</div></div>`;
    const st=dev.projectsByStatus;
    const listBlock=(title,arr)=>arr&&arr.length?`<div class="h-sec">${title}</div><div class="list-card">
      ${arr.map(x=>`<div class="row"><div><div class="nm">${x.name}</div><div class="mut">${x.location}</div></div><div class="rt" style="color:var(--teal)">${x.price}</div></div>`).join('')}</div>`:'';
    return `<div class="ev-pad">
      <div class="ev-label">DEVELOPER PROFILE</div>
      <div class="ev-title">${dev.name}</div>
      <div class="ev-sub">${dev.experience} yrs experience <span class="pill gold" style="margin-left:8px">${dev.tier}</span></div>
      <div class="narr accent"><div class="ev-label">＋ NARRATIVE SUMMARY</div>${dev.narrative}</div>
      <div class="kv2"><div class="kv"><div class="k">Total Projects</div><div class="v">${dev.totalProjects}</div><div class="mut" style="color:var(--muted);font-size:11px">ACROSS INDIA</div></div>
        <div class="kv"><div class="k">In Bangalore</div><div class="v sm">🟣 New ${dev.bangalore.newLaunch} · 🔵 UC ${dev.bangalore.underConstruction} · 🟢 RTM ${dev.bangalore.readyToMove}</div></div></div>
      <div class="h-sec">${dev.name} Returns in Bangalore</div>
      <div class="metric-row">
        <div class="metric"><div class="v">+${dev.returns.y1}%</div><div class="k">1 Year CAGR</div></div>
        <div class="metric"><div class="v">+${dev.returns.y3}%</div><div class="k">3 Year CAGR</div></div>
        <div class="metric"><div class="v">+${dev.returns.y5}%</div><div class="k">5 Year CAGR</div></div>
      </div>
      ${listBlock('New Launch Projects',st['New Launch'])}
      ${listBlock('Under Construction Projects',st['Under Construction'])}
      ${listBlock('Ready to Move Projects',st['Ready to Move'])}
      <div class="h-sec">About Developer</div>
      <div class="narr">${dev.about}</div>
    </div>`;
  }

  function screenMicromarket(p){
    const m=D.micromarketDetail[p.micromarket];
    if(!m){const mm=D.micromarkets.find(x=>x.key===p.micromarket);
      return `<div class="ev-pad"><div class="ev-label">MICROMARKET</div><div class="ev-title">${mm.name}</div>
      <div class="metric-row"><div class="metric"><div class="v">${money(mm.salePrice)}</div><div class="k">Avg Sale /sq ft</div></div>
      <div class="metric"><div class="v">₹${mm.rent}</div><div class="k">Avg Rent /sq ft/mo</div></div></div>
      ${compareTable(p.micromarket)}<div class="empty-note">Full micromarket detail available via official data export.</div></div>`;}
    const maxP=Math.max(...m.priceHistory.map(h=>h.price));
    return `<div class="ev-pad">
      <div class="ev-label">MICROMARKET</div><div class="ev-title">${m.name}</div>
      <div style="margin:6px 0 12px"><span class="pill green">${m.marketState}</span><span class="pill blue">${m.trend}</span></div>
      <div class="narr">${m.narrative}</div>
      <div class="kv2"><div class="kv"><div class="k">Average Sale Price</div><div class="v">${money(m.avgSalePrice)}<span style="font-size:12px;color:var(--muted)">/sq ft</span></div></div>
        <div class="kv"><div class="k">Average Rent</div><div class="v">₹${m.avgRent}<span style="font-size:12px;color:var(--muted)">/sq ft/mo</span></div></div></div>
      <div class="kv"><div class="k">Total Projects</div><div class="v">${m.totalProjects.toLocaleString('en-IN')}</div></div>
      <div class="h-sec">Average Asking Price · INR/sq.ft</div>
      <div class="chart">${m.priceHistory.map(h=>`<div class="bar"><div class="pv">₹${(h.price/1000).toFixed(1)}K</div><div class="fill" style="height:${Math.round(h.price/maxP*100)}%"></div><div class="yr">${h.year}</div></div>`).join('')}</div>
      <div class="h-sec">Top Priced Localities</div>
      <div class="list-card">${m.topLocalities.map(l=>`<div class="row"><div><span class="rank">${l.rank}</span><span class="nm">${l.name}</span></div><div class="rt" style="color:var(--teal)">${money(l.price)}/sq ft</div></div>`).join('')}</div>
      <div class="h-sec">Top Developers in ${m.name}</div>
      <div class="list-card">${m.topDevelopers.map(d=>`<div class="row"><div class="nm">${d.name}</div><div class="mut">${d.projects} Projects</div></div>`).join('')}</div>
      <div class="h-sec">How This Area Compares</div>${compareTable(p.micromarket)}
    </div>`;
  }
  function compareTable(activeKey){
    const rows=[...D.micromarkets].sort((a,b)=>a.saleRank-b.saleRank);
    return `<div class="list-card">${rows.map(m=>`<div class="row" style="${m.key===activeKey?'background:rgba(79,131,255,.08)':''}">
      <div class="nm">${m.name}</div><div style="text-align:right"><div class="rt" style="color:#cdd4e0">₹${(m.salePrice/1000).toFixed(1)}K <span class="rank" style="margin:0 0 0 4px">#${m.saleRank}</span></div>
      <div class="mut">Rent ₹${m.rent} #${m.rentRank}</div></div></div>`).join('')}</div>`;
  }

  function screenInfra(p){
    const s=p.screens&&p.screens.infrastructure;
    if(!s) return placeholder(p,"Infrastructure & Growth");
    return `<div class="ev-pad"><div class="ev-label">INFRASTRUCTURE & GROWTH</div><div class="ev-title">${p.name}</div>
      <div style="margin:8px 0 14px"><span class="pill green">${s.growthOutlook}</span><span class="pill blue">${s.support}</span></div>
      <div class="metric-row"><div class="metric"><div class="v">${s.live}</div><div class="k">Live Projects</div></div>
        <div class="metric"><div class="v">${s.upcoming}</div><div class="k">Upcoming</div></div>
        <div class="metric"><div class="v">${s.mediumImpact}</div><div class="k">Medium-Impact</div></div></div>
      <div class="kv"><div class="k">Main Strength</div><div class="v sm">${s.mainStrength}</div></div>
      <div class="h-sec">Key Infrastructure Projects</div>
      <div class="list-card">${s.keyProjects.map(k=>`<div class="row"><div><div class="nm">${k.name}</div><div class="mut">${k.desc}</div></div>
        <div style="text-align:right;white-space:nowrap"><span class="pill green" style="font-size:9px">${k.status}</span><div class="mut">${k.impact}</div></div></div>`).join('')}
        <div class="row"><div class="mut">View More (${s.moreCount} more)</div></div></div>
      <div class="h-sec">Connectivity at a Glance</div>
      <div class="metric-row"><div class="metric"><div class="v sm" style="color:var(--teal)">${s.connectivity.metro}</div><div class="k">Metro</div></div>
        <div class="metric"><div class="v sm" style="color:var(--teal)">${s.connectivity.road}</div><div class="k">Road</div></div>
        <div class="metric"><div class="v sm" style="color:var(--teal)">${s.connectivity.airport}</div><div class="k">Airport</div></div></div>
      <div class="h-sec">What to Watch</div>
      <div class="narr">${s.watch.map(w=>'• '+w).join('<br>')}</div></div>`;
  }

  function screenNeigh(p){
    const s=p.screens&&p.screens.neighbourhood;
    if(!s) return placeholder(p,"Neighbourhood Overview");
    return `<div class="ev-pad"><div class="ev-label">NEIGHBOURHOOD OVERVIEW</div><div class="ev-title">${p.name}</div>
      <div class="h-sec">Area Quality</div>
      <div class="kv2"><div class="kv"><div class="k">Neighbourhood Quality</div><div class="v">${s.quality}</div></div>
        <div class="kv"><div class="k">Travel Convenience</div><div class="v" style="color:var(--green)">${s.travelConvenience}</div></div></div>
      <div class="narr" style="font-size:12px">${s.qualityDesc}</div>
      <div class="h-sec">Nearby Essentials</div>
      <div class="metric-row"><div class="metric"><div class="v">${s.essentials.education}</div><div class="k">Education</div></div>
        <div class="metric"><div class="v">${s.essentials.healthcare}</div><div class="k">Healthcare</div></div>
        <div class="metric"><div class="v">${s.essentials.emergency}</div><div class="k">Emergency</div></div></div>
      <div class="h-sec">Connectivity</div>
      <div class="list-card">${s.connectivity.map(c=>`<div class="row"><div><div class="nm">${c.icon} ${c.label}</div><div class="mut">${c.place}</div></div><div class="rt" style="color:#cdd4e0">${c.dist}</div></div>`).join('')}</div></div>`;
  }

  function screenCase(p){
    const s=p.screens&&p.screens.caseStudies;
    if(!s) return placeholder(p,"Case Studies");
    return `<div class="ev-pad"><div class="ev-label">CASE STUDIES</div><div class="ev-title">${mmName(p.micromarket)}</div>
      <div class="ev-sub">By ${p.developer}</div>
      <div class="h-sec">Top Gaining Projects</div>
      <div class="list-card">${s.topGaining.map(g=>`<div class="row"><div><span class="rank">${g.rank}</span><span class="nm">${g.name}</span><div class="mut" style="margin-left:30px">${g.area} • ${g.dist}</div></div>
        <div style="text-align:right"><div class="rt">1Y ${g.y1}</div><div class="mut">3Y ${g.y3} · 5Y ${g.y5}</div></div></div>`).join('')}</div></div>`;
  }

  function screenOutlook(p){
    const s=p.screens&&p.screens.outlook;
    if(!s) return placeholder(p,"Forward Outlook");
    const scen=(arr,yrs)=>`<div class="scen-block"><div class="h-sec">In ${yrs} Years</div><div class="today">Today: ${s.current}</div>
      ${arr.map(x=>`<div class="scen ${x.label==='Conservative'?'cons':x.label==='Realistic'?'real':'opt'}">
        <div><div class="lbl">${x.label}</div><div class="note">${x.note}</div></div>
        <div style="text-align:right"><div class="price">${x.price}</div><div class="ret">${x.ret}</div></div></div>`).join('')}</div>`;
    return `<div class="ev-pad"><div class="ev-label">FORWARD OUTLOOK</div><div class="ev-title">${p.name}</div>
      <div class="ev-sub">${p.location} · ${s.market} <span class="pill gold" style="margin-left:6px">Confidence: ${s.confidence}</span></div>
      <div class="kv"><div class="k">Current Estimated Price</div><div class="v" style="color:var(--green)">${s.current}</div></div>
      ${scen(s.y3,3)}${scen(s.y5,5)}
      <div class="h-sec">What Supports This Outlook</div>
      ${s.supports.map(x=>`<div class="support sup"><div class="t">${x.title}</div><div class="d">${x.desc}</div></div>`).join('')}
      <div class="h-sec">What May Limit Growth</div>
      ${s.limits.map(x=>`<div class="support lim"><div class="t">${x.title}</div><div class="d">${x.desc}</div></div>`).join('')}
      <div class="disc">These are estimated scenarios, not a guaranteed return or exact future selling price. Ranges assume the broader economy and regulations remain broadly stable.</div></div>`;
  }

  function placeholder(p,title){
    return `<div class="ev-pad"><div class="ev-label">${title.toUpperCase()}</div><div class="ev-title">${p.name}</div>
      <div class="notice"><b>Sample view.</b> Full ${title} data for this project is available through the official Atlas data export.
      Provident Equinox is fully populated as a live example — open it from Central Bangalore to see real captured data across all seven screens.</div></div>`;
  }

  /* ---------------- MAP ---------------- */
  function initMap(center,project){
    const mapEl=$('#map'); if(!mapEl) return;
    if(typeof L==='undefined'){return;}
    if(map){map.remove();map=null;markers=[];}
    const fb=$('#mapFallback'); if(fb)fb.style.display='none';
    map=L.map('map',{zoomControl:true,attributionControl:false}).setView(center||[12.9716,77.5946], center?13:11);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',{maxZoom:16,attribution:'Esri'}).addTo(map);
    const icon = color => L.divIcon({className:'',html:`<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 0 8px ${color}"></div>`,iconSize:[14,14]});
    const colors={"Ready to Move":"#2ecc71","Under Construction":"#4f83ff","New Launch":"#8b5cf6","Upcoming":"#9aa3b2","Partially Ready To Move":"#f59e0b"};
    D.projects.forEach(p=>{
      const c=D.localityCoords[p.location]; if(!c)return;
      const m=L.marker(c,{icon:icon(colors[p.status]||"#4db6e6")}).addTo(map);
      m.bindTooltip(`${p.name}<br>${p.price}`,{direction:'top'});
      m.on('click',()=>openProject(p.id));
      markers.push(m);
    });
    if(project){
      const c=D.localityCoords[project.location];
      if(c){L.circleMarker(c,{radius:12,color:'#fff',weight:2,fillColor:'#2ecc71',fillOpacity:.9}).addTo(map);}
    }
    setTimeout(()=>map.invalidateSize(),150);
  }

  initLogin();
})();
