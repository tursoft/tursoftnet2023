export abstract class BaseRepository<TDto, TData> {

    abstract getId(item: TDto): number;
    abstract getTitle(item: TDto): string;
    abstract getImageSrcByDto(item: TDto, big?: boolean): string;

    abstract getData(): TData;
    abstract getItems(): TDto[];

    getById(id: number): TDto | undefined {
        const items = this.getItems();
        const item = items.find(i => this.getId(i) == id);
        return item;
    }
}