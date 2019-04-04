import { Content } from '@angular/compiler/src/render3/r3_ast';

interface Article {
    id: number,
    picturePath: string, 
    title: string, 
    creationDate: string,
    content: string
}

export default Article;