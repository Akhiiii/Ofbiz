import { commentTypeList, priorityLevelList } from './CommentServices';

export default {
  namespace: 'comments',

  state: {
    commentTypeList: [],
    priorityLevelList: [],
  },

  effects: {
    *CommentTypeList({ params }, { call, put }) {
      const response = yield call(commentTypeList, params);
      yield put({
        type: 'commentTypeList',
        payload: response.data.data.content,
      });
    },
    *PriorityLevelList({ params }, { call, put }) {
      const response = yield call(priorityLevelList, params);
      yield put({
        type: 'priorityLevelList',
        payload: response.data.data.content,
      });
    },
  },

  reducers: {
    commentTypeList(state, { payload }) {
      return {
        ...state,
        commentTypeList: payload,
      };
    },
    priorityLevelList(state, { payload }) {
      return {
        ...state,
        priorityLevelList: payload,
      };
    },
  },
};
