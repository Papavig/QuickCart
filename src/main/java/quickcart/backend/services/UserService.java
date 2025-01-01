package quickcart.backend.services;

import quickcart.backend.dao.UserDao;
import quickcart.backend.entities.User;
import quickcart.backend.utils.AuthResponse;
import quickcart.backend.utils.Encryption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public User registerUser(User user) {
        try {

            String encryptedPassword = Encryption.encrypt(user.getPassword());
            user.setPassword(encryptedPassword);

            return userDao.save(user);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public AuthResponse authenticateUser(String email, String password) {
        try {
            User user = userDao.findByEmail(email);
            if (user != null) {
                String decryptedPassword = Encryption.decrypt(user.getPassword());

                if (password.equals(decryptedPassword)) {
                    return new AuthResponse(user.getId(), user.getUsername());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
