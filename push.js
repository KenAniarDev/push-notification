let push = require('web-push');

let vapidkeys = {
    publicKey: 'BEPhqyrlYjipHTVF96wkSmTDUO8dT5ZWUrvkab8pBGRjNfGtYVAv4tIrGm91ugwXxJQaZVTPt6bs0Oupg6_8G7Q',
    privateKey: '4BX_efSvV_KLGU6Q8KeHNerTKE64BJuP-ltIKj8IbGQ'
  }

push.setVapidDetails('mailto:ken.aniar.dev@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fbXrzPDUkD4:APA91bGFNHbjjo0vMj2U42lN-GUm1XRiyriLOw_5zQFU-RbzANNsqQBPEGdhDqiljrqMT1dDrp5TEXT5SumWvk6y7XBfSIoYia27qn6OfXVGNrNqvFhmlVTcc9YdbzsmRTOKErqw5WIO","expirationTime":null,"keys":{"p256dh":"BI1YNicYMJANZ0TKEavEbMCEnpoiHiDpP_NYNM_6b-viEE-SaAq5Fc4WsBwVfltypUxSReuglgzde_9bdks1hMA","auth":"sKtW3aC5KlCVvCniT6KqhQ"}}
