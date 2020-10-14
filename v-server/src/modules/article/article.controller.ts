import { Controller, Get } from "@nestjs/common";

@Controller('active')
export class ArticleController{
    constructor(){}
    @Get()
    findArticleList():Promise<>{

    }
}