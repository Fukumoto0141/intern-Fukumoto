import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Book } from '../../types/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() bookInfo : Book = {
    id: 0,
    name: '',
    detail: '',
    evaluation: 0
  };
  //book型の値を持つEventEmitterをインスタンス化、親コンポーネントにイベントを受け渡す
  @Output() deleteEvent= new EventEmitter<Book>();
  onClick(){
    //emit()メソッドを使用して親コンポーネントに変数bookの値を受け渡す
    this.deleteEvent.emit(this.bookInfo);
  }
}
