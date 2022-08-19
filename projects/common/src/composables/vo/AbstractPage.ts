import { PageInfo } from '../../constants/interfaces/Api';
import { LOCALE_CODE } from '../../constants/enums';
import { LocaleCode } from '../../constants/types';

export abstract class AbstractPage implements PageInfo {
  lang: LocaleCode = LOCALE_CODE.KO;

  // original data
  original?: any;

  abstract update(data?: AbstractPage): void;
}
