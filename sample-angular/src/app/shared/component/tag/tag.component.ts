import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  /**
   * @param text tagに表示させる文字列
   */
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
