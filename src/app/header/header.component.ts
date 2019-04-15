import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selected = new EventEmitter<string>();

  onSelect(link: string) {
    this.selected.emit(link);
  }
}
