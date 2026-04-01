import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const users = [];

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      const user = users.find(
        item => item.email === email && item.password === password
      );

      if (!user) {
        return done(null, false, { message: 'Invalid credentials' });
      }

      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  const user = users.find(item => item.email === email);

  if (!user) {
    return done(null, false);
  }

  done(null, user);
});

export { passport, users };