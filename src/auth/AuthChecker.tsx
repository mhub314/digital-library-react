// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {

    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
      if (!user) {
            navigate("../")
            signInWithPopup(auth, Providers.google)
      }
    });
    
    // useEffect(() => {
    //     if (!auth.currentUser) {
    //         navigate("../")
    //         signInWithPopup(auth, Providers.google)
    //     }
    // }, [])
    
      return (
        <>{children}</>
      )
    }
    
    export default AuthChecker