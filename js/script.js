(function(){
  var audio = document.getElementById('bgm');
  var toggle = document.getElementById('musicToggle');
  var unmuted = false;
  var playing = false;

  var lang = 'id';

  function setPlayingUI(isPlaying){
    playing = isPlaying;
    toggle.classList.toggle('playing', isPlaying);
    toggle.setAttribute('aria-label', I18N[lang][isPlaying ? 'music_pause' : 'music_play']);
  }

  function applyLang(l){
    lang = I18N[l] ? l : 'id';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var txt = I18N[lang][el.getAttribute('data-i18n')];
      if (txt) el.textContent = txt.replace('{mcpe}', VERSIONS[0].mcpe || '');
    });
    document.querySelectorAll('[data-cl-' + lang + ']').forEach(function(el){
      el.textContent = el.getAttribute('data-cl-' + lang);
    });
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    setPlayingUI(playing);
    try { localStorage.setItem('apollon-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.addEventListener('click', function(){ applyLang(b.getAttribute('data-lang')); });
  });

  // Bahasa awal: pilihan tersimpan -> bahasa browser (ru = Rusia) -> Indonesia
  var saved = null;
  try { saved = localStorage.getItem('apollon-lang'); } catch (e) {}
  var browserLang = (navigator.language || '').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'id';
  applyLang(saved || browserLang);

  // Mulai diam-diam (muted) begitu halaman dibuka — browser selalu
  // mengizinkan autoplay ketika audio dalam kondisi muted.
  function tryStart(){
    var p = audio.play();
    if (p && typeof p.then === 'function') { p.catch(function(){}); }
  }
  tryStart();
  document.addEventListener('DOMContentLoaded', tryStart);

  // Begitu ada interaksi pertama (ketuk/klik/scroll/tombol), lepas mute
  // supaya suara benar-benar terdengar otomatis tanpa perlu menekan tombol play.
  function unmuteOnFirstInteraction(){
    if (unmuted) return;
    unmuted = true;
    audio.muted = false;
    if (audio.paused) {
      var p = audio.play();
      if (p && typeof p.then === 'function') { p.catch(function(){}); }
    }
    setPlayingUI(true);
  }
  ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(function(evt){
    document.addEventListener(evt, unmuteOnFirstInteraction, { once: true, passive: true });
  });

  toggle.addEventListener('click', function(){
    unmuted = true;
    if (audio.paused || audio.muted) {
      audio.muted = false;
      var p = audio.play();
      if (p && typeof p.then === 'function') {
        p.then(function(){ setPlayingUI(true); }).catch(function(){ setPlayingUI(false); });
      } else {
        setPlayingUI(true);
      }
    } else {
      audio.pause();
      setPlayingUI(false);
    }
  });

  document.querySelectorAll('.btn-download, .btn-exit, summary').forEach(function(el){
    el.addEventListener('click', function(){
      el.classList.remove('tap-anim');
      void el.offsetWidth;
      el.classList.add('tap-anim');
    });
  });
})();
