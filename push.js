let push = require('web-push');

let vapidkeys = {
    publicKey: 'BEPhqyrlYjipHTVF96wkSmTDUO8dT5ZWUrvkab8pBGRjNfGtYVAv4tIrGm91ugwXxJQaZVTPt6bs0Oupg6_8G7Q',
    privateKey: '4BX_efSvV_KLGU6Q8KeHNerTKE64BJuP-ltIKj8IbGQ'
  }

push.setVapidDetails('mailto:ken.aniar.dev@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {}
push.sendNotification(sub, 'text message');
