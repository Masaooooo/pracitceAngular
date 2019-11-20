import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /** Vueで言う所のpropsに該当するもの
   * @param text buttonに表示させる文字列
   * @param path 遷移先のURLのパス
  */
  @Input() text: string;
  @Input() path: string;

  constructor() { }

  ngOnInit() {
  }

}
