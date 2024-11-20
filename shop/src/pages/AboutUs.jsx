import React from 'react';
import { useOutletContext } from 'react-router-dom';

function AboutUs() {
    const { store, color1, color2 } = useOutletContext();

    return (
        <div className="container lg:mx-auto px-2 py-10">
            <header className="text-center">
                <h1 className="text-3xl lg:text-4xl font-bold" style={{color: color1}}>About</h1>
            </header>
            <section className="bg-white px-4 py-8 rounded-lg lg:mx-28">
                <div className="mb-8">
                    <p className="text-lg" style={{color: color1}} dangerouslySetInnerHTML={{ __html: store.aboutContent}} />
                </div>
            </section>
        </div>
    );
}

export default AboutUs