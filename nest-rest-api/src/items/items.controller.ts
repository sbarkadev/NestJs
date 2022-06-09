import { Controller , Get ,Post ,Put ,Delete , Body, Req, Res ,Param  } from '@nestjs/common';
import { CreateItemDto} from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


/* decorator  => used for metadata ... */
@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService : ItemsService){

    }

    @Get()
    findAll() : Item[]
    {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) : Item
    {
        return this.itemsService.findOne(id);
    } 

    @Post()
    create(@Body() createItemDto : CreateItemDto) : string {

        return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
    }
    /*get uri params */

    /*   
        @Get(':id')
        findOne(@Param() param )
        {
            return `Item ${param.id}`;
        } 
    */

 

    @Delete(':id')
    delete(@Param('id') id ) : string
    {
        return `Delete ${id}`;
    }

    /* update */
    @Put(':id')
    update(@Body() updateItemDto : CreateItemDto , @Param('id') id ) : string
    {
        return `Update ${id} - Name : ${updateItemDto.name}`;
    }
}


// IN EXPRESS
/*
    app.get('/' , (req, res))
*/

//In NESTJS ( is not really a nestjs way to do it )
/*
import { Controller , Get ,Post ,Put ,Delete , Body  } from '@nestjs/common';
import {Request, Response} from 'express'

@Get 
findAll(@Req() req :Request , @Res() res :Response) : Response
{
    console.log(req.url);
    return res.send('Hello wolrd');
}

*/