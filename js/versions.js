/* =====================================================================
   DAFTAR VERSI — satu-satunya file yang perlu diedit saat update.

   CARA UPDATE:
   1. Tambahkan blok baru di PALING ATAS daftar (setelah tanda '[').
   2. Versi yang tadinya paling atas otomatis pindah ke "Versi Lama"
      dan dibuatkan kotak sendiri. Tidak perlu edit file lain.

   Kolom:
   - name      : nama versi (wajib)
   - url       : link download (wajib)
   - mcpe      : versi MCPE yang didukung (opsional, kosongkan jika tidak ada)
   - changelog : daftar perubahan per bahasa (opsional, hanya tampil
                 untuk versi paling atas)
   ===================================================================== */
var VERSIONS = [
  {
    name: 'v6.62',
    mcpe: '26.51',
    url:  'https://www.mediafire.com/file/vdjgm72seb30sxy/Apollon_Client_v6.62.apk/file',
    changelog: {
      id: ['Memperbaiki hotkey dan kerja tombol fisik yang menyebabkan hang.'],
      ru: ['Исправлены хоткеи и работа физических кнопок, вызывающие зависание.']
    }
  },
  {
    name: 'v6.6',
    mcpe: '26.51',
    url:  'https://www.mediafire.com/file/m795o53lim4r6j4/Apollon_Client_v6.6.apk/file'
  },
  {
    name: 'v6.54',
    mcpe: '26.45',
    url:  'https://www.mediafire.com/file/y4b6r43vr5g2mih/Apollon_Client_v6.54.apk/file'
  },
  {
    name: 'v6.53',
    mcpe: '26.45',
    url:  'https://www.mediafire.com/file/eq8ta6o4jeu1nu6/Apollon_Client_v6.53.apk/file'
  },
  {
    name: 'v6.51',
    mcpe: '26.45',
    url:  'https://www.mediafire.com/file/71axtcxf8z8amtz/Apollon_Client_v6.51.apk/file'
  },
  {
    name: 'v6.5',
    url:  'https://www.mediafire.com/file/mf16fz8zxzmd9uo/Apollon_Client_v6.5.apk/file'
  },
  {
    name: 'v6.41',
    url:  'https://www.mediafire.com/file/slqdpozztv1te2w/%255BCLONE%255D_Apollon_Client_v6.41.apk/file'
  },
  {
    name: 'v6.4',
    url:  'https://www.mediafire.com/file/1pgig185a68jlu3/Minecraft_Apollon_Client_v6.4_signed.apk/file'
  },
  {
    name: 'v6.1',
    url:  'https://www.mediafire.com/file/p7e58i02bt7bmhg/MCPE_Apollon_Client_1.26.33_v6.1_64Bit.apk/file'
  },
  {
    name: 'v6.0',
    url:  'https://www.mediafire.com/file/1ebstryfqjflvm5/Minecraft_Apollonv6.0_signed.apk/file'
  },
  {
    name: 'v5.8',
    url:  'https://www.mediafire.com/file/lv6ryb4kkmw0vc8/Minecraft_signed.apk/file'
  }
];
