/* INICIO DE WHATSAPP WEB */

const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conectado by shan');
});

client.initialize();
 
/* FIN DE WHATSAPP WEB */

////////////////

/* ENTRADAS DE CONST */
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');
/* FIN DE ENTRADAS DE CONST */

////////////////////

/* CREACION DE STICKERS */

client.on('message', async message => {
  if (message.body === '*s') {
    if (message.hasMedia && (message.type === 'video' || message.type === 'gif')) {
      const media = await message.downloadMedia();
      const metadata = { type: message.mimetype };
      if (message.type === 'video' && message.videoResolution) {
        metadata.width = message.videoResolution.width;
        metadata.height = message.videoResolution.height;
      } else if (message.type === 'gif') {
        metadata.width = message.mediaData ? message.mediaData.width : undefined;
        metadata.height = message.mediaData ? message.mediaData.height : undefined;
      } else {
        metadata.width = message.mediaData ? message.mediaData.width : undefined;
        metadata.height = message.mediaData ? message.mediaData.height : undefined;
      }
      metadata.author = 'shan';
      metadata.pack = 'sheeeesh';
      await message.reply(media, undefined, { sendMediaAsSticker: true, stickerMetadata: metadata });
    } else if (message.hasMedia && message.type === 'image') {
      const media = await message.downloadMedia();
      const metadata = { type: message.mimetype };
      metadata.width = message.mediaData ? message.mediaData.width : undefined;
      metadata.height = message.mediaData ? message.mediaData.height : undefined;
      metadata.author = 'shan';
      metadata.pack = 'sheeesh';
      await message.reply(media, undefined, { sendMediaAsSticker: true, stickerMetadata: metadata });
    } else {
      await message.reply('_Por favor, envíe un video, gif o imagen con el comando *s_');
    }
  }
});


/* FIN DE CREACION DE STICKERS */

///////////////////////////////

/* ENTRADAS DE TEXTO DEL BOT */

  client.on('message', message => {
    if (message.body.toLowerCase().includes('*help') || message.body.toLowerCase().includes('*menu')) {
      
      fs.readFile('./menu/help.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          message.reply('Ha ocurrido un error al leer el archivo');
        } else {
          message.reply(data, message.chatId);
        }
      });
    }
  });


/* RESPUESTAS CON AUDIO */

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Hola') || message.body.toLowerCase().includes('hola')) {
    const file = './audios/dylan1.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});


client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Chiste') || message.body.toLowerCase().includes('chiste')) {
    const file = './audios/dylan2.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Boliviano') || message.body.toLowerCase().includes('boliviano')) {
    const file = './audios/gaspi1.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Venezolano') || message.body.toLowerCase().includes('venezolano')) {
    const file = './audios/gaspi2.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Paraguayo') || message.body.toLowerCase().includes('paraguayo')) {
    const file = './audios/gaspi3.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Corte') || message.body.toLowerCase().includes('corte')) {
    const file = './audios/gaspi4.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Buenos dias') || message.body.toLowerCase().includes('buenos dias')) {
    const file = './audios/gaspi5.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Enano') || message.body.toLowerCase().includes('enano')) {
    const file = './audios/gaspi6.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Buenas noches') || message.body.toLowerCase().includes('buenas noches')) {
    const file = './audios/gaspi7.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Peruano') || message.body.toLowerCase().includes('peruano')) {
    const file = './audios/gaspi8.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Pasen sexo') || message.body.toLowerCase().includes('pasen sexo')) {
    const file = './audios/fernan1.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});
   
client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Polnito') || message.body.toLowerCase().includes('polnito')) {
    const file = './audios/maau2.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

client.on('message', async (message) => {
  if (message.body.toLowerCase().includes('Las de 12 fua') || message.body.toLowerCase().includes('las de 12 fua')) {
    const file = './audios/neymar1.mp3';
    const media = MessageMedia.fromFilePath(file);
    await message.reply(media, undefined, { sendAudioAsVoice: true });
  }
});

/* FIN DE RESPUESTAS CON AUDIO */