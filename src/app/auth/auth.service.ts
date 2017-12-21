import * as firebase from 'firebase';
import { resolve } from 'url';
import { messaging } from 'firebase';

export class AuthService {

    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    singinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                resolve => console.log(resolve)
            )
            .catch(
                error => alert(error)
            );
    }
}
