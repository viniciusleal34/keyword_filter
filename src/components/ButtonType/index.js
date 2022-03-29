import React, { useState, useContext, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ContentTab } from './styles';
import { KeywordContext } from '../../context/KeywordContext';
import { showToast } from '../../services/common-service';
import { ButtonCreate } from '../ButtonCreate';
import ProjectString from '../../constants/project-constants';
import { objectButton } from '../../utils/getInformationButtonType';
import Button from '../Button';

export function ButtonType() {
    const [selectValue, setSelectValue] = useState(ProjectString.TYPE_TEXT);
    const [initialData, setInitialData] = useState({});
    const [schemaValidation, setSchemaValidation] = useState(
        Yup.object().shape({
            title: Yup.string().required('O título é obrigatório'),
            value: Yup.string().required('O valor é obrigatória')
        })
    );

    const { buttonArray, setButtonArray, buttonKeywordCreate, isEdit } =
        useContext(KeywordContext);

    const handleSubmit = async (values, errors, resetForm) => {
        if (
            Object.keys(errors).length === 0 &&
            Object.keys(values).length !== 0 &&
            buttonArray?.length < 9
        ) {
            values.type = selectValue;
            values.position = buttonArray?.length;

            if (isEdit) {
                const response = await buttonKeywordCreate(values, resetForm);
                if (response === false) {
                    return false;
                }
                await setButtonArray((prevState) => [...prevState, response]);
                return true;
            }
            setButtonArray((prevState) => [...prevState, values]);
            showToast({
                type: 'success',
                message: 'Adicionado com sucesso!'
            });

            return resetForm({});
        }

        showToast({
            type: 'warning',
            message: 'Ops... Verifique suas informações!'
        });
        return false;
    };

    useEffect(() => {
        const informationButton = objectButton(selectValue);
        setInitialData(informationButton.initialData);
        setSchemaValidation(Yup.object().shape(informationButton.schema));
    }, [selectValue]);

    return (
        <Formik
            initialValues={initialData || {}}
            validationSchema={schemaValidation}
            onSubmit={handleSubmit}
        >
            {({
                handleChange,
                values,
                handleBlur,
                resetForm,
                errors,
                touched,
                setFieldValue
            }) => (
                <Form>
                    <ContentTab>
                        <ButtonCreate
                            values={values}
                            type={selectValue}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                            setSelectValue={setSelectValue}
                            setFieldValue={setFieldValue}
                        />
                        <Button
                            ariaLabel="add-button"
                            variant="ghost"
                            icon="add"
                            disabled={
                                (Object.keys(errors).length === 0 &&
                                    Object.keys(values).length === 0) ||
                                Object.keys(errors).length > 0 ||
                                buttonArray?.length > 9
                            }
                            onClick={() =>
                                handleSubmit(values, errors, resetForm)
                            }
                        >
                            Adicionar botão
                        </Button>
                    </ContentTab>
                </Form>
            )}
        </Formik>
    );
}
