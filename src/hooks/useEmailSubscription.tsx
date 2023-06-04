import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore";

interface EmailSubscriptionState {
    loading: boolean;
    error: string | null;
    success: boolean;
    storeEmailInFirebase: (email: string) => Promise<void>;
}

const useEmailSubscription = (): EmailSubscriptionState => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null | any>(null);
    const [success, setSuccess] = useState(false);

    const storeEmailInFirebase = async (email: string) => {
        setLoading(true);
        setError(null);

        try {
            await addDoc(collection(db, "subscribers"), { email });
            setSuccess(true);
        } catch (error) {
            setError('Failed to store email. Please try again.');
        }

        setLoading(false);
    };

    return { loading, error, success, storeEmailInFirebase };
};

export default useEmailSubscription;
