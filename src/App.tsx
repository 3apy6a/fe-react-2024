import React from 'react';

import { FooterComponent } from '@/components/footer/Footer.component.tsx';
import { ProductsListComponent } from '@/components/product/ProductsList.component.tsx';

import { AboutComponent } from './components/about/About.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ImageComponent } from './components/image/Image.component.tsx';

import './App.module.css';

function App() {
    const [selectedNawBarItem, setSelectedNawBarItem] = React.useState('Products');
    return (
        <>
            <main className="home">
                <HeaderComponent setSelectedNawBarItem={setSelectedNawBarItem} />
                <section>
                    <div className={'contentWrapper %{wrapper}'}>
                        {selectedNawBarItem === 'About' ? (
                            <>
                                <AboutComponent customClasses="w-6 w-12 offset-right-xs offset-mobile-none" />
                                <ImageComponent customClasses="w-6 w-12 padding-120 padding-mobile-none" />
                            </>
                        ) : (
                            <ProductsListComponent />
                        )}
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    );
}

export default App;
