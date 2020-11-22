import * as _ from 'lodash';
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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { debounce } from 'helpful-decorators';

import { Merchant, Category, GamesFilters } from '@egamings/shared/domain';

@Component({
  selector: 'egamings-ui-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() categories: Category[];
  @Input() merchants: Merchant[];

  @Input() search: string = '';
  @Input() selectedCategories: number[] = [];
  @Input() selectedMerchants: number[] = [];

  @Output() changeEvent: EventEmitter<GamesFilters> = new EventEmitter();

  categoriesSelectText: string;

  formGroup: FormGroup;

  get isNotEmpty() {
    return (
      this.search ||
      this.selectedCategories?.length ||
      this.selectedMerchants?.length
    );
  }

  private formBuilder: FormBuilder = new FormBuilder();
  private unsubscribeAll = new Subject();

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
        this.setCategoriesSelectText(values['categories']);
        this.changeEventEmit(values);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  getCategoryNameById(id: ID) {
    return this.categories.find((category) => {
      return category.id === id;
    })?.name;
  }

  private setCategoriesSelectText(categories: ID[]) {
    let text: string[] = [];
    for (let i = 0; i < categories?.length; i++) {
      if (categories[i] !== -1) {
        text.push(this.getCategoryNameById(categories[i]));
      } else {
        text.push('Favorite');
      }
    }

    this.categoriesSelectText = _.join(text, ', ');
  }

  @debounce(1000)
  private changeEventEmit(filters: GamesFilters) {
    this.changeEvent.emit(filters);
  }
}
