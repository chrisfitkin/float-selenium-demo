/* eslint react/jsx-key: off */
import React from 'react';
import { Edit, SimpleForm, TextField, TextInput, required } from 'react-admin';

const TagEdit = props => {
    throw new Error('Custom Float TagEdit error');
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextField source="id" />
                <TextInput source="name" validate={[required()]} />
            </SimpleForm>
        </Edit>
    )
};

export default TagEdit;
