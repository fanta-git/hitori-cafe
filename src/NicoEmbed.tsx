function NicoEmbed() {
  return (
    <div style={{ aspectRatio: '16 / 9' }}>
      <iframe
        title='nicovideo'
        allowFullScreen={true}
        allow="autoplay"
        src="https://embed.nicovideo.jp/watch/sm40236688?oldScript=0&referer=&from=0&allowProgrammaticFullScreen=1"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
}

export default NicoEmbed;
