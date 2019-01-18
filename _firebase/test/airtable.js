var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyUg0fx1E89fOmfA'
});
var base = Airtable.base('appSR47Cs9WD5A7u5');

base('test').create({
    "Nome e Cognome": "Ola ola",
    "Luogo": "Roma",
    "Data": "01-01-2010",
    "Email": "ruvido@gmail.com",
    "Telefono": "123",
    "Età": "41",
    "Provenienza": "Sud",
    "Iscrizione": "2019-01-18"
}, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.getId());
});
