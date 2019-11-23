import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as sgMail from '@sendgrid/mail';
import * as ndMailer from 'nodemailer';


admin.initializeApp(functions.config().firebase);
// const SENDGRID_API_KEY = functions.config().sendgrid.key;

// sgMail.setApiKey(SENDGRID_API_KEY);

interface Convite {
    email: string;
    nome: string;
    convidadoPor: string;
    nomeGrupo: string;
}

export const sendInviteEmail = functions.firestore
    .document('convites/{id}')
    .onCreate(event => {
        
        const id = event.id;
        console.log(id);
        const db = admin.firestore();

        return db.collection('convites').doc(id).get().then(doc => {
            const convite = doc.data() as Convite;
            let transporter = ndMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ewertonws@gmail.com',
                    pass: 'ews231299578234'
                }
            });

            const mailOptions = {
                from: 'Repertore <ewertonws@gmail.com>', 
                to: convite.email,
                subject: 'Repertore - Você foi convidado(a) para um grupo!', 
                html: `<div>Olá, ${convite.nome}!</div>

                <div>&nbsp;</div>
                
                <div>&nbsp; &nbsp; &nbsp; ${convite.convidadoPor} convidou você para participar do grupo ${convite.nomeGrupo}! Clique <a href="https://repertore-qa.azurewebsites.net" target="_blank">AQUI</a> para entrar no Repertore e aceitar o convite!</div><br>
                <div>&nbsp; &nbsp; &nbsp;
                  O Repertore ajuda seu grupo a gerenciar melhor as músicas que vocês tocam, ajudando vocês a terem um repertório atualizado e diversificado! Aguardamos você lá! ;)
                </div>
                <div>&nbsp;</div>` // email content in HTML
            };
            
            return transporter.sendMail(mailOptions);
        })
        .then(() => console.log("Email enviado!"))
        .catch(err => console.log(err)); 
        
    });