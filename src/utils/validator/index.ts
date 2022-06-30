import {DirectiveEnum, SpecialKeyEnum, TKeyboardEvent} from './types';
import {convertNumberToString} from "@app/utils/converters";

const SYMBOLS = {
  [DirectiveEnum.alpha]: /^[A-Za-zА-ЯЁа-яё\s]+$/,
  [DirectiveEnum.decimal]: /^[.,]+$/,
  [DirectiveEnum.eng]: /^[A-Za-z\s]+$/,
  [DirectiveEnum.nums]: /^[0-9]+$/,
  // eslint-disable-next-line no-useless-escape
  [DirectiveEnum.punctuation]: /^[-_,.;:!?'"(){}\[\]]+$/,
  [DirectiveEnum.rus]: /^[А-ЯЁа-яё]+$/,
  [DirectiveEnum.special]: /^[@#$№%^&*+=\\|/<>]+$/,
};

const isInputElement = (el: HTMLElement) => Boolean(el.tagName.toLowerCase() === 'input');

const isConformDirective = (symbol: string, directives: DirectiveEnum[]) => (
  Object.values(DirectiveEnum).some((dir) => (
    directives.includes(dir)
    && SYMBOLS[dir].test(symbol)
  ))
);

const isSpecialKeys = (keyCode: number, isCtrl: boolean) => (
  (isCtrl && ([65, 67, 86, 88].includes(keyCode))) // Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
  || Object.values(SpecialKeyEnum).includes(keyCode)
);

// Проверяет допустимость нажатой клавиши заданным директивам
const isKeysValid = (event: TKeyboardEvent, directives: Array<DirectiveEnum>): boolean => (
  isInputElement(event.target)
  && (isConformDirective(event.key, directives)
    || isSpecialKeys(event.keyCode, event.ctrlKey))
);

// Обрабатывает клавиши backspace и delete числовых полей
const specialKeysHandlerForNumeric = (event: TKeyboardEvent): void => {
  const { keyCode, target: input } = event;
  if (!isInputElement(input) || !isSpecialKeys(keyCode, false)) return;

  const cursor = input.selectionStart ?? 0;
  if (input.selectionEnd !== cursor) return;

  switch (keyCode) {
    case SpecialKeyEnum.backspace:
      if (/\s/.test(input.value[cursor - 1])) input.selectionStart = cursor - 1;
      break;
    case SpecialKeyEnum.delete:
      if (/\s/.test(input.value[cursor])) input.selectionStart = cursor + 1;
      break;
    default:
      input.selectionStart = cursor;
  }
  input.selectionEnd = input.selectionStart;
};

// Устанавливает значение в input
const setNumberValueInField = (input: HTMLInputElement, newValue: number): void => {
  const valueAsStr = convertNumberToString(newValue);
  const spacesBefore = input.value.match(/\s+/g)?.length ?? 0;
  const spacesAfter = valueAsStr.match(/\s+/g)?.length ?? 0;
  const cursor = input.selectionStart ?? 0;
  const newCursor = cursor + spacesAfter - spacesBefore;
  input.value = valueAsStr;
  input.selectionStart = newCursor > 0 ? newCursor : 0;
  input.selectionEnd = input.selectionStart;
};

export {
  isKeysValid,
  specialKeysHandlerForNumeric,
  setNumberValueInField,
}
