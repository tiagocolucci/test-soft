"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log('Enviando...');
        console.log(`Email enviado para ${to.name} com sucesso! Mensagem: ${message.body}`);
    }
}
exports.default = EmailService;
