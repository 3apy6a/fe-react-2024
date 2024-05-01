import { useMediaQuery } from 'react-responsive';

import { DesktopComponent } from '@/components/header/components/desktop/Desktop.component.tsx';
import { MobileComponent } from '@/components/header/components/mobile/Mobile.component.tsx';

export const HeaderComponent = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });

    return <>{isDesktopOrLaptop ? <DesktopComponent /> : <MobileComponent />}</>;
};
