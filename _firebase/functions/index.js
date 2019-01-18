const functions = require('firebase-functions');

exports.newSubscriber= functions.firestore
    .document('events/{date}/subscribers/{person}')
    .onCreate((snap, context) => {
        const data = snap.data();

        var Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyUg0fx1E89fOmfA'
        });
        var base = Airtable.base('appSR47Cs9WD5A7u5');

        base('Iscritti').create({
            "Nome e Cognome": data.name,
            "Luogo": data.eventLocation,
            "Data": data.eventDate,
            "Email": data.email,
            "Telefono": data.phone,
            "Età": data.age,
            "Provenienza": data.from,
            "Iscrizione": data.submissionDate
        }, function(err, record) {
            if (err) { console.error(err); return; }
            console.log(record.getId());
        });

        return null
    });
