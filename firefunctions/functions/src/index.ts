import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const novoUsuario = functions.database.ref('/usuarios').onCreate((snapshot, context) => {
    console.log("valor snapshot", snapshot.val());
    console.log("contexto", context);
});