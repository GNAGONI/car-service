export const PHONE_NUMBER_VALIDATION = new RegExp(
  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
);

export const BANK_SORT_CODE_VALIDATION = new RegExp(/^(\d){2}-(\d){2}-(\d){2}$/);

export const BANK_ACCOUNT_NUMBER_VALIDATION = new RegExp(/^(\d){8}$/);

export const TEXT_VALIDATION = new RegExp(/^[^а-яА-Я]*$/);

export const NAME_VALIDATION = new RegExp(/^[a-zA-Z .'-]+$/);

export const REGISTRATION_NUMBER_VALIDATION = new RegExp(
  /^(([A-Z]{1,2}[ ]?[0-9]{1,4})|([A-Z]{3}[ ]?[0-9]{1,3})|([0-9]{1,3}[ ]?[A-Z]{3})|([0-9]{1,4}[ ]?[A-Z]{1,2})|([A-Z]{3}[ ]?[0-9]{1,3}[ ]?[A-Z])|([A-Z][ ]?[0-9]{1,3}[ ]?[A-Z]{3})|([A-Z]{2}[ ]?[0-9]{2}[ ]?[A-Z]{3})|([A-Z]{3}[ ]?[0-9]{4}))$/i,
);

export const POSTCODE_VALIDATION = new RegExp(
  /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/,
);

export const EMAIL_LOCAL_PART_VALIDATION = new RegExp(/^.{1,64}@.*/);
