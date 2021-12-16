import { createSlice } from '@reduxjs/toolkit';

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState: {
        userInputInformation: {
            nickname: '',
            phone: ''
        },
        currentUserInformation: {},
        allUsers: [],
        selectedUserId: '',
        loadingUsers: false,
        errorUsers: {
            errorUsersText: '',
            isError: false,
        },
    },
    reducers: {
        getUserStart: (state, action) => {
            state.loadingUsers = true;
            state.selectedUserId = action.payload;
        },
        getUserSuccess: (state, action) => {
            state.loadingUsers = false;
            state.selectedUserId = '';
            state.currentUserInformation = action.payload;
        },
        getUserFailure: (state, action) => {
            state.loadingUsers = false;
            state.selectedUserId = '';
            state.errorUsers.esError = true;
            state.errorUsers.errorUsersText = action.payload;
        },
        getAllUsersStart: (state) => {
            state.loadingUsers = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loadingUsers = false;
            state.allUsers = action.payload;
        },
        getAllUsersFailure: (state, action) => {
            state.loadingUsers = false;
            state.errorUsers.errorUsersText = action.payload;
            state.errorUsers.isError = true;
        },
        deleteUserStart: (state) => {
            state.loadingUsers = true;
            state.selectedUserId = action.payload;
        },
        deleteUserSuccess: (state) => {
            state.loadingUsers = false;
            state.selectedUserId = '';
        },
        deleteUserFailure: (state, action) => {
            state.loadingUsers = false;
            state.selectedUserId = '';
            state.errorUsers.esError = true;
            state.errorUsers.errorUsersText = action.payload;
        },
        changeUserDataStart: (state, action) => {
            state.loadingUsers = true;
            state.userInputInformation.nickname = action.payload.newNickname;
            state.userInputInformation.phone = action.payload.newPhone;
            state.selectedUserId = action.payload.currentUserId;
        },
        changeUserDataSuccess: (state) => {
            state.loadingUsers = false;
            state.userInputInformation.nickname = '';
            state.userInputInformation.phone = '';
            state.selectedUserId = '';
        },
        changeUserDataFailure: (state, action) => {
            state.loadingUsers = false;
            state.userInputInformation.nickname = '';
            state.userInputInformation.phone = '';
            state.selectedUserId = '';
            state.errorUsers.esError = true;
            state.errorUsers.errorUsersText = action.payload;
        },
    },
});

export const {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    changeUserDataStart,
    changeUserDataSuccess,
    changeUserDataFailure,
} = usersReducer.actions;
