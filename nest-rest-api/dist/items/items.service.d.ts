import { Item } from './interfaces/item.interface';
export declare class ItemsService {
    private readonly items;
    findAll(): Item[];
    findOne(id: string): Item;
}
