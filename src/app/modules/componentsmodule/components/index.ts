export * from './grid';
export * from './verticaltimeline';

import { GridComponent, GridCardViewComponent, GridListViewComponent,  } from './grid';
import { VerticaltimelineComponent } from './verticaltimeline';

export const components: any[] = [
    GridComponent, 
    GridCardViewComponent,
    GridListViewComponent,
    VerticaltimelineComponent
];