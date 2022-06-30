import { ChangeEvent, KeyboardEvent } from 'react';

export enum DirectiveEnum {
  alpha = 'alpha',
  decimal = 'decimal',
  eng = 'eng',
  nums = 'nums',
  punctuation = 'punctuation',
  rus = 'rus',
  special = 'special',
}

export enum SpecialKeyEnum {
  backspace = 8,
  tab = 9,
  enter = 13,
  escape = 27,
  pageUp = 33,
  pageDown = 34,
  arrowLeft = 37,
  arrowUp = 38,
  arrowRight = 39,
  arrowDown = 40,
  delete = 46,
}

export type TKeyboardEvent = KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>;

export type TChangeEvent = ChangeEvent<HTMLInputElement>;
