var Play = {
  playByNum: function (num) {

    //console.log('Play' + num);

    var voice = wx.createInnerAudioContext();

    voice.src = 'source/' + num + '.mp3';
    voice.play();
    voice.onEnded((res) => {
      voice.destroy();
    })
  },
  playInterval : function(low, high){
    //console.log('low ' + low);
    Play.playByNum(low);
    setTimeout(function () {
      Play.playByNum(high);
    }, 1000)
  }
}

module.exports = {
  play: Play.playByNum,
  playInterval: Play.playInterval
}