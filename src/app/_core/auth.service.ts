import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user';
import {ToastService} from '../services/toast.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private toastService: ToastService,
              private router: Router) {
  }

  async loginWithEmailAndPassword(user: User) {
    await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.toastService.createToastMessage('Login erfolgreich');
      this.router.navigateByUrl('/success');
    }).catch((e) => {
      this.toastService.createToastMessage(e.message);
    });
  }

  async createUserWithEmailAndPassword(user: User) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
      res.user.updateProfile({
        displayName: user.displayname
      });
      this.toastService.createToastMessage('Registration erfolgreich');
      this.loginWithEmailAndPassword(user);
      this.router.navigateByUrl('/success');
    }).catch((e) => {
      this.toastService.createToastMessage(e.message);
    });
  }

  get authenticated(): boolean {
    return this.afAuth.auth.currentUser !== null;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  getCurrentUserUid() {
    return this.afAuth.auth.currentUser.uid;
  }

  changeUsername(username: string) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: username
    });
  }

  changePassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
    this.toastService.createToastMessage('Dir wurde eine Email zum Passwort reset geschickt');
  }

  useDeviceLang() {
    this.afAuth.auth.useDeviceLanguage();
  }
}
