package beingvig.quickcartserver.services;

import beingvig.quickcartserver.dao.UserDao;
import beingvig.quickcartserver.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public User registerUser(User user) {
        return userDao.save(user);
    }

    public String authenticateUser(String email, String password) {
        User user = userDao.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user.getUsername();
        }
        return null;
    }

}
