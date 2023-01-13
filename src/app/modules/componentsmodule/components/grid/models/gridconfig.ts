export type GridViewMode = 'list' | 'card'; 

export interface GridConfig {
    viewMode: GridViewMode;
    showCountBadge?: boolean;
    showHeader?: boolean;
    showColumnHeaders?: boolean;
}