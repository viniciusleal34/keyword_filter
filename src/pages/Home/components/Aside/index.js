import React,{ useState, useCallback, useContext } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import * as S from './styles';
import { ListButton } from '../ListButton';
import { KeywordContext } from '../../../../context/KeywordContext';
import { ButtonType } from '../../../../components/ButtonType';
import { TextComponents } from '../../../../components/TextComponents';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

export const Aside = ({ setOpen }) => {
    const [element, setElement] = useState({});
    const [visible, setVisible] = useState(false);
    const {
        keywordCreate,
        isEdit,
        previewComponent,
        initialDataKeyword,
        keywordUpdate
    } = useContext(KeywordContext);
    const [isButtons, setIsButtons] = useState(
        initialDataKeyword?.keyword !== '' || false
    );

    const schemaValidation = Yup.object().shape({
        keyword: Yup.string().required('A palavra chave é obrigatória'),
        title: Yup.string(),
        menuMessage: Yup.string().required('A mensagem é obrigatória'),
        id: Yup.string().required('O ID do bot roteador é obrigatória')
    });

    const handleEnable = useCallback(
        (value) => {
            setIsButtons(value);
        },
        [isButtons]
    );

    const handleSubmit = async (values, resetForm) => {
        if (isEdit) {
            await keywordUpdate(values, setOpen);
            return false;
        }

        await keywordCreate(values, resetForm, setIsButtons, setOpen);
        return true;
    };

    const previewButton = async (values) => {
        const request = await previewComponent(values);
        setElement(request);
        setVisible(true);
    };

    return (
        <S.Container>
            {Object.keys(element).length > 0 && (
                <TextComponents
                    open={visible}
                    buttonObject={element}
                    setOpen={setVisible}
                />
            )}

            <Formik
                onSubmit={handleSubmit}
                initialValues={initialDataKeyword}
                validationSchema={schemaValidation}
            >
                {({
                    values,
                    handleBlur,
                    errors,
                    touched,
                    resetForm,
                    setFieldValue
                }) => (
                    <Form>
                        <S.SidebarCat>
                            <S.SidebarMain>
                                <Input
                                    name="keyword"
                                    label="Palavra chave"
                                    value={values?.keyword || ''}
                                    placeholder="Adicionar palavra chave"
                                    onChange={(e) => {
                                        setFieldValue('keyword', e.target.value);
                                    }}
                                    onBlur={handleBlur}
                                    danger={!!errors.keyword && touched.keyword}
                                    errorMessage={errors.keyword}                                    
                                />
                                <Input
                                    name="title"
                                    label="Titulo"
                                    placeholder="Adicionar um titulo para o resposta"
                                    value={values?.title || ''}
                                    onChange={(e) => {
                                        setFieldValue('title', e.target.value);
                                    }}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    name="menuMessage"
                                    is-textarea
                                    label="Conteúdo resposta"
                                    placeholder="Action descripition"
                                    rows={4}
                                    value={values?.menuMessage || ''}
                                    onChange={(e) => {
                                        setFieldValue('menuMessage', e.target.value);
                                    }}
                                    onBlur={handleBlur}
                                    danger={
                                        !!errors.menuMessage &&
                                        touched.menuMessage
                                    }
                                    errorMessage={errors.menuMessage}
                                    errors={errors.menuMessage}

                                />

                                <S.bdsSwitch>
                                    <bds-typo
                                        variant="fs-12"
                                        bold="bold"
                                        margin="true"
                                    >
                                        Adicionar botão na resposta?
                                    </bds-typo>
                                    <S.ContentView>
                                        <bds-switch
                                            data-testid="switch"
                                            name="switch"
                                            checked={isButtons}
                                            onInput={(e) =>
                                                handleEnable(e.target.checked)
                                            }
                                        />
                                        <Button
                                            variant="secudary"
                                            icon="eye-open"
                                            onClick={() =>
                                                previewButton(values)
                                            }
                                        />
                                    </S.ContentView>
                                </S.bdsSwitch>
                                {isButtons && (
                                    <>
                                        <bds-tabs tab="tab2">
                                            <bds-tab
                                                group="tab2"
                                                label="Lista de botões"
                                            />
                                            <bds-tab
                                                group="tab1"
                                                label="Adicionar botão"
                                            />
                                        </bds-tabs>
                                        <bds-tab-panel  group="tab2">
                                            <ListButton />
                                        </bds-tab-panel>
                                        <bds-tab-panel group="tab1">
                                            <ButtonType />
                                        </bds-tab-panel>
                                    </>
                                )}
                            </S.SidebarMain>
                            <S.SidebarFooter>
                                <Button
                                    variant="tertiary"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={() =>
                                        handleSubmit(values, resetForm)
                                    }
                                >
                                    Salvar
                                </Button>
                            </S.SidebarFooter>
                        </S.SidebarCat>
                    </Form>
                )}
            </Formik>
        </S.Container>
    );
};

Aside.propTypes = {
    setOpen: PropTypes.func
};

