import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ID } from '@datorama/akita';
import { IMerchant, ICategory, IGamesFilter } from '@egamings/shared/models';
import * as _ from 'lodash-es';
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
        this.getCategoriesSelectText();
        this.changeEvent.emit(values);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  getCategoriesSelectText() {
    const values: ID[] = this.formGroup.get('categories').value;
    let text: string[] = [];
    for (let i = 0; i < values?.length; i++) {
      if (values[i] !== -1) {
        text.push(this.getCategoryNameById(values[i]));
      } else {
        text.push('Favorite');
      }
    }
    
    return _.join(text, ', ');
  }

  isNotEmpty() {
    return (
      this.search ||
      this.selectedCategories?.length ||
      this.selectedMerchants?.length
    );
  }

  getCategoryNameById(id: ID) {
    return this.categories.find((category) => {
      return category.id === id;
    })?.name;
  }
}
