import { DeclarationListEmitMode } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from '../../types/book';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  bookList: Book[] = [
    {
      name: 'キタミ式イラストIT塾 応用情報技術者 令和05年',
      detail: 'なんかすごい',
      evaluation: 2
    },
    {
      name: '漫画',
      detail: '面白い',
      evaluation: 100
    }
  ];
}
