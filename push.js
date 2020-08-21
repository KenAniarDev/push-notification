let push = require('web-push');

let vapidkeys = {
    publicKey: 'BEPhqyrlYjipHTVF96wkSmTDUO8dT5ZWUrvkab8pBGRjNfGtYVAv4tIrGm91ugwXxJQaZVTPt6bs0Oupg6_8G7Q',
    privateKey: '4BX_efSvV_KLGU6Q8KeHNerTKE64BJuP-ltIKj8IbGQ'
  }

push.setVapidDetails('mailto:ken.aniar.dev@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

// let sub1 = {"endpoint":"https://sg2p.notify.windows.com/w/?token=BQYAAACfLUk0nc9AaxWXd4sKCGa2zymtFJLZdLdDEVHE7O24DZNFNK2IITqv98S%2fafAIMhdnHQ4LR%2fh3U3U7vrLiDXgtX6v07kq7Jgy0l6nF%2byCZfSLhIabQbv00Sv5I3osOC2quZX%2f%2fmlbUfvWFORSMv9ffIyDNKmWsM4J%2bTkkFUIpX4wD6DyUGnx99dpYHBcOl48JbfMFPlyKoWPHixPR%2fdypd6SiCZuL0%2fGd3Al6OsvHPwngM2RtiBShfFfgbhWean2EzpoqLNMz2y59pTOoR3NS5eQOODPZWaSOZGq%2fxkwsvX3rLEjQHoJ%2bk%2bvB603KBz4%2bw0p5%2fHyKFflGZodJttOBd","expirationTime":null,"keys":{"p256dh":"BEctnnPbVgjmYfEGi6gjUaFRKBr2sS6SHwOPhwf1OrjLZ7gcHWKr856ERWqZoMFyN4ErPXUbP4YqiCHUiCaWZBs","auth":"CXmOA6Xo7uNlYu9gHPggwQ"}}
// let sub2 = {"endpoint":"https://fcm.googleapis.com/fcm/send/dfhOaWshT6I:APA91bFK6oXD3nuWN_vMJ7CfL1_kIVuCzYxiQlJgTzefVWFccbWvKE6oPzoXNUfD73Ba8tD6OoXn-jFW6heEAE3H3Uz_Pd0OeZ2ptltHVPdIZQRZ8p-vX5CQnV60eiKqO-2fDUYTzahK","expirationTime":null,"keys":{"p256dh":"BEZGgDdsh-PQcdXQw3jUghBBgqAWAoghB6fqLCxOAF2E0ySOsQuZ7U_ggPws1TPZPnRBipqycZtM5AOqvMBAtYE","auth":"TH33Njm9Qy_ZH-w5z8-n8Q"}}
let sub3 = JSON.stringify(push);
push.sendNotification(sub1, 'text message');
push.sendNotification(sub2, 'text message');
push.sendNotification(sub3, 'text message');

