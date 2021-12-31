import {coverEnum} from './../Enums/coverEnum'

export function bookModel(){
    this.id = -1
    this.author = ""
    this.title = ""
    this.pages = 0
    this.conver = coverEnum.SOFT
}

