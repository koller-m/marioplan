export const signIn = (credentials) => 
    async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        try {
            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            )
            dispatch({ type: 'SIGN_IN_SUCCESS' })
        } catch {
            dispatch({ type: 'SIGN_IN_FAILED' })
        }
    }

export const signOut = (credentials) =>
    async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        try {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
        } catch {
            dispatch({ type: 'SIGNOUT_FAILED' })
        }
    }

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
    
        firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
        ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
        });
        }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
        });
    }
}