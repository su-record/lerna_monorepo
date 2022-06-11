/* eslint-disable */
const fs = require("fs");
const { GoogleSpreadsheet } = require("google-spreadsheet");

const creds = require("./cred.json");

// const dest = `${__dirname}/src/locale/locale.json`;
const LANGS = ["ko"];

async function main() {
  try {
    const doc = new GoogleSpreadsheet("");
    // console.log('[localeHelper] doc: ', doc);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    // const sheet = doc.sheetsByIndex[5];
    const sheet = doc.sheetsById[368394097];
    // console.log('다국어 시트 :: ', sheet);
    const rows = await sheet.getRows({ offset: 0, limit: 2000 });
    const parsedRows = rows.map((row) => ({
      pageId: row["PAGE_ID"],
      compId: row["COMP_ID"],
      comp: row["COMP"],
      ko: row["KR_A"],
    }));
    const REG_EXP = /\s*\n\s*/g;
    const REG_EXP2 = /\r/g;
    const result = parsedRows.reduce(
      (acc, cur) => {
        if (cur.comp === "UI" || cur.comp === "BUTTON") {
          const fixedPageId = cur.pageId.replace(REG_EXP2, "");
          if (fixedPageId.length > 0) {
            const fixedCompId = cur.compId.replace(REG_EXP2, "");
            for (let i = 0; i < LANGS.length; i++) {
              const lang = LANGS[i];
              if (!acc[lang].hasOwnProperty(fixedPageId)) {
                acc[lang][fixedPageId] = {};
              }
              if (acc[lang][fixedPageId])
                acc[lang][fixedPageId][fixedCompId] =
                  (cur[lang] && cur[lang].replace(REG_EXP, "<br>")) || "";
            }
          }
        }
        return acc;
      },
      {
        ko: {},
      }
    );

    LANGS.forEach((lang) => {
      fs.writeFile(
        `${__dirname}/src/i18n/locales/${lang}.json`,
        JSON.stringify(result[lang], null, 2),
        (err) => {
          if (err) throw err;
          console.log("작성완료", lang);
        }
      );
    });
  } catch (err) {
    console.error(err);
  }
}

main();
