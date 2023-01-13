export type GridViewMode = 'list' | 'card'; 

export interface GridConfig {
    viewMode: GridViewMode;
    showCount?: boolean;
}