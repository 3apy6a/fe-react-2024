import { useMediaQuery } from 'react-responsive';

import { DesktopComponent } from '@/components/header/components/desktop/Desktop.component.tsx';
import { MobileComponent } from '@/components/header/components/mobile/Mobile.component.tsx';
import type { NavBarItem } from '@/interfaces/NavBarItem.ts';

export const HeaderComponent = ({ setSelectedNawBarItem }: NavBarItem) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });

    return <>{isDesktopOrLaptop ? <DesktopComponent setSelectedNawBarItem={setSelectedNawBarItem} /> : <MobileComponent />}</>;
};
