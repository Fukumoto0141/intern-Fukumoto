import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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
  addedBookInfo: Book = {
    name: '',
    detail: '',
    // evaluation: 0
  };
  // //formのvalueにバインドした変数editedBookInfoを初期化するメソッド
  // resetFormValue(){
  //   this.addedBookInfo = {
  //     name: '',
  //     detail: '',
  //     // evaluation: 0
  //   };
  // }
  //指定した書籍情報の添字を返すメソッド
  selectBookInfo(selectedBookInfo: Book):number{
    return this.bookList.indexOf(selectedBookInfo);
  }
  //書籍情報の追加するメソッド
  addBookInfo():void{
    this.bookList.push(this.addedBookInfo)
    // this.resetFormValue();
  }
  //書籍情報を削除するメソッド
  crossOffBookInfo(deletedBookInfo: Book){
    this.bookList.splice(this.selectBookInfo(deletedBookInfo),1);
  }
}
