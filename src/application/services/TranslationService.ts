import esTranslations from '@/infrastructure/i18n/es.json';

type TranslationKey = 
  | 'common'
  | 'navigation'
  | 'hero'
  | 'search'
  | 'promotions'
  | 'services'
  | 'menu'
  | 'footer';

type Translations = typeof esTranslations;

export class TranslationService {
  private static translations: Translations = esTranslations;

  static getText(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }

  static getNestedText(section: TranslationKey, ...keys: string[]): string {
    let value: any = this.translations[section];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return `${section}.${keys.join('.')}`;
      }
    }

    return typeof value === 'string' ? value : `${section}.${keys.join('.')}`;
  }

  static getSection(section: TranslationKey): any {
    return this.translations[section];
  }
}

