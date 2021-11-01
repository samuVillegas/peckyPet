const bcrypt = require('bcrypt');
const saltRounds = 10;
 
module.exports = {
    encrypt: async (password_to_encrypt) => {
        const encrypted_password = await bcrypt.hash(password_to_encrypt, saltRounds);
        return encrypted_password;
    },
    compare: async (encrypted_password,candidate_password) => {
        const value_compare = await bcrypt.compare(candidate_password, encrypted_password);
        return value_compare;
    }
}