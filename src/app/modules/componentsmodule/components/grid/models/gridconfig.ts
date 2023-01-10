import { GridColumn } from "./gridcolumn";

export type GridViewMode = 'list' | 'card'; 

export interface GridConfig {
    columns: GridColumn[];
    viewMode: GridViewMode;
}