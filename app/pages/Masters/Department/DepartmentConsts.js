// Page Configs
export const NAMESPACE = 'department';

export const PAGE_TITLE = 'Department';
export const PAGE_TITLE_TAGLINE = 'Department master details - for MMS';
export const FORM_ID = 'DepartmentForm';
export const NOTIFICATION_TITLE = 'Department Master';
export const LABEL_NOTAVAILABLE = '-NA-';

// Legend for Status in Table
export const LEGEND_ACTIVE = 'Active';
export const LEGEND_INACTIVE = 'Inactive';
export const LEGEND_BLOCKED = 'Blocked';
export const LEGEND_BLOCKED_YES = 'Yes';
export const LEGEND_BLOCKED_NO = 'No';

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
export const NAME_ERROR_PATTERN = /^[a-zA-Z0-9 -,._&()[\]:@#$']+$/;
export const NAME_ERROR_MSG_PATTERN =
  'Accepts only alphabets, numbers and following Symbols: ,._&():@#$';
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
export const SHORT_NAME_ERROR_MSG_PATTERN =
  'Accepts only alphabets and following Symbols: ,._&():@#$^';

export const REMARKS_LABEL = 'Description: ';
export const REMARKS_PLACEHOLDER = 'Enter Description';
export const REMARKS_ROWS = 3;
export const REMARKS_MAXSIZE = 500;
export const REMARKS_ERROR_MSG_MAXSIZE = 'Maximum 500 characters only allowed.';
export const REMARKS_ERROR_PATTERN = /^[a-zA-Z0-9 -,._&()*%/?^~\\[\]:@#$']+$/;
export const REMARKS_ERROR_MSG_PATTERN =
  'Accepts only alphabets, numbers and following Symbols: ,._&():%*/@#$^~?';

// SearchForm Code, Select status
export const CODE_PLACEHOLDER = 'Enter Code';
export const SELECT_PLACEHOLDER = 'Select status';
export const SELECT_BLOCKED = 'Select---';
export const LEGEND_UNBLOCKED = 'UnBlocked';
export const LEGEND_NONE = 'None';
export const LEGEND_NAME_STARTBY = 'Name starts by';

// Table Popconfirm configs
export const POPCONFIRM_TITLE = 'Are you sure to delete this Department ?';
export const POPCONFIRM_OK_TEXT = 'Delete';
export const POPCONFIRM_CANCEL_TEXT = 'Cancel';
export const POPCONFIRM_PLACEMENT = 'topRight';

export const POPCONFIRM_TITLE_APPROVE =
  'Are you sure to Approve this Department ?';
export const POPCONFIRM_OK_TEXT_APPROVE = 'Approve';

// Table Column Captions
export const COLUMN_NAME = 'Department';
export const COLUMN_SHORT_NAME = 'Short Name';
export const COLUMN_PHONE = 'Phone Numbers';
export const COLUMN_REMARKS = 'Description: ';
export const COLUMN_ADDRESS = 'Address: ';
export const COLUMN_ACTIONS = 'Actions';
export const COLUMN_NAME_PLACEHOLDER = 'Name or Code';

// Tab Captions at Tabbed pane
export const TAB1_CAPTION = 'Overview';
export const TAB2_CAPTION = 'Info';
export const TAB3_CAPTION = 'Conatct';
export const TAB4_CAPTION = 'Contact Persons';
export const TAB5_CAPTION = 'Comments';

// Divider  Captions at View Mode
export const DIVIDER1_CAPTION = 'Info';
export const DIVIDER2_CAPTION = 'Addresses';
export const DIVIDER3_CAPTION = 'Phone Numbers';
