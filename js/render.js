/* Membangun tombol download & changelog otomatis dari VERSIONS (js/versions.js).
   Item pertama = "Terbaru", sisanya = "Versi Lama". */
(function(){
  var ICON = function(size){
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>';
  };

  function esc(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function button(v, isLatest){
    var a = document.createElement('a');
    a.href = v.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'btn-download' + (isLatest ? ' btn-latest' : '');
    var badge = v.mcpe ? '<span class="mcpe-badge">MCPE ' + esc(v.mcpe) + '</span>' : '';
    a.innerHTML = '<span>' + esc(v.name) + '</span>' +
      '<span class="right-group">' + badge + ICON(isLatest ? 17 : 15) + '</span>';
    return a;
  }

  var latest = VERSIONS[0];
  if (!latest) return;

  // Versi terbaru
  document.getElementById('latestSlot').appendChild(button(latest, true));

  // Versi lama (otomatis satu kotak per item)
  var oldList = document.getElementById('oldList');
  VERSIONS.slice(1).forEach(function(v){ oldList.appendChild(button(v, false)); });
  if (VERSIONS.length < 2) document.getElementById('oldBox').style.display = 'none';

  // Changelog (hanya untuk versi terbaru)
  var cl = latest.changelog;
  var clBox = document.getElementById('changelogBox');
  if (!cl) { clBox.style.display = 'none'; }
  else {
    var langs = Object.keys(cl);
    var len = Math.max.apply(null, langs.map(function(l){ return cl[l].length; }));
    var items = '';
    for (var i = 0; i < len; i++) {
      var attrs = langs.map(function(l){ return ' data-cl-' + l + '="' + esc(cl[l][i] || '') + '"'; }).join('');
      items += '<li' + attrs + '></li>';
    }
    document.getElementById('changelogList').innerHTML =
      '<div class="cl-entry">' +
        '<div class="cl-head"><span class="cl-ver">' + esc(latest.name) + '</span>' +
        '<span class="mcpe-badge" data-i18n="latest">Terbaru</span></div>' +
        '<div class="cl-cat">ℹ️ <span data-i18n="cl_new">Baru</span></div>' +
        '<ul>' + items + '</ul></div>';
  }
})();
