// Form Field Labels, Placeholders, Error Messages
export const CODE_LABEL = 'Code';
export const STATUS_LABEL = 'Status';
export const BLOCK_LABEL = 'Blocked';

export const NAME_LABEL = 'Name';
export const NAME_PLACEHOLDER = 'Enter Name';
export const NAME_REQUIRED = true;
export const NAME_ERROR_MSG_REQUIRED = 'Name is mandatory.';
export const NAME_MINSIZE = 2;
export const NAME_MAXSIZE = 200;
export const NAME_ERROR_MSG_MINSIZE = 'Minmum 2 characters mandatory.';
export const NAME_ERROR_MSG_MAXSIZE = 'Maximum 200 characters only allowed.';
// export const NAME_ERROR_PATTERN = /^[a-zA-Z-\\,._&()\\[\]:@#$']+$/;
export const NAME_ERROR_PATTERN = /^[a-zA-Z -,._&()[\]:@#$']+$/;
export const NAME_ERROR_MSG_PATTERN = 'Not allowed this character.';
export const NAME_ERROR_MSG_ISEXISTS_STYLE = {
  color: 'red',
  margin: ' 0 0 0 255px',
};

export const SHORT_NAME_LABEL = 'Short Name';
export const SHORT_NAME_PLACEHOLDER = 'Enter Short Name';
export const SHORT_NAME_MINSIZE = 2;
export const SHORT_NAME_ERROR_MSG_MINSIZE = 'Minmum 2 characters mandatory.';
export const SHORT_NAME_MAXSIZE = 150;
export const SHORT_NAME_ERROR_MSG_MAXSIZE =
  'Maximum 150 characters only allowed.';
export const SHORT_NAME_ERROR_PATTERN = /^[a-zA-Z-,._&()^[\]:@#$']+$/;
export const SHORT_NAME_ERROR_MSG_PATTERN = 'Not allowed this character.';

export const REMARKS_LABEL = 'Description: ';
export const REMARKS_PLACEHOLDER = 'Enter Description';
export const REMARKS_ROWS = 3;
export const REMARKS_MAXSIZE = 500;
export const REMARKS_ERROR_MSG_MAXSIZE = 'Maximum 500 characters only allowed.';
export const REMARKS_ERROR_PATTERN = /^[a-zA-Z -,._&()*%/?^~\\[\]:@#$']+$/;
export const REMARKS_ERROR_MSG_PATTERN = 'Not allowed this character.';

export const ADDRESS_TYPE_ERROR_MSG_REQUIRED = 'Address Type is Mandatory.';
export const STREET1_ERROR_MSG_REQUIRED = 'Street 1 is Mandatory.';
export const STREET2_ERROR_MSG_REQUIRED = 'Street 2 is Mandatory.';
export const STREET3_ERROR_MSG_REQUIRED = 'Street 3 is Mandatory.';
export const COUNTRY_STATE_CITY_ERROR_MSG_REQUIRED = 'Country is Mandatory.';

// export const ADDRESS_TYPE_ERROR_MSG_REQUIRED = 'Address Type is Mandatory.';
