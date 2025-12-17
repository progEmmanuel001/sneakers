  // Mobile nav toggle and accessibility
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  function openNav(){
    mobileNav.classList.add('open');
    navOverlay.classList.add('show');
    mobileNav.setAttribute('aria-hidden','false');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded','true');
  }
  function closeNav(){
    mobileNav.classList.remove('open');
    navOverlay.classList.remove('show');
    mobileNav.setAttribute('aria-hidden','true');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }

  hamburger.addEventListener('click',()=>{
    const isOpen = mobileNav.classList.contains('open');
    if(isOpen) closeNav(); else openNav();
  });

  // close using close-icon
  const mobileClose = document.getElementById('mobileClose');
  mobileClose.addEventListener('click', closeNav);

  // close when clicking overlay or a link
  navOverlay.addEventListener('click', closeNav);
  document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', closeNav));

  // close on Escape
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeNav(); });