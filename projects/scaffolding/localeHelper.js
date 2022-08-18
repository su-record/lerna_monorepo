import fs from 'fs';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '../../creds.json';
import path from 'path';
const __dirname = path.resolve();
const LANGS = ['ko', 'en', 'zh', 'ja'];

async function main() {
  try {
    const doc = new GoogleSpreadsheet('...');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[1549787342];
    const rows = await sheet.getRows({ offset: 0, limit: 2000 });
    const parsedRows = rows.map(row => ({
      pageId: row['PAGE_ID'],
      compId: row['COMP_ID'],
      comp: row['COMP'],
      ko: row['KR_A'],
      en: row['EN_A'],
      zh: row['CH_A'],
      ja: row['JP_A'],
    }));
    const REG_EXP = /\s*\n\s*/g;
    const REG_EXP2 = /\r/g;
    const result = parsedRows.reduce(
      (acc, cur) => {
        if (cur.comp === 'UI' || cur.comp === 'BUTTON') {
          const fixedPageId = cur.pageId.replace(REG_EXP2, '');
          if (fixedPageId.length > 0) {
            const fixedCompId = cur.compId.replace(REG_EXP2, '');
            for (let i = 0; i < LANGS.length; i++) {
              const lang = LANGS[i];

              if (!Object.prototype.hasOwnProperty.call(acc[lang], fixedPageId)) {
                acc[lang][fixedPageId] = {};
              }

              if (acc[lang][fixedPageId])
                acc[lang][fixedPageId][fixedCompId] =
                  (cur[lang] && cur[lang].replace(REG_EXP, '<br>')) || '';
            }
          }
        }
        return acc;
      },
      {
        ko: {},
        en: {},
        zh: {},
        ja: {},
      },
    );

    LANGS.forEach(lang => {
      fs.writeFile(
        `${__dirname}/src/i18n/locales/${lang}.json`,
        JSON.stringify(result[lang], null, 2),
        err => {
          if (err) throw err;
          console.log('작성완료', lang);
        },
      );
    });
  } catch (err) {
    console.error(err);
  }
}

main();
