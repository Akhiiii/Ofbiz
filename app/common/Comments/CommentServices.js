import axios from 'axios';
import { baseURL } from '../rest_urls';

export const commentTypeList = criteria => axios.post(baseURL+'/commentType/list', criteria);
export const priorityLevelList = criteria => axios.post(baseURL+'/priorityLevel/list', criteria);