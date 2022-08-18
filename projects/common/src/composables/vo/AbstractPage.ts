import type { LoadPage } from '../../constants/interfaces';
import { LOCALE_CODE } from '../../constants/enums';
import type { LocaleCode } from '../../constants/types';

export abstract class AbstractPage implements LoadPage {
  lang: LocaleCode = LOCALE_CODE.KO;

  // original data
  original?: any;

  abstract update(data?: LoadPage): void;
}
