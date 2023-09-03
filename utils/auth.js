import axios from "axios";

const API_KEY = 'AIzaSyCS1hkS8URWPIvEfYSH0CHSmU-Q5oBvvtA';

export async function authUser(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}

export async function createUser (fullName, email, userType, date, password) {
    const response = await axios.post('https://final-project-app-606c2-default-rtdb.europe-west1.firebasedatabase.app/Users.jason',
    {fullName,email,userType,date,password});
}