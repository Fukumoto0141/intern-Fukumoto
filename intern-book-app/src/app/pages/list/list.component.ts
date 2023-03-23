import { Component } from '@angular/core';
import { Book } from '../../types/book';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(
    private dialog:MatDialog,
    private messageService: MessageService
    ){}
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
  //ログのメッセージを追加するメソッド
  addMessage(bookName:string){
    this.messageService.add(`${bookName}が追加されました`);
  }
  //ダイアログを表示するメソッド
  openDialog(deletedBookInfo: Book ){
    let isOk:boolean=false;
    this.dialog.open(
      DialogComponent, {
        data: { deletedBookInfo }
      }).afterClosed().subscribe(result => {
        isOk=result;
        console.log(isOk);
        if(result==true){
          //OKが押されたときのみ書籍情報を削除するメソッドを実行
          this.crossOffBookInfo(deletedBookInfo);
        }
    })
  }
  //指定した書籍情報の添字を返すメソッド
  selectBookInfo(selectedBookInfo: Book):number{
    return this.bookList.indexOf(selectedBookInfo);
  }
  //書籍情報の追加するメソッド
  addBookInfo():void{
    this.bookList.push(this.addedBookInfo)
    this.addMessage(this.addedBookInfo.name)
    // this.resetFormValue();
  }
  //書籍情報を削除するメソッド
  crossOffBookInfo(deletedBookInfo: Book){
    this.bookList.splice(this.selectBookInfo(deletedBookInfo),1);
  }
  // //formのvalueにバインドした変数editedBookInfoを初期化するメソッド
  // resetFormValue(){
  //   this.addedBookInfo = {
  //     name: '',
  //     detail: '',
  //     // evaluation: 0
  //   };
  // }
}
