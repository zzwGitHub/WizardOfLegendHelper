var Play = {
  palyByNum: function (num) {

    console.log(num);

    var voice = wx.createInnerAudioContext();

    voice.src = 'pages/piano/source/' + (num+43) + '.mp3';
    voice.play();
    voice.onEnded((res) => {
      voice.destroy();
    })
  }
}

module.exports = {
  ppp: Play.palyByNum
}