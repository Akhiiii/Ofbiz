/* eslint-disable import/no-unresolved */
// image imports
import payments from '../images/payments.png';

import DepartmentView from '../pages/Masters/Department';
import CountryView from '../pages/Masters/Country';
import StateView from '../pages/Masters/State';
import CityView from '../pages/Masters/City';

// Accounting-AR
import InvoiceViewAR from '../pages/Accounting(AR)/Invoice';
import PaymentViewAR from '../pages/Accounting(AR)/Payment';
import PaymentGroupsViewAR from '../pages/Accounting(AR)/Payment_Groups';
import ReportsViewAR from '../pages/Accounting(AR)/Reports';
import AgreementsView from '../pages/Accounting(AR)/Agreements/AgreementsView';
// Accounting-AP
import InvoiceViewAP from '../pages/Accounting(Ap)/Invoice';
import PaymentViewAP from '../pages/Accounting(Ap)/Payment';
import PaymentGroupsViewAP from '../pages/Accounting(Ap)/Payment_Groups';
import ReportsViewAP from '../pages/Accounting(Ap)/Reports';

// party 
import PartyView from '../pages/Party/Parties';
import MyCommunicationsView from '../pages/Party/MyCommunications/MyCommunicationsView';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

const menuData = [
  {
    name: 'Masters',
    icon: payments,
    path: 'masters',
    children: [
      { name: 'Department', path: 'department', component: DepartmentView },
      { name: 'Country', path: 'country', component: CountryView },
      { name: 'State', path: 'state', component: StateView },
      { name: 'City', path: 'city', component: CityView },
    ],
  },
  
  {
    name: 'Accounting - AP',
    icon: payments,
    path: 'accounting_payable',
    children: [
      { name: 'Main', path: 'Main', component: DepartmentView },
      { name: 'Agreements', path: 'Agreements', component: CountryView },
      { name: 'Invoices', path: 'FindInvoices', component: InvoiceViewAP },
      { name: 'Payments', path: 'FindPayments', component: PaymentViewAP },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: PaymentGroupsViewAP },
      { name: 'Reports', path: 'ListReports', component: ReportsViewAP },
    ],
  },
  {
    name: 'Accounting - AR',
    icon: payments,
    path: 'accounting_receivable',
    children: [
      { name: 'Main', path: 'Main', component: DepartmentView },
      { name: 'Agreements', path: 'Agreements', component: AgreementsView },
      { name: 'Invoices', path: 'FindInvoices', component: InvoiceViewAR },
      { name: 'Payments', path: 'FindPayments', component: PaymentViewAR },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: PaymentGroupsViewAR },
      { name: 'Reports', path: 'ListReports', component: ReportsViewAR },
    ],
  }, 
  {
    name: 'Asset Maint',
    icon: payments,
    path: 'assetmaint',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: 'Agreements', component: CountryView },
      { name: 'Invoices', path: 'FindInvoices', component: StateView },
      { name: 'Payments', path: 'FindPayments', component: CityView },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: 'ListReports', component: CityView },
    ],
  },
  {
    name: 'Catalog',
    icon: payments,
    path: 'catalog',
    children: [
      { name: 'Main', path: 'Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },                                                                                                                                                                                                                                                                                          
  {
    name: 'Content',
    icon: payments,
    path: 'content',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },
  {
    name: 'Facility',
    icon: payments,
    path: 'facility',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },
  {
    name: 'HR',
    icon: payments,
    path: 'hr',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },  
  {
    name: 'Manufacturing',
    icon: payments,
    path: 'manufacturing',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },
  {
    name: 'Marketing',
    icon: payments,
    path: 'marketing',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },
  {
    name: 'My Portal',
    icon: payments,
    path: 'myportal',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  }, 
  {
    name: 'Order',
    icon: payments,
    path: 'order',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  }, 
  {
    name: 'Party',
    icon: payments,
    path: 'party',
    children: [
      { name: 'Main', path: 'Main', component: DepartmentView },
      { name: 'Parties', path: 'Parties', component: PartyView },
      { name: 'My Communications', path: 'MyCommunications', component: MyCommunicationsView},
      { name: 'Communications', path: 'Communications', component: StateView },
      { name: 'Visits', path: 'Visits', component: CityView },
      { name: 'Logged-in Users', path: 'Logged-inUsers', component: CityView },
      { name: 'Classifications', path: 'Classifications', component: CityView },
      { name: 'Security', path: 'Security', component: CityView },
      { name: 'Address Match Map', path: 'AddressMatchMap', component: CityView },
      { name: 'Invitations', path: 'Invitations', component: CityView },
      { name: 'Import/Export ID', path: 'Import_ExportID', component: CityView },
    ],
  },
  {
    name: 'Project',
    icon: payments,
    path: 'project',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  }, 
  {
    name: 'SFA',
    icon: payments,
    path: 'Sfa',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },
  {
    name: 'Scrum',
    icon: payments,
    path: 'scrum',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },
  {
    name: 'Work Effort',
    icon: payments,
    path: 'WorkEffort',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  }, 
  {
    name: 'Extra',
    icon: payments,
    path: 'extra',
    children: [
      { name: 'Main', path: '/Main', component: DepartmentView },
      { name: 'Agreements', path: '/Agreements', component: CountryView },
      { name: 'Invoices', path: '/FindInvoices', component: StateView },
      { name: 'Payments', path: '/FindPayments', component: CityView },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: CityView },
      { name: 'Reports', path: '/ListReports', component: CityView },
    ],
  },                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                          

];

function formatter(data, parentPath = '/gui/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority,
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
