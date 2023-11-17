const bcrypt = require('bcryptjs');

const storedHash = '$2a$10$efq1.xRtaeF3Cigsns8iXueYxcTQ9Xnlq5QGeevz3RyNO57FJI03K';
const providedPassword = 'gz1234542';

bcrypt.compare(providedPassword, storedHash, (err, result) => {
    if (err) {
        // Manejar el error
        console.error(err);
        return;
    }

    if (result) {
        console.log('Las contraseñas coinciden.');
    } else {
        console.log('Las contraseñas no coinciden.');
    }
});
