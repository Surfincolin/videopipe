/* /models/streams.js
*/
App.Stream = DS.Model.extend({
    name: DS.attr('string'),

    rtmp: DS.attr('string'),

    iframe: DS.attr('string'),

    embed: DS.attr('string'),

    streamName: DS.attr('string'),

    description: DS.attr('string'),

    picture: DS.attr('string')

    //isLive: DS.attr('boolean')
});

// delete below here if you do not want fixtures
/*App.Stream.FIXTURES = [
  
  {
    id: 0,
    
    name: "Colin's Stream",
    
    rtmp: 'rtmp://live.soundcdn.com/live',
    
    streamName: 'colinlive',
    
    description: 'This is my default stream description. This would be my main event that I broadcast to.',
    
    isLive: 'true'
    
  },
  
  {
    id: 1,
    
    name: 'BackUp',
    
    rtmp: 'rtmp://live2.soundcdn.com/live',
    
    streamName: 'backupstream',
    
    description: 'This is my second stream, and also my back up stream incase something happens to the first stream.',
    
    isLive: 'false'
    
  }
  
];*/
