import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operator-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './operator-info.component.html',
  styleUrls: ['../operator-info/operator-info.component.scss']
})
export class OperatorInfoComponent {
  @Input() formGroup!: FormGroup;

  dateValue: string | null = null;

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.dateValue = input.value;
  }
}
