import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMerchant, ICategory, IGamesFilter } from '@egamings/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'egamings-ui-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() categories: ICategory[];
  @Input() merchants: IMerchant[];

  @Input() search: string = '';
  @Input() selectedCategories: number[] = [];
  @Input() selectedMerchants: number[] = [];

  @Output() changeEvent: EventEmitter<IGamesFilter> = new EventEmitter();

  private formBuilder: FormBuilder = new FormBuilder();
  private unsubscribeAll = new Subject();

  formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: [this.search],
      categories: [this.selectedCategories],
      merchants: [this.selectedMerchants],
    });

    this.formGroup.valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((values) => {
        this.changeEvent.emit(values);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
