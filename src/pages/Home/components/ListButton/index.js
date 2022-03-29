/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../../../components/Button/Button';
import { ButtonCreate } from '../../../../components/ButtonCreate';
import ProjectString from '../../../../constants/project-constants';
import { KeywordContext } from '../../../../context/KeywordContext';
import { showToast } from '../../../../services/common-service';
import { objectButton } from '../../../../utils/getInformationButtonType';
import * as S from './styled';

export const ListButton = () => {
    const {
        buttonArray,
        setButtonArray,
        isEdit,
        buttonKeywordDelete,
        buttonKeywordUpdate
    } = useContext(KeywordContext);
    const [selectValue, setSelectValue] = useState(ProjectString.TYPE_TEXT);
    const [initialData, setInitialData] = useState({});
    const [oldValue, setOldValue] = useState({});

    const [editButton, setEditButton] = useState(false);
    const [schemaValidation, setSchemaValidation] = useState(
        Yup.object().shape({
            title: Yup.string().required('O título é obrigatório'),
            value: Yup.string().required('O valor é obrigatória')
        })
    );

    const removeButtonAction = async (item) => {
        const aux = buttonArray;
        const index = aux.findIndex((x) => x.title === item.title);
        aux.splice(index, 1);
        if (isEdit) {
            const response = await buttonKeywordDelete(item, aux);
            if (response === false) {
                return false;
            }
            return true;
        }
        setButtonArray(() => [...aux]);
        await showToast({
            type: 'success',
            message: 'Deletado com sucesso!'
        });
    };

    const setElementEdit = (item) => {
        setSelectValue(item?.type);
        setInitialData(item);
        setEditButton(true);
        setOldValue(item);
    };

    const editButtonAction = async (item, errors) => {
        if (Object.keys(errors).length === 0 && Object.keys(item).length > 0) {
            const aux = buttonArray;
            const index = aux.findIndex((x) => x.title === oldValue.title);
            item.type = selectValue;
            if (isEdit) {
                await buttonKeywordUpdate(item, setEditButton);
                return true;
            }
            aux[index] = item;
            setEditButton(false);
            setButtonArray(aux);
            setInitialData({});
            await showToast({
                type: 'success',
                message: 'Alterado com sucesso!'
            });
            return true;
        }
    };

    useEffect(async () => {
        const informationButton = objectButton(selectValue);
        setInitialData(informationButton.initialData);
        setSchemaValidation(Yup.object().shape(informationButton.schema));
    }, [selectValue]);

    return (
        <S.Keyword>
            {!editButton ? (
                <>
                    <p
                        style={{
                            textAlign: 'center',
                            display: buttonArray?.length > 0 && 'none'
                        }}
                    >
                        Não há botões adicionados!
                    </p>

                    {buttonArray?.map((item, index) => (
                        <S.ContainerSwitch key={index.toString()}>
                            <Button
                                variant="ghost"
                                size="tall"
                                onClick={() => setElementEdit(item)}
                            >
                                {item?.title}
                            </Button>
                            <div>
                                <Button
                                    variant="primary"
                                    icon="edit"
                                    onClick={() => setElementEdit(item)}
                                />
                                <Button
                                    variant="delete"
                                    icon="trash"
                                    onClick={() => removeButtonAction(item)}
                                />
                            </div>
                        </S.ContainerSwitch>
                    ))}
                </>
            ) : (
                <Formik
                    initialValues={initialData || {}}
                    validationSchema={schemaValidation}
                >
                    {({
                        handleChange,
                        values,
                        handleBlur,
                        resetForm,
                        errors,
                        touched
                    }) => (
                        <Form>
                            <S.ContentTab>
                                <ButtonCreate
                                    values={values}
                                    type={selectValue}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                    setSelectValue={setSelectValue}
                                    isEdit={isEdit}
                                />
                                <S.SidebarFooter>
                                    <Button
                                        variant="ghost"
                                        disabled={
                                            (Object.keys(errors).length === 0 &&
                                                Object.keys(values).length ===
                                                    0) ||
                                            Object.keys(errors).length > 0
                                        }
                                        onClick={() => setEditButton(false)}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        variant="primary"
                                        disabled={
                                            (Object.keys(errors).length === 0 &&
                                                Object.keys(values).length ===
                                                    0) ||
                                            Object.keys(errors).length > 0
                                        }
                                        onClick={() =>
                                            editButtonAction(
                                                values,
                                                errors,
                                                resetForm
                                            )
                                        }
                                    >
                                        Alterar botão
                                    </Button>
                                </S.SidebarFooter>
                            </S.ContentTab>
                        </Form>
                    )}
                </Formik>
            )}
        </S.Keyword>
    );
};

