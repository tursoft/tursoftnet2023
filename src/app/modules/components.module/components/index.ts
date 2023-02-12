export * from './grid';
export * from './verticaltimeline';

import { AnimatedNumberComponent } from './animatednumber';
import { VerticaltimelineComponent } from './verticaltimeline';
import { 
    GridComponent, 
    GridCardViewComponent, 
    GridListViewComponent,
    GridSingleCardViewComponent,
    GridGalleryViewComponent,
    GridColumnComponent
} from './grid';

export const components: any[] = [
    GridComponent,

    GridCardViewComponent,
    GridListViewComponent,
    GridSingleCardViewComponent,
    GridGalleryViewComponent,

    GridColumnComponent,
    
    VerticaltimelineComponent,

    AnimatedNumberComponent
];