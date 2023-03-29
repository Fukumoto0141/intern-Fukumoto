import { Component } from '@angular/core';
import { Book } from '../../types/book';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private dialog:MatDialog){
  }
  bookList: Book[] = [
    {
      id: 0,
      name: 'キタミ式イラストIT塾 応用情報技術者 令和05年',
      detail: 'なんかすごい',
      evaluation: 2
    },
    {
      id: 1,
      name: '漫画',
      detail: '面白い',
      evaluation: 100
    }
  ];
  inputBook: Book = {
    id: 0,
    name: '',
    detail: '',
    evaluation: 0
  };
  //ダイアログを表示するメソッド
  openDialog(deletedBookInfo: Book ){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { deletedBookInfo }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(!result){
        return;
      }
      this.deleteBookInfo(deletedBookInfo);
    })
  }
  //書籍情報の追加するメソッド
  addBookInfo():void{
    const book:Book = {
      id: this.bookList[this.bookList.length - 1].id + 1,
      name: this.inputBook.name,
      detail: this.inputBook.detail,
      evaluation: this.inputBook.evaluation
    }
    this.bookList.push(book);
  }
  //書籍情報を削除するメソッド
  deleteBookInfo(deletedBookInfo: Book){
    this.bookList = this.bookList.filter((el) => el.id !== deletedBookInfo.id);
  }
}
