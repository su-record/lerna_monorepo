import { AbstractPage } from 'projects-common/src/composables/vo/AbstractPage';
import { deepMerge } from 'projects-common/src/utils';

export class PageVo extends AbstractPage {
  update(data?: PageVo): void {
    if (!data) {
      if (this.original) deepMerge(this, this.original);
      return;
    }

    if (!this.original) {
      this.original = { ...this };
      delete this.original.original;
    }

    deepMerge(this.original, data, this);
  }
}
