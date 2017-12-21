import * as firebase from 'firebase';
import { resolve } from 'url';
import { messaging } from 'firebase';

export class AuthService {
    token: string;

    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    singinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                   firebase.auth().currentUser.getToken()
                       .then(
                           (token: string) => this.token = token
                       );
                }
            )
            .catch(
                error => alert(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }
}
