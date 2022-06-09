import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';


@Injectable()
export class ItemsService {
    private readonly items : Item[] = 
    [
        {
            id : "3434343545",
            name : "Item One",
            qty: 100,
            description : "This is Item one"
        },
        {
            id : "9895485",
            name : "Item Two",
            qty: 50,
            description : "This is Item Two"

        }
    ]

    findAll() : Item[]{
        return this.items;
    }

    findOne(id :string) : Item{
        return this.items.find(item => item.id == id)
    }
}
