# Event-Management #

** `useState` **
`useState` is a React hook used for managing component-level state. You can use it to create and update state variables within your components. Example usage:
```javascript
import { useState } from 'react';

const [loginSuccess, setLoginSuccess] = useState('')

** `useParams` **

`useParams` is a React Router hook that allows you to access URL parameters in your components. Example usage:
import { useParams } from 'react-router-dom';

const { id } = useParams();

**`react-toastify`**
`react-toastify` is a library for displaying toast notifications in your React application. Example usage:
import { toast } from 'react-toastify';

toast.success('Success message');

**`Firebase Authentication` **
`Firebase Authentication` provides secure user authentication for your application.

`Login Function`
`The login` function allows users to sign in with their credentials.`
import { signInWithEmailAndPassword } from 'firebase/auth';

// Example usage:
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User signed in
  })
  .catch((error) => {
    // Handle errors
  });


´`Register Function`
`The register` function allows users to create new accounts.
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Example usage:
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // New user registered
  })
  .catch((error) => {
    // Handle errors
  });
