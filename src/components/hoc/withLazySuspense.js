import React from 'react';
import Preloader from "./../Common/Preloader/Preloader.jsx";

export const withLazySuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />}><Component {...props} /></React.Suspense>
    }
}