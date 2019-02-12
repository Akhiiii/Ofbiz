// Page Configs
export const NAMESPACE = 'priorityLevel';


export const PAGE_TITLE = 'PriorityLevel';
export const PAGE_TITLE_TAGLINE = 'PriorityLevel master details - for MMS';
export const FORM_ID = 'PriorityLevelForm';
export const NOTIFICATION_TITLE = 'PriorityLevel Master';
export const LABEL_NOTAVAILABLE = '-NA-';

// Legend for Status in Table
export const LEGEND_ACTIVE = 'Active';
export const LEGEND_INACTIVE = 'Inactive';

// Form Field Labels, Placeholders, Error Messages
export const STATUS_LABEL = 'Status';
export const ID_LABEL = 'Id';
export const ID_PLACEHOLDER = 'Enter Id';
export const NAME_LABEL = 'Priority Level';
export const NAME_PLACEHOLDER = 'Enter Priority Level';
export const NAME_REQUIRED = true;
export const NAME_ERROR_MSG_REQUIRED = 'Priority Level is mandatory.';
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

export const REMARKS_LABEL = 'Description: ';
export const REMARKS_PLACEHOLDER = 'Enter Description';
export const REMARKS_ROWS = 3;
export const REMARKS_MAXSIZE = 500;
export const REMARKS_ERROR_MSG_MAXSIZE = 'Maximum 500 characters only allowed.';
export const REMARKS_ERROR_PATTERN = /^[a-zA-Z0-9 -,._&()*%/?^~\\[\]:@#$']+$/;
export const REMARKS_ERROR_MSG_PATTERN =
  'Accepts only alphabets, numbers and following Symbols: ,._&():%*/@#$^~?';

// SearchForm Code, Select status
export const SELECT_PLACEHOLDER = 'Select status';
export const SELECT_BLOCKED = 'Select---';
export const LEGEND_UNBLOCKED = 'UnBlocked';
export const LEGEND_NONE = 'None';
export const LEGEND_NAME_STARTBY = 'Name starts by';

// Table Popconfirm configs
export const POPCONFIRM_TITLE = 'Are you sure to delete this PriorityLevel ?';
export const POPCONFIRM_OK_TEXT = 'Delete';
export const POPCONFIRM_CANCEL_TEXT = 'Cancel';
export const POPCONFIRM_PLACEMENT = 'topRight';

// Table Column Captions
export const COLUMN_NAME = 'PriorityLevel';
export const COLUMN_REMARKS = 'Description: ';
export const COLUMN_ADDRESS = 'Address: ';
export const COLUMN_ACTIONS = 'Actions';
export const COLUMN_NAME_PLACEHOLDER = 'Name or Code';

// Tab Captions at Tabbed pane
export const TAB1_CAPTION = 'Overview';
export const TAB2_CAPTION = 'Info';

// Divider  Captions at View Mode
export const DIVIDER1_CAPTION = 'Info';
