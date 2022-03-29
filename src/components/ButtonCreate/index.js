/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectString from '../../constants/project-constants';
import { Select } from '../Select';
import Input from '../Input';

export function ButtonCreate({
    type,
    handleChange,
    handleBlur,
    setSelectValue,
    values,
    errors,
    touched,
    setFieldValue,
    isEdit = false
}) {
    const renderItem = () => {
        if (type === ProjectString.TYPE_TEXT) {
            return (
                <Input
                    aria-label="Valor do botão"
                    name="value"
                    label="Valor"
                    placeholder="Valor do botão"
                    value={values?.value || ''}
                    onChange={(e) => {
                        setFieldValue('value', e.target.value);
                    }}
                    danger={!!errors.value}
                    errorMessage={errors.value}   
                />
            );
        }
        if (type === ProjectString.TYPE_LINK) {
            return (
                <Input
                    name="uri"
                    label="Link"
                    placeholder="Link do botão"
                    value={values?.uri || ''}
                    onChange={(e) => {
                        setFieldValue('uri', e.target.value);
                    }}
                    onBlur={handleBlur}
                    danger={!!errors.uri}
                    errorMessage={errors.uri} 
                />
            );
        }
        if (type === ProjectString.TYPE_REDIRECT) {
            return (
                <>
                    <Input
                        name="destinationService"
                        label="Serviço"
                        placeholder="Serviço de redirecionamento"
                        value={values?.destinationService || ''}
                        onChange={(e) => {
                            setFieldValue('destinationService', e.target.value);
                        }}
                        onBlur={handleBlur}
                        danger={
                            !!errors.destinationService
                        }
                        errorMessage={errors.destinationService}
                    />
                    <Input
                        name="destinationState"
                        label="Bloco"
                        placeholder="Bloco de redirecionamento"
                        value={values?.destinationState || ''}
                        onChange={(e) => {
                            setFieldValue('destinationState', e.target.value);
                        }}
                        onBlur={handleBlur}
                        danger={
                            !!errors.destinationState 
                        }
                        errorMessage={errors.destinationState}
                        errors={errors.destinationState}
                    />
                </>
            );
        }
        if (type === ProjectString.TYPE_JSON) {
            return (
                <Input
                    is-textarea
                    rows="4"
                    name="value"
                    label="JSON"
                    placeholder="Insira seu JSON aqui"
                    value={values?.value || ''}
                    onChange={(e) => {
                        setFieldValue('value', e.target.value);
                    }}
                    onBlur={handleBlur}
                    danger={!!errors.value}
                    errorMessage={errors.value}
                />
            );
        }
    };

    const handleChangeType = (e) => {
        if (e.target.value !== undefined) {
            setSelectValue(e.target.value);
        }
    };

    return (
        <>
            <Select
                placeholder="Selecione"
                value={values?.id ? values?.type : type}
                disabled={isEdit}
                options={[
                    {
                        label: 'Os texto enviados para IA',
                        value: 'text',
                        title: 'Texto'
                    },
                    {
                        label: ' Ao redirecionar a site externo',
                        value: 'link',
                        title: 'Link'
                    },
                    {
                        label: 'Redirecionamento para sub-bot',
                        value: 'redirect',
                        title: 'Redirecionamento'
                    },
                    { label: 'Envio de metadata', value: 'json', title: 'JSON' }
                ]}
                onChange={handleChangeType}
            />

            {type !== 0 && (
                <Input
                    name="title"
                    label="Título"
                    placeholder="Titulo do botão"
                    value={values?.title || ''}
                    onChange={(e) => {
                        setFieldValue('title', e.target.value);
                    }}
                    danger={!!errors.title}
                    errorMessage={errors.title}
                />
            )}
            {renderItem(type, handleChange, handleBlur)}
        </>
    );
}

ButtonCreate.propTypes = {
    type: PropTypes.string,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    values: PropTypes.object,
    errors: PropTypes.object,
    touched: PropTypes.object,
    setSelectValue: PropTypes.func,
    isEdit: PropTypes.bool,
    setFieldValue: PropTypes.func
};
