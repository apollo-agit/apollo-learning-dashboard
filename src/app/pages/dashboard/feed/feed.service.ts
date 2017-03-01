import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Kostya',
      surname: 'Danovsky',
      header: 'Posted new message',
      text: 'Guys, check this out: \nI have stolen all the answers to the next ACCA exam!',
      time: 'Today 11:55 pm',
      ago: '25 minutes ago',
      expanded: false,
    }, {
      type: 'video-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Added new video',
      text: '"Vader and Me"',
      preview: 'app/feed/vader-and-me-preview.png',
      link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Added new image',
      text: '"My little kitten"',
      preview: 'app/feed/my-little-kitten.png',
      link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
      time: 'Today 2:20 pm',
      ago: '10 hrs ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Nasta',
      surname: 'Linnie',
      header: 'Posted new message',
      text: 'Haha lol',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
