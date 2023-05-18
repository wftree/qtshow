const urls = [
  'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  'https://media.w3.org/2010/05/sintel/trailer.mp4',
  'http://vjs.zencdn.net/v/oceans.mp4'
]

const videoList = urls.map((url, index) => ({ id: index + 1, url }))
Page({
  data: {
    videoList
  },

  onPlay(e) {},

  onPause(e) {
    //  console.log('pause', e.detail.activeId)
  },

  onEnded(e) {},

  onError(e) {},

  onWaiting(e) {},

  onTimeUpdate(e) {},

  onProgress(e) {},

  onLoadedMetaData(e) {
    console.log('LoadedMetaData', e)
  }
})
