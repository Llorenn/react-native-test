import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { User } from '../../components/User/User';
import { getAllUsersStart } from '../../redux/users/usersReducer';

export const UsersPage = () => {
    const { allUsers, loadingUsers } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersStart());
    });

    return (
        <View>
            {loadingUsers ?
                <ActivityIndicator size="large" color="#FAB15F" /> :
                <FlatList
                    data={allUsers}
                    renderItem={(user) => <User userInformation={user} />}
                    keyExtractor={(user) => user.userId}
                />
            }
        </View>
    );
};
